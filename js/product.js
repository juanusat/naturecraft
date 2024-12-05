import bd_data from './../data-presets/data1.js';
import configShop from './server.js';
import { printForYou } from './home.js';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function showProductNotFound() {
    document.title = '404 | Producto no encontrado :('
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '<p>Producto no encontrado.</p>';
}

function updateDOMWithProduct(product) {
    document.title = product.title + ' | ' + configShop.nameCommecial
    const productImageContainer = document.querySelector('.carousel-images');
    const productTitle = document.querySelector('.product-details h1');
    const productPrice = document.querySelector('.product-details .product-price');
    const productStars = document.querySelector('.stars');
    const productDescription = document.querySelector('#produt-description');
    const vendorName = document.querySelector('#produt-vendor');
    
    productImageContainer.innerHTML = '';
    product.photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = './media/products/' + photo;
        imgElement.alt = product.title;
        productImageContainer.appendChild(imgElement);
    });

    productTitle.textContent = product.title;
    productPrice.textContent = `USD ${product.price.toFixed(2)}`;
    productStars.innerHTML = '';
    
    const fullStars = Math.round(product.rating);
    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.className = i < fullStars ? 'fa-solid fa-star' : 'fa-regular fa-star';
        productStars.appendChild(starIcon);
    }
    
    productDescription.textContent = product.description;
    vendorName.textContent = product.vendor;
}

// Función para añadir el producto al carrito
function addToCart(product) {
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value, 10);

    if (isNaN(quantity) || quantity < 1) {
        alert('Por favor, ingresa una cantidad válida.');
        return;
    }

    if (quantity > product.stock) {
        alert('No puedes añadir más productos de los disponibles en stock.');
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id_product === product.id_product);

    if (existingProduct) {
        if ((existingProduct.cantidadComprada + quantity) <= product.stock) {
            existingProduct.cantidadComprada += quantity;
        } else {
            alert('Cantidad total excede el stock disponible.');
            return;
        }
    } else {
        cart.push({ ...product, cantidadComprada: quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto añadido al carrito con éxito.');
}

// Función para añadir o quitar el producto de favoritos
function toggleFavorite(product) {
    let datLS = JSON.parse(localStorage.getItem('dataSite_account')) || {};
    datLS['favorites'] = datLS['favorites'] || [];

    if (datLS['favorites'].includes(product.id_product)) {
        datLS['favorites'] = datLS['favorites'].filter(favId => favId !== product.id_product);
        alert('Producto eliminado de favoritos.');
    } else {
        datLS['favorites'].push(product.id_product);
        alert('Producto añadido a favoritos.');
    }

    localStorage.setItem('dataSite_account', JSON.stringify(datLS));
}

// Eventos para botones
function addEventListeners(product) {
    const btnAddCart = document.querySelector('.btn-add-cart');
    const btnAddFavorites = document.querySelector('.btn-add-favorites');
    
    btnAddCart.addEventListener('click', () => addToCart(product));
    btnAddFavorites.addEventListener('click', () => toggleFavorite(product));
}

function main() {
    const itemId = getQueryParam('item');
    if (!itemId || isNaN(itemId)) {
        showProductNotFound();
        return;
    }

    const productId = parseInt(itemId, 10);
    const product = bd_data.products.find(p => p.id_product === productId);
    
    if (product) {
        updateDOMWithProduct(product);
        addEventListeners(product);
    } else {
        showProductNotFound();
    }

    initCarousel();
    addCarouselEventListeners();
}

// Carrusel de imágenes (sin cambios)
let currentSlide = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalSlides = images.length;
    images[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    images[currentSlide].classList.add('active');
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function initCarousel() {
    const images = document.querySelectorAll('.carousel-images img');
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentSlide);
    });
}

function addCarouselEventListeners() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
}
printForYou(8, '.grid-products.grid-fy');
main();