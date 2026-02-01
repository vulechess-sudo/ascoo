document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');
    
    const filterBtn = document.querySelector(".filter-btn");
    const dropdown = document.querySelector(".filter-dropdown");
    const categoryItems = dropdown.querySelectorAll("li");
    const sortSelect = document.getElementById("priceSort");

    const productsWrapper = document.querySelector("#productsGrid");
    
    const allProducts = Array.from(productsWrapper.querySelectorAll(".card, .big-card"));
    
    const originalBlocks = Array.from(document.querySelectorAll(".block"));
    
    const unifiedGrid = document.createElement("div");
    unifiedGrid.className = "small-grid unified-grid";
    unifiedGrid.style.display = "none";
    productsWrapper.parentElement.appendChild(unifiedGrid);

    let isUnifiedMode = false;

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

    filterBtn.addEventListener("click", e => {
        e.stopPropagation();
        dropdown.classList.toggle("active");
    });
    document.addEventListener("click", () => dropdown.classList.remove("active"));

    function showEditorial() {
        isUnifiedMode = false;
        unifiedGrid.style.display = "none";
        unifiedGrid.innerHTML = "";
        originalBlocks.forEach(block => block.style.display = "");
        sortSelect.value = "";
        filterBtn.innerHTML = `Category <span>▾</span>`;
        
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    }

    function showUnified(category) {
        isUnifiedMode = true;
        unifiedGrid.innerHTML = "";
        unifiedGrid.style.display = "grid";
        originalBlocks.forEach(block => block.style.display = "none");

        let matched = category === "all" 
            ? [...allProducts] 
            : allProducts.filter(p => p.dataset.category === category);

        matched.forEach(p => {
            const clone = createUnifiedCard(p);
            unifiedGrid.appendChild(clone);
        });

        return unifiedGrid;
    }

    function createUnifiedCard(original) {
         const wrapper = document.createElement("div");
    wrapper.className = "card unified-card";
    wrapper.dataset.category = original.dataset.category;
    wrapper.dataset.price = original.dataset.price;
    
    wrapper.dataset.id = original.dataset.id;
    
    const imgWrap = original.querySelector(".img-wrap").cloneNode(true);
    const info = original.querySelector(".info").cloneNode(true);
    
    wrapper.appendChild(imgWrap);
    wrapper.appendChild(info);
    
    return wrapper;
    }

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {
            const category = item.dataset.category;
            dropdown.classList.remove("active");

            if (category === "all") {
                showEditorial();
            } else {
                showUnified(category);
                filterBtn.innerHTML = `${item.textContent} <span>▾</span>`;
            }
        });
    });

    sortSelect.addEventListener("change", () => {
        const order = sortSelect.value;
        
        if (!order) return;

        if (!isUnifiedMode) {
            showUnified("all");
            filterBtn.innerHTML = `All <span>▾</span>`;
        }

        sortGrid(unifiedGrid, order);
    });

    function sortGrid(container, order) {
        const items = Array.from(container.children);
        items.sort((a, b) => {
            const aPrice = parseInt(a.dataset.price) || 0;
            const bPrice = parseInt(b.dataset.price) || 0;
            return order === "asc" ? aPrice - bPrice : bPrice - aPrice;
        });
        
        items.forEach(item => container.appendChild(item));
    }


    function makeCardClickable(card) {
    if (card.tagName === 'A') return;
    
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        
        const name = card.querySelector('h3')?.textContent || 'product';
        const price = card.querySelector('.price')?.textContent || '';
        const category = card.dataset.category || 'all';
        
        const productId = card.dataset.id || name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        
        const images = productImages[productId] || productImages[category] || ['images/slides/newin.jpg'];
        
        window.location.href = `product.html?id=${productId}&category=${category}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&images=${encodeURIComponent(JSON.stringify(images))}`;
    });
    }

    document.querySelectorAll('.card, .big-card').forEach(makeCardClickable);
    
    const originalCreateUnifiedCard = createUnifiedCard;
    createUnifiedCard = function(original) {
        const card = originalCreateUnifiedCard(original);
        makeCardClickable(card);
        return card;
    };
    
    if (initialCategory) {
        const categoryNames = {
            'jackets': 'Jackets',
            'shoes': 'Shoes',
            'newin': 'New In',
            'accessories': 'Accessories',
            'dresses': 'Dresses',
            'tops': 'Tops',
            'skirts': 'Skirts'
        };
        
        const displayName = categoryNames[initialCategory] || initialCategory;
        filterBtn.innerHTML = `${displayName} <span>▾</span>`;
        showUnified(initialCategory);
    }
});