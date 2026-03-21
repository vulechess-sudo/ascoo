const catalogData = [
    {
        left: {
            layout: 'layout-2-big',
            items: [
                { img: 'images/slides/newin.jpg', name: 'New In', price: '78.710 RSD' },
                { img: 'images/slides/dresses.jpg', name: 'Dress', price: '80.000 RSD' }
            ]
        },
        right: {
            layout: 'layout-grid-4',
            items: [
                { img: 'images/slides/jackets.jpg', name: 'Jacket', price: '130.000 RSD' },
                { img: 'images/slides/tops.jpg', name: 'Top', price: '70.000 RSD' },
                { img: 'images/slides/skirts.jpg', name: 'Skirt', price: '65.000 RSD' },
                { img: 'images/slides/shoes.jpg', name: 'Shoe', price: '85.000 RSD' }
            ]
        }
    },
    {
        left: {
            layout: 'layout-full',
            items: [
                { img: 'images/slides/newin2.jpg', name: 'The Golden Hour', price: 'Editorial' }
            ]
        },
        right: {
            layout: 'layout-big-left',
            items: [
                { img: 'images/slides/newin4.webp', name: 'Statement', price: '170.710 RSD' },
                { img: 'images/slides/accessories.jpg', name: 'Belt', price: '45.000 RSD' },
                { img: 'images/slides/shoe4.webp', name: 'Boots', price: '92.000 RSD' }
            ]
        }
    },
    {
        left: {
            layout: 'layout-pyramid',
            items: [
                { img: 'images/slides/dress4.webp', name: 'Evening', price: '86.000 RSD' },
                { img: 'images/slides/top4.webp', name: 'Cashmere', price: '110.000 RSD' },
                { img: 'images/slides/skirt4.webp', name: 'Pleated', price: '74.000 RSD' }
            ]
        },
        right: {
            layout: 'layout-3-vertical',
            items: [
                { img: 'images/slides/jackets2.jpg', name: 'Coat', price: 'Lookbook' },
                { img: 'images/slides/dresses2.jpg', name: 'Silk', price: 'Lookbook' },
                { img: 'images/slides/tops2.jpg', name: 'Blouse', price: 'Lookbook' }
            ]
        }
    }
];

let currentSpread = 0;
const totalSpreads = catalogData.length;

function initCatalog() {
    document.getElementById('totalSpreads').textContent = totalSpreads;
    // Ne renderuj odmah, čeka se otvaranje
}

function openBook() {
    // Sakrij cover
    document.getElementById('bookCover').classList.add('hidden');
    
    // Pokaži knjigu
    document.getElementById('catalogContainer').classList.remove('hidden');
    document.getElementById('pageIndicator').classList.remove('hidden');
    
    // Render prvu stranu
    renderSpread(0);
    
    // Opcionalno: skroluj do lookbooka
    document.querySelector('.lookbook-catalog').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeBook() {
    // Sakrij knjigu
    document.getElementById('catalogContainer').classList.add('hidden');
    document.getElementById('pageIndicator').classList.add('hidden');
    
    // Pokaži cover
    document.getElementById('bookCover').classList.remove('hidden');
    
    // Resetuj na prvu stranu
    currentSpread = 0;
}

// Ostale funkcije (renderSpread, flipPage) ostaju ISTE kao pre

function renderSpread(index) {
    const spread = catalogData[index];
    
    // Leva strana
    const leftPage = document.getElementById('leftPage');
    leftPage.className = `page-content ${spread.left.layout}`;
    leftPage.innerHTML = spread.left.items.map(item => `
        <div class="catalog-item">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="catalog-overlay">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
        </div>
    `).join('');
    
    // Desna strana
    const rightPage = document.getElementById('rightPage');
    rightPage.className = `page-content ${spread.right.layout}`;
    rightPage.innerHTML = spread.right.items.map(item => `
        <div class="catalog-item">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="catalog-overlay">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            </div>
        </div>
    `).join('');
    
    // Brojevi
    const leftNum = (index * 2) + 1;
    const rightNum = (index * 2) + 2;
    document.querySelector('.left-num').textContent = leftNum.toString().padStart(2, '0');
    document.querySelector('.right-num').textContent = rightNum.toString().padStart(2, '0');
    
    // Kontrole
    document.getElementById('currentSpread').textContent = index + 1;
    document.querySelector('.page-btn.prev').disabled = index === 0;
    document.querySelector('.page-btn.next').disabled = index === totalSpreads - 1;
}

function flipPage(direction) {
    const newIndex = currentSpread + direction;
    if (newIndex < 0 || newIndex >= totalSpreads) return;
    
    const leftPage = document.querySelector('.left-page');
    const rightPage = document.querySelector('.right-page');
    
    if (direction > 0) {
        leftPage.classList.add('flipping-forward');
        setTimeout(() => {
            currentSpread = newIndex;
            renderSpread(currentSpread);
            leftPage.classList.remove('flipping-forward');
        }, 400);
    } else {
        rightPage.classList.add('flipping-forward');
        setTimeout(() => {
            currentSpread = newIndex;
            renderSpread(currentSpread);
            rightPage.classList.remove('flipping-forward');
        }, 400);
    }
}


// Swipe
let touchStartX = 0;
const catalog = document.querySelector('.catalog-container');

catalog.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, {passive: true});

catalog.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
        flipPage(diff > 0 ? 1 : -1);
    }
}, {passive: true});

// Init
document.addEventListener('DOMContentLoaded', initCatalog); 