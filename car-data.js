const CAR_DATA = {
  "Abarth": {
    "124 Spider": ["Base","Lusso","Competizione"],
    "500": ["Base","Esseesse","Competizione","595","595 Turismo","595 Competizione"],
    "595": ["Base","Turismo","Competizione","Pista"],
    "695": ["Base","Tributo Ferrari","Edizione Maserati","Rivale","Biposto"]
  },
  "Acura": {
    "ILX": ["Base","Premium","Technology","A-Spec","A-Spec Technology"],
    "MDX": ["Base","Technology","SH-AWD","Advance","PMC Edition","Type S"],
    "NSX": ["Base","Type S"],
    "RDX": ["Base","Technology","SH-AWD","A-Spec","Advance","PMC Edition"],
    "RLX": ["Base","Technology","Sport Hybrid","Sport Hybrid Advance"],
    "TLX": ["Base","Technology","SH-AWD","A-Spec","Advance","Type S","PMC Edition"],
    "ZDX": ["Base","A-Spec","Type S"]
  },
  "Alfa Romeo": {
    "Giulia": ["Base","Sprint","Ti","Ti Sport","Ti Sport Carbon","Veloce","Quadrifoglio"],
    "Giulietta": ["Base","Sprint","Veloce","Quadrifoglio Verde"],
    "GTV": ["1750","2000"],
    "MiTo": ["Base","Sprint","Distinctive","Veloce","Quadrifoglio Verde"],
    "Stelvio": ["Base","Sprint","Ti","Ti Sport","Ti Sport Carbon","Veloce","Quadrifoglio"],
    "Tonale": ["Sprint","Ti","Veloce","Speciale"],
    "4C": ["Coupe","Spider","Spider Italia"],
    "8C": ["Competizione","Spider"]
  },
  "Aston Martin": {
    "DB11": ["V8","V12","AMR","Volante V8","Volante V12","Volante AMR"],
    "DB12": ["Coupe","Volante"],
    "DBS": ["Base","Superleggera","Volante","59"],
    "DBX": ["Base","707"],
    "Vantage": ["Base","AMR","Roadster","F1 Edition","GT4"],
    "Valkyrie": ["Base","AMR Pro"],
    "Vanquish": ["Base","S","Zagato","Volante"]
  },
  "Audi": {
    "A1": ["SE","Sport","S Line","Black Edition","Vorsprung","Citycarver"],
    "A3": ["SE","Sport","S Line","Black Edition","Edition 1","Vorsprung","S3","RS3"],
    "A4": ["SE","Sport","S Line","Black Edition","Edition 1","Vorsprung","S4","RS4"],
    "A5": ["SE","Sport","S Line","Black Edition","Edition 1","Vorsprung","S5","RS5"],
    "A6": ["SE","Sport","S Line","Black Edition","Edition 1","Vorsprung","S6","RS6"],
    "A7": ["SE","Sport","S Line","Black Edition","Vorsprung","S7","RS7"],
    "A8": ["SE","Sport","S Line","Black Edition","Vorsprung","S8","L"],
    "E-tron": ["Base","Sport","S Line","S","GT","GT Quattro","RS GT"],
    "Q2": ["SE","Sport","S Line","Black Edition","Edition 1","Vorsprung"],
    "Q3": ["SE","Sport","S Line","Black Edition","Vorsprung","RS Q3"],
    "Q4 e-tron": ["Base","Sport","S Line","Black Edition","Edition 1","Vorsprung"],
    "Q5": ["SE","Sport","S Line","Black Edition","Vorsprung","SQ5","RSQ5"],
    "Q7": ["SE","Sport","S Line","Black Edition","Vorsprung","SQ7"],
    "Q8": ["SE","Sport","S Line","Black Edition","Vorsprung","SQ8","RS Q8"],
    "R8": ["V10","V10 Plus","V10 Performance","V10 Spyder","RWD"],
    "TT": ["Sport","S Line","TTS","TTRS","Roadster"],
    "e-tron GT": ["Base","RS"]
  },
  "Bentley": {
    "Bentayga": ["Base","V8","Hybrid","Speed","Azure","EWB"],
    "Continental GT": ["V8","W12","Speed","Mulliner","Azure","GTC V8","GTC W12","GTC Speed"],
    "Flying Spur": ["V6","V8","W12","Speed","Mulliner","Azure","Hybrid"],
    "Mulsanne": ["Base","Speed","Extended Wheelbase","6.75 Edition"]
  },
  "BMW": {
    "1 Series": ["SE","Sport","M Sport","M Sport Pro","Edition","M135i"],
    "2 Series": ["SE","Sport","M Sport","M Sport Pro","M240i","M2","Gran Coupe","Active Tourer"],
    "3 Series": ["SE","Sport","M Sport","M Sport Pro","Edition","M340i","M3"],
    "4 Series": ["Sport","M Sport","M Sport Pro","M440i","M4","Gran Coupe","Convertible"],
    "5 Series": ["SE","Sport","M Sport","M Sport Pro","M550i","M5"],
    "6 Series": ["SE","Sport","M Sport","Gran Turismo","M6"],
    "7 Series": ["SE","Sport","M Sport","M760i","Alpina B7"],
    "8 Series": ["M Sport","M850i","M8","Gran Coupe","Convertible"],
    "iX": ["xDrive40","xDrive50","M60"],
    "iX1": ["xDrive20","xDrive30"],
    "iX3": ["Inspiring","M Sport"],
    "i3": ["Base","S","120Ah"],
    "i4": ["eDrive40","M50"],
    "i5": ["eDrive40","M60"],
    "i7": ["xDrive60","M70"],
    "X1": ["SE","Sport","M Sport","xDrive20","xDrive25e"],
    "X2": ["SE","Sport","M Sport","M35i"],
    "X3": ["SE","Sport","M Sport","M40i","M","xDrive20","xDrive30"],
    "X4": ["M Sport","M40i","M"],
    "X5": ["SE","Sport","M Sport","xDrive40","xDrive45e","M50i","M"],
    "X6": ["Sport","M Sport","M50i","M"],
    "X7": ["xDrive40","M50i","Alpina XB7"],
    "Z4": ["sDrive20","M40i","M"]
  },
  "Bugatti": {
    "Chiron": ["Base","Sport","Pur Sport","Super Sport","Super Sport 300+","Profilee"],
    "Divo": ["Base"],
    "Veyron": ["Base","Grand Sport","Super Sport","Vitesse"],
    "Bolide": ["Base"],
    "Mistral": ["Base"]
  },
  "Buick": {
    "Enclave": ["Preferred","Essence","Premium","Avenir"],
    "Encore": ["Preferred","Essence","Sport Touring","Select"],
    "Encore GX": ["Preferred","Essence","Select","Sport Touring","Avenir"],
    "Envision": ["Preferred","Essence","Premium","Avenir","Sport Touring"],
    "LaCrosse": ["Preferred","Essence","Premium","Avenir"],
    "Regal": ["Preferred","Essence","GS","Sportback","TourX"]
  },
  "Cadillac": {
    "CT4": ["Luxury","Premium Luxury","Sport","V-Series","Blackwing"],
    "CT5": ["Luxury","Premium Luxury","Sport","V-Series","Blackwing","Platinum"],
    "Escalade": ["Luxury","Premium Luxury","Sport","Platinum","ESV","V"],
    "Lyriq": ["Luxury","Sport","Tech"],
    "XT4": ["Luxury","Premium Luxury","Sport","Platinum"],
    "XT5": ["Luxury","Premium Luxury","Sport","Platinum"],
    "XT6": ["Luxury","Premium Luxury","Sport","Platinum"]
  },
  "Caterham": {
    "Seven": ["170","270","360","420","620","R300","R400","R500","Superlight","CSR"]
  },
  "Chevrolet": {
    "Blazer": ["LS","LT","RS","Premier","SS"],
    "Bolt EV": ["LT","Premier"],
    "Bolt EUV": ["LT","Premier","Launch Edition"],
    "Camaro": ["LS","LT","LT1","SS","ZL1","ZL1 1LE","COPO","Convertible"],
    "Colorado": ["WT","LT","Z71","ZR2","Trail Boss"],
    "Corvette": ["1LT","2LT","3LT","Z06","ZR1","Grand Sport","E-Ray","Stingray"],
    "Equinox": ["LS","LT","RS","Premier","EV"],
    "Malibu": ["LS","LT","RS","Premier"],
    "Silverado": ["WT","Custom","LT","RST","LTZ","High Country","ZR2","Trail Boss"],
    "Suburban": ["LS","LT","RST","Z71","Premier","High Country"],
    "Tahoe": ["LS","LT","RST","Z71","Premier","High Country"],
    "Trailblazer": ["LS","LT","ACTIV","RS","Premier"],
    "Traverse": ["LS","LT","RS","Premier","High Country"]
  },
  "Chrysler": {
    "300": ["Touring","300S","Limited","C","Platinum","SRT8"],
    "Pacifica": ["Touring","Touring L","Touring L Plus","Limited","Pinnacle","Hybrid"],
    "Voyager": ["Base","LX"]
  },
  "Citroen": {
    "Berlingo": ["Feel","Shine","Shine Plus"],
    "C1": ["Touch","Feel","Flair"],
    "C3": ["Touch","Feel","Flair","Aircross","Shine"],
    "C3 Aircross": ["Touch","Feel","Flair","Shine","Max"],
    "C4": ["Sense","Shine","Shine Plus","C4 X"],
    "C5 Aircross": ["Sense","Shine","Shine Plus","Hybrid"],
    "C5 X": ["Shine","Shine Plus","Hybrid"],
    "Dispatch": ["Enterprise","Enterprise Plus"],
    "e-C4": ["Sense","Shine","Shine Plus"],
    "SpaceTourer": ["Feel","Shine","Business","Business Lounge"]
  },
  "Cupra": {
    "Ateca": ["Base","VZ"],
    "Born": ["Base","V1","V2","V3","e-Boost"],
    "Formentor": ["Base","VZ","VZ2","VZ5"],
    "Leon": ["Base","VZ","VZ Cup"],
    "Tavascan": ["Base","VZ"]
  },
  "Dacia": {
    "Duster": ["Access","Essential","Expression","Extreme","Journey"],
    "Jogger": ["Essential","Expression","Extreme","Hybrid"],
    "Sandero": ["Access","Essential","Expression","Extreme"],
    "Spring": ["Essential","Expression","Extreme"]
  },
  "Dodge": {
    "Challenger": ["SXT","GT","R/T","R/T Scat Pack","SRT Hellcat","SRT Hellcat Widebody","SRT Super Stock","Demon","Demon 170"],
    "Charger": ["SXT","GT","R/T","Scat Pack","SRT Hellcat","SRT Hellcat Widebody","SRT Super Stock","Daytona"],
    "Durango": ["SXT","GT","R/T","Citadel","SRT Hellcat","SRT 392"],
    "Hornet": ["GT","R/T","R/T Plus","Plug-In Hybrid"]
  },
  "DS": {
    "DS 3": ["Performance Line","Rivoli","Opera","Prestige","E-Tense"],
    "DS 4": ["Performance Line","Rivoli","Opera","E-Tense"],
    "DS 7": ["Performance Line","Rivoli","Opera","Grand Chic","E-Tense"],
    "DS 9": ["Performance Line","Rivoli","Opera","E-Tense"]
  },
  "Ferrari": {
    "296 GTB": ["Base","Assetto Fiorano"],
    "296 GTS": ["Base","Assetto Fiorano"],
    "488": ["GTB","Spider","Pista","Pista Spider"],
    "812": ["Superfast","GTS","Competizione","Competizione A"],
    "F8": ["Tributo","Spider"],
    "GTC4Lusso": ["Base","T"],
    "Portofino": ["Base","M"],
    "Roma": ["Base","Spider"],
    "SF90": ["Stradale","Spider","XX","XX Aperta"],
    "Purosangue": ["Base"]
  },
  "Fiat": {
    "124 Spider": ["Classica","Lusso","Abarth"],
    "500": ["Pop","Lounge","Sport","Abarth","Electric","500X","500L"],
    "500X": ["Pop","Lounge","Sport","Trekking","Urbana"],
    "500L": ["Pop","Lounge","Trekking","Wagon"],
    "Panda": ["Pop","Easy","City Cross","Cross","Hybrid"],
    "Tipo": ["Pop","Easy","Lounge","Sport","Cross","Station Wagon"],
    "Doblo": ["Base","Work Up","Trekking"]
  },
  "Ford": {
    "Bronco": ["Base","Big Bend","Black Diamond","Outer Banks","Badlands","Wildtrak","Everglades","Raptor","Heritage","Sport"],
    "EcoSport": ["Trend","Titanium","ST-Line","Active"],
    "Edge": ["SE","SEL","ST","ST-Line","Titanium"],
    "Escape": ["S","SE","SE Sport","SEL","Titanium","Plug-In Hybrid","ST-Line"],
    "Expedition": ["XL","XLT","Limited","King Ranch","Platinum","Timberline","Stealth","MAX"],
    "Explorer": ["Base","XLT","ST","Limited","King Ranch","Platinum","Timberline","ST-Line"],
    "F-150": ["XL","XLT","Lariat","King Ranch","Platinum","Limited","Raptor","Tremor","Lightning"],
    "Fiesta": ["Style","Zetec","ST-Line","Titanium","Active","ST","Vignale"],
    "Focus": ["Style","Zetec","ST-Line","Titanium","Active","ST","Vignale"],
    "Galaxy": ["Zetec","ST-Line","Titanium","Vignale"],
    "Kuga": ["Trend","ST-Line","ST-Line X","Titanium","Titanium X","Vignale","PHEV"],
    "Maverick": ["XL","XLT","Lariat","Tremor"],
    "Mondeo": ["Zetec","ST-Line","Titanium","Vignale","Active","Hybrid"],
    "Mustang": ["EcoBoost","GT","GT Premium","Mach 1","Shelby GT350","Shelby GT350R","Shelby GT500","Dark Horse","Mach-E"],
    "Mustang Mach-E": ["Select","Premium","California Route 1","GT","GT Performance Edition"],
    "Puma": ["Trend","Zetec","ST-Line","ST-Line X","Titanium","ST","Gold Edition"],
    "Ranger": ["XL","XLT","Lariat","Raptor","Limited","Wildtrak","Thunder"],
    "S-Max": ["Zetec","ST-Line","Titanium","Vignale"],
    "Transit": ["Base","Trend","Limited","Trail","Custom","Connect"]
  },
  "Genesis": {
    "G70": ["Standard","Advanced","Sport","Prestige"],
    "G80": ["Standard","Advanced","Sport","Prestige","Electrified"],
    "G90": ["Premium","Prestige","Prestige Long Wheelbase"],
    "GV60": ["Standard","Advanced","Sport","Sport Plus","Magma"],
    "GV70": ["Standard","Advanced","Sport","Sport Prestige","Electrified"],
    "GV80": ["Standard","Advanced","Prestige"]
  },
  "GMC": {
    "Acadia": ["SLE","SLT","AT4","Denali"],
    "Canyon": ["Elevation","AT4","Denali","AT4X"],
    "Sierra": ["Regular Cab","Double Cab","Crew Cab","SLE","SLT","AT4","Denali","AT4X","EV"],
    "Terrain": ["SLE","SLT","AT4","Denali"],
    "Yukon": ["SLE","SLT","AT4","Denali","XL"]
  },
  "Honda": {
    "Accord": ["LX","Sport","EX","EX-L","Touring","Hybrid","Sport Hybrid","Touring Hybrid"],
    "Civic": ["LX","Sport","EX","EX-L","Touring","Si","Type R","Hatchback"],
    "CR-V": ["LX","EX","EX-L","Touring","Hybrid","Sport","Sport-L","Sport Touring"],
    "HR-V": ["LX","Sport","EX","EX-L"],
    "Jazz": ["S","SE","SR","EX","Crosstar"],
    "Legend": ["Base"],
    "Odyssey": ["LX","EX","EX-L","Touring","Elite"],
    "Passport": ["Sport","EX-L","TrailSport","Elite"],
    "Pilot": ["LX","Sport","EX-L","TrailSport","Touring","Elite","Black Edition"],
      "Prologue": ["EX","EX-L","Touring"],
    "Ridgeline": ["Sport","RTL","RTL-E","Black Edition"],
    "ZR-V": ["Elegance","Advance","Sport","Sport Plus"]
  },
  "Hyundai": {
    "Bayon": ["SE Connect","Premium","Ultimate"],
    "Elantra": ["SE","SEL","N Line","Limited","N","Hybrid","Plug-In Hybrid"],
    "i10": ["SE Connect","Premium","Ultimate","N Line"],
    "i20": ["SE Connect","Premium","Ultimate","N","N Line"],
    "i30": ["SE Connect","Premium","Ultimate","N","N Line","Fastback","Estate","PHEV"],
    "Ioniq 5": ["Premium","Ultimate","Project 45","N"],
    "Ioniq 6": ["Premium","Ultimate"],
    "Kona": ["SE Connect","Premium","Ultimate","N","N Line","Electric","Hybrid"],
    "Nexo": ["Premium","Ultimate"],
    "Palisade": ["SE","SEL","Limited","Calligraphy"],
    "Santa Cruz": ["SE","SEL","SEL Premium","Limited"],
    "Santa Fe": ["SE","SEL","XRT","Calligraphy","Hybrid","Plug-In Hybrid"],
    "Sonata": ["SE","SEL","SEL Plus","Limited","N Line","Hybrid"],
    "Staria": ["Premium","Premium SE","Executive"],
    "Tucson": ["SE Connect","Premium","Ultimate","N Line","Hybrid","PHEV"],
    "Venue": ["SE","SEL","Denim"]
  },
  "Infiniti": {
    "Q50": ["Pure","Luxe","Sensory","Red Sport 400","Q50S"],
    "Q60": ["Pure","Luxe","Sensory","Red Sport 400","Q60S"],
    "QX50": ["Pure","Luxe","Sensory","Autograph"],
    "QX55": ["Pure","Luxe","Sensory","Autograph"],
    "QX60": ["Pure","Luxe","Sensory","Autograph"],
    "QX80": ["Luxe","Premium Select","Sensory","Autograph"]
  },
  "Jaguar": {
    "E-Pace": ["S","SE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Chequered Flag"],
    "F-Pace": ["S","SE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","SVR","P400e","Chequered Flag"],
    "F-Type": ["P300","P450","R","R-Dynamic","SVR","Zero","Heritage"],
    "I-Pace": ["S","SE","HSE","Black","EV400"],
    "XE": ["S","SE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Project 8"],
    "XF": ["S","SE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Chequered Flag"],
    "XJ": ["Portfolio","Premium Luxury","R-Sport","Autobiography","SVAutobiography"]
  },
  "Jeep": {
    "Cherokee": ["Sport","Latitude","Altitude","Limited","Trailhawk","Overland","80th Anniversary"],
    "Compass": ["Sport","Latitude","Longitude","Altitude","Limited","Trailhawk","80th Anniversary","Upland"],
    "Gladiator": ["Sport","Sport S","Altitude","Overland","Rubicon","Mojave","Willys","High Altitude"],
    "Grand Cherokee": ["Laredo","Altitude","Limited","Overland","Summit","Trailhawk","Trackhawk","4xe","4xE Summit","L"],
    "Renegade": ["Sport","Latitude","Longitude","Altitude","Limited","Trailhawk","80th Anniversary"],
    "Wrangler": ["Sport","Sport S","Willys","Sahara","Rubicon","Unlimited","392","4xe","High Altitude"]
  },
  "Kia": {
    "Ceed": ["2","3","GT-Line","GT-Line S","GT","Pro Ceed","Sportswagon","PHEV"],
    "EV6": ["Air","Wind","GT-Line","GT"],
    "EV9": ["Air","Wind","GT-Line","Earth","GT"],
    "Niro": ["2","3","4","GT-Line","GT-Line S","EV","Hybrid","PHEV"],
    "Picanto": ["2","3","GT-Line","X-Line"],
    "ProCeed": ["GT-Line","GT-Line S","GT"],
    "Rio": ["2","3","GT-Line","GT-Line S"],
    "Sorento": ["2","3","GT-Line","GT-Line S","PHEV","Hybrid"],
    "Soul": ["2","3","GT-Line","EV"],
    "Sportage": ["2","3","GT-Line","GT-Line S","PHEV","Hybrid"],
    "Stinger": ["GT-Line","GT","GT S"],
    "Stonic": ["2","3","GT-Line","GT-Line S"],
    "Telluride": ["LX","S","EX","SX","X-Line","X-Pro","SX Prestige"],
    "XCeed": ["2","3","GT-Line","GT-Line S","PHEV"]
  },
  "Lamborghini": {
    "Huracan": ["LP580-2","LP610-4","Evo","Evo Spyder","Evo RWD","Evo RWD Spyder","STO","Sterrato","Tecnica"],
    "Urus": ["Base","S","Performante"],
    "Revuelto": ["Base","Opera Unica"],
    "Sian": ["Coupe","Roadster"]
  },
  "Land Rover": {
    "Defender": ["90","110","130","S","SE","HSE","X","X-Dynamic","V8","Carpathian Edition","75th Limited Edition"],
    "Discovery": ["S","SE","HSE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Metropolitan Edition","Sport"],
    "Discovery Sport": ["S","SE","HSE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Urban Edition"],
    "Freelander": ["S","SE","HSE","Sport"],
    "Range Rover": ["SE","HSE","Vogue","Autobiography","SV","SV Bespoke","PHEV","Sport","Velar","Evoque"],
    "Range Rover Evoque": ["S","SE","HSE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Autobiography","Bronze Collection"],
    "Range Rover Sport": ["S","SE","HSE","Dynamic","Dynamic SE","Autobiography Dynamic","SVR","P400e","First Edition"],
    "Range Rover Velar": ["S","SE","HSE","R-Dynamic S","R-Dynamic SE","R-Dynamic HSE","Black","First Edition"]
  },
  "Lexus": {
    "CT": ["CT 200h","F Sport","Advance","Takumi"],
    "ES": ["ES 300h","F Sport","Premium","Luxury","Ultra Luxury"],
    "GS": ["GS 250","GS 300h","GS 350","F Sport","Luxury","Premier"],
    "GX": ["Base","Premium","Luxury","Overtrail","F Sport"],
    "IS": ["IS 300","IS 300h","IS 350","F Sport","Luxury","Premier"],
    "LC": ["LC 500","LC 500h","Inspiration","F Sport"],
    "LM": ["350","500h"],
    "LS": ["LS 500","LS 500h","F Sport","Premier","Luxury"],
    "LX": ["LX 500d","LX 600","Premium","Luxury","F Sport"],
    "NX": ["NX 250","NX 300","NX 350","NX 350h","NX 450h+","F Sport","Luxury"],
    "RC": ["RC 300","RC 300h","RC 350","F Sport","Luxury"],
    "RX": ["RX 350","RX 350h","RX 400h","RX 450h","RX 500h","F Sport","Luxury"],
    "UX": ["UX 200","UX 250h","F Sport","Luxury"]
  },
  "Lincoln": {
    "Aviator": ["Standard","Reserve","Black Label","Grand Touring"],
    "Corsair": ["Standard","Reserve","Black Label","Grand Touring"],
    "Nautilus": ["Standard","Reserve","Black Label"],
    "Navigator": ["Standard","Reserve","Black Label","L"]
  },
  "Lotus": {
    "Elise": ["111","111S","111R","SC","Cup","Sport","Sprint","Final Edition"],
    "Emira": ["First Edition","V6","i4","GT"],
    "Evija": ["Base"],
    "Evora": ["Base","S","400","GT430","Sport 410"],
    "Exige": ["S","Sport","Cup","V6","V6 Cup","Sport 390","Final Edition"]
  },
  "Maserati": {
    "Ghibli": ["Base","S","S Q4","GranLusso","GranSport","Trofeo","Hybrid"],
    "GranTurismo": ["Sport","Modena","Trofeo","Folgore"],
    "GranCabrio": ["Sport","Modena","Trofeo","Folgore"],
    "Grecale": ["GT","Modena","Trofeo","Folgore"],
    "Levante": ["Base","S","GranLusso","GranSport","Trofeo","Hybrid"],
    "MC20": ["Cielo","Coupe"],
    "Quattroporte": ["Base","S","GTS","GranLusso","GranSport","Trofeo"]
  },
  "Mazda": {
    "CX-3": ["SE","SE-L","Sport Nav","Sport Nav+","GT Sport","GT Sport Nav"],
    "CX-30": ["SE-L","Sport","GT Sport","GT Sport Tech"],
    "CX-5": ["SE-L","Sport","Sport Nav","Sport Nav+","GT Sport","GT Sport Nav","Newground"],
    "CX-60": ["Exclusive-Line","Homura","Takumi","PHEV"],
    "CX-90": ["Base","Select","Preferred","Premium","Turbo S Premium Plus"],
    "MX-5": ["SE","SE-L","Sport Nav","Sport Nav+","GT Sport","GT Sport Nav","RF","Sport Black","Kazari"],
    "Mazda2": ["SE","SE-L","Sport Nav","Sport Nav+","GT Sport","GT Sport Nav","Hybrid"],
    "Mazda3": ["SE-L","Sport","GT Sport","GT Sport Tech","Fastback","Hatchback"],
    "Mazda6": ["SE-L","Sport Nav","Sport Nav+","GT Sport","GT Sport Nav","Tourer"]
  },
  "McLaren": {
    "Artura": ["Base","Performance","Spider"],
    "GT": ["Base","By MSO"],
    "720S": ["Coupe","Performance","Spider"],
    "750S": ["Coupe","Spider"],
    "765LT": ["Coupe","Spider"],
    "Elva": ["Base"],
    "Senna": ["Base","GTR"],
    "Speedtail": ["Base"]
  },
  "Mercedes-Benz": {
    "A-Class": ["A 160","A 180","A 200","A 220","A 250","AMG A 35","AMG A 45","AMG A 45 S","SE","Sport","AMG Line","AMG Line Premium","AMG Line Premium Plus","Night Edition"],
    "B-Class": ["B 160","B 180","B 200","B 250","Sport","SE","AMG Line"],
    "C-Class": ["C 180","C 200","C 220d","C 300","C 43","C 63","SE","Sport","AMG Line","AMG Line Premium","AMG Line Premium Plus","Estate","Cabriolet","Coupe"],
    "CLA": ["CLA 180","CLA 200","CLA 220d","CLA 250","AMG CLA 35","AMG CLA 45","AMG CLA 45 S","SE","Sport","AMG Line","Shooting Brake"],
    "CLE": ["CLE 200","CLE 220d","CLE 300","AMG CLE 53","Coupe","Cabriolet"],
    "E-Class": ["E 200","E 220d","E 300","E 350","E 400","E 53","E 63","SE","Sport","AMG Line","AMG Line Premium","Estate","Cabriolet","Coupe","All-Terrain"],
    "EQA": ["EQA 250","EQA 300","EQA 350","AMG Line","AMG Line Premium"],
    "EQB": ["EQB 250","EQB 300","EQB 350","AMG Line","AMG Line Premium"],
    "EQC": ["EQC 400","AMG Line","AMG Line Premium","Edition 1886"],
    "EQE": ["EQE 300","EQE 350","EQE 350+","AMG EQE 43","AMG EQE 53","AMG Line","Premium","SUV"],
    "EQS": ["EQS 450","EQS 450+","EQS 580","AMG EQS 53","AMG Line","Premium","Maybach","SUV"],
    "G-Class": ["G 350d","G 400d","G 500","G 63 AMG","G 63 AMG Edition","Stronger Than Time"],
    "GLA": ["GLA 180","GLA 200","GLA 220d","GLA 250","AMG GLA 35","AMG GLA 45","AMG GLA 45 S","SE","Sport","AMG Line"],
    "GLB": ["GLB 180","GLB 200","GLB 220d","GLB 250","AMG GLB 35","SE","Sport","AMG Line"],
    "GLC": ["GLC 200","GLC 220d","GLC 300","GLC 300e","AMG GLC 43","AMG GLC 63","SE","Sport","AMG Line","Coupe"],
    "GLE": ["GLE 300d","GLE 350","GLE 350d","GLE 400d","GLE 450","GLE 53","GLE 63","SE","Sport","AMG Line","Coupe"],
    "GLS": ["GLS 400d","GLS 450","GLS 580","AMG GLS 63","Base","Premium","Maybach"],
    "S-Class": ["S 400d","S 450","S 500","S 580","S 680","AMG S 63","AMG S 65","SE","AMG Line","Maybach","Guard"],
    "SL": ["SL 43","SL 55","SL 63","AMG Line","Premium","Premium Plus"],
    "SLC": ["SLC 180","SLC 200","SLC 300","AMG SLC 43"],
    "V-Class": ["Marco Polo","Sport","Exclusive","AMG Line"]
  },
  "MG": {
    "3": ["SE","Excite","Exclusive"],
    "4": ["SE","Trophy","Trophy Long Range","XPOWER"],
    "5": ["SE","Excite","Exclusive","Trophy","EV"],
    "HS": ["Excite","Exclusive","Trophy","PHEV"],
    "Marvel R": ["Luxury","Performance"],
    "ZS": ["SE","Excite","Exclusive","Trophy","EV"],
    "Cyberster": ["Base","Trophy"]
  },
  "MINI": {
    "Clubman": ["One","Cooper","Cooper S","John Cooper Works","Classic","Exclusive","Resolute"],
    "Convertible": ["One","Cooper","Cooper S","John Cooper Works"],
    "Countryman": ["One","Cooper","Cooper S","Cooper SE","John Cooper Works","Classic","Exclusive","Resolute"],
    "Electric": ["Level 1","Level 2","Level 3"],
    "Hatch": ["One","Cooper","Cooper S","Cooper SE","John Cooper Works","Classic","Exclusive","Resolute"],
    "Paceman": ["One","Cooper","Cooper S","All4","John Cooper Works"]
  },
  "Mitsubishi": {
    "ASX": ["Verve","Design","Exceed"],
    "Eclipse Cross": ["Verve","Design","Exceed","PHEV"],
    "L200": ["Warrior","Barbarian","Barbarian X","Animal"],
    "Outlander": ["Verve","Design","Exceed","PHEV","Sport","GT"],
    "Pajero": ["Base","Classic","Sport","GLS","VR-X"],
    "Space Star": ["Base","Plus","Top"]
  },
  "Nissan": {
    "370Z": ["Base","Sport","Sport Touring","Nismo","Roadster"],
    "Ariya": ["Engage","Engage+","Evolve","Evolve+","Empower","Empower+"],
    "GT-R": ["Pure","Premium","Track Edition","Nismo","50th Anniversary"],
    "Juke": ["Visia","Acenta","N-Connecta","Tekna","Tekna+","Enigma","Hybrid"],
    "Leaf": ["Acenta","N-Connecta","Tekna","Tekna+","e+"],
    "Micra": ["Visia","Acenta","N-Connecta","Tekna","Bose Personal Edition"],
    "Murano": ["S","SV","SL","Platinum"],
    "Pathfinder": ["S","SV","SL","Platinum"],
    "Qashqai": ["Visia","Acenta","N-Connecta","Tekna","Tekna+","Enigma","e-Power"],
    "Rogue": ["S","SV","SL","Platinum","Sport"],
    "Titan": ["S","SV","PRO-4X","SL","Platinum Reserve"],
    "X-Trail": ["Visia","Acenta","N-Connecta","Tekna","Tekna+","e-Power","e-4ORCE"]
  },
  "Peugeot": {
    "108": ["Access","Active","Allure","Collection"],
    "208": ["Active","Allure","Allure Premium","GT","GT Premium","e-208"],
    "308": ["Active","Allure","Allure Premium","GT","GT Premium","e-308","SW","Hybrid"],
    "408": ["Allure","GT","e-408","Hybrid"],
    "508": ["Active","Allure","GT","GT Premium","SW","PHEV"],
    "2008": ["Active","Allure","Allure Premium","GT","GT Premium","e-2008"],
    "3008": ["Active","Allure","Allure Premium","GT","GT Premium","PHEV"],
    "5008": ["Active","Allure","Allure Premium","GT","GT Premium"]
  },
  "Porsche": {
    "718 Boxster": ["Base","S","GTS 4.0","Spyder","25 Jahre"],
    "718 Cayman": ["Base","S","GTS 4.0","GT4","GT4 RS","25 Jahre"],
    "911": ["Carrera","Carrera S","Carrera 4","Carrera 4S","Targa 4","Targa 4S","GTS","GT3","GT3 RS","Turbo","Turbo S","Dakar","Sport Classic","50th Anniversary"],
    "Cayenne": ["Base","S","GTS","Turbo","Turbo S","Turbo GT","E-Hybrid","Turbo E-Hybrid","Coupe","Platinum Edition"],
    "Macan": ["Base","S","GTS","Turbo","Electric","Electric S","Electric Turbo"],
    "Panamera": ["Base","4","4S","GTS","Turbo","Turbo S","E-Hybrid","Turbo S E-Hybrid","Executive","Sport Turismo"],
    "Taycan": ["Base","4","4S","GTS","Turbo","Turbo S","Cross Turismo","Sport Turismo"]
  },
  "Ram": {
    "1500": ["Tradesman","Big Horn","Laramie","Rebel","Longhorn","Limited","Limited Longhorn","TRX","Classic"],
    "2500": ["Tradesman","Big Horn","Laramie","Power Wagon","Longhorn","Limited"],
    "3500": ["Tradesman","Big Horn","Laramie","Longhorn","Limited"],
    "ProMaster": ["Base","Cargo","Window Van","City"]
  },
  "Renault": {
    "Arkana": ["Play","Iconic","RS Line","S-Edition","E-Tech"],
    "Captur": ["Play","Iconic","RS Line","S-Edition","E-Tech","PHEV"],
    "Clio": ["Play","Iconic","RS Line","S-Edition","E-Tech","RS Trophy"],
    "Kadjar": ["Play","Iconic","S-Edition","GT Line"],
    "Megane": ["Play","Iconic","RS Line","S-Edition","E-Tech","RS","Trophy","E-Tech Electric"],
    "Scenic": ["Equilibre","Techno","Esprit Alpine","E-Tech Electric"],
    "Trafic": ["Business","Business+","Sport"],
    "Twingo": ["Play","Iconic","GT","Electric"],
    "Zoe": ["Play","Iconic","GT Line","GT"]
  },
  "Rolls-Royce": {
    "Cullinan": ["Base","Black Badge","Series II"],
    "Dawn": ["Base","Black Badge"],
    "Ghost": ["Base","Extended","Black Badge","Series II"],
    "Phantom": ["Base","Extended","EWB","Series II"],
    "Spectre": ["Base"],
    "Wraith": ["Base","Black Badge","Luminary","Kryptos"]
  },
  "SEAT": {
    "Arona": ["Reference","Style","FR","Xperience","FR Sport"],
    "Ateca": ["Reference","Style","FR","Xperience","Xperience Lux"],
    "Ibiza": ["Reference","Style","FR","FR Sport"],
    "Leon": ["Reference","Style","FR","FR Sport","e-Hybrid","Sportstourer"],
    "Tarraco": ["Reference","Style","FR","Xperience","Xperience Lux"]
  },
  "Skoda": {
    "Enyaq": ["iV 50","iV 60","iV 80","iV 80x","Coupe","RS","Founders Edition"],
    "Fabia": ["S","SE","SE Comfort","Monte Carlo","Colour Edition"],
    "Kamiq": ["S","SE","SE L","Monte Carlo","Colour Edition"],
    "Karoq": ["S","SE","SE Technology","Edition","Scout","Sportline"],
    "Kodiaq": ["S","SE","SE Technology","Edition","Scout","Sportline","vRS","RS"],
    "Octavia": ["S","SE","SE Technology","Edition","Laurin & Klement","Scout","Sportline","vRS","RS"],
    "Scala": ["S","SE","SE Technology","Monte Carlo"],
    "Superb": ["SE","SE Technology","Edition","Laurin & Klement","Sportline"]
  },
  "Smart": {
    "EQ Fortwo": ["Base","Pulse","Prime","Edition 1","Cabrio"],
    "EQ Forfour": ["Base","Pulse","Prime","Edition 1"],
    "#1": ["Pro","Premium","Brabus"],
    "#3": ["Pro+","Premium","Brabus"]
  },
  "Subaru": {
    "BRZ": ["Base","Premium","Limited","Series.Yellow","tS","S"],
    "Crosstrek": ["Base","Premium","Limited","Sport","Wilderness"],
    "Forester": ["Base","Premium","Sport","Limited","Touring","Wilderness"],
    "Impreza": ["Base","Premium","Sport","Limited"],
    "Legacy": ["Base","Premium","Sport","Limited","Touring"],
    "Outback": ["Base","Premium","Limited","Touring","Wilderness","XT"],
    "Solterra": ["Base","Premium","Limited","Touring"],
    "WRX": ["Base","Premium","Limited","GT","STI","TR"]
  },
  "Suzuki": {
    "Across": ["Base"],
    "Baleno": ["SZ3","SZ5","SZ-T"],
    "Ignis": ["SZ3","SZ5","SZ-T"],
    "Jimny": ["SZ3","SZ4","SZ5","Professional"],
    "S-Cross": ["SZ4","SZ-T","SZ5","Allgrip"],
    "Swift": ["SZ3","SZ4","SZ5","Sport","Attitude"],
    "Swace": ["SZ-T","SZ5"],
    "Vitara": ["SZ4","SZ-T","SZ5","Allgrip","S","Hybrid"]
  },
  "Tesla": {
    "Model 3": ["Standard Range","Long Range","Performance","Highland"],
    "Model S": ["Long Range","Plaid","Plaid+"],
    "Model X": ["Long Range","Plaid"],
    "Model Y": ["Standard Range","Long Range","Performance","Juniper"],
    "Cybertruck": ["AWD","Cyberbeast","Foundation Series"],
    "Roadster": ["Base","Founders Series"]
  },
  "Toyota": {
    "Aygo X": ["Pure","Edge","GR Sport","Exclusive"],
    "bZ4X": ["Pure","Motion","Vision","GR Sport"],
    "C-HR": ["Icon","Design","Excel","GR Sport","PHEV"],
    "Camry": ["LE","SE","XSE","XLE","TRD","Hybrid","Nightshade"],
    "Corolla": ["Icon","Design","Excel","GR Sport","Touring Sports","PHEV","GR"],
    "Crown": ["XLE","Limited","Platinum","Hybrid Max"],
    "GR86": ["Base","Premium","GR"],
    "GR Supra": ["GR","Pro","A91","Anniversary","MT"],
    "GR Yaris": ["Base","Circuit Pack","Rallye","Morizo"],
    "Hilux": ["Active","Icon","Icon Plus","Invincible","Invincible X"],
    "Land Cruiser": ["Active","Dynamic","GX","VX","300","250","70 Series","Heritage Edition"],
    "Prius": ["Active","Business","Excel","GR Sport","PHEV","Prime"],
    "Proace": ["Active","Design","Lounge","Verso"],
    "RAV4": ["Active","Design","Excel","GR Sport","Dynamic","PHEV","Hybrid","Adventure","TRD"],
    "Sequoia": ["SR5","TRD Sport","TRD Pro","Limited","Platinum","Capstone"],
    "Tacoma": ["SR","SR5","TRD Sport","TRD Off-Road","TRD Pro","Limited","Trailhunter"],
    "Tundra": ["SR","SR5","Limited","Platinum","1794","TRD Pro","Capstone"],
    "Yaris": ["Icon","Design","Excel","GR Sport","Cross"],
    "Yaris Cross": ["Icon","Design","Excel","GR Sport"]
  },
  "Vauxhall": {
    "Astra": ["Design","GS","GS Line","Ultimate","Sports Tourer","Hybrid","PHEV"],
    "Combo": ["Design","Energy","Elite","Life"],
    "Corsa": ["Design","GS","GS Line","Ultimate","Electric"],
    "Crossland": ["Design","GS","GS Line","Ultimate"],
    "Grandland": ["Design","GS","GS Line","Ultimate","Hybrid","PHEV","Electric"],
    "Mokka": ["Design","GS","GS Line","Ultimate","Electric"],
    "Movano": ["Base","Cargo","Combi"],
    "Vivaro": ["Base","Sportive","Elite","Life","Electric"]
  },
  "Volkswagen": {
    "Arteon": ["SE","R-Line","Elegance","R","Shooting Brake"],
    "Golf": ["Life","Style","R-Line","GTI","GTD","GTE","R","Alltrack","Estate"],
    "ID.3": ["Life","Life+","Style","Max","Pro","Pro S","Pure","Pure Performance","Tour"],
    "ID.4": ["Life","Style","Max","GTX","Pro","Pro Performance","Pure","Pure Performance"],
    "ID.5": ["Life","Style","Max","GTX"],
    "ID.7": ["Life","Style","Max","GTX","Tourer"],
    "Passat": ["Life","Style","Elegance","R-Line","GTE","Estate","Alltrack"],
    "Polo": ["Life","Style","R-Line","GTI","Beats"],
    "T-Cross": ["Life","Style","R-Line"],
    "T-Roc": ["Life","Style","R-Line","Cabriolet","R"],
    "Taigo": ["Life","Style","R-Line"],
    "Tiguan": ["Life","Style","Elegance","R-Line","R","Allspace"],
    "Touareg": ["Life","Style","Elegance","R-Line","R","Black Edition"],
    "Touran": ["Life","Style","Elegance"],
    "up!": ["Move up!","High up!","GTI"]
  },
  "Volvo": {
    "C40": ["Core","Plus","Ultimate"],
    "EX30": ["Core","Plus","Ultra","Twin Motor Performance"],
    "EX90": ["Core","Plus","Ultra","Twin Motor Performance"],
    "S60": ["Core","Plus","Ultimate","Recharge","Polestar Engineered"],
    "S90": ["Core","Plus","Ultimate","Recharge"],
    "V60": ["Core","Plus","Ultimate","Cross Country","Recharge","Polestar Engineered"],
    "V90": ["Core","Plus","Ultimate","Cross Country","Recharge"],
    "XC40": ["Core","Plus","Ultimate","Recharge","Twin Motor"],
    "XC60": ["Core","Plus","Ultimate","Recharge","Polestar Engineered"],
    "XC90": ["Core","Plus","Ultimate","Recharge","Polestar Engineered"]
  }
};

if (typeof module !== 'undefined') module.exports = CAR_DATA;
