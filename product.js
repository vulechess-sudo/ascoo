// =========================
// PRODUCT DATABASE - All data in one place
// =========================

const productsDB = {
    'newin': {
        id: 'newin',
        name: 'New In',
        price: '78.710 RSD',
        category: 'newin',
        images: ['images/slides/newin.jpg', 'images/slides/newin2.jpg', 'images/slides/newin3.jpg'],
        description: 'Our latest arrival featuring contemporary design with premium craftsmanship. Limited edition piece for the modern wardrobe.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-14 days',
        care: 'Dry clean only. Do not bleach. Store in garment bag.'
    },
    'newin-2': {
        id: 'newin-2',
        name: 'Second New In',
        price: '170.710 RSD',
        category: 'newin',
        images: ['images/slides/newin4.webp', 'images/slides/newin5.webp', 'images/slides/newin6.webp'],
        description: 'Premium statement piece with intricate detailing. Hand-finished edges and exclusive fabric selection.',
        sizes: ['XS', 'S', 'M', 'L'],
        makingTime: '10-16 days',
        care: 'Professional dry clean recommended. Handle with care.'
    },
    'dress': {
        id: 'dress',
        name: 'Dress',
        price: '80.000 RSD',
        category: 'dresses',
        images: ['images/slides/dresses.jpg', 'images/slides/dresses2.jpg', 'images/slides/dresses3.jpg'],
        description: 'Elegant silhouette with flowing lines. Perfect for both daytime events and evening occasions.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-12 days',
        care: 'Dry clean only. Steam iron on low heat.'
    },
    'dress-2': {
        id: 'dress-2',
        name: 'Second Dress',
        price: '86.000 RSD',
        category: 'dresses',
        images: ['images/slides/dress4.webp', 'images/slides/dress5.webp', 'images/slides/dress6.webp'],
        description: 'Sophisticated evening wear with delicate draping. Designed to make a lasting impression.',
        sizes: ['S', 'M', 'L'],
        makingTime: '8-14 days',
        care: 'Delicate dry clean. Do not wring.'
    },
    'jacket': {
        id: 'jacket',
        name: 'Jacket',
        price: '130.000 RSD',
        category: 'jackets',
        images: ['images/slides/jackets.jpg', 'images/slides/jackets2.jpg', 'images/slides/jackets3.jpg'],
        description: 'Tailored wool blend jacket with structured shoulders. A timeless addition to any wardrobe.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '10-15 days',
        care: 'Dry clean only. Use garment brush to maintain texture.'
    },
    'shoe': {
        id: 'shoe',
        name: 'Shoe',
        price: '85.000 RSD',
        category: 'shoes',
        images: ['images/slides/shoes.jpg', 'images/slides/shoes2.jpg', 'images/slides/shoes3.jpg'],
        description: 'Handcrafted leather shoes with cushioned insole. Goodyear welted for durability and comfort.',
        sizes: ['40', '41', '42', '43', '44', '45'],
        makingTime: '14-21 days',
        care: 'Use leather conditioner. Polish regularly. Store with shoe trees.'
    },
    'shoe-2': {
        id: 'shoe-2',
        name: 'Second Shoe',
        price: '92.000 RSD',
        category: 'shoes',
        images: ['images/slides/shoe4.webp', 'images/slides/shoe5.webp', 'images/slides/shoe6.webp'],
        description: 'Ankle boots in premium calfskin leather. Blake stitched for flexibility and elegance.',
        sizes: ['40', '41', '42', '43', '44'],
        makingTime: '16-24 days',
        care: 'Waterproof spray recommended. Regular polishing essential.'
    },
    'skirt': {
        id: 'skirt',
        name: 'Skirt',
        price: '65.000 RSD',
        category: 'skirts',
        images: ['images/slides/skirts.jpg', 'images/slides/skirts2.jpg', 'images/slides/skirts3.jpg'],
        description: 'Flattering A-line cut in mid-weight fabric. Versatile piece for any season.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-12 days',
        care: 'Dry clean or gentle hand wash. Iron inside out.'
    },
    'skirt-2': {
        id: 'skirt-2',
        name: 'Second Skirt',
        price: '74.000 RSD',
        category: 'skirts',
        images: ['images/slides/skirt4.webp', 'images/slides/skirt5.webp', 'images/slides/skirt6.webp'],
        description: 'Precision-pleated skirt with movement and flow. Structured waistband for perfect fit.',
        sizes: ['XS', 'S', 'M', 'L'],
        makingTime: '8-14 days',
        care: 'Professional pressing required. Do not iron pleats.'
    },
    'top': {
        id: 'top',
        name: 'Top',
        price: '70.000 RSD',
        category: 'tops',
        images: ['images/slides/tops.jpg', 'images/slides/tops2.jpg', 'images/slides/tops3.jpg'],
        description: 'Luxurious silk blouse with mother-of-pearl buttons. Effortless elegance for any occasion.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '5-10 days',
        care: 'Dry clean only. Steam to remove wrinkles.'
    },
    'top-2': {
        id: 'top-2',
        name: 'Second Top',
        price: '110.000 RSD',
        category: 'tops',
        images: ['images/slides/top4.webp', 'images/slides/top5.webp', 'images/slides/top6.webp'],
        description: 'Fine gauge knit in cashmere blend. Lightweight warmth with exceptional softness.',
        sizes: ['S', 'M', 'L'],
        makingTime: '7-12 days',
        care: 'Hand wash cold. Lay flat to dry. Do not wring.'
    },
    'accessorie': {
        id: 'accessorie',
        name: 'Accessorie',
        price: '100.000 RSD',
        category: 'accessories',
        images: ['images/slides/accessories.jpg', 'images/slides/accessories2.jpg'],
        description: 'Full-grain leather belt with solid brass buckle. Ages beautifully with wear.',
        sizes: ['80', '85', '90', '95', '100', '105'],
        makingTime: '3-7 days',
        care: 'Condition leather annually. Avoid moisture exposure.'
    }
};
function loadProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const product = productsDB[productId];
    
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    document.getElementById('productName').textContent = product.name;
    document.title = `${product.name} - asco`;
    document.getElementById('productPrice').textContent = product.price;
    
    const descContent = document.querySelector('.detail-item:first-child .detail-content');
    if (descContent) {
        descContent.textContent = product.description;
    }
    
    const makingTimeEl = document.querySelector('.making-time');
    if (makingTimeEl) {
        makingTimeEl.textContent = `*time of making: ${product.makingTime}.`;
    }
    
    const careContent = document.querySelector('.detail-item:last-child .detail-content');
    if (careContent) {
        careContent.textContent = product.care;
    }
    
    loadSlider(product.images, product.name);

    generateSizes(product.sizes);
    
    window.currentProduct = product;
}

function loadSlider(images, productName) {
    const sliderContainer = document.getElementById('sliderContainer');
    const dotsContainer = document.getElementById('sliderDots');
    
    sliderContainer.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    const displayImages = images.length === 1 ? [images[0], images[0]] : images;
    
    displayImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = productName;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.flexShrink = '0';
        sliderContainer.appendChild(img);
        
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    window.totalSlides = displayImages.length;
    window.currentSlide = 0;
    updateSlider();
}

function generateSizes(sizes) {
    const sizesGrid = document.querySelector('.sizes-grid');
    if (!sizesGrid) return;
    
    sizesGrid.innerHTML = sizes.map((size, i) => `
        <button class="size-btn ${i === 2 ? 'selected' : ''}" onclick="selectSize(this)">${size}</button>
    `).join('');
}

// =========================
// SLIDER FUNCTIONS
// =========================

function updateSlider() {
    const sliderContainer = document.getElementById('sliderContainer');
    sliderContainer.style.transform = `translateX(-${window.currentSlide * 100}%)`;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === window.currentSlide);
    });
}

function changeSlide(direction) {
    window.currentSlide = (window.currentSlide + direction + window.totalSlides) % window.totalSlides;
    updateSlider();
}

function goToSlide(index) {
    window.currentSlide = index;
    updateSlider();
}

setInterval(() => changeSlide(1), 5000);

// =========================
// SIZE SELECTION
// =========================

function selectSize(btn) {
    if (btn.classList.contains('disabled')) return;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function toggleSizeGuide() {
    const guide = document.getElementById('sizeGuide');
    guide.classList.toggle('active');
}

// =========================
// DETAIL ACCORDION
// =========================

function toggleDetail(header) {
    header.parentElement.classList.toggle('active');
}

// =========================
// CART FUNCTIONS
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
}

function goToCart() {
    window.location.href = 'cart.html';
}

function addToCart() {
    const product = window.currentProduct;
    if (!product) return;
    
    const size = document.querySelector('.size-btn.selected')?.textContent;
    if (!size) {
        alert('Please select a size');
        return;
    }
    
    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: size,
        quantity: 1
    };
    
    const existing = cart.find(item => item.id === cartItem.id && item.size === cartItem.size);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    localStorage.setItem('ascoCart', JSON.stringify(cart));
    updateCartCounter();
    showCartPopup(product.name);
    
    const btn = document.getElementById('addToCart');
    const originalText = btn.textContent;
    btn.textContent = 'ADDED!';
    btn.classList.add('added');
    setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('added');
    }, 2000);
}

// =========================
// RELATED PRODUCTS
// =========================

function loadRelatedProducts() {
   const urlParams = new URLSearchParams(window.location.search);
const currentId = urlParams.get('id');
const product = productsDB[currentId];

if (!product) return;
const baseName = product.name.replace(/\s+\d+$/, '').replace(/-\d+$/, '').toLowerCase();
let related = [];

// Priority 1:
const sameBase = Object.values(productsDB).filter(p => {
    const pBase = p.name.replace(/\s+\d+$/, '').replace(/-\d+$/, '').toLowerCase();
    return pBase === baseName && p.id !== currentId;
});

// Priority 2: Same category
const sameCategory = Object.values(productsDB).filter(p => 
    p.category === product.category && 
    p.id !== currentId &&
    !sameBase.includes(p)
);

// Priority 3:
const others = Object.values(productsDB).filter(p => 
    p.id !== currentId && 
    !sameBase.includes(p) && 
    !sameCategory.includes(p)
);

related = [...sameBase, ...sameCategory, ...others];

related = related.slice(0, 5);

const grid = document.getElementById('relatedGrid');
if (!grid) return;

grid.innerHTML = related.map(p => `
    <div class="related-card" onclick="goToProduct('${p.id}')">
        <div class="img-wrap">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
        <div class="info">
            <h3>${p.name}</h3>
            <p class="price">${p.price}</p>
        </div>
    </div>
`).join('');
}

// =========================
// CLEAN URL NAVIGATION
// =========================

function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// =========================
// INITIALIZE
// =========================

document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    loadRelatedProducts();
    updateCartCounter();
});