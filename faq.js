 function toggleFAQ(button) {
            const isActive = button.classList.contains('active');
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = '0';
            });
            
            if (!isActive) {
                button.classList.add('active');
                const answer = button.nextElementSibling;
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        }
        function filterCategory(category, btn) {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const items = document.querySelectorAll('.faq-item');
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            
            document.getElementById('faqSearch').value = '';
            document.getElementById('searchClear').classList.remove('visible');
            document.getElementById('noResults').style.display = 'none';
        }

        // Search functionality
        const searchInput = document.getElementById('faqSearch');
        const searchClear = document.getElementById('searchClear');
        const noResults = document.getElementById('noResults');
        const faqList = document.getElementById('faqList');

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.faq-item');
            let visibleCount = 0;
            
            searchClear.classList.toggle('visible', query.length > 0);
            
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.category-btn:first-child').classList.add('active');
            
            items.forEach(item => {
                const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
                
                if (question.includes(query) || answer.includes(query)) {
                    item.classList.remove('hidden');
                    visibleCount++;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
            faqList.style.display = visibleCount === 0 ? 'none' : 'flex';
        });

        function clearSearch() {
            searchInput.value = '';
            searchClear.classList.remove('visible');
            noResults.style.display = 'none';
            faqList.style.display = 'flex';
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('hidden');
            });
            
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            document.querySelector('.category-btn:first-child').classList.add('active');
            
            searchInput.focus();
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cart-container')) {
                document.getElementById('cartDropdown')?.classList.remove('active');
            }
            if (!e.target.closest('.search-dropdown')) {
                document.querySelector('.search-dropdown')?.classList.remove('active');
            }
        });