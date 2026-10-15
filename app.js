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

function escapeHtml(value){
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function safeCatalogReturn(value){
  if(typeof value !== 'string' || value !== value.trim() || /[\\\u0000-\u001f\u007f]/.test(value)) return null;
  const pathname = value.split(/[?#]/, 1)[0];
  if(!/^\/?(?:bathroom-cabinets|showers|products)(?:\.html)?\/?$/.test(pathname)) return null;
  try {
    const target = new URL(value, location.origin + '/');
    if(target.origin !== location.origin || target.username || target.password) return null;
    return target.pathname.replace(/\/$/, '') + target.search + target.hash;
  } catch { return null; }
}

function pageUrlWithSize(product, size){
  if(!product.productUrl) return '';
  const url = new URL(product.productUrl, SITE.baseUrl);
  if(size) url.searchParams.set('width', product.categoryGroup === 'showers' ? size : getSizeKey(size));
  if(size) url.searchParams.set('size', size);
  if(document.getElementById('productGrid')){
    url.searchParams.set('returnTo', location.pathname + location.search + location.hash);
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
  return `שלום, אשמח לקבל הצעה.\nדגם: ${product.commercialName}.\nמזהה מוצר: ${product.id}.\nשם ספק: ${product.supplierName}.\nסוג: ${product.typeLabel}.\nמידה: ${size}.\n${optionLabel}: ${color}.${urlLine}`;
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

let catalogFiltersOpen = false;

function setCatalogFilter(key, value){
  const url = new URL(location.href);
  if(value && value !== 'all') url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
  renderFilters();
  renderProducts();
  const target = matchMedia('(max-width:767px)').matches && !catalogFiltersOpen
    ? document.querySelector('[data-toggle-filters]')
    : document.querySelector(`[data-filter-select="${key}"]`);
  target?.focus({preventScroll:true});
}

function renderFilters(){
  const filters = document.getElementById('filters');
  if(!filters) return;
  const group = getCatalogGroup();
  const params = currentUrlParams();
  const productsForGroup = getCatalogProducts();
  const widths = ['all', ...[...new Set(productsForGroup.flatMap(product => product.sizes.map(size => group === 'showers' ? size : getSizeKey(size))))].sort((a,b) => Number(getSizeKey(a)) - Number(getSizeKey(b)))];
  const types = ['all', ...new Set(productsForGroup.map(product => product.category))];
  const colors = ['all', ...new Set(productsForGroup.flatMap(product => product.colors || []))];
  const widthLabel = group === 'showers' ? 'מידה' : 'רוחב';
  const fields = [
    {key:'width', label:widthLabel, values:widths, all:group === 'showers' ? 'כל המידות' : 'כל הרוחבים'},
    {key:'type', label:'סוג', values:types, all:'כל הסוגים'},
    {key:'color', label:'צבע / גימור', values:colors, all:'כל הגימורים'}
  ];
  const active = fields.filter(field => params.has(field.key) && params.get(field.key));
  const options = field => {
    const selected = params.get(field.key) || 'all';
    const values = field.values.includes(selected) ? field.values : [...field.values, selected];
    return values.map(value => `<option value="${escapeHtml(value)}" ${selected === value ? 'selected' : ''}>${escapeHtml(value === 'all' ? field.all : value + (field.key === 'width' ? ' ס״מ' : ''))}</option>`).join('');
  };
  filters.innerHTML = `
    <div class="catalog-toolbar">
      <button class="filter-toggle" type="button" data-toggle-filters aria-controls="catalogFilterPanel" aria-expanded="${catalogFiltersOpen}">סינון${active.length ? ` (${active.length})` : ''}</button>
      <strong data-results-count role="status" aria-live="polite"></strong>
      <button class="filter-clear" type="button" data-clear-filters ${active.length ? '' : 'hidden'}>ניקוי מסננים</button>
    </div>
    <div class="catalog-filter-panel ${catalogFiltersOpen ? 'is-open' : ''}" id="catalogFilterPanel">
      <div class="catalog-filter-fields">${fields.map(field => `<label>${field.label}<select data-filter-select="${field.key}">${options(field)}</select></label>`).join('')}</div>
      <button class="filter-panel-done" type="button" data-close-filters>הצגת מוצרים</button>
    </div>
    ${active.length ? `<div class="active-filters" aria-label="מסננים פעילים">${active.map(field => `<button type="button" data-remove-filter="${field.key}" aria-label="${escapeHtml('הסרת סינון ' + field.label + ': ' + params.get(field.key))}" title="${escapeHtml('הסרת סינון ' + field.label)}">${field.label}: ${escapeHtml(params.get(field.key))}<span aria-hidden="true">×</span></button>`).join('')}</div>` : ''}`;
  const toggle = filters.querySelector('[data-toggle-filters]');
  const panel = filters.querySelector('#catalogFilterPanel');
  const setOpen = open => {
    catalogFiltersOpen = open;
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if(!open) toggle.focus({preventScroll:true});
  };
  toggle.addEventListener('click', () => setOpen(!catalogFiltersOpen));
  filters.querySelector('[data-close-filters]').addEventListener('click', () => setOpen(false));
  panel.addEventListener('keydown', event => {
    if(event.key === 'Escape' && matchMedia('(max-width:767px)').matches){
      event.preventDefault();
      setOpen(false);
    }
  });
  filters.querySelectorAll('[data-filter-select]').forEach(select => select.addEventListener('change', () => setCatalogFilter(select.dataset.filterSelect, select.value)));
  filters.querySelectorAll('[data-remove-filter]').forEach(button => button.addEventListener('click', () => setCatalogFilter(button.dataset.removeFilter, 'all')));
  filters.querySelector('[data-clear-filters]')?.addEventListener('click', () => {
    const url = new URL(location.href);
    fields.forEach(field => url.searchParams.delete(field.key));
    history.replaceState(null, '', url.pathname + url.search + url.hash);
    renderFilters();
    renderProducts();
    (matchMedia('(max-width:767px)').matches ? filters.querySelector('[data-toggle-filters]') : filters.querySelector('select'))?.focus({preventScroll:true});
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
      : '';
    const href = pageUrlWithSize(product, selectedSize);
    const sizesLabel = catalogSizeSummary(product);
    return `<article class="product-card catalog-card reveal visible">
      <a class="product-image product-image-link" href="${href}">${productImage(product)}</a>
      <h3><a href="${href}">${product.commercialName}</a></h3>
      <p>${product.typeLabel}</p>
      <p class="product-sizes">${sizesLabel}</p>
      <a class="btn full" href="${href}">מידות ופרטים</a>
    </article>`;
  }).join('') || `<div class="empty-state"><strong>לא נמצאו מוצרים מתאימים</strong><p>אפשר לנקות מסננים או לשלוח הודעה ונעזור בהתאמה.</p></div>`;
  productGrid.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    try { sessionStorage.setItem('catalogScroll:' + location.pathname + location.search, String(window.scrollY)); } catch {}
  }));
}

function catalogSizeSummary(product){
  if(product.customWidth) return product.minimumWidth ? `מ־${product.minimumWidth} ס״מ, בהתאמה` : `עד ${product.maximumWidth} ס״מ, בהתאמה`;
  const sizes = [...new Set(product.sizes.map(size => product.categoryGroup === 'cabinets' ? getSizeKey(size) : size))];
  return `${sizes.slice(0,4).join(' / ')} ס״מ${sizes.length > 4 ? ` · ועוד ${sizes.length - 4} מידות` : ''}`;
}

function renderFeaturedProducts(){
  const grid = document.getElementById('homeFeaturedGrid');
  if(!grid) return;
  const featured = products.filter(product => product.categoryGroup === 'cabinets').slice(0, 3);
  grid.innerHTML = featured.map(product => `<article class="product-card compact-card">
    <a class="product-image product-image-link" href="${product.productUrl}">${productImage(product)}</a>
    <h3><a href="${product.productUrl}">${product.commercialName}</a></h3>
    <p>${product.typeLabel}</p>
    <p class="product-sizes">${catalogSizeSummary(product)}</p>
    <a class="btn secondary" href="${product.productUrl}">מידות ופרטים</a>
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
  const help = detail.querySelector('#helpWhatsapp');
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
    gallery.querySelector('.product-image-note')?.before(thumbnails);
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
    sizeSelect.innerHTML = '<option value="">בחרו מידה / עזרה בהתאמה</option>' + product.sizes.map(size => `<option value="${size}">${size} ס״מ</option>`).join('');
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
    backLink.href = safeCatalogReturn(params.get('returnTo')) || backPath;
  }
  const widthError = detail.querySelector('[data-width-error]');
  const invalidWidth = () => Boolean(customWidth && (customWidth.validity.badInput || (customWidth.value !== '' && !customWidth.checkValidity())));
  [whatsapp, sticky].filter(Boolean).forEach(link => link.addEventListener('click', event => {
    if(!invalidWidth()) return;
    event.preventDefault();
    customWidth.focus();
    customWidth.reportValidity();
  }));
  detail.querySelector('form')?.addEventListener('submit', event => event.preventDefault());
  function update(){
    const invalid = invalidWidth();
    if(customWidth) customWidth.setAttribute('aria-invalid', String(invalid));
    if(widthError){
      widthError.hidden = !invalid;
      widthError.textContent = invalid ? `יש להזין רוחב בטווח ${customWidth.min}${customWidth.max ? '–' + customWidth.max : ' ומעלה'} ס״מ.` : '';
    }
    [whatsapp, sticky].filter(Boolean).forEach(link => {
      if(invalid) link.setAttribute('aria-disabled', 'true');
      else link.removeAttribute('aria-disabled');
    });
    const chosenSize = customWidth ? (customWidth.checkValidity() ? customWidth.value : '') : sizeSelect?.value || '';
    const size = customWidth ? (chosenSize ? `${chosenSize} ס״מ מבוקש, לאישור התאמה` : 'לפי התאמה') : chosenSize || 'טרם נבחרה';
    const color = colorSelect?.value || 'טרם נבחר';
    const url = new URL(absoluteProductUrl(product, chosenSize) || window.location.href);
    if(colorSelect?.value) url.searchParams.set('color', colorSelect.value);
    const extraLines = extraChoices.map(choice => `\n${choice.label}: ${choice.select.value || 'טרם נבחר'}`).join('');
    for(const choice of extraChoices) if(choice.select.value) url.searchParams.set(choice.name, choice.select.value);
    if(glassSelect?.value) url.searchParams.set('glass', glassSelect.value);
    if(handleSelect?.value) url.searchParams.set('handle', handleSelect.value);
    const glassLine = glassSelect ? `\nזכוכית: ${glassSelect.value || 'טרם נבחרה'}` : '';
    const handleLine = handleSelect ? `\nידיות: ${handleSelect.value || 'טרם נבחרו'}` : '';
    const msg = productOrderMessage(product, size, color, url.href) + glassLine + handleLine + extraLines;
    if(summary) summary.textContent = `מידה: ${size}${!customWidth && chosenSize ? ' ס״מ' : ''} · ${color}${glassSelect ? ' · זכוכית: ' + (glassSelect.value || 'טרם נבחרה') : ''}${handleSelect ? ' · ידיות: ' + (handleSelect.value || 'טרם נבחרו') : ''}${extraChoices.map(choice => ' · ' + choice.label + ': ' + (choice.select.value || 'טרם נבחר')).join('')}`;
    if(whatsapp) whatsapp.href = whatsappLink(msg);
    if(sticky) sticky.href = whatsappLink(msg);
    if(help) help.href = whatsappLink(msg.replace('שלום, אשמח לקבל הצעה.', 'שלום, אשמח לעזרה בהתאמה ולבירור המידה והגימור.'));
    const current = new URL(window.location.href);
    for(const [name, value] of [['width', chosenSize ? (product.categoryGroup === 'showers' ? chosenSize : getSizeKey(chosenSize)) : ''], ['size', customWidth ? '' : chosenSize], ['color', colorSelect?.value || ''], ['glass', glassSelect?.value || ''], ['handle', handleSelect?.value || ''], ...extraChoices.map(choice => [choice.name, choice.select.value])]){
      if(value) current.searchParams.set(name, value);
      else current.searchParams.delete(name);
    }
    if(current.href !== window.location.href) history.replaceState(null, '', current.pathname + current.search + current.hash);
  }
  sizeSelect?.addEventListener('change', update);
  customWidth?.addEventListener('input', update);
  colorSelect?.addEventListener('change', update);
  glassSelect?.addEventListener('change', update);
  handleSelect?.addEventListener('change', update);
  extraChoices.forEach(choice => choice.select.addEventListener('change', update));
  update();
  if(sticky && 'IntersectionObserver' in window){
    const visibleControls = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) visibleControls.add(entry.target);
        else visibleControls.delete(entry.target);
      });
      sticky.hidden = visibleControls.size > 0;
    });
    [detail.querySelector('.product-buy-box'), document.querySelector('footer')].filter(Boolean).forEach(element => observer.observe(element));
  }
}

function bindImageViewer(){
  const trigger = document.querySelector('[data-zoom-image]');
  if(!trigger) return;
  const detail = document.querySelector('[data-product-detail]');
  const product = productById[detail.dataset.productId];
  const mainImage = trigger.querySelector('img');
  const sources = product.images?.length ? product.images : [product.image];
  const dialog = document.createElement('dialog');
  dialog.className = 'image-lightbox';
  dialog.setAttribute('aria-labelledby', 'imageViewerTitle');
  dialog.innerHTML = `<div class="image-lightbox-content">
    <div class="image-lightbox-toolbar"><p id="imageViewerTitle"></p><button type="button" data-viewer-close aria-label="סגירת התמונה" title="סגירת התמונה">&times;</button></div>
    <img data-viewer-image alt="">
    <div class="image-lightbox-controls"><button type="button" data-viewer-prev aria-label="התמונה הקודמת" title="התמונה הקודמת">&#8250;</button><span data-viewer-count aria-live="polite"></span><button type="button" data-viewer-next aria-label="התמונה הבאה" title="התמונה הבאה">&#8249;</button></div>
  </div>`;
  document.body.append(dialog);
  const image = dialog.querySelector('[data-viewer-image]');
  image.src = sources[0];
  const previous = dialog.querySelector('[data-viewer-prev]');
  const next = dialog.querySelector('[data-viewer-next]');
  previous.hidden = next.hidden = sources.length < 2;
  dialog.querySelector('#imageViewerTitle').textContent = product.commercialName;
  let index = 0;
  function showPhoto(value){
    index = (value + sources.length) % sources.length;
    image.src = sources[index];
    image.alt = `${product.commercialName} - תמונה ${index + 1}`;
    dialog.querySelector('[data-viewer-count]').textContent = `${index + 1} / ${sources.length}`;
    detail.querySelectorAll('.product-thumbnails button')[index]?.click();
  }
  trigger.addEventListener('click', () => {
    const selected = sources.findIndex(src => new URL(src, location.href).href === mainImage.src);
    showPhoto(selected < 0 ? 0 : selected);
    document.body.classList.add('image-view-open');
    dialog.showModal();
  });
  previous.addEventListener('click', () => showPhoto(index - 1));
  next.addEventListener('click', () => showPhoto(index + 1));
  dialog.querySelector('[data-viewer-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if(event.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', event => {
    if(event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showPhoto(index + (event.key === 'ArrowLeft' ? 1 : -1));
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('image-view-open');
    trigger.focus({preventScroll:true});
  });
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
  const route = pathname => pathname.replace(/\.html$/, '').replace(/\/$/, '').replace(/\/index$/, '');
  mainNav.querySelectorAll('a').forEach(link => {
    const target = new URL(link.href, location.href);
    if(target.origin === location.origin && route(target.pathname) === route(location.pathname)) link.setAttribute('aria-current', 'page');
  });
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
    if(savedScroll) requestAnimationFrame(() => window.scrollTo({top:savedScroll, behavior:'instant'}));
  } catch {}
}
renderFeaturedProducts();
bindProductDetail();
bindImageViewer();
bindLeadForm();
bindMenu();
initReveal();
