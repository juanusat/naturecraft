function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const summaryContainer = document.querySelector('.summary');

    // Limpia los contenedores antes de llenarlos
    cartItemsContainer.innerHTML = '';
    summaryContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <p>Tu carrito está vacío. <a href="./index.html" class="link">¡Agrega productos!</a></p>`;
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-photo">
                <img src="./media/products/${item.photos[0]}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">USD ${item.price.toFixed(2)}</div>
                <div class="quantity-controls">
                    <button class="quantity-decrease">-</button>
                    <input type="number" class="quantity-input" value="${item.cantidadComprada}" min="1" data-id="${item.id_product}">
                    <button class="quantity-increase">+</button>
                </div>
                <button class="remove-item" data-id="${item.id_product}">Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    calculateSummary(cart);
    addEventListeners(cart);
}

function calculateSummary(cart) {
    const summaryContainer = document.querySelector('.summary');
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.cantidadComprada, 0);
    const igv = subtotal * 0.18;  
    const total = subtotal + igv;

    summaryContainer.innerHTML = `
        <div><strong>Subtotal:</strong> USD ${subtotal.toFixed(2)}</div>
        <div><strong>IGV (18%):</strong> USD ${igv.toFixed(2)}</div>
        <div><strong>Total:</strong> USD ${total.toFixed(2)}</div>
        <button class="checkout-btn">Finalizar compra</button>
    `;

    // Evento para animar el carrito al finalizar la compra
    const checkoutBtn = summaryContainer.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.classList.add('slide-in');

        setTimeout(() => {
            alert('Gracias por tu compra.');
            localStorage.removeItem('cart'); // Limpia el carrito
            loadCart(); // Recarga la página
        }, 500);
    });
}

function addEventListeners(cart) {
    // Event listeners para el aumento/disminución de cantidades
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    decreaseButtons.forEach(button => {
        button.addEventListener('click', (e) => updateQuantity(e, -1, cart));
    });

    increaseButtons.forEach(button => {
        button.addEventListener('click', (e) => updateQuantity(e, 1, cart));
    });

    quantityInputs.forEach(input => {
        input.addEventListener('change', (e) => updateQuantity(e, 0, cart));
    });

    // Event listener para eliminar un producto del carrito
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => removeItem(e, cart));
    });

    // Event listener para finalizar la compra
    const checkoutButton = document.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Proceso de compra iniciado.');
            // Aquí podrías redirigir al usuario a una página de pago o finalizar la compra
        });
    }
}

function updateQuantity(event, change, cart) {
    const input = event.target.closest('.cart-item').querySelector('.quantity-input');
    const productId = parseInt(input.dataset.id);
    const quantity = parseInt(input.value) + change;

    // Actualizar la cantidad si es válida
    if (quantity >= 1) {
        const product = cart.find(item => item.id_product === productId);
        if (product) {
            product.cantidadComprada = quantity;
        }

        // Actualizar el carrito en el localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();  // Recargar el carrito para actualizar las cantidades
    }
}

function removeItem(event, cart) {
    const productId = parseInt(event.target.dataset.id);
    
    // Eliminar el producto del carrito
    const updatedCart = cart.filter(item => item.id_product !== productId);
    
    // Actualizar el carrito en el localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    // Recargar el carrito
    loadCart();
}

// Cargar los productos del carrito cuando se carga la página
loadCart();