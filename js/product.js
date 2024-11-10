import bd_data from './../data-presets/data1.js';  

function getQueryParam(param) {  
    const urlParams = new URLSearchParams(window.location.search);  
    return urlParams.get(param);  
}  

function showProductNotFound() {  
    const productContainer = document.querySelector('.product-container');  
    productContainer.innerHTML = '<p>Producto no encontrado.</p>';  
}  

function updateDOMWithProduct(product) {  
    const productImageContainer = document.querySelector('.carousel-images');  
    const productTitle = document.querySelector('.product-details h1');  
    const productPrice = document.querySelector('.product-details p');  
    const productStars = document.querySelector('.stars');  
    const productDescription = document.querySelector('.article-details p');  
    const vendorName = document.querySelector('.vendor-info p');  
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
        if (i < fullStars) {  
            starIcon.className = 'fa-solid fa-star';
        } else {  
            starIcon.className = 'fa-regular fa-star';
        }  
        productStars.appendChild(starIcon);  
    }  
    productDescription.textContent = product.description;  
    vendorName.textContent = product.vendor;  
}
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
        if (index !== currentSlide) {  
            img.classList.remove('active');  
        }  
    });  
}  

function addCarouselEventListeners() {  
    const prevButton = document.querySelector('.carousel-button.prev');  
    const nextButton = document.querySelector('.carousel-button.next');  
    prevButton.addEventListener('click', () => moveSlide(-1));  
    nextButton.addEventListener('click', () => moveSlide(1));  
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
    } else {  
        showProductNotFound();  
    }  
    initCarousel();  
    addCarouselEventListeners();  
}  

main();