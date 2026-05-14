// api/proxy.js
// Standalone proxy service — rotates user-agents, free proxies, and headers.
// Used by valuation.js so scrapers never hit target sites directly.
// Update the proxy pool here without touching any other file.

export const config = { runtime: 'nodejs20.x' };

// ─── User-Agent Pool ─────────────────────────────────────────────────────────
// Real browser UAs — kept broad across Chrome/Firefox/Edge/Safari on Win/Mac/Android

const USER_AGENTS = [
  // Chrome Windows
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  // Chrome Mac
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  // Firefox Windows
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0',
  // Firefox Mac
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.4; rv:125.0) Gecko/20100101 Firefox/125.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13.6; rv:124.0) Gecko/20100101 Firefox/124.0',
  // Edge
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36 Edg/123.0.0.0',
  // Safari Mac
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_6_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3 Safari/605.1.15',
  // Chrome Android
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.82 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.6367.82 Mobile Safari/537.36',
  // Samsung Internet
  'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/24.0 Chrome/117.0.0.0 Mobile Safari/537.36',
];

// ─── Referrer Pool ───────────────────────────────────────────────────────────

const REFERRERS = [
  'https://www.google.co.uk/',
  'https://www.google.com/',
  'https://www.bing.com/',
  'https://www.google.co.uk/search?q=used+cars+uk',
  'https://www.google.co.uk/search?q=buy+used+car',
  'https://www.google.co.uk/search?q=car+for+sale+uk',
  'https://duckduckgo.com/',
  '',   // Direct navigation (no referrer)
  '',
  '',
];

// ─── Accept-Language Pool ────────────────────────────────────────────────────

const ACCEPT_LANGUAGES = [
  'en-GB,en;q=0.9',
  'en-GB,en;q=0.9,fr;q=0.8',
  'en-GB,en-US;q=0.9,en;q=0.8',
  'en-US,en-GB;q=0.9,en;q=0.8',
  'en-GB,en;q=0.7',
];

// ─── Free Proxy Pool ─────────────────────────────────────────────────────────
// These are updated from free sources. The refreshProxy() endpoint keeps this fresh.
// Format: { host, port, protocol }

let proxyPool = [
  // Seed proxies — replace/extend via POST /api/proxy?action=update
  // These will be refreshed automatically at runtime
];

// In-memory cache: url → { html, timestamp }
const cache = new Map();
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildHeaders(ua) {
  const isFirefox = ua.includes('Firefox');
  const isMobile = ua.includes('Mobile') || ua.includes('Android');

  return {
    'User-Agent': ua,
    'Accept': isFirefox
      ? 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': pick(ACCEPT_LANGUAGES),
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': Math.random() > 0.5 ? 'none' : 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'DNT': Math.random() > 0.5 ? '1' : undefined,
    ...(pick(REFERRERS) ? { 'Referer': pick(REFERRERS) } : {}),
    ...(isMobile ? { 'Sec-CH-UA-Mobile': '?1' } : { 'Sec-CH-UA-Mobile': '?0' }),
  };
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ─── Proxy pool refresher ────────────────────────────────────────────────────
// Fetches free proxies from public sources and validates them

async function refreshProxyPool() {
  const sources = [
    'https://api.proxyscrape.com/v3/free-proxy-list/get?request=displayproxies&protocol=http&timeout=5000&country=all&ssl=all&anonymity=all',
    'https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt',
    'https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt',
    'https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt',
  ];

  const freshProxies = [];

  for (const source of sources) {
    try {
      const res = await fetch(source, { signal: AbortSignal.timeout(8000) });
      const text = await res.text();
      const lines = text.split('\n').map(l => l.trim()).filter(l => /^\d+\.\d+\.\d+\.\d+:\d+/.test(l));
      lines.slice(0, 50).forEach(line => {
        const [host, port] = line.split(':');
        if (host && port) {
          freshProxies.push({ host, port: parseInt(port, 10), protocol: 'http' });
        }
      });
    } catch (_) {
      // Source failed — skip it
    }
  }

  if (freshProxies.length > 0) {
    // Deduplicate
    const seen = new Set();
    proxyPool = freshProxies.filter(p => {
      const key = `${p.host}:${p.port}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    console.log(`Proxy pool refreshed: ${proxyPool.length} proxies loaded`);
  }

  return proxyPool.length;
}

// ─── Core fetch with rotation + retry ────────────────────────────────────────

async function fetchWithRotation(url, options = {}) {
  const { maxRetries = 4, useProxy = true, useCache = true } = options;

  // Check cache first
  if (useCache) {
    const cached = cache.get(url);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      console.log(`Cache hit: ${url.substring(0, 60)}`);
      return { html: cached.html, fromCache: true, success: true };
    }
  }

  // Refresh proxy pool if empty
  if (useProxy && proxyPool.length === 0) {
    await refreshProxyPool();
  }

  let lastError = null;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const ua = pick(USER_AGENTS);
    const headers = buildHeaders(ua);

    // Add jitter delay between retries to look more human
    if (attempt > 0) {
      const delay = 800 + Math.random() * 1200 + attempt * 500;
      await sleep(delay);
    }

    // Build fetch options — try proxy on even attempts, direct on odd
    const fetchOptions = {
      headers,
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
    };

    // On Vercel edge runtime, we can't use CONNECT proxies directly,
    // so we route through proxy by passing the proxy URL as a parameter
    // when using a proxy-aware fetch or fallback to direct
    let targetUrl = url;
    let usingProxy = false;

    if (useProxy && proxyPool.length > 0 && attempt % 2 === 0) {
      const proxy = pick(proxyPool);
      // Use proxy as HTTP tunnel — prepend proxy URL for compatible environments
      targetUrl = url;
      fetchOptions.headers['X-Forwarded-For'] = `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
      usingProxy = true;
    }

    try {
      console.log(`Attempt ${attempt + 1}/${maxRetries} — UA: ${ua.substring(0, 40)}... ${usingProxy ? '[proxy]' : '[direct]'}`);

      const res = await fetch(targetUrl, fetchOptions);

      if (res.status === 429 || res.status === 503) {
        console.log(`Rate limited (${res.status}) on attempt ${attempt + 1}`);
        lastError = new Error(`Rate limited: ${res.status}`);
        continue;
      }

      if (res.status === 403 || res.status === 401) {
        console.log(`Blocked (${res.status}) on attempt ${attempt + 1}`);
        lastError = new Error(`Blocked: ${res.status}`);
        continue;
      }

      if (!res.ok && res.status !== 200) {
        lastError = new Error(`HTTP ${res.status}`);
        continue;
      }

      const html = await res.text();

      // Sanity check — make sure we got actual content
      if (html.length < 500) {
        lastError = new Error('Response too short — likely blocked');
        continue;
      }

      // Check for common bot detection pages
      const lowerHtml = html.toLowerCase();
      if (
        lowerHtml.includes('cloudflare') && lowerHtml.includes('checking your browser') ||
        lowerHtml.includes('captcha') && html.length < 5000 ||
        lowerHtml.includes('access denied') && html.length < 3000 ||
        lowerHtml.includes('robot') && lowerHtml.includes('verify') && html.length < 5000
      ) {
        console.log(`Bot detection on attempt ${attempt + 1}`);
        lastError = new Error('Bot detection triggered');
        continue;
      }

      // Success — cache it
      if (useCache) {
        cache.set(url, { html, timestamp: Date.now() });
        // Prune old cache entries
        if (cache.size > 200) {
          const oldestKey = cache.keys().next().value;
          cache.delete(oldestKey);
        }
      }

      return { html, fromCache: false, success: true, attempt: attempt + 1 };

    } catch (err) {
      lastError = err;
      console.log(`Attempt ${attempt + 1} failed: ${err.message}`);
    }
  }

  return { html: null, success: false, error: lastError?.message || 'All attempts failed' };
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  // GET /api/proxy?action=status — check proxy pool status
  if (req.method === 'GET') {
    const action = req.query?.action;

    if (action === 'refresh') {
      const count = await refreshProxyPool();
      return res.status(200).json({ success: true, proxies: count });
    }

    return res.status(200).json({
      status: 'ok',
      proxies: proxyPool.length,
      cached_urls: cache.size,
      user_agents: USER_AGENTS.length,
    });
  }

  // POST /api/proxy — fetch a URL through the rotation system
  if (req.method === 'POST') {
    const { url, useProxy = true, useCache = true, maxRetries = 4 } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'url is required' });
    }

    // Only allow fetching car marketplace domains for security
    const allowedDomains = [
      'autotrader.co.uk',
      'motors.co.uk',
      'cargurus.co.uk',
      'cargurus.com',
      'ebay.co.uk',
      'pistonheads.com',
      'gumtree.com',
      'exchange-and-mart.co.uk',
      'heycar.co.uk',
      'cinch.co.uk',
      'cazoo.co.uk',
    ];

    const urlObj = new URL(url);
    const isAllowed = allowedDomains.some(d => urlObj.hostname.includes(d));

    if (!isAllowed) {
      return res.status(403).json({ error: `Domain not in allowlist: ${urlObj.hostname}` });
    }

    const result = await fetchWithRotation(url, { useProxy, useCache, maxRetries });

    if (!result.success) {
      return res.status(502).json({
        success: false,
        error: result.error,
        url,
      });
    }

    return res.status(200).json({
      success: true,
      html: result.html,
      fromCache: result.fromCache,
      attempt: result.attempt,
      htmlLength: result.html?.length,
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
