import { createElement } from './composer.js';  

export const cardCircle = (product) => {  
    let productSrc  = product.photo || './media/box-empty.png'
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
export const cardProduct = (product) => {  
    let productSrc  = product.photo || './media/box-empty.png'
    const productItem = createElement('a', {
        href: 'product.html?item=' + product.id_product,
        className: 'card-product-circle',
        innerHTML: /*html*/`
        <picture>
            <img src="${productSrc }" alt="${product.title}">
        </picture>
        `
    });
    console.log(productItem)
    return productItem
};