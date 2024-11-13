import bd_data from '../data-presets/data1.js';
import { $ } from '../components/utils.js';
import { cardProduct } from '../components/cards-products.js';

function printForYou(limit) {
    const sortedProducts = bd_data.products.sort(() => Math.random() - 0.5);
    const limitedProducts = sortedProducts.slice(0, limit);
    limitedProducts.forEach(product => {
        const productCard = cardProduct(product, true);
        $('#shop-container .grid-products').append(productCard);
    });
}
printForYou(18)
/*
let cardProduct = $('.card-product-item-reg')
let z = 56
while (z--) {
    cardProduct.parentNode.appendChild(cardProduct.cloneNode(true))
}
    */