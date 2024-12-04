import bd_data from './../data-presets/data1.js';

window.addEventListener('load', function () {
    const products = bd_data.products;

    const salesPerMonthsCtx = document.getElementById('salesPerMonths').getContext('2d');
    const salesData = Array.from({ length: 3 }, () => Math.floor(Math.random() * 86));
    const salesPerMonthsConfig = {
        type: 'bar',
        data: {
            labels: ['Septiembre', 'Octubre', 'Noviembre'],
            datasets: [{
                label: 'Ventas',
                data: salesData,
                backgroundColor: '#FFB74D',
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };
    new Chart(salesPerMonthsCtx, salesPerMonthsConfig);

    const bestProductsCtx = document.getElementById('bestProducts').getContext('2d');
    const randomProducts = [];
    while (randomProducts.length < 3) {
        const randomIndex = Math.floor(Math.random() * products.length);
        if (!randomProducts.includes(products[randomIndex])) {
            randomProducts.push(products[randomIndex]);
        }
    }
    const bestProductsData = randomProducts.map(() => Math.floor(Math.random() * 23) + 30);
    const bestProductsConfig = {
        type: 'pie',
        data: {
            labels: randomProducts.map(product => product.title),
            datasets: [{
                data: bestProductsData,
                backgroundColor: ['#FFB74D', '#FF9800', '#FF6F00'], // Tonos de naranja
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    };
    new Chart(bestProductsCtx, bestProductsConfig);

    const reviewsProductsCtx = document.getElementById('reviewsProducts').getContext('2d');
    const reviewsData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 21));
    const reviewsProductsConfig = {
        type: 'doughnut',
        data: {
            labels: ['1 estrella', '2 estrellas', '3 estrellas', '4 estrellas', '5 estrellas'],
            datasets: [{
                data: reviewsData,
                backgroundColor: ['#FF7043', '#FFB74D', '#FFD54F', '#FFCA28', '#FF9800'],
                borderColor: '#ffffff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    };
    new Chart(reviewsProductsCtx, reviewsProductsConfig);
});