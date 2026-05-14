// api/valuation.js
// Scrapes live listings from UK used car marketplaces, then uses Claude
// to synthesise a realistic trade valuation from the real data.

export const config = { runtime: 'nodejs20.x' };

// ─── Helpers ────────────────────────────────────────────────────────────────

function buildHeaders() {
  return {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,' +
      'image/webp,*/*;q=0.8',
    'Accept-Language': 'en-GB,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Upgrade-Insecure-Requests': '1',
  };
}

function extractPrices(html) {
  const prices = [];
  // Match £ amounts between £500 and £500,000
  const patterns = [
    /£([\d,]+)/g,
    /"price[^"]*"[^:]*:\s*"?(\d{4,6})"?/gi,
    /data-price="(\d{4,6})"/gi,
    /"amount":\s*(\d{4,6})/gi,
  ];
  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(html)) !== null) {
      const val = parseInt(m[1].replace(/,/g, ''), 10);
      if (val >= 500 && val <= 500000) prices.push(val);
    }
  }
  return prices;
}

function median(arr) {
  if (!arr.length) return null;
  const s = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round((s[mid - 1] + s[mid]) / 2);
}

function mean(arr) {
  if (!arr.length) return null;
  return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
}

// Remove outliers beyond 2 standard deviations
function removeOutliers(arr) {
  if (arr.length < 4) return arr;
  const avg = mean(arr);
  const std = Math.sqrt(arr.reduce((s, v) => s + Math.pow(v - avg, 2), 0) / arr.length);
  return arr.filter(v => Math.abs(v - avg) <= 2 * std);
}

// ─── Scrapers ────────────────────────────────────────────────────────────────

async function scrapeAutoTrader(make, model, yearFrom, yearTo) {
  try {
    const params = new URLSearchParams({
      sort: 'relevance',
      radius: '1500',
      make: make.toUpperCase(),
      model: model.toUpperCase(),
      'year-from': yearFrom,
      'year-to': yearTo,
      'search-results-price-type': 'total-price',
      'search-results-year': 'select-year',
    });
    const url = `https://www.autotrader.co.uk/car-search?${params}`;
    const res = await fetch(url, { headers: buildHeaders(), redirect: 'follow' });
    const html = await res.text();

    // AutoTrader embeds JSON state in a script tag
    const jsonMatch = html.match(/__PRELOADED_STATE__\s*=\s*({.+?});?\s*<\/script>/s);
    const prices = [];

    if (jsonMatch) {
      try {
        const state = JSON.parse(jsonMatch[1]);
        const listings = state?.search?.listings || state?.results?.listings || [];
        listings.forEach(l => {
          const p = l?.price || l?.pricing?.retailPrice || l?.vehicle?.price;
          if (p) {
            const val = parseInt(String(p).replace(/[^0-9]/g, ''), 10);
            if (val >= 500 && val <= 500000) prices.push(val);
          }
        });
      } catch (_) { /* fall through to regex */ }
    }

    if (!prices.length) {
      extractPrices(html).forEach(p => prices.push(p));
    }

    // Count listing mentions
    const countMatch = html.match(/(\d[\d,]*)\s*(used\s*cars?|results?|listings?)/i);
    const totalCount = countMatch ? parseInt(countMatch[1].replace(/,/g, ''), 10) : prices.length;

    const clean = removeOutliers(prices);
    return { name: 'AutoTrader', prices: clean, totalListings: totalCount, url };
  } catch (e) {
    console.error('AutoTrader scrape failed:', e.message);
    return { name: 'AutoTrader', prices: [], totalListings: 0, error: e.message };
  }
}

async function scrapeMotors(make, model, yearFrom) {
  try {
    const slug = `${make.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, '-')}`;
    const params = new URLSearchParams({
      make, model,
      'year-from': yearFrom,
      distance: 'national',
    });
    const url = `https://www.motors.co.uk/search/car/results/?${params}`;
    const res = await fetch(url, { headers: buildHeaders(), redirect: 'follow' });
    const html = await res.text();

    const prices = removeOutliers(extractPrices(html));
    const countMatch = html.match(/(\d[\d,]*)\s*(cars?|results?|listings?)/i);
    const totalCount = countMatch ? parseInt(countMatch[1].replace(/,/g, ''), 10) : prices.length;

    return { name: 'Motors.co.uk', prices, totalListings: totalCount, url };
  } catch (e) {
    console.error('Motors scrape failed:', e.message);
    return { name: 'Motors.co.uk', prices: [], totalListings: 0, error: e.message };
  }
}

async function scrapeCarGurus(make, model, yearFrom, yearTo) {
  try {
    const params = new URLSearchParams({
      zip: 'SW1A1AA',
      distance: '100000',
      selectedEntity: `d:${make.toLowerCase()};${model.toLowerCase().replace(/\s+/g, '_')}`,
      trim: '',
      yearMin: yearFrom,
      yearMax: yearTo,
      sortDir: 'ASC',
      sortType: 'PRICE',
      listingTypes: 'used',
    });
    const url = `https://www.cargurus.co.uk/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?${params}`;
    const res = await fetch(url, { headers: buildHeaders(), redirect: 'follow' });
    const html = await res.text();

    // CarGurus embeds listing JSON
    const jsonMatch = html.match(/window\.cargurus_client_data\s*=\s*({.+?});\s*<\/script>/s) ||
                      html.match(/"listings"\s*:\s*(\[.+?\])/s);
    const prices = [];

    if (jsonMatch) {
      try {
        const raw = jsonMatch[1];
        const priceMatches = [...raw.matchAll(/"price"\s*:\s*(\d{4,6})/g)];
        priceMatches.forEach(m => {
          const val = parseInt(m[1], 10);
          if (val >= 500 && val <= 500000) prices.push(val);
        });
      } catch (_) { /* fall through */ }
    }

    if (!prices.length) extractPrices(html).forEach(p => prices.push(p));

    const clean = removeOutliers(prices);
    return { name: 'CarGurus', prices: clean, totalListings: clean.length, url };
  } catch (e) {
    console.error('CarGurus scrape failed:', e.message);
    return { name: 'CarGurus', prices: [], totalListings: 0, error: e.message };
  }
}

async function scrapeEbayMotors(make, model, yearFrom) {
  try {
    const query = encodeURIComponent(`${yearFrom} ${make} ${model}`);
    const url = `https://www.ebay.co.uk/sch/Cars/9801/i.html?_nkw=${query}&_sop=15&LH_ItemCondition=6000&_udlo=500&_udhi=500000`;
    const res = await fetch(url, { headers: buildHeaders(), redirect: 'follow' });
    const html = await res.text();

    // eBay embeds prices in data attributes
    const prices = [];
    const patterns = [
      /class="s-item__price"[^>]*>\s*£([\d,]+)/g,
      /itemprop="price"\s+content="([\d.]+)"/g,
    ];
    for (const p of patterns) {
      let m;
      while ((m = p.exec(html)) !== null) {
        const val = parseInt(m[1].replace(/[,.]/g, ''), 10);
        if (val >= 500 && val <= 500000) prices.push(val);
      }
    }
    if (!prices.length) extractPrices(html).forEach(p => prices.push(p));

    const clean = removeOutliers(prices);
    return { name: 'eBay Motors', prices: clean, totalListings: clean.length, url };
  } catch (e) {
    console.error('eBay scrape failed:', e.message);
    return { name: 'eBay Motors', prices: [], totalListings: 0, error: e.message };
  }
}

async function scrapePistonHeads(make, model, yearFrom) {
  try {
    const makeSlug = make.toLowerCase().replace(/\s+/g, '-');
    const modelSlug = model.toLowerCase().replace(/\s+/g, '-');
    const url = `https://www.pistonheads.com/classifieds/used-cars/${makeSlug}/${modelSlug}?fromYear=${yearFrom}&toYear=${new Date().getFullYear()}`;
    const res = await fetch(url, { headers: buildHeaders(), redirect: 'follow' });
    const html = await res.text();

    const prices = removeOutliers(extractPrices(html));
    return { name: 'PistonHeads', prices, totalListings: prices.length, url };
  } catch (e) {
    console.error('PistonHeads scrape failed:', e.message);
    return { name: 'PistonHeads', prices: [], totalListings: 0, error: e.message };
  }
}

// ─── Synthesise valuation via Claude ────────────────────────────────────────

async function synthesiseValuation(vehicleDetails, scrapedData) {
  const { make, model, year, variant, fuel, gearbox, mileage, condition, colour, extras } = vehicleDetails;

  // Build a summary of scraped data for Claude to reason over
  const dataSummary = scrapedData.map(site => {
    if (!site.prices.length) return `${site.name}: No data retrieved`;
    return (
      `${site.name}: ${site.prices.length} prices found | ` +
      `Median £${median(site.prices)?.toLocaleString()} | ` +
      `Mean £${mean(site.prices)?.toLocaleString()} | ` +
      `Range £${Math.min(...site.prices).toLocaleString()}–£${Math.max(...site.prices).toLocaleString()} | ` +
      `Total listings seen: ${site.totalListings}`
    );
  }).join('\n');

  const allPrices = scrapedData.flatMap(s => s.prices);
  const hasRealData = allPrices.length > 0;

  const prompt = `You are a professional UK used car trade valuation expert.

${hasRealData
  ? `I have scraped LIVE listing data from UK used car marketplaces for the vehicle below. Use this real data as the primary basis for your valuation.`
  : `I attempted to scrape live data but could not retrieve prices for this vehicle. Use your expert knowledge of the UK used car market to provide a realistic estimate.`}

VEHICLE:
- ${year} ${make} ${model}${variant && variant !== 'Other' ? ' ' + variant : ''}
- Fuel: ${fuel || 'unspecified'} | Gearbox: ${gearbox || 'unspecified'}
- Mileage: ${parseInt(mileage).toLocaleString()} miles
- Condition: ${condition}
${colour ? `- Colour: ${colour}` : ''}
${extras ? `- Notes: ${extras}` : ''}

LIVE SCRAPED MARKET DATA:
${dataSummary}

${hasRealData ? `Total data points collected: ${allPrices.length} prices across all platforms.
Overall market median: £${median(allPrices)?.toLocaleString()}
Overall market mean: £${mean(allPrices)?.toLocaleString()}
Full price range: £${Math.min(...allPrices).toLocaleString()} – £${Math.max(...allPrices).toLocaleString()}` : ''}

INSTRUCTIONS:
- Base your valuation on the scraped data where available, adjusting for mileage, condition, variant and market factors
- The base_value should be a realistic trade/part-exchange value (slightly below retail asking prices)
- range_low is a conservative trade value; range_high is strong retail asking price
- For each platform, use the scraped data if available; estimate if not
- confidence should reflect how much real data was available (more data = higher confidence)
- insight should be 2-3 sentences of genuinely useful trader advice about this specific car

Return ONLY a valid JSON object, no markdown, no backticks:
{
  "base_value": 12500,
  "range_low": 11000,
  "range_high": 14000,
  "confidence": 85,
  "data_source": "live_scraped",
  "markets": [
    {"name": "AutoTrader", "avg_price": 13200, "listings": 47, "tier": "high"},
    {"name": "Motors.co.uk", "avg_price": 12400, "listings": 23, "tier": "mid"},
    {"name": "CarGurus", "avg_price": 12100, "listings": 31, "tier": "mid"},
    {"name": "eBay Motors", "avg_price": 11200, "listings": 18, "tier": "low"},
    {"name": "PistonHeads", "avg_price": 13500, "listings": 12, "tier": "high"}
  ],
  "insight": "Trader insight here."
}`;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error('Claude API error: ' + response.status);
  }

  const data = await response.json();
  const text = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
  const clean = text.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

// ─── Main handler ────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { make, model, year, variant, fuel, gearbox, mileage, condition, colour, extras } = req.body;

  if (!make || !model || !year || !mileage) {
    return res.status(400).json({ error: 'Missing required fields: make, model, year, mileage' });
  }

  try {
    const yearInt = parseInt(year, 10);
    const yearFrom = Math.max(yearInt - 1, 1980);
    const yearTo = yearInt + 1;

    console.log(`Scraping for: ${year} ${make} ${model}`);

    // Run all scrapers in parallel
    const [autoTrader, motors, carGurus, ebay, pistonHeads] = await Promise.allSettled([
      scrapeAutoTrader(make, model, yearFrom, yearTo),
      scrapeMotors(make, model, yearFrom),
      scrapeCarGurus(make, model, yearFrom, yearTo),
      scrapeEbayMotors(make, model, yearFrom),
      scrapePistonHeads(make, model, yearFrom),
    ]);

    const scrapedData = [autoTrader, motors, carGurus, ebay, pistonHeads].map(r =>
      r.status === 'fulfilled' ? r.value : { name: 'Unknown', prices: [], totalListings: 0 }
    );

    const totalPrices = scrapedData.reduce((n, s) => n + s.prices.length, 0);
    console.log(`Scraped ${totalPrices} prices across all platforms`);

    // Synthesise with Claude
    const valuation = await synthesiseValuation(
      { make, model, year, variant, fuel, gearbox, mileage, condition, colour, extras },
      scrapedData
    );

    // Attach raw scrape metadata for transparency
    valuation.scrape_meta = scrapedData.map(s => ({
      name: s.name,
      prices_found: s.prices.length,
      median: median(s.prices),
      error: s.error || null,
    }));

    return res.status(200).json(valuation);

  } catch (err) {
    console.error('Valuation error:', err);
    return res.status(500).json({ error: err.message || 'Valuation failed. Please try again.' });
  }
}
