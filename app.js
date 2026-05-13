// GASDRIVE V7 - 180 PREGUNTAS DGT 2026
const VERSION = "7.0";

// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉','🎊','💣'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤','☠️','🤯'];

// 140 PREGUNTAS TEST DGT
const PREGUNTAS = {
  general: [
    {q:"¿Velocidad máxima en zona urbana?",a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"¿Qué indica luz amarilla intermitente?",a:["Alto total","Precaución","Acelerar"],ok:1},
    {q:"Distancia de seguridad en seco:",a:["1 segundo","2 segundos","3 segundos"],ok:1},
    {q:"¿Se puede adelantar en línea continua?",a:["Sí","No, nunca","Solo motos"],ok:1},
    {q:"Tasa alcohol general:",a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {q:"Prioridad en rotonda:",a:["El que entra","El que circula dentro","El más rápido"],ok:1},
    {q:"Luces de cruce obligatorias:",a:["Siempre","Noche/túneles","Solo lluvia"],ok:1},
    {q:"¿Móvil al volante?",a:["Permitido manos libres","Prohibido siempre","Solo mensajes"],ok:0},
    {q:"Distancia mínima al adelantar ciclista:",a:["1 metro","1.5 metros","2 metros"],ok:1},
    {q:"¿Cuándo usar claxon en ciudad?",a:["Saludar","Evitar accidente","Nunca"],ok:1},
    {q:"Prioridad peatón en paso sin semáforo:",a:["Coche","Peatón","Nadie"],ok:1},
    {q:"¿Se puede aparcar en carril bici?",a:["Sí, 5 min","No, nunca","Solo motos"],ok:1},
    {q:"Luz azul en vehículo significa:",a:["Emergencia","Taxi","Autoescuela"],ok:0},
    {q:"Casco obligatorio en moto:",a:["Solo conductor","Conductor y pasajero","Solo carretera"],ok:1},
    {q:"¿Qué hacer ante ambulancia con sirena?",a:["Acelerar","Facilitar paso","Ignorar"],ok:1},
    {q:"Señal de prohibido adelantar:",a:["Triángulo","Círculo rojo","Cuadrado azul"],ok:1},
    {q:"Alcohol en conductores profesionales:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:1},
    {q:"¿Es obligatorio el seguro?",a:["Solo a terceros","Sí, siempre","No"],ok:1},
    {q:"Prioridad en intersección sin señalizar:",a:["Derecha","Izquierda","El más grande"],ok:0},
    {q:"¿Cuándo parar en semáforo ámbar?",a:["Siempre","Si puedes seguro","Nunca"],ok:1},
    {q:"Uso del cinturón en ciudad:",a:["Opcional","Obligatorio","Solo carretera"],ok:1},
    {q:"¿Se puede usar móvil en semáforo rojo?",a:["Sí","No","Solo WhatsApp"],ok:1},
    {q:"Distancia de seguridad con lluvia:",a:["Duplicar","Mitad","Igual"],ok:0},
    {q:"¿Qué significa línea blanca continua?",a:["Adelantar","No cambiar carril","Estacionar"],ok:1},
    {q:"Edad mínima ciclomotor:",a:["14 años","15 años","16 años"],ok:1},
    {q:"¿Obligatorio triángulos?",a:["Sí","No","Solo noche"],ok:0},
    {q:"Luz de emergencia V16 sustituye:",a:["Triángulos","Chaleco","Rueda"],ok:0},
    {q:"Prioridad vehículo de emergencia:",a:["Nunca","Siempre","Solo de día"],ok:1},
    {q:"¿Se puede adelantar por derecha?",a:["Sí","No","Solo en atasco"],ok:0},
    {q:"Alcohol cero en:",a:["Todos","Noveles y profesionales","Nadie"],ok:1},
    {q:"¿Cuándo usar intermitente?",a:["Solo autopista","Todo cambio dirección","Nunca"],ok:1},
    {q:"Distancia mínima lateral ciclista:",a:["1m","1.5m","2m"],ok:1},
    {q:"¿Obligatorio llevar documentación?",a:["Sí","No","Solo DNI"],ok:0},
    {q:"Velocidad mínima autovía:",a:["60 km/h","50 km/h","40 km/h"],ok:0},
    {q:"¿Se puede adelantar en paso de peatones?",a:["Sí","No, nunca","Solo si no hay peatones"],ok:1}
  ],
  señales: [
    {q:"Señal de STOP octogonal:",a:["Ceda el paso","Alto obligatorio","Precaución"],ok:1},
    {q:"Triángulo invertido es:",a:["STOP","Ceda el paso","No entrar"],ok:1},
    {q:"Círculo rojo con línea:",a:["Obligación","Prohibición","Fin prohibición"],ok:1},
    {q:"Señal azul cuadrada:",a:["Prohibición","Información","Peligro"],ok:1},
    {q:"Rombo amarillo:",a:["Peligro","Información","Obligación"],ok:0},
    {q:"Señal de ceda el paso:",a:["Octagonal","Triángulo invertido","Círculo"],ok:1},
    {q:"Prohibido aparcar:",a:["Círculo azul","Círculo rojo","Triángulo"],ok:1},
    {q:"Velocidad máxima 90:",a:["Círculo rojo 90","Cuadrado azul 90","Triángulo 90"],ok:0},
    {q:"Peligro obras:",a:["Triángulo naranja","Círculo rojo","Cuadrado verde"],ok:0},
    {q:"Estacionamiento permitido:",a:["P azul","P rojo","P negro"],ok:0},
    {q:"Paso de peatones:",a:["Triángulo","Cuadrado azul","Círculo"],ok:1},
    {q:"Fin de prohibición:",a:["Barra gris","Barra negra","Barra blanca"],ok:1},
    {q:"Dirección obligatoria:",a:["Flecha azul","Flecha roja","Flecha negra"],ok:0},
    {q:"Curva peligrosa:",a:["Triángulo","Círculo","Cuadrado"],ok:0},
    {q:"Pendiente pronunciada:",a:["Triángulo %","Círculo %","Cuadrado %"],ok:0},
    {q:"Túnel:",a:["Cuadrado azul túnel","Círculo rojo","Triángulo"],ok:0},
    {q:"Zona 30:",a:["Círculo 30","Cuadrado 30","Triángulo 30"],ok:1},
    {q:"Prioridad sentido contrario:",a:["Flecha roja","Flecha azul","Flecha verde"],ok:0},
    {q:"No adelantar camiones:",a:["Camión tachado","Coche tachado","Moto tachada"],ok:0},
    {q:"Glorieta:",a:["Flechas circulares","Triángulo","Círculo"],ok:0},
    {q:"Prohibido girar izquierda:",a:["Flecha tachada","Flecha verde","Flecha azul"],ok:0},
    {q:"Calzada con prioridad:",a:["Rombo amarillo","Triángulo","Círculo"],ok:0},
    {q:"Fin población:",a:["Cartel tachado","Cartel normal","Triángulo"],ok:0},
    {q:"Aeropuerto:",a:["Avión azul","Avión rojo","Avión negro"],ok:0},
    {q:"Hospital:",a:["Cruz verde","Cruz roja","Cruz azul"],ok:1},
    {q:"Gasolinera:",a:["Surtidor azul","Surtidor rojo","Surtidor negro"],ok:0},
    {q:"Teléfono SOS:",a:["Teléfono blanco","Teléfono rojo","Teléfono negro"],ok:0},
    {q:"Carril bus:",a:["BUS blanco","BUS rojo","BUS negro"],ok:0},
    {q:"Carril reservado bicis:",a:["Bici blanca","Bici roja","Bici negra"],ok:0},
    {q:"Zona peatonal:",a:["Peatón blanco","Peatón rojo","Peatón negro"],ok:0},
    {q:"Fin autovía:",a:["Cartel tachado","Cartel normal","Triángulo"],ok:0},
    {q:"Cambio rasante:",a:["Triángulo joroba","Círculo joroba","Cuadrado joroba"],ok:0},
    {q:"Animales sueltos:",a:["Vaca triángulo","Vaca círculo","Vaca cuadrado"],ok:0},
    {q:"Viento lateral:",a:["Árbol inclinado","Casa inclinada","Coche inclinado"],ok:0},
    {q:"Peligro niños:",a:["Triángulo niños","Círculo niños","Cuadrado niños"],ok:0}
  ],
  normas: [
    {q:"Tasa alcohol noveles:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"Cinturón obligatorio:",a:["Solo delante","Solo conductor","Todos"],ok:2},
    {q:"Edad mínima carnet B:",a:["16 años","17 años","18 años"],ok:2},
    {q:"Límite autovía turismos:",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"Límite ciudad genérico:",a:["30 km/h","50 km/h","40 km/h"],ok:1},
    {q:"Puntos carnet inicial:",a:["8 puntos","12 puntos","15 puntos"],ok:0},
    {q:"Perder todos los puntos:",a:["Multa","Suspensión carnet","Nada"],ok:1},
    {q:"Alcohol + accidente:",a:["Delito","Falta","Nada"],ok:0},
    {q:"ITV coche 5 años:",a:["Anual","Bianual","Cada 2 años"],ok:1},
    {q:"Uso intermitente obligatorio:",a:["Siempre","Nunca","Solo noche"],ok:0},
    {q:"Prioridad peatón en semáforo verde:",a:["Coche","Peatón","Nadie"],ok:1},
    {q:"Adelantar en paso peatones:",a:["Sí","No","Solo rápido"],ok:1},
    {q:"Uso móvil con manos libres:",a:["Permitido","Prohibido","Opcional"],ok:0},
    {q:"Niños 135cm atrás:",a:["Obligatorio","Opcional","Prohibido"],ok:0},
    {q:"Silla infantil obligatoria hasta:",a:["12 años","135cm o 12 años","18 años"],ok:1},
    {q:"Estacionar en doble fila:",a:["Permitido 2 min","Prohibido","Solo carga"],ok:1},
    {q:"Uso luces antiniebla:",a:["Siempre","Solo niebla/lluvia intensa","Nunca"],ok:1},
    {q:"Prioridad tranvía:",a:["Coche","Tranvía","Nadie"],ok:1},
    {q:"Velocidad vía 2 carriles:",a:["90 km/h","100 km/h","110 km/h"],ok:0},
    {q:"Conducir con sueño:",a:["Permitido","Prohibido","Opcional"],ok:1},
    {q:"Cambiar rueda en autovía:",a:["En carril","Arcén","Mediana"],ok:1},
    {q:"Uso claxon en túnel:",a:["Obligatorio","Prohibido","Opcional"],ok:1},
    {q:"Distancia camión delante:",a:["50m","100m","150m"],ok:0},
    {q:"Adelantar con lluvia:",a:["Normal","Mayor precaución","Prohibido"],ok:1},
    {q:"Circulación contraria:",a:["Delito","Falta grave","Nada"],ok:0},
    {q:"Uso casco bicicleta ciudad:",a:["Obligatorio","Opcional","Prohibido"],ok:1},
    {q:"Estacionar en vado:",a:["Permitido","Prohibido","Solo noche"],ok:1},
    {q:"Límite remolque sin frenos:",a:["500kg","750kg","1000kg"],ok:1},
    {q:"Obligatorio llevar chaleco:",a:["Sí","No","Solo noche"],ok:0},
    {q:"Prioridad autobús salida parada:",a:["Coche","Autobús","Nadie"],ok:1},
    {q:"Uso carril bus taxi:",a:["Sí","No","Solo moto"],ok:1},
    {q:"Velocidad mínima 60 km/h:",a:["Autopista","Autovía","Carretera"],ok:1},
    {q:"Adelantar en curva:",a:["Sí","No","Solo rápido"],ok:1},
    {q:"Uso luces carretera población:",a:["Sí","No","Opcional"],ok:1},
    {q:"Retirada carnet por alcoholemia:",a:["0.5 g/l","0.6 g/l","0.8 g/l"],ok:1}
  ],
  mecanica: [
    {q:"Presión baja causa:",a:["Mayor consumo","Menor agarre","Ambas"],ok:2},
    {q:"Líquido de frenos bajo:",a:["Desgaste pastillas","Fuga","Ambas pueden ser"],ok:2},
    {q:"Testigo aceite rojo:",a:["Revisar nivel","Parar motor YA","Cambiar aceite"],ok:1},
    {q:"Batería descargada:",a:["Empujar","Pinzas","Ambas"],ok:2},
    {q:"Neumático liso:",a:["Multa","Accidente","Ambas"],ok:2},
    {q:"Nivel anticongelante bajo:",a:["Motor se calienta","No pasa nada","Más potencia"],ok:0},
    {q:"Testigo motor naranja:",a:["Parar ya","Revisar taller","Ignorar"],ok:1},
    {q:"Freno esponjoso:",a:["Aire sistema","Falta líquido","Ambas"],ok:2},
    {q:"Vibración volante 100km/h:",a:["Equilibrado","Alineación","Frenos"],ok:0},
    {q:"Humo blanco escape:",a:["Normal frío","Junta culata","Aceite quemado"],ok:0},
    {q:"Humo azul escape:",a:["Aceite motor","Gasolina","Agua"],ok:0},
    {q:"Olor gasolina habitáculo:",a:["Normal","Fuga peligrosa","Ignorar"],ok:1},
    {q:"Ruido chillido al frenar:",a:["Pastillas gastadas","Disco roto","Normal"],ok:0},
    {q:"Dirección dura:",a:["Falta líquido dirección","Neumático bajo","Freno roto"],ok:0},
    {q:"Cambio no entra marcha:",a:["Embrague roto","Falta aceite","Neumático bajo"],ok:0},
    {q:"Temperatura motor alta:",a:["Parar y enfriar","Acelerar","Seguir"],ok:0},
    {q:"Luz batería encendida:",a:["Alternador falla","Batería ok","Normal"],ok:0},
    {q:"Consumo excesivo gasolina:",a:["Filtro aire sucio","Filtro limpio","Normal"],ok:0},
    {q:"Fallo arranque en frío:",a:["Batería débil","Motor roto","Normal"],ok:0},
    {q:"Ruido golpeteo motor:",a:["Normal","Falta aceite/pistones","Ignorar"],ok:1},
    {q:"Frenos no frenan:",a:["Bombear pedal","Acelerar","Ignorar"],ok:0},
    {q:"Dirección vibra frenando:",a:["Discos alabeados","Neumático bajo","Normal"],ok:0},
    {q:"Aceite negro y espeso:",a:["Cambiar ya","Normal","Añadir agua"],ok:0},
    {q:"Correa distribución rota:",a:["Motor se para","Sigue igual","Más potencia"],ok:0},
    {q:"Embrague patina:",a:["Acelera sin avanzar","Avanza normal","Frena"],ok:0},
    {q:"Fuga líquido verde:",a:["Anticongelante","Aceite","Freno"],ok:0},
    {q:"Testigo ABS encendido:",a:["Sistema fallo","Normal","Ignorar"],ok:0},
    {q:"Neumático con bulto:",a:["Seguir","Cambiar ya","Ignorar"],ok:1},
    {q:"Ruido correa chirría:",a:["Tensar/cambiar","Normal","Ignorar"],ok:0},
    {q:"Fallo luces freno:",a:["Multa","Peligro","Ambas"],ok:2},
    {q:"Motor se cala saliendo:",a:["Embrague mal","Gasolina mala","Normal"],ok:0},
    {q:"Olor quemado habitáculo:",a:["Embrague/frenos","Normal","Ignorar"],ok:0},
    {q:"Dirección se va derecha:",a:["Alineación","Neumático ok","Normal"],ok:0},
    {q:"Suspensión blanda:",a:["Amortiguadores gastados","Normal","Más agarre"],ok:0},
    {q:"Falta potencia subida:",a:["Filtro aire sucio","Motor ok","Normal"],ok:0}
  ]
};

// 40 PREGUNTAS SITUACIONES
const SITUACIONES = {
  clima: [
    {q:"Lluvia intensa: ¿qué haces?",a:["Acelero para salir","Reduzco velocidad y aumento distancia","Freno en seco"],ok:1},
    {q:"Niebla espesa:",a:["Largas","Antiniebla + cortas","Sin luces"],ok:1},
    {q:"Hielo en calzada:",a:["Freno fuerte","Marchas largas sin frenar brusco","Acelero"],ok:1},
    {q:"Charcos grandes:",a:["Acelerar","Evitar y reducir velocidad","Frenar fuerte"],ok:1},
    {q:"Viento lateral fuerte:",a:["Sujetar volante firme","Soltar volante","Acelerar"],ok:0},
    {q:"Granizo:",a:["Parar bajo un puente","Seguir igual","Acelerar"],ok:0},
    {q:"Nieve en calzada:",a:["Cadenas o neumáticos invierno","Seguir sin más","Acelerar"],ok:0},
    {q:"Sol de frente al atardecer:",a:["Usar visera y reducir velocidad","Acelerar","Quitar gafas"],ok:0},
    {q:"Niebla densa en autovía:",a:["200m entre coches","100m","50m"],ok:0},
    {q:"Carretera mojada tras sequía:",a:["Máximo agarre","Máximo peligro por aceite","Igual que siempre"],ok:1}
  ],
  ciudad: [
    {q:"Semáforo ámbar fijo:",a:["Acelero","Freno si puedo seguro","Me salto"],ok:1},
    {q:"Paso de peatones sin semáforo:",a:["Toco claxon","Cedo el paso siempre","Sigo"],ok:1},
    {q:"Doble fila para dejar alguien:",a:["1 minuto vale","Prohibido siempre","Si pongo warning"],ok:1},
    {q:"Ciclista delante:",a:["Adelantar pegado","Mantener 1.5m","Tocar claxon"],ok:1},
    {q:"Niño sale corriendo:",a:["Frenar y claxon","Seguir","Acelerar"],ok:0},
    {q:"Autobús saliendo de parada:",a:["Acelerar","Ceder paso","Tocar claxon"],ok:1},
    {q:"Carril bus ocupado:",a:["Puedo usarlo","Prohibido salvo taxi","Solo motos"],ok:1},
    {q:"Glorieta de 2 carriles:",a:["Carril derecho para salir","Carril izq para salir","Cualquiera"],ok:0},
    {q:"Peatón cruzando fuera de paso:",a:["Frenar si hay peligro","Tiene culpa él","Acelerar"],ok:0},
    {q:"Aparcar en vado:",a:["Permitido 5 min","Prohibido","Solo de noche"],ok:1}
  ],
  carretera: [
    {q:"Adelantar en autovía:",a:["Por derecha","Por izquierda con intermitente","Por donde sea"],ok:1},
    {q:"Cambio de carril:",a:["Sin mirar","Espejo+intermitente+ángulo muerto","Directo"],ok:1},
    {q:"Distancia en autovía seco:",a:["1 segundo","2 segundos mínimo","Medio segundo"],ok:1},
    {q:"Camión delante lento:",a:["Pegarte","Mantener distancia","Adelantar rápido"],ok:1},
    {q:"Cambio rasante:",a:["Adelantar","No adelantar","Acelerar"],ok:1},
    {q:"Curva cerrada:",a:["Frenar dentro","Reducir antes","Acelerar"],ok:1},
    {q:"Adelantar camión largo:",a:["Volver rápido","Esperar visibilidad","Adelantar pegado"],ok:1},
    {q:"Carril de aceleración:",a:["Parar","Incorporarse a velocidad","Entrar lento"],ok:1},
    {q:"Área de servicio:",a:["Salir marcha atrás","Salir por entrada","Seguir señales"],ok:2},
    {q:"Punto negro:",a:["Acelerar","Precaución extra","Ignorar"],ok:1}
  ],
  emergencia: [
    {q:"Reventón rueda delantera:",a:["Freno fuerte","Sujeto volante y desacelero suave","Giro brusco"],ok:1},
    {q:"Avería en autovía:",a:["Me quedo en carril","Arcén+triángulos+chaleco","Salgo corriendo"],ok:1},
    {q:"Accidente con heridos:",a:["Muevo heridos","PAS: Proteger, Avisar, Socorrer","Me voy"],ok:1},
    {q:"Fallo frenos:",a:["Freno motor y freno mano","Acelerar","Ignorar"],ok:0},
    {q:"Incendio motor:",a:["Abrir capó","No abrir, extintor","Echar agua"],ok:1},
    {q:"Pérdida de dirección:",a:["Frenar fuerte","Sujetar volante y frenar suave","Acelerar"],ok:1},
    {q:"Alumbrado falla de noche:",a:["Seguir","Parar en lugar seguro","Acelerar"],ok:1},
    {q:"Atrapado en vehículo:",a:["Romper ventanilla","Esperar","Dormir"],ok:0},
    {q:"Persona inconsciente:",a:["Moverla","Posición lateral seguridad","Nada"],ok:1},
    {q:"Hemorragia grave:",a:["Torniquete","Presión directa","Agua fría"],ok:1}
  ]
};

const COCHES = [
  {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:500,hp:90},
  {id:'c2',nombre:'VW Golf GTI',emoji:'🏎️',precio:1500,hp:245},
  {id:'c3',nombre:'Tesla Model 3',emoji:'⚡',precio:3000,hp:351},
  {id:'c4',nombre:'Porsche 911',emoji:'🏁',precio:5000,hp:450}
];

const ACCESORIOS = [
  {id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nombre:'Neumáticos Racing',emoji:'🛞',precio:200,hp:30},
  {id:'a3',nombre:'Alerón',emoji:'🔰',precio:400,hp:40},
  {id:'a4',nombre:'Nitro',emoji:'💥',precio:600,hp:80}
];

const EMOJI_SHOP = [
  {id:'e1',emoji:'🦄',nombre:'Unicornio',precio:1000},
  {id:'e2',emoji:'👑',nombre:'Corona',precio:800},
  {id:'e3',emoji:'💎',nombre:'Diamante',precio:1200},
  {id:'e4',emoji:'🚀',nombre:'Cohete',precio:600},
  {id:'e5',emoji:'🔥',nombre:'Fuego',precio:500},
  {id:'e6',emoji:'⚡',nombre:'Rayo',precio:700}
];

const TIPS = [
  {emoji:'🧠',txt:'Regla de los 2 segundos: mantén distancia con el de delante'},
  {emoji:'👀',txt:'Mira 12 segundos adelante, no solo el coche de enfrente'},
  {emoji:'🛑',txt:'En STOP cuenta hasta 3 antes de arrancar'},
  {emoji:'💡',txt:'Luces de cruce de día = te ven 3x mejor'},
  {emoji:'📱',txt:'Móvil = 23x más riesgo. Modo avión al conducir'},
  {emoji:'🛞',txt:'Presión baja = +10% consumo y riesgo de reventón'},
  {emoji:'🌧️',txt:'Lluvia: aumenta distancia x2 y reduce velocidad 20%'},
  {emoji:'😴',txt:'Cansado = mismo riesgo que alcohol. Para cada 2h'}
];

let estado = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    general: {idx:0,aciertos:0,racha:0,score:0},
    señales: {idx:0,aciertos:0,racha:0,score:0},
    normas: {idx:0,aciertos:0,racha:0,score:0},
    mecanica: {idx:0,aciertos:0,racha:0,score:0}
  },
  sit: {
    clima: {idx:0,aciertos:0,score:0},
    ciudad: {idx:0,aciertos:0,score:0},
    carretera: {idx:0,aciertos:0,score:0},
    emergencia: {idx:0,aciertos:0,score:0}
  }
};

// INICIO AUTOMÁTICO
window.onload = function() {
  actualizarCoins();
  cargarPregunta('general');
};

// GUARDAR Y COINS
function guardar() {
  localStorage.setItem('gd_coins', estado.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estado.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estado.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estado.emojis));
}

function actualizarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estado.coins}`;
}

// DOPAMINA SYSTEM
function mostrarEmoji(acierto, elemento) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  elemento.style.position = 'relative';
  elemento.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30,20,30] : 100);
}

// NAVEGACIÓN
function cambiarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.classList.add('active');

  if(tab === 'garage') cargarGarage();
  if(tab === 'tienda') cargarTienda();
  if(tab === 'tips') cargarTips();
  if(tab === 'test') cargarPregunta('general');
  if(tab === 'situaciones') cargarSituacion('cl