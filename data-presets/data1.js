const bd_data = {
    vendors: [
        {
            full_name: "Pedro Carrasco",
            organization: "Colegio 2",
            user_vendor: "p_carrasco",
            email: "pcarrasco@gmail.com",
            key_pass: "1234",
        },
        {
            full_name: "Ana Torres",
            organization: "Anunciata",
            user_vendor: "a_torres",
            email: "atorres@gmail.com",
            key_pass: "1234",
        },
        {
            full_name: "Jorge Pérez",
            organization: "Jorge Bassadre",
            user_vendor: "j_perez",
            email: "jperez@gmail.com",
            key_pass: "1234",
        },
        {
            full_name: "Lucía Martínez",
            organization: "Rosario",
            user_vendor: "l_martinez",
            email: "lmartinez@gmail.com",
            key_pass: "1234",
        },
        {
            full_name: "Carlos Gómez",
            organization: "María Reyna",
            user_vendor: "c_gomez",
            email: "cgomez@gmail.com",
            key_pass: "1234",
        },
        {
            full_name: "Sofia López",
            organization: "Santa Magdalena Sofía",
            user_vendor: "s_lopez",
            email: "slopez@gmail.com",
            key_pass: "1234",
        }
    ],
    users: [
        {
            f_name: "Luis",
            l_name: "Rodriguez",
            key_pass: "1234",
            email: "lrod@gmail.com",
            country: "Peru",
            language: "ES",
            currency: "USD",
            date_register: "2024-05-20 14:15"
        },
        {
            f_name: "María",
            l_name: "Fernández",
            key_pass: "1234",
            email: "mfernandez@gmail.com",
            country: "Peru",
            language: "ES",
            currency: "USD",
            date_register: "2024-05-20 14:20"
        },
        {
            f_name: "Juan",
            l_name: "García",
            key_pass: "1234",
            email: "jgarcia@gmail.com",
            country: "Peru",
            language: "ES",
            currency: "USD",
            date_register: "2024-05-20 14:25"
        },
        {
            f_name: "Isabella",
            l_name: "Martínez",
            key_pass: "1234",
            email: "imartinez@gmail.com",
            country: "Peru",
            language: "ES",
            currency: "USD",
            date_register: "2024-05-20 14:30"
        }
    ],
    products: [
        { id_product: 1, title: "Bolsas reutilizables", vendor: "a_torres", price: 10.50, rating: 4.5, sales: 42, photo: ''},
        { id_product: 2, title: "Juguetes de cartón", vendor: "j_perez", price: 5.75, rating: 4.0, sales: 29, photo: ''},
        { id_product: 3, title: "Lámparas de botellas recicladas", vendor: "l_martinez", price: 15.20, rating: 4.8, sales: 72, photo: ''},
        { id_product: 4, title: "Joyas de papel reciclado", vendor: "c_gomez", price: 7.30, rating: 4.7, sales: 118, photo: ''},
        { id_product: 5, title: "Cuadernos de papel reciclado", vendor: "s_lopez", price: 6.90, rating: 4.6, sales: 89, photo: ''},
        { id_product: 6, title: "Bolsos de tela reciclada", vendor: "p_carrasco", price: 12.00, rating: 4.4, sales: 35, photo: ''},
        { id_product: 7, title: "Muebles de palets reciclados", vendor: "p_carrasco", price: 55.00, rating: 4.9, sales: 136, photo: ''},
        { id_product: 8, title: "Cajas de madera reciclada", vendor: "s_lopez", price: 20.50, rating: 4.3, sales: 57, photo: ''},
        { id_product: 9, title: "Esculturas de plástico reciclado", vendor: "j_perez", price: 30.80, rating: 4.6, sales: 84, photo: ''},
        { id_product: 10, title: "Tarros de vidrio decorativos", vendor: "l_martinez", price: 9.00, rating: 4.5, sales: 66, photo: ''},
        { id_product: 11, title: "Cactus de papel maché", vendor: "a_torres", price: 8.00, rating: 4.2, sales: 53, photo: ''},
        { id_product: 12, title: "Ropa de retazos", vendor: "c_gomez", price: 20.00, rating: 4.7, sales: 75, photo: ''},
        { id_product: 13, title: "Cuencos de madera reciclada", vendor: "s_lopez", price: 18.00, rating: 4.8, sales: 101, photo: ''},
        { id_product: 14, title: "Almohadas de tela reciclada", vendor: "j_perez", price: 25.00, rating: 4.9, sales: 80, photo: ''},
        { id_product: 15, title: "Mosaicos de cerámica reciclada", vendor: "l_martinez", price: 22.00, rating: 4.1, sales: 48, photo: ''},
        { id_product: 16, title: "Candelabros de latas recicladas", vendor: "p_carrasco", price: 11.00, rating: 4.6, sales: 73, photo: ''},
        { id_product: 17, title: "Coronas de papel reciclado", vendor: "a_torres", price: 13.00, rating: 4.3, sales: 94, photo: ''},
        { id_product: 18, title: "Móviles de cartón reciclado", vendor: "c_gomez", price: 14.00, rating: 4.5, sales: 25, photo: ''},
        { id_product: 19, title: "Dibujos en lienzo reciclado", vendor: "s_lopez", price: 17.00, rating: 4.4, sales: 88, photo: ''},
        { id_product: 20, title: "Accesorios de tela reciclada", vendor: "j_perez", price: 5.50, rating: 4.0, sales: 65, photo: ''},
        { id_product: 21, title: "Diademas de papel reciclado", vendor: "l_martinez", price: 3.60, rating: 4.2, sales: 19, photo: ''},
        { id_product: 22, title: "Objetos decorativos de madera", vendor: "p_carrasco", price: 12.80, rating: 4.7, sales: 124, photo: ''},
        { id_product: 23, title: "Portavelas de metal reciclado", vendor: "a_torres", price: 16.00, rating: 4.6, sales: 30, photo: ''},
        { id_product: 24, title: "Calendarios de papel reciclado", vendor: "c_gomez", price: 4.50, rating: 4.1, sales: 15, photo: ''},
        { id_product: 25, title: "Focos de vidrio reutilizados", vendor: "s_lopez", price: 9.90, rating: 4.8, sales: 110, photo: ''},
        { id_product: 26, title: "Jardineras de botellas", vendor: "j_perez", price: 19.00, rating: 4.3, sales: 27, photo: ''},
        { id_product: 27, title: "Cestas de papel reciclado", vendor: "l_martinez", price: 10.50, rating: 4.5, sales: 39, photo: ''},
        { id_product: 28, title: "Salidas de mesa de tela", vendor: "p_carrasco", price: 15.50, rating: 4.4, sales: 65, photo: ''},
        { id_product: 29, title: "Monederos de cartón", vendor: "a_torres", price: 6.20, rating: 4.0, sales: 82, photo: ''},
        { id_product: 30, title: "Títeres de calcetines reciclados", vendor: "c_gomez", price: 7.80, rating: 4.2, sales: 56, photo: ''},
        { id_product: 31, title: "Espejos de tapones de plástico", vendor: "s_lopez", price: 12.00, rating: 4.6, sales: 21, photo: ''},
        { id_product: 32, title: "Cu todas de papel de periódico", vendor: "j_perez", price: 8.40, rating: 4.7, sales: 38, photo: ''},
    ],
    chats: [
        {
            from: "lrod@gmail.com",
            to: "pcarrasco@gmail.com",
            messages: [
                ['user', '2024-05-26 10:07', 'Hola, ¿estará publicando más modelos de los cuadernos?'],
                ['vendor', '2024-05-26 10:10', 'Hola Luis, sí, estamos trabajando en nuevos modelos que pronto estarán disponibles.'],
                ['user', '2024-05-26 10:15', '¡Genial! Me encantaría verlos. ¿Tienes idea de cuándo?'],
                ['vendor', '2024-05-26 10:20', 'Creo que para la próxima semana ya los tendremos listos.'],
                ['user', '2024-05-26 10:25', 'Perfecto, estaré atento. ¿Habrá algún descuento para compras al por mayor?'],
                ['vendor', '2024-05-26 10:30', 'Sí, ofreceremos un 10% de descuento para pedidos de más de 10 unidades.'],
                ['user', '2024-05-26 10:35', 'Eso suena bien. Gracias por la información.']
            ]
        },
        {
            from: "mfernandez@gmail.com",
            to: "j_perez@gmail.com",
            messages: [
                ['user', '2024-05-27 11:00', 'Hola Jorge, me gustaron los juguetes de cartón que vi en tu tienda.'],
                ['vendor', '2024-05-27 11:05', 'Hola María, gracias. Te cuento que tengo más modelos en camino.'],
                ['user', '2024-05-27 11:10', 'Me encantaría verlos, estaré atenta.'],
                ['vendor', '2024-05-27 11:15', 'Los publicaré en mi tienda en cuanto lleguen.'],
                ['user', '2024-05-27 11:20', '¿Tienes alguna idea de cuándo estarán disponibles?'],
                ['vendor', '2024-05-27 11:25', 'Deberían estar listos para finales de esta semana.']
            ]
        },
        {
            from: "jgarcia@gmail.com",
            to: "l_martinez@gmail.com",
            messages: [
                ['user', '2024-05-28 09:15', 'Lucía, he visto tus lámparas de botellas recicladas. ¡Son increíbles!'],
                ['vendor', '2024-05-28 09:20', 'Gracias Juan, trabajo con mucho cuidado en cada pieza.'],
                ['user', '2024-05-28 09:25', 'Me gustaría saber si puedes hacer un pedido personalizado.'],
                ['vendor', '2024-05-28 09:30', 'Claro, puedo hacer diseños personalizados. ¿Tienes algo específico en mente?'],
                ['user', '2024-05-28 09:35', 'Sí, me gustaría una lámpara con colores específicos.'],
                ['vendor', '2024-05-28 09:40', 'Perfecto, envíame los detalles y te haré un boceto.']
            ]
        },
        {
            from: "imartinez@gmail.com",
            to: "c_gomez@gmail.com",
            messages: [
                ['user', '2024-05-29 14:00', 'Hola Carlos, vi tus joyas de papel reciclado, ¿haces envíos?'],
                ['vendor', '2024-05-29 14:05', 'Hola Isabella, sí, hago envíos hasta la puerta de tu casa.'],
                ['user', '2024-05-29 14:10', 'Perfecto, quiero realizar un pedido.'],
                ['vendor', '2024-05-29 14:15', 'Genial, ¿qué piezas te interesan?'],
                ['user', '2024-05-29 14:20', 'Me gustaría un collar y unos pendientes.'],
                ['vendor', '2024-05-29 14:25', 'Te haré un paquete especial con un descuento.']
            ]
        }
    ]
}

export default bd_data;