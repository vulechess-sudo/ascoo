function toggleFAQ(button) {
    document.querySelectorAll('.faq-question').forEach(q => {
        if (q !== button) {
            q.classList.remove('active');
            q.nextElementSibling.style.maxHeight = '0';
        }
    });
    button.classList.toggle('active');
    const answer = button.nextElementSibling;
    
    if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
        answer.style.maxHeight = '0';
    }
}