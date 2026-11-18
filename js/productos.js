/* =========================================================================
   EGRAN · Herramienta Comercial — Productos
   Cada producto sigue la misma plantilla de etapas (ETAPAS).
   Bloques: p (párrafo), bullets, callout, pasos, tabla, qa (pregunta y respuesta).
   v:1 en un bloque = dato a validar con el molino (se muestra con una marca).
   ========================================================================= */

const ETAPAS = [
  { id: "resumen",  icono: "⚡", titulo: "En 30 segundos",            bajada: "Lo esencial para repasar antes de entrar a una reunión." },
  { id: "origen",   icono: "🌱", titulo: "Origen",                    bajada: "Qué es, de dónde viene, cuándo se siembra y se cosecha." },
  { id: "planta",   icono: "🏭", titulo: "Planta y selección",        bajada: "Qué le pasa al grano desde que llega al molino." },
  { id: "envasado", icono: "📦", titulo: "Envasado y formatos",       bajada: "Presentaciones, vida útil y cómo se conserva." },
  { id: "usos",     icono: "🍽️", titulo: "Usos y consumo",            bajada: "Cómo se usa en la casa, en la gastronomía y en la industria." },
  { id: "cuidados", icono: "🛡️", titulo: "Cuidados y buenos usos",    bajada: "Buenas prácticas y qué puede pasar con el producto." },
  { id: "contexto", icono: "📈", titulo: "Precio y contexto",         bajada: "Qué mueve el precio y qué conviene anticipar al cliente." },
  { id: "egran",    icono: "⭐", titulo: "Por qué Egran",             bajada: "Los argumentos para defender el producto." },
  { id: "preguntas",icono: "💬", titulo: "Preguntas del cliente",     bajada: "Respuestas cortas para contestar en el momento." },
];

const FAMILIAS = [
  { id: "leg", titulo: "Legumbres" },
  { id: "cer", titulo: "Cereales y maíces" },
  { id: "har", titulo: "Harinas" },
  { id: "snk", titulo: "Snacks y barras" },
  { id: "com", titulo: "Comidas listas" },
];

/* Productos con ficha completa */
const PRODUCTOS = [

  // =================================================================== LENTEJA
  {
    id: "lenteja", familia: "leg", nombre: "Lentejas y lentejones", img: "img/productos/lenteja.webp",
    bajada: "La legumbre que más se consume en Argentina.",
    etapas: {
      resumen: [
        { t: "bullets", x: [
          "Es la legumbre de mayor consumo en el país: cerca de 6 de cada 10 kilos de legumbres que se comen en Argentina son lentejas.",
          "Es un cultivo de invierno: se siembra en otoño y se cosecha en primavera. La lenteja nueva entra entre diciembre y enero.",
          "Lenteja y lentejón son la misma especie. El lentejón es la variedad de grano grande.",
          "El color cambia de forma natural con el tiempo y la luz: un grano más oscuro no es un grano en mal estado.",
          "Se vende más en invierno: conviene que el cliente arme stock antes de mayo.",
          "Egran tiene la línea completa: lenteja, lentejón, harina de lenteja, jardinera y guiso de lentejas listo.",
        ]},
      ],
      origen: [
        { t: "p", x: "La lenteja (Lens culinaris) es una legumbre: crece en vainas chatas que tienen uno o dos granos. Es de las primeras plantas que cultivó el ser humano y hoy es un alimento básico en todo el mundo." },
        { t: "label", x: "Cuándo se siembra y se cosecha" },
        { t: "p", x: "En Argentina es un cultivo de invierno. Se siembra entre mayo y julio, florece a fines del invierno y se cosecha entre noviembre y diciembre. Por eso la lenteja \"nueva\" llega al mercado alrededor de fin de año." },
        { t: "label", x: "Dónde se produce" },
        { t: "p", x: "La zona histórica es el norte de Buenos Aires y el sur de Santa Fe. En la campaña 2025/26 se sembraron unas 40.000 hectáreas, cerca de un 27 % más que el año anterior, con una producción estimada de 42.000 toneladas (Secretaría de Agricultura)." },
        { t: "p", v: 1, x: "Egran compra la lenteja a productores y acopios de esa zona. [Confirmar con el molino de dónde viene y si hay origen importado según el año.]" },
        { t: "label", x: "Lenteja y lentejón" },
        { t: "p", x: "Son la misma especie. El Código Alimentario los separa por el tamaño del grano: el lentejón es la variedad de grano grande (Lens culinaris macrosperma), de unos 7 a 9 mm, y la lenteja es la de grano más chico." },
        { t: "tabla", h: ["", "Lenteja", "Lentejón"], f: [
          ["Grano", "Más chico", "Grande (7 a 9 mm)"],
          ["En la olla", "Se ablanda más, da cuerpo al guiso", "Mantiene la forma, luce en el plato"],
          ["Ideal para", "Guisos, sopas, hamburguesas, purés", "Guisos de cocción lenta, ensaladas, rellenos"],
        ]},
        { t: "label", x: "¿Por qué hay lentejas de distintos colores?" },
        { t: "p", x: "El color está en la cáscara del grano (el tegumento) y depende de tres cosas:" },
        { t: "bullets", x: [
          "La variedad: hay lentejas verdes, verde amarillentas, marrones (pardinas), rojas y negras.",
          "El clima en la cosecha: si llueve con el cultivo listo para cosechar, el grano se puede manchar u oscurecer.",
          "El tiempo y la luz: la cáscara tiene compuestos naturales (taninos) que se oxidan con los meses, la luz, el calor y la humedad. Por eso la lenteja recién cosechada es más clara y se va poniendo más marrón.",
        ]},
        { t: "callout", tipo: "idea", x: "Un grano más oscuro suele ser un grano con más tiempo de guardado. Sigue siendo apto para consumir; lo que puede cambiar es que tarde un poco más en cocinarse. Explicarlo así le da tranquilidad al cliente." },
        { t: "p", v: 1, x: "[Validar con el molino lo que contó Martín sobre \"cuándo se tiñe\": si se refiere a este oscurecimiento natural o a otra práctica del mercado.]" },
      ],
      planta: [
        { t: "p", x: "El grano llega del campo con tierra, restos de la planta, piedras, granos partidos y granos de otros cultivos. En la planta se lo limpia y se lo clasifica para que el paquete tenga granos parejos y limpios." },
        { t: "pasos", v: 1, x: [
          ["Recepción y control", "Se toma una muestra de cada carga y se mide humedad (las legumbres secas no deben pasar el 13 %), impurezas y estado del grano."],
          ["Prelimpieza", "Se sacan la tierra, el polvo y los restos grandes de la planta."],
          ["Zarandas", "Mallas que separan por tamaño: así se separa la lenteja del lentejón y se sacan los granos partidos."],
          ["Mesa densimétrica", "Separa por peso: saca piedras y granos vacíos o livianos."],
          ["Selección por color", "Una selectora óptica descarta los granos manchados o de otro color."],
          ["Control final", "Se revisa la muestra antes de envasar y queda registrada por lote (trazabilidad)."],
        ]},
        { t: "p", v: 1, x: "[Confirmar con planta qué equipos usa Egran en cada paso y qué controles registra.]" },
        { t: "callout", tipo: "idea", x: "Todo el proceso se hace bajo la certificación FSSC 22000, una norma internacional de inocuidad alimentaria. Cada lote se puede rastrear: si un cliente tiene una consulta, se sabe de qué partida salió." },
      ],
      envasado: [
        { t: "tabla", h: ["Presentación", "Bulto", "Para quién"], f: [
          ["400 g", "Bolsón de 10", "Góndola, almacén, súper"],
          ["5 kg", "Bolsa", "Gastronomía, comedores, fraccionadores chicos"],
          ["25 kg", "Bolsa", "Mayoristas, fraccionadores, industria"],
        ]},
        { t: "p", x: "El lentejón tiene las mismas tres presentaciones. La harina de lenteja viene en bolsa de 25 kg y el guiso de lentejas listo en envase de 500 g (caja de 12)." },
        { t: "p", v: 1, x: "Vida útil: [confirmar con Calidad la vida útil de la lenteja envasada y cómo figura en el rótulo]." },
        { t: "label", x: "Cómo se conserva" },
        { t: "bullets", x: [
          "En lugar fresco, seco y lejos de la luz: la luz y el calor aceleran el oscurecimiento.",
          "Una vez abierto, en un frasco o recipiente hermético.",
          "En el depósito del cliente: sobre tarimas, lejos de paredes húmedas y sin sol directo.",
        ]},
      ],
      usos: [
        { t: "label", x: "En la casa" },
        { t: "bullets", x: [
          "Guiso de lentejas, el clásico del invierno.",
          "Ensaladas tibias o frías (mejor con lentejón, que mantiene la forma).",
          "Hamburguesas o medallones caseros.",
          "Sopas y cremas.",
          "Hummus de lentejas, una alternativa al de garbanzo.",
          "Rellenos de empanadas, tartas y pimientos.",
        ]},
        { t: "label", x: "En la gastronomía" },
        { t: "bullets", x: [
          "Rinde mucho: 1 kg seco da entre 2 y 2,5 kg cocido. Es de los platos con mejor costo por porción.",
          "No necesita remojo, así que se resuelve en el día.",
          "Sirve para menús vegetarianos y veganos, que cada vez piden más restaurantes y comedores.",
          "Comedores escolares y de empresas: plato rendidor, nutritivo y fácil de hacer en volumen.",
        ]},
        { t: "label", x: "En la industria" },
        { t: "bullets", x: [
          "Harina de lenteja Egran (sin gluten): pastas, panificados, rebozadores, hamburguesas vegetales y premezclas.",
          "Comidas listas y conservas.",
        ]},
        { t: "label", x: "Cómo se cocina" },
        { t: "pasos", x: [
          ["Revisar y enjuagar", "Se pasa por agua fría antes de cocinar."],
          ["Remojo (opcional)", "No hace falta. Si se remoja 1 o 2 horas, se cocina más rápido."],
          ["Cocción", "Unos 25 a 35 minutos la lenteja y un poco más el lentejón. Se sala al final, porque la sal al principio endurece la cáscara."],
        ]},
      ],
      cuidados: [
        { t: "label", x: "Buenas prácticas para recomendar" },
        { t: "bullets", x: [
          "Enjuagarlas siempre antes de cocinar.",
          "Guardarlas en un recipiente cerrado una vez abiertas.",
          "Rotar el stock: lo primero que entra es lo primero que sale.",
          "No guardarlas al lado de productos de limpieza o con olor fuerte: el grano absorbe olores.",
        ]},
        { t: "label", x: "Lo que puede pasar y cómo explicarlo" },
        { t: "qa", q: "Color más oscuro que el de otra compra", a: "Es el oscurecimiento natural del grano con el tiempo. Sigue siendo apto. Puede tardar un poco más en cocinarse." },
        { t: "qa", q: "Gorgojos (bichitos)", a: "Es un insecto que ataca a las legumbres guardadas mucho tiempo con calor. Se previene con un lugar fresco y seco, recipiente cerrado y rotación del stock. Si un consumidor lo encuentra, se lo deriva a Post Venta (formulario en egran.com.ar o WhatsApp de reclamos), que responde en menos de 48 h." },
        { t: "qa", q: "Una piedrita o un grano de otro tipo", a: "Es poco frecuente gracias a la limpieza y la selección, pero el grano viene del campo y por eso siempre se recomienda revisar y enjuagar. Si pasa, también va a Post Venta." },
        { t: "qa", q: "Quedan duras después de cocinarlas", a: "Suele pasar con agua muy dura, con sal agregada al principio o con granos con mucho tiempo de guardado. Remojarlas un rato y salarlas al final lo resuelve." },
      ],
      contexto: [
        { t: "label", x: "Lo que conviene anticipar" },
        { t: "bullets", x: [
          "Estacionalidad: la demanda sube fuerte en otoño e invierno (guisos y sopas). Al cliente le conviene armar stock antes de mayo.",
          "Cosecha: la lenteja nueva llega entre diciembre y enero. Antes de la cosecha la oferta es más corta y el precio suele estar más firme.",
          "Producción chica: Argentina siembra poca lenteja comparada con otros cultivos (cerca del 4 % de la superficie de legumbres), así que un mal año de clima en la zona productora se nota rápido en el precio.",
          "Flete: es un producto de mucho peso y poco precio por kilo. Cuanto más lejos del molino, más pesa el flete en el precio final.",
        ]},
        { t: "p", v: 1, x: "[Sumar con Egran: cómo viene la cosecha 2026/27 y si se espera un cambio de precio para el invierno 2027.]" },
      ],
      egran: [
        { t: "bullets", x: [
          "Grano limpio, seleccionado y de color parejo.",
          "Planta certificada FSSC 22000: trazabilidad de cada lote.",
          "Molino cordobés con experiencia desde 1938.",
          "Línea completa para armar la góndola de legumbres: lenteja, lentejón, garbanzo, porotos, arvejas y jardinera.",
          "Formatos para todos los canales: 400 g, 5 kg y 25 kg.",
          "Lo que sigue después del grano: harina de lenteja sin gluten y guiso de lentejas listo.",
          "Post Venta propio con respuesta en menos de 48 h.",
        ]},
      ],
      preguntas: [
        { t: "qa", q: "¿Cuál es la diferencia entre lenteja y lentejón?", a: "Son la misma especie. El lentejón es la variedad de grano grande: mantiene mejor la forma y luce en ensaladas. La lenteja es más chica y se ablanda más, ideal para guisos." },
        { t: "qa", q: "¿Por qué esta lenteja es más oscura?", a: "La cáscara se oscurece naturalmente con el tiempo, la luz y el calor. No significa que esté mala." },
        { t: "qa", q: "¿Hay que dejarlas en remojo?", a: "No hace falta. Si se remojan un rato, se cocinan más rápido." },
        { t: "qa", q: "¿Cuándo llega la lenteja nueva?", a: "Entre diciembre y enero, después de la cosecha de primavera." },
        { t: "qa", q: "¿Cuánto rinde?", a: "1 kg seco da entre 2 y 2,5 kg cocido." },
        { t: "qa", q: "¿Son sin TACC?", v: 1, a: "[Confirmar con Calidad si la lenteja Egran lleva el sello Sin TACC.]" },
      ],
    },
  },

  // ================================================================ PISINGALLO
  {
    id: "pisingallo", familia: "cer", nombre: "Maíz pisingallo", img: "img/productos/pisingallo.webp",
    bajada: "El maíz que explota. Argentina es el mayor exportador del mundo.",
    etapas: {
      resumen: [
        { t: "bullets", x: [
          "No es cualquier maíz: es una variedad especial con una cáscara muy dura que hace que el grano explote.",
          "Argentina es el principal exportador mundial de pisingallo: casi toda la producción se va afuera.",
          "Se siembra en primavera y se cosecha entre marzo y junio.",
          "Lo que define la calidad es cuánto crece al reventar y cuántos granos quedan sin explotar.",
          "Esta campaña hay menos oferta por las lluvias y el precio subió.",
          "Es uno de los productos Egran mejor valorados por los consumidores en Google.",
        ]},
      ],
      origen: [
        { t: "p", x: "El pisingallo (en otros países \"popcorn\") es una variedad de maíz que se cultiva solo para hacer pochoclo. El grano es más chico que el del maíz común y casi todo su interior es duro y vidrioso." },
        { t: "label", x: "¿Por qué explota?" },
        { t: "pasos", x: [
          ["Una gotita de agua adentro", "Cada grano guarda un poco de humedad (alrededor del 13 o 14 %) dentro de un almidón muy compacto."],
          ["Una cáscara que no deja escapar el vapor", "Al calentarse, esa agua se convierte en vapor. La cáscara (pericarpio) del pisingallo es dura e impermeable, así que el vapor queda atrapado y la presión sube."],
          ["El estallido", "Cerca de los 180 °C la cáscara no aguanta más y revienta. El almidón se infla de golpe como una espuma y se endurece al enfriarse: eso es el pochoclo."],
        ]},
        { t: "callout", tipo: "idea", x: "El maíz común no revienta porque su cáscara es más porosa: el vapor se escapa de a poco y el grano solo se tuesta. Por eso no cualquier maíz sirve para pochoclo." },
        { t: "label", x: "Mariposa y hongo" },
        { t: "p", x: "Al reventar, el grano toma dos formas posibles. La \"mariposa\" es grande, liviana y con alitas: es el pochoclo de cine, ideal para salado. El \"hongo\" es una bola más redonda y firme, que aguanta mejor el caramelo y el mezclado." },
        { t: "p", v: 1, x: "[Confirmar con el molino qué tipo predomina en el pisingallo Egran.]" },
        { t: "label", x: "Dónde y cuándo se produce" },
        { t: "bullets", x: [
          "Zonas: la zona núcleo maicera (Córdoba, Santa Fe y norte de Buenos Aires) aporta la mayor parte, después el NOA (zona de Las Lajitas, Salta) y el sudeste de Buenos Aires.",
          "Es un cultivo de verano: se siembra entre octubre y diciembre y se cosecha entre marzo y junio.",
          "Argentina produce alrededor de 150.000 toneladas por año y exporta cerca del 95 %. El pisingallo argentino es no transgénico, algo que valoran mucho los compradores de afuera.",
        ]},
        { t: "p", v: 1, x: "[Confirmar con el molino de qué zona compra Egran el pisingallo.]" },
      ],
      planta: [
        { t: "p", x: "En el pisingallo la selección es clave: un grano partido o dañado no revienta, y eso es lo primero que nota el consumidor." },
        { t: "pasos", v: 1, x: [
          ["Recepción y control", "Se mide la humedad del grano. Si el grano llega muy seco, revienta menos; si llega muy húmedo, se puede deteriorar."],
          ["Limpieza", "Se sacan tierra, polvo, restos de chala y marlo."],
          ["Zarandas", "Se separan los granos partidos y los muy chicos, que son los que suelen quedar sin reventar."],
          ["Mesa densimétrica", "Saca piedras y granos livianos o vacíos."],
          ["Prueba de reventado", "Se hace una prueba con una muestra para medir cuánto crece y cuántos granos quedan sin explotar."],
          ["Control final y lote", "Se registra cada lote para la trazabilidad."],
        ]},
        { t: "p", v: 1, x: "[Confirmar con planta qué pasos hace Egran y si mide el volumen de expansión en cada lote.]" },
      ],
      envasado: [
        { t: "tabla", h: ["Presentación", "Bulto", "Para quién"], f: [
          ["400 g", "Bolsón de 10", "Góndola, almacén, súper"],
          ["5 kg", "Bolsa", "Kioscos, cines, eventos, cumpleaños"],
          ["25 kg", "Bolsa", "Mayoristas, cines, fraccionadores, industria"],
        ]},
        { t: "p", v: 1, x: "Vida útil: [confirmar con Calidad la vida útil del pisingallo envasado]." },
        { t: "callout", tipo: "idea", x: "Lo que más cuida el envase es la humedad del grano. Si el grano se seca, revienta menos. Por eso es tan importante mantener el paquete cerrado." },
      ],
      usos: [
        { t: "label", x: "En la casa" },
        { t: "bullets", x: [
          "Pochoclo salado o dulce, la merienda o la noche de película.",
          "Pochoclo con caramelo, con chocolate o con especias (pimentón, queso rallado, hierbas).",
          "Cumpleaños y fiestas infantiles.",
          "Es un cereal integral: una opción de snack más simple que muchos productos de kiosco.",
        ]},
        { t: "label", x: "En la gastronomía y los eventos" },
        { t: "bullets", x: [
          "Cines, teatros, estadios, parques y ferias.",
          "Carritos de pochoclo, eventos y alquiler de máquinas.",
          "Bares y cervecerías: pochoclo de cortesía con la bebida.",
          "Rinde muchísimo: el grano puede crecer más de 30 veces su volumen.",
        ]},
        { t: "label", x: "En la industria" },
        { t: "bullets", x: [
          "Pochoclo envasado y acaramelado.",
          "Golosinas y mezclas de snacks.",
        ]},
      ],
      cuidados: [
        { t: "label", x: "Cómo hacer un buen pochoclo" },
        { t: "pasos", x: [
          ["Olla amplia con tapa", "Que cubra el fondo con una sola capa de granos."],
          ["Poco aceite y fuego medio-alto", "Lo justo para cubrir el fondo. Se calienta con 2 o 3 granos de prueba."],
          ["Cuando revientan los de prueba", "Se agregan los demás granos en una sola capa y se tapa."],
          ["Dejar salir el vapor", "Tapa apenas corrida o con agujeritos: así el pochoclo queda crocante y no gomoso."],
          ["Retirar a tiempo", "Cuando pasan 2 o 3 segundos entre un estallido y otro, se saca del fuego para que no se queme."],
          ["Sal o azúcar al final", "O el caramelo aparte, cuando el pochoclo ya está hecho."],
        ]},
        { t: "label", x: "Cómo guardarlo" },
        { t: "bullets", x: [
          "Paquete bien cerrado o frasco hermético.",
          "Lugar fresco y seco, sin sol.",
          "No en la heladera ni en el freezer: el frío seca el grano y después revienta menos.",
        ]},
        { t: "label", x: "Lo que puede pasar y cómo explicarlo" },
        { t: "qa", q: "Quedan muchos granos sin reventar", a: "Lo más común es que el grano se haya secado (paquete abierto mucho tiempo o guardado en la heladera), que el fuego haya estado bajo o que se hayan puesto muchos granos juntos. Con el grano guardado bien cerrado y fuego medio-alto se resuelve. Si el paquete estaba cerrado y pasa igual, va a Post Venta." },
        { t: "qa", q: "El pochoclo queda chiclozo", a: "Le faltó salida al vapor. Hay que correr un poco la tapa." },
        { t: "qa", q: "Se quema", a: "Fuego demasiado alto o se dejó en la olla después de que terminaron los estallidos." },
      ],
      contexto: [
        { t: "label", x: "Por qué subió el precio en 2026" },
        { t: "p", v: 1, x: "Las lluvias de esta campaña afectaron la cosecha de pisingallo: hubo lotes anegados que no se pudieron cosechar y grano que perdió calidad por exceso de humedad. Con menos oferta de grano bueno, el precio subió. [Completar con Egran las cifras y desde cuándo rige el aumento.]" },
        { t: "label", x: "Lo que hay que entender del mercado" },
        { t: "bullets", x: [
          "Es un producto de exportación: casi toda la producción argentina se vende afuera y se paga en dólares. El precio local sigue al precio de exportación, no al del maíz común.",
          "El precio puede ir por su cuenta: hubo años en que el pisingallo subió mientras el maíz común bajaba.",
          "Cuando la cosecha es mala, los exportadores compiten por el grano de mejor calidad, y eso también empuja el precio en el mercado interno.",
          "La cosecha nueva entra entre marzo y junio. Hasta entonces se trabaja con el grano de la campaña anterior.",
        ]},
        { t: "callout", tipo: "idea", x: "Cómo explicarlo al cliente: el aumento viene del campo y del mercado de exportación, no de una decisión de Egran. Lo que Egran sí garantiza es que el grano que llega a su góndola revienta parejo." },
      ],
      egran: [
        { t: "bullets", x: [
          "Estallido parejo y gran rendimiento por kilo.",
          "Uno de los productos Egran mejor valorados por los consumidores en Google.",
          "Grano limpio y seleccionado en planta certificada FSSC 22000.",
          "Formatos para la góndola (400 g) y para quien vende pochoclo hecho (5 y 25 kg).",
        ]},
        { t: "callout", tipo: "argumento", x: "El argumento de fondo: un pisingallo barato que deja muchos granos sin reventar termina saliendo más caro, porque rinde menos pochoclo por kilo. Para un cine o un carrito, la diferencia se ve en cada bolsa." },
      ],
      preguntas: [
        { t: "qa", q: "¿Por qué el pisingallo explota y el maíz común no?", a: "Porque tiene una cáscara dura e impermeable: el vapor queda atrapado adentro hasta que el grano revienta. En el maíz común el vapor se escapa." },
        { t: "qa", q: "¿Por qué aumentó?", a: "Las lluvias de esta campaña redujeron la oferta de grano bueno. Y como casi todo el pisingallo se exporta, el precio local sigue al de exportación." },
        { t: "qa", q: "¿Cuánto rinde?", a: "El grano crece más de 30 veces su volumen. Con 100 g sale un bol grande para compartir entre 3 o 4 personas." },
        { t: "qa", q: "¿Se puede guardar en la heladera?", a: "No conviene: el frío seca el grano y después revienta menos. Mejor bien cerrado, en lugar fresco y seco." },
        { t: "qa", q: "¿Es sin TACC?", v: 1, a: "[Confirmar con Calidad si el pisingallo Egran lleva el sello Sin TACC.]" },
      ],
    },
  },
];

