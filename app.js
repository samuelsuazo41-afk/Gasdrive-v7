// GASDRIVE V7 - 140 PREGUNTAS DGT 2026
const VERSION = "7.0";
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫'];

// 140 PREGUNTAS - 35 por categoría
const PREGUNTAS = {
  general: [
    {q:"¿Velocidad máxima en zona urbana?",a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"¿Qué indica luz amarilla intermitente?",a:["Alto total","Precaución","Acelerar"],ok:1},
    //... mantén todas tus 140 preguntas aquí, están bien
  ],
  señales: [ /*... */ ],
  normas: [ /*... */ ],
  mecanica: [ /*... */ ]
};

const SITUACIONES = {
  clima: [ /*... */ ],
  ciudad: [ /*... */ ],
  carretera: [ /*... */ ],
  emergencia: [ /*... */ ]
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

function guardar() {
  localStorage.setItem('gd_coins', estado.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estado.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estado.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estado.emojis));
  localStorage.setItem('gd_version', VERSION);
}

function actualizarCoins() {
  document.getElementById('coins').textContent = `💰 ${estado.coins}`;
}

function mostrarEmoji(acierto, elemento) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.className = 'emoji-feedback';
  span.textContent = emoji;
  elemento.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [50,50] : 200);
}

function cambiarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.closest('.tab-btn').classList.add('active');
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
    div.onclick = () => responderTest(cat, i, div);
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
    div.onclick = () => responderSituacion(cat, i, div);
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

function cargarGarage() {
  let hp = 0;
  COCHES.forEach(c => { if(estado.coches.includes(c.id)) hp += c.hp; });
  ACCESORIOS.forEach(a => { if(estado.accesorios.includes(a.id)) hp += a.hp; });
  document.getElementById('garage-score').textContent = `🏎️ ${hp} HP`;

  const lista = document.getElementById('garage-lista');
  lista.innerHTML = '';
  COCHES.forEach(c => {
    const owned = estado.coches.includes(c.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (owned? '' : ' locked');
    div.innerHTML = `
      <div style="font-size:60px">${c.emoji}</div>
      <h3>${c.nombre}</h3>
      <div class="price">${c.hp} HP</div>
      ${owned? '<div style="color:#0f5;font-weight:700;margin-top:8px">✅ EN GARAGE</div>' :
        `<div style="color:#FFD700;margin:8px 0">${c.precio} pts</div>
         <button class="btn-buy" onclick="comprarCoche('${c.id}')" ${estado.coins<c.precio?'disabled':''}>COMPRAR</button>`}
    `;
    lista.appendChild(div);
  });

  const acc = document.getElementById('accesorios-lista');
  acc.innerHTML = '';
  ACCESORIOS.forEach(a => {
    const owned = estado.accesorios.includes(a.id);
    const div = document.createElement('div');
    div.className = 'accessory' + (owned? ' equipped' : '');
    div.innerHTML = `
      <div><span style="font-size:24px">${a.emoji}</span> ${a.nombre} <span style="color:#0f5">+${a.hp}HP</span></div>
      ${owned? '<span style="color:#0f5;font-weight:700">EQUIPADO</span>' :
        `<button class="btn-buy" onclick="comprarAccesorio('${a.id}')" ${estado.coins<a.precio?'disabled':''}>${a.precio} pts</button>`}
    `;
    acc.appendChild(div);
  });
}

function comprarCoche(id) {
  const c = COCHES.find(x => x.id === id);
  if(estado.coins >= c.precio &&!estado.coches.includes(id)) {
    estado.coins -= c.precio;
    estado.coches.push(id);
    guardar();
    actualizarCoins();
    cargarGarage();
    alert(`🎉 ${c.nombre} añadido al garage!`);
  }
}

function comprarAccesorio(id) {
  const a = ACCESORIOS.find(x => x.id === id);
  if(estado.coins >= a.precio &&!estado.accesorios.includes(id)) {
    estado.coins -= a.precio;
    estado.accesorios.push(id);
    guardar();
    actualizarCoins();
    cargarGarage();
    alert(`🎉 ${a.nombre} comprado!`);
  }
}

function cargarTienda() {
  const lista = document.getElementById('tienda-lista');
  lista.innerHTML = '';
  EMOJI_SHOP.forEach(e => {
    const owned = estado.emojis.includes(e.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (owned? ' owned' : estado.coins < e.precio? ' locked' : '');
    div.innerHTML = `
      <div class="emoji-big">${e.emoji}</div>
      <div>${e.nombre}</div>
      <div>${e.precio} pts</div>
      ${!owned? `<button class="btn-buy" onclick="comprarEmoji('${e.id}')" ${estado.coins<e.precio?'disabled':''}>COMPRAR</button>` : ''}
    `;
    lista.appendChild(div);
  });
}

function comprarEmoji(id) {
  const e = EMOJI_SHOP.find(x => x.id === id);
  if(estado.coins >= e.precio &&!estado.emojis.includes(id)) {
    estado.coins -= e.precio;
    estado.emojis.push(id);
    guardar();
    actualizarCoins();
    cargarTienda();
  }
}

function cargarTips() {
  const lista = document.getElementById('tips-lista');
  lista.innerHTML = '';
  TIPS.forEach(t => {
    const div = document.createElement('div');
    div.className = 'tip';
    div.innerHTML = `<span class="tip-emoji">${t.emoji}</span>${t.txt}`;
    lista.appendChild(div);
  });
}

// INICIO V7
actualizarCoins();
cargarPregunta('general');
cargarSituacion('clima');