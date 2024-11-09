import bd_data from '../data-presets/data1.js';
import { $ } from '../components/utils.js';
import { cardCircle, cardProduct } from '../components/cards-products.js';

function printBestProducts(limit) {
    const sortedProducts = bd_data.products.sort((a, b) => b.sales - a.sales);
    const limitedProducts = sortedProducts.slice(0, limit);
    limitedProducts.forEach(product => {
        const productCard = cardCircle(product);
        $('#bestSellers .carrousel-items').append(productCard);
    });
}
printBestProducts(6)
function printForYou(limit) {
    const sortedProducts = bd_data.products.sort(() => Math.random() - 0.5);
    const limitedProducts = sortedProducts.slice(0, limit);
    limitedProducts.forEach(product => {
        const productCard = cardProduct(product);
        $('#forYou .grid-products').append(productCard);
    });
}
printForYou(18)
const carrouselItems = document.querySelector('.carrousel-items');

function updateCarrouselAlignment() {
  if (carrouselItems.scrollWidth > carrouselItems.clientWidth) {
    carrouselItems.classList.remove('centered');
    carrouselItems.classList.add('scrolled');
  } else {
    carrouselItems.classList.remove('scrolled');
    carrouselItems.classList.add('centered');
  }
}
window.addEventListener('load', updateCarrouselAlignment);
window.addEventListener('resize', updateCarrouselAlignment);
/*
let cardProduct = $('.card-product-item-reg')
let z = 56
while (z--) {
    cardProduct.parentNode.appendChild(cardProduct.cloneNode(true))
}
    */