// EmailJS Configuration for Contact Form
const CONTACT_EMAILJS_CONFIG = {
    SERVICE_ID: 'service_2fm99c2',        // Your EmailJS service ID
    TEMPLATE_ID: 'template_8wceeuf',    // Replace with your NEW contact template ID
    PUBLIC_KEY: 'ipmDfONOLnNNY81_y',       // Your EmailJS public key
    YOUR_EMAIL: 'marcuswill886@gmail.com'  // Your email to receive notifications
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init(CONTACT_EMAILJS_CONFIG.PUBLIC_KEY);
    
    // Attach submit handler to form
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', submitContact);
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

    document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
});

async function submitContact(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submitBtn');
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');
    
    if (!btn || !form) return;
    
    // Show loading state
    btn.classList.add('sending');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    // Gather form data
    const name = document.querySelector('input[name="name"]')?.value;
    const email = document.querySelector('input[name="email"]')?.value;
    const message = document.querySelector('textarea[name="message"]')?.value;
    
    const templateParams = {
        name: name,
        email: email,
        message: message,
        to_email: email,
        subject: 'We received your message! — asco'
    };
    
    try {
        // Send to customer (confirmation)
        await emailjs.send(
            CONTACT_EMAILJS_CONFIG.SERVICE_ID,
            CONTACT_EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams
        );
        
        // Send to you (notification)
        await emailjs.send(
            CONTACT_EMAILJS_CONFIG.SERVICE_ID,
            CONTACT_EMAILJS_CONFIG.TEMPLATE_ID,
            {
                ...templateParams,
                to_email: CONTACT_EMAILJS_CONFIG.YOUR_EMAIL,
                subject: '[NEW CONTACT] ' + name + ' sent a message'
            }
        );
        
        // Show success
        btn.classList.remove('sending');
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        form.style.display = 'none';
        if (successMsg) {
            successMsg.style.display = 'block';
            successMsg.classList.add('show');
        }
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        btn.classList.remove('sending');
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        btn.disabled = false;
        alert('Failed to send message. Error: ' + (error.text || error.message));
    }
}