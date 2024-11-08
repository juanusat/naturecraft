import bd_data from './../data-presets/data1.js';
import { $ } from './../components/utils.js';
import { cardCircle } from './../components/cards-products.js';

function printBestProducts(limit) {
    const sortedProducts = bd_data.products.sort((a, b) => b.sales - a.sales);
    const limitedProducts = sortedProducts.slice(0, limit);
    limitedProducts.forEach(product => {
        const productCard = cardCircle(product);
        $('.bestSellers .carrousel-items').append(productCard);
    });
}
printBestProducts(6)

let cardProduct = $('.card-product-item-reg')
let z = 56
while (z--) {
    cardProduct.parentNode.appendChild(cardProduct.cloneNode(true))
}