// Universal Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const searchDropdown = document.querySelector('.search-dropdown');
    const searchInput = document.querySelector('.search-input');

    // Your product database (same as shop.js but accessible everywhere)
    const allProducts = [
        
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

    // Create search results dropdown
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    searchResults.style.display = 'none';
    searchDropdown.appendChild(searchResults);

    /* =========================
       TOGGLE SEARCH
    ========================= */
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 🔑 prevents instant close
        searchDropdown.classList.toggle('active');

        if (searchDropdown.classList.contains('active')) {
            searchInput.focus();
        }

        // close cart if open
        document.getElementById('cartDropdown')?.classList.remove('active');
    });

    /* =========================
       PREVENT SELF-CLOSE
    ========================= */
    searchDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    /* =========================
       CLOSE ON OUTSIDE CLICK
    ========================= */
    document.addEventListener('click', () => {
        searchDropdown.classList.remove('active');
        searchResults.style.display = 'none';
    });

    /* =========================
       SEARCH ON TYPE
    ========================= */
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }

        const matches = allProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );

        displayResults(matches);
    });

    /* =========================
       DISPLAY RESULTS
    ========================= */
    function displayResults(results) {
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No products found</div>';
            searchResults.style.display = 'block';
            return;
        }

        results.forEach(product => {
            const item = document.createElement('a');
            item.className = 'search-item';

            const images = productImages[product.id] || productImages[product.category] || ['images/slides/newin.jpg'];

            item.href = `product.html?id=${product.id}&category=${product.category}&name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&images=${encodeURIComponent(JSON.stringify(images))}`;

            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="search-item-info">
                    <span class="search-item-name">${product.name}</span>
                    <span class="search-item-price">${product.price}</span>
                    <span class="search-item-cat">${product.category}</span>
                </div>
            `;

            searchResults.appendChild(item);
        });

        searchResults.style.display = 'block';
    }
});
