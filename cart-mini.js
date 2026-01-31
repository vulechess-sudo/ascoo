// cart-mini.js - ONLY cart dropdown functionality, NO addToCart

const cartDropdown = document.getElementById("cartDropdown");
const cartItemsEl = document.getElementById("cartItems");
const cartCounter = document.getElementById("cartCounter");
const cartTotalEl = document.getElementById("cartTotal");

function toggleCartDropdown() {
    cartDropdown.classList.toggle("active");
    
    // Close search if open
    document.querySelector('.search-dropdown')?.classList.remove('active');
    
    renderCart();
}

/* Get cart from localStorage - MUST match product.js key */
function getCart() {
    return JSON.parse(localStorage.getItem("ascoCart")) || [];
}

/* Save cart */
function saveCart(cart) {
    localStorage.setItem("ascoCart", JSON.stringify(cart));
}

/* Render cart */
function renderCart() {
    const cart = getCart();
    if (cartItemsEl) cartItemsEl.innerHTML = "";

    if (cart.length === 0) {
        if (cartItemsEl) cartItemsEl.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
        if (cartCounter) cartCounter.style.display = "none";
        if (cartTotalEl) cartTotalEl.textContent = "0 RSD";
        return;
    }

    let total = 0;
    let itemCount = 0;

    cart.forEach((item, index) => {
        const priceNum = parseInt(item.price.replace(/[.\sRSD]/g, "")) || 0;
        total += priceNum * (item.quantity || 1);
        itemCount += item.quantity || 1;

        if (cartItemsEl) {
            const div = document.createElement("div");
            div.className = "cart-item";
            div.innerHTML = `
                <img src="${item.image}" alt="">
                <div class="cart-item-info">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-size">Size: ${item.size}</p>
                    <p class="cart-item-price">${item.price} ${item.quantity > 1 ? 'x' + item.quantity : ''}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
            `;
            cartItemsEl.appendChild(div);
        }
    });

    if (cartCounter) {
        cartCounter.textContent = itemCount;
        cartCounter.style.display = "flex";
    }
    if (cartTotalEl) cartTotalEl.textContent = `${total.toLocaleString('de-DE')} RSD`;
}

/* Remove item */
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

/* Close when clicking outside */
document.addEventListener("click", (e) => {
    if (!e.target.closest(".cart-container")) {
        cartDropdown?.classList.remove("active");
    }
});

/* Initial render */
document.addEventListener('DOMContentLoaded', renderCart);