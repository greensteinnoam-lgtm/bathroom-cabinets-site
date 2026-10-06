// עריכה מהירה של האתר:
// 1. פרטי הקשר המאומתים נשמרים כאן.
// 2. כל מוצר כולל מזהה קבוע, slug, שם מסחרי, שם ספק, תמונות, וריאציות וסטטוס אימות מחיר.
// 3. המחירים הם מחירון חבילות גרינשטיין שנמסר בפרויקט, ולא מחיר ספק נובו ללא אסמכתה.

const SITE = {
  whatsappNumber: "972584209429",
  defaultMessage: "שלום, ראיתי את האתר ואני מתעניין/ת בארון אמבטיה או מקלחון. אשמח לקבל עזרה בבחירה.",
  baseUrl: "https://statuesque-eclair-7d0bef.netlify.app/"
};

const products = [
  {
    id: "cab-antique",
    slug: "shoham-antique",
    categoryGroup: "cabinets",
    category: "עומד",
    commercialName: "שוהם",
    supplierName: "ענתיק עומד מגירות/דלתות",
    title: "שוהם",
    typeLabel: "ארון עומד מגירות/דלתות",
    size: "60 / 80 / 100 / 120",
    finish: "מגירות / דלתות",
    price: "מחיר מאומת לפי מידה",
    priceStatus: "business_price_list",
    included: "חבילת גרינשטיין: ארון + כיור + מראה מרחפת + התקנה",
    priceSource: "מחירון שנמסר על ידי גרינשטיין בפרויקט",
    packageSource: "תכולת חבילה שנמסרה על ידי גרינשטיין בפרויקט",
    priceBySize: { "60": 1600, "80": 1900, "100": 2250, "120": 2700 },
    description: "ארון עומד בסגנון כפרי עם גוף סנדוויץ וחזיתות MDF, סגירה שקטה ואפשרות בחירת ידיות.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "גרייג", "תכלת", "שחור"],
    images: ["https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%94%D7%A0%D7%A8%D7%99-400x400.png"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%94%D7%A0%D7%A8%D7%99-400x400.png",
    variations: ["60", "80", "100", "120"].map(size => ({ size, price: { value: { "60": 1600, "80": 1900, "100": 2250, "120": 2700 }[size], status: "verified" } })),
    productUrl: "cabinets-shoham.html",
    source: "https://novo-gal.co.il/product/%D7%A2%D7%A0%D7%AA%D7%99%D7%A7/"
  },
  {
    id: "cab-dikla",
    slug: "sapir-dikla",
    categoryGroup: "cabinets",
    category: "תלוי",
    commercialName: "ספיר",
    supplierName: "דקלה",
    title: "ספיר",
    typeLabel: "ארון תלוי מסדרת NOVO CHIC",
    size: "60 / 80 / 100 / 120 / 140",
    finish: "סדרת NOVO CHIC",
    price: "מחיר מאומת לפי מידה",
    priceStatus: "business_price_list",
    included: "חבילת גרינשטיין: ארון + כיור + מראה מרחפת + התקנה",
    priceSource: "מחירון שנמסר על ידי גרינשטיין בפרויקט",
    packageSource: "תכולת חבילה שנמסרה על ידי גרינשטיין בפרויקט",
    priceBySize: { "60": 1500, "80": 1750, "100": 2000, "120": 2250, "140": 3500 },
    description: "דגם דקלה מסדרת NOVO CHIC. בחרו מידה וצבע, והמחיר יתעדכן לפי הבחירה.",
    sizes: ["60", "80", "100", "120", "140"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    images: ["https://novo-gal.co.il/wp-content/uploads/2023/10/Dikla-Concrete_app-400x400.jpg"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/Dikla-Concrete_app-400x400.jpg",
    variations: ["60", "80", "100", "120", "140"].map(size => ({ size, price: { value: { "60": 1500, "80": 1750, "100": 2000, "120": 2250, "140": 3500 }[size], status: "verified" } })),
    productUrl: "cabinets-sapir.html",
    source: "https://novo-gal.co.il/product-category/%D7%90%D7%A8%D7%95%D7%A0%D7%95%D7%AA/"
  },
  {
    id: "cab-ofir-doors",
    slug: "bareket-ofir-doors",
    categoryGroup: "cabinets",
    category: "תלוי",
    commercialName: "ברקת",
    supplierName: "אופיר דלתות",
    title: "ברקת",
    typeLabel: "ארון תלוי דלתות",
    size: "60/46 / 80/46 / 100/46 / 120/46",
    finish: "דלתות טריקה שקטה",
    price: "מחיר מאומת לפי מידה",
    priceStatus: "business_price_list",
    included: "חבילת גרינשטיין: ארון + כיור + מראה מרחפת + התקנה",
    priceSource: "מחירון שנמסר על ידי גרינשטיין בפרויקט",
    packageSource: "תכולת חבילה שנמסרה על ידי גרינשטיין בפרויקט",
    priceBySize: { "60": 1500, "80": 1750, "100": 2000, "120": 2450 },
    description: "ארון תלוי דלתות, מותאם לכיור אינטגרלי או מונח. מספר הדלתות משתנה לפי המידה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["בטון", "לבן", "גרפיט", "עץ מאושן", "אגוז אמריקאי", "עץ נטורל"],
    images: ["https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A2%D7%A8%D7%91%D7%94-3-550x550.png"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A2%D7%A8%D7%91%D7%94-3-550x550.png",
    variations: ["60", "80", "100", "120"].map(size => ({ size, price: { value: { "60": 1500, "80": 1750, "100": 2000, "120": 2450 }[size], status: "verified" } })),
    productUrl: "cabinets-bareket.html",
    source: "https://novo-gal.co.il/product/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%A0%D7%95%D7%A1%D7%A3/"
  },
  {
    id: "cab-dikla-doors",
    slug: "odem-dikla-doors",
    categoryGroup: "cabinets",
    category: "תלוי",
    commercialName: "אודם",
    supplierName: "דיקלה דלתות",
    title: "אודם",
    typeLabel: "ארון תלוי דלתות",
    size: "לפי דגם",
    finish: "דלתות",
    price: "לקבלת מחיר והזמנה",
    priceStatus: "unverified",
    included: "תכולת החבילה תסוכם לפני הזמנה",
    priceSource: "חסר מחירון מאומת",
    packageSource: "חסר פירוט חבילה מאומת",
    description: "גרסת דלתות לדגם דקלה. פרטי המידות, הצבעים והמחיר יאושרו לפי קישור המוצר המדויק לפני הזמנה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    images: ["assets/product-dikla-doors.svg"],
    image: "assets/product-dikla-doors.svg",
    variations: [],
    productUrl: "cabinets-odem.html",
    source: "https://novo-gal.co.il/product-category/%D7%90%D7%A8%D7%95%D7%A0%D7%95%D7%AA/"
  },
  {
    id: "cab-marin-modular",
    slug: "inbar-marin",
    categoryGroup: "cabinets",
    category: "תלוי",
    commercialName: "ענבר",
    supplierName: "מרין מודולרי",
    title: "ענבר",
    typeLabel: "ארון תלוי מודולרי",
    size: "עד 240",
    finish: "מגירות / דלתות משולב",
    price: "מחיר מאומת לפי מידה",
    priceStatus: "business_price_list",
    included: "חבילת גרינשטיין: ארון + כיור + מראה מרחפת + התקנה",
    priceSource: "מחירון שנמסר על ידי גרינשטיין בפרויקט",
    packageSource: "תכולת חבילה שנמסרה על ידי גרינשטיין בפרויקט",
    priceBySize: { "60": 1550, "80": 1800, "100": 2150, "120": 2500 },
    description: "ארון תלוי מודולרי: שילוב שני ארונות צמודים לקבלת ארון גדול בחלוקה לפי בחירה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["גרפיט", "פודרה", "לבן מט", "לבן מבריק", "כחול מעושן", "מוקה", "פיסטוק"],
    images: ["https://novo-gal.co.il/wp-content/uploads/2024/03/%D7%A0%D7%99%D7%95-%D7%9E%D7%90%D7%92-%D7%9C%D7%91%D7%9F-%D7%99%D7%93%D7%99%D7%95%D7%AA-%D7%96%D7%94%D7%91-%D7%9E%D7%98-%D7%9E%D7%99%D7%93%D7%94-604650-%D7%9B%D7%95%D7%9C%D7%9C-%D7%9E%D7%A8%D7%90%D7%94-%D7%9E%D7%A8%D7%97%D7%A4%D7%AA-%D7%9B%D7%99%D7%95%D7%A8-%D7%90%D7%99%D7%A0%D7%98%D7%92%D7%A8%D7%9C%D7%99-%D7%9C%D7%91%D7%9F-43-550x550.png"],
    image: "https://novo-gal.co.il/wp-content/uploads/2024/03/%D7%A0%D7%99%D7%95-%D7%9E%D7%90%D7%92-%D7%9C%D7%91%D7%9F-%D7%99%D7%93%D7%99%D7%95%D7%AA-%D7%96%D7%94%D7%91-%D7%9E%D7%98-%D7%9E%D7%99%D7%93%D7%94-604650-%D7%9B%D7%95%D7%9C%D7%9C-%D7%9E%D7%A8%D7%90%D7%94-%D7%9E%D7%A8%D7%97%D7%A4%D7%AA-%D7%9B%D7%99%D7%95%D7%A8-%D7%90%D7%99%D7%A0%D7%98%D7%92%D7%A8%D7%9C%D7%99-%D7%9C%D7%91%D7%9F-43-550x550.png",
    variations: ["60", "80", "100", "120"].map(size => ({ size, price: { value: { "60": 1550, "80": 1800, "100": 2150, "120": 2500 }[size], status: "verified" } })),
    productUrl: "cabinets-inbar.html",
    source: "https://novo-gal.co.il/product/%D7%9E%D7%A8%D7%99%D7%9F-%D7%9E%D7%95%D7%93%D7%95%D7%9C%D7%A8%D7%99/"
  },
  {
    id: "cab-novo-sandwich",
    slug: "topaz-novo-sandwich",
    categoryGroup: "cabinets",
    category: "תלוי",
    commercialName: "טופז",
    supplierName: "נובו סנדוויץ",
    title: "טופז",
    typeLabel: "ארון תלוי מגירה ותא פתוח",
    size: "60/46 / 80/46 / 100/46 / 120/46",
    finish: "מגירה + תא פתוח",
    price: "מחיר מאומת לפי מידה",
    priceStatus: "business_price_list",
    included: "חבילת גרינשטיין: ארון + כיור + מראה מרחפת + התקנה",
    priceSource: "מחירון שנמסר על ידי גרינשטיין בפרויקט",
    packageSource: "תכולת חבילה שנמסרה על ידי גרינשטיין בפרויקט",
    priceBySize: { "60": 1500, "80": 1750, "100": 2000, "120": 2250 },
    description: "ארון תלוי עם מגירה אחת ותא פתוח, ידית אינטגרלית וטריקה שקטה.",
    sizes: ["60/46", "80/46", "100/46", "120/46"],
    colors: ["פודרה", "כחול מעושן", "עץ זברה", "אגוז אמריקאי", "עץ נטורל"],
    images: ["https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A0%D7%95%D7%91%D7%95-%D7%AA%D7%90-%D7%A4%D7%AA%D7%95%D7%97-2-400x400.png"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A0%D7%95%D7%91%D7%95-%D7%AA%D7%90-%D7%A4%D7%AA%D7%95%D7%97-2-400x400.png",
    variations: ["60", "80", "100", "120"].map(size => ({ size: `${size}/46`, price: { value: { "60": 1500, "80": 1750, "100": 2000, "120": 2250 }[size], status: "verified" } })),
    productUrl: "cabinets-topaz.html",
    source: "https://novo-gal.co.il/product/%D7%A0%D7%95%D7%91%D7%95-%D7%A1%D7%95%D7%95%D7%99%D7%A5/"
  }
];

const productById = Object.fromEntries(products.map(product => [product.id, product]));

const showers = [
  {
    id: "shower-angelo-2",
    commercialName: "הדס",
    supplierName: "אנג'לו 2",
    source: "https://novo-gal.co.il/product/%D7%90%D7%A0%D7%92%D7%9C%D7%95-2/",
    type: "מקלחון פינתי מרובע",
    sizes: ["73-75", "77-80", "83-85", "87-90", "97-100"],
    glass: ["שקופה", "שקופה עם פסים"],
    finishes: ["ניקל", "שחור מט"],
    missing: ["מחירון צרכן", "תכולת חבילה לגרינשטיין"]
  },
  {
    id: "shower-angelo-6",
    commercialName: "רותם",
    supplierName: "אנג'לו 6",
    source: "https://novo-gal.co.il/product/%D7%90%D7%A0%D7%92%D7%9C%D7%95-6/",
    type: "מקלחון פינתי מרובע",
    sizes: ["73-75", "77-80", "83-85", "87-90"],
    glass: ["שקופה", "שקופה עם פסים", "פליסה"],
    finishes: ["ניקל", "שחור מט"],
    missing: ["מחירון צרכן", "תכולת חבילה לגרינשטיין"]
  },
  {
    id: "shower-magic",
    commercialName: "מרווה",
    supplierName: "מג'יק",
    source: "https://novo-gal.co.il/product/%D7%9E%D7%92%D7%99%D7%A7/",
    type: "מקלחון פינתי מתקפל",
    sizes: ["77-80", "83-85", "87-90"],
    glass: ["שקופה", "שקופה עם פסים", "פליסה"],
    finishes: ["ניקל", "שחור מט"],
    missing: ["מחירון צרכן", "תכולת חבילה לגרינשטיין"]
  },
  {
    id: "shower-picasso",
    commercialName: "אלה",
    supplierName: "פיקסו",
    source: "https://novo-gal.co.il/product/%D7%A4%D7%99%D7%A7%D7%A1%D7%95/",
    type: "מקלחון פינתי הזזה",
    sizes: ["77-80", "87-90"],
    glass: ["שקופה", "שקופה עם פסים"],
    finishes: ["ניקל", "שחור מט"],
    missing: ["מחירון צרכן", "תכולת חבילה לגרינשטיין"]
  }
];

function whatsappLink(message = SITE.defaultMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getSizeKey(size){
  return String(size).match(/\d+/)?.[0] || size;
}

function formatPrice(value){
  return value ? `${Number(value).toLocaleString('he-IL')} ש"ח` : "לקבלת מחיר והזמנה";
}

function getPriceLabel(product, size){
  const price = product.priceBySize?.[getSizeKey(size)];
  return price ? formatPrice(price) : "לקבלת מחיר והזמנה";
}

function hasPriceForSize(product, size){
  return Boolean(product.priceBySize?.[getSizeKey(size)]);
}

function pageUrlWithSize(product, size){
  if(!product.productUrl) return '';
  const url = new URL(product.productUrl, SITE.baseUrl);
  if(size) url.searchParams.set('width', getSizeKey(size));
  return `${url.pathname.replace(/^\//, '')}${url.search}`;
}

function absoluteProductUrl(product, size){
  if(!product.productUrl) return '';
  const url = new URL(product.productUrl, SITE.baseUrl);
  if(size) url.searchParams.set('width', getSizeKey(size));
  return url.href;
}

function productOrderMessage(product, size, color, pageUrl = ''){
  const price = getPriceLabel(product, size);
  const urlLine = pageUrl ? `\nקישור למוצר: ${pageUrl}` : '';
  return `שלום, אני מעוניין/ת בדגם ${product.commercialName} (${product.supplierName}).\nסוג: ${product.typeLabel}.\nמידה: ${size}.\nצבע/גימור: ${color}.\nמחיר באתר: ${price}.\nתכולה: ${product.included}.${urlLine}`;
}

function attachDefaultWhatsappLinks(){
  document.querySelectorAll('#heroWhatsapp,#cardWhatsapp,#contactWhatsapp,#floatingWhatsapp,#navWhatsapp,#productsWhatsapp,#quoteWhatsapp,#showersWhatsapp,#helpWhatsapp').forEach(el => {
    el.href = whatsappLink(el.dataset.message || SITE.defaultMessage);
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

function getCatalogProducts(){
  return products.filter(product => product.categoryGroup === 'cabinets');
}

function currentUrlParams(){
  return new URLSearchParams(window.location.search);
}

function renderFilters(){
  const filters = document.getElementById('filters');
  if(!filters) return;
  const params = currentUrlParams();
  const width = params.get('width') || 'all';
  const type = params.get('type') || 'all';
  const widths = ['all', '60', '80', '100', '120', '140'];
  const types = ['all', 'תלוי', 'עומד'];
  filters.innerHTML = `
    <div class="filter-group" aria-label="סינון לפי רוחב">
      ${widths.map(item => `<button class="filter-btn ${width === item ? 'active' : ''}" data-filter="width" data-value="${item}">${item === 'all' ? 'כל הרוחבים' : item + ' ס״מ'}</button>`).join('')}
    </div>
    <div class="filter-group" aria-label="סינון לפי סוג ארון">
      ${types.map(item => `<button class="filter-btn ${type === item ? 'active' : ''}" data-filter="type" data-value="${item}">${item === 'all' ? 'כל הסוגים' : item}</button>`).join('')}
    </div>`;
  filters.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const next = currentUrlParams();
      if(button.dataset.value === 'all') next.delete(button.dataset.filter);
      else next.set(button.dataset.filter, button.dataset.value);
      const query = next.toString();
      history.replaceState(null, '', `${location.pathname}${query ? '?' + query : ''}`);
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts(){
  const productGrid = document.getElementById('productGrid');
  if(!productGrid) return;
  const params = currentUrlParams();
  const width = params.get('width');
  const type = params.get('type');
  const shown = getCatalogProducts().filter(product => {
    const matchesWidth = !width || product.sizes.some(size => getSizeKey(size) === width);
    const matchesType = !type || product.category === type;
    return matchesWidth && matchesType;
  });
  productGrid.innerHTML = shown.map(product => {
    const selectedSize = width && product.sizes?.some(size => getSizeKey(size) === width)
      ? product.sizes.find(size => getSizeKey(size) === width)
      : product.sizes?.[0] || product.size;
    const selectedColor = product.colors?.[0] || product.finish;
    const selectedPrice = getPriceLabel(product, selectedSize);
    const productHref = product.productUrl ? pageUrlWithSize(product, selectedSize) : '';
    const message = productOrderMessage(product, selectedSize, selectedColor, product.productUrl ? absoluteProductUrl(product, selectedSize) : '');
    const cta = product.productUrl
      ? `<a class="btn full" href="${productHref}">לצפייה במוצר</a>`
      : `<a class="btn full product-whatsapp" href="${whatsappLink(message)}" target="_blank" rel="noopener">הזמנה בוואטסאפ</a>`;
    const priceNote = hasPriceForSize(product, selectedSize) ? selectedPrice : 'לקבלת מחיר והזמנה';
    return `<article class="product-card catalog-card reveal visible">
      <a class="product-image product-image-link" href="${productHref || whatsappLink(message)}" ${product.productUrl ? '' : 'target="_blank" rel="noopener"'}>
        <img src="${product.image}" alt="${product.commercialName} - ${product.supplierName}" loading="lazy" decoding="async">
      </a>
      <h3>${product.commercialName}</h3>
      <p>${product.typeLabel}</p>
      <div class="product-meta"><span>${selectedSize} ס״מ</span><span>${product.category}</span></div>
      <div class="price">${priceNote}</div>
      ${cta}
    </article>`;
  }).join('') || `<p class="empty-state">לא נמצאו מוצרים לרוחב או לסוג שנבחרו. אפשר לשלוח הודעה ונעזור בהתאמה.</p>`;
}

function renderFeaturedProducts(){
  const grid = document.getElementById('homeFeaturedGrid');
  if(!grid) return;
  const featured = getCatalogProducts().slice(0, 3);
  grid.innerHTML = featured.map(product => `<article class="product-card compact-card">
    <img src="${product.image}" alt="${product.commercialName} - ${product.supplierName}" loading="lazy" decoding="async">
    <h3>${product.commercialName}</h3>
    <p>${product.typeLabel}</p>
    <a class="btn secondary" href="${product.productUrl || 'bathroom-cabinets.html'}">פרטים</a>
  </article>`).join('');
}

function bindProductDetail(){
  const detail = document.querySelector('[data-product-detail]');
  if(!detail) return;
  const product = productById[detail.dataset.productId];
  if(!product) return;
  const sizeSelect = detail.querySelector('[name="size"]');
  const colorSelect = detail.querySelector('[name="color"]');
  const price = detail.querySelector('[data-detail-price]');
  const whatsapp = detail.querySelector('[data-detail-whatsapp]');
  const params = currentUrlParams();
  const requestedWidth = params.get('width');
  const image = detail.querySelector('[data-detail-image]');
  const title = detail.querySelector('[data-detail-title]');
  const subtitle = detail.querySelector('[data-detail-subtitle]');
  const description = detail.querySelector('[data-detail-description]');
  const specs = detail.querySelector('[data-detail-specs]');
  const backLink = detail.querySelector('[data-back-to-catalog]');
  if(image){
    image.src = product.image;
    image.alt = `${product.commercialName} - ${product.typeLabel}`;
  }
  if(title) title.textContent = product.commercialName;
  if(subtitle) subtitle.textContent = product.typeLabel;
  if(description) description.textContent = product.description;
  if(specs){
    specs.innerHTML = `
      <div><strong>סוג</strong><span>${product.typeLabel}</span></div>
      <div><strong>שם ספק</strong><span>${product.supplierName}</span></div>
      <div><strong>תכולה</strong><span>${product.included}</span></div>`;
  }
  if(sizeSelect){
    sizeSelect.innerHTML = product.sizes.map(size => `<option value="${size}">${size} ס״מ</option>`).join('');
    if(requestedWidth){
      const requestedOption = [...sizeSelect.options].find(option => getSizeKey(option.value) === requestedWidth);
      if(requestedOption) sizeSelect.value = requestedOption.value;
    }
  }
  if(colorSelect){
    colorSelect.innerHTML = product.colors.map(color => `<option value="${color}">${color}</option>`).join('');
  }
  if(backLink){
    backLink.href = requestedWidth ? `bathroom-cabinets.html?width=${requestedWidth}` : 'bathroom-cabinets.html';
  }
  function update(){
    const size = sizeSelect.value;
    const color = colorSelect.value;
    const priceLabel = getPriceLabel(product, size);
    price.textContent = hasPriceForSize(product, size) ? priceLabel : 'לקבלת מחיר והזמנה';
    const productUrl = absoluteProductUrl(product, size) || window.location.href;
    whatsapp.href = whatsappLink(productOrderMessage(product, size, color, productUrl));
  }
  sizeSelect.addEventListener('change', update);
  colorSelect.addEventListener('change', update);
  update();
}

function bindLeadForm(){
  const leadForm = document.getElementById('leadForm');
  if(!leadForm) return;
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(leadForm);
    const msg = `שלום, ראיתי את האתר ואני רוצה הצעת מחיר.\nשם: ${data.get('name')}\nעיר: ${data.get('city')}\nרוחב משוער: ${data.get('width') || 'לא צוין'}\nסוג שירות: ${data.get('service') || 'לא צוין'}\nפירוט: ${data.get('message') || 'לא צוין'}`;
    window.open(whatsappLink(msg), '_blank');
  });
}

function bindMenu(){
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if(!menuBtn || !mainNav) return;
  menuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('click', (event) => {
    if(!mainNav.classList.contains('open')) return;
    if(mainNav.contains(event.target) || menuBtn.contains(event.target)) return;
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('keydown', (event) => {
    if(event.key !== 'Escape' || !mainNav.classList.contains('open')) return;
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  });
}

function bindImageModal(){
  const imageModal = document.getElementById('imageModal');
  const imageModalImg = document.getElementById('imageModalImg');
  const imageModalClose = document.getElementById('imageModalClose');
  if(!imageModal || !imageModalImg || !imageModalClose) return;
  document.querySelectorAll('.product-image-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      imageModalImg.src = btn.dataset.fullImage;
      imageModalImg.alt = btn.dataset.imageAlt;
      imageModal.classList.add('open');
      imageModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    });
  });
  function close(){
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    imageModalImg.src = '';
  }
  imageModalClose.addEventListener('click', close);
  imageModal.addEventListener('click', event => { if(event.target === imageModal) close(); });
  document.addEventListener('keydown', event => { if(event.key === 'Escape' && imageModal.classList.contains('open')) close(); });
}

function initReveal(){
  if(!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

attachDefaultWhatsappLinks();
renderFilters();
renderProducts();
renderFeaturedProducts();
bindProductDetail();
bindLeadForm();
bindMenu();
bindImageModal();
initReveal();
