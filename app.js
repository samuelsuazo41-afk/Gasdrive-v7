// GASDRIVE V7 - 180 PREGUNTAS DGT 2026
const VERSION = "7.0";

// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

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

// 40 PREGUNTAS SITUACIONES
const SITUACIONES = {
  clima: [
    {q:"Lluvia intensa: ¿qué haces?",a:["Acelero para salir","Reduzco velocidad y aumento distancia","Freno en seco"],ok:1},
    {q:"Niebla espesa:",a:["Largas","Antiniebla + cortas","Sin luces"],ok:1},
    {q:"Hielo en calzada:",a:["Freno fuerte","Marchas largas sin frenar brusco","Acelero"],ok:1}
  ],
  ciudad: [
    {q:"Semáforo ámbar fijo:",a:["Acelero","Freno si puedo seguro","Me salto"],ok:1},
    {q:"Paso de peatones sin semáforo:",a:["Toco claxon","Cedo el paso siempre","Sigo"],ok:1},
    {q:"Doble fila para dejar alguien:",a:["1 minuto vale","Prohibido siempre","Si pongo warning"],ok:1}
  ],
  carretera: [
    {q:"Adelantar en autovía:",a:["Por derecha","Por izquierda con intermitente","Por donde sea"],ok:1},
    {q:"Cambio de carril:",a:["Sin mirar","Espejo+intermitente+ángulo muerto","Directo"],ok:1},
    {q:"Distancia en autovía seco:",a:["1 segundo","2 segundos mínimo","Medio segundo"],ok:1}
  ],
  emergencia: [
    {q:"Reventón rueda delantera:",a:["Freno fuerte","Sujeto volante y desacelero suave","Giro brusco"],ok:1},
    {q:"Avería en autovía:",a:["Me quedo en carril","Arcén+triángulos+chaleco","Salgo corriendo"],ok:1},
    {q:"Accidente con heridos:",a:["Muevo heridos","PAS: Proteger, Avisar, Socorrer","Me voy"],ok:1}
  ]
};

const COCHES = [{id:'c1',nombre:'SEAT Ibiza',emoji:'🚗',precio:500,hp:90}];
const ACCESORIOS = [{id:'a1',nombre:'Turbo',emoji:'💨',precio:300,hp:50}];
const EMOJI_SHOP = [{id:'e1',emoji:'🦄',nombre:'Unicornio',precio:1000}];
const TIPS = [{emoji:'🧠',txt:'Regla de los 2 segundos'}];

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
  console.log("GasDrive V7 cargado");
  actualizarCoins();
  cargarPregunta('general');
};

function guardar() {
  localStorage.setItem('gd_coins', estado.coins);
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
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;';
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

// GARAGE, TIENDA, TIPS
function cargarGarage() {
  const lista = document.getElementById('garage-lista');
  if(lista) lista.innerHTML = '<div class="garage-car"><h3>🚗 SEAT Ibiza</h3><div>90 HP</div></div>';
}

function cargarTienda() {
  const lista = document.getElementById('emoji-tienda');
  if(lista) lista.innerHTML = '<div class="emoji-item"><div class="emoji-big">🦄</div><div>Unicornio</div></div>';
}

function cargarTips() {
  const lista = document.getElementById('tips-lista');
  if(lista) lista.innerHTML = '<div class="tip"><span class="tip-emoji">🧠</span><span>Regla de los 2 segundos</span></div>';
}