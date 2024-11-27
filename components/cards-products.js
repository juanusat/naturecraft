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
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
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
            <button>
                <i class="fa-solid fa-plus"></i>
                <span>Añadir al carrito</span>
            </button>
        `
    }
    return productItem

    
};

const products = [
    { id_product: 1, photos: ['01_botella_bambu1.webp'], title: 'Botella de Bambú', price: '15.00' },
    { id_product: 2, photos: ['02_boli_ecologico.webp'], title: 'Bolígrafo Ecológico', price: '5.00' },
    { id_product: 3, photos: ['03_cuaderno.webp'], title: 'Cuaderno Reciclado', price: '8.00' },
    { id_product: 4, photos: ['04_caja.webp'], title: 'Caja Decorativa', price: '20.00' },
    { id_product: 5, photos: ['05_organizador.webp'], title: 'Organizador', price: '12.00' },
    // Agrega más productos aquí
];
