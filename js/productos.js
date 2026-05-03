const productos = [
    {
        id: 1,
        nombre: "POKEMON TCG: ASCENDED HEROES PREMIUM POSTER COLLECTION",
        categoria: "Cartas",
        destacado: true,
        descripcion: `Descubrí la Premium Poster Collection - Ascended Heroes de Pokémon TCG, diseñada para entrenadores y coleccionistas que buscan potenciar 
                su experiencia de juego y exhibición.Este set incluye una carta promocional foil de arte completo con Mega Lucario ex o Mega Gardevoir ex, 
                dos Pokémon de Mega Evolución con ataques potentes y gran HP que rompen los límites en batalla. Además, recibirás un poster doble faz 
                de 68.3 × 99 cm que destaca a estos impresionantes Pokémon y otros protagonistas de la expansión.`,
        precio: 12000,
        imagen: "assets/img/premiumPoster.png" // Esto es una imagen de prueba
    },
    {
        id: 2,
        nombre: "POKÉMON TCG: CELEBRATIONS COLLECTION (DRAGAPULT PRIME)",
        categoria: "Cartas",
        destacado: true,
        descripcion: `La Colección Celebraciones Dragapult Prime de la reconocida marca Pokémon, está lista para ser parte de tu colección. 
                Este producto es una unidad de venta que incluye una lámina promocional y una tarjeta de gran tamaño en papel de aluminio, 
                ambas con un diseño exclusivo que te encantará. Además, contiene dos paquetes de cuatro cartas Celebraciones y un paquete adicional de 
                Pokémon TCG Booster, todos foliados y en perfecto estado. Para mantener tus cartas seguras y organizadas, se incluye una carpeta de cuatro bolsillos. 
                Como un bono especial, recibirás una moneda conmemorativa de un aniversario. Este producto está dirigido a niños de 6 años en adelante, aunque 
                los coleccionistas de todas las edades lo disfrutarán. El idioma de todas las cartas y materiales es inglés, lo que lo hace ideal para practicar el 
                idioma mientras te diviertes. El modelo Dragapult Prime es uno de los más buscados, así que no pierdas la oportunidad de tenerlo en tus manos.`,
        precio: 12000,
        imagen: "assets/img/dragapult.png" // Esto es una imagen de prueba
    },
    {
        id: 3,
        nombre: "POKÉMON TCG: FIRST PARTNER ILLUSTRATION COLLECTION (SERIES 1)",
        categoria: "Cartas",
        destacado: true,
        descripcion: `Caja coleccionable ideal para fanáticos de Pokémon TCG, que reúne cartas promocionales con ilustraciones exclusivas y sobres para expandir tu 
                colección. Esta edición destaca por su presentación premium y contenido especial pensado tanto para jugadores como coleccionistas.`,
        precio: 12000,
        imagen: "assets/img/first.png" // Esto es una imagen de prueba
    },
    {
        id: 4,
        nombre: "POKÉMON TCG: MEGA EVOLUTION ELITE TRAINER BOX (MEGA LUCARIO)",
        categoria: "Cartas",
        destacado: true,
        descripcion: `¡Pokémon de todo tipo se juegan el todo por el todo para convertirse en Pokémon Megaevolución ex! Domina el aura poderosa de 
                    Mega Lucario ex, abraza el poder desbordante de Mega Gardevoir ex y alíate con más de estos poderosos Pokémon, que cuentan con ataques devastadores 
                    y una cantidad enorme de PS. Pero piensa bien tu estrategia: ¡más poder conlleva más riesgos! Elige a tus compañeros Pokémon y prepárate para las batallas 
                    más grandes que jamás hayas visto en la expansión Megaevolución de JCC Pokémon.`,
        precio: 12000,
        imagen: "assets/img/megaevolution.png" // Esto es una imagen de prueba
    },
    {
        id: 5,
        nombre: "POKÉMON TCG: MEGA EVOLUTION ASCENDED HEROES ELITE TRAINER BOX",
        categoria: "Cartas",
        descripcion: `Maravíllate con el asombroso potencial del ex Mega Dragonite, ¡liderando a un grupo de Pokémon estrella en la batalla! Los ex Pokémon 
                de Entrenador y los ex Pokémon Tera Estelares se unen a los ex Pokémon Megaevolución que regresan y a los recién descubiertos, 
                incluyendo algunos con ilustraciones especiales que muestran sus ataques más poderosos y audaces. ¡Celebra a las estrellas de Escarlata y Violeta 
                y el amanecer de la Megaevolución con la expansión Mega evolution: Ascended Heroes de JCC Pokémon!`,
        precio: 12000,
        imagen: "assets/img/mega.png" // Esto es una imagen de prueba
    },
    {
        id: 6,
        nombre: "POKEMON TCG: ELITE TRAINER BOX SURGING SPARKS",
        categoria: "Cartas",
        descripcion: `Maravíllate con el asombroso potencial del ex Mega Dragonite, ¡liderando a un grupo de Pokémon estrella en la batalla! Los ex Pokémon 
                de Entrenador y los ex Pokémon Tera Estelares se unen a los ex Pokémon Megaevolución que regresan y a los recién descubiertos, 
                incluyendo algunos con ilustraciones especiales que muestran sus ataques más poderosos y audaces. ¡Celebra a las estrellas de Escarlata y Violeta 
                y el amanecer de la Megaevolución con la expansión Mega evolution: Ascended Heroes de JCC Pokémon!`,
        precio: 12000,
        imagen: "assets/img/pika.png" // Esto es una imagen de prueba
    },
    {
        id: 7,
        nombre: "POKÉMON TCG: MEGA EVOLUTION PHANTASMAL FLAMES BOOSTER",
        categoria: "Cartas",
        descripcion: `El paquete de refuerzo de Pokémon TCG: Mega Evolución—Llamas Fantasmales incluye seis paquetes de refuerzo de Pokémon TCG: 
                Mega Evolución—Llamas Fantasmales. La expansión Mega Evolution—Phantasmal Flames cuenta con más de 120 cartas para coleccionar y 
                nuevas cartas de Pokémon Mega Evolution ex. Este blíster cuádruple, que incluye cartas holográficas y tiene una cantidad total de 60 cartas`,
        precio: 12000,
        imagen: "assets/img/phantasmal.png" // Esto es una imagen de prueba
    },
    {
        id: 8,
        nombre: "POKEMON TCG: SCARLET & VIOLET PRISMATIC EVOLUTION BOOSTER",
        categoria: "Cartas",
        descripcion: `El paquete de refuerzo Pokémon Scarlet & Violet Prismatic Evolutions incluye 6 paquetes de cartas de refuerzo selladas para el 
                juego de cartas coleccionables Pokémon. Cada paquete contiene cartas del conjunto Scarlet & Violet Prismatic Evolutions, que ofrece a los coleccionistas
                y jugadores la oportunidad de obtener cartas raras y poderosas para mejorar sus mazos. Este paquete proporciona una forma conveniente y emocionante 
                de expandir tu colección de cartas y sumergirte en el mundo de los JCC Pokémon.`,
        precio: 12000,
        imagen: "assets/img/scarlet.png" // Esto es una imagen de prueba
    },
    {
        id: 9,
        nombre: "ONE PIECE 25TH ANNIVERSARY",
        categoria: "Cartas",
        descripcion: `ONE PIECE 25TH ANNIVERSARY BOOSTER 🔥 El Anime 25th Collection (EB-02) llega 
                para celebrar los 25 años de una de las franquicias más legendarias: One Piece 🏴‍☠️`,
        precio: 12000,
        imagen: "assets/img/onepiece02.png" // Esto es una imagen de prueba
    },
    {
        id: 10,
        nombre: "CARRYING ON HIS WILL (OP-13) ONE PIECE",
        categoria: "Cartas",
        descripcion: "Carrying On His Will (OP-13) Booster de One Piece 🔥",
        precio: 12000,
        imagen: "assets/img/onepieceOP13.png"
    },
    {
        id: 11,
        nombre: "MAGIC THE GATHERING FINAL FANTASY: PLAY BOOSTER",
        categoria: "Cartas",
        descripcion: `¡Toda la saga FINAL FANTASY está aquí! Muy pronto, los jugadores se sumergirán en los mundos de las dieciséis entregas principales de la 
                querida serie de juegos de rol FINAL FANTASY. Lanzarán hechizos poderosos, lucharán junto a invocaciones clásicas y visitarán sus lugares favoritos a 
                lomos de un chocobo. Aquí tendrán un sinfín de material de los juegos para que narren su propia historia.`,
        precio: 12000,
        imagen: "assets/img/final.png" // Esto es una imagen de prueba
    },
    {
        id: 12,
        nombre: "MAGIC THE GATHERING EDGE OF ETERNITIES",
        categoria: "Cartas",
        descripcion: `El nuevo set espacial de Magic te invita a explorar el sistema Sothera, visitar planetas lejanos, desatar magia deslumbrante y enfrentarte a 
                facciones alienígenas. La colección destaca por su estética de ciencia ficción y por las cartas Japan Showcase, ilustradas por artistas invitados y 
                disponibles en foil y fracture foil, que reinterpretan clásicos tropos del sci-fi japonés. Además, el set trae vistas cósmicas, criaturas 
                interestelares y una ambientación totalmente nueva que lo convierte en una expansión ideal para jugadores y coleccionistas.`,
        precio: 12000,
        imagen: "assets/img/magicedge.png" // Esto es una imagen de prueba
    }
];