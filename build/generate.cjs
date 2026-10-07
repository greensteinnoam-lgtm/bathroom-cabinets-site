const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const site = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(site, 'app.js'), 'utf8');
const context = vm.createContext({ URL, URLSearchParams });
vm.runInContext(source.split('\nattachDefaultWhatsappLinks();')[0] + '\nglobalThis.catalog = products; globalThis.config = SITE; globalThis.order = productOrderMessage; globalThis.wa = whatsappLink;', context);
const products = context.catalog.filter(product => product.verifiedOn === '2026-10-07');
const reference = fs.readFileSync(path.join(site, 'cabinets-sapir.html'), 'utf8');
const header = reference.match(/<header\b[\s\S]*?<\/header>/)[0];
const footer = reference.match(/<footer\b[\s\S]*?<\/footer>/)[0];
const template = fs.readFileSync(path.join(__dirname, 'product-page.html'), 'utf8');
const escape = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const options = values => values.map(value => `<option value="${escape(value)}">${escape(value)}</option>`).join('');
for (const product of products) {
  const url = new URL(product.productUrl, context.config.baseUrl).href;
  const imageUrl = new URL(product.image, context.config.baseUrl).href;
  const extraOptions = [['glass', 'זכוכית', product.glass], ['handle', 'גימור ידיות', product.handles]]
    .filter(([, , values]) => values?.length)
    .map(([name, label, values]) => `<label>${label}<select name="${name}"><option value="">בחרו ${label}</option>${options(values)}</select></label>`).join('\n');
  const specs = [['סוג', product.typeLabel], ['מידות זמינות', product.sizes.join(' / ')], ['צבעים / גימורים', product.colors.join(' / ')], ...(product.specs || [])]
    .map(([label, value]) => `<div><strong>${escape(label)}</strong><span>${escape(value)}</span></div>`).join('\n');
  const fields = {
    title: escape(`${product.commercialName} - ${product.typeLabel} | גרינשטיין`),
    description: escape(product.description), url: escape(url), imageUrl: escape(imageUrl), id: escape(product.id),
    image: escape(product.image), name: escape(product.commercialName), type: escape(product.typeLabel),
    category: product.categoryGroup === 'cabinets' ? 'ארון אמבטיה' : 'מקלחונים ואמבטיונים',
    sizes: options(product.sizes), colors: options(product.colors), extraOptions, specs, header, footer,
    catalog: product.categoryGroup === 'cabinets' ? 'bathroom-cabinets.html' : 'showers.html',
    whatsapp: escape(context.wa(context.order(product, product.sizes[0], 'טרם נבחר', url))),
    help: escape(context.wa(`שלום, אשמח לעזרה בבחירת ${product.commercialName}.`)),
    schema: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Product', name: product.commercialName, productID: product.id, description: product.description, image: product.images.map(image => new URL(image, context.config.baseUrl).href), url }).replace(/</g, '\\u003c')
  };
  fs.writeFileSync(path.join(site, product.productUrl), template.replace(/\{\{(\w+)\}\}/g, (_, name) => fields[name]), 'utf8');
  console.log(product.productUrl);
}
