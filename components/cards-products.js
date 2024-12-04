import { createElement } from './composer.js';

export const cardCircle = (product) => {
    let productSrc  = './media/products/' + (product.photos[0] || 'box-empty.png')
    const productItem = createElement('a', {
        href: 'product.html?item=' + product.id_product,
        className: 'card-product-circle',
        innerHTML: /*html*/`
        <picture>
            <img src="${productSrc }" alt="${product.title}">
        </picture>
        `
    });
    return productItem
};
export const cardProduct = (product, showBtnAddCart = false) => {
    let productSrc  = './media/products/' + (product.photos[0] || 'box-empty.png')
    const ratingStars = Math.round(product.rating);
    const starsHTML = Array.from({ length: 5 }, (_, index) => {
        return index < ratingStars
            ? '<i class="fa-solid fa-star"></i>'
            : '<i class="fa-regular fa-star"></i>';
    }).join('');
    const productItem = createElement('a', {
        href: 'product.html?item=' + product.id_product,
        className: 'card-product-item-reg',
        innerHTML: /*html*/`
        <div class="photo">
            <div class="icons-float">
                <div class="cursorp icon-favorite">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <picture>
                <img src="${productSrc}" alt="producto">
            </picture>
        </div>
        <div class="details">
            <div class="rating">${starsHTML}</div>
            <div class="product-name">${product.title}</div>
            <div class="price">USD ${product.price}</div>
        </div>
        `
    });
    productItem.addEventListener('click', function(e) {
        if (e.target.closest('.icon-favorite')) {
            e.preventDefault()
            alert('Le dio like a un producto')
        }
    })
    if (showBtnAddCart) {
        productItem.innerHTML += /*html*/`
            <button class="btn-add-cart">
                <i class="fa-solid fa-plus"></i>
                <span>Añadir al carrito</span>
            </button>
        `
    }
    return productItem
};