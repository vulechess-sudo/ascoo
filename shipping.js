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

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.cart-container')) {
                document.getElementById('cartDropdown')?.classList.remove('active');
            }
            if (!e.target.closest('.search-dropdown')) {
                document.querySelector('.search-dropdown')?.classList.remove('active');
            }
        });