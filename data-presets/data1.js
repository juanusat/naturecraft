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
        {
            "id_product": 1,
            "title": "Botellas reutilizables de bambú",
            "vendor": "l_martinez",
            "price": 16.07,
            "rating": 3.1,
            "sales": 534,
            "photos": [
                "01_botella_bambu1.webp",
                "01_botella_bambu2.webp"
            ],
            "description": "Botella de cristal y bambú con funda hecho por nuestro minicultivo de bambu para proteger su extinción!  Es una botella de cuerpo de cristal con capacidad de 500 ml y tapón de seguridad de bambú con cuerda para su sujección. La botella tiene una bonita funda hecha de yute. Puedes imprimir tu marca en la funda o en el propio cristal. Botella reutilizable para el trabajo o gimnasio."
        },
        {
            "id_product": 2,
            "title": "Bolígrafos de papel reciclado",
            "vendor": "s_lopez",
            "price": 87.43,
            "rating": 3.2,
            "sales": 431,
            "photos": [
                "02_boli_ecologico.webp",
                "02_boli_ecologico2.webp"
            ],
            "description": "Este bolígrafo ecológico y sostenible está fabricado con papel reciclado y papel kraft, siendo amigo del medio ambiente. Su interior está hecho de papel de periódico reciclado, lo que lo convierte en una opción ideal para quienes buscan reducir su impacto ambiental. Además de ser un artículo de escritura económico, es perfecto para publicidad ecológica. Puedes personalizar el bolígrafo con hasta cuatro colores en tampografía, asegurando que tu marca esté presente en la vida de tus clientes y beneficiarios durante mucho tiempo. Escribe con tinta azul y disfruta de un producto publicitario efectivo, ideal para transmitir los datos de tu negocio de manera ecológica y duradera."
        },
        {
            "id_product": 3,
            "title": "Lámparas recicladas de botellas de vidrio",
            "vendor": "c_gomez",
            "price": 92.64,
            "rating": 2.2,
            "sales": 813,
            "photos": [
                "03_lampara_botellas.webp",
                "03_lampara_botellas2.webp"
            ],
            "description": "Estas lámparas colgantes y de mesa están hechas a mano utilizando botellas de vidrio recicladas, transformadas en piezas únicas de iluminación sostenible. Cada lámpara está cuidadosamente diseñada con elementos decorativos, como alambres artísticos y cuentas coloridas, que le dan un estilo original y atractivo. Perfectas para iluminar cualquier espacio de manera creativa, estas lámparas no solo brindan una luz suave y acogedora, sino que también aportan un toque rústico y colorido, ideal para hogares, oficinas y espacios que buscan un ambiente eco-friendly y elegante. Además, puedes elegir entre diferentes estilos y colores para personalizar el espacio a tu gusto."
        },
        {
            "id_product": 4,
            "title": "Jabón artesanal de avena y concha de nácar",
            "vendor": "c_gomez",
            "price": 23.31,
            "rating": 4.5,
            "sales": 284,
            "photos": [
                "04_jabon_artesanal.webp",
                "04_jabon_artesanal2.webp"
            ],
            "description": "Este jabón artesanal de avena y concha de nácar, especialmente formulado para el cuidado de la piel, humecta, suaviza y regenera, ofreciendo una experiencia de cuidado natural. Con un peso de 120g, está hecho con ingredientes como base de glicerina, avena, concha de nácar, manteca de karité y aceite esencial de naranja. Ideal para uso diario en rostro, cuerpo y manos, y especialmente recomendado para pieles sensibles, este jabón es calmante y antiinflamatorio, ayudando a reducir la irritación, atenuar manchas y homogeneizar el tono de la piel. La avena y la manteca de karité proporcionan hidratación profunda, dejando la piel suave y nutrida."
        },
        {
            "id_product": 5,
            "title": "Alfombras de tela reciclada",
            "vendor": "p_carrasco",
            "price": 82.15,
            "rating": 4.0,
            "sales": 289,
            "photos": [
                "05_alfombra_reciclada.webp",
                "05_alfombra_reciclada2.webp"
            ],
            "description": "Alfombra artesanal hecha a mano con retazos de tela reciclada, creando un diseño vibrante y único que aporta color y textura a cualquier espacio. Cada trozo de tela está cuidadosamente cosido, formando una superficie suave y esponjosa ideal para hogares que buscan un toque de sostenibilidad y estilo. Esta alfombra no solo embellece, sino que también reutiliza materiales, contribuyendo a la decoración eco-amigable y responsable."
        },
        {
            "id_product": 6,
            "title": "Bolsos de Yute Natural",
            "vendor": "s_lopez",
            "price": 61.71,
            "rating": 4.7,
            "sales": 103,
            "photos": [
                "06_bolsa_yute.webp",
                "06_bolsa_yute2.webp"
            ],
            "description": "Bolsa ecológica de yute, perfecta para el uso diario y para llevar productos medianos. Su diseño incluye un recubrimiento interior que aporta mayor resistencia y durabilidad, ideal para mantener tus productos seguros. Las asas de cordón acolchado de yute, de 80 cm de largo y 1.5 cm de ancho, ofrecen comodidad y facilidad al transportarla. Esta bolsa reutilizable es una alternativa sostenible y estilizada para tus compras y salidas casuales."
        },
        {
            "id_product": 7,
            "title": "Juguetes de madera natural",
            "vendor": "p_carrasco",
            "price": 55.69,
            "rating": 3.3,
            "sales": 691,
            "photos": [
                "07_juguetes_madera.webp",
                "07_juguetes_madera2.webp"
            ],
            "description": "Set de juguetes de madera ecológica, ideal para estimular la creatividad y el desarrollo de los niños de manera sostenible. Este conjunto incluye un avión, una cámara de juguete y cubos de construcción, todos fabricados con madera certificada y acabados suaves, sin tintes tóxicos. Diseñados para fomentar el juego imaginativo, estos juguetes clásicos aportan un toque natural y cálido al tiempo de juego, promoviendo habilidades motoras y cognitivas de forma segura y respetuosa con el medio ambiente."
        },
        {
            "id_product": 8,
            "title": "Macetas de fibra de coco",
            "vendor": "j_perez",
            "price": 21.33,
            "rating": 3.0,
            "sales": 631,
            "photos": [
                "08_macetas_fibra.webp",
                "08_macetas_fibra2.webp"
            ],
            "description": "Macetas biodegradables hechas de fibra de coco, ideales para un cultivo sostenible y respetuoso con el medio ambiente. Estas macetas naturales ofrecen una excelente retención de humedad y aireación, promoviendo un crecimiento saludable de las raíces. Son perfectas para sembrar directamente en el suelo, ya que se degradan de forma natural sin dejar residuos dañinos. Disponibles en varios tamaños y estilos, incluyendo modelos colgantes que aportan un toque decorativo y fresco a cualquier espacio, son la elección ideal para quienes buscan una jardinería eco-amigable y funcional."
        },
        {
            "id_product": 9,
            "title": "Libretas de papel reciclado",
            "vendor": "s_lopez",
            "price": 83.2,
            "rating": 3.2,
            "sales": 669,
            "photos": [
                "09_libreta_reciclada.webp",
                "09_libreta_reciclada2.webp"
            ],
            "description": "Libretas ecológicas fabricadas con papel reciclado, ideales para tomar notas, hacer bocetos o llevar un registro diario. Su cubierta de cartón reciclado ofrece durabilidad y un diseño minimalista que puede personalizarse según tu estilo o marca. Incluye un bolígrafo de papel reciclado y marcadores adhesivos de colores para ayudarte a organizar tus ideas. Perfecta para quienes buscan una opción sostenible y funcional en sus herramientas de papelería."
        },
        {
            "id_product": 10,
            "title": "Cepillos de dientes de bambú",
            "vendor": "j_perez",
            "price": 35.91,
            "rating": 3.7,
            "sales": 845,
            "photos": [
                "10_cepillo_bambu.webp",
                "10_cepillo_bambu2.webp"
            ],
            "description": "Imagina contribuir a un planeta más limpio con cada cepillado. Nuestros cepillos no solo ofrecen una limpieza profunda, sino que también te ayudan a reducir tu huella de carbono. Nuestros cepillos de dientes ecológicos con mango de bambú 100% biodegradable y cerdas suaves de origen vegetal. Diseñados para una higiene bucal completa mientras cuidas el medio ambiente. Los cepillos son livianos, cómodos de usar y resistentes a la humedad, lo que prolonga su durabilidad. Perfectos para quienes buscan una alternativa natural y sostenible a los cepillos de plástico desechables. Además, puedes personalizar el mango con grabados para darle un toque único."
        },
        {
            "id_product": 11,
            "title": "Velas naturales de soja",
            "vendor": "s_lopez",
            "price": 24.1,
            "rating": 2.2,
            "sales": 709,
            "photos": [
                "11_velas_naturales.webp"
            ],
            "description": "Velas hechas con cera de soja y mechas de algodón, libres de químicos y con una fragancia suave y natural."
        },
        {
            "id_product": 12,
            "title": "Pulseras de hilo de Algodón Orgánico",
            "vendor": "c_gomez",
            "price": 19.61,
            "rating": 3.0,
            "sales": 37,
            "photos": [
                "12_pulsera.webp",
                "12_pulsera2.webp"
            ],
            "description": "Pulsera de hilo Rakhi con cuentas doradas y Tika / Rakhri de cuentas Mauli hecho a mano / Pulsera de yoga india Hilo teñido a mano de algodón orgánico Kalava. Son suaves y cómodas de llevar, y su diseño colorido las convierte en el accesorio perfecto para un estilo casual y sostenible. Estas pulseras no solo embellecen, sino que también promueven el uso de materiales naturales y sostenibles."
        },
        {
            "id_product": 13,
            "title": "Medias navideñas con tela reciclada",
            "vendor": "j_perez",
            "price": 11.66,
            "rating": 3.0,
            "sales": 431,
            "photos": [
                "13_medias.webp",
                "13_medias2.webp"
            ],
            "description": "Medias navideñas personalizadas con saludos festivos: tejido reciclabe de cable festivo con nombre personalizado: regalo familiar para rellenar medias"
        },
        {
            "id_product": 14,
            "title": "Portavasos de corcho natural",
            "vendor": "l_martinez",
            "price": 57.78,
            "rating": 2.7,
            "sales": 131,
            "photos": [
                "14_portavasos.webp",
                "14_portavasos2.webp"
            ],
            "description": "Conjunto de portavasos hechos de corcho natural, ideales para proteger superficies y aportar un toque rústico a la mesa. El corcho es un material renovable, ligero y resistente al agua, lo que lo convierte en una opción sostenible y práctica. Perfectos para el hogar o la oficina, estos portavasos son fáciles de limpiar y almacenar."
        },
        {
            "id_product": 15,
            "title": "Esponja de lufa natural para baño",
            "vendor": "s_lopez",
            "price": 26.09,
            "rating": 4.4,
            "sales": 466,
            "photos": [
                "15_esponjas_lufa.webp",
                "15_esponjas_lufa2.webp"
            ],
            "description": "Esponja biodegradable hecha de lufa natural, ideal para exfoliar y limpiar la piel de forma suave. Esta esponja es perfecta para el cuidado personal y, al ser un producto vegetal, es compostable al final de su vida útil. Proporciona una exfoliación suave y ayuda a eliminar las células muertas, dejando la piel fresca y renovada."
        },
        {
            "id_product": 16,
            "title": "Cuadernos de Papel de Piedra",
            "vendor": "c_gomez",
            "price": 88.29,
            "rating": 2.5,
            "sales": 660,
            "photos": [
                "16_cuaderno_piedra.webp",
                "16_cuaderno_piedra2.webp"
            ],
            "description": "Cuaderno hecho de papel de piedra, un material innovador que no requiere árboles ni agua para su fabricación. Resistente al agua y a las roturas, este cuaderno es perfecto para bocetos, notas y cualquier tipo de escritura. Su textura única y eco-amigable hace de este cuaderno una elección ideal para quienes buscan una opción sostenible y duradera."
        },
        {
            "id_product": 17,
            "title": "Mochila de algodón orgánico",
            "vendor": "p_carrasco",
            "price": 97.4,
            "rating": 2.3,
            "sales": 597,
            "photos": [
                "17_mochila_organica.webp",
                "17_mochila_organica2.webp"
            ],
            "description": "Mochila ligera y ecológica hecha de algodón orgánico, perfecta para llevar tus pertenencias de forma cómoda y sostenible. Su diseño minimalista y resistente es ideal para actividades diarias como ir a clases, hacer mandados o salir de paseo. Con compartimentos internos, esta mochila es práctica y ayuda a reducir el uso de materiales sintéticos."
        },
        {
            "id_product": 18,
            "title": "Muebles de palets reciclados",
            "vendor": "a_torres",
            "price": 38.6,
            "rating": 2.2,
            "sales": 193,
            "photos": [
                "18_muebles.webp",
                "18_muebles2.webp"
            ],
            "description": "Muebles funcionales y decorativos hechos a mano con palets reciclados, ideales para interiores o exteriores. Estos muebles robustos y sostenibles aportan un estilo rústico e industrial, al tiempo que promueven la reutilización de materiales. Cada pieza es única, con acabados personalizados que se adaptan a cualquier espacio."
        },
        {
            "id_product": 19,
            "title": "Ropa de retazos de tela",
            "vendor": "j_perez",
            "price": 78.43,
            "rating": 3.2,
            "sales": 139,
            "photos": [
                "19_ropa_tela_reciclada.webp",
                "19_ropa_tela_reciclada2.webp"
            ],
            "description": "Prendas confeccionadas a partir de retazos de tela reciclada, promoviendo la moda sostenible y la reducción de residuos. Cada prenda es única, con un estilo colorido y original, ideal para quienes buscan vestir con consciencia ambiental. Esta ropa es cómoda, duradera y perfecta para un look casual y eco-amigable."
        },
        {
            "id_product": 20,
            "title": "Cajas Organizadoras de cartón reciclado",
            "vendor": "p_carrasco",
            "price": 37.01,
            "rating": 3.3,
            "sales": 617,
            "photos": [
                "20_cajas.webp",
                "20_cajas2.webp"
            ],
            "description": "Conjunto de cajas de cartón reciclado, perfectas para organizar y almacenar en casa o en la oficina. Disponibles en diferentes tamaños, estas cajas son robustas y duraderas, ideales para guardar documentos, ropa, juguetes y más. Su diseño simple y reciclable las convierte en una opción funcional y sostenible para mantener el orden."
        },
        {
            "id_product": 21,
            "title": "Bolsa reutilizable de malla natural",
            "vendor": "p_carrasco",
            "price": 63.95,
            "rating": 3.4,
            "sales": 750,
            "photos": [
                "21_bolsa_malla.webp",
                "21_bolsa_malla2.webp"
            ],
            "description": "Bolsa de malla de algodón orgánico, perfecta para transportar frutas, verduras y otros productos frescos. Su diseño ligero y resistente permite ver el contenido, facilitando las compras y eliminando la necesidad de usar bolsas de plástico. Ideal para mercados o supermercados, esta bolsa se convierte en un accesorio sostenible y estilizado."
        },
        {
            "id_product": 22,
            "title": "Tarros de Vidrio Decorativos con Tapa de Bambú",
            "vendor": "l_martinez",
            "price": 34.36,
            "rating": 2.7,
            "sales": 611,
            "photos": [
                "22_frascos_vidrio.webp"
            ],
            "description": "Tarros de vidrio reutilizables con tapa de bambú, ideales para almacenar alimentos o como elementos decorativos. Estos tarros herméticos preservan la frescura de los productos y aportan un toque natural a la cocina. Perfectos para ingredientes secos como granos, especias o café, son una opción práctica y sostenible."
        },
        {
            "id_product": 23,
            "title": "Estuche de Tela Reutilizable",
            "vendor": "s_lopez",
            "price": 84.16,
            "rating": 3.9,
            "sales": 613,
            "photos": [
                "23_estuche.webp"
            ],
            "description": "Estuche versátil y ecológico hecho de tela reciclada, ideal para almacenar lápices, maquillaje o pequeños objetos personales. Su diseño compacto y resistente lo convierte en un accesorio útil para el día a día, y su fabricación sostenible ayuda a reducir el impacto ambiental. Disponible en varios colores y estilos, es una opción práctica y eco-amigable."
        },
        {
            "id_product": 24,
            "title": "Bolsas de Té reutilizables de algodón",
            "vendor": "j_perez",
            "price": 15.81,
            "rating": 2.9,
            "sales": 104,
            "photos": [
                "24_bolsa_te.webp",
                "24_bolsa_te2.webp"
            ],
            "description": "Bolsas de té de algodón orgánico, reutilizables y fáciles de lavar. Ideales para preparar infusiones sin generar residuos plásticos. Estas bolsas pueden llenarse con tus hierbas favoritas y se cierran fácilmente para preparar té de manera sostenible. Son perfectas para los amantes del té que buscan una alternativa ecológica a las bolsitas de un solo uso."
        },
        {
            "id_product": 25,
            "title": "Candelabros de metal reciclado",
            "vendor": "l_martinez",
            "price": 78.05,
            "rating": 2.9,
            "sales": 796,
            "photos": [
                "25_candelabros.webp",
                "25_candelabros2.webp"
            ],
            "description": "Candelabros decorativos hechos a partir de metal reciclado, con un diseño único que combina elegancia y sostenibilidad. Estos candelabros son ideales para iluminar cenas y eventos especiales, creando un ambiente cálido y eco-friendly. Cada pieza es única y aporta un toque rústico y moderno a cualquier espacio."
        },
        {
            "id_product": 26,
            "title": "Alfombrilla de corcho para yoga",
            "vendor": "j_perez",
            "price": 17.45,
            "rating": 3.7,
            "sales": 363,
            "photos": [
                "26_alfombra.webp"
            ],
            "description": "Alfombrilla de yoga hecha de corcho natural, que proporciona una superficie antideslizante y cómoda para la práctica de yoga o pilates. El corcho es un material sostenible y antimicrobiano, lo que lo convierte en la opción perfecta para mantener la higiene durante las sesiones de ejercicio. Su diseño ligero y resistente es ideal para llevarla a cualquier lugar."
        },
        {
            "id_product": 27,
            "title": "Difusores de Aceites Esenciales de Cerámica",
            "vendor": "l_martinez",
            "price": 52.16,
            "rating": 2.2,
            "sales": 647,
            "photos": [
                "27_difusores_naturales.webp",
                "27_difusores_naturales2.webp"
            ],
            "description": "Difusores de cerámica artesanal para aceites esenciales, ideales para crear un ambiente relajante en el hogar. Estos difusores permiten que el aroma de los aceites se distribuya suavemente en la habitación, promoviendo el bienestar y la relajación. Su diseño sencillo y natural combina con cualquier decoración, siendo una opción sostenible para quienes buscan el equilibrio entre salud y estilo."
        },
        {
            "id_product": 28,
            "title": "Almohadas de Tela Reciclada y Fibra de Coco",
            "vendor": "j_perez",
            "price": 67.61,
            "rating": 2.5,
            "sales": 772,
            "photos": [
                "28_almohadas.webp",
                "28_almohadas2.webp"
            ],
            "description": "Almohadas ecológicas hechas de tela reciclada y rellenas de fibra de coco, proporcionando una experiencia de descanso natural y libre de químicos. Su diseño ergonómico y suave es perfecto para el hogar, ofreciendo una opción cómoda y sostenible para mejorar el sueño."
        },
        {
            "id_product": 29,
            "title": "Platos de hoja de areca biodegradables",
            "vendor": "c_gomez",
            "price": 38.17,
            "rating": 2.2,
            "sales": 180,
            "photos": [
                "29_platos.webp",
                "29_platos2.webp"
            ],
            "description": "Platos desechables hechos de hojas de areca, ideales para eventos y celebraciones eco-friendly. Estos platos son resistentes y completamente biodegradables, proporcionando una alternativa sostenible a los platos de plástico o de papel con recubrimiento sintético."
        },
        {
            "id_product": 30,
            "title": "Cucharas de madera natural para cocina",
            "vendor": "p_carrasco",
            "price": 34.38,
            "rating": 3.2,
            "sales": 687,
            "photos": [
                "30_cucharas.webp",
                "30_cucharas2.webp"
            ],
            "description": "Set de cucharas de madera natural, sin recubrimientos tóxicos y con un diseño sencillo y funcional. Ideales para cocinar y servir, estas cucharas ecológicas son resistentes al calor y no rayan superficies. Son una alternativa duradera y sostenible a los utensilios de plástico."
        },
        {
            "id_product": 31,
            "title": "Reloj de pared de bambú",
            "vendor": "l_martinez",
            "price": 59.26,
            "rating": 4.4,
            "sales": 139,
            "photos": [
                "31_reloj.webp"
            ],
            "description": "Reloj de pared hecho de bambú natural, con un diseño minimalista que se adapta a cualquier estilo de decoración. Este reloj es una opción eco-amigable que combina funcionalidad y estética, utilizando bambú como una alternativa sostenible a los materiales convencionales."
        },
        {
            "id_product": 32,
            "title": "Pendientes de madera reciclada",
            "vendor": "s_lopez",
            "price": 61.16,
            "rating": 2.3,
            "sales": 838,
            "photos": [
                "32_pendientes_madera.webp",
                "32_pendientes_madera2.webp"
            ],
            "description": "Pendientes ligeros y elegantes hechos de madera reciclada, con diseños geométricos que destacan por su simplicidad y estilo natural. Cada par es único y combina perfectamente con un look casual o formal, ofreciendo una alternativa consciente a la joyería convencional."
        },
        {
            "id_product": 33,
            "title": "Anillos de papel reciclado",
            "vendor": "s_lopez",
            "price": 56.72,
            "rating": 4.9,
            "sales": 142,
            "photos": [
                "33_anillos.webp",
                "33_anillos2.webp"
            ],
            "description": "Anillos originales hechos de papel reciclado prensado, protegidos con un barniz ecológico para garantizar durabilidad. Estos anillos son ligeros y tienen un aspecto único y colorido, perfectos para quienes buscan una opción innovadora y sostenible en joyería."
        },
        {
            "id_product": 34,
            "title": "Broches de Conchas Marinas",
            "vendor": "a_torres",
            "price": 86.08,
            "rating": 4.3,
            "sales": 596,
            "photos": [
                "34_broches.webp"
            ],
            "description": "Broches hechos con conchas recolectadas de manera responsable en la costa, ideales para agregar un toque marino a cualquier atuendo. Cada broche es único, con el encanto natural de las conchas y un diseño artesanal que celebra la belleza del océano de forma sostenible."
        },
        {
            "id_product": 35,
            "title": "Pulseras de cuentas de madera y piedra",
            "vendor": "p_carrasco",
            "price": 79.42,
            "rating": 2.4,
            "sales": 574,
            "photos": [
                "35_pulsera_madera.webp",
                "35_pulsera_madera2.webp"
            ],
            "description": "Pulseras hechas a mano con cuentas de madera reciclada y piedras naturales, perfectas para un estilo relajado y natural. Cada pulsera es única y refleja la belleza de los materiales orgánicos, siendo una opción ideal para quienes buscan joyería amigable con el medio ambiente."
        },
        {
            "id_product": 36,
            "title": "Funda de teléfono de bioplástico",
            "vendor": "s_lopez",
            "price": 80.67,
            "rating": 4.1,
            "sales": 708,
            "photos": [
                "36_funda.webp"
            ],
            "description": "Funda para teléfono hecha de bioplástico compostable, diseñado para proteger tu dispositivo mientras cuidas el medio ambiente. Disponible en varios colores, es resistente a golpes y arañazos, y al final de su vida útil se puede compostar. Ideal para quienes buscan una opción ecológica en accesorios de tecnología."
        },
        {
            "id_product": 37,
            "title": "Llaveros de tapas de botellas",
            "vendor": "c_gomez",
            "price": 87.39,
            "rating": 2.6,
            "sales": 285,
            "photos": [
                "37_llaveros.webp",
                "37_llaveros2.webp"
            ],
            "description": "Llaveros divertidos y personalizados utilizando tapas de botellas recicladas y materiales como pintura, pegatinas y cuerda. Los niños pueden decorar las tapas a su gusto y agregarles un anillo de metal para convertirlas en llaveros únicos y ecológicos."
        },
        {
            "id_product": 38,
            "title": "Separadores de Libros con Cartón Reciclado",
            "vendor": "j_perez",
            "price": 54.72,
            "rating": 4.3,
            "sales": 655,
            "photos": [
                "38_separador.webp"
            ],
            "description": "Separadores de libros hechos a mano con cartón reciclado, decorados con dibujos, pinturas o papel decorativo. Son simples de hacer y útiles para lectores. Los niños pueden agregar cintas o pequeñas borlas para darle un toque especial y personalizado."
        },
        {
            "id_product": 39,
            "title": "Imanes de Nevera con Piedras Naturales",
            "vendor": "s_lopez",
            "price": 46.04,
            "rating": 2.6,
            "sales": 436,
            "photos": [
                "39_imanes.webp",
                "39_imanes2.webp"
            ],
            "description": "Imanes de nevera hechos con piedras recogidas y decoradas con pintura o rotuladores permanentes. Los niños pueden pegar imanes pequeños en la parte posterior y crear diseños divertidos o inspiradores. Son un regalo sencillo, bonito y respetuoso con el medio ambiente."
        },
        {
            "id_product": 40,
            "title": "Portarretratos de palitos de madera",
            "vendor": "s_lopez",
            "price": 45.64,
            "rating": 3.1,
            "sales": 380,
            "photos": [
                "40_portaretrato.webp"
            ],
            "description": "Portarretratos hechos con palitos de madera reciclados (como los de helado), pegados y decorados con pintura o cintas. Los niños pueden agregar detalles personales como botones o flores secas y venderlos como decoraciones para fotos. Son un proyecto simple y creativo que fomenta el reciclaje."
        },
        {
            "id_product": 41,
            "title": "Libretas personalizadas con portadas pintadas a mano",
            "vendor": "a_torres",
            "price": 67.23,
            "rating": 3.5,
            "sales": 36,
            "photos": [
                "41_libreta_pintada_mano.webp",
                "41_libreta_pintada_mano2.webp"
            ],
            "description": "Libretas con portadas de cartón reciclado, cada una pintada o ilustrada a mano, haciendo que cada pieza sea única. Los estudiantes pueden experimentar con estilos y técnicas artísticas para ofrecer una gama de diseños personalizados, perfectos para quienes buscan un cuaderno especial para sus notas o bocetos."
        },
        {
            "id_product": 42,
            "title": "Cuadros y mini lienzos en papel reciclado",
            "vendor": "s_lopez",
            "price": 39.4,
            "rating": 3.6,
            "sales": 762,
            "photos": [
                "42_cuadro.webp",
                "42_cuadro2.webp"
            ],
            "description": "Pequeñas obras de arte pintadas sobre papel reciclado o lienzos hechos a mano, ideales para la decoración. Los estudiantes pueden explorar distintos estilos y temáticas, desde paisajes hasta abstractos, y vender estas piezas como obras de arte accesibles y eco-amigables."
        },
        {
            "id_product": 43,
            "title": "Marcapáginas artísticos de acuarela",
            "vendor": "j_perez",
            "price": 95.6,
            "rating": 3.6,
            "sales": 170,
            "photos": [
                "43_marcapasos_acuarela.webp",
                "43_marcapasos_acuarela2.webp"
            ],
            "description": "Marcapáginas hechos de papel resistente y decorados con acuarelas o tinta, cada uno con un diseño artístico original. Los estudiantes pueden crear colecciones de marcapáginas inspirados en temas como la naturaleza, el arte abstracto o patrones geométricos, siendo una opción ideal para regalar."
        },
        {
            "id_product": 44,
            "title": "Tazas con ilustraciones grabadas",
            "vendor": "l_martinez",
            "price": 91.53,
            "rating": 2.8,
            "sales": 200,
            "photos": [
                "44_tazas_diseño.webp",
                "44_tazas_diseño2.webp"
            ],
            "description": "Tazas de cerámica decoradas con ilustraciones grabadas o pintadas a mano utilizando pinturas permanentes para cerámica. Cada taza puede tener un diseño único, como patrones, frases motivadoras o dibujos personalizados, creando piezas de arte funcionales que se pueden usar diariamente."
        },
        {
            "id_product": 45,
            "title": "Esculturas en miniatura de arcilla o resina ecológica",
            "vendor": "l_martinez",
            "price": 20.14,
            "rating": 4.6,
            "sales": 254,
            "photos": [
                "45_escultura.webp",
                "45_escultura2.webp"
            ],
            "description": "Pequeñas esculturas decorativas hechas a mano en arcilla o resina ecológica, como figuritas, animales o formas abstractas. Estas esculturas son ideales para decoración y permiten a los estudiantes explorar su creatividad en 3D, ofreciendo piezas exclusivas que combinan arte y sostenibilidad."
        },
        {
            "id_product": 46,
            "title": "Collares y pendientes de cerámica",
            "vendor": "j_perez",
            "price": 44.88,
            "rating": 4.6,
            "sales": 103,
            "photos": [
                "46_collares.webp",
                "46_collares2.webp"
            ],
            "description": "Joyería artesanal hecha de cerámica o arcilla polimérica, donde cada pieza está moldeada y pintada a mano. Los estudiantes pueden crear joyas únicas y ligeras, como collares y pendientes con formas y colores originales, perfectas para quienes buscan accesorios artísticos y eco-friendly."
        },
        {
            "id_product": 47,
            "title": "Postales de ediciones limitadas",
            "vendor": "j_perez",
            "price": 61.07,
            "rating": 3.3,
            "sales": 80,
            "photos": [
                "47_postales.webp",
                "47_postales2.webp"
            ],
            "description": "Postales impresas en papel reciclado, con ilustraciones originales de los estudiantes de arte. Cada postal puede venir firmada y numerada, convirtiéndola en una pequeña obra de colección. Los temas pueden variar desde paisajes, retratos hasta ilustraciones abstractas."
        },
        {
            "id_product": 48,
            "title": "Bolsas de tela con serigrafía artesanal",
            "vendor": "s_lopez",
            "price": 15.64,
            "rating": 4.8,
            "sales": 255,
            "photos": [
                "48_bolsas_serigrafia.webp",
                "48_bolsas_serigrafia2.webp"
            ],
            "description": "Bolsas de algodón decoradas con serigrafía artesanal, donde los estudiantes pueden estampar sus propios diseños en series limitadas. Esta técnica permite que cada bolsa tenga una impresión de alta calidad y es ideal para producir obras únicas y funcionales, como obras de arte llevables."
        },
        {
            "id_product": 49,
            "title": "Láminas de arte en papel de semilla",
            "vendor": "j_perez",
            "price": 55.94,
            "rating": 2.5,
            "sales": 680,
            "photos": [
                "49_laminas.webp",
                "49_laminas2.webp"
            ],
            "description": "Láminas de arte que, al estar hechas en papel de semilla, se pueden plantar una vez que el comprador ya no quiera colgarlas. Los estudiantes pueden crear ilustraciones en acuarela o tinta y vender estas obras que, además de decorar, promueven el crecimiento de plantas."
        },
        {
            "id_product": 50,
            "title": "Atrapasueño con materiales reciclados",
            "vendor": "j_perez",
            "price": 14.9,
            "rating": 2.2,
            "sales": 423,
            "photos": [
                "50_atrapasueños.webp"
            ],
            "description": "Atrapasueño hecho a mano con aros de metal reciclado, hilos de colores y cuentas reutilizadas. Los estudiantes pueden personalizar los atrapasueños con plumas, conchas o botones para crear una pieza decorativa única y sostenible, ideal para quienes buscan un toque artesanal en su hogar."
        }
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