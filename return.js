// EmailJS Configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_2fm99c2',
    TEMPLATE_ID: 'template_uu67aav              ',
    PUBLIC_KEY: 'ipmDfONOLnNNY81_y',
    YOUR_EMAIL: 'marcuswill886@gmail.com'
};

let itemCount = 1;

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    const form = document.getElementById('returnForm');
    if (form) {
        form.addEventListener('submit', submitReturn);
    }
    
    document.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('change', updateProgress);
        input.addEventListener('input', updateProgress);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-container')) {
            document.getElementById('cartDropdown')?.classList.remove('active');
        }
        if (!e.target.closest('.search-dropdown')) {
            document.querySelector('.search-dropdown')?.classList.remove('active');
        }
    });
});

function addItem() {
    const container = document.getElementById('itemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    itemCount++;
    newRow.innerHTML = `
        <select name="item${itemCount}" required>
            <option value="">Select Item</option>
            <option value="jacket">Jacket — 78.710 RSD</option>
            <option value="dress">Dress — 80.000 RSD</option>
            <option value="shoes">Shoes — 65.000 RSD</option>
            <option value="accessories">Accessories — 45.000 RSD</option>
        </select>
        <select name="reason${itemCount}" required>
            <option value="">Return Reason</option>
            <option value="too-small">Too Small</option>
            <option value="too-large">Too Large</option>
            <option value="defective">Defective</option>
            <option value="not-as-described">Not as Described</option>
            <option value="changed-mind">Changed Mind</option>
        </select>
        <button type="button" class="remove-item" onclick="removeItem(this)">&times;</button>
    `;
    container.appendChild(newRow);
    updateProgress();
}

function removeItem(button) {
    button.parentElement.remove();
    updateProgress();
}

function updateProgress() {
    const orderNum = document.querySelector('input[name="orderNumber"]')?.value;
    const email = document.querySelector('input[name="email"]')?.value;
    const items = document.querySelectorAll('.item-row').length;
    
    document.getElementById('step1')?.classList.toggle('completed', orderNum && email);
    document.getElementById('step2')?.classList.toggle('completed', items > 0);
}

function formatItemsForEmail() {
    const itemRows = document.querySelectorAll('.item-row');
    let itemsHtml = '';
    
    itemRows.forEach((row, index) => {
        const itemSelect = row.querySelector('select[name^="item"]');
        const reasonSelect = row.querySelector('select[name^="reason"]');
        
        if (itemSelect?.selectedIndex > 0 && reasonSelect?.selectedIndex > 0) {
            const itemText = itemSelect.options[itemSelect.selectedIndex].text;
            const reasonText = reasonSelect.options[reasonSelect.selectedIndex].text;
            
            itemsHtml += `
                <div style="margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #fed7d7;">
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">${index + 1}. ${itemText}</div>
                    <div style="font-size: 13px; color: #718096;">Reason: ${reasonText}</div>
                </div>
            `;
        }
    });
    
    return itemsHtml || '<p>No items selected</p>';
}

async function submitReturn(e) {
    e.preventDefault();
    
    const btn = document.getElementById('submitBtn');
    const form = document.getElementById('returnForm');
    
    if (!btn || !form) return;
    
    btn.classList.add('sending');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    // Gather form data
    const customerEmail = document.querySelector('input[name="email"]')?.value;
    const orderNumber = document.querySelector('input[name="orderNumber"]')?.value;
    const orderDate = document.querySelector('input[name="orderDate"]')?.value;
    const returnMethod = document.querySelector('input[name="returnMethod"]:checked')?.value === 'pickup' 
        ? 'Home Pickup (Free)' 
        : 'Drop Off';
    const comments = document.querySelector('textarea[name="comments"]')?.value || 'No additional comments';
    const itemsHtml = formatItemsForEmail();
    
    // Template parameters - MUST match your EmailJS template variables exactly!
    const templateParams = {
        orderNumber: orderNumber,
        email: customerEmail,
        orderDate: orderDate,
        returnMethod: returnMethod,
        items: itemsHtml,
        comments: comments
    };
    
    console.log('Sending emails with params:', templateParams);
    
    try {
        // Send 1: To Customer
        const customerParams = {
            ...templateParams,
            to_email: customerEmail  // This goes in "To Email" field in EmailJS template
        };
        
        await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            customerParams
        );
        
        console.log('✅ Customer email sent');
        
        // Send 2: To You (Admin copy)
        const adminParams = {
            ...templateParams,
            to_email: EMAILJS_CONFIG.YOUR_EMAIL,  // Your email
            subject_prefix: '[ADMIN COPY] '  // Optional: different subject
        };
        
        await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            adminParams
        );
        
        console.log('✅ Admin email sent');
        
        // Show success
        btn.classList.remove('sending');
        form.style.display = 'none';
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
        }
        
        document.querySelectorAll('.step').forEach(step => {
            step.classList.add('completed');
            step.classList.remove('active');
        });
        
        document.querySelector('.return-container')?.scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('❌ EmailJS Error:', error);
        btn.classList.remove('sending');
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Return Request';
        btn.disabled = false;
        alert('Failed to send: ' + (error.text || error.message || 'Unknown error. Check console (F12)'));
    }
}

function resetForm() {
    const form = document.getElementById('returnForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form) {
        form.style.display = 'block';
        form.reset();
    }
    if (successMessage) {
        successMessage.style.display = 'none';
    }
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Return Request';
        submitBtn.disabled = false;
    }
    
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.remove('completed');
        step.classList.toggle('active', index === 0);
    });
    
    const container = document.getElementById('itemsContainer');
    if (container) {
        container.innerHTML = `
            <div class="item-row">
                <select name="item1" required>
                    <option value="">Select Item</option>
                    <option value="jacket">Jacket — 78.710 RSD</option>
                    <option value="dress">Dress — 80.000 RSD</option>
                    <option value="shoes">Shoes — 65.000 RSD</option>
                    <option value="accessories">Accessories — 45.000 RSD</option>
                </select>
                <select name="reason1" required>
                    <option value="">Return Reason</option>
                    <option value="too-small">Too Small</option>
                    <option value="too-large">Too Large</option>
                    <option value="defective">Defective</option>
                    <option value="not-as-described">Not as Described</option>
                    <option value="changed-mind">Changed Mind</option>
                </select>
                <button type="button" class="remove-item" onclick="removeItem(this)">&times;</button>
            </div>
        `;
    }
    itemCount = 1;
}