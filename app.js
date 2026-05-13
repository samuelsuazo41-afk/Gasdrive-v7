// GASDRIVE V7.1 - 180 PREGUNTAS DGT 2026
const VERSION = "7.1";

// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// 40 PREGUNTAS TEST DGT
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
    {q:"¿Cuándo usar claxon en ciudad?",a:["Saludar","Evitar accidente","Nunca"],ok:1}
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
    {q:"Estacionamiento permitido:",a:["P azul","P rojo","P negro"],ok:0}
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
    {q:"Uso intermitente obligatorio:",a:["Siempre","Nunca","Solo noche"],ok:0}
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
    {q:"Humo blanco escape:",a:["Normal frío","Junta culata","Aceite quemado"],ok:0}
  ]
};

// 40 PREGUNTAS SITUACIONES REALES
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

// 6 SUPERCOCHES PARA GARAGE
const COCHES = [
  {id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:0,hp:90,unlock:0},
  {id:'c2',nombre:'VW Golf GTI',emoji:'🏎️',precio:500,hp:245,unlock:500},
  {id:'c3',nombre:'BMW M3',emoji:'🚙',precio:1500,hp:510,unlock:1500},
  {id:'c4',nombre:'Tesla Model S',emoji:'⚡',precio:3000,hp:670,unlock:3000},
  {id:'c5',nombre:'Porsche 911',emoji:'🏁',precio:5000,hp:450,unlock:5000},
  {id:'c6',nombre:'Bugatti Chiron',emoji:'🚗💨',precio:10000,hp:1500,unlock:10000}
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

// 30 CONSEJOS ROTATIVOS
const TIPS = [
  {emoji:'🧠',txt:'Regla de los 2 segundos: mantén distancia con el de delante'},
  {emoji:'👀',txt:'Mira 12 segundos adelante, no solo el coche de enfrente'},
  {emoji:'🛑',txt:'En STOP cuenta hasta 3 antes de arrancar'},
  {emoji:'💡',txt:'Luces de cruce de día = te ven 3x mejor'},
  {emoji:'📱',txt:'Móvil = 23x más riesgo. Modo avión al conducir'},
  {emoji:'🛞',txt:'Presión baja = +10% consumo y riesgo de reventón'},
  {emoji:'🌧️',txt:'Lluvia: aumenta distancia x2 y reduce velocidad 20%'},
  {emoji:'😴',txt:'Cansado = mismo riesgo que alcohol. Para cada 2h'},
  {emoji:'🚸',txt:'En zona escolar reduce a 20 km/h siempre'},
  {emoji:'🔄',txt:'Glorieta: carril derecho para salir, izquierdo para seguir'},
  {emoji:'🚨',txt:'Ambulancia con sirena: pégate a la derecha y para'},
  {emoji:'🌙',txt:'Noche: aumenta distancia, los faros engañan'},
  {emoji:'🧥',txt:'Chaleco reflectante obligatorio fuera del coche en carretera'},
  {emoji:'🍼',txt:'Niños <135cm siempre atrás con silla homologada'},
  {emoji:'🚲',txt:'Adelanta ciclista dejando 1.5m mínimo lateral'},
  {emoji:'❄️',txt:'Hielo negro no se ve. Si brilla la carretera, precaución'},
  {emoji:'🚧',txt:'Obras: respeta señales amarillas, son prioritarias'},
  {emoji:'🅿️',txt:'No aparques a menos de 5m de un paso de peatones'},
  {emoji:'💨',txt:'Viento lateral: sujeta volante con las dos manos'},
  {emoji:'🔋',txt:'Coche eléctrico: regenera frenando, ahorra pastillas'},
  {emoji:'🎧',txt:'Auriculares prohibidos. No oyes ambulancias ni claxon'},
  {emoji:'🥃',txt:'Alcohol 0.0 si eres novel o profesional. No hay excusa'},
  {emoji:'🌫️',txt:'Niebla: antiniebla trasera solo si visibilidad <50m'},
  {emoji:'🛣️',txt:'Autovía: carril derecho es para circular, no adelantar'},
  {emoji:'🚦',txt:'Ámbar: solo pasa si no puedes parar seguro'},
  {emoji:'👶',txt:'Airbag + silla atrás en sentido contrario a la marcha'},
  {emoji:'🛠️',txt:'Revisa aceite, agua y presión cada 15 días'},
  {emoji:'📍',txt:'GPS: prográmalo antes de salir, no conduciendo'},
  {emoji:'🔥',txt:'Incendio: no abras capó, usa extintor por rendijas'},
  {emoji:'💪',txt:'Cinturón siempre. 9 de 10 vidas salvadas son por eso'}
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
  console.log("GasDrive V7.1 cargado");
  actualizarCoins();
  cargarPregunta('general');
};

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
  if(tab === 'situaciones') cargarSituacion('clima');
}

function cambiarSubTab(tab, subtab) {
  const contenedor = document.getElementById('tab-' + tab);
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));

  event.target.classList.add('active');
  document.getElementById(`${tab === 'test'?'test':'sit'}-${subtab}`).classList.add('active');

  if(tab === 'test') cargarPregunta(subtab);
  if(tab === 'sit') cargarSituacion(subtab);
}

// DOPAMINA
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

// TEST
function cargarPregunta(cat) {
  const s = estado.test[cat];
  const p = PREGUNTAS[cat][s.idx];
  if(!p) return;

  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.score;
  document.getElementById(`test-${cat}-progress`).style.width = `${(s.idx/PREGUNTAS[cat].length)*100}%`;

  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { responderTest(cat, i, this); };
    cont.appendChild(div);
  });
}

function responderTest(cat, idx, el) {
  const s = estado.test[cat];
  const p = PREGUNTAS[cat][s.idx];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#test-${cat}-opciones.opcion`).forEach(o => o.classList.add('bloqueada'));
  const correcta = idx === p.ok;

  if(correcta) {
    el.classList.add('correcta');
    s.aciertos++;
    s.racha++;
    s.score += 10 + (s.racha * 2);
    estado.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTO! +${10+(s.racha*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    s.racha = 0;
    document.querySelectorAll(`#test-${cat}-opciones.opcion`)[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
  }

  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function siguienteTest(cat) {
  const s = estado.test[cat];
  s.idx++;
  if(s.idx >= PREGUNTAS[cat].length) {
    s.idx = 0;
    alert(`🎉 TEST ${cat.toUpperCase()} COMPLETADO! Score: ${s.score}`);
    s.aciertos = 0;
    s.racha = 0;
  }
  cargarPregunta(cat);
}

// SITUACIONES
function cargarSituacion(cat) {
  const s = estado.sit[cat];
  const p = SITUACIONES[cat][s.idx];
  if(!p) return;

  document.getElementById(`sit-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.score;
  document.getElementById(`sit-${cat}-progress`).style.width = `${(s.idx/SITUACIONES[cat].length)*100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { responderSituacion(cat, i, this); };
    cont.appendChild(div);
  });
}

function responderSituacion(cat, idx, el) {
  const s = estado.sit[cat];
  const p = SITUACIONES[cat][s.idx];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#sit-${cat}-opciones.opcion`).forEach(o => o.classList.add('bloqueada'));
  const correcta = idx === p.ok;

  if(correcta) {
    el.classList.add('correcta');
    s.aciertos++;
    s.score += 20;
    estado.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = '✅ BIEN RESUELTO! +20 pts';
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#sit-${cat}-opciones.opcion`)[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ PELIGRO';
    mostrarEmoji(false, el);
  }

  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function siguienteSituacion(cat) {
  const s = estado.sit[cat];
  s.idx++;
  if(s.idx >= SITUACIONES[cat].length) {
    s.idx = 0;
    alert(`🎉 CASOS ${cat.toUpperCase()} COMPLETADOS!`);
    s.aciertos = 0;
  }
  cargarSituacion(cat);
}

// GARAGE CON 6 COCHES
function cargarGarage() {
  const lista = document.getElementById('garage-lista');
  const hpTotal = estado.coches.reduce((sum, id) => {
    const coche = COCHES.find(c => c.id === id);
    return sum + (coche? coche.hp : 0);
  }, 0);

  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} HP`;

  lista.innerHTML = COCHES.map(coche => {
    const tiene = estado.coches.includes(coche.id);
    return `
      <div class="garage-car ${!tiene? 'locked' : ''}">
        <div style="font-size:40px">${coche.emoji}</div>
        <h3>${coche.nombre}</h3>
        <div>${coche.hp} HP</div>
        ${!tiene? `<div class="price">Desbloquea con ${coche.unlock} pts</div>` : '<div style="color:#0f5">✓ Desbloqueado</div>'}
      </div>
    `;
  }).join('');
}

function cargarTienda() {
  const lista = document.getElementById('emoji-tienda');
  lista.innerHTML = EMOJI_SHOP.map(emoji => {
    const tiene = estado.emojis.includes(emoji.id);
    return `
      <div class="emoji-item ${tiene? 'owned' : ''}" onclick="comprarEmoji('${emoji.id}', ${emoji.precio})">
        <div class="emoji-big">${emoji.emoji}</div>
        <div>${emoji.nombre}</div>
        <div style="color:#FFD700">${emoji.precio} pts</div>
      </div>
    `;
  }).join('');
}

function comprarEmoji(id, precio) {
  if(estado.coins >= precio &&!estado.emojis.includes(id)) {
    estado.coins -= precio;
    estado.emojis.push(id);
    guardar();
    actualizarCoins();
    cargarTienda();
    alert('🎉 Emoji desbloqueado!');
  }
}

// TIPS ROTATIVOS - 30 CONSEJOS
function cargarTips() {
  const lista = document.getElementById('tips-lista');
  const tipsAleatorios = TIPS.sort(() => 0.5 - Math.random()).slice(0, 5);
  lista.innerHTML = tipsAleatorios.map(tip => `
    <div class="tip">
      <span class="tip-emoji">${tip.emoji}</span>
      <span>${tip.txt}</span>
    </div>
  `).join('');
}