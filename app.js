// עריכה מהירה של האתר:
// 1. החלף את מספר הוואטסאפ כאן למספר הרצוי.
// 2. ערוך/הוסף דגמים בתוך המערך products.
// 3. כדי להוסיף תמונה אמיתית: שים קובץ בתיקיית האתר וכתוב image: "filename.jpg" בדגם.

const SITE = {
  whatsappNumber: "972584209429",
  defaultMessage: "שלום, ראיתי את האתר ואני מתעניין/ת בארון אמבטיה כולל התקנה. אשמח לקבל הצעת מחיר. מצורפת תמונה/מידה של המקום:"
};

const products = [
  {
    title: "ענתיק עומד מגירות/דלתות",
    category: "עומד",
    size: "60 / 80 / 100 / 120",
    finish: "מגירות / דלתות",
    price: "מחיר יתווסף בהמשך",
    priceBySize: { "60": 1600, "80": 1900, "100": 2250, "120": 2700 },
    description: "ארון עומד בסגנון כפרי עם גוף סנדוויץ וחזיתות MDF, סגירה שקטה ואפשרות בחירת ידיות.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "גרייג", "תכלת", "שחור"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%94%D7%A0%D7%A8%D7%99-400x400.png",
    source: "https://novo-gal.co.il/product/%D7%A2%D7%A0%D7%AA%D7%99%D7%A7/"
  },
  {
    title: "דקלה",
    category: "תלוי",
    size: "לפי דגם",
    finish: "סדרת NOVO CHIC",
    price: "מחיר יתווסף בהמשך",
    description: "דגם דקלה מסדרת NOVO CHIC. פרטי המידות והצבעים יאושרו לפי קישור המוצר המדויק לפני הוספת מחיר.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/Dikla-Concrete_app-400x400.jpg",
    source: "https://novo-gal.co.il/product-category/%D7%90%D7%A8%D7%95%D7%A0%D7%95%D7%AA/"
  },
  {
    title: "אופיר דלתות",
    category: "תלוי",
    size: "60/46 / 80/46 / 100/46 / 120/46",
    finish: "דלתות טריקה שקטה",
    price: "מחיר יתווסף בהמשך",
    priceBySize: { "60": 1500, "80": 1750, "100": 2000, "120": 2450 },
    description: "ארון תלוי דלתות, מותאם לכיור אינטגרלי או מונח. מספר הדלתות משתנה לפי המידה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["בטון", "לבן", "גרפיט", "עץ מאושן", "אגוז אמריקאי", "עץ נטורל"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A2%D7%A8%D7%91%D7%94-3-550x550.png",
    source: "https://novo-gal.co.il/product/%D7%90%D7%95%D7%A4%D7%99%D7%A8-%D7%A0%D7%95%D7%A1%D7%A3/"
  },
  {
    title: "דיקלה דלתות",
    category: "תלוי",
    size: "לפי דגם",
    finish: "דלתות",
    price: "מחיר יתווסף בהמשך",
    description: "גרסת דלתות לדגם דקלה. פרטי המידות והצבעים יאושרו לפי קישור המוצר המדויק לפני הוספת מחיר.",
    sizes: ["60", "80", "100", "120"],
    colors: ["לבן", "אלון", "שחור", "גרייג"],
    image: "assets/product-dikla-doors.svg",
    source: "https://novo-gal.co.il/product-category/%D7%90%D7%A8%D7%95%D7%A0%D7%95%D7%AA/"
  },
  {
    title: "מרין מודולרי",
    category: "תלוי",
    size: "עד 240",
    finish: "מגירות / דלתות משולב",
    price: "מחיר יתווסף בהמשך",
    priceBySize: { "60": 1550, "80": 1800, "100": 2150, "120": 2500 },
    description: "ארון תלוי מודולרי: שילוב שני ארונות צמודים לקבלת ארון גדול בחלוקה לפי בחירה.",
    sizes: ["60", "80", "100", "120"],
    colors: ["גרפיט", "פודרה", "לבן מט", "לבן מבריק", "כחול מעושן", "מוקה", "פיסטוק"],
    image: "https://novo-gal.co.il/wp-content/uploads/2024/03/%D7%A0%D7%99%D7%95-%D7%9E%D7%90%D7%92-%D7%9C%D7%91%D7%9F-%D7%99%D7%93%D7%99%D7%95%D7%AA-%D7%96%D7%94%D7%91-%D7%9E%D7%98-%D7%9E%D7%99%D7%93%D7%94-604650-%D7%9B%D7%95%D7%9C%D7%9C-%D7%9E%D7%A8%D7%90%D7%94-%D7%9E%D7%A8%D7%97%D7%A4%D7%AA-%D7%9B%D7%99%D7%95%D7%A8-%D7%90%D7%99%D7%A0%D7%98%D7%92%D7%A8%D7%9C%D7%99-%D7%9C%D7%91%D7%9F-43-550x550.png",
    source: "https://novo-gal.co.il/product/%D7%9E%D7%A8%D7%99%D7%9F-%D7%9E%D7%95%D7%93%D7%95%D7%9C%D7%A8%D7%99/"
  },
  {
    title: "נובו סוויץ",
    category: "תלוי",
    size: "60/46 / 80/46 / 100/46 / 120/46",
    finish: "מגירה + תא פתוח",
    price: "מחיר יתווסף בהמשך",
    description: "ארון תלוי עם מגירה אחת ותא פתוח, ידית אינטגרלית וטריקה שקטה.",
    sizes: ["60/46", "80/46", "100/46", "120/46"],
    colors: ["פודרה", "כחול מעושן", "עץ זברה", "אגוז אמריקאי", "עץ נטורל"],
    image: "https://novo-gal.co.il/wp-content/uploads/2023/10/%D7%A0%D7%95%D7%91%D7%95-%D7%AA%D7%90-%D7%A4%D7%AA%D7%95%D7%97-2-400x400.png",
    source: "https://novo-gal.co.il/product/%D7%A0%D7%95%D7%91%D7%95-%D7%A1%D7%95%D7%95%D7%99%D7%A5/"
  }
];

function whatsappLink(message = SITE.defaultMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getSizeKey(size){
  return String(size).match(/\d+/)?.[0] || size;
}

function formatPrice(value){
  return value ? `${Number(value).toLocaleString('he-IL')} ש"ח` : "מחיר יתווסף בהמשך";
}

function getPriceLabel(product, size){
  const price = product.priceBySize?.[getSizeKey(size)];
  return price ? formatPrice(price) : product.price;
}

document.querySelectorAll('#heroWhatsapp,#cardWhatsapp,#contactWhatsapp,#floatingWhatsapp,#navWhatsapp,#productsWhatsapp,#quoteWhatsapp').forEach(el => {
  el.href = whatsappLink();
});

const productGrid = document.getElementById('productGrid');
const filters = document.getElementById('filters');
const categories = ["הכול", ...new Set(products.map(p => p.category))];
let currentCategory = "הכול";

function renderFilters(){
  filters.innerHTML = categories.map(cat => `<button class="filter-btn ${cat === currentCategory ? 'active' : ''}" data-category="${cat}">${cat}</button>`).join('');
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts(){
  const shown = currentCategory === "הכול" ? products : products.filter(p => p.category === currentCategory);
  productGrid.innerHTML = shown.map((product, index) => {
    const selectedSize = product.sizes?.[0] || product.size;
    const selectedColor = product.colors?.[0] || product.finish;
    const selectedPrice = getPriceLabel(product, selectedSize);
    const message = `שלום, אני מתעניין/ת ב${product.title}. מידה: ${selectedSize}. צבע: ${selectedColor}. מחיר באתר: ${selectedPrice}. אשמח לקבל פרטים כולל ארון, כיור, מראה מרחפת והתקנה.`;
    const image = product.image ? `<button class="product-image-btn" type="button" data-full-image="${product.image}" data-image-alt="${product.title}" aria-label="פתיחת תמונה מלאה של ${product.title}"><img src="${product.image}" alt="${product.title}"></button>` : `<div class="product-icon" aria-hidden="true"></div>`;
    const sizeOptions = (product.sizes || [product.size]).map(option => `<option value="${option}">${option}</option>`).join('');
    const colorOptions = (product.colors || [product.finish]).map(option => `<option value="${option}">${option}</option>`).join('');
    return `<article class="product-card reveal visible">
      <div class="product-image">${image}</div>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <div class="product-meta"><span>${product.size}</span><span>${product.finish}</span><span>${product.category}</span></div>
      <div class="product-options">
        <label>מידה
          <select class="product-select" data-product-index="${index}" data-option="size">${sizeOptions}</select>
        </label>
        <label>צבע
          <select class="product-select" data-product-index="${index}" data-option="color">${colorOptions}</select>
        </label>
      </div>
      <p class="package-note">כולל ארון + כיור + מראה מרחפת + התקנה</p>
      <div class="price" data-price>${selectedPrice}</div>
      <a class="btn full product-whatsapp" href="${whatsappLink(message)}" target="_blank" rel="noopener" data-product-title="${product.title}">בדיקת זמינות ומחיר</a>
    </article>`;
  }).join('');
  bindProductOptions(shown);
  bindProductImages();
}

function bindProductOptions(shownProducts){
  document.querySelectorAll('.product-card').forEach((card, index) => {
    const product = shownProducts[index];
    const sizeSelect = card.querySelector('[data-option="size"]');
    const colorSelect = card.querySelector('[data-option="color"]');
    const link = card.querySelector('.product-whatsapp');
    const price = card.querySelector('[data-price]');

    function updateLink(){
      const selectedPrice = getPriceLabel(product, sizeSelect.value);
      price.textContent = selectedPrice;
      const message = `שלום, אני מתעניין/ת ב${product.title}. מידה: ${sizeSelect.value}. צבע: ${colorSelect.value}. מחיר באתר: ${selectedPrice}. אשמח לקבל פרטים כולל ארון, כיור, מראה מרחפת והתקנה.`;
      link.href = whatsappLink(message);
    }

    sizeSelect.addEventListener('change', updateLink);
    colorSelect.addEventListener('change', updateLink);
    updateLink();
  });
}

const imageModal = document.getElementById('imageModal');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalClose = document.getElementById('imageModalClose');

function openImageModal(src, alt){
  imageModalImg.src = src;
  imageModalImg.alt = alt;
  imageModal.classList.add('open');
  imageModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeImageModal(){
  imageModal.classList.remove('open');
  imageModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  imageModalImg.src = '';
}

function bindProductImages(){
  document.querySelectorAll('.product-image-btn').forEach(btn => {
    btn.addEventListener('click', () => openImageModal(btn.dataset.fullImage, btn.dataset.imageAlt));
  });
}

imageModalClose.addEventListener('click', closeImageModal);
imageModal.addEventListener('click', (event) => {
  if(event.target === imageModal) closeImageModal();
});
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape' && imageModal.classList.contains('open')) closeImageModal();
});

renderFilters();
renderProducts();

const leadForm = document.getElementById('leadForm');
if(leadForm){
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(leadForm);
    const msg = `שלום, ראיתי את האתר ואני רוצה הצעת מחיר לארון אמבטיה.\nשם: ${data.get('name')}\nעיר: ${data.get('city')}\nרוחב משוער: ${data.get('width') || 'לא צוין'}\nסוג שירות: ${data.get('service') || 'לא צוין'}\nפירוט: ${data.get('message') || 'לא צוין'}`;
    window.open(whatsappLink(msg), '_blank');
  });
}

const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
if(menuBtn && mainNav){
  menuBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
