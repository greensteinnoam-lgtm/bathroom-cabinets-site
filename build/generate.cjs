const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const site = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(site, 'app.js'), 'utf8');
const context = vm.createContext({ URL, URLSearchParams });
const catalog = JSON.parse(fs.readFileSync(path.join(__dirname, 'catalog-products.json'), 'utf8'));
context.CATALOG_PRODUCTS = catalog;
vm.runInContext(source.split('\nattachDefaultWhatsappLinks();')[0] + '\nglobalThis.config = SITE; globalThis.order = productOrderMessage; globalThis.wa = whatsappLink; globalThis.card = productCard;', context);
const products = catalog;
fs.writeFileSync(path.join(site, 'catalog-data.js'), '/* Generated from build/catalog-products.json. */\nconst CATALOG_PRODUCTS = ' + JSON.stringify(catalog, null, 2) + ';\n', 'utf8');
const header = fs.readFileSync(path.join(__dirname, 'header.html'), 'utf8').trim();
const footer = fs.readFileSync(path.join(__dirname, 'footer.html'), 'utf8').trim();
const template = fs.readFileSync(path.join(__dirname, 'product-page.html'), 'utf8');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const options = values => values.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('');
for (const product of products) {
  const url = new URL(product.productUrl, context.config.baseUrl).href;
  const imageUrl = new URL(product.image, context.config.baseUrl).href;
  const extraOptions = [['glass', 'זכוכית', product.glass], ['handle', 'גימור ידיות', product.handles], ['depth', 'עומק בס״מ', product.depths], ['leg', 'גימור רגליים', product.legs], ['side', 'גימור דופן', product.sides], ['opening', 'כיוון פתיחה', product.openings]]
    .filter(([, , values]) => values?.length)
    .map(([name, label, values]) => `<label>${label}<select name="${name}"><option value="">בחרו ${label}</option>${options(values)}</select></label>`).join('\n');
  const sizeLabel = product.customWidth ? (product.minimumWidth ? `מ־${product.minimumWidth} ס״מ, לפי התאמה` : `לפי התאמה, עד ${product.maximumWidth} ס״מ`) : product.sizes.join(' / ');
  const specs = [['סוג', product.typeLabel], ['מידות', sizeLabel], ['צבעים / גימורים', product.colors.join(' / ')], ...(product.specs || [])]
    .map(([label, value]) => `<div><strong>${escape(label)}</strong><span>${escape(value)}</span></div>`).join('\n');
  const fields = {
    title: escape(`${product.commercialName} - ${product.typeLabel} | ${context.config.brandName}`),
    description: escape(product.description), url: escape(url), imageUrl: escape(imageUrl), id: escape(product.id),
    image: escape(product.image), name: escape(product.commercialName), type: escape(product.typeLabel),
    category: product.categoryGroup === 'cabinets' ? 'ארון אמבטיה' : 'מקלחונים ואמבטיונים',
    sizeControl: product.customWidth ? `<input name="customWidth" type="number" inputmode="numeric" ${product.minimumWidth ? `min="${product.minimumWidth}"` : 'min="1"'} ${product.maximumWidth ? `max="${product.maximumWidth}"` : ''} placeholder="רוחב מבוקש בס״מ" aria-label="רוחב מבוקש בס״מ">` : `<select name="size"><option value="">בחרו מידה / עזרה בהתאמה</option>${options(product.sizes)}</select>`,
    colors: options(product.colors), extraOptions, specs, header, footer,
    catalog: product.categoryGroup === 'cabinets' ? 'bathroom-cabinets.html' : 'showers.html',
    whatsapp: escape(context.wa(context.order(product, 'טרם נבחרה', 'טרם נבחר', url))),
    help: escape(context.wa(context.order(product, 'טרם נבחרה', 'טרם נבחר', url).replace('שלום, אשמח לקבל הצעה.', 'שלום, אשמח לעזרה בהתאמה.'))),
    schema: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: product.commercialName, productID: product.id, description: product.description, image: (product.images || [product.image]).map(image => new URL(image, context.config.baseUrl).href), url }).replace(/</g, '\\u003c')
  };
  fs.writeFileSync(path.join(site, product.productUrl), template.replace(/\{\{(\w+)\}\}/g, (_, name) => fields[name]), 'utf8');
  console.log(product.productUrl);
}
const pages = ['index.html', 'bathroom-cabinets.html', 'showers.html', 'products.html', 'installation.html', 'about.html', 'contact.html'];
for (const file of pages) {
  const target = path.join(site, file);
  let html = fs.readFileSync(target, 'utf8')
    .replace(/<header\b[\s\S]*?<\/header>/, header)
    .replace(/<footer\b[\s\S]*?<\/footer>/, footer)
    .replace('<main>', '<main id="main">');
  if(!html.includes('rel="icon"')) html = html.replace('</head>', '  <link rel="icon" type="image/svg+xml" href="assets/brand/symbol.svg">\n</head>');
  if(!html.includes('href="brand.css"')) html = html.replace('</head>', '  <link rel="stylesheet" href="brand.css">\n</head>');
  html = html.replace(/<body\b([^>]*)>/, (tag, attributes) => {
    if(/\beven-mayim\b/.test(attributes)) return tag;
    return attributes.includes('class="') ? '<body' + attributes.replace(/class="([^"]*)"/, 'class="$1 even-mayim"') + '>' : '<body' + attributes + ' class="even-mayim">';
  });
  if(html.includes('<!-- catalog-cards:start -->')){
    const featured = file === 'index.html';
    const group = file === 'showers.html' ? 'showers' : 'cabinets';
    const selected = products.filter(product => product.categoryGroup === group);
    const cards = (featured ? selected.slice(0,3) : selected).map(product => context.card(product, product.productUrl, featured)).join('\n');
    html = html.replace(/<!-- catalog-cards:start -->[\s\S]*?<!-- catalog-cards:end -->/, '<!-- catalog-cards:start -->\n' + cards + '\n<!-- catalog-cards:end -->');
  }
  fs.writeFileSync(target, html, 'utf8');
}
const urls = [...pages.filter(file => file !== 'products.html'), ...products.map(product => product.productUrl)]
  .map(file => new URL(file === 'index.html' ? '' : file, context.config.baseUrl).href);
fs.writeFileSync(path.join(site, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(url => `  <url><loc>${escape(url)}</loc></url>`).join('\n') + '\n</urlset>\n');
