/* ============================================================
   HenrixHub — Product Data
   Real product images from publicly accessible CDNs
   ============================================================ */

// Apple Store CDN — official product renders with transparent backgrounds
const IMG = {
  // iPhones — Apple Store CDN (these load correctly in browsers)
  ip16pm_bt:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16pm_dt:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-deserttitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927879412',
  ip16p_bt:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16p_wt:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-3inch-whitetitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1725388369680',
  ip16_black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16_pink:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-pink?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16_teal:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch-teal?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927767837',
  ip16pl:     'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-16-finish-select-202409-6-7inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724927886867',
  ip15pm_bt:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15pm_nt:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15p_bt:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1692845702708',
  ip15_black: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009261221',
  ip15_pink:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-pink?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009261221',
  ip15pl:     'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1693009818788',
  ip14pm_dp:  'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1663703841896',
  ip14pm_g:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1663703841896',
  ip14_mid:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1660803619946',
  ip13_mid:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-2021-6-1inch-midnight?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1645572315074',
  ip13_red:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-2021-6-1inch-productred?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1645572315074',
  ipse_red:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202203-productred?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1646445452010',
  ipse_mid:   'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202203-midnight?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1646445452010',
  // MacBooks
  mbp14:      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1664497359481',
  mba13:      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1653084303665',
  // AirPods
  ap_pro2:    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1660803972361',
  ap4:        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MUWY3?wid=800&hei=800&fmt=p-jpg&qlt=95&.v=1724072235433',
  // Apple Watch
  watch10:    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWWQ3ref_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR_WF_CO?wid=800&hei=800&fmt=p-jpg&qlt=95',
  // PlayStation
  ps5:        'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
};

const PRODUCTS = [
  // ── iPHONES ──────────────────────────────────────────────
  {
    id: 1, name: 'iPhone 16 Pro Max', brand: 'Apple', cat: 'iPhones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 567, badge: 'New', year: 2024,
    price: 2350000, old: 2500000,
    imgs: [IMG.ip16pm_bt, IMG.ip16pm_dt],
    desc: 'Apple Intelligence. Titanium. A18 Pro chip. The largest iPhone display ever at 6.9". Camera Control. This is the iPhone 16 Pro Max — the most capable iPhone ever made.',
    specs: [['Storage','256GB / 512GB / 1TB'], ['Display','6.9" Super Retina XDR ProMotion'], ['Chip','A18 Pro'], ['Camera','48MP Triple System (5x Zoom)'], ['Battery','Up to 33 hrs video playback'], ['OS','iOS 18 with Apple Intelligence']]
  },
  {
    id: 2, name: 'iPhone 16 Pro', brand: 'Apple', cat: 'iPhones', model: 'iPhone 16',
    cond: 'New', rating: 4.9, reviews: 423, badge: 'New', year: 2024,
    price: 1850000, old: null,
    imgs: [IMG.ip16p_bt, IMG.ip16p_wt],
    desc: 'Camera Control. Apple Intelligence. A18 Pro chip. 5x optical zoom periscope camera. The iPhone 16 Pro is a true generational leap — powerful, refined, and packed with pro features.',
    specs: [['Storage','128GB / 256GB / 512GB'], ['Display','6.3" Super Retina XDR ProMotion'], ['Chip','A18 Pro'], ['Camera','48MP Triple (5x Zoom)'], ['Battery','Up to 27 hrs video playback'], ['OS','iOS 18 with Apple Intelligence']]
  },
  {
    id: 3, name: 'iPhone 16 Plus', brand: 'Apple', cat: 'iPhones', model: 'iPhone 16',
    cond: 'New', rating: 4.6, reviews: 199, badge: 'Hot', year: 2024,
    price: 1390000, old: 1500000,
    imgs: [IMG.ip16pl, IMG.ip16_pink],
    desc: 'The big iPhone without the Pro price. A18 chip, Camera Control, Action Button, and all-day battery. iPhone 16 Plus — everything you need, bigger.',
    specs: [['Storage','128GB / 256GB'], ['Display','6.7" Super Retina XDR OLED'], ['Chip','A18'], ['Camera','48MP Fusion + 12MP Ultra Wide'], ['Battery','Up to 27 hrs video playback'], ['Feature','Camera Control + Action Button']]
  },
  {
    id: 4, name: 'iPhone 16', brand: 'Apple', cat: 'iPhones', model: 'iPhone 16',
    cond: 'New', rating: 4.7, reviews: 612, badge: 'Hot', year: 2024,
    price: 1180000, old: null,
    imgs: [IMG.ip16_black, IMG.ip16_teal],
    desc: 'Dynamic Island. A18 chip. Camera Control. Apple Intelligence. The iPhone 16 is a massive upgrade — smarter, faster, and more capable than any standard iPhone before it.',
    specs: [['Storage','128GB / 256GB'], ['Display','6.1" Super Retina XDR OLED'], ['Chip','A18'], ['Camera','48MP Fusion + 12MP Ultra Wide'], ['Battery','Up to 22 hrs video playback'], ['Feature','Camera Control + Action Button']]
  },
  {
    id: 5, name: 'iPhone 15 Pro Max', brand: 'Apple', cat: 'iPhones', model: 'iPhone 15',
    cond: 'New', rating: 4.9, reviews: 789, badge: null, year: 2023,
    price: 1750000, old: 1900000,
    imgs: [IMG.ip15pm_bt, IMG.ip15pm_nt],
    desc: 'Titanium. A17 Pro. 5x zoom. USB 3. The iPhone 15 Pro Max was the first iPhone with a periscope zoom camera — and it still delivers outstanding pro performance.',
    specs: [['Storage','256GB / 512GB / 1TB'], ['Display','6.7" Super Retina XDR ProMotion'], ['Chip','A17 Pro'], ['Camera','48MP Triple (5x Periscope Zoom)'], ['Battery','Up to 29 hrs video playback'], ['Port','USB-C (USB 3)']]
  },
  {
    id: 6, name: 'iPhone 15 Pro', brand: 'Apple', cat: 'iPhones', model: 'iPhone 15',
    cond: 'New', rating: 4.8, reviews: 654, badge: null, year: 2023,
    price: 1400000, old: 1550000,
    imgs: [IMG.ip15p_bt, IMG.ip15pm_nt],
    desc: 'The first iPhone in titanium. A17 Pro chip, Action Button, USB-C, and a pro camera system. The iPhone 15 Pro remains one of the best ever made.',
    specs: [['Storage','128GB / 256GB / 512GB'], ['Display','6.1" Super Retina XDR ProMotion'], ['Chip','A17 Pro'], ['Camera','48MP Triple System'], ['Battery','Up to 23 hrs video playback'], ['Port','USB-C (USB 3)']]
  },
  {
    id: 7, name: 'iPhone 15 Plus', brand: 'Apple', cat: 'iPhones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 301, badge: null, year: 2023,
    price: 1050000, old: null,
    imgs: [IMG.ip15pl, IMG.ip15_pink],
    desc: 'Big screen, big battery, great value. iPhone 15 Plus with Dynamic Island, USB-C, A16 Bionic, and 48MP camera. All-day and beyond battery life.',
    specs: [['Storage','128GB / 256GB'], ['Display','6.7" Super Retina XDR OLED'], ['Chip','A16 Bionic'], ['Camera','48MP Main + 12MP Ultra Wide'], ['Battery','Up to 26 hrs video playback'], ['Port','USB-C']]
  },
  {
    id: 8, name: 'iPhone 15', brand: 'Apple', cat: 'iPhones', model: 'iPhone 15',
    cond: 'New', rating: 4.6, reviews: 812, badge: null, year: 2023,
    price: 880000, old: null,
    imgs: [IMG.ip15_black, IMG.ip15_pink],
    desc: 'Dynamic Island on the base model for the first time. USB-C. 48MP main camera. A16 Bionic. iPhone 15 was a landmark upgrade — and now it\'s better value than ever.',
    specs: [['Storage','128GB / 256GB'], ['Display','6.1" Super Retina XDR OLED'], ['Chip','A16 Bionic'], ['Camera','48MP Main + 12MP Ultra Wide'], ['Battery','Up to 20 hrs video playback'], ['Port','USB-C']]
  },
  {
    id: 9, name: 'iPhone 14 Pro Max', brand: 'Apple', cat: 'iPhones', model: 'iPhone 14',
    cond: 'New', rating: 4.7, reviews: 943, badge: null, year: 2022,
    price: 1050000, old: 1200000,
    imgs: [IMG.ip14pm_dp, IMG.ip14pm_g],
    desc: 'Always-On display. Dynamic Island. 48MP main camera. A16 Bionic. The iPhone 14 Pro Max was revolutionary when it launched — and at today\'s price it\'s exceptional value.',
    specs: [['Storage','128GB / 256GB / 512GB / 1TB'], ['Display','6.7" ProMotion Always-On OLED'], ['Chip','A16 Bionic'], ['Camera','48MP Triple System'], ['Battery','Up to 29 hrs video playback'], ['Feature','Always-On Display']]
  },
  {
    id: 10, name: 'iPhone 14', brand: 'Apple', cat: 'iPhones', model: 'iPhone 14',
    cond: 'Used', rating: 4.5, reviews: 521, badge: null, year: 2022,
    price: 680000, old: null,
    imgs: [IMG.ip14_mid, IMG.ip14pm_dp],
    desc: 'Pre-owned iPhone 14 in excellent condition. Fully tested — all features working perfectly. Crash Detection, Emergency SOS via Satellite, and A15 Bionic chip.',
    specs: [['Storage','128GB / 256GB'], ['Display','6.1" Super Retina XDR OLED'], ['Chip','A15 Bionic'], ['Camera','12MP Dual System'], ['Battery','Up to 20 hrs video playback'], ['Condition','Used — Excellent (minor cosmetic marks only)']]
  },
  {
    id: 11, name: 'iPhone 13 Pro Max', brand: 'Apple', cat: 'iPhones', model: 'iPhone 13',
    cond: 'Used', rating: 4.6, reviews: 402, badge: null, year: 2021,
    price: 580000, old: null,
    imgs: [IMG.ip13_mid, IMG.ip13_red],
    desc: 'ProMotion display. A15 Bionic. 3x optical zoom. 1TB option. The iPhone 13 Pro Max was the best big-screen iPhone of its generation — now at a fantastic used price.',
    specs: [['Storage','128GB – 1TB'], ['Display','6.7" ProMotion Super Retina XDR'], ['Chip','A15 Bionic'], ['Camera','12MP Triple (3x Zoom)'], ['Battery','Up to 28 hrs video playback'], ['Condition','Used — Good']]
  },
  {
    id: 12, name: 'iPhone 13', brand: 'Apple', cat: 'iPhones', model: 'iPhone 13',
    cond: 'Used', rating: 4.5, reviews: 634, badge: null, year: 2021,
    price: 420000, old: null,
    imgs: [IMG.ip13_red, IMG.ip13_mid],
    desc: 'A reliable, snappy used iPhone 13. A15 Bionic, 12MP dual camera, and long battery life. A fantastic entry point into the Apple ecosystem.',
    specs: [['Storage','128GB / 256GB / 512GB'], ['Display','6.1" Super Retina XDR OLED'], ['Chip','A15 Bionic'], ['Camera','12MP Dual System'], ['Battery','Up to 19 hrs video playback'], ['Condition','Used — Good']]
  },
  {
    id: 13, name: 'iPhone SE (3rd Gen)', brand: 'Apple', cat: 'iPhones', model: 'iPhone SE',
    cond: 'New', rating: 4.4, reviews: 287, badge: null, year: 2022,
    price: 420000, old: null,
    imgs: [IMG.ipse_red, IMG.ipse_mid],
    desc: 'The most affordable iPhone — with A15 Bionic inside. Compact 4.7" Retina HD display, Touch ID, and 5G capability. Great performance at an unbeatable price.',
    specs: [['Storage','64GB / 128GB / 256GB'], ['Display','4.7" Retina HD'], ['Chip','A15 Bionic'], ['Camera','12MP Wide'], ['Battery','Up to 15 hrs video playback'], ['Feature','Touch ID + 5G']]
  },

  // ── LAPTOPS ──────────────────────────────────────────────
  {
    id: 14, name: 'MacBook Pro M4 — 14"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.9, reviews: 98, badge: 'New', year: 2024,
    price: 3200000, old: null,
    imgs: [IMG.mbp14],
    desc: 'The most powerful MacBook Pro ever made. M4 chip, Liquid Retina XDR display, fanless silence, and up to 24 hours of battery life. Built for demanding professionals.',
    specs: [['Chip','Apple M4'], ['RAM','16GB Unified Memory'], ['Storage','512GB SSD'], ['Display','14.2" Liquid Retina XDR'], ['Battery','Up to 24 hrs'], ['Weight','1.55 kg']]
  },
  {
    id: 15, name: 'MacBook Air M3 — 13"', brand: 'Apple', cat: 'Laptops', model: null,
    cond: 'New', rating: 4.8, reviews: 156, badge: null, year: 2024,
    price: 1950000, old: null,
    imgs: [IMG.mba13],
    desc: 'Impossibly thin. Fanless and completely silent. MacBook Air M3 is the world\'s best consumer laptop — all-day battery, stunning Liquid Retina display, and M3 power.',
    specs: [['Chip','Apple M3'], ['RAM','8GB / 16GB'], ['Storage','256GB – 2TB SSD'], ['Display','13.6" Liquid Retina'], ['Battery','Up to 18 hrs'], ['Weight','1.24 kg']]
  },

  // ── GAMING ───────────────────────────────────────────────
  {
    id: 16, name: 'PlayStation 5 Pro', brand: 'Sony', cat: 'Gaming', model: null,
    cond: 'New', rating: 4.8, reviews: 203, badge: 'Hot', year: 2024,
    price: 850000, old: 950000,
    imgs: [IMG.ps5],
    desc: 'The most powerful PlayStation ever. Enhanced GPU delivers up to 45% faster rendering than PS5. 8K support, 2TB SSD, and the definitive PlayStation game library.',
    specs: [['GPU','Enhanced RDNA (45% faster than PS5)'], ['CPU','AMD Zen 2 (3.85GHz)'], ['Storage','2TB NVMe SSD'], ['Resolution','Up to 8K'], ['Frame Rate','Up to 120fps'], ['Feature','PlayStation Spectral Super Resolution']]
  },

  // ── AUDIO ────────────────────────────────────────────────
  {
    id: 17, name: 'AirPods Pro 2', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.9, reviews: 567, badge: 'Hot', year: 2024,
    price: 198000, old: 220000,
    imgs: [IMG.ap_pro2],
    desc: 'H2 chip. Adaptive Audio. Personalised Spatial Audio. The AirPods Pro 2 are the best wireless earbuds you can buy for iPhone — period.',
    specs: [['Chip','H2'], ['ANC','Adaptive Transparency'], ['Battery','6hrs + 30hrs with case'], ['Connectivity','Bluetooth 5.3'], ['Feature','Conversation Awareness + Personalised Spatial Audio'], ['Case','MagSafe + USB-C']]
  },
  {
    id: 18, name: 'AirPods 4', brand: 'Apple', cat: 'Audio', model: null,
    cond: 'New', rating: 4.7, reviews: 312, badge: null, year: 2024,
    price: 148000, old: null,
    imgs: [IMG.ap4],
    desc: 'The biggest AirPods redesign ever. Open-ear comfort with optional Active Noise Cancellation — no ear tips needed. H2 chip. Conversation Awareness. A game changer.',
    specs: [['Chip','H2'], ['ANC','Active Noise Cancellation (optional)'], ['Battery','5hrs + 30hrs with case'], ['Connectivity','Bluetooth 5.3'], ['Feature','Conversation Awareness'], ['Case','USB-C']]
  },

  // ── ACCESSORIES ─────────────────────────────────────────
  {
    id: 19, name: 'Apple Watch Series 10', brand: 'Apple', cat: 'Accessories', model: null,
    cond: 'New', rating: 4.8, reviews: 188, badge: 'Sale', year: 2024,
    price: 520000, old: 580000,
    imgs: [IMG.watch10],
    desc: 'The thinnest Apple Watch ever — yet packed with more health features than any predecessor. ECG, blood oxygen, crash detection, sleep apnoea detection and double tap gesture.',
    specs: [['Display','Always-On Retina LTPO OLED'], ['Health','ECG + Blood Oxygen + Sleep Apnoea'], ['Battery','Up to 18hrs (36hrs Low Power)'], ['Connectivity','GPS + Cellular'], ['Water','50m Water Resistant'], ['Feature','Double Tap Gesture']]
  },
];

const CATEGORIES = [
  { name: 'iPhones',     icon: '📱' },
  { name: 'Laptops',     icon: '💻' },
  { name: 'Gaming',      icon: '🎮' },
  { name: 'Audio',       icon: '🎧' },
  { name: 'Accessories', icon: '⌚' },
];

const IPHONE_MODELS = ['iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone SE'];
