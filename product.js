// Get URL params
const params = new URLSearchParams(window.location.search);
const productName = params.get('name');
const productPrice = params.get('price');
const category = params.get('category');
const imagesJson = params.get('images');

const productImages = {
        'jacket': ['images/slides/jackets.jpg', 'images/slides/jackets2.jpg', 'images/slides/jackets3.jpg'],
        'shoe': ['images/slides/shoes.jpg', 'images/slides/shoes2.jpg', 'images/slides/shoes3.jpg'],
        'dress': ['images/slides/dresses.jpg', 'images/slides/dresses2.jpg', 'images/slides/dresses3.jpg'],
        'skirt': ['images/slides/skirts.jpg', 'images/slides/skirts2.jpg', 'images/slides/skirts3.jpg'],
        'top': ['images/slides/tops.jpg', 'images/slides/tops2.jpg', 'images/slides/tops3.jpg'],
        'accessorie': ['images/slides/accessories.jpg', 'images/slides/accessories2.jpg'],
        'newin': ['images/slides/newin.jpg', 'images/slides/newin2.jpg', 'images/slides/newin3.jpg'],
        'newin-2': ['images/slides/newin4.webp', 'images/slides/newin5.webp', 'images/slides/newin6.webp'],
        'dress-2': ['images/slides/dress4.webp', 'images/slides/dress5.webp', 'images/slides/dress6.webp'],
        'shoe-2': ['images/slides/shoe4.webp', 'images/slides/shoe5.webp', 'images/slides/shoe6.webp'],
        'skirt-2': ['images/slides/skirt4.webp', 'images/slides/skirt5.webp', 'images/slides/skirt6.webp'],
        'top-2': ['images/slides/top4.webp', 'images/slides/top5.webp', 'images/slides/top6.webp']
    };
// Set text content
if (productName) {
    document.getElementById('productName').textContent = decodeURIComponent(productName);
    document.title = decodeURIComponent(productName) + ' - Asco Shop';
}

if (productPrice) {
    document.getElementById('productPrice').textContent = decodeURIComponent(productPrice);
}

// Build image slider
const sliderContainer = document.getElementById('sliderContainer');
const dotsContainer = document.getElementById('sliderDots');

sliderContainer.innerHTML = '';
dotsContainer.innerHTML = '';

let images = [];
try {
    images = JSON.parse(decodeURIComponent(imagesJson));
} catch (e) {
    images = ['images/slides/newin.jpg'];
}

if (images.length === 1) {
    images.push(images[0]);
}

images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = decodeURIComponent(productName) || 'Product';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.flexShrink = '0';
    sliderContainer.appendChild(img);
});

// Slider functionality
let currentSlide = 0;
let totalSlides = images.length;

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (index === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(index);
    dotsContainer.appendChild(dot);
});

updateSlider();
setInterval(() => changeSlide(1), 5000);

// Size selection
function selectSize(btn) {
    if (btn.classList.contains('disabled')) return;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

// Toggle details
function toggleDetail(header) {
    header.parentElement.classList.toggle('active');
}

// =========================
// CART FUNCTIONS (merged here)
// =========================

let cart = JSON.parse(localStorage.getItem('ascoCart')) || [];

function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    if (!counter) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (totalItems > 0) {
        counter.textContent = totalItems;
        counter.style.display = 'flex';
    } else {
        counter.style.display = 'none';
    }
}

function showCartPopup(productName) {
    document.getElementById('cartItemName').textContent = productName;
    document.getElementById('cartPopup').classList.add('active');
}

function closeCartPopup() {
    document.getElementById('cartPopup').classList.remove('active');
    window.location.href = 'shop.html';
}

function goToCart() {
    window.location.href = 'cart.html';
}

// MAIN addToCart function - ONLY ONE
function addToCart() {
    const params = new URLSearchParams(window.location.search);
    const size = document.querySelector('.size-btn.selected')?.textContent || 'M';
    
    const product = {
        id: params.get('id'),
        name: decodeURIComponent(params.get('name')),
        price: decodeURIComponent(params.get('price')),
        image: document.querySelector('.slider-container img')?.src || '',
        size: size,
        quantity: 1
    };
    
    // Check if already in cart
    const existing = cart.find(item => item.id === product.id && item.size === product.size);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('ascoCart', JSON.stringify(cart));
    updateCartCounter();
    showCartPopup(product.name);
    
    // Button feedback
    const btn = document.getElementById('addToCart');
    btn.textContent = 'ADDED!';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = 'ADD TO CART';
        btn.classList.remove('added');
    }, 2000);
}

// Initialize on load
updateCartCounter();

// =========================
// RELATED PRODUCTS LOGIC
// =========================

// Product database (match your shop inventory)
const productDatabase = [
     { id: 'newin', name: 'New in', price: '78.710 RSD', category: 'newin', image: 'images/slides/newin.jpg' },
        { id: 'newin-2', name: 'Second New in', price: '170.710 RSD', category: 'newin', image: 'images/slides/newin4.webp' },
        { id: 'dress', name: 'Dress', price: '80.000 RSD', category: 'dresses', image: 'images/slides/dresses.jpg' },
        { id: 'dress-2', name: 'Second Dress', price: '86.000 RSD', category: 'dresses', image: 'images/slides/dress4.webp' },
        { id: 'jacket', name: 'Jacket', price: '85.000 RSD', category: 'jackets', image: 'images/slides/jackets.jpg' },
        { id: 'shoe', name: 'Shoe', price: '65.000 RSD', category: 'shoes', image: 'images/slides/shoes.jpg' },
        { id: 'shoe-2', name: 'Second Shoe', price: '92.000 RSD', category: 'shoes', image: 'images/slides/shoe4.webp' },
        { id: 'skirt', name: 'Skirt', price: '70.000 RSD', category: 'skirts', image: 'images/slides/skirts.jpg' },
        { id: 'skirt-2', name: 'Second Skirt', price: '74.000 RSD', category: 'skirts', image: 'images/slides/skirt4.webp' },
        { id: 'top', name: 'Top', price: '100.000 RSD', category: 'tops', image: 'images/slides/tops.jpg' },
        { id: 'top-2', name: 'Second Top', price: '110.000 RSD', category: 'tops', image: 'images/slides/top4.webp' },
        { id: 'accessorie', name: 'Accessorie', price: '45.000 RSD', category: 'accessories', image: 'images/slides/accessories.jpg' },
];

function loadRelatedProducts() {
    const currentId = new URLSearchParams(window.location.search).get('id');
    const currentCategory = new URLSearchParams(window.location.search).get('category') || 'all';
    
    // Filter: same category, exclude current, get 4 random
    let related = productDatabase.filter(p => 
        p.category === currentCategory && p.id !== currentId
    );
    
    // If less than 4, fill with random others
    if (related.length < 5) {
        const others = productDatabase.filter(p => 
            p.id !== currentId && !related.includes(p)
        );
        related = related.concat(others).slice(0, 5);
    } else {
        // Shuffle and take 4
        related = related.sort(() => 0.5 - Math.random()).slice(0, 5);
    }
    
    const grid = document.getElementById('relatedGrid');
    if (!grid || related.length === 0) return;
    
    grid.innerHTML = related.map(product => {
        // Get images array (reuse your productImages object or define per product)
        const images = productImages[product.id] || [product.image];
        
        return `
            <div class="related-card" onclick="goToProduct('${product.id}', '${product.category}', '${encodeURIComponent(product.name)}', '${encodeURIComponent(product.price)}', '${encodeURIComponent(JSON.stringify(images))}')">
                <div class="img-wrap">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            </div>
        `;
    }).join('');
}

function goToProduct(id, category, name, price, images) {
    window.location.href = `product.html?id=${id}&category=${category}&name=${name}&price=${price}&images=${images}`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing init code ...
    
    // Load related products
    loadRelatedProducts();
});