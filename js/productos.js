const productos = [
    {
        nombre: "POKEMON ASCENDED HEROES PREMIUM POSTER COLLECTION",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `Descubrí la Premium Poster Collection - Ascended Heroes de Pokémon TCG, diseñada para entrenadores y coleccionistas que buscan potenciar 
                su experiencia de juego y exhibición.Este set incluye una carta promocional foil de arte completo con Mega Lucario ex o Mega Gardevoir ex, 
                dos Pokémon de Mega Evolución con ataques potentes y gran HP que rompen los límites en batalla. Además, recibirás un poster doble faz 
                de 68.3 × 99 cm que destaca a estos impresionantes Pokémon y otros protagonistas de la expansión.`,
        precio: 12000,
        imagen: "assets/img/premiumPoster.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKÉMON CELEBRATIONS COLLECTION (DRAGAPULT PRIME)",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `La Colección Celebraciones Dragapult Prime de la reconocida marca Pokémon, está lista para ser parte de tu colección. 
                Este producto es una unidad de venta que incluye una lámina promocional y una tarjeta de gran tamaño en papel de aluminio, 
                ambas con un diseño exclusivo que te encantará. Además, contiene dos paquetes de cuatro cartas Celebraciones y un paquete adicional de 
                Pokémon TCG Booster, todos foliados y en perfecto estado. Para mantener tus cartas seguras y organizadas, se incluye una carpeta de cuatro bolsillos. 
                Como un bono especial, recibirás una moneda conmemorativa de un aniversario. Este producto está dirigido a niños de 6 años en adelante, aunque 
                los coleccionistas de todas las edades lo disfrutarán. El idioma de todas las cartas y materiales es inglés, lo que lo hace ideal para practicar el 
                idioma mientras te diviertes. El modelo Dragapult Prime es uno de los más buscados, así que no pierdas la oportunidad de tenerlo en tus manos.`,
        imagen: "assets/img/dragapult.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKÉMON FIRST PARTNER ILLUSTRATION COLLECTION (SERIES 1)",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `Caja coleccionable ideal para fanáticos de Pokémon TCG, que reúne cartas promocionales con ilustraciones exclusivas y sobres para expandir tu 
                colección. Esta edición destaca por su presentación premium y contenido especial pensado tanto para jugadores como coleccionistas.`,
        imagen: "assets/img/first.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKÉMON MEGA EVOLUTION ELITE TRAINER BOX (MEGA LUCARIO)",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `¡Pokémon de todo tipo se juegan el todo por el todo para convertirse en Pokémon Megaevolución ex! Domina el aura poderosa de 
                    Mega Lucario ex, abraza el poder desbordante de Mega Gardevoir ex y alíate con más de estos poderosos Pokémon, que cuentan con ataques devastadores 
                    y una cantidad enorme de PS. Pero piensa bien tu estrategia: ¡más poder conlleva más riesgos! Elige a tus compañeros Pokémon y prepárate para las batallas 
                    más grandes que jamás hayas visto en la expansión Megaevolución de JCC Pokémon.`,
        imagen: "assets/img/megaevolution.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKÉMON MEGA EVOLUTION ASCENDED HEROES ELITE TRAINER BOX",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `Maravíllate con el asombroso potencial del ex Mega Dragonite, ¡liderando a un grupo de Pokémon estrella en la batalla! Los ex Pokémon 
                de Entrenador y los ex Pokémon Tera Estelares se unen a los ex Pokémon Megaevolución que regresan y a los recién descubiertos, 
                incluyendo algunos con ilustraciones especiales que muestran sus ataques más poderosos y audaces. ¡Celebra a las estrellas de Escarlata y Violeta 
                y el amanecer de la Megaevolución con la expansión Mega evolution: Ascended Heroes de JCC Pokémon!`,
        imagen: "assets/img/mega.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKEMON ELITE TRAINER BOX SURGING SPARKS",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `Maravíllate con el asombroso potencial del ex Mega Dragonite, ¡liderando a un grupo de Pokémon estrella en la batalla! Los ex Pokémon 
                de Entrenador y los ex Pokémon Tera Estelares se unen a los ex Pokémon Megaevolución que regresan y a los recién descubiertos, 
                incluyendo algunos con ilustraciones especiales que muestran sus ataques más poderosos y audaces. ¡Celebra a las estrellas de Escarlata y Violeta 
                y el amanecer de la Megaevolución con la expansión Mega evolution: Ascended Heroes de JCC Pokémon!`,
        imagen: "assets/img/pika.png"
    }, {
        nombre: "POKÉMON CHAOS RISING (BOOSTER BOX)",
        categoria: "Pokemon",
        tipo: "pokemon",
        descripcion: `Expandí tu colección con Chaos Rising, una edición llena de cartas poderosas y diseños impactantes. Esta booster box incluye múltiples sobres ideales para descubrir nuevas 
                cartas, mejorar tu mazo y vivir la emoción de cada apertura. Perfecta para jugadores y coleccionistas. ⚡🔥`,
        imagen: "assets/img/sparks.png"
    },
    {
        nombre: "POKÉMON MEGA EVOLUTION PHANTASMAL FLAMES BOOSTER",
        categoria: "Pokemon",
        tipo: "pokemon",
        descripcion: `El paquete de refuerzo de Pokémon TCG: Mega Evolución—Llamas Fantasmales incluye seis paquetes de refuerzo de Pokémon TCG: 
                Mega Evolución—Llamas Fantasmales. La expansión Mega Evolution—Phantasmal Flames cuenta con más de 120 cartas para coleccionar y 
                nuevas cartas de Pokémon Mega Evolution ex. Este blíster cuádruple, que incluye cartas holográficas y tiene una cantidad total de 60 cartas`,
        imagen: "assets/img/phantasmal.png" // Esto es una imagen de prueba
    },
    {
        nombre: "POKEMON SCARLET & VIOLET PRISMATIC EVOLUTION BOOSTER",
        categoria: "Pokemon",
        tipo: "pokemon",
        destacado: true,
        descripcion: `El paquete de refuerzo Pokémon Scarlet & Violet Prismatic Evolutions incluye 6 paquetes de cartas de refuerzo selladas para el 
                juego de cartas coleccionables Pokémon. Cada paquete contiene cartas del conjunto Scarlet & Violet Prismatic Evolutions, que ofrece a los coleccionistas
                y jugadores la oportunidad de obtener cartas raras y poderosas para mejorar sus mazos. Este paquete proporciona una forma conveniente y emocionante 
                de expandir tu colección de cartas y sumergirte en el mundo de los JCC Pokémon.`,
        imagen: "assets/img/scarlet.png" // Esto es una imagen de prueba
    },
    {
        nombre: "ONE PIECE 25TH ANNIVERSARY (EB-02)",
        categoria: "One Piece",
        tipo: "one piece",
        descripcion: `ONE PIECE 25TH ANNIVERSARY BOOSTER 🔥 El Anime 25th Collection (EB-02) llega 
                para celebrar los 25 años de una de las franquicias más legendarias: One Piece 🏴‍☠️`,
        imagen: "assets/img/onepiece02.png" // Esto es una imagen de prueba
    },
    {
        nombre: "ONE PIECE A FIST OF DIVINE SPEED (OP-11)",
        categoria: "One Piece",
        tipo: "One Piece",
        descripcion: `Potenciá tu mazo con la expansión A Fist of Divine Speed. Cada sobre contiene 12 cartas y más de 120 tipos diferentes para coleccionar, ideales para mejorar tus estrategias 
                y llevar tus partidas al siguiente nivel en el One Piece Card Game. 🏴‍☠️🔥`,
        precio: 12000,
        imagen: "assets/img/11.png"
    },
    {
        nombre: "ONE PIECE LEGACY OF THE MASTER (OP-12)",
        categoria: "One Piece",
        tipo: "One Piece",
        descripcion: `Expande tu colección con la expansión Legacy of the Master del One Piece Card Game. Cada sobre incluye 12 cartas y más de 120 tipos diferentes para descubrir, ideales 
                para potenciar tus mazos y mejorar tus estrategias en cada partida. Perfecto tanto para jugadores competitivos como coleccionistas. 🏴‍☠️🔥`,
        precio: 12000,
        imagen: "assets/img/legacy.png"
    },
    {
        nombre: "ONE PIECE CARRYING ON HIS WILL (OP-13)",
        categoria: "One Piece",
        tipo: "One Piece",
        descripcion: `Sumá poder a tu colección con la expansión Carrying On His Will. Cada sobre incluye 12 cartas y más de 130 tipos distintos para descubrir, ideales para mejorar tus mazos y 
                crear nuevas estrategias en el One Piece Card Game. Perfecto para jugadores y coleccionistas. 🏴‍☠️🔥`,
        precio: 12000,
        imagen: "assets/img/onepieceOP13.png"
    },
    {
        nombre: "ONE PIECE THE AZURE SEA S SEVEN (OP-14)",
        categoria: "One Piece",
        tipo: "One Piece",
        descripcion: `¡Un paquete de refuerzo con temática de los Siete Señores de la Guerra del Mar está aquí! ¡La rareza de la SEC Dracule Mihawk y Crocodile aparecen! ¡Incluye muchas cartas 
                de personajes que ofrecen efectos increíbles con las cartas de Líder! ¡Incluye 2 tipos de tarjetas de eventos de arte alternativos! La tarjeta de arte súper alternativa de este 
                set es Dracule Mihawk 12 cartas por pack. Original`,
        precio: 12000,
        imagen: "assets/img/onepieceOP14.png"
    },
    {
        nombre: "ONE PIECE STARTER DECK RED SHANKS (ST23)",
        categoria: "One Piece",
        tipo: "One Piece",
        descripcion: `¡Una baraja de Piratas Rojos con poder ofensivo y defensivo! ¡Comienza tu viaje de JUEGO DE CARTAS DE UNA PIEZA con esta baraja! ¡La baraja ideal para empezar para los 
                fanáticos de los Piratas Rojos! ¡Todo lo que necesitas para empezar a jugar al JUEGO DE CARTAS DE UNA PIEZA! ¡Este conjunto te permite empezar a jugar el juego usando las reglas oficiales! 
                ¡Usa la habilidad de tu líder para repeler los ataques y controlar el ritmo de las batallas! ¡Tu líder Shanks puede reducir el poder de las cartas de tu oponente! ¡Unie fuerzas con poderosos
                personajes de piratas pelirrojas y ve a por la victoria! `,
        precio: 12000,
        imagen: "assets/img/RED.png"
    },
    {
        nombre: "MAGIC THE GATHERING FINAL FANTASY PLAY BOOSTER",
        categoria: "Magic",
        tipo: "magic",
        descripcion: `¡Toda la saga FINAL FANTASY está aquí! Muy pronto, los jugadores se sumergirán en los mundos de las dieciséis entregas principales de la 
                querida serie de juegos de rol FINAL FANTASY. Lanzarán hechizos poderosos, lucharán junto a invocaciones clásicas y visitarán sus lugares favoritos a 
                lomos de un chocobo. Aquí tendrán un sinfín de material de los juegos para que narren su propia historia.`,
        precio: 12000,
        imagen: "assets/img/final.png" // Esto es una imagen de prueba
    },
    {
        nombre: "MAGIC THE GATHERING SECRETS OF STRIXHAVEN",
        categoria: "Magic",
        tipo: "magic",
        descripcion: `Descubrí la magia de Strixhaven con este Play Booster de Magic: The Gathering. Cada sobre contiene 14 cartas, combinando estrategia, colección y sorpresas en cada apertura. 
                Ideal para mejorar tus mazos o disfrutar del draft con amigos. ✨🧙‍♂️`,
        precio: 12000,
        imagen: "assets/img/secrets.png" // Esto es una imagen de prueba
    },
    {
        nombre: "MAGIC THE GATHERING FINAL FANTASY PLAY BOOSTER",
        categoria: "Magic",
        tipo: "magic",
        descripcion: `¡Toda la saga FINAL FANTASY está aquí! Muy pronto, los jugadores se sumergirán en los mundos de las dieciséis entregas principales de la 
                querida serie de juegos de rol FINAL FANTASY. Lanzarán hechizos poderosos, lucharán junto a invocaciones clásicas y visitarán sus lugares favoritos a 
                lomos de un chocobo. Aquí tendrán un sinfín de material de los juegos para que narren su propia historia.`,
        precio: 12000,
        imagen: "assets/img/tortu.png" // Esto es una imagen de prueba
    },
    {
        nombre: "MAGIC THE GATHERING – EERIE (60-CARD THEME DECK)",
        categoria: "Magic",
        tipo: "magic",
        descripcion: `Mazo temático listo para jugar de 60 cartas, ideal para empezar en Magic: The Gathering o sumar nuevas estrategias a tu colección. El deck Eerie combina mecánicas dinámicas y 
                sinergias sólidas para disfrutar partidas intensas desde el primer momento. ✨🧙‍♂️`,
        precio: 12000,
        imagen: "assets/img/erie.png" // Esto es una imagen de prueba
    },
    {
        nombre: "MAGIC THE GATHERING EDGE OF ETERNITIES",
        categoria: "Magic",
        tipo: "magic",
        descripcion: `El nuevo set espacial de Magic te invita a explorar el sistema Sothera, visitar planetas lejanos, desatar magia deslumbrante y enfrentarte a 
                facciones alienígenas. La colección destaca por su estética de ciencia ficción y por las cartas Japan Showcase, ilustradas por artistas invitados y 
                disponibles en foil y fracture foil, que reinterpretan clásicos tropos del sci-fi japonés. Además, el set trae vistas cósmicas, criaturas 
                interestelares y una ambientación totalmente nueva que lo convierte en una expansión ideal para jugadores y coleccionistas.`,
        precio: 12000,
        imagen: "assets/img/magicedge.png" // Esto es una imagen de prueba
    }
];