import { $ } from '../components/utils.js';
(function() {
    let cardProduct = $('.card-product-item-reg')
    let z = 11
    while (z--) {
        cardProduct.parentNode.appendChild(cardProduct.cloneNode(true))
    }
    let cardProductSuggest = $('#similarFavorites .card-product-item-reg')
    z = 7
    while (z--) {
        cardProductSuggest.parentNode.appendChild(cardProductSuggest.cloneNode(true))
    }
})()