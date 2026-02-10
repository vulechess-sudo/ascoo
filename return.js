let itemCount = 1;

        function addItem() {
            const container = document.getElementById('itemsContainer');
            const newRow = document.createElement('div');
            newRow.className = 'item-row';
            newRow.innerHTML = `
                <select name="item${++itemCount}" required>
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
            const orderNum = document.querySelector('input[name="orderNumber"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const items = document.querySelectorAll('.item-row').length;
            
            document.getElementById('step1').classList.toggle('completed', orderNum && email);
            document.getElementById('step2').classList.toggle('completed', items > 0);
        }

        function submitReturn(e) {
            e.preventDefault();
            
            const btn = document.getElementById('submitBtn');
            const form = document.getElementById('returnForm');
            const successMessage = document.getElementById('successMessage');
            
            btn.classList.add('sending');
            btn.innerHTML = '';
            
            setTimeout(() => {
                btn.classList.remove('sending');
                form.style.display = 'none';
                successMessage.style.display = 'block';
                
                document.querySelectorAll('.step').forEach(step => {
                    step.classList.add('completed');
                    step.classList.remove('active');
                });
                
                document.querySelector('.return-container').scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        }

        function resetForm() {
            document.getElementById('returnForm').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('returnForm').reset();
            document.getElementById('submitBtn').innerHTML = '<i class="fas fa-paper-plane"></i> Submit Return Request';
            
            // Reset progress
            document.querySelectorAll('.step').forEach((step, index) => {
                step.classList.remove('completed');
                step.classList.toggle('active', index === 0);
            });
            
            // Reset items to one
            document.getElementById('itemsContainer').innerHTML = `
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
            itemCount = 1;
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