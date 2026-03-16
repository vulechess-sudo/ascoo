// =========================
// RECENTLY VIEWED FUNCTIONALITY
// =========================

const STORAGE_KEY = 'asco_recently_viewed';
const MAX_ITEMS = 6;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initRecentlyViewed();
});

function initRecentlyViewed() {
    // Add click listeners to all product cards
    const productCards = document.querySelectorAll('.card, .big-card');
    productCards.forEach(card => {
        card.addEventListener('click', handleProductClick);
    });

    // Render recently viewed section
    renderRecentlyViewed();
}

function handleProductClick(e) {
    // Get product data from clicked card
    const card = e.currentTarget;
    
    const product = {
        id: card.dataset.id,
        name: card.querySelector('h3')?.textContent || 'Unknown',
        price: card.querySelector('.price')?.textContent || '',
        image: card.querySelector('.img-main')?.src || '',
        category: card.dataset.category || 'all',
        viewedAt: new Date().toISOString()
    };

    // Don't save if no valid data
    if (!product.id || !product.name) return;

    // Save to localStorage
    saveToRecentlyViewed(product);
}

function saveToRecentlyViewed(product) {
    // Get existing items
    let recent = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    // Remove if already exists (move to top)
    recent = recent.filter(item => item.id !== product.id);
    
    // Add to beginning
    recent.unshift(product);
    
    // Keep only MAX_ITEMS
    recent = recent.slice(0, MAX_ITEMS);
    
    // Save back
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
    
    // Re-render if section exists
    renderRecentlyViewed();
}

function renderRecentlyViewed() {
    const container = document.querySelector('.recently-viewed-section');
    if (!container) return;

    const recent = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    // Hide if no items
    if (recent.length === 0) {
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'block';
    
    // Build HTML
    const grid = container.querySelector('.recently-viewed-grid') || 
                 container.querySelector('.recently-viewed-container');
    
    if (!grid) return;

    const html = recent.map(item => `
        <a href="product.html?id=${item.id}" class="recent-item" data-id="${item.id}">
            <div class="recent-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="recent-info">
                <h4>${item.name}</h4>
                <span class="recent-price">${item.price}</span>
                <span class="recent-badge">Recently viewed</span>
            </div>
        </a>
    `).join('');

    // Check if we need to wrap in grid
    if (grid.classList.contains('recently-viewed-container')) {
        grid.innerHTML = `
            <div class="recently-viewed-header">
                <h3>Recently Viewed</h3>
                <button class="clear-recent" onclick="clearRecentlyViewed()">Clear All</button>
            </div>
            <div class="recently-viewed-grid">
                ${html}
            </div>
        `;
    } else {
        grid.innerHTML = html;
    }
}

function clearRecentlyViewed() {
    localStorage.removeItem(STORAGE_KEY);
    renderRecentlyViewed();
}

// Make clear function global
window.clearRecentlyViewed = clearRecentlyViewed;