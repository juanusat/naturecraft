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
            let idProd = product.id_product
            let datLS = JSON.parse(localStorage.getItem('dataSite_account')) || {}
            datLS['favorites'] = datLS['favorites'] || []
            if (datLS['favorites'].includes(idProd)) {
                if (confirm('Este elemento ya está en sus favoritos. ¿Desea eliminarlo?')) {
                    productItem.classList.remove('marked-favorite')
                    datLS['favorites'] = datLS['favorites'].filter(favId => favId !== idProd);
                    alert('El producto ha sido eliminado de sus favoritos.');
                }
            } else {
                productItem.classList.add('marked-favorite')
                datLS['favorites'].push(idProd);
                alert('El producto ha sido añadido a sus favoritos.');
            }
            localStorage.setItem('dataSite_account', JSON.stringify(datLS));
            if (typeof window.printFavs == 'function') {
                window.printFavs()
            }
        }
    })
    let datLS = JSON.parse(localStorage.getItem('dataSite_account')) || {}
    datLS['favorites'] = datLS['favorites'] || []
    if (datLS['favorites'].includes(product.id_product)) {
        productItem.classList.add('marked-favorite')
    }
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