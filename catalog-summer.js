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

// Flattenuj podatke u 6 pojedinačnih stranica
const allPages = [
    catalogData[0].left,  // Stranica 1
    catalogData[0].right, // Stranica 2
    catalogData[1].left,  // Stranica 3
    catalogData[1].right, // Stranica 4
    catalogData[2].left,  // Stranica 5
    catalogData[2].right  // Stranica 6
];

let currentPageIndex = 0;
const totalPages = 6;

function isMobile() {
    return window.innerWidth <= 768;
}

function initCatalog() {
    // Postavi inicijalni broj
    updatePageCounter();
}

function openBook() {
    document.getElementById('bookCover').classList.add('hidden');
    document.getElementById('catalogContainer').classList.remove('hidden');
    document.getElementById('pageIndicator').classList.remove('hidden');
    
    currentPageIndex = 0;
    renderCurrentView();
    
    document.querySelector('.lookbook-catalog').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeBook() {
    document.getElementById('catalogContainer').classList.add('hidden');
    document.getElementById('pageIndicator').classList.add('hidden');
    document.getElementById('bookCover').classList.remove('hidden');
    currentPageIndex = 0;
}

function renderCurrentView() {
    const leftPageContainer = document.querySelector('.left-page');
    const rightPageContainer = document.querySelector('.right-page');
    const leftContent = document.getElementById('leftPage');
    const rightContent = document.getElementById('rightPage');
    
    // Uvek očisti oba kontejnera prvo
    leftContent.innerHTML = '';
    rightContent.innerHTML = '';
    
    if (isMobile()) {
        // MOBILE: Prikaži samo jednu stranicu
        const pageData = allPages[currentPageIndex];
        
        // Kreiraj HTML za trenutnu stranicu
        const pageHTML = pageData.items.map(item => `
            <div class="catalog-item">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
        `).join('');
        
        if (currentPageIndex % 2 === 0) {
            // PARNE stranice (0, 2, 4) -> LEVA strana
            leftContent.className = `page-content ${pageData.layout}`;
            leftContent.innerHTML = pageHTML;
            
            // Prikaži levu, sakrij desnu potpuno
            leftPageContainer.style.display = 'flex';
            rightPageContainer.style.display = 'none';
            
        } else {
            // NEPARNE stranice (1, 3, 5) -> DESNA strana  
            rightContent.className = `page-content ${pageData.layout}`;
            rightContent.innerHTML = pageHTML;
            
            // Prikaži desnu, sakrij levu potpuno
            rightPageContainer.style.display = 'flex';
            leftPageContainer.style.display = 'none';
        }
        
        // Brojač 1-6
        document.querySelector('.left-num').textContent = (currentPageIndex + 1).toString().padStart(2, '0');
        document.querySelector('.right-num').style.display = 'none';
        
    } else {
        // DESKTOP: Klasični prikaz
        const spreadIndex = Math.floor(currentPageIndex / 2);
        const spread = catalogData[spreadIndex];
        
        // Resetuj display
        leftPageContainer.style.display = '';
        rightPageContainer.style.display = '';
        
        // Popuni LEVU stranu
        leftContent.className = `page-content ${spread.left.layout}`;
        leftContent.innerHTML = spread.left.items.map(item => `
            <div class="catalog-item">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
        `).join('');
        
        // Popuni DESNU stranu
        rightContent.className = `page-content ${spread.right.layout}`;
        rightContent.innerHTML = spread.right.items.map(item => `
            <div class="catalog-item">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
            </div>
        `).join('');
        
        // Brojevi 1-6
        const leftNum = (spreadIndex * 2) + 1;
        const rightNum = (spreadIndex * 2) + 2;
        document.querySelector('.left-num').textContent = leftNum.toString().padStart(2, '0');
        document.querySelector('.right-num').textContent = rightNum.toString().padStart(2, '0');
        document.querySelector('.right-num').style.display = 'block';
    }
    
    updatePageCounter();
    updateButtons();
}

function flipPage(direction) {
    const newIndex = currentPageIndex + direction;
    
    if (newIndex < 0 || newIndex >= totalPages) return;
    
    if (isMobile()) {
        // Mobilni: Jednostavna zamena bez animacije ili sa fade
        currentPageIndex = newIndex;
        renderCurrentView();
    } else {
        // Desktop: Sa 3D flip animacijom
        const leftPage = document.querySelector('.left-page');
        const rightPage = document.querySelector('.right-page');
        
        if (direction > 0) {
            leftPage.classList.add('flipping-forward');
            setTimeout(() => {
                currentPageIndex = newIndex;
                renderCurrentView();
                leftPage.classList.remove('flipping-forward');
            }, 400);
        } else {
            rightPage.classList.add('flipping-forward');
            setTimeout(() => {
                currentPageIndex = newIndex;
                renderCurrentView();
                rightPage.classList.remove('flipping-forward');
            }, 400);
        }
    }
}

function updatePageCounter() {
    const counter = document.getElementById('currentSpread');
    const total = document.getElementById('totalSpreads');
    
    if (isMobile()) {
        counter.textContent = currentPageIndex + 1; // 1-6
        total.textContent = 6;
    } else {
        counter.textContent = Math.floor(currentPageIndex / 2) + 1; // 1-3
        total.textContent = 3;
    }
}

function updateButtons() {
    const prevBtn = document.querySelector('.page-btn.prev');
    const nextBtn = document.querySelector('.page-btn.next');
    
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex === totalPages - 1;
}

// Swipe za mobilni
let touchStartX = 0;
let touchStartY = 0;

document.querySelector('.catalog-container').addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, {passive: true});

document.querySelector('.catalog-container').addEventListener('touchend', e => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Samo horizontalni swipe (ignoriši vertikalni skrol)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        flipPage(diffX > 0 ? 1 : -1);
    }
}, {passive: true});

// Resize handler - prebaci se u odgovarajući mod
window.addEventListener('resize', () => {
    if (!document.getElementById('catalogContainer').classList.contains('hidden')) {
        renderCurrentView();
    }
});

// Init
document.addEventListener('DOMContentLoaded', initCatalog);