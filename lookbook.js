        // Snap scroll functionality
        const container = document.getElementById('heroesContainer');
        const dots = document.querySelectorAll('.hero-dot');
        const sections = document.querySelectorAll('.lookbook-hero-section');

        // Update dots on scroll
        container.addEventListener('scroll', () => {
            const scrollPos = container.scrollTop;
            const windowHeight = window.innerHeight;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                if (scrollPos >= sectionTop - windowHeight / 2) {
                    dots.forEach(d => d.classList.remove('active'));
                    dots[index].classList.add('active');
                }
            });
        });

        // Click to scroll
        function scrollToHero(id) {
            const section = document.getElementById(id);
            section.scrollIntoView({ behavior: 'auto' });
        }

        // Optional: Keyboard navigation
        document.addEventListener('keydown', (e) => {
            const currentIndex = Array.from(dots).findIndex(d => d.classList.contains('active'));
            
            if (e.key === 'ArrowDown' && currentIndex < dots.length - 1) {
                scrollToHero(dots[currentIndex + 1].dataset.target);
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                scrollToHero(dots[currentIndex - 1].dataset.target);
            }
        });

        // Hide navbar when scrolling heroes
        const navbar = document.querySelector('.navbar');
        container.addEventListener('scroll', () => {
            if (container.scrollTop > 50) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        });