// Products Database - dodaj na početak fajla
const productsDB = {
    'newin': {
        id: 'newin',
        name: 'New In',
        price: '78.710 RSD',
        category: 'newin',
        images: ['images/slides/newin.jpg', 'images/slides/newin2.jpg', 'images/slides/newin3.jpg'],
        description: 'Our latest arrival featuring contemporary design with premium craftsmanship.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-14 days',
        care: 'Dry clean only.'
    },
    'newin-2': {
        id: 'newin-2',
        name: 'Second New In',
        price: '170.710 RSD',
        category: 'newin',
        images: ['images/slides/newin4.webp', 'images/slides/newin5.webp', 'images/slides/newin6.webp'],
        description: 'Premium statement piece with intricate detailing.',
        sizes: ['XS', 'S', 'M', 'L'],
        makingTime: '10-16 days',
        care: 'Professional dry clean recommended.'
    },
    'dress': {
        id: 'dress',
        name: 'Dress',
        price: '80.000 RSD',
        category: 'dresses',
        images: ['images/slides/dresses.jpg', 'images/slides/dresses2.jpg', 'images/slides/dresses3.jpg'],
        description: 'Elegant silhouette with flowing lines.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-12 days',
        care: 'Dry clean only.'
    },
    'dress-2': {
        id: 'dress-2',
        name: 'Second Dress',
        price: '86.000 RSD',
        category: 'dresses',
        images: ['images/slides/dress4.webp', 'images/slides/dress5.webp', 'images/slides/dress6.webp'],
        description: 'Sophisticated evening wear with delicate draping.',
        sizes: ['S', 'M', 'L'],
        makingTime: '8-14 days',
        care: 'Delicate dry clean.'
    },
    'jacket': {
        id: 'jacket',
        name: 'Jacket',
        price: '130.000 RSD',
        category: 'jackets',
        images: ['images/slides/jackets.jpg', 'images/slides/jackets2.jpg', 'images/slides/jackets3.jpg'],
        description: 'Tailored wool blend jacket with structured shoulders.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '10-15 days',
        care: 'Dry clean only.'
    },
    'shoe': {
        id: 'shoe',
        name: 'Shoe',
        price: '85.000 RSD',
        category: 'shoes',
        images: ['images/slides/shoes.jpg', 'images/slides/shoes2.jpg', 'images/slides/shoes3.jpg'],
        description: 'Handcrafted leather shoes with cushioned insole.',
        sizes: ['40', '41', '42', '43', '44', '45'],
        makingTime: '14-21 days',
        care: 'Use leather conditioner.'
    },
    'shoe-2': {
        id: 'shoe-2',
        name: 'Second Shoe',
        price: '92.000 RSD',
        category: 'shoes',
        images: ['images/slides/shoe4.webp', 'images/slides/shoe5.webp', 'images/slides/shoe6.webp'],
        description: 'Ankle boots in premium calfskin leather.',
        sizes: ['40', '41', '42', '43', '44'],
        makingTime: '16-24 days',
        care: 'Waterproof spray recommended.'
    },
    'skirt': {
        id: 'skirt',
        name: 'Skirt',
        price: '65.000 RSD',
        category: 'skirts',
        images: ['images/slides/skirts.jpg', 'images/slides/skirts2.jpg', 'images/slides/skirts3.jpg'],
        description: 'Flattering A-line cut in mid-weight fabric.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '7-12 days',
        care: 'Dry clean or gentle hand wash.'
    },
    'skirt-2': {
        id: 'skirt-2',
        name: 'Second Skirt',
        price: '74.000 RSD',
        category: 'skirts',
        images: ['images/slides/skirt4.webp', 'images/slides/skirt5.webp', 'images/slides/skirt6.webp'],
        description: 'Precision-pleated skirt with movement and flow.',
        sizes: ['XS', 'S', 'M', 'L'],
        makingTime: '8-14 days',
        care: 'Professional pressing required.'
    },
    'top': {
        id: 'top',
        name: 'Top',
        price: '70.000 RSD',
        category: 'tops',
        images: ['images/slides/tops.jpg', 'images/slides/tops2.jpg', 'images/slides/tops3.jpg'],
        description: 'Luxurious silk blouse with mother-of-pearl buttons.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        makingTime: '5-10 days',
        care: 'Dry clean only.'
    },
    'top-2': {
        id: 'top-2',
        name: 'Second Top',
        price: '110.000 RSD',
        category: 'tops',
        images: ['images/slides/top4.webp', 'images/slides/top5.webp', 'images/slides/top6.webp'],
        description: 'Fine gauge knit in cashmere blend.',
        sizes: ['S', 'M', 'L'],
        makingTime: '7-12 days',
        care: 'Hand wash cold.'
    },
    'accessorie': {
        id: 'accessorie',
        name: 'Accessorie',
        price: '45.000 RSD',
        category: 'accessories',
        images: ['images/slides/accessories.jpg', 'images/slides/accessories2.jpg'],
        description: 'Full-grain leather belt with solid brass buckle.',
        sizes: ['80', '85', '90', '95', '100', '105'],
        makingTime: '3-7 days',
        care: 'Condition leather annually.'
    }
};

// Hero load animation
window.addEventListener('load', () => {
    document.querySelector('.summer-hero').classList.add('loaded');
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Video play
function playVideo() {
    alert('Video modal would open here - integrate with YouTube/Vimeo');
}

// Reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.movement-section, .details-section, .shop-look-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// =========================
// SHOP THE LOOK MODAL
// =========================

// Look data - koristi productsDB
const looksData = {
    'golden-hour': {
        name: 'The Golden Hour',
        occasions: ['Evening', 'Date Night', 'Wedding Guest'], // <-- novo
        items: [
            {
                id: 'dress',
                name: productsDB['dress'].name,
                category: productsDB['dress'].category,
                price: parsePrice(productsDB['dress'].price),
                image: productsDB['dress'].images[0],
                sizes: productsDB['dress'].sizes,
                defaultSize: 'M'
            },
            {
                id: 'accessorie',
                name: productsDB['accessorie'].name,
                category: productsDB['accessorie'].category,
                price: parsePrice(productsDB['accessorie'].price),
                image: productsDB['accessorie'].images[0],
                sizes: productsDB['accessorie'].sizes,
                defaultSize: '90'
            },
            {
                id: 'shoe',
                name: productsDB['shoe'].name,
                category: productsDB['shoe'].category,
                price: parsePrice(productsDB['shoe'].price),
                image: productsDB['shoe'].images[0],
                sizes: productsDB['shoe'].sizes,
                defaultSize: '42'
            }
        ]
    },
    'city-morning': {
        name: 'City Morning',
        occasions: ['Work', 'Brunch', 'Casual Friday'], // <-- novo
        items: [
            {
                id: 'jacket',
                name: productsDB['jacket'].name,
                category: productsDB['jacket'].category,
                price: parsePrice(productsDB['jacket'].price),
                image: productsDB['jacket'].images[0],
                sizes: productsDB['jacket'].sizes,
                defaultSize: 'M'
            },
            {
                id: 'top',
                name: productsDB['top'].name,
                category: productsDB['top'].category,
                price: parsePrice(productsDB['top'].price),
                image: productsDB['top'].images[0],
                sizes: productsDB['top'].sizes,
                defaultSize: 'M'
            },
            {
                id: 'skirt',
                name: productsDB['skirt'].name,
                category: productsDB['skirt'].category,
                price: parsePrice(productsDB['skirt'].price),
                image: productsDB['skirt'].images[0],
                sizes: productsDB['skirt'].sizes,
                defaultSize: 'M'
            }
        ]
    },
    'weekend-escape': {
        name: 'Weekend Escape',
        occasions: ['Travel', 'Casual', 'Day Trip'], // <-- novo
        items: [
            {
                id: 'newin',
                name: productsDB['newin'].name,
                category: productsDB['newin'].category,
                price: parsePrice(productsDB['newin'].price),
                image: productsDB['newin'].images[0],
                sizes: productsDB['newin'].sizes,
                defaultSize: 'M'
            },
            {
                id: 'accessorie',
                name: productsDB['accessorie'].name,
                category: productsDB['accessorie'].category,
                price: parsePrice(productsDB['accessorie'].price),
                image: productsDB['accessorie'].images[0],
                sizes: productsDB['accessorie'].sizes,
                defaultSize: '90'
            },
            {
                id: 'shoe-2',
                name: productsDB['shoe-2'].name,
                category: productsDB['shoe-2'].category,
                price: parsePrice(productsDB['shoe-2'].price),
                image: productsDB['shoe-2'].images[0],
                sizes: productsDB['shoe-2'].sizes,
                defaultSize: '42'
            }
        ]
    }
};

let currentLook = null;
let selectedItems = new Set();

function parsePrice(priceString) {
    // Ako je već broj, vrati ga
    if (typeof priceString === 'number') return priceString;
    // Inače parsiraj iz "78.710 RSD" format
    return parseInt(priceString.replace(/\./g, '').replace(' RSD', ''));
}

function openLookModal(lookId) {
   currentLook = looksData[lookId];
    if (!currentLook) return;
    
    selectedItems = new Set(currentLook.items.map(item => item.id));
    
    document.getElementById('modalLookName').textContent = currentLook.name;
    
    // DODAJ OCCASIONS OVDE
    const modalContent = document.querySelector('.look-modal-content');
    
    // Ukloni stare occasions ako postoje
    const oldOccasions = modalContent.querySelector('.look-occasions');
    if (oldOccasions) oldOccasions.remove();
    
    // Dodaj nove occasions
    if (currentLook.occasions) {
        const occasionsHtml = `
            <div class="look-occasions">
                <span class="occasions-label">Perfect for:</span>
                ${currentLook.occasions.map(tag => `<span class="occasion-tag">${tag}</span>`).join('')}
            </div>
        `;
        
        // Ubaci posle headera
        const header = modalContent.querySelector('.look-modal-header');
        header.insertAdjacentHTML('afterend', occasionsHtml);
    }
    
    renderLookItems();
    updateTotal();
    
    const modal = document.getElementById('lookModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const btn = document.getElementById('addAllBtn');
btn.innerHTML = '<i class="fas fa-shopping-bag"></i> Add Selected to Cart';
btn.style.background = '';
btn.disabled = false;
}

function closeLookModal() {
    const modal = document.getElementById('lookModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentLook = null;
}

function renderLookItems() {
    const container = document.getElementById('lookItemsList');
    
    if (!currentLook || currentLook.items.length === 0) {
        container.innerHTML = `
            <div class="look-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>No items in this look</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = currentLook.items.map(item => `
        <div class="look-item ${selectedItems.has(item.id) ? '' : 'removed'}" data-id="${item.id}">
            <div class="look-item-img-wrap">
                <img src="${item.image}" alt="${item.name}" class="look-item-img" onclick="goToProduct('${item.id}')">
                <button class="quick-view-btn" onclick="openQuickView('${item.id}', event)">
                    <i class="fas fa-eye"></i>
                    <span>Quick View</span>
                </button>
            </div>
            
            <div class="look-item-info">
                <h4 onclick="goToProduct('${item.id}')">${item.name}</h4>
                <p>${item.category}</p>
            </div>
            
            <label class="look-item-toggle">
                <input type="checkbox" ${selectedItems.has(item.id) ? 'checked' : ''} 
                       onchange="toggleItem('${item.id}')" id="toggle-${item.id}">
                <span class="toggle-switch"></span>
                <span class="toggle-label">${selectedItems.has(item.id) ? 'Include' : 'Skip'}</span>
            </label>
            
            <div class="look-item-size">
                <label>Size</label>
                <select class="size-select" id="size-${item.id}" onchange="updateSize('${item.id}', this.value)">
                    ${item.sizes.map(size => `
                        <option value="${size}" ${size === item.defaultSize ? 'selected' : ''}>${size}</option>
                    `).join('')}
                </select>
            </div>
            
            <span class="look-item-price">${formatPrice(item.price)} RSD</span>
        </div>
    `).join('');
}

function toggleItem(itemId) {
    const item = document.querySelector(`.look-item[data-id="${itemId}"]`);
    const toggle = document.getElementById(`toggle-${itemId}`);
    const label = toggle.parentElement.querySelector('.toggle-label');
    const sizeSelect = document.getElementById(`size-${itemId}`); // 👈 DODATO
    
    if (selectedItems.has(itemId)) {
        selectedItems.delete(itemId);
        item.classList.add('removed');
        label.textContent = 'Skip';
        
        if (sizeSelect) sizeSelect.disabled = true;
        
    } else {
        selectedItems.add(itemId);
        item.classList.remove('removed');
        label.textContent = 'Include';
        
        if (sizeSelect) sizeSelect.disabled = false;
    }
    
    updateTotal();
}

function updateSize(itemId, size) {
    const item = currentLook.items.find(i => i.id === itemId);
    if (item) {
        item.selectedSize = size;
    }
}

function updateTotal() {
    const total = currentLook.items
        .filter(item => selectedItems.has(item.id))
        .reduce((sum, item) => sum + item.price, 0);
    
    document.getElementById('lookTotalPrice').textContent = formatPrice(total) + ' RSD';
    
    const btn = document.getElementById('addAllBtn');
    btn.disabled = selectedItems.size === 0;
    btn.innerHTML = selectedItems.size === 0 
        ? '<i class="fas fa-shopping-bag"></i> Select Items to Add'
        : `<i class="fas fa-shopping-bag"></i> Add ${selectedItems.size} Item${selectedItems.size > 1 ? 's' : ''} to Cart`;
}

function addAllToCart() {
    if (selectedItems.size === 0 || !currentLook) return;
    
    const itemsToAdd = currentLook.items.filter(item => selectedItems.has(item.id));
    let addedCount = 0;
    
    itemsToAdd.forEach(item => {
        const size = document.getElementById(`size-${item.id}`)?.value || item.defaultSize;
        const product = productsDB[item.id];
        
        if (product) {
            // Format cene kao string za konsistentnost
            const priceString = formatPrice(item.price) + ' RSD';
            
            const cartItem = {
                id: item.id,
                name: product.name,
                price: priceString,
                image: item.image,
                size: size,
                quantity: 1
            };
            
            // Koristi postojeću logiku iz tvog cart sistema
            const cart = getCart();
            const existing = cart.find(i => i.id === cartItem.id && i.size === cartItem.size);
            
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(cartItem);
            }
            
            saveCart(cart);
            addedCount++;
        }
    });
    
    // Update UI
    updateCartCounterDisplay(addedCount);
    renderCart(); // Ako je dropdown otvoren, osveži ga
    
    // Feedback u modalu
    const btn = document.getElementById('addAllBtn');
    btn.innerHTML = '<i class="fas fa-check"></i> Added to Cart!';
    btn.style.background = '#4a7c59';
    
    setTimeout(() => {
        closeLookModal();
        btn.style.background = '';
    }, 1200);
}
    
    
    // Update cart counter
    if (typeof updateCartCounter === 'function') {
        updateCartCounter();
    }


function formatPrice(price) {
    return price.toLocaleString('sr-RS');
}

// Close modal on outside click
document.getElementById('lookModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        closeLookModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('lookModal').classList.contains('active')) {
        closeLookModal();
    }
});
// =========================
// CLICKABLE ITEMS IN LOOK MODAL
// =========================

function initLookItemClickHandlers() {
    // Delegirani event listener na container
    const container = document.getElementById('lookItemsList');
    if (!container) return;
    
    container.addEventListener('click', (e) => {
        // Klik na sliku ili naziv proizvoda
        const img = e.target.closest('.look-item-img');
        const title = e.target.closest('.look-item-info h4');
        
        if (img || title) {
            const itemEl = e.target.closest('.look-item');
            if (!itemEl) return;
            
            const itemId = itemEl.dataset.id;
            if (itemId) {
                // Preusmeri na product stranicu
                window.location.href = `product.html?id=${itemId}`;
            }
        }
    });
}
function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function openQuickView(productId, event) {
    event.stopPropagation();
    const product = productsDB[productId];
    if (!product) return;
    
    closeQuickView();
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.id = 'quickViewModal';
    modal.innerHTML = `
        <div class="quick-view-content" onclick="event.stopPropagation()">
            <button class="close-quick-view" onclick="closeQuickView()">&times;</button>
            <div class="quick-view-grid">
                <div class="quick-view-img">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <div class="quick-view-info">
                    <span class="quick-view-category">${product.category}</span>
                    <h2>${product.name}</h2>
                    <p class="quick-view-price">${product.price}</p>
                    <p class="quick-view-desc">${product.description}</p>
                    
                    <a href="product.html?id=${product.id}" class="view-full-link">
                        View Full Page <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            if (!document.getElementById('lookModal')?.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        }, 300);
    }
}

// Close on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('quickViewModal');
    if (modal && e.target === modal) {
        closeQuickView();
    }
});

function selectQuickSize(btn) {
    btn.parentElement.querySelectorAll('.size-bubble').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

function quickAddToCart(productId) {
    const product = productsDB[productId];
    const size = document.querySelector('.size-bubble.selected')?.textContent;
    
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
    
    const cart = getCart();
    const existing = cart.find(item => item.id === cartItem.id && item.size === cartItem.size);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    saveCart(cart);
    updateCartCounterDisplay(cart.reduce((sum, item) => sum + item.quantity, 0));
    renderCart();
    
    // Feedback
    const btn = document.querySelector('.quick-add-btn');
    btn.textContent = 'Added!';
    btn.style.background = '#4a7c59';
    
    setTimeout(() => {
        closeQuickView();
    }, 800);
}
// SPREČI automatsko zatvaranje modala
document.getElementById('lookModal').addEventListener('click', (e) => {
    // Zatvori SAMO ako je klik na pozadinu (ne na sadržaj)
    if (e.target === e.currentTarget) {
        closeLookModal();
    }
});

// U renderLookItems funkciji, zaustavi propagaciju na checkbox-ovima:
// (već imaš ovo, ali proveri da nema duplih event listenera)

// Inicijalizuj samo jednom
let isInitialized = false;
document.addEventListener('DOMContentLoaded', () => {
    if (!isInitialized) {
        initCatalog(); // Za lookbook
        isInitialized = true;
    }
});

// Inicijalizuj kad se modal otvori
const originalOpenLookModal = openLookModal;
openLookModal = function(lookId) {
    originalOpenLookModal(lookId);
    initLookItemClickHandlers();
};