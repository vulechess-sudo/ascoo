let itemCount = 1;

function addItem() {
    const container = document.getElementById('itemsContainer');
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    newRow.innerHTML = `
        <select name="item${++itemCount}" required>
            <option value="">Select Item</option>
            <option value="jacket">Jacket - 78.710 RSD</option>
            <option value="dress">Dress - 80.000 RSD</option>
            <option value="shoes">Shoes - 65.000 RSD</option>
            <option value="accessories">Accessories - 45.000 RSD</option>
        </select>
        <select name="reason${itemCount}" required>
            <option value="">Reason</option>
            <option value="too-small">Too Small</option>
            <option value="too-large">Too Large</option>
            <option value="defective">Defective</option>
            <option value="not-as-described">Not as Described</option>
            <option value="changed-mind">Changed Mind</option>
        </select>
        <button type="button" class="remove-item" onclick="removeItem(this)">&times;</button>
    `;
    container.appendChild(newRow);
}

function removeItem(button) {
    button.parentElement.remove();
}

function submitReturn(e) {
    e.preventDefault();
    
    const form = document.getElementById('returnForm');
    const successMessage = document.getElementById('successMessage');
    
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    console.log('Return submitted:', new FormData(form));
}

function resetForm() {
    document.getElementById('returnForm').style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('returnForm').reset();
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.cart-container')) {
        document.getElementById('cartDropdown')?.classList.remove('active');
    }
    if (!e.target.closest('.search-dropdown')) {
        document.querySelector('.search-dropdown')?.classList.remove('active');
    }
});