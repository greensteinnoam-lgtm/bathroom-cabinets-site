const SITE = {
  whatsappNumber: "972584209429",
  defaultMessage: "שלום, ראיתי את האתר ואני מתעניין/ת בארון אמבטיה או מקלחון. אשמח לקבל עזרה בבחירה.",
  baseUrl: "https://statuesque-eclair-7d0bef.netlify.app/"
};

const products = CATALOG_PRODUCTS;

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
  if(size) url.searchParams.set('width', product.categoryGroup === 'showers' ? size : getSizeKey(size));
  if(size) url.searchParams.set('size', size);
  if(document.getElementById('productGrid')){
    url.searchParams.set('returnTo', location.pathname.split('/').pop() + location.search);
    const color = currentUrlParams().get('color');
    if(color) url.searchParams.set('color', color);
  }
  return `${url.pathname.replace(/^\//, '')}${url.search}`;
}

function absoluteProductUrl(product, size){
  if(!product.productUrl) return '';
  const url = new URL(product.productUrl, SITE.baseUrl);
  if(size) url.searchParams.set('width', product.categoryGroup === 'showers' ? size : getSizeKey(size));
  if(size) url.searchParams.set('size', size);
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
  const widths = ['all', ...[...new Set(productsForGroup.flatMap(product => product.sizes.map(size => group === 'showers' ? size : getSizeKey(size))))].sort((a,b) => Number(getSizeKey(a)) - Number(getSizeKey(b)))];
  const types = ['all', ...new Set(productsForGroup.map(product => product.category))];
  const colors = ['all', ...new Set(productsForGroup.flatMap(product => product.colors || []))];
  const widthLabel = group === 'showers' ? 'מידה' : 'רוחב';
  filters.innerHTML = `
    <div class="filters-top">
      <strong data-results-count></strong>
      <button class="filter-clear" type="button" data-clear-filters>ניקוי מסננים</button>
    </div>
    <div class="filter-group" aria-label="סינון לפי ${widthLabel}">
      ${widths.map(item => `<button class="filter-btn ${width === item ? 'active' : ''}" data-filter="width" data-value="${item}">${item === 'all' ? (group === 'showers' ? 'כל המידות' : 'כל הרוחבים') : item + ' ס״מ'}</button>`).join('')}
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
    const matchesWidth = !width || product.sizes.some(size => size === width || getSizeKey(size) === width) || (product.customWidth && product.minimumWidth && Number(width) >= product.minimumWidth && (!product.maximumWidth || Number(width) <= product.maximumWidth));
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
    const selectedSize = product.customWidth ? (width || '') : width && product.sizes?.some(size => size === width || getSizeKey(size) === width)
      ? product.sizes.find(size => size === width || getSizeKey(size) === width)
      : product.sizes?.[0] || 'לפי התאמה';
    const href = pageUrlWithSize(product, selectedSize);
    const sizesLabel = product.customWidth ? (product.minimumWidth ? `מ־${product.minimumWidth} ס״מ, לפי התאמה` : `לפי התאמה, עד ${product.maximumWidth} ס״מ`) : product.sizes.join(' / ');
    return `<article class="product-card catalog-card reveal visible">
      <a class="product-image product-image-link" href="${href}">${productImage(product)}</a>
      <h3><a href="${href}">${product.commercialName}</a></h3>
      <p>${product.typeLabel}</p>
      <div class="product-meta"><span>${sizesLabel}</span><span>${product.category}</span></div>
      <div class="product-card-note">לבחירת מידות ופרטים</div>
      <a class="btn full" href="${href}">לצפייה במוצר</a>
    </article>`;
  }).join('') || `<div class="empty-state"><strong>לא נמצאו מוצרים מתאימים</strong><p>אפשר לנקות מסננים או לשלוח הודעה ונעזור בהתאמה.</p></div>`;
  productGrid.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    try { sessionStorage.setItem('catalogScroll:' + location.pathname + location.search, String(window.scrollY)); } catch {}
  }));
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
  const customWidth = detail.querySelector('[name="customWidth"]');
  const colorSelect = detail.querySelector('[name="color"]');
  const glassSelect = detail.querySelector('[name="glass"]');
  const handleSelect = detail.querySelector('[name="handle"]');
  const extraChoices = [['depth','עומק'], ['leg','גימור רגליים'], ['side','גימור דופן'], ['opening','כיוון פתיחה']].map(([name,label]) => ({name,label,select: detail.querySelector(`[name="${name}"]`)})).filter(choice => choice.select);
  const summary = detail.querySelector('[data-selection-summary]');
  const whatsapp = detail.querySelector('[data-detail-whatsapp]');
  const sticky = document.getElementById('stickyOrderWhatsapp');
  let image = detail.querySelector('[data-detail-image]');
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
  } else if(imageSlot) {
    imageSlot.innerHTML = productImage(product);
    image = imageSlot.querySelector('img');
  }
  const gallery = detail.querySelector('.product-gallery');
  if(gallery && image && product.images?.length > 1){
    const thumbnails = document.createElement('div');
    thumbnails.className = 'product-thumbnails';
    thumbnails.innerHTML = product.images.map((src, index) => `<button type="button" aria-label="תמונה ${index + 1} של ${product.commercialName}" aria-pressed="${index === 0}"><img src="${src}" alt="${product.commercialName} - תמונה ${index + 1}" loading="lazy"></button>`).join('');
    thumbnails.querySelectorAll('button').forEach((button, index) => button.addEventListener('click', () => {
      image.src = product.images[index];
      thumbnails.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    }));
    gallery.append(thumbnails);
  }
  if(title) title.textContent = product.commercialName;
  if(subtitle) subtitle.textContent = product.typeLabel;
  if(description) description.textContent = product.description;
  if(sourceLink) sourceLink.href = product.source;
  if(specs){
    const glassLine = product.glass?.length ? `<div><strong>זכוכית</strong><span>${product.glass.join(' / ')}</span></div>` : '';
    specs.innerHTML = `
      <div><strong>סוג</strong><span>${product.typeLabel}</span></div>
      <div><strong>מידות</strong><span>${product.customWidth ? (product.minimumWidth ? `מ־${product.minimumWidth} ס״מ, לפי התאמה` : `לפי התאמה, עד ${product.maximumWidth} ס״מ`) : product.sizes.join(' / ')}</span></div>
      <div><strong>${product.categoryGroup === 'showers' ? 'גימורים' : 'צבעים'}</strong><span>${product.colors.join(' / ')}</span></div>
      ${glassLine}
      ${(product.specs || []).map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`).join('')}`;
  }
  if(sizeSelect){
    sizeSelect.innerHTML = product.sizes.map(size => `<option value="${size}">${size} ס״מ</option>`).join('');
    if(requestedWidth){
      const requestedOption = [...sizeSelect.options].find(option => option.value === params.get('size')) || [...sizeSelect.options].find(option => option.value === requestedWidth || getSizeKey(option.value) === requestedWidth);
      if(requestedOption) sizeSelect.value = requestedOption.value;
    }
  }
  if(customWidth && requestedWidth && Number(requestedWidth) >= Number(customWidth.min || 1) && (!customWidth.max || Number(requestedWidth) <= Number(customWidth.max))) customWidth.value = requestedWidth;
  if(colorSelect){
    colorSelect.innerHTML = (product.requireChoice ? '<option value="">בחרו צבע / גימור</option>' : '') + product.colors.map(color => `<option value="${color}">${color}</option>`).join('');
  }
  if(glassSelect) glassSelect.innerHTML = '<option value="">בחרו סוג זכוכית</option>' + (product.glass || []).map(glass => `<option value="${glass}">${glass}</option>`).join('');
  if(handleSelect) handleSelect.innerHTML = '<option value="">בחרו גימור ידיות</option>' + (product.handles || []).map(handle => `<option value="${handle}">${handle}</option>`).join('');
  for(const select of detail.querySelectorAll('select')){
    const requested = params.get(select.name);
    if(requested && [...select.options].some(option => option.value === requested)) select.value = requested;
  }
  if(backLink){
    const backPath = product.categoryGroup === 'showers' ? 'showers.html' : 'bathroom-cabinets.html';
    const returnTo = params.get('returnTo');
    const allowed = returnTo && /^(bathroom-cabinets|showers|products)\.html(?:\?|$)/.test(returnTo);
    backLink.href = allowed ? returnTo : requestedWidth ? `${backPath}?width=${encodeURIComponent(requestedWidth)}` : backPath;
  }
  function update(){
    const size = customWidth ? (customWidth.value && customWidth.checkValidity() ? `${customWidth.value} ס״מ מבוקש, לאישור התאמה` : 'לפי התאמה') : sizeSelect?.value || 'לפי התאמה';
    const color = colorSelect?.value || 'טרם נבחר';
    const url = new URL(absoluteProductUrl(product, customWidth ? (customWidth.checkValidity() ? customWidth.value : '') : size) || window.location.href);
    if(colorSelect?.value) url.searchParams.set('color', colorSelect.value);
    const extraLines = extraChoices.map(choice => `\n${choice.label}: ${choice.select.value || 'טרם נבחר'}`).join('');
    for(const choice of extraChoices) if(choice.select.value) url.searchParams.set(choice.name, choice.select.value);
    if(glassSelect?.value) url.searchParams.set('glass', glassSelect.value);
    if(handleSelect?.value) url.searchParams.set('handle', handleSelect.value);
    const glassLine = glassSelect ? `\nזכוכית: ${glassSelect.value || 'טרם נבחרה'}` : '';
    const handleLine = handleSelect ? `\nידיות: ${handleSelect.value || 'טרם נבחרו'}` : '';
    const msg = productOrderMessage(product, size, color, url.href) + glassLine + handleLine + extraLines;
    if(summary) summary.textContent = `נבחר: ${size}${customWidth ? '' : ' ס״מ'} · ${color}${glassSelect ? ' · זכוכית: ' + (glassSelect.value || 'טרם נבחרה') : ''}${handleSelect ? ' · ידיות: ' + (handleSelect.value || 'טרם נבחרו') : ''}${extraChoices.map(choice => ' · ' + choice.label + ': ' + (choice.select.value || 'טרם נבחר')).join('')}`;
    if(whatsapp) whatsapp.href = whatsappLink(msg);
    if(sticky) sticky.href = whatsappLink(msg);
  }
  sizeSelect?.addEventListener('change', update);
  customWidth?.addEventListener('input', update);
  colorSelect?.addEventListener('change', update);
  glassSelect?.addEventListener('change', update);
  handleSelect?.addEventListener('change', update);
  extraChoices.forEach(choice => choice.select.addEventListener('change', update));
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
if(document.getElementById('productGrid')){
  try {
    const savedScroll = Number(sessionStorage.getItem('catalogScroll:' + location.pathname + location.search));
    if(savedScroll) requestAnimationFrame(() => window.scrollTo(0, savedScroll));
  } catch {}
}
renderFeaturedProducts();
bindProductDetail();
bindLeadForm();
bindMenu();
initReveal();
