import bd_data from './../data-presets/data1.js';  

// Función para obtener el valor del query string  
function getQueryParam(param) {  
    const urlParams = new URLSearchParams(window.location.search);  
    return urlParams.get(param);  
}  

// Función para mostrar el mensaje de "producto no encontrado"  
function showProductNotFound() {  
    const productContainer = document.querySelector('.product-container');  
    productContainer.innerHTML = '<p>Producto no encontrado.</p>';  
}  

// Función para actualizar el DOM con los datos del producto  
function updateDOMWithProduct(product) {  
    const productImage = document.querySelector('.product-image img');  
    const productTitle = document.querySelector('.product-details h1');  
    const productPrice = document.querySelector('.product-details p');  
    const productStars = document.querySelector('.stars');  
    const productDescription = document.querySelector('.article-details p');  
    const vendorName = document.querySelector('.vendor-info p');  

    // Modificar el DOM con la información del producto  
    productImage.src = product.photos[0];  // Suponiendo que usas la primera foto  
    productTitle.textContent = product.title;  
    productPrice.textContent = `USD ${product.price.toFixed(2)}`;  
    productStars.textContent = '⭐'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating)); // Estrellas  
    productDescription.textContent = product.description;  
    vendorName.textContent = product.vendor;  
}  

// Función principal  
function main() {  
    const itemId = getQueryParam('item');  

    // Comprobar si el parámetro es un número  
    if (!itemId || isNaN(itemId)) {  
        showProductNotFound();  
        return;  
    }  

    const productId = parseInt(itemId, 10);  
    // Buscar el producto en la base de datos  
    const product = bd_data.products.find(p => p.id_product === productId);  

    if (product) {  
        updateDOMWithProduct(product);  
    } else {  
        showProductNotFound();  
    }  
}  

// Iniciar la función principal  
main();