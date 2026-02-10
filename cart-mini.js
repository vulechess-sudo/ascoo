const cartDropdown = document.getElementById("cartDropdown");
const cartItemsEl = document.getElementById("cartItems");
const cartCounter = document.getElementById("cartCounter");
const cartTotalEl = document.getElementById("cartTotal");

function toggleCartDropdown() {
    cartDropdown.classList.toggle("active");
    
    document.querySelector('.search-dropdown')?.classList.remove('active');
    
    renderCart();
}

function getCart() {
    return JSON.parse(localStorage.getItem("ascoCart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("ascoCart", JSON.stringify(cart));
}

function renderCart() {
    const cart = getCart();
    if (cartItemsEl) cartItemsEl.innerHTML = "";

    if (cart.length === 0) {
        if (cartItemsEl) cartItemsEl.innerHTML = `<div class="cart-empty">Your cart is empty</div>`;
        updateCartCounterDisplay(0);
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

    updateCartCounterDisplay(itemCount);
    if (cartTotalEl) cartTotalEl.textContent = `${total.toLocaleString('de-DE')} RSD`;
}

function updateCartCounterDisplay(count) {
    if (!cartCounter) return;
    
    cartCounter.textContent = count;
    
    if (count > 0) {
        cartCounter.classList.add('visible');
    } else {
        cartCounter.classList.remove('visible');
    }
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".cart-container")) {
        cartDropdown?.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});