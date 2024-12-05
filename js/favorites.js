import bd_data from '../data-presets/data1.js';
import { $ } from '../components/utils.js';
import { cardProduct } from '../components/cards-products.js';

function printSimilarFavorites(limit) {
    const sortedProducts = bd_data.products.sort(() => Math.random() - 0.5);
    const limitedProducts = sortedProducts.slice(0, limit);
    limitedProducts.forEach(product => {
        const productCard = cardProduct(product);
        $('#similarFavorites .grid-products').append(productCard);
    });
}
function printFavorites() {
    const favorites = JSON.parse(localStorage.getItem('dataSite_account'))?.favorites || [];
    const favoritesContainer = $('#favorites .grid-products');
    favoritesContainer.innerHTML = ''

    if (favorites.length === 0) {
        $('.favorites-header').style.display = 'none'
        favoritesContainer.classList.add('empty')
        favoritesContainer.innerHTML = /*html*/ `
            <p class="empty-favorites-sup">No tiene productos agregados a favoritos.</p>
            <p class="empty-favorites-inf">Vaya a <a href="./../">inicio</a>, le garantizamos encontrar productos interesantes</p>
        `;
    } else {
        favorites.forEach(favoriteId => {
            const product = bd_data.products.find(product => product.id_product === favoriteId);
            if (product) {
                const productCard = cardProduct(product);
                favoritesContainer.append(productCard);
            }
        });
    }
}

printSimilarFavorites(12);
printFavorites();
window.printFavs = printFavorites;