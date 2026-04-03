// =========================
// PRODUCT DATABASE - All data in one place
// =========================

const productsDB = {
    'newin': {
        id: 'newin',
        name: 'New In',
        price: '78.710 RSD',
        category: 'newin',
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: true,
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
        available: false,
        images: ['images/slides/top4.webp', 'images/slides/top5.webp', 'images/slides/top6.webp'],
        description: 'Fine gauge knit in cashmere blend. Lightweight warmth with exceptional softness.',
        sizes: ['S', 'M', 'L'],
        makingTime: '7-12 days',
        care: 'Hand wash cold. Lay flat to dry. Do not wring.'
    },
    'accessorie': {
        id: 'accessorie',
        name: 'Accessorie',
        price: '45.000 RSD',
        category: 'accessories',
        available: true,
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
    handleAvailability(product);
}
function handleAvailability(product) {
    const sizesSection = document.querySelector('.sizes-section');
    const addToCartBtn = document.getElementById('addToCart');
    const notifyWrapper = document.getElementById('notifyWrapper');

    if (!product.available) {
        // sakrij stvari
        if (sizesSection) sizesSection.style.display = 'none';
        if (addToCartBtn) addToCartBtn.style.display = 'none';

        // pokaži notify
        if (notifyWrapper) notifyWrapper.style.display = 'block';
    }
}
function notifyMe() {
    const emailInput = document.getElementById('notifyEmail');
    const errorEl = document.getElementById('notifyError');
    const successEl = document.getElementById('notifySuccess');
    const box = document.getElementById('notifyBox');

    const email = emailInput.value.trim();

    // reset state
    errorEl.textContent = '';
    box.classList.remove('error');

    // VALIDACIJA
    if (!email || !email.includes('@') || !email.includes('.')) {
        errorEl.textContent = "Please enter a valid email address";
        box.classList.add('error');
        return;
    }

    // FAKE SUBMIT (kasnije može API)
    console.log("Notify:", email);

    // sakrij input + dugme
    box.style.display = 'none';

    // prikaži success
    successEl.style.display = 'block';

    // opcionalno: očisti input
    emailInput.value = '';
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
let isAnimating = false;
function updateSlider() {
   const sliderContainer = document.getElementById('sliderContainer');
    sliderContainer.style.transform = `translateX(-${window.currentSlide * 100}%)`;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === window.currentSlide);
    });
    
    // Resetuj flag posle animacije
    setTimeout(() => {
        isAnimating = false;
    }, 400); // Istovremeno sa CSS transition
}

function changeSlide(direction) {
     // Spreči višestruke klikove
    if (isAnimating) return;
    isAnimating = true;
    
    window.currentSlide += direction;
    
    // Circular navigation
    if (window.currentSlide < 0) {
        window.currentSlide = window.totalSlides - 1;
    } else if (window.currentSlide >= window.totalSlides) {
        window.currentSlide = 0;
    }
    
    updateSlider();
}

function goToSlide(index) {
    if (isAnimating || index === window.currentSlide) return;
    isAnimating = true;
    window.currentSlide = index;
    updateSlider();
}

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

    if (guide.classList.contains('active')) {
        guide.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        guide.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
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
// =========================
// CART FUNCTIONS - SINHRONIZOVANO SA GLOBALNIM CARTOM
// =========================

// Uvek čitaj direktno iz localStorage, nemoj koristiti lokalnu varijablu
function getCart() {
    return JSON.parse(localStorage.getItem("ascoCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("ascoCart", JSON.stringify(cart));
}

function updateCartCounter() {
    const counter = document.getElementById('cartCounter');
    if (!counter) return;
    
    const cart = getCart(); // Uvek svež podatak
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    counter.textContent = totalItems;
    
    if (totalItems > 0) {
        counter.classList.add('visible');
        counter.style.display = 'flex';
    } else {
        counter.classList.remove('visible');
        counter.style.display = 'none';
    }
}

function showCartPopup(productName) {
    const popup = document.getElementById('cartPopup');
    const itemName = document.getElementById('cartItemName');
    if (popup && itemName) {
        itemName.textContent = productName;
        popup.classList.add('active');
    }
}

function closeCartPopup() {
    const popup = document.getElementById('cartPopup');
    if (popup) popup.classList.remove('active');
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
    
    // Uzmi SVEŽ cart iz localStorage
    const cart = getCart();
    
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
    
    saveCart(cart);
    
    // Odmah update-uj brojač
    updateCartCounter();
    
    // Triggeruj custom event da obavestimo druge skripte
    window.dispatchEvent(new Event('cartUpdated'));
    
    showCartPopup(product.name);
    
    const btn = document.getElementById('addToCart');
    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = 'ADDED!';
        btn.classList.add('added');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('added');
        }, 2000);
    }
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
// TOUCH/SWIPE FUNCTIONALITY
// =========================

function initTouchSlider() {
    const slider = document.querySelector('.image-slider');
    if (!slider) return;

    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTime = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    // Touch events
    slider.addEventListener('touchstart', touchStart, { passive: true });
    slider.addEventListener('touchmove', touchMove, { passive: true });
    slider.addEventListener('touchend', touchEnd, { passive: true });

    // Mouse events (for desktop dragging too)
    slider.addEventListener('mousedown', touchStart);
    slider.addEventListener('mousemove', touchMove);
    slider.addEventListener('mouseup', touchEnd);
    slider.addEventListener('mouseleave', () => {
        if (isDragging) touchEnd();
    });

    function touchStart(event) {
        startTime = new Date().getTime();
        isDragging = true;
        startX = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        
        const sliderContainer = document.getElementById('sliderContainer');
        sliderContainer.style.transition = 'none';
        sliderContainer.style.cursor = 'grabbing';
    }

    function touchMove(event) {
        if (!isDragging) return;
        currentX = getPositionX(event);
        const diff = currentX - startX;
        currentTranslate = prevTranslate + diff;
        
        // Add resistance at edges
        const maxTranslate = 0;
        const minTranslate = -(window.totalSlides - 1) * slider.offsetWidth;
        
        if (currentTranslate > maxTranslate) {
            currentTranslate = maxTranslate + (diff * 0.3);
        } else if (currentTranslate < minTranslate) {
            currentTranslate = minTranslate + (diff * 0.3);
        }
        
        setSliderPosition(currentTranslate);
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const sliderContainer = document.getElementById('sliderContainer');
        sliderContainer.style.transition = 'transform 0.4s ease';
        sliderContainer.style.cursor = 'grab';
        
        const movedBy = currentX - startX;
        const timeTaken = new Date().getTime() - startTime;
        
        // Determine if swipe or click
        const threshold = slider.offsetWidth * 0.25; // 25% of width
        const velocityThreshold = 0.5; // pixels per ms
        
        const velocity = Math.abs(movedBy) / timeTaken;
        
        if (Math.abs(movedBy) > threshold || velocity > velocityThreshold) {
            // Swipe detected
            if (movedBy > 0 && window.currentSlide > 0) {
                changeSlide(-1);
            } else if (movedBy < 0 && window.currentSlide < window.totalSlides - 1) {
                changeSlide(1);
            } else {
                // Snap back if at edges
                goToSlide(window.currentSlide);
            }
        } else {
            // Snap to nearest slide
            goToSlide(window.currentSlide);
        }
        
        prevTranslate = -(window.currentSlide * slider.offsetWidth);
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition(position) {
        const sliderContainer = document.getElementById('sliderContainer');
        sliderContainer.style.transform = `translateX(${position}px)`;
    }
}

// Update your existing updateSlider function to track position
const originalUpdateSlider = updateSlider;
updateSlider = function() {
    originalUpdateSlider();
    const slider = document.querySelector('.image-slider');
    if (slider) {
        prevTranslate = -(window.currentSlide * slider.offsetWidth);
    }
};

// Initialize touch on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    loadRelatedProducts();
    updateCartCounter(); // Inicijalni update
    initTouchSlider();
    initLightbox();
    
    // Slušaj promene iz drugih tabova/prozora
    window.addEventListener('storage', (e) => {
        if (e.key === 'ascoCart') {
            updateCartCounter();
        }
    });
});

// =========================
// CLEAN URL NAVIGATION
// =========================

function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}
// =========================
// LIGHTBOX / ZOOM FUNCTIONALITY - MOBILE OPTIMIZED
// =========================

function initLightbox() {
    if (!document.getElementById('lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-overlay"></div>
            <button class="lightbox-close">&times;</button>
            <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
            <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
            <div class="lightbox-container">
                <img src="" alt="" class="lightbox-img">
                <div class="lightbox-zoom-hint">
                    <i class="fas fa-search-plus"></i>
                    <span>Scroll to zoom • Drag to pan</span>
                </div>
            </div>
            <div class="lightbox-counter">1 / 3</div>
        `;
        document.body.appendChild(lightbox);
        
    }
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const counter = lightbox.querySelector('.lightbox-counter');
    const container = lightbox.querySelector('.lightbox-container');
    
    let currentImages = [];
    let currentIndex = 0;
    let scale = 1;
    let pointX = 0;
    let pointY = 0;
    
    // Touch state
    let touches = [];
    let lastTouchDistance = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let swipeStartX = 0;
    let swipeStartY = 0;
    let isZooming = false;
    
    function openLightbox(images, index) {
        currentImages = images;
        currentIndex = index;
        resetZoom();
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(resetZoom, 300);
    }
    
    function resetZoom() {
        scale = 1;
        pointX = 0;
        pointY = 0;
        updateTransform();
        lightboxImg.classList.remove('zoomed');
    }
    
    function updateLightboxImage() {
        lightboxImg.src = currentImages[currentIndex];
        counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        resetZoom();
    }
    
    function updateTransform() {
        lightboxImg.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }
    
    function getDistance(touch1, touch2) {
        return Math.hypot(
            touch2.clientX - touch1.clientX,
            touch2.clientY - touch1.clientY
        );
    }
    
    function getCenter(touch1, touch2) {
        return {
            x: (touch1.clientX + touch2.clientX) / 2,
            y: (touch1.clientY + touch2.clientY) / 2
        };
    }
    
    // TOUCH EVENTS - Mobile optimized
    container.addEventListener('touchstart', (e) => {
        e.preventDefault();
        touches = Array.from(e.touches);
        
        if (touches.length === 2) {
            // Pinch zoom start
            isZooming = true;
            lastTouchDistance = getDistance(touches[0], touches[1]);
        } else if (touches.length === 1) {
            if (scale > 1) {
                // Pan start
                isDragging = true;
                startX = touches[0].clientX - pointX;
                startY = touches[0].clientY - pointY;
            } else {
                // Swipe start
                swipeStartX = touches[0].clientX;
                swipeStartY = touches[0].clientY;
            }
        }
    }, { passive: false });
    
    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        touches = Array.from(e.touches);
        
        if (touches.length === 2 && isZooming) {
            // Pinch zoom
            const distance = getDistance(touches[0], touches[1]);
            const scaleFactor = distance / lastTouchDistance;
            
            scale = Math.min(Math.max(scale * scaleFactor, 1), 4);
            lastTouchDistance = distance;
            
            lightboxImg.classList.toggle('zoomed', scale > 1);
            updateTransform();
            
        } else if (touches.length === 1 && isDragging && scale > 1) {
            // Pan when zoomed
            pointX = touches[0].clientX - startX;
            pointY = touches[0].clientY - startY;
            updateTransform();
        }
    }, { passive: false });
    
    container.addEventListener('touchend', (e) => {
        const changedTouches = Array.from(e.changedTouches);
        const remainingTouches = Array.from(e.touches);
        
        // Handle swipe for next/prev image when not zoomed
        if (remainingTouches.length === 0 && !isZooming && !isDragging && scale === 1) {
            const endX = changedTouches[0].clientX;
            const endY = changedTouches[0].clientY;
            const diffX = endX - swipeStartX;
            const diffY = endY - swipeStartY;
            
            // Only horizontal swipe, ignore vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe right - previous
                    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                } else {
                    // Swipe left - next
                    currentIndex = (currentIndex + 1) % currentImages.length;
                }
                updateLightboxImage();
            }
        }
        
        // Reset states
        if (remainingTouches.length < 2) {
            isZooming = false;
        }
        if (remainingTouches.length === 0) {
            isDragging = false;
        }
        touches = remainingTouches;
    });
    
    // Double tap to zoom on mobile
    let lastTapTime = 0;
    let lastTapX = 0;
    let lastTapY = 0;
    
    container.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapX = e.changedTouches[0].clientX;
        const tapY = e.changedTouches[0].clientY;
        
        if (currentTime - lastTapTime < 300) {
            // Double tap detected
            const diff = Math.hypot(tapX - lastTapX, tapY - lastTapY);
            if (diff < 30) { // Same position
                e.preventDefault();
                if (scale === 1) {
                    // Zoom in to 2.5x at tap position
                    scale = 2.5;
                    const rect = container.getBoundingClientRect();
                    pointX = (rect.width / 2 - tapX) * 0.5;
                    pointY = (rect.height / 2 - tapY) * 0.5;
                    lightboxImg.classList.add('zoomed');
                } else {
                    // Zoom out
                    resetZoom();
                }
                updateTransform();
            }
        }
        
        lastTapTime = currentTime;
        lastTapX = tapX;
        lastTapY = tapY;
    });
    
    // Desktop events
    lightbox.querySelector('.lightbox-close').onclick = closeLightbox;
    lightbox.querySelector('.lightbox-overlay').onclick = closeLightbox;
    
    lightbox.querySelector('.lightbox-prev').onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxImage();
    };
    
    lightbox.querySelector('.lightbox-next').onclick = (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxImage();
    };
    
    // Desktop zoom with click
    lightboxImg.onclick = (e) => {
        e.stopPropagation();
        if (scale === 1) {
            const rect = lightboxImg.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            scale = 2;
            pointX = -x;
            pointY = -y;
            lightboxImg.classList.add('zoomed');
        } else {
            resetZoom();
        }
        updateTransform();
    };
    
    // Desktop wheel zoom
    container.onwheel = (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            scale = Math.min(scale * 1.2, 4);
        } else {
            scale = Math.max(scale / 1.2, 1);
            if (scale === 1) resetZoom();
        }
        lightboxImg.classList.toggle('zoomed', scale > 1);
        updateTransform();
    };
    
    // Desktop drag to pan
    lightboxImg.onmousedown = (e) => {
        if (scale === 1) return;
        e.preventDefault();
        isDragging = true;
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
        lightboxImg.style.cursor = 'grabbing';
    };
    
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        updateTransform();
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        if (scale > 1) lightboxImg.style.cursor = 'grab';
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        switch(e.key) {
            case 'Escape': closeLightbox(); break;
            case 'ArrowLeft': 
                currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                updateLightboxImage();
                break;
            case 'ArrowRight':
                currentIndex = (currentIndex + 1) % currentImages.length;
                updateLightboxImage();
                break;
        }
    });
    
    window.openProductLightbox = openLightbox;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    
    const slider = document.querySelector('.image-slider');
    if (slider) {
        slider.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                const product = window.currentProduct;
                if (product && product.images) {
                    const clickedIndex = Array.from(slider.querySelectorAll('img')).indexOf(e.target);
                    window.openProductLightbox(product.images, clickedIndex);
                }
            }
        });
    }
});

// Inicijalizuj lightbox
document.addEventListener('DOMContentLoaded', () => {
    initLightbox();
    
    // Poveži sa slider slikama
    const slider = document.querySelector('.image-slider');
    if (slider) {
        slider.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                const product = window.currentProduct;
                if (product && product.images) {
                    const clickedIndex = Array.from(slider.querySelectorAll('img')).indexOf(e.target);
                    window.openProductLightbox(product.images, clickedIndex);
                }
            }
        });
    }
});

// =========================
// INITIALIZE
// =========================

document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    loadRelatedProducts();
    updateCartCounter();
});
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openSizeGuide');
    const guide = document.getElementById('sizeGuide');

    if (openBtn && guide) {
        openBtn.addEventListener('click', () => {
            guide.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeBtn = document.querySelector('.close-size-guide');

    if (closeBtn && guide) {
        closeBtn.addEventListener('click', () => {
            guide.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});
function calculateSize() {
    const waist = parseInt(document.getElementById('inputWaist').value);
    const hips = parseInt(document.getElementById('inputHips').value);
    const chest = parseInt(document.getElementById('inputChest').value);

    const resultEl = document.getElementById('sizeResult');

    if (!waist || !hips || !chest) {
        resultEl.textContent = "Enter all measurements";
        return;
    }

    let size = "Custom";

    if (waist <= 64 && hips <= 88 && chest <= 82) size = "XS";
    else if (waist <= 69 && hips <= 93 && chest <= 87) size = "S";
    else if (waist <= 74 && hips <= 98 && chest <= 92) size = "M";
    else if (waist <= 79 && hips <= 103 && chest <= 97) size = "L";
    else if (waist <= 84 && hips <= 108 && chest <= 102) size = "XL";

    resultEl.textContent = `You are likely ${size}`;

    // Automatski selektuj preporučenu veličinu
    autoSelectSize(size);
}

function autoSelectSize(size) {
    const buttons = document.querySelectorAll('.size-btn');
    
    // Pronađi dugme sa tom veličinom i klikni na njega
    buttons.forEach(btn => {
        if (btn.textContent.trim() === size) {
            selectSize(btn); // Pozovi postojeću funkciju za selekciju
        }
    });
}