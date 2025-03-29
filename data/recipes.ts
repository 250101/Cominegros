export interface Recipe {
  id: string
  name: string
  categoryId: string
  description: string
  image: string
  servings: number
  servingType?: string
  time: number
  tags?: string[]
  ingredients: {
    name: string
    quantity: number
    unit: string
  }[]
  steps: string[]
}

export const recipes: Recipe[] = [
  {
    id: "crema-boniato",
    name: "Crema de Boniato",
    categoryId: "salsas",
    description: "Una deliciosa crema de boniato, perfecta como base para platos, como dip o como aderezo.",
    image: "/image/1.jpeg",
    servings: 4,
    servingType: "Porciones",
    time: 30,
    tags: ["Vegetariano", "Sin Gluten"],
    ingredients: [
      { name: "Boniatos medianos", quantity: 2, unit: "unidades" },
      { name: "Diente de ajo", quantity: 1, unit: "diente" },
      { name: "Manteca", quantity: 50, unit: "g" },
      { name: "Leche", quantity: 50, unit: "ml" },
      { name: "Sal y pimienta", quantity: 1, unit: "pizca" },
      { name: "Peperoncino", quantity: 1, unit: "pizca" },
    ],
    steps: [
      "Hervir agua en una olla, pelar los boniatos, cortarlos en trozos y meterlos al agua hirviendo junto con el diente de ajo.",
      "Esperar a que el boniato esté blando (unos 15-20 minutos), colarlo y pasarlo a un vaso para mixear.",
      "Agregar la leche, sal y pimienta al gusto (si querés un poco de picante, recomiendo el peperoncino).",
      "Mixear todo, incorporar la manteca y mixear una vez más hasta que quede cremoso. ¡Ya está listo!",
      "Se puede usar como base para platos, como dip o como aderezo. Lo bueno de esta crema es que podés variar la verdura y hacerla de remolacha, zanahoria, papa, etc.",
    ],
  },
  {
    id: "manteca-miso",
    name: "Manteca Miso",
    categoryId: "salsas",
    description: "Una manteca aromatizada con miso, miel y limón, ideal para acompañar carnes, pescados o verduras.",
    image: "/image/2.jpeg",
    servings: 6,
    servingType: "Porciones",
    time: 15,
    tags: ["Vegetariano"],
    ingredients: [
      { name: "Manteca", quantity: 200, unit: "g" },
      { name: "Pasta de miso", quantity: 30, unit: "g" },
      { name: "Miel", quantity: 15, unit: "g" },
      { name: "Ralladura de limón", quantity: 1, unit: "limón" },
    ],
    steps: [
      "Derretir la manteca a fuego bajo.",
      "Una vez derretida, verterla en un bowl frío colocado sobre hielo.",
      "Agregar el miso, la miel y la ralladura de limón, y batir hasta que la manteca se solidifique nuevamente.",
      "Si es para consumir en el momento, ponerla en un cuenquito. De lo contrario, pasarla a un film, darle forma cilíndrica y guardarla en la heladera.",
    ],
  },
  {
    id: "crema-champinones",
    name: "Crema de Champiñones y Cebolla",
    categoryId: "salsas",
    description:
      "Una cremosa y sabrosa salsa de champiñones con cebolla caramelizada, perfecta para acompañar carnes o pastas.",
    image: "/image/3.jpeg",
    servings: 4,
    servingType: "Porciones",
    time: 50,
    tags: ["Vegetariano"],
    ingredients: [
      { name: "Cebollas medianas", quantity: 2, unit: "unidades" },
      { name: "Champiñones", quantity: 200, unit: "g" },
      { name: "Crema de leche", quantity: 200, unit: "ml" },
      { name: "Manteca", quantity: 50, unit: "g" },
      { name: "Sal y pimienta", quantity: 1, unit: "pizca" },
      { name: "Queso rallado", quantity: 50, unit: "g" },
    ],
    steps: [
      "Cortar las cebollas en pluma y caramelizarlas a fuego bajo con un poco de aceite (unos 30-40 minutos, hasta que estén doradas).",
      "Agregar los champiñones y cocinar hasta que estén blandos (unos 10 minutos).",
      "Incorporar la crema de leche, dejar que se caliente un poco (sin que hierva).",
      "Triturar la mezcla con la manteca, pimienta, sal y el queso rallado hasta obtener una crema suave.",
    ],
  },
  {
    id: "croquetas-risotto",
    name: "Croquetas de Risotto",
    categoryId: "entradas",
    description: "Deliciosas croquetas hechas con risotto sobrante, perfectas como aperitivo o entrada.",
    image: "/image/4.jpeg",
    servings: 10,
    servingType: "Croquetas",
    time: 30,
    tags: ["Vegetariano", "Aprovechamiento"],
    ingredients: [
      { name: "Risotto cocido (sobrante)", quantity: 300, unit: "g" },
      { name: "Panko", quantity: 100, unit: "g" },
      { name: "Harina", quantity: 50, unit: "g" },
      { name: "Huevos", quantity: 2, unit: "unidades" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
    ],
    steps: [
      "Con el risotto frío, formar croquetas medianas.",
      "Pasarlas primero por harina, luego por huevo batido y finalmente por panko.",
      "Calentar el aceite (que cubra completamente las croquetas) a fuego medio-alto y freírlas hasta que estén doradas (unos 2-3 minutos por lado).",
      "Se pueden servir coronadas con la crema de boniato y una salsa aioli.",
    ],
  },
  {
    id: "croquetas-osobuco",
    name: "Croquetas de Osobuco",
    categoryId: "entradas",
    description: "Croquetas cremosas hechas con osobuco desmenuzado y cebolla caramelizada, un aperitivo irresistible.",
    image: "/image/5.jpeg",
    servings: 15,
    servingType: "Croquetas",
    time: 180,
    tags: ["Gourmet", "Preparación Anticipada"],
    ingredients: [
      { name: "Cebollas medianas", quantity: 2, unit: "unidades" },
      { name: "Osobuco", quantity: 500, unit: "g" },
      { name: "Caldo de carne", quantity: 1, unit: "litro" },
      { name: "Panko", quantity: 100, unit: "g" },
      { name: "Manteca (para la bechamel)", quantity: 75, unit: "g" },
      { name: "Harina (para la bechamel)", quantity: 75, unit: "g" },
      { name: "Leche (para la bechamel)", quantity: 100, unit: "ml" },
      { name: "Huevos", quantity: 2, unit: "unidades" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
      { name: "Sal y pimienta", quantity: 1, unit: "pizca" },
    ],
    steps: [
      "Hacer un caldo de carne y cocinar el osobuco en él a fuego bajo durante 2 horas, hasta que esté tierno. Desmenuzar la carne y reservar.",
      "Para la cebolla caramelizada, cortar las cebollas en pluma, ponerlas en una sartén a fuego bajo con un poco de aceite de oliva y un pedazo de manteca, agregar sal y cocinar lentamente (unos 30-40 minutos) hasta que estén doradas, sin que se quemen. Mezclar la cebolla caramelizada con la carne desmenuzada y reservar.",
      "Para la bechamel, derretir 75 g de manteca a fuego lento en una ollita, agregar 75 g de harina y mezclar hasta que no huela a crudo (unos 2-3 minutos). Incorporar 100 ml de leche fría, revolver constantemente hasta que la mezcla espese y salgan burbujas grandes (unos 5 minutos). Apagar el fuego, agregar sal y pimienta, y verter la bechamel sobre la mezcla de carne y cebolla.",
      "Tapar la superficie con un film (para que no se forme una película) y dejar enfriar fuera de la heladera. Una vez fría, meterla en la heladera toda la noche.",
      "Al día siguiente, calentar el aceite a fuego medio-alto. Formar bolas con la masa fría, pasarlas por harina, luego por huevo batido, después por panko y freírlas en el aceite caliente hasta que se doren (unos 2-3 minutos por lado). Sacarlas y escurrirlas sobre una rejilla.",
    ],
  },
  {
    id: "empanadas-carne",
    name: "Empanadas de Carne",
    categoryId: "entradas",
    description: "Clásicas empanadas argentinas con un relleno jugoso de carne y verduras.",
    image: "/image/6.jpeg",
    servings: 36,
    servingType: "Empanadas",
    time: 120,
    tags: ["Clásico", "Para Compartir"],
    ingredients: [
      { name: "Zanahoria", quantity: 1, unit: "unidad" },
      { name: "Cebollas medianas", quantity: 2, unit: "unidades" },
      { name: "Apio", quantity: 3, unit: "tallos" },
      { name: "Salsa de tomate", quantity: 800, unit: "g" },
      { name: "Carne picada", quantity: 1.5, unit: "kg" },
      { name: "Tapas de empanadas", quantity: 36, unit: "unidades" },
      { name: "Aceite de oliva", quantity: 50, unit: "ml" },
      { name: "Orégano, pimienta y sal", quantity: 1, unit: "pizca" },
      { name: "Vino tinto", quantity: 50, unit: "ml" },
      { name: "Hoja de laurel", quantity: 1, unit: "hoja" },
      { name: "Grasa bovina (opcional, para freír)", quantity: 500, unit: "g" },
    ],
    steps: [
      "En una olla grande a fuego fuerte, calentar el aceite de oliva y dorar la carne picada.",
      "Retirar la carne y, en la misma olla, agregar la zanahoria cortada bien chiquita y un poco de sal. Cocinar 5 minutos, luego incorporar el apio cortado chiquito y cocinar 5 minutos más.",
      "Agregar la cebolla (también cortada chiquita), un poco más de sal y cocinar hasta que las verduras estén transparentes (unos 10 minutos).",
      "Volver a incorporar la carne, agregar orégano, pimienta y sal, mezclar bien, añadir un chorro de vino tinto y dejar que se evapore (unos 2-3 minutos).",
      "Incorporar la salsa de tomate y la hoja de laurel, tapar la olla, bajar el fuego al mínimo y cocinar hasta que la salsa no esté líquida (aproximadamente 1 hora), revolviendo cada tanto.",
      "Sacar la hoja de laurel y dejar enfriar la mezcla.",
      "Una vez fría, armar las empanadas con las tapas, hacer el repulgue y cocinarlas. Para hornear, precalentar el horno a 200°C y cocinarlas hasta que se doren por ambos lados (unos 20-25 minutos, dándolas vuelta a la mitad). Para freír, calentar grasa bovina (o aceite) y freírlas hasta que estén doradas (unos 3-4 minutos por lado).",
    ],
  },
  {
    id: "katsudon",
    name: "Katsudon",
    categoryId: "principales",
    description:
      "Un plato japonés que consiste en una chuleta de cerdo empanada (tonkatsu) sobre arroz, cubierta con huevo y cebolla.",
    image: "/image/7.jpeg",
    servings: 3,
    servingType: "Porciones",
    time: 45,
    tags: ["Japonés"],
    ingredients: [
      { name: "Solomillo de cerdo", quantity: 500, unit: "g" },
      { name: "Aderezo de arroz", quantity: 50, unit: "ml" },
      { name: "Huevos", quantity: 4, unit: "unidades" },
      { name: "Cebolla", quantity: 1, unit: "unidad" },
      { name: "Pickles", quantity: 6, unit: "rodajas" },
      { name: "Arroz crudo", quantity: 200, unit: "g" },
      { name: "Salsa Katsu", quantity: 1, unit: "porción" },
      { name: "Panko", quantity: 100, unit: "g" },
      { name: "Harina", quantity: 50, unit: "g" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
      { name: "Sal y pimienta", quantity: 1, unit: "pizca" },
      { name: "Verdeo y semillas de sésamo", quantity: 1, unit: "pizca" },
    ],
    steps: [
      "Arroz: Meter el arroz en una olla y lavarlo hasta que el agua sea transparente. Cubrir con agua (2 dedos por encima del arroz) y llevar a fuego medio hasta que hierva. Una vez que hierva, bajar el fuego al mínimo, tapar la olla y dejar cocinar 15 minutos. Sin abrir la tapa, retirar del fuego y dejar reposar 10 minutos más. Preparar el aderezo de arroz calentando vinagre de arroz con sal y azúcar hasta que se disuelvan, y mezclarlo con el arroz cocido.",
      "Katsu: Limpiar el solomillo, sacar la grasa y cortarlo en 3 pedazos verticales. Abrir cada pedazo para que quede más plano. Pasar cada trozo por una mezcla de harina, sal y pimienta, luego por huevo batido y finalmente por panko. Freír las milanesas en aceite caliente hasta que se doren (unos 3-4 minutos por lado, dependiendo del grosor).",
      "Emplatado: En un plato hondo, poner una base de arroz, cortar el katsu en tiras horizontales y colocarlo sobre el arroz. Agregar los toppings (cebolla crispy, pickles, verdeo, semillas de sésamo) y cubrir con la salsa Katsu.",
    ],
  },
  {
    id: "katsu-curry",
    name: "Katsu Curry",
    categoryId: "principales",
    description: "Chuleta de cerdo empanada servida con una cremosa salsa de curry japonés sobre arroz.",
    image: "/image/8.jpeg",
    servings: 3,
    servingType: "Porciones",
    time: 60,
    tags: ["Japonés", "Curry"],
    ingredients: [
      { name: "Solomillo de cerdo", quantity: 500, unit: "g" },
      { name: "Cebolla (para cebolla crispy)", quantity: 1, unit: "unidad" },
      { name: "Arroz crudo", quantity: 200, unit: "g" },
      { name: "Cebollas (para la salsa)", quantity: 3, unit: "unidades" },
      { name: "Manzana roja", quantity: 1, unit: "unidad" },
      { name: "Caldo de ave", quantity: 1, unit: "litro" },
      { name: "Panko", quantity: 100, unit: "g" },
      { name: "Huevo", quantity: 1, unit: "unidad" },
      { name: "Salsa inglesa", quantity: 25, unit: "ml" },
      { name: "Curry en polvo", quantity: 25, unit: "g" },
      { name: "Harina", quantity: 75, unit: "g" },
      { name: "Manteca", quantity: 100, unit: "g" },
      { name: "Kétchup", quantity: 45, unit: "ml" },
      { name: "Salsa de soja", quantity: 15, unit: "ml" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
    ],
    steps: [
      "Arroz y Katsu: Seguir los mismos pasos que en la receta de Katsudon para preparar el arroz y el katsu.",
      "Salsa Curry: Cortar las 3 cebollas en pluma y caramelizarlas a fuego lento (unos 45 minutos, hasta que estén doradas). Agregar la manzana rallada y las 3 cucharadas de kétchup, cocinar 3 minutos más y luego incorporar la manteca.",
      "Una vez derretida, agregar los 75 g de harina y los 25 g de curry, mezclar hasta formar una pasta. Incorporar el caldo de ave poco a poco mientras se mezcla, hasta que se forme una crema espesa.",
      "Agregar la salsa inglesa, la salsa de soja y una cucharadita más de kétchup, y triturar la salsa en una licuadora (dejando un espacio para que salga el vapor).",
      "Emplatado: En un plato hondo, poner mitad arroz y mitad salsa de curry. Colocar el katsu cortado en tiras por encima y decorar con cebolla crispy.",
    ],
  },
  {
    id: "risotto",
    name: "Risotto",
    categoryId: "principales",
    description: "Un cremoso risotto con curry, pimentón ahumado y queso, perfecto para una cena especial.",
    image: "/image/9.jpeg",
    servings: 5,
    servingType: "Porciones",
    time: 40,
    tags: ["Vegetariano", "Italiano"],
    ingredients: [
      { name: "Arroz carnaroli", quantity: 500, unit: "g" },
      { name: "Cebollas medianas", quantity: 2, unit: "unidades" },
      { name: "Curry en polvo", quantity: 25, unit: "g" },
      { name: "Pimentón ahumado", quantity: 10, unit: "g" },
      { name: "Pimienta", quantity: 1, unit: "pizca" },
      { name: "Manteca", quantity: 100, unit: "g" },
      { name: "Caldo", quantity: 1, unit: "litro" },
      { name: "Vino blanco", quantity: 100, unit: "ml" },
      { name: "Queso rallado", quantity: 100, unit: "g" },
    ],
    steps: [
      "Cortar las cebollas en brunoise (cubitos pequeños). En una olla honda a fuego lento, poner las cebollas con un poco de manteca y sal, y cocinar hasta que estén transparentes (unos 10 minutos).",
      "Agregar el arroz y mezclar hasta que se vuelva ligeramente transparente (unos 2-3 minutos).",
      "Incorporar el vino blanco, el curry, el pimentón ahumado y pimienta, y mezclar hasta que el vino se evapore.",
      "Empezar a agregar el caldo caliente (1 taza a la vez), revolviendo constantemente para que el arroz lo absorba. Seguir agregando caldo y revolviendo hasta que el arroz esté en su punto (unos 18-20 minutos). Al final, debe quedar un poco líquido.",
      "Apagar el fuego, agregar el queso rallado y la manteca, y mezclar para generar una emulsión cremosa.",
      "Servir inmediatamente. Se puede acompañar con pollo o con la crema de champiñones y cebolla caramelizada.",
    ],
  },
  {
    id: "lomo-boniato",
    name: "Lomo con Mar de Boniato y Papas Rejilla",
    categoryId: "principales",
    description: "Medallones de lomo sobre una cremosa base de boniato, acompañados de crujientes papas rejilla.",
    image: "/image/10.jpeg",
    servings: 3,
    servingType: "Porciones",
    time: 45,
    tags: ["Gourmet", "Carne"],
    ingredients: [
      { name: "Lomo de cerdo", quantity: 500, unit: "g" },
      { name: "Papas medianas", quantity: 5, unit: "unidades" },
      { name: "Boniatos medianos", quantity: 3, unit: "unidades" },
      { name: "Crema de leche", quantity: 200, unit: "ml" },
      { name: "Manteca", quantity: 50, unit: "g" },
      { name: "Sal y pimienta", quantity: 1, unit: "pizca" },
      { name: "Limón (ralladura)", quantity: 1, unit: "unidad" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
    ],
    steps: [
      "Preparar la crema de boniato (ver receta en Salsas y Cremas).",
      "Limpiar el lomo y cortarlo en 3 filetes anchos, sazonarlos con sal y pimienta.",
      "Para las papas rejilla, usar una mandolina para cortar las papas en forma de rejilla, freírlas en aceite caliente hasta que estén doradas (unos 3-4 minutos), sacarlas, salarlas, agregar pimienta y ralladura de limón.",
      "Calentar una plancha con un poco de manteca, sellar los medallones de lomo por ambos lados y cocinar 5 minutos por lado (a mí me gusta bien rojo).",
      "Emplatar con una base de crema de boniato, el medallón de lomo encima y las papas rejilla al lado.",
    ],
  },
  {
    id: "tortilla",
    name: "Tortilla",
    categoryId: "principales",
    description:
      "Una clásica tortilla española con papas y cebolla caramelizada, jugosa por dentro y dorada por fuera.",
    image: "/image/11.jpeg",
    servings: 4,
    servingType: "Porciones",
    time: 60,
    tags: ["Vegetariano", "Español"],
    ingredients: [
      { name: "Papas medianas", quantity: 5, unit: "unidades" },
      { name: "Huevos", quantity: 9, unit: "unidades" },
      { name: "Cebolla mediana", quantity: 1, unit: "unidad" },
      { name: "Aceite para freír", quantity: 500, unit: "ml" },
      { name: "Sal", quantity: 1, unit: "pizca" },
    ],
    steps: [
      "Cortar la cebolla en pluma y caramelizarla a fuego bajo con un poco de aceite (unos 30-40 minutos, hasta que esté dorada).",
      "Pelar las papas, cortarlas en rodajas finas (vertical y luego horizontalmente) y freírlas en aceite caliente hasta que estén blandas (unos 10-15 minutos).",
      "Sacarlas, escurrirlas, salarlas y mezclarlas con la cebolla caramelizada en un bowl.",
      "En una sartén, dorar ligeramente las papas con la cebolla para que tomen color (unos 5 minutos).",
      "Pasarlas a un bowl, agregar los 9 huevos batidos, mezclar con una cuchara y dejar reposar 5 minutos.",
      "Calentar una sartén antiadherente a fuego medio, verter la mezcla y moverla para que no se pegue. Cocinar 2-3 minutos, dar vuelta la tortilla y cocinar 1 minuto más del otro lado (queda bien babé, como a mí me gusta).",
    ],
  },
  {
    id: "tiramisu",
    name: "Tiramisú",
    categoryId: "postres",
    description:
      "El clásico postre italiano con capas de bizcochos de soletilla empapados en café y crema de mascarpone.",
    image: "/image/12.jpeg",
    servings: 8,
    servingType: "Porciones",
    time: 30,
    tags: ["Italiano", "Sin Hornear"],
    ingredients: [
      { name: "Mascarpone", quantity: 500, unit: "g" },
      { name: "Huevos", quantity: 6, unit: "unidades" },
      { name: "Café frío", quantity: 200, unit: "ml" },
      { name: "Azúcar glas", quantity: 200, unit: "g" },
      { name: "Vainillas", quantity: 36, unit: "unidades" },
      { name: "Cacao en polvo", quantity: 1, unit: "pizca" },
    ],
    steps: [
      "Separar las yemas de las claras de los 6 huevos.",
      "En un bowl, batir las yemas con los 200 g de azúcar glas hasta que la mezcla se vuelva blanca (unos 5 minutos).",
      "Agregar el mascarpone y batir nuevamente hasta que esté homogéneo.",
      "Montar las claras a punto nieve e incorporarlas de a poco a la mezcla con movimientos envolventes.",
      "En una fuente (tipo pirex), poner una capa fina de la mezcla, luego una capa de vainillas pasadas por el café frío, verter la mitad de la mezcla, agregar otra capa de vainillas y terminar con el resto de la mezcla.",
      "Tapar con film (en contacto con la mezcla) y dejar en la heladera por 24 horas.",
      "Antes de servir, espolvorear con cacao en polvo.",
    ],
  },
  {
    id: "rolls-canela",
    name: "Rolls de Canela",
    categoryId: "postres",
    description: "Suaves y esponjosos rolls de canela con un delicioso frosting de queso crema.",
    image: "/image/13.jpeg",
    servings: 12,
    servingType: "Rolls",
    time: 180,
    tags: ["Horneado", "Dulce"],
    ingredients: [
      { name: "Leche tibia", quantity: 180, unit: "ml" },
      { name: "Levadura seca", quantity: 10, unit: "g" },
      { name: "Manteca derretida", quantity: 60, unit: "g" },
      { name: "Azúcar", quantity: 50, unit: "g" },
      { name: "Huevo", quantity: 1, unit: "unidad" },
      { name: "Harina", quantity: 340, unit: "g" },
      { name: "Manteca pomada (para el relleno)", quantity: 120, unit: "g" },
      { name: "Azúcar morena (para el relleno)", quantity: 200, unit: "g" },
      { name: "Canela en polvo (para el relleno)", quantity: 10, unit: "g" },
      { name: "Manteca pomada (para el frosting)", quantity: 100, unit: "g" },
      { name: "Azúcar glas (para el frosting)", quantity: 100, unit: "g" },
      { name: "Queso crema (para el frosting)", quantity: 250, unit: "g" },
      { name: "Esencia de vainilla (para el frosting)", quantity: 5, unit: "ml" },
      { name: "Crema de leche (para los huecos)", quantity: 50, unit: "ml" },
    ],
    steps: [
      "Mezclar la leche tibia con la levadura, tapar con un paño y dejar activar la levadura por 15 minutos.",
      "Agregar la manteca derretida, el azúcar, el huevo y la harina, amasar hasta formar una masa suave y dejar levar por 1 hora.",
      "Pasada la hora, sacar el aire del bollo, estirarlo en forma rectangular, untar la superficie con la manteca pomada, espolvorear el azúcar morena y la canela, y enrollar el rectángulo.",
      "Cortar en medallones de 3 dedos de ancho (unos 12 rolls), colocarlos en una asadera con papel manteca y dejar levar 30 minutos más.",
      "Antes de meter al horno, verter un chorro de crema de leche en los huecos. Hornear a 180°C (fuego medio tirando a fuerte) por 30 minutos.",
      "Para el frosting, mezclar la manteca pomada, el azúcar glas, el queso crema y la esencia de vainilla hasta que esté cremoso.",
      "Una vez que los rolls salgan del horno, cubrirlos con el frosting y ¡ya taaa!",
    ],
  },
  {
    id: "cookies",
    name: "Cookies de Chocolate",
    categoryId: "postres",
    description: "Deliciosas cookies con trozos de chocolate, perfectas para acompañar el café o como postre.",
    image: "/image/14.jpeg",
    servings: 30,
    servingType: "Cookies",
    time: 45,
    tags: ["Horneado", "Dulce"],
    ingredients: [
      { name: "Manteca sin sal", quantity: 225, unit: "g" },
      { name: "Azúcar blanca", quantity: 175, unit: "g" },
      { name: "Azúcar morena", quantity: 175, unit: "g" },
      { name: "Huevos", quantity: 2, unit: "unidades" },
      { name: "Esencia de vainilla", quantity: 2.5, unit: "ml" },
      { name: "Harina común", quantity: 400, unit: "g" },
      { name: "Sal", quantity: 0.5, unit: "cucharadita" },
      { name: "Bicarbonato de sodio", quantity: 10, unit: "g" },
      { name: "Chocolate negro en trozos", quantity: 250, unit: "g" },
    ],
    steps: [
      "Batir la manteca con el azúcar blanca y morena hasta que la mezcla se ponga más pálida y aireada (unos 3-5 minutos).",
      "Añadir los huevos y la esencia de vainilla, y mezclar.",
      "Incorporar la harina, la sal y el bicarbonato de sodio, y mezclar con una espátula (sin batir) hasta formar una masa.",
      "Agregar 200 g del chocolate en trozos (reservar 50 g para decorar) y mezclar.",
      "Formar bolas de 1.5 cucharadas, colocarlas en una bandeja y meterlas en el freezer por 30 minutos (o en la heladera por 1 hora) para que solidifiquen.",
      "Precalentar el horno a 170°C, poner 6 bolas en una bandeja con papel manteca (dejando espacio entre ellas) y hornear por 12 minutos, o hasta que los bordes estén dorados.",
      "Retirar del horno, darle unos golpecitos a la bandeja para que se asienten y dejar enfriar. Decorar con el chocolate restante si querés.",
    ],
  },
]

