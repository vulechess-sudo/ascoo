let cart = [];
let shippingCost = 0;

function initCheckout() {
    cart = JSON.parse(localStorage.getItem('ascoCart')) || [];

    if (cart.length === 0) {
        showEmptyState();
    } else {
        showCheckoutForm();
        loadOrderSummary();
    }
}

function showEmptyState() {
    document.getElementById('checkoutContent').innerHTML = `
                <div class="empty-checkout">
                    <i class="fas fa-shopping-bag"></i>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added anything to your cart yet. Explore our collection and find something you'll love.</p>
                    <a href="shop.html" class="continue-btn">Continue Shopping</a>
                </div>
            `;
}

function showCheckoutForm() {
    document.getElementById('checkoutContent').innerHTML = `
                <div class="checkout-page">
                    <div class="checkout-section">
                        <h2>Checkout</h2>
                        <form class="checkout-form" id="checkoutForm" onsubmit="handleCheckout(event)">
                            
                            <!-- Contact Section -->
                            <div class="form-section">
                                <h3><span>1</span> Contact Information</h3>
                                <div class="form-group">
                                    <label>Email Address *</label>
                                    <input type="email" name="email" required placeholder="your@email.com">
                                </div>
                                <div class="form-group">
                                    <label>Phone Number *</label>
                                    <input type="tel" name="phone" required placeholder="+381 XX XXX XXXX">
                                </div>
                            </div>

                            <!-- Shipping Section -->
                            <div class="form-section">
                                <h3><span>2</span> Shipping Address</h3>
                                <div class="form-group">
                                    <label>Full Name *</label>
                                    <input type="text" name="fullname" required placeholder="First and Last Name">
                                </div>
                                <div class="form-group">
                                    <label>Address *</label>
                                    <input type="text" name="address" required placeholder="Street Address">
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label>City *</label>
                                        <input type="text" name="city" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Postal Code *</label>
                                        <input type="text" name="postal" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Country *</label>
                                    <select name="country" required onchange="updateShipping(this.value)">
                                        <option value="">Select Country</option>
                                        <option value="rs">Serbia</option>
                                        <option value="hr">Croatia</option>
                                        <option value="ba">Bosnia and Herzegovina</option>
                                        <option value="si">Slovenia</option>
                                        <option value="me">Montenegro</option>
                                        <option value="mk">North Macedonia</option>
                                        <option value="other">Other (International)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Payment Section -->
                            <div class="form-section">
                                <h3><span>3</span> Payment Method</h3>
                                <div class="payment-methods">
                                    <label class="payment-method active" onclick="selectPayment(this, 'card')">
                                        <input type="radio" name="payment" value="card" checked>
                                        <div class="payment-icon"><i class="fas fa-credit-card"></i></div>
                                        <div class="payment-info">
                                            <strong>Credit Card</strong>
                                            <span>Visa, Mastercard, Amex</span>
                                        </div>
                                    </label>                                   
                                    <label class="payment-method" onclick="selectPayment(this, 'paypal')">
                                        <input type="radio" name="payment" value="paypal">
                                        <div class="payment-icon"><i class="fab fa-paypal"></i></div>
                                        <div class="payment-info">
                                            <strong>PayPal</strong>
                                            <span>Fast & secure payment</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <button type="submit" class="place-order-btn" id="placeOrderBtn">
                                Place Order
                            </button>
                        </form>
                    </div>

                    <aside class="order-summary">
                        <h3>Order Summary</h3>
                        <div class="summary-items" id="summaryItems"></div>
                        
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span id="subtotal">0 RSD</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping</span>
                            <span id="shipping">Calculated at next step</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span id="total">0 RSD</span>
                        </div>
                        
                        <div class="secure-badge">
                            <i class="fas fa-lock"></i>
                            Secure Checkout - SSL Encrypted
                        </div>
                    </aside>
                </div>
            `;
}

function loadOrderSummary() {
    const container = document.getElementById('summaryItems');
    if (!container) return;

    let subtotal = 0;

    container.innerHTML = cart.map(item => {
        const priceNum = parseInt(item.price.replace(/[.\sRSD]/g, "")) || 0;
        const itemTotal = priceNum * (item.quantity || 1);
        subtotal += itemTotal;

        return `
                    <div class="summary-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="summary-item-details">
                            <div class="summary-item-name">${item.name}</div>
                            <div class="summary-item-meta">Size: ${item.size} | Qty: ${item.quantity || 1}</div>
                            <div class="summary-item-price">${item.price}</div>
                        </div>
                    </div>
                `;
    }).join('');

    updateTotals(subtotal);
}

function updateShipping(country) {
    const shippingRates = {
        'rs': 350,
        'hr': 450,
        'ba': 450,
        'si': 450,
        'me': 450,
        'mk': 450,
        'other': 1200
    };

    shippingCost = shippingRates[country] || 0;

    const subtotal = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[.\sRSD]/g, "")) || 0;
        return sum + (price * (item.quantity || 1));
    }, 0);

    updateTotals(subtotal);
}

function updateTotals(subtotal) {
    const shippingEl = document.getElementById('shipping');
    const totalEl = document.getElementById('total');
    const subtotalEl = document.getElementById('subtotal');

    if (!shippingEl || !totalEl) return;

    subtotalEl.textContent = `${subtotal.toLocaleString('de-DE')} RSD`;

    if (shippingCost === 0) {
        shippingEl.textContent = 'Calculated at next step';
        totalEl.textContent = `${subtotal.toLocaleString('de-DE')} RSD`;
    } else {
        shippingEl.textContent = `${shippingCost.toLocaleString('de-DE')} RSD`;
        const total = subtotal + shippingCost;
        totalEl.textContent = `${total.toLocaleString('de-DE')} RSD`;
    }
}

function selectPayment(element, method) {
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('active');
        el.querySelector('input').checked = false;
    });

    element.classList.add('active');
    element.querySelector('input').checked = true;
}

async function handleCheckout(e) {
    e.preventDefault();
    
    const btn = document.getElementById('placeOrderBtn');
    const form = e.target;
    
    const email = form.querySelector('input[name="email"]').value;
    const fullname = form.querySelector('input[name="fullname"]').value;
    const address = form.querySelector('input[name="address"]').value;
    const city = form.querySelector('input[name="city"]').value;
    const phone = form.querySelector('input[name="phone"]').value;
    const country = form.querySelector('select[name="country"]').value;
    const countryNames = {
        'rs': 'Serbia', 'hr': 'Croatia', 'ba': 'Bosnia', 
        'si': 'Slovenia', 'me': 'Montenegro', 'mk': 'Macedonia', 'other': 'International'
    };
    
    if (shippingCost === 0) {
        alert('Please select a country to calculate shipping');
        form.querySelector('select[name="country"]').focus();
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(/[.\sRSD]/g, "")) || 0;
        return sum + (price * (item.quantity || 1));
    }, 0);
    const total = subtotal + shippingCost;
    const orderNum = 'ASCO-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    const orderDate = new Date().toLocaleString('sr-RS');
    
    btn.disabled = true;
    btn.textContent = 'Processing...';
    
    try {
        const itemsList = cart.map(item => {
            return `${item.name} (Size: ${item.size}) x${item.quantity || 1} - ${item.price}`;
        }).join('\n');
        
        const adminItemsList = cart.map((item, index) => {
            return `${index + 1}. ${item.name} | Size: ${item.size} | Qty: ${item.quantity || 1} | Price: ${item.price} | ID: ${item.id}`;
        }).join('\n\n');

        const customerEmail = emailjs.send("service_yumu8xj", "template_43g70ll", {
            to_email: email,
            to_name: fullname,
            name: "Asco Shop",
            order_number: orderNum,
            order_items: itemsList,
            subtotal: subtotal.toLocaleString('de-DE') + ' RSD',
            shipping: shippingCost.toLocaleString('de-DE') + ' RSD',
            total: total.toLocaleString('de-DE') + ' RSD',
            customer_email: email,
            customer_phone: phone,
            shipping_address: `${address}, ${city}`,
            customer_name: fullname,
            reply_to: "vulechess@gmail.com" 
        });
        
        const adminEmail = emailjs.send("service_yumu8xj", "template_wwcxf88", {
            to_email: "vulechess@gmail.com", 
            to_name: "Admin",
            from_name: "Asco Shop System",
            subject: `🛒 NEW ORDER #${orderNum}`,
            order_number: orderNum,
            order_date: orderDate,
            order_items: adminItemsList,
            subtotal: subtotal.toLocaleString('de-DE') + ' RSD',
            shipping: shippingCost.toLocaleString('de-DE') + ' RSD',
            shipping_country: countryNames[country],
            total: total.toLocaleString('de-DE') + ' RSD',
            customer_email: email,
            customer_phone: phone,
            customer_name: fullname,
            shipping_address: `${address}, ${city}, ${countryNames[country]}`,
            payment_method: form.querySelector('input[name="payment"]:checked').value.toUpperCase()
        });
        
        await Promise.all([customerEmail, adminEmail]);
        
        localStorage.removeItem('ascoCart');
        if (typeof renderCart === 'function') renderCart();
        
        document.getElementById('orderNumber').textContent = '#' + orderNum;
        document.getElementById('confirmEmail').textContent = email;
        document.getElementById('successModal').classList.add('active');
        
    } catch (error) {
        console.error('Email failed:', error);
        alert('Order placed but email notification failed. Please save this order number: ' + orderNum);
        
        localStorage.removeItem('ascoCart');
        document.getElementById('successModal').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', initCheckout);