 function showSuccess(event) {
            event.preventDefault();
            
            const btn = document.getElementById('submitBtn');
            const successMsg = document.getElementById('successMsg');
            const form = document.getElementById('contactForm');
            
            // Add loading state
            btn.classList.add('sending');
            btn.textContent = 'Sending...';
            
            // Simulate send delay
            setTimeout(() => {
                btn.classList.remove('sending');
                btn.textContent = 'Send Message';
                form.style.display = 'none';
                successMsg.classList.add('show');
            }, 1500);
        }

        // Scroll reveal animation
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

        document.querySelectorAll('.reveal').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });