const productos = [
    // Animales
    // Nota: x es igual a contenido faltante.

    {
        id: "abeja",
        categoria: "animales",
        nombre: "Abeja",
        precio: 30000,
        imagen: "assets/img/catálogo/abeja.png",
        alt: "Un amigurumi tejido sobre una abejita amarilla con rayas negras y sus alas azules.",
        historia: "Pequeña y trabajadora, esta abejita lleva consigo un toque de alegría para endulzar cualquier día.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]

    },
    {
        id: "ballena",
        categoria: "animales",
        nombre: "Ballena",
        precio: 30000,
        imagen: "assets/img/catálogo/ballenas.png",
        alt: "Un amigurumi tejido sobre una ballena azul, tirando agua",
        historia: "Tranquila y soñadora, esta pequeña ballena recorre nuevos mares en busca de un lugar al que llamar hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },
    {
        id: "canguro",
        categoria: "animales",
        nombre: "Canguro",
        precio: 50000,
        imagen: "assets/img/catálogo/canguro.png",
        alt: "Un amigurumi tejido sobre un canguro con su hijo canguro en su bolsa.",
        historia: "Siempre acompañado de su pequeño, este canguro representa el cariño, la protección y la compañía.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },
    {
        id: "capibara",
        categoria: "animales",
        nombre: "Capibara",
        precio: 40000,
        imagen: "assets/img/catálogo/capibara.png",
        alt: "Un amigurumi tejido sobre un capibara con una naranja en su cabeza.",
        historia: "Con su pequeña naranja y su espíritu tranquilo, este capibara invita a disfrutar de las cosas sencillas.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "conejo",
        categoria: "animales",
        nombre: "Conejo",
        precio: 60000,
        imagen: "assets/img/catálogo/conejo.png",
        alt: "Un amigurumi tejido sobre un conejo marron con ropita a su talla.",
        historia: "Tierno y curioso, este conejito está listo para acompañarte en nuevas aventuras.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "dinosaurio",
        categoria: "animales",
        nombre: "Dinosaurio",
        precio: 40000,
        imagen: "assets/img/catálogo/dinosaurio.png",
        alt: "Un amigurumi tejido sobre un dinosaurio con cuerno amarrillo.",
        historia: "Con su pequeño cuerno amarillo, este dinosaurio conserva el espíritu aventurero de una época perdida.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "dragon-alargado",
        categoria: "animales",
        nombre: "Dragón",
        precio: 50000,
        imagen: "assets/img/catálogo/dragon.png",
        alt: "Un amigurumi tejido sobre un dragon verde con alas rojas.",
        historia: "Entre alas y escamas, este pequeño dragón está listo para proteger y acompañar nuevas historias.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Gris", value: "gris" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "dragon",
        categoria: "animales",
        nombre: "Dragón",
        precio: 40000,
        imagen: "assets/img/catálogo/dragonalargado.png",
        alt: "Un amigurumi tejido sobre un dragon alargado, rojo brillante.",
        historia: "Rojo y brillante, este dragón dejó su cueva para convertirse en el guardián de un nuevo hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde", defecto: true },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Gris", value: "gris" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "foca",
        categoria: "animales",
        nombre: "Foca",
        precio: 20000,
        imagen: "assets/img/catálogo/foca.png",
        alt: "Un amigurumi tejido sobre una foca blanca pequeña.",
        historia: "Pequeña y tranquila, esta foca trae consigo un pedacito de mar para acompañar momentos especiales.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "gato",
        categoria: "animales",
        nombre: "Gato",
        precio: 30000,
        imagen: "assets/img/catálogo/gatos.png",
        alt: "Un amigurumi tejido sobre un gato gordo de color gris sentado.",
        historia: "Gordito, tranquilo y amante de las siestas, este gatito está listo para encontrar un nuevo lugar donde descansar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Blanco con rayas Amarillas", value: "blanco-amarillo" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Gris", value: "gris", defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "mono",
        categoria: "animales",
        nombre: "Mono",
        precio: 40000,
        imagen: "assets/img/catálogo/mono.png",
        alt: "Un amigurumi tejido sobre un monito marrón con una banana en las manos.",
        historia: "Curioso y juguetón, este pequeño mono siempre está preparado para una nueva aventura con su banana en mano.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "oso",
        categoria: "animales",
        nombre: "Oso",
        precio: 50000,
        imagen: "assets/img/catálogo/oso.png",
        alt: "Un amigurumi tejido sobre un oso blanco con ropa tejida y bufanda.",
        historia: "Abrigado y tierno, este osito busca un nuevo hogar donde compartir momentos llenos de cariño.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "panda",
        categoria: "animales",
        nombre: "Panda",
        precio: 30000,
        imagen: "assets/img/catálogo/panda.png",
        alt: "Un amigurumi tejido sobre un panda pequeño.",
        historia: "Tranquilo y adorable, este pequeño panda nació para convertirse en un compañero especial.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "pato",
        categoria: "animales",
        nombre: "Pato",
        precio: 60000,
        imagen: "assets/img/catálogo/pato.png",
        alt: "Un amigurumi tejido sobre un pato blanco y pico narranja.",
        historia: "Curioso y aventurero, este pequeño pato está listo para salir del estanque y descubrir nuevos caminos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "pinguino",
        categoria: "animales",
        nombre: "Pingüino",
        precio: 50000,
        imagen: "assets/img/catálogo/pinguino.png",
        alt: "Un amigurumi tejido sobre un pinguino blanco con negro, el cual tiene un sombrero de colores.",
        historia: "Con su colorido sombrero, este pequeño pingüino lleva un toque de alegría incluso en los días más fríos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Accesorio",
                items: [
                    { nombre: "Con sombrero", value: "con", multiplicador: 1.00, defecto: true },
                    { nombre: "Sin sombrero", value: "sin", multiplicador: 0.85 }
                ]
            }
        ]
    },

    {
        id: "pulpo",
        categoria: "animales",
        nombre: "Pulpo",
        precio: 20000,
        imagen: "assets/img/catálogo/pulpos.png",
        alt: "Amigurumi tejidos sobre pulpos multicolores los cuales representan una emoción diferente.",
        historia: "Colorido y expresivo, cada pequeño pulpo representa una emoción diferente y una forma única de acompañarte.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado", defecto: true },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]

    },

    {
        id: "tortuga-bebe",
        categoria: "animales",
        nombre: "Tortuga bebé",
        precio: 20000,
        imagen: "assets/img/catálogo/tortuga.png",
        alt: "Un amigurumi tejido sobre una tortuga bebé la cual es blanquita y pequeña.",
        historia: "Pequeña y delicada, esta tortuguita comienza su viaje en busca de un nuevo hogar.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Animales",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Blanco", value: "blanco", defecto: true },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    // PERSONAJES

    {
        id: "aang",
        categoria: "personajes",
        nombre: "Aang",
        precio: 45000,
        imagen: "assets/img/catálogo/Aang.png",
        alt: "Aang tejido a crochet con túnica naranja y amarilla y flecha azul en la frente.",
        historia: "Un pequeño maestro del aire que lleva consigo la misión de mantener el equilibrio. Aang representa la paz, la amistad y el valor de afrontar grandes desafíos sin perder la alegría.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "baymax",
        categoria: "personajes",
        nombre: "Baymax",
        precio: 40000,
        imagen: "assets/img/catálogo/Baymax.png",
        alt: "Baymax tejido a crochet, de color blanco, cuerpo redondeado y ojos negros.",
        historia: "Creado para cuidar, Baymax demuestra que a veces los gestos más sencillos son los que más importan. Un compañero que representa cariño, protección y amistad.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "betty-boop",
        categoria: "personajes",
        nombre: "Betty Boop",
        precio: 45000,
        imagen: "assets/img/catálogo/bettybu.png",
        alt: "Betty Boop tejida a crochet con cabello negro y vestido rojo.",
        historia: "Con su inconfundible estilo y personalidad, Betty Boop trae consigo el encanto de una época llena de música y glamour. Una pieza para quienes disfrutan de lo clásico y atrevido.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "bill-cipher",
        categoria: "personajes",
        nombre: "Bill Cipher",
        precio: 40000,
        imagen: "assets/img/catálogo/bill.png",
        alt: "Bill Cipher tejido a crochet, con forma triangular amarilla, un ojo y extremidades.",
        historia: "Un pequeño triángulo dispuesto a convertir cualquier día tranquilo en un misterio. Bill Cipher representa el caos, lo extraño y esas historias que nunca son lo que parecen.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "bmo",
        categoria: "personajes",
        nombre: "BMO",
        precio: 35000,
        imagen: "assets/img/catálogo/bmo.png",
        alt: "BMO tejido a crochet, de color verde, con forma de consola y botones en el frente.",
        historia: "Entre juegos, aventuras y conversaciones inesperadas, BMO demuestra que la amistad puede aparecer en los lugares más curiosos. Un pequeño compañero lleno de imaginación y diversión.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "burro",
        categoria: "personajes",
        nombre: "Burro",
        precio: 40000,
        imagen: "assets/img/catálogo/burro.png",
        alt: "Burro tejido a crochet de color gris, con orejas largas y expresión tierna.",
        historia: "Tranquilo y noble, este pequeño burro recuerda que no todos los héroes necesitan llamar la atención. Su historia habla de paciencia, humildad y compañía.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "novia-cadaver",
        categoria: "personajes",
        nombre: "La Novia Cadáver",
        precio: 55000,
        imagen: "assets/img/catálogo/cadaver-novia.png",
        alt: "La Novia Cadáver tejida a crochet, con piel azulada, vestido de novia y detalles esqueléticos.",
        historia: "Entre flores marchitas y una historia que desafía la muerte, esta novia guarda una historia de amor, pérdida y esperanza. Una pieza para quienes encuentran belleza en lo diferente.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "chavo",
        categoria: "personajes",
        nombre: "El Chavo",
        precio: 45000,
        imagen: "assets/img/catálogo/chavo.png",
        alt: "El Chavo del 8 tejido a crochet con su ropa característica, gorra y expresión sonriente.",
        historia: "Desde una vecindad llena de ocurrencias, El Chavo convirtió las cosas sencillas en grandes aventuras. Una pieza inspirada en la nostalgia, el humor y los recuerdos de infancia.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "coco",
        categoria: "personajes",
        nombre: "Coco",
        precio: 45000,
        imagen: "assets/img/catálogo/coco.png",
        alt: "Coco tejido a crochet con rostro de calavera, ropa característica y una guitarra.",
        historia: "Entre música, recuerdos y una familia que nunca olvida a los suyos, Coco nos recuerda la importancia de mantener vivas nuestras raíces. Una pieza llena de memoria, tradición y cariño.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Cara",
                items: [
                    { nombre: "Calavera", value: "calavera", defecto: true },
                    { nombre: "Humana", value: "human" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "coraje",
        categoria: "personajes",
        nombre: "Coraje",
        precio: 40000,
        imagen: "assets/img/catálogo/coraje.png",
        alt: "Coraje tejido a crochet de color rosado, con orejas grandes y expresión asustada.",
        historia: "Aunque tenga miedo, Coraje siempre encuentra la manera de proteger a quienes quiere. Una historia que recuerda que ser valiente no significa no tener miedo, sino continuar a pesar de él.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "cruella",
        categoria: "personajes",
        nombre: "Cruella",
        precio: 50000,
        imagen: "assets/img/catálogo/cruella.png",
        alt: "Cruella de Vil tejida a crochet con cabello blanco y negro y vestimenta característica.",
        historia: "Con su cabello bicolor y su estilo imposible de ignorar, Cruella convierte cada aparición en un espectáculo. Una pieza para quienes disfrutan de personajes intensos, elegantes y extravagantes.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "dobby",
        categoria: "personajes",
        nombre: "Dobby",
        precio: 45000,
        imagen: "assets/img/catálogo/dobby.png",
        alt: "Dobby tejido a crochet con orejas grandes, túnica y expresión tierna.",
        historia: "Un pequeño elfo que soñaba con ser libre y que demostró que la lealtad puede ser enorme incluso en un cuerpo pequeño. Una pieza inspirada en la amistad, la libertad y el cariño.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "el-principito",
        categoria: "personajes",
        nombre: "El Principito",
        precio: 150000,
        imagen: "assets/img/catálogo/elprincipito.png",
        alt: "Personaje tejido del principito, sobre su planeta, junto a su zorro y su rosa.",
        historia: "Un pequeño viajero que recorre distintos planetas buscando comprender a las personas y el valor de los vínculos. Su historia refleja la amistad, el cariño y la importancia de mirar más allá de las apariencias.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Planeta",
                items: [
                    { nombre: "Sin el planeta", value: "sin", multiplicador: 0.70 },
                    { nombre: "Con el planeta", value: "con", multiplicador: 1.00, defecto: true }
                ]
            },
            {
                nombre: "Zorro",
                items: [
                    { nombre: "Sin zorro", value: "sin", multiplicador: 0.80 },
                    { nombre: "Con zorro", value: "con", multiplicador: 1.00, defecto: true }
                ]
            },
            {
                nombre: "Rosa",
                items: [
                    { nombre: "Sin rosa", value: "sin", multiplicador: 0.80 },
                    { nombre: "Con rosa", value: "con", multiplicador: 1.00, defecto: true }
                ]
            }
        ]
    },

    {
        id: "frieren",
        categoria: "personajes",
        nombre: "Frieren",
        precio: 50000,
        imagen: "assets/img/catálogo/fieren.png",
        alt: "Frieren tejida a crochet, con cabello claro, orejas élficas y vestimenta característica.",
        historia: "Una maga elfa que ha vivido durante siglos y que aprende que el tiempo puede cambiar el significado de los recuerdos. Una pieza inspirada en la nostalgia, los vínculos y el valor de apreciar los momentos compartidos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "freddie-mercury",
        categoria: "personajes",
        nombre: "Freddie Mercury",
        precio: 50000,
        imagen: "assets/img/catálogo/freddy.png",
        alt: "Freddie Mercury tejido a crochet con bigote, vestimenta característica y expresión enérgica.",
        historia: "Una figura llena de energía para alguien que convirtió el escenario en su propio universo. Inspirado en la música, la expresión artística y la libertad de ser inolvidable.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    

    {
        id: "goku",
        categoria: "personajes",
        nombre: "Goku",
        precio: 50000,
        imagen: "assets/img/catálogo/goku.png",
        alt: "Goku tejido a crochet con cabello azul y vestimenta naranja.",
        historia: "Un guerrero que nunca deja de entrenar, aprender y superar sus propios límites. Esta pieza representa perseverancia, amistad y la determinación de seguir avanzando.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Color de cabello",
                items: [
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Celeste", value: "celeste", defecto: true },
                    { nombre: "Platiado", value: "platiado" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "grinch",
        categoria: "personajes",
        nombre: "Grinch",
        precio: 45000,
        imagen: "assets/img/catálogo/grinch.png",
        alt: "Grinch tejido a crochet de color verde con expresión característica y ropa navideña.",
        historia: "Detrás de una apariencia gruñona puede esconderse un corazón capaz de cambiar. El Grinch recuerda que nunca es demasiado tarde para descubrir el valor de compartir y querer.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "groot",
        categoria: "personajes",
        nombre: "Groot",
        precio: 45000,
        imagen: "assets/img/catálogo/gru.png",
        alt: "groot personaje de guardianes de la galaxia, esta en version niño en maceta.",
        historia: "Para regalar a aquellos que te sacrificarías sin pensarlo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Accesorio",
                items: [
                    { nombre: "Macetas", value: "maceta", multiplicador: 1.50 },
                    { nombre: "Piernas", value: "piernas", multiplicador: 1.00, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "hada",
        categoria: "personajes",
        nombre: "Hada",
        precio: 45000,
        imagen: "assets/img/catálogo/hada.png",
        alt: "Hada tejida a crochet con vestido, alas y una varita mágica.",
        historia: "Entre alas, magia y sueños, esta pequeña hada parece haber salido de un cuento. Una pieza para quienes todavía encuentran un poco de magia en las cosas cotidianas.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Color de falda + alas",
                items: [
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo", defecto: true },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
            {
                nombre: "Color de camisa y medias",
                items: [
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde", defecto: true }

                ]
            },

            {
                nombre: "Tipo de flor, corona y falda",
                items: [
                    { nombre: "Girasoles", value: "girasol", defecto: true },
                    { nombre: "rosa", value: "rosa", multiplicador: 1.20 }

                ]
            }
        ]
    },

    {
        id: "harry-potter",
        categoria: "personajes",
        nombre: "Harry Potter",
        precio: 50000,
        imagen: "assets/img/catálogo/harrypotter.png",
        alt: "Harry Potter tejido a crochet con gafas, cicatriz en la frente y túnica.",
        historia: "Con una cicatriz y una historia mucho más grande de lo que imaginaba, Harry aprendió que la amistad puede ser tan poderosa como cualquier hechizo. Una pieza inspirada en valentía, amistad y magia.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "hipo",
        categoria: "personajes",
        nombre: "Hipo",
        precio: 45000,
        imagen: "assets/img/catálogo/hipo.png",
        alt: "Hipo tejido a crochet con vestimenta de vikingo y expresión decidida.",
        historia: "Un joven que aprendió que comprender al otro puede cambiar por completo la manera de ver el mundo. Hipo representa curiosidad, valentía y el vínculo entre humanos y dragones.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },


    {
        id: "jinx",
        categoria: "personajes",
        nombre: "Jinx",
        precio: 55000,
        imagen: "assets/img/catálogo/jinx.png",
        alt: "Jinx tejida a crochet con cabello azul largo y vestimenta característica.",
        historia: "Colorida, impredecible y siempre preparada para causar algún desastre, Jinx convierte el caos en parte de su identidad. Una pieza para quienes disfrutan de personajes intensos y fuera de lo común.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "winnie-the-pooh",
        categoria: "personajes",
        nombre: "Winnie the Pooh",
        precio: 40000,
        imagen: "assets/img/catálogo/kinny.png",
        alt: "Winnie the Pooh tejido a crochet con su apariencia característica y colores amarillos y rojos.",
        historia: "Un oso pequeño con una gran capacidad para encontrar felicidad en las cosas sencillas. Pooh representa la amistad, la tranquilidad y esos momentos que hacen que un día común sea especial.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "luffy",
        categoria: "personajes",
        nombre: "Luffy",
        precio: 50000,
        imagen: "assets/img/catálogo/lufy.png",
        alt: "Luffy tejido a crochet con sombrero de paja y vestimenta característica.",
        historia: "Con su sombrero de paja y un sueño enorme, Luffy navega buscando libertad y aventuras junto a su tripulación. Una pieza inspirada en amistad, determinación y sueños que parecen imposibles.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "mafalda",
        categoria: "personajes",
        nombre: "Mafalda",
        precio: 40000,
        imagen: "assets/img/catálogo/mafalda.png",
        alt: "Mafalda tejida a crochet con cabello negro y vestido rojo.",
        historia: "Pequeña, curiosa y con muchas preguntas, Mafalda observa el mundo con una mirada que va mucho más allá de su edad. Una pieza inspirada en la curiosidad, la reflexión y el humor.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "my-melody",
        categoria: "personajes",
        nombre: "My Melody",
        precio: 40000,
        imagen: "assets/img/catálogo/melody.png",
        alt: "My Melody tejida a crochet de color rosado, con orejas largas y capucha característica.",
        historia: "Dulce, tierna y siempre acompañada de su característico estilo, My Melody lleva consigo una sensación de amistad y ternura. Un pequeño personaje para quienes aman los detalles adorables.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "osos-escandalosos",
        categoria: "personajes",
        nombre: "Osos Escandalosos",
        precio: 30000,
        imagen: "assets/img/catálogo/osos-escandalosos.png",
        alt: "Tres Osos Escandalosos tejidos a crochet, representados como tres osos independientes.",
        historia: "Pardo, Panda y Polar nunca necesitan mucho para convertir un día normal en una aventura. Tres hermanos con personalidades diferentes que comparten una misma historia de familia y amistad.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Personaje",
                items: [
                    { nombre: "Pardo", value: "pardo", defecto: true },
                    { nombre: "Panda", value: "panda" },
                    { nombre: "Polar", value: "polar" },
                    { nombre: "Los tres", value: "tres", multiplicador: 3.00 }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "michael-jackson",
        categoria: "personajes",
        nombre: "Michael Jackson",
        precio: 50000,
        imagen: "assets/img/catálogo/Michael Jackson.png",
        alt: "Michael Jackson tejido a crochet con vestimenta y apariencia características.",
        historia: "Una figura inspirada en uno de los artistas más reconocibles de la música popular. Su historia está ligada al baile, el espectáculo y una forma de convertir cada presentación en un momento memorable.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "hatsune-miku",
        categoria: "personajes",
        nombre: "Hatsune Miku",
        precio: 55000,
        imagen: "assets/img/catálogo/miku.png",
        alt: "Hatsune Miku tejida a crochet con cabello azul largo y vestimenta característica.",
        historia: "Una voz nacida de la tecnología que terminó convirtiéndose en un fenómeno musical mundial. Miku representa creatividad, música y las nuevas formas de expresión artística.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "minion",
        categoria: "personajes",
        nombre: "Minion",
        precio: 40000,
        imagen: "assets/img/catálogo/minion.png",
        alt: "Minion tejido a crochet de color amarillo, con overol azul y ojos grandes.",
        historia: "Pequeño, amarillo y siempre dispuesto a meterse en algún problema, un Minion nunca parece aburrirse. Una pieza llena de humor, travesuras y compañerismo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "mulan",
        categoria: "personajes",
        nombre: "Mulán",
        precio: 50000,
        imagen: "assets/img/catálogo/mulan.png",
        alt: "Mulán tejida a crochet con cabello negro y vestido de colores azul y rojo.",
        historia: "Una joven que desafió las expectativas para proteger a su familia y demostrar de qué era capaz. Mulán representa valentía, determinación y la fuerza de seguir el propio camino.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "perry",
        categoria: "personajes",
        nombre: "Perry el Ornitorrinco",
        precio: 45000,
        imagen: "assets/img/catálogo/perry-aparado.png",
        alt: "Perry el Ornitorrinco tejido a crochet de color azul con sus características distintivas.",
        historia: "De día parece una mascota tranquila; en secreto, es un agente dispuesto a salvar el mundo. Perry representa aventura, humor y la idea de que nunca sabes qué puede esconder alguien.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "perry-acostado",
        categoria: "personajes",
        nombre: "Perry el Ornitorrinco",
        precio: 35000,
        imagen: "assets/img/catálogo/peery.png",
        alt: "Perry el Ornitorrinco tejido a crochet de color azul con sus características distintivas.",
        historia: "Perry lleva una vida aparentemente tranquila como mascota, pero en secreto es un agente que enfrenta misiones y protege a quienes lo rodean. Su historia representa la valentía de hacer el bien incluso cuando los demás no conocen todo lo que haces.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "pochita",
        categoria: "personajes",
        nombre: "Pochita",
        precio: 35000,
        imagen: "assets/img/catálogo/puchita.png",
        alt: "Pochita tejido a crochet en su forma de pequeño perro demonio.",
        historia: "Pequeño, adorable y mucho más poderoso de lo que aparenta, Pochita se convierte en uno de los compañeros más importantes de Denji. Una pieza inspirada en lealtad, cariño y compañerismo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

     {
        id: "ratatouille",
        categoria: "personajes",
        nombre: "Remi - Ratatouille",
        precio: 50000,
        imagen: "assets/img/catálogo/ratatouiu.png",
        alt: "Personaje Remi de Ratatouille tejido a crochet siendo una rata con vestimenta de chef.",
        historia: "Remy es una pequeña rata que sueña con ser chef a pesar de que nadie espera eso de él. Su historia demuestra que el talento y la pasión pueden aparecer en los lugares más inesperados..",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {

                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Cuchara",
                items: [
                    { nombre: "Con cuchara", value: "con", multiplicador: 1.00, defecto: true },
                    { nombre: "Sin cuchara", value: "sin", multiplicador: 0.80 }
                ]
            }


        ]
    },

    {
        id: "repo",
        categoria: "personajes",
        nombre: "REPO",
        precio: 45000,
        imagen: "assets/img/catálogo/repo.png",
        alt: "Personaje REPO tejido a crochet con apariencia oscura y una boca que puede abrirse.",
        historia: "Con una apariencia inquietante y una boca que puede abrirse de forma inesperada, REPO no pasa desapercibido. Una pieza inspirada en el misterio y el terror del videojuego.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Celeste", value: "celeste", defecto: true },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }
                ]
            },
            {

                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }

        ]
    },

    {
        id: "snoopy-acostado",
        categoria: "personajes",
        nombre: "Snoopy acostado",
        precio: 40000,
        imagen: "assets/img/catálogo/snoopy-acostado.png",
        alt: "Snoopy tejido a crochet acostado, de color blanco con detalles negros.",
        historia: "Snoopy demuestra que algunas de las mejores aventuras también pueden terminar en una buena siesta. Una pieza tranquila y adorable inspirada en la amistad y la comodidad.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "spiderman",
        categoria: "personajes",
        nombre: "Spider-Man",
        precio: 45000,
        imagen: "assets/img/catálogo/spiderman.png",
        alt: "Spider-Man tejido a crochet con traje rojo y azul y diseño de máscara.",
        historia: "Entre telarañas, responsabilidad y grandes desafíos, Spider-Man demuestra que tener poderes también significa aprender a usarlos para ayudar. Una pieza inspirada en heroísmo y perseverancia.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },
    {
        id: "venom-spiderman",
        categoria: "personajes",
        nombre: "Spider-Man",
        precio: 55000,
        imagen: "assets/img/catálogo/venon-spiderman.png",
        alt: "Venom y Spider-Man tejidos a crochet, uno negro y otro con traje rojo y azul.",
        historia: "Dos figuras enfrentadas por una relación marcada por el conflicto y la dualidad. Una pieza que reúne dos fuerzas opuestas y convierte ese contraste en una historia visual.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00 },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "totoro",
        categoria: "personajes",
        nombre: "Totoro",
        precio: 40000,
        imagen: "assets/img/catálogo/totoro.png",
        alt: "Totoro tejido a crochet de color gris, con orejas grandes y expresión tierna.",
        historia: "Una criatura del bosque que aparece como si siempre hubiera estado esperando entre los árboles. Totoro representa imaginación, naturaleza y la magia de mirar el mundo con curiosidad.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "vegeta",
        categoria: "personajes",
        nombre: "Vegeta",
        precio: 50000,
        imagen: "assets/img/catálogo/vegetta.png",
        alt: "Vegeta tejido a crochet con cabello negro y vestimenta característica.",
        historia: "Orgulloso, competitivo y decidido a superar sus propios límites, Vegeta demuestra que el crecimiento también puede surgir de los desafíos. Una pieza inspirada en fuerza, perseverancia y evolución.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Color de cabello",
                items: [
                    { nombre: "Negro", value: "negro", defecto: true },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Purpura", value: "purpura" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Celeste", value: "celeste" },
                    { nombre: "Verde", value: "verde" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "yoda",
        categoria: "personajes",
        nombre: "Yoda",
        precio: 40000,
        imagen: "assets/img/catálogo/yoda.png",
        alt: "Yoda tejido a crochet de color verde, con orejas grandes y túnica.",
        historia: "Pequeño en tamaño, pero enorme en sabiduría, Yoda ha dedicado su vida a comprender la Fuerza. Una pieza inspirada en paciencia, conocimiento y fortaleza interior.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },


    // =====================================================
    // PAREJAS
    // =====================================================

    {
        id: "chimuelo-furia-luminosa",
        categoria: "parejas",
        nombre: "Pareja Chimuelo",
        precio: 85000,
        imagen: "assets/img/catálogo/chimuelo-pareja.png",
        alt: "Chimuelo y Furia Luminosa tejidos a crochet, uno de color negro y otro de color claro.",
        historia: "Dos dragones diferentes que encuentran compañía y confianza el uno en el otro. Una historia sobre conexión, libertad y esos vínculos que nacen cuando alguien nos comprende.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Personajes",
                items: [
                    { nombre: "Solo Chimuelo", value: "chimuelo", precio: 50000 },
                    { nombre: "Solo Furia Luminosa", value: "furia", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 85000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },
    {
        id: "hollow-knight",
        categoria: "parejas",
        nombre: "Hollow Knight",
        precio: 90000,
        imagen: "assets/img/catálogo/hollow-knight.png",
        alt: "Hollow Knight tejido a crochet con cuerpo oscuro y máscara blanca característica.",
        historia: "En un reino silencioso lleno de secretos, un pequeño caballero se adentra en lo desconocido. Una pieza inspirada en la exploración, el misterio y los mundos que esperan ser descubiertos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Personajes · Dúo",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Hornet", value: "hornet", precio: 50000 },
                    { nombre: "Solo el caballero", value: "caballero", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 90000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Oruga",
                items: [
                    { nombre: "Sin oruga", value: "sin", multiplicador: 1.00 },
                    { nombre: "Con oruga", value: "con", multiplicador: 1.15, defecto: true }
                ]
            }
        ]
    },

    {
        id: "duo-focas",
        categoria: "parejas",
        nombre: "Pareja de focas",
        precio: 65000,
        imagen: "assets/img/catálogo/duo-focas.png",
        alt: "Dos focas tejidas a crochet de tonos gris y blanco con cuerpos redondeados.",
        historia: "Dos pequeñas focas que parecen hechas para compartir aventuras. Una historia sencilla sobre compañía, ternura y la diversión de no estar nunca solo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Foca", value: "foca", precio: 30000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 65000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "fuego-agua",
        categoria: "parejas",
        nombre: "Elementos",
        precio: 80000,
        imagen: "assets/img/catálogo/elemento-pareja.png",
        alt: "Dos personajes tejidos a crochet inspirados en fuego y agua de la película Elementos.",
        historia: "Dos elementos completamente diferentes que terminan encontrando una conexión inesperada. Una historia sobre contrastes, equilibrio y la posibilidad de encontrar algo en común.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Ember", value: "fuego", precio: 45000 },
                    { nombre: "Solo Wade", value: "agua", precio: 45000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 80000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "walle-eve",
        categoria: "parejas",
        nombre: "WALL·E + EVE",
        precio: 80000,
        imagen: "assets/img/catálogo/eva-pareja.png",
        alt: "WALL·E y EVE tejidos a crochet como un dúo de personajes robóticos.",
        historia: "Dos robots que cruzan un mundo vacío y terminan descubriendo algo mucho más grande que su misión. Una historia sobre compañía, esperanza y vínculos que pueden surgir en los lugares más inesperados.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo WallE", value: "hornet", precio: 50000 },
                    { nombre: "Solo el Eve", value: "caballero", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 90000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Planta",
                items: [
                    { nombre: "Sin planta", value: "sin", multiplicador: 1.00, defecto: true },
                    { nombre: "Con planta", value: "con", multiplicador: 1.50, }
                ]
            }
        ]
    },

    {
        id: "pareja-jardin",
        categoria: "parejas",
        nombre: "Dúo más allá del jardín",
        precio: 90000,
        imagen: "assets/img/catálogo/jardin-pareja.png",
        alt: "Dos hermanos de la serie más allá del jardin, dos amigurumis.",
        historia: "Representa esa guía que llegamos a necesitar cuando estamos perdidos, asustados y con ganas de rendirnos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Dúo",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Wirt", value: "wirt", precio: 50000 },
                    { nombre: "Solo Howl", value: "", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 90000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Sapito",
                items: [
                    { nombre: "Sin sapito", value: "sin", multiplicador: 1.00 },
                    { nombre: "Con sapito", value: "con", multiplicador: 1.12, defecto: true }
                ]
            }
        ]
    },

    {
        id: "sophie-howl",
        categoria: "parejas",
        nombre: "Sophie + Howl",
        precio: 90000,
        imagen: "assets/img/catálogo/pareja-anime.png",
        alt: "Sophie y Howl tejidos a crochet como pareja de personajes de El castillo ambulante.",
        historia: "Dos personajes unidos por una historia donde la magia, el cambio y el cariño se entrelazan. Una pieza inspirada en la conexión entre Sophie y Howl y en los mundos extraordinarios que habitan.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Sophie", value: "sophie", precio: 50000 },
                    { nombre: "Solo Howl", value: "howl", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 90000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00 },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    

    {
        id: "coraline-wybie",
        categoria: "parejas",
        nombre: "Coraline + Wybie",
        precio: 85000,
        imagen: "assets/img/catálogo/pareja-coraline.png",
        alt: "Coraline y Wybie tejidos a crochet, representados como un dúo de personajes.",
        historia: "Una puerta hacia otro mundo, misterios por descubrir y dos jóvenes que terminan enfrentando lo desconocido. Una pieza inspirada en la aventura, la curiosidad y la amistad.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Coraline", value: "coraline", precio: 50000 },
                    { nombre: "Solo Wybie", value: "wybie", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 85000 }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "edward-pareja",
        categoria: "parejas",
        nombre: "Pareja de Edward Scissorhands",
        precio: 90000,
        imagen: "assets/img/catálogo/pareja-miedo.png",
        alt: "Edward Scissorhands y su pareja tejidos a crochet con una estética gótica y romántica.",
        historia: "Una historia de amor diferente, marcada por la ternura, la incomprensión y un personaje que solo quería encontrar un lugar donde pertenecer. Una pieza con estética gótica y romántica.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Edward", value: "edawrd", precio: 50000 },
                    { nombre: "Solo pareja", value: "pareja", precio: 50000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 90000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
    id: "pinguinos",
    categoria: "parejas",
    nombre: "Pingüinos",
    precio: 70000,
    imagen: "assets/img/catálogo/pinguinos.png",
    alt: "Dos pingüinos tejidos a crochet, uno rosa y blanco y otro gris y blanco.",
    historia: "Dos pingüinos que representan la compañía y el cariño. Un dúo tierno pensado para compartir, regalar y conservar como recuerdo de una historia especial. Un amor para toda la vida...",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo pingüino", value: "rosa", precio: 40000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 70000, defecto: true }
            ]
        },
        {
                nombre: "Color Pingüino #1",
                items: [
                    { nombre: "Negro", value: "negro", defecto: true },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa",defecto: true  },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
            {
                nombre: "Color Pingüino #2",
                items: [
                    { nombre: "Blanco", value: "blanco",defecto: true  },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo"},
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
        {
            nombre: "Tamaño",
            items: [
                { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
            ]
        }
    ]
},

{
    id: "pollitos",
    categoria: "parejas",
    nombre: "Pollitos Novios",
    precio: 70000,
    imagen: "assets/img/catálogo/pollitos.png",
    alt: "Dos pollitos tejidos a crochet vestidos de novia y novio.",
    historia: "Una pareja de pollitos preparada para celebrar una historia de amor. Ella lleva su vestido de novia y él su elegante traje, formando un pequeño recuerdo de un día especial.",
    materiales: "Hilo Coral 100% acrílico, hilo de algodón y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo novia", value: "novia", precio: 40000 },
                { nombre: "Solo novio", value: "novio", precio: 40000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 70000, defecto: true }
            ]
        },
        {
            nombre: "Tamaño",
            items: [
                { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
            ]
        }
    ]
},

{
    id: "pucca-garu",
    categoria: "parejas",
    nombre: "Pucca + Garu",
    precio: 40000,
    imagen: "assets/img/catálogo/pucca-garu.png",
    alt: "Pucca y Garu tejidos a crochet como una pareja de personajes.",
    historia: "Una pareja marcada por las travesuras, el cariño y una persecución que parece no tener final. Pucca y Garu llevan su divertida historia a una versión tejida para conservarla.",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo Pucca", value: "pucca", precio: 25000 },
                { nombre: "Solo Garu", value: "garu", precio: 25000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 40000, defecto: true }
            ]
        },
        {
            nombre: "Tamaño",
            items: [
                { nombre: "Llavero (8 cm)", value: "pequeno", multiplicador: 1.00, defecto: true },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 2.10 },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.40 }
            ]
        }
    ]
},

{
    id: "shrek-fiona",
    categoria: "parejas",
    nombre: "Shrek + Fiona",
    precio: 40000,
    imagen: "assets/img/catálogo/shrek-fiona.png",
    alt: "Shrek y Fiona tejidos a crochet en su forma de ogros verdes.",
    historia: "Una pareja que encontró el amor lejos de los cuentos tradicionales. Shrek y Fiona representan una historia donde ser diferente nunca fue un impedimento para encontrar a alguien con quien compartir el camino.",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo Fiona", value: "fiona", precio: 25000 },
                { nombre: "Solo Shrek", value: "shrek", precio: 25000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 40000, defecto: true }
            ]
        },
        {
             
           nombre: "Tamaño",
            items: [
                { nombre: "Llavero (8 cm)", value: "pequeno", multiplicador: 1.00, defecto: true },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 2.10 },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.40 }
            ]
        
        }
    ]
},

{
    id: "zootopia",
    categoria: "parejas",
    nombre: "Nick + Judy",
    precio: 40000,
    imagen: "assets/img/catálogo/zootopia.png",
    alt: "Nick Wilde y Judy Hopps de Zootopia tejidos a crochet como un dúo.",
    historia: "Dos personajes que demostraron que las diferencias no tienen por qué separar a quienes aprenden a confiar y trabajar juntos. Nick y Judy forman un dúo lleno de personalidad, aventura y compañerismo.",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo Nick", value: "nick", precio: 25000 },
                { nombre: "Solo Judy", value: "judy", precio: 25000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 40000, defecto: true }
            ]
        },
        {
           nombre: "Tamaño",
            items: [
                { nombre: "Llavero (8 cm)", value: "pequeno", multiplicador: 1.00, defecto: true },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 2.10 },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.40 }
            ]
        }
    ]
},

{
    id: "goku-milk",
    categoria: "parejas",
    nombre: "Goku + Milk",
    precio: 40000,
    imagen: "assets/img/catálogo/goku-milk.png",
    alt: "Goku y Milk tejidos a crochet como pareja inspirada en Dragon Ball.",
    historia: "Una pareja que combina aventura, carácter y una historia compartida. Goku y Milk llevan el universo de Dragon Ball a un pequeño dúo tejido para los fans de estos personajes.",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo Goku", value: "goku", precio: 25000 },
                { nombre: "Solo Milk", value: "milk", precio: 25000 },
                { nombre: "Los dos juntos", value: "ambos", precio: 40000, defecto: true }
            ]
        },
        {
            nombre: "Tamaño",
            items: [
                { nombre: "Llavero (8 cm)", value: "pequeno", multiplicador: 1.00, defecto: true },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 2.10 },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.40 }
            ]
        }
    ]
},

{
    id: "nutrias",
    categoria: "parejas",
    nombre: "Nutrias",
    precio: 70000,
    imagen: "assets/img/catálogo/nutrias.png",
    alt: "Dos nutrias tejidas a crochet con mejillas sonrojadas y un pequeño corazón.",
    historia: "Dos pequeñas nutrias que representan el cariño en los detalles. Juntas forman un dúo tierno, acompañado por un pequeño corazón que convierte la pieza en un regalo especial.",
    materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
    etiqueta: "Amigurumi · Parejas",
    opciones: [
        {
            nombre: "Combinación",
            items: [
                { nombre: "Solo una nutria", value: "una", precio: 40000 },
                { nombre: "Las dos juntas", value: "ambos", precio: 70000, defecto: true }
            ]
        },
        {
            nombre: "Tamaño",
            items: [
                { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
            ]
        }
    ]
},
    

    {
        id: "duo-patitos",
        categoria: "parejas",
        nombre: "Dúo de patitos",
        precio: 60000,
        imagen: "assets/img/catálogo/pareja-patito.png",
        alt: "Dos patitos amarillos tejidos a crochet con cuerpos pequeños y redondeados.",
        historia: "Dos pequeños patitos que parecen destinados a ir juntos. Una pieza tierna inspirada en la amistad, la compañía y esos pequeños compañeros que alegran cualquier espacio.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo  patito", value: "pato", precio: 30000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 60000, defecto: true }
                ]
            },
            {
                nombre: "Color Pato #1",
                items: [
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa",defecto: true  },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
            {
                nombre: "Color Pato #2",
                items: [
                    { nombre: "Blanco", value: "blanco",defecto: true  },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Amarillo", value: "amarillo"},
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" }

                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            },
            {
                nombre: "Accesorios",
                items: [
                    { nombre: "Impermeable de lluvia (1und)", value: "lluvia", multiplicador: 1.50 },
                    { nombre: "Pañuelo (1und)", value: "panuelo", multiplicador: 1.20 },
                    { nombre: "Sombrero (1und)", value: "sombrero", multiplicador: 1.20 }
                ]
            },
            
        ]
    },

    {
        id: "tom-jerry",
        categoria: "parejas",
        nombre: "Tom + Jerry",
        precio: 70000,
        imagen: "assets/img/catálogo/tommy-pareja.png",
        alt: "Tom y Jerry tejidos a crochet como un dúo de personajes.",
        historia: "Dos rivales que pueden pasar el día persiguiéndose, pero que nunca dejan de formar parte de la misma historia. Un dúo lleno de humor, travesuras y nostalgia.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Amigurumi · Parejas",
        opciones: [
            {
                nombre: "Combinación",
                items: [
                    { nombre: "Solo Tom", value: "tom", precio: 40000 },
                    { nombre: "Solo Jerry", value: "jerry", precio: 40000 },
                    { nombre: "Los dos juntos", value: "ambos", precio: 70000, defecto: true }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },



    // =====================================================
    // REGALO
    // =====================================================

    {
        id: "aretes-girasol",
        categoria: "regalo",
        nombre: "Aretes de girasol",
        precio: 18000,
        imagen: "assets/img/catálogo/aretes-girasol.png",
        alt: "Par de aretes tejidos con flores de girasol amarillas y centros marrones.",
        historia: "Pequeños girasoles para llevar un pedacito de luz contigo. Inspirados en la alegría y la vitalidad que hacen florecer hasta los días más grises.",
        materiales: "Hilo de algodón mercerizado y ganchos metálicos para aretes.",
        etiqueta: "Accesorio · Regalos",
        opciones: []
    },

    {
        id: "aretes-sakura",
        categoria: "regalo",
        nombre: "Aretes Sakura",
        precio: 10000,
        imagen: "assets/img/catálogo/arretes-sakura.png",
        alt: "Par de aretes tejidos con flores de sakura rosadas y pequeños detalles en el centro.",
        historia: "Delicadas flores de sakura que recuerdan que la belleza también puede estar en lo pasajero. Un detalle inspirado en la primavera, la delicadeza y los nuevos comienzos.",
        materiales: "Hilo de algodón mercerizado y ganchos metálicos para aretes.",
        etiqueta: "Accesorio · Regalos",
        opciones: []
    },

    {
        id: "bolso-estrella",
        categoria: "regalo",
        nombre: "Bolso estrella",
        precio: 150000,
        imagen: "assets/img/catálogo/bolso-estrella.png",
        alt: "Bolso tejido de color claro con una estrella decorativa en el centro y asas.",
        historia: "Estrellas que te acompañan a donde vayas. Un bolso que combina practicidad con algo que te representa.",
        materiales: "Lana acrílica de grosor medio y forro textil.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Negro + Blanco", value: "nebla", defecto: true},
                    { nombre: "Rosa + Blanco", value: "robla"},
                    { nombre: "Rojo + Negro", value: "rone"},
                    { nombre: "Blanco + Morado", value: "nemo"},
                    { nombre: "Azul + Blanco", value: "azbla"},
                    { nombre: "Amarillo + Blanco", value: "ambla"}
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeña: 30cm x 33cm.", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediana: 41cm x 36cm. ", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande: 46cm x 41cm.", value: "grande", multiplicador: 1.50 }
                ]
            }
        ]

    },

    {
        id: "bolso-negro",
        categoria: "regalo",
        nombre: "Bolso negro",
        precio: 120000,
        imagen: "assets/img/catálogo/bolso-negro.png",
        alt: "Bolso tejido de color negro con asas y detalles decorativos.",
        historia: "Sencillo, versátil y elegante, este bolso está hecho para acompañar diferentes estilos. Un básico tejido que demuestra que lo práctico también puede tener encanto.",
        materiales: "Lana acrílica de grosor medio y forro textil.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde", defecto: true },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Gris", value: "gris" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeña: 30cm x 33cm.", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediana: 41cm x 36cm. ", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande: 46cm x 41cm.", value: "grande", multiplicador: 1.50 }
                ]
            }
        ]
    },

    {
        id: "bolso-rosa",
        categoria: "regalo",
        nombre: "Bolso rosa",
        precio: 200000,
        imagen: "assets/img/catálogo/bolso-rosa.png",
        alt: "Bolso tejido de color rosa claro con una moña decorativa en el frente y asas.",
        historia: "Un bolso pensado para quienes disfrutan de los detalles dulces. Su tono rosa y su pequeña moña convierten un accesorio cotidiano en algo especial.",
        materiales: "Lana acrílica de grosor medio y forro textil.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    
                    { nombre: "Rosa + Blanco", value: "robla", defecto: true},
                    { nombre: "Negro + Blanco", value: "nebla"},
                    { nombre: "Rojo + Negro", value: "rone"},
                    { nombre: "Blanco + Morado", value: "nemo"},
                    { nombre: "Azul + Blanco", value: "azbla"},
                    { nombre: "Amarillo + Blanco", value: "ambla"}
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeña: 30cm x 33cm.", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediana: 41cm x 36cm. ", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande: 46cm x 41cm.", value: "grande", multiplicador: 1.50 }
                ]
            }
        ]
    },

    {
        id: "broche-flor",
        categoria: "regalo",
        nombre: "Broche flor",
        precio: 15000,
        imagen: "assets/img/catálogo/broche-flor.png",
        alt: "Broche tejido en forma de flor roja con centro decorativo y cierre posterior.",
        historia: "Una pequeña flor que encuentra su lugar donde quieras llevarla. Un detalle delicado inspirado en la belleza de la naturaleza y la elegancia de lo sencillo.",
        materiales: "Hilo de algodón y base metálica para broche.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (10 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (30 cm)", value: "grande", multiplicador: 1.50 }
                ]
            }
        ]
    },

    {
        id: "cactus",
        categoria: "regalo",
        nombre: "Cactus",
        precio: 25000,
        imagen: "assets/img/catálogo/captus.png",
        alt: "Cactus decorativo tejido a crochet de color verde con forma cilíndrica.",
        historia: "Aunque crezca en lugares difíciles, el cactus encuentra la manera de seguir adelante. Este pequeño detalle representa resistencia, naturaleza y belleza sin necesidad de grandes cuidados.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "cinta",
        categoria: "regalo",
        nombre: "Cinta",
        precio: 20000,
        imagen: "assets/img/catálogo/cinta.png",
        alt: "Cinta tejida a crochet para el cabello en un tono claro.",
        historia: "Un pequeño detalle para completar un estilo sin complicarlo. Esta cinta combina la delicadeza de lo tejido con la sencillez de un accesorio para todos los días.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "diadema-floral",
        categoria: "regalo",
        nombre: "Diadema floral",
        precio: 8000,
        imagen: "assets/img/catálogo/diadema-florsencilla.png",
        alt: "Diadema tejida decorada con pequeñas flores de colores.",
        historia: "Pequeñas flores que transforman una diadema cotidiana en un detalle especial. Inspirada en la primavera, la delicadeza y la alegría de llevar algo hecho a mano.",
        materiales: "Lana acrílica suave de grosor medio y base de diadema.",
        etiqueta: "Accesorio · Regalos",
        opciones: []
    },

    {
        id: "flor-rapunzel",
        categoria: "regalo",
        nombre: "Flor de Rapunzel",
        precio: 40000,
        imagen: "assets/img/catálogo/flor-rapunzel.png",
        alt: "Flor amarilla tejida a crochet inspirada en la flor de Rapunzel, con hojas verdes.",
        historia: "Una pequeña flor inspirada en la magia de una historia donde la luz y la esperanza tienen un papel especial. Un detalle que representa renovación, belleza y nuevos comienzos.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "girasol",
        categoria: "regalo",
        nombre: "Girasol",
        precio: 25000,
        imagen: "assets/img/catálogo/girasol.png",
        alt: "Girasol tejido a crochet con pétalos amarillos, centro marrón y tallo verde.",
        historia: "Siempre buscando la luz, el girasol se convirtió en símbolo de alegría y vitalidad. Una flor tejida para recordar que incluso los pequeños detalles pueden iluminar un espacio.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.60 },
                    { nombre: "Mediano (20 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (40 cm)", value: "grande", multiplicador: 2.10 }
                ]
            }
        ]
    },

    {
        id: "llavero-garfield",
        categoria: "regalo",
        nombre: "Llavero Garfield",
        precio: 15000,
        imagen: "assets/img/catálogo/llavero-Garfield.png",
        alt: "Llavero tejido a crochet de Garfield en tamaño pequeño.",
        historia: "Garfield sabe que una buena siesta, algo de comida y evitar responsabilidades pueden ser todo un arte. Un pequeño compañero inspirado en el humor y la pereza más divertida.",
        materiales: "Hilo de algodón y argolla metálica para llavero.",
        etiqueta: "Llavero · Regalos",
        opciones: [
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediano (12 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (15 cm)", value: "grande", multiplicador: 1.25 }
                ]
            }
        ]
    },

    {
        id: "llaveros-fnaf",
        categoria: "regalo",
        nombre: "Llaveros FNAF",
        precio: 15000,
        imagen: "assets/img/catálogo/llaveros-fnaf.png",
        alt: "Conjunto de pequeños llaveros tejidos a crochet inspirados en Five Nights at Freddy's.",
        historia: "Pequeños personajes nacidos de una historia llena de misterios, sustos y noches que parecen no terminar. Un conjunto para llevar un poco de ese universo contigo.",
        materiales: "Hilo de algodón y argollas metálicas para llavero.",
        etiqueta: "Llaveros · Regalos",
        opciones: [
            {
                nombre: "Personaje",
                items: [
                    { nombre: "Freddy", value: "freddy", defecto: true },
                    { nombre: "Bonnie", value: "bonnie" },
                    { nombre: "Chica", value: "chica" },
                    { nombre: "Foxy", value: "foxy" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediano (12 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (15 cm)", value: "grande", multiplicador: 1.25 }
                ]
            }
        ]
    },

    {
        id: "llaveros-hora-aventura",
        categoria: "regalo",
        nombre: "Llaveros Hora de Aventura",
        precio: 15000,
        imagen: "assets/img/catálogo/llaveros-horadeaventura.png",
        alt: "Conjunto de pequeños llaveros tejidos a crochet inspirados en Hora de Aventura.",
        historia: "Finn y sus amigos convierten cada día en una aventura diferente. Estos pequeños llaveros llevan consigo el espíritu de amistad, imaginación y diversión de ese mundo.",
        materiales: "Hilo de algodón y argollas metálicas para llavero.",
        etiqueta: "Llaveros · Regalos",
        opciones: [
            {
                nombre: "Personaje",
                items: [
                    { nombre: "Finn", value: "finn", defecto: true },
                    { nombre: "Jake", value: "jake" },
                    { nombre: "Bmo", value: "bmo" },
                    { nombre: "Trompi", value: "trompi" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediano (12 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (15 cm)", value: "grande", multiplicador: 1.25 }
                ]
            }
        ]
    },

    {
        id: "llaveros-studio-ghibli",
        categoria: "regalo",
        nombre: "Llaveros Studio Ghibli",
        precio: 20000,
        imagen: "assets/img/catálogo/llaveros-studio ghibli.png",
        alt: "Conjunto de pequeños llaveros tejidos a crochet inspirados en personajes de Studio Ghibli.",
        historia: "Pequeños personajes inspirados en mundos donde la naturaleza, la magia y las emociones se encuentran. Un detalle para llevar contigo un pedacito de esas historias.",
        materiales: "Hilo de algodón y argollas metálicas para llavero.",
        etiqueta: "Llaveros · Regalos",
        opciones: [
            {
                nombre: "Personaje",
                items: [
                    { nombre: "Sin cara", value: "sin-cara" },
                    { nombre: "Totoro", value: "totoro", defecto: true },
                    { nombre: "Calcifer", value: "calcifer" },
                    { nombre: "Jiji", value: "jiji" },
                    { nombre: "Porco", value: "porco" },
                    { nombre: "Kodama", value: "kodama" }
                ]
            },
            {
                nombre: "Tamaño",
                items: [
                    { nombre: "Pequeño (8 cm)", value: "pequeno", multiplicador: 0.80 },
                    { nombre: "Mediano (12 cm)", value: "mediano", multiplicador: 1.00, defecto: true },
                    { nombre: "Grande (15 cm)", value: "grande", multiplicador: 1.25 }
                ]
            }
        ]
    },

    {
        id: "mona-romantica",
        categoria: "regalo",
        nombre: "Moña romántica",
        precio: 30000,
        imagen: "assets/img/catálogo/moña-romantica.png",
        alt: "Moña tejida a crochet de color rojo y tamaño grande.",
        historia: "Una gran moña roja para añadir un toque especial a cualquier estilo. Inspirada en el romance, la delicadeza y esos pequeños detalles que dicen mucho.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },

    {
        id: "monas-varios-colores",
        categoria: "regalo",
        nombre: "3 Moñas surtidas",
        precio: 20000,
        imagen: "assets/img/catálogo/moñas.png",
        alt: "Conjunto de moñas tejidas a crochet en diferentes colores.",
        historia: "Una colección de colores para que cada día tenga su propio estilo. Varias pequeñas piezas que celebran la creatividad, la variedad y la posibilidad de elegir según el momento.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Monocromático", value: "monocromatico", defecto: true },
                    { nombre: "Tierra", value: "tierra" },
                    { nombre: "azul, blanco, negro", value: "formal" },
                    { nombre: "rojo, azul, blanco", value: "casual" }
                ]
            }
        ]
    },

    {
        id: "mona-tupida",
        categoria: "regalo",
        nombre: "Moña repollo",
        precio: 25000,
        imagen: "assets/img/catálogo/moña-tupida.png",
        alt: "Moña grande y tupida tejida a crochet de color rojo.",
        historia: "Una moña con presencia, volumen y personalidad. Un accesorio pensado para convertir un detalle sencillo en el protagonista del look.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },


    {
        id: "panoleta-flores-blancas",
        categoria: "regalo",
        nombre: "Pañoleta flores blancas",
        precio: 30000,
        imagen: "assets/img/catálogo/pañoleta-blancaflores.png",
        alt: "Pañoleta tejida a crochet de color claro decorada con flores blancas.",
        historia: "Flores blancas tejidas sobre una pañoleta para crear un accesorio delicado y natural. Un detalle inspirado en la frescura, la elegancia y la primavera.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color de panñoleta",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco", defecto: true }
                ]
            },
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa", defecto: true },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },

    {
        id: "panoleta-roja",
        categoria: "regalo",
        nombre: "Pañoleta básica",
        precio: 28000,
        imagen: "assets/img/catálogo/pañoleta-roja.png",
        alt: "Pañoleta tejida a crochet de color rojo con detalles decorativos.",
        historia: "Un accesorio con un color intenso para quienes prefieren que sus detalles tengan personalidad. Una pañoleta que combina el trabajo artesanal con un estilo llamativo.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },

    {
        id: "pulsera-rosa",
        categoria: "regalo",
        nombre: "Pulsera rosa",
        precio: 20000,
        imagen: "assets/img/catálogo/pulsera-rosa.png",
        alt: "Pulsera tejida decorada con pequeñas flores de color rosado.",
        historia: "Pequeñas flores rosadas que convierten una pulsera en un detalle delicado. Inspirada en la primavera, la ternura y la belleza de llevar algo hecho especialmente a mano.",
        materiales: "Hilo de algodón y detalles decorativos.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa", defecto: true },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },

    {
        id: "pulsera-tulipanes",
        categoria: "regalo",
        nombre: "Pulsera de tulipanes",
        precio: 22000,
        imagen: "assets/img/catálogo/pulsera-tulipanes.png",
        alt: "Pulsera tejida decorada con pequeños tulipanes.",
        historia: "Tulipanes tejidos para llevar un pequeño jardín alrededor de la muñeca. Un accesorio inspirado en la elegancia, la primavera y los nuevos comienzos.",
        materiales: "Hilo de algodón y detalles decorativos.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Rosa", value: "rosa" },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            }
        ]
    },

    {
        id: "ramo-tulipanes",
        categoria: "regalo",
        nombre: "Ramo de tulipanes",
        precio: 65000,
        imagen: "assets/img/catálogo/ramo-5-tulipanes.png",
        alt: "Ramo tejido a crochet compuesto por varios tulipanes.",
        historia: "Un ramo que conserva la belleza de los tulipanes sin marchitarse. Una pieza pensada para regalar un recuerdo que pueda permanecer mucho más tiempo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa", defecto: true },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            },
            {
                nombre: "Cantidad de flores",
                items: [
                    { nombre: "Flor", value: "uno", multiplicador: 0.20},
                    { nombre: "5 flores", value: "cinco", multiplicador: 1.00, defecto: true},
                    { nombre: "6 flores", value: "seis", multiplicador: 1.20 },
                    { nombre: "7 flores", value: "siete", multiplicador: 1.40 }
                ]
            },
        ]
    },

    {
        id: "ramo-amarillo",
        categoria: "regalo",
        nombre: "Ramo amarillo",
        precio: 65000,
        imagen: "assets/img/catálogo/ramo-amarrillo.png",
        alt: "Ramo tejido a crochet compuesto por varias flores amarillas.",
        historia: "Un ramo lleno de color para celebrar alegría, cariño y buenos momentos. Flores tejidas que pueden convertirse en un regalo duradero para alguien especial.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa", defecto: true },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            },
            {
                nombre: "Cantidad de flores",
                items: [
                    { nombre: "Flor", value: "uno", multiplicador: 0.20},
                    { nombre: "5 flores", value: "cinco", multiplicador: 1.00, defecto: true},
                    { nombre: "6 flores", value: "seis", multiplicador: 1.20 },
                    { nombre: "7 flores", value: "siete", multiplicador: 1.40 }
                ]
            },
        ]
    },

    {
        id: "ramo-rosas",
        categoria: "regalo",
        nombre: "Ramo de rosas",
        precio: 70000,
        imagen: "assets/img/catálogo/rosas.png",
        alt: "Ramo tejido a crochet compuesto por varias rosas rojas.",
        historia: "Las rosas rojas han acompañado durante siglos las historias de amor y pasión. Este ramo convierte ese símbolo clásico en un regalo tejido que puede conservarse como recuerdo.",
        materiales: "Hilo Coral 100% acrílico y relleno siliconado.",
        etiqueta: "Decoración · Regalos",
        opciones: [
            {
                nombre: "Color de flores",
                items: [
                    { nombre: "Amarillo", value: "amarillo" },
                    { nombre: "Rojo", value: "rojo" },
                    { nombre: "Rosa", value: "rosa", defecto: true },
                    { nombre: "Morado", value: "morado" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Verde", value: "verde" },
                    { nombre: "Marrón", value: "marron" },
                    { nombre: "Negro", value: "negro" },
                    { nombre: "Blanco", value: "blanco" }
                ]
            },
            {
                nombre: "Cantidad de flores",
                items: [
                    { nombre: "Flor", value: "uno", multiplicador: 0.20},
                    { nombre: "5 flores", value: "cinco", multiplicador: 1.00, defecto: true},
                    { nombre: "6 flores", value: "seis", multiplicador: 1.20 },
                    { nombre: "7 flores", value: "siete", multiplicador: 1.40 }
                ]
            },
        ]
    },

    {
        id: "sombrero-animales",
        categoria: "regalo",
        nombre: "Sombrero de animales",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-animales.png",
        alt: "Sombrero tejido a crochet con diseño de animales y detalles decorativos.",
        historia: "Orejas, formas y detalles divertidos convierten este sombrero en algo más que un accesorio. Una pieza pensada para añadir un toque juguetón y tierno a cualquier estilo.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tipo de Sombrero",
                items: [
                    { nombre: "Sapo", value: "sapo", defecto: true },
                    { nombre: "Vaca", value: "vaca" },
                    { nombre: "Gato", value: "gato" },
                    { nombre: "Oso", value: "oso" }
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-cute",
        categoria: "regalo",
        nombre: "Sombrero cute",
        precio: 40000,
        imagen: "assets/img/catálogo/sombrero-cute.png",
        alt: "Sombrero tejido a crochet con diseño tierno y detalles decorativos.",
        historia: "Un accesorio lleno de pequeños detalles adorables para quienes disfrutan de los estilos tiernos. Una pieza que convierte cualquier conjunto en algo más personal.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tipo de Sombrero",
                items: [
                    { nombre: "Fresa", value: "fresa", defecto: true },
                    { nombre: "Sapito", value: "sapito" },
                    { nombre: "Pollito", value: "pollito" }
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-duolingo",
        categoria: "regalo",
        nombre: "Sombrero Duolingo",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-duolingo.png",
        alt: "Sombrero tejido a crochet inspirado en el personaje de Duolingo.",
        historia: "Aprender idiomas también puede tener su lado divertido. Este sombrero lleva el característico espíritu de Duolingo a un accesorio tejido pensado para destacar.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-fresa",
        categoria: "regalo",
        nombre: "Sombrero fresa",
        precio: 40000,
        imagen: "assets/img/catálogo/sombrero-fresa.png",
        alt: "Sombrero tejido a crochet con diseño de fresa, color rojo y detalles de semillas.",
        historia: "Rojo, dulce y lleno de pequeños detalles que recuerdan a una fresa. Un accesorio inspirado en la naturaleza y en esa estética divertida que nunca pasa desapercibida.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-gato",
        categoria: "regalo",
        nombre: "Sombrero gato",
        precio: 40000,
        imagen: "assets/img/catálogo/sombrero-gato.png",
        alt: "Sombrero tejido a crochet con diseño de gato, orejas puntiagudas y detalles faciales.",
        historia: "Unas pequeñas orejas pueden cambiar por completo un look. Este sombrero combina la comodidad de un accesorio tejido con la ternura de los gatos.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Color",
                items: [
                    { nombre: "Negro + Blanco", value: "nebla", defecto: true},
                    { nombre: "Rosa + Blanco", value: "robla"},
                    { nombre: "Rojo + Negro", value: "rone"},
                    { nombre: "Blanco + Morado", value: "nemo"},
                    { nombre: "Azul + Blanco", value: "azbla"},
                    { nombre: "Amarillo + Blanco", value: "ambla"}
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    
    

    {
        id: "sombrero-snoopy",
        categoria: "regalo",
        nombre: "Sombrero Snoopy",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-snoppy.png",
        alt: "Sombrero tejido a crochet inspirado en Snoopy, con detalles de su rostro.",
        historia: "El estilo tranquilo de Snoopy convertido en un accesorio para llevar contigo. Una pieza inspirada en la amistad, la nostalgia y el encanto del personaje.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-south-park",
        categoria: "regalo",
        nombre: "Sombrero South Park",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-southpark.png",
        alt: "Sombrero tejido a crochet inspirado en un personaje de South Park.",
        historia: "Un accesorio inspirado en el humor irreverente y el estilo característico de South Park. Una pieza para quienes disfrutan de llevar sus gustos de una manera diferente.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tipo de Sombrero",
                items: [
                    { nombre: "Eric", value: "eric", defecto: true },
                    { nombre: "Kenny", value: "kenny" },
                    { nombre: "Kyle", value: "kyle" },
                    { nombre: "Stan", value: "stan" }
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-spiderman",
        categoria: "regalo",
        nombre: "Sombrero Spider-Man",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-spiderman.png",
        alt: "Sombrero tejido a crochet inspirado en Spider-Man, con colores rojo y azul y detalles de máscara.",
        historia: "Los colores y detalles del héroe arácnido convertidos en un accesorio tejido. Una pieza inspirada en aventura, responsabilidad y ese pequeño deseo de sentirse héroe por un día.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tipo de Sombrero",
                items: [
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Blanco", value: "blanco" },
                    { nombre: "Negro", value: "negro" }
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-tortuga",
        categoria: "regalo",
        nombre: "Sombrero tortuga",
        precio: 40000,
        imagen: "assets/img/catálogo/sombrero-tortuganinja.png",
        alt: "Sombrero tejido a crochet con diseño de tortuga ninja, color verde y detalles de caparazón.",
        historia: "Misterioso, divertido y con detalles inspirados en una tortuga ninja. Un accesorio que recuerda que no siempre hay que ir rápido para disfrutar el camino.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [
            {
                nombre: "Tipo de Sombrero",
                items: [
                    { nombre: "Rojo", value: "rojo", defecto: true },
                    { nombre: "Marino", value: "marino" },
                    { nombre: "Azul", value: "azul" },
                    { nombre: "Naranja", value: "naranje" }
                ]
            },
            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },

    {
        id: "sombrero-totoro",
        categoria: "regalo",
        nombre: "Sombrero Totoro",
        precio: 45000,
        imagen: "assets/img/catálogo/sombrero-totoro.png",
        alt: "Sombrero tejido a crochet inspirado en Totoro, de color gris y con orejas.",
        historia: "Un pequeño pedazo del mundo de Totoro convertido en un accesorio. Inspirado en la naturaleza, la imaginación y la magia que puede esconderse en los lugares cotidianos.",
        materiales: "Lana acrílica suave de grosor medio.",
        etiqueta: "Accesorio · Regalos",
        opciones: [

            {
                nombre: "Talla",
                items: [
                    { nombre: "talla única", value: "unico", defecto: true }
                ]
            }
        ]
    },


]
module.exports = productos;