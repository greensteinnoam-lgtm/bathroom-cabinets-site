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
    typeLabel: "ארון עומד מגירות/דלתות",
    finish: "מגירות / דלתות",
    description: "ארון עומד בסגנון כפרי לחדר רחצה, עם בחירת מידה וגימור לפי התאמה לחלל.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "גרייג", "תכלת", "שחור"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%94%D7%A0%D7%A8%D7%99-400x400.png",
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
    typeLabel: "ארון תלוי מסדרת NOVO CHIC",
    finish: "סדרת NOVO CHIC",
    description: "דגם תלוי במראה נקי לחדרי רחצה מודרניים. בחרו מידה וגימור ונמשיך להצעה מסודרת.",
    sizes: ["60", "80", "100", "120", "140"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/Dikla-Concrete_app-400x400.jpg",
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
    typeLabel: "ארון תלוי דלתות",
    finish: "דלתות טריקה שקטה",
    description: "ארון תלוי עם דלתות, מתאים למי שמעדיף חזית נקייה ונגישות פשוטה לאחסון.",
    sizes: ["60", "80", "100", "120"],
    colors: ["בטון", "לבן", "גרפיט", "עץ מאושן", "אגוז אמריקאי", "עץ נטורל"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A2%D7%A8%D7%91%D7%94-3-550x550.png",
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
    typeLabel: "ארון תלוי דלתות",
    finish: "דלתות",
    description: "גרסת דלתות לדגם דקלה. נבדוק את המידה והגימור המתאימים לפני אישור הזמנה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    image: "assets/product-dikla-doors.svg",
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
    typeLabel: "ארון תלוי מודולרי",
    finish: "מגירות / דלתות משולב",
    description: "פתרון מודולרי לחדרי רחצה שצריכים חלוקה רחבה או שילוב יחידות לפי הצורך.",
    sizes: ["60", "80", "100", "120"],
    colors: ["גרפיט", "פודרה", "לבן מט", "לבן מבריק", "כחול מעושן", "מוקה", "פיסטוק"],
    image: "https://novo-gal.co.il/wp-content/uploads/2024/03/%D7%A0%D7%99%D7%95-%D7%9E%D7%90%D7%92-%D7%9C%D7%91%D7%9F-%D7%99%D7%93%D7%99%D7%95%D7%AA-%D7%96%D7%94%D7%91-%D7%9E%D7%98-%D7%9E%D7%99%D7%93%D7%94-604650-%D7%9B%D7%95%D7%9C%D7%9C-%D7%9E%D7%A8%D7%90%D7%94-%D7%9E%D7%A8%D7%97%D7%A4%D7%AA-%D7%9B%D7%99%D7%95%D7%A8-%D7%90%D7%99%D7%A0%D7%98%D7%92%D7%A8%D7%9C%D7%99-%D7%9C%D7%91%D7%9F-43-550x550.png",
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
    typeLabel: "ארון תלוי מגירה ותא פתוח",
    finish: "מגירה + תא פתוח",
    description: "ארון תלוי עם מגירה ותא פתוח, מתאים למראה קליל ונגיש בחדר הרחצה.",
    sizes: ["60/46", "80/46", "100/46", "120/46"],
    colors: ["פודרה", "כחול מעושן", "עץ זברה", "אגוז אמריקאי", "עץ נטורל"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A0%D7%95%D7%91%D7%95-%D7%AA%D7%90-%D7%A4%D7%AA%D7%95%D7%97-2-400x400.png",
    productUrl: "cabinets-topaz.html",
    source: "https://novo-gal.co.il/product/%D7%A0%D7%95%D7%91%D7%95-%D7%A1%D7%95%D7%95%D7%99%D7%A5/"
  },
  {
    id: "shower-angelo-2",
    slug: "hadas-angelo-2",
    categoryGroup: "showers",
    category: "פינתי",
    commercialName: "הדס",
    supplierName: "אנג'לו 2",
    typeLabel: "מקלחון פינתי מרובע",
    description: "מקלחון פינתי מרובע עם מידות וגימורים שנבדקים לפי התאמת החלל.",
    sizes: ["73-75", "77-80", "83-85", "87-90", "97-100"],
    colors: ["ניקל", "שחור מט"],
    glass: ["שקופה", "שקופה עם פסים"],
    productUrl: "showers-hadas.html",
    source: "https://novo-gal.co.il/product/%D7%90%D7%A0%D7%92%D7%9C%D7%95-2/"
  },
  {
    id: "shower-angelo-6",
    slug: "rotem-angelo-6",
    categoryGroup: "showers",
    category: "פינתי",
    commercialName: "רותם",
    supplierName: "אנג'לו 6",
    typeLabel: "מקלחון פינתי מרובע",
    description: "מקלחון פינתי מרובע במבחר מידות וגימורים לפי נתוני הדגם.",
    sizes: ["73-75", "77-80", "83-85", "87-90"],
    colors: ["ניקל", "שחור מט"],
    glass: ["שקופה", "שקופה עם פסים", "פליסה"],
    productUrl: "showers-rotem.html",
    source: "https://novo-gal.co.il/product/%D7%90%D7%A0%D7%92%D7%9C%D7%95-6/"
  },
  {
    id: "shower-magic",
    slug: "marva-magic",
    categoryGroup: "showers",
    category: "מתקפל",
    commercialName: "מרווה",
    supplierName: "מג'יק",
    typeLabel: "מקלחון פינתי מתקפל",
    description: "מקלחון מתקפל לחדרי רחצה שבהם חשוב לשמור על פתיחה נוחה ומעבר פנוי.",
    sizes: ["77-80", "83-85", "87-90"],
    colors: ["ניקל", "שחור מט"],
    glass: ["שקופה", "שקופה עם פסים", "פליסה"],
    productUrl: "showers-marva.html",
    source: "https://novo-gal.co.il/product/%D7%9E%D7%92%D7%99%D7%A7/"
  },
  {
    id: "shower-picasso",
    slug: "ela-picasso",
    categoryGroup: "showers",
    category: "הזזה",
    commercialName: "אלה",
    supplierName: "פיקסו",
    typeLabel: "מקלחון פינתי הזזה",
    description: "מקלחון הזזה פינתי, מתאים לחללים שבהם רוצים פתיחה בלי כנף נפתחת החוצה.",
    sizes: ["77-80", "87-90"],
    colors: ["ניקל", "שחור מט"],
    glass: ["שקופה", "שקופה עם פסים"],
    productUrl: "showers-ela.html",
    source: "https://novo-gal.co.il/product/%D7%A4%D7%99%D7%A7%D7%A1%D7%95/"
  }
];

const productById = Object.fromEntries(products.map(product => [product.id, product]));

function whatsappLink(message = SITE.defaultMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getSizeKey(size){
  return String(size).match(/\d+/)?.[0] || size;
}

function currentUrlParams(){
  return new URLSearchParams(window.location.search);
}

function getCatalogGroup(){
  return document.body.dataset.catalogGroup || 'cabinets';
}

function getCatalogProducts(){
  const group = getCatalogGroup();
  return products.filter(product => product.categoryGroup === group);
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
  const optionLabel = product.categoryGroup === 'showers' ? 'גימור' : 'צבע/גימור';
  const urlLine = pageUrl ? `\nקישור לעמוד: ${pageUrl}` : '';
  return `שלום, אני מעוניין/ת לקבל הצעה ולהזמין.\nדגם: ${product.commercialName}.\nמזהה מוצר: ${product.id}.\nשם ספק: ${product.supplierName}.\nסוג: ${product.typeLabel}.\nמידה: ${size}.\n${optionLabel}: ${color}.${urlLine}`;
}

function attachDefaultWhatsappLinks(){
  document.querySelectorAll('#heroWhatsapp,#cardWhatsapp,#contactWhatsapp,#floatingWhatsapp,#navWhatsapp,#productsWhatsapp,#quoteWhatsapp,#showersWhatsapp,#helpWhatsapp').forEach(el => {
    el.href = whatsappLink(el.dataset.message || SITE.defaultMessage);
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

function productImage(product){
  if(product.image){
    return `<img src="${product.image}" alt="${product.commercialName} - ${product.typeLabel}" loading="lazy" decoding="async">`;
  }
  return `<div class="product-placeholder" aria-label="${product.commercialName} - תמונה תתווסף לאחר אישור שימוש"><span>${product.commercialName}</span></div>`;
}

function renderFilters(){
  const filters = document.getElementById('filters');
  if(!filters) return;
  const group = getCatalogGroup();
  const params = currentUrlParams();
  const width = params.get('width') || 'all';
  const type = params.get('type') || 'all';
  const color = params.get('color') || 'all';
  const productsForGroup = getCatalogProducts();
  const widths = ['all', ...new Set(productsForGroup.flatMap(product => product.sizes.map(getSizeKey)))];
  const types = ['all', ...new Set(productsForGroup.map(product => product.category))];
  const colors = ['all', ...new Set(productsForGroup.flatMap(product => product.colors || []))];
  const widthLabel = group === 'showers' ? 'מידה' : 'רוחב';
  filters.innerHTML = `
    <div class="filters-top">
      <strong data-results-count></strong>
      <button class="filter-clear" type="button" data-clear-filters>ניקוי מסננים</button>
    </div>
    <div class="filter-group" aria-label="סינון לפי ${widthLabel}">
      ${widths.map(item => `<button class="filter-btn ${width === item ? 'active' : ''}" data-filter="width" data-value="${item}">${item === 'all' ? `כל ה${widthLabel}ים` : item + ' ס״מ'}</button>`).join('')}
    </div>
    <div class="filter-group" aria-label="סינון לפי סוג">
      ${types.map(item => `<button class="filter-btn ${type === item ? 'active' : ''}" data-filter="type" data-value="${item}">${item === 'all' ? 'כל הסוגים' : item}</button>`).join('')}
    </div>
    <div class="filter-group" aria-label="סינון לפי גימור">
      ${colors.map(item => `<button class="filter-btn ${color === item ? 'active' : ''}" data-filter="color" data-value="${item}">${item === 'all' ? 'כל הגימורים' : item}</button>`).join('')}
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
  filters.querySelector('[data-clear-filters]')?.addEventListener('click', () => {
    history.replaceState(null, '', location.pathname);
    renderFilters();
    renderProducts();
  });
}

function matchingCatalogProducts(){
  const params = currentUrlParams();
  const width = params.get('width');
  const type = params.get('type');
  const color = params.get('color');
  return getCatalogProducts().filter(product => {
    const matchesWidth = !width || product.sizes.some(size => getSizeKey(size) === width);
    const matchesType = !type || product.category === type;
    const matchesColor = !color || product.colors?.includes(color);
    return matchesWidth && matchesType && matchesColor;
  });
}

function renderProducts(){
  const productGrid = document.getElementById('productGrid');
  if(!productGrid) return;
  const params = currentUrlParams();
  const width = params.get('width');
  const shown = matchingCatalogProducts();
  const count = document.querySelector('[data-results-count]');
  if(count) count.textContent = `${shown.length} תוצאות`;
  productGrid.innerHTML = shown.map(product => {
    const selectedSize = width && product.sizes?.some(size => getSizeKey(size) === width)
      ? product.sizes.find(size => getSizeKey(size) === width)
      : product.sizes?.[0] || 'לפי התאמה';
    const href = pageUrlWithSize(product, selectedSize);
    const sizesLabel = product.sizes?.length ? product.sizes.join(' / ') : 'לפי התאמה';
    return `<article class="product-card catalog-card reveal visible">
      <a class="product-image product-image-link" href="${href}">${productImage(product)}</a>
      <h3><a href="${href}">${product.commercialName}</a></h3>
      <p>${product.typeLabel}</p>
      <div class="product-meta"><span>${sizesLabel}</span><span>${product.category}</span></div>
      <div class="product-card-note">לבחירת מידות ופרטים</div>
      <a class="btn full" href="${href}">לצפייה במוצר</a>
    </article>`;
  }).join('') || `<div class="empty-state"><strong>לא נמצאו מוצרים מתאימים</strong><p>אפשר לנקות מסננים או לשלוח הודעה ונעזור בהתאמה.</p></div>`;
}

function renderFeaturedProducts(){
  const grid = document.getElementById('homeFeaturedGrid');
  if(!grid) return;
  const featured = products.filter(product => product.categoryGroup === 'cabinets').slice(0, 3);
  grid.innerHTML = featured.map(product => `<article class="product-card compact-card">
    <a class="product-image product-image-link" href="${product.productUrl}">${productImage(product)}</a>
    <h3><a href="${product.productUrl}">${product.commercialName}</a></h3>
    <p>${product.typeLabel}</p>
    <a class="btn secondary" href="${product.productUrl}">פרטים</a>
  </article>`).join('');
}

function bindProductDetail(){
  const detail = document.querySelector('[data-product-detail]');
  if(!detail) return;
  const product = productById[detail.dataset.productId];
  if(!product) return;
  const params = currentUrlParams();
  const requestedWidth = params.get('width');
  const sizeSelect = detail.querySelector('[name="size"]');
  const colorSelect = detail.querySelector('[name="color"]');
  const summary = detail.querySelector('[data-selection-summary]');
  const whatsapp = detail.querySelector('[data-detail-whatsapp]');
  const sticky = document.getElementById('stickyOrderWhatsapp');
  const image = detail.querySelector('[data-detail-image]');
  const imageSlot = detail.querySelector('[data-detail-image-slot]');
  const title = detail.querySelector('[data-detail-title]');
  const subtitle = detail.querySelector('[data-detail-subtitle]');
  const description = detail.querySelector('[data-detail-description]');
  const specs = detail.querySelector('[data-detail-specs]');
  const backLink = detail.querySelector('[data-back-to-catalog]');
  const sourceLink = detail.querySelector('[data-source-link]');

  if(image && product.image){
    image.src = product.image;
    image.alt = `${product.commercialName} - ${product.typeLabel}`;
  } else if(imageSlot && !product.image) {
    imageSlot.innerHTML = productImage(product);
  }
  if(title) title.textContent = product.commercialName;
  if(subtitle) subtitle.textContent = product.typeLabel;
  if(description) description.textContent = product.description;
  if(sourceLink) sourceLink.href = product.source;
  if(specs){
    const glassLine = product.glass?.length ? `<div><strong>זכוכית</strong><span>${product.glass.join(' / ')}</span></div>` : '';
    specs.innerHTML = `
      <div><strong>סוג</strong><span>${product.typeLabel}</span></div>
      <div><strong>מידות זמינות</strong><span>${product.sizes.join(' / ')}</span></div>
      <div><strong>${product.categoryGroup === 'showers' ? 'גימורים' : 'צבעים'}</strong><span>${product.colors.join(' / ')}</span></div>
      ${glassLine}`;
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
    const backPath = product.categoryGroup === 'showers' ? 'showers.html' : 'bathroom-cabinets.html';
    backLink.href = requestedWidth ? `${backPath}?width=${requestedWidth}` : backPath;
  }
  function update(){
    const size = sizeSelect?.value || 'לפי התאמה';
    const color = colorSelect?.value || 'לפי התאמה';
    const url = absoluteProductUrl(product, size) || window.location.href;
    const msg = productOrderMessage(product, size, color, url);
    if(summary) summary.textContent = `נבחר: ${size} ס״מ · ${color}`;
    if(whatsapp) whatsapp.href = whatsappLink(msg);
    if(sticky) sticky.href = whatsappLink(msg);
  }
  sizeSelect?.addEventListener('change', update);
  colorSelect?.addEventListener('change', update);
  update();
}

function bindLeadForm(){
  const leadForm = document.getElementById('leadForm');
  if(!leadForm) return;
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(leadForm);
    const msg = `שלום, ראיתי את האתר ואני רוצה הצעה.\nשם: ${data.get('name')}\nעיר: ${data.get('city')}\nרוחב משוער: ${data.get('width') || 'לא צוין'}\nסוג שירות: ${data.get('service') || 'לא צוין'}\nפירוט: ${data.get('message') || 'לא צוין'}`;
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
initReveal();
