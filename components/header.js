import { $ } from './utils.js';
import { createElement } from './composer.js';
import bd_data from './../data-presets/data1.js';

export const createHeader = () => {
    const header = createElement('header', {
        className: 'maximize',
        innerHTML:
        /*html*/`
        <div class="header-top">
            <div class="header-top-box">
                <div class="mobile-menu-box">
                    <div id="btn-open-lateral-nav">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <a class="header-logo" href="index.html">
                    <img src="./media/brand/brand-logo-st.svg" alt="logo">
                </a>
                <div class="center-bar-search-container">
                    <div class="center-bar-search-box">
                        <div class="search-bar">
                            <input type="text" name="product-name" placeholder="Buscar" spellcheck="false"
                                autocomplete="off" id="query-search">
                            <div class="btn-search-box-icon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div class="btn-close-box-icon">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div class="search-results-container">
                            <div class="search-results-box"></div>
                        </div>
                    </div>
                </div>
                <div class="quick-access">
                    <a class="color-t-n2" href="miperfil.html">
                        <i class="fa-solid fa-user"></i>
                    </a>
                    <a class="color-t-n2" href="favorites.html">
                        <i class="fa-solid fa-heart"></i>
                    </a>
                    <a class="color-t-n2" href="carrito.html">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </a>
                </div>
                <div class="mobile-search-box">
                    <div id="btn-search-container">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-nav">
            <div class="nav-header">
                <div id="btn-close-lateral-nav">
                    <i class="fa-solid fa-angles-left"></i>
                </div>
            </div>
            <div class="nav-quick-access">
                <a class="color-t-n2" href="miperfil.html">
                    <i class="fa-solid fa-user"></i><span>Mi perfil</span>
                </a>
                <a class="color-t-n2" href="favoritos.html">
                    <i class="fa-solid fa-heart"></i><span>Favoritos</span>
                </a>
                <a class="color-t-n2" href="carrito.html">
                    <i class="fa-solid fa-cart-shopping"></i><span>Carrito</span>
                </a>
            </div>
            <div class="nav-link-clients">
                <div class="header-nav-box">
                    <a href="index.html"><span>Inicio</span></a>
                    <a href="about.html"><span>Sobre nosotros</span></a>
                    <a href="blog.html"><span>Blog</span></a>
                    <a href="contact.html"><span>Contacto</span></a>
                    <a href="promotions.html"><span>Promociones</span></a>
                    <a href="support.html"><span>Soporte</span></a>
                    <a href="shop.html"><span>Tienda</span></a>
                </div>
            </div>
            <div class="nav-link-vendors">
                <div class="header-nav-box">
                    <a href="vendor-home.html"><span>Panel de vendedor</span></a>
                    <a href="vendor-products.html"><span>Gestión de productos</span></a>
                    <a href="vendor-sales.html"><span>Órdenes y envíos</span></a>
                    <a href="vendor-resume.html"><span>Informes y finanzas</span></a>
                    <a href="vendor-messenger.html"><span>Comunicaciones</span></a>
                </div>
            </div>
        </div>
        <div class="header-shadow"></div>
        `
    });
    $('.main').prepend(header);
    $('#btn-open-lateral-nav').addEventListener('click', function() {
        $('.header-nav').classList.add('lateral-view')
    })
    $('#btn-close-lateral-nav').addEventListener('click', function() {
        $('.header-nav').classList.remove('lateral-view')
    })
    $('.header-shadow').addEventListener('click', function() {
        $('.header-nav').classList.remove('lateral-view')
    })
    let searchBox = $('.search-bar')
    let searchIpt = $('#query-search')
    let searchResults = $('.search-results-box')
    let btnClose = $('.btn-close-box-icon')
    let btnMobileOpen = $('.mobile-search-box')
    searchIpt.addEventListener('input', function() {
        let query = searchIpt.value.trim()
        console.log(query)
        searchResults.innerHTML = ''
        if (query) {
            searchBox.classList.add('open')
            const sortedProducts = bd_data.products.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
            for (const product of sortedProducts) {
                const product_item = product;
                if (product_item.title.toLowerCase().includes(query.toLowerCase())) {
                    const highlightedTitle = product_item.title.replace(
                        new RegExp(`(${query})`, 'gi'),
                        '<strong>$1</strong>'
                    )

                    let item_result = createElement('div',
                        {
                            className: 'search-result litem',
                            innerHTML: /*html*/ `<div class="text">${highlightedTitle}</div>
                            <div class="btn-open-in-new-tab">
                                <i class="fa-solid fa-arrow-up"></i>
                            </div>`
                        }
                    )
                    item_result.querySelector('.text').addEventListener('click', function() {
                        open('product.html?item=' + product.id_product, '_top')
                    })
                    item_result.querySelector('.btn-open-in-new-tab').addEventListener('click', function() {
                        open('product.html?item=' + product.id_product, '_blank')
                    })
                    searchResults.appendChild(item_result)
                }
            }
            if (searchResults.childElementCount < 1) {
                searchBox.classList.remove('open')
            }
        } else {
            searchBox.classList.remove('open')
        }
    })
    btnClose.addEventListener('click', function() {
        searchIpt.value = ''
        searchResults.innerHTML = ''
        searchBox.classList.remove('open')
        $('.center-bar-search-container').classList.remove('mobile-open')
    })
    btnMobileOpen.addEventListener('click', function() {
        $('.center-bar-search-container').classList.add('mobile-open')
    })
};