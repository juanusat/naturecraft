const products = [
    { id: 1, image: './media/products/01_botella_bambu1.webp', name: 'Botella de Bambú', price: '15.00' },
    { id: 2, image: './media/products/02_boli_ecologico.webp', name: 'Bolígrafo Ecológico', price: '5.00' },
    { id: 3, image: './media/products/06_bolsa_yute.webp', name: 'Bolsa de yute', price: '8.00' },
    { id: 4, image: './media/products/13_medias.webp', name: 'Medias para el frio', price: '20.00' },
    { id: 5, image: './media/products/29_platos.webp', name: 'Platos de madera', price: '12.00' },
]

const generateStars = (rating) => {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += i <= rating
            ? '<i class="fa-solid fa-star" style="color: #ffcc00;"></i>'
            : '<i class="fa-regular fa-star" style="color: #ccc;"></i>'
    }
    return starsHTML
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-container').forEach(function(carrouselCont) {
        const carousel = carrouselCont.querySelector('.product-carousel')
        const prevBtn = carrouselCont.querySelector('.prev-btn')
        const nextBtn = carrouselCont.querySelector('.next-btn')
    
        products.forEach((product) => {
            const productCard = document.createElement('div')
            productCard.classList.add('card-product-item-reg', 'cursorp')
            productCard.innerHTML = `
                <div class="photo">
                    <picture>
                        <img src="${product.image}" alt="${product.name}">
                    </picture>
                </div>
                <div class="details">
                    <div class="rating">${generateStars(product.rating)}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="price">USD ${product.price}</div>
                </div>
            `
            carousel.appendChild(productCard)
        })
    
        let currentIndex = 0
        const productWidth = carrouselCont.querySelector('.card-product-item-reg').offsetWidth + 20
        const visibleProducts = 3
    
        const updateCarousel = () => {
            carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`
        }
    
        nextBtn.addEventListener('click', () => {
            if (currentIndex < products.length - visibleProducts) {
                currentIndex++
                updateCarousel()
            }
        })
    
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--
                updateCarousel()
            }
        })
    })
})