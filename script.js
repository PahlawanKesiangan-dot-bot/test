const CELESTIAL_DATA = {
  matahari: {
    name: "Matahari", nickname: "Bintang Induk Tata Surya", type: "Bintang Deret Utama (G2V)",
    radius: 30, orbitRadius: 0, orbitSpeed: 0, color: "#fbbf24", darkColor: "#c2410c",
    dist: "0 km (Pusat Tata Surya)", period: "230 Juta Tahun (Mengitari Galaksi)", diameter: "1.392.700 km (109x Bumi)", moons: "8 Planet Utama",
    desc: "Pusat gravitasi Tata Surya yang menyumbang 99,86% total massa sistem.",
    facts: ["Suhu intinya mencapai 15 juta °C.", "Cahaya Matahari membutuhkan 8 menit 20 detik ke Bumi."]
  },
  merkurius: {
    name: "Merkurius", nickname: "Planet Terkecil & Terdekat", type: "Planet Terestrial",
    radius: 5.5, orbitRadius: 72, orbitSpeed: 0.45, color: "#94a3b8", darkColor: "#334155",
    dist: "57,9 Juta km (0,39 SA)", period: "88 Hari Bumi", diameter: "4.879 km", moons: "0",
    desc: "Planet berbatu penuh kawah yang paling dekat dengan Matahari.",
    facts: ["Planet tercepat yang mengelilingi Matahari."]
  },
  venus: {
    name: "Venus", nickname: "Bintang Kejora", type: "Planet Terestrial",
    radius: 8.5, orbitRadius: 112, orbitSpeed: 0.28, color: "#fde047", darkColor: "#a16207",
    dist: "108,2 Juta km", period: "225 Hari Bumi", diameter: "12.104 km", moons: "0",
    desc: "Planet terpanas di Tata Surya.",
    facts: ["Suhu permukaannya stabil di angka 465 °C."]
  },
  bumi: {
    name: "Bumi", nickname: "Planet Biru", type: "Planet Terestrial",
    radius: 9.5, orbitRadius: 158, orbitSpeed: 0.2, color: "#38bdf8", darkColor: "#1e3a8a",
    dist: "149,6 Juta km", period: "365,25 Hari", diameter: "12.742 km", moons: "1 (Bulan)",
    satellites: [{ name: "Bulan", dist: 19, radius: 2.4, speed: 1.8, color: "#e2e8f0" }],
    desc: "Satu-satunya planet dengan lautan air cair stabil.",
    facts: ["Dilindungi oleh perisai medan magnet."]
  },
  mars: {
    name: "Mars", nickname: "Planet Merah", type: "Planet Terestrial",
    radius: 7.2, orbitRadius: 208, orbitSpeed: 0.14, color: "#f97316", darkColor: "#7f1d1d",
    dist: "227,9 Juta km", period: "687 Hari", diameter: "6.779 km", moons: "2 (Phobos, Deimos)",
    satellites: [
      { name: "Phobos", dist: 13, radius: 1.3, speed: 2.5, color: "#cbd5e1" },
      { name: "Deimos", dist: 17, radius: 1.0, speed: 1.5, color: "#94a3b8" }
    ],
    desc: "Planet dingin berwarna merah karat.",
    facts: ["Gunung Olympus Mons menjulang setinggi 21 km."]
  },
  yupiter: {
    name: "Yupiter", nickname: "Raksasa Gas", type: "Raksasa Gas",
    radius: 19, orbitRadius: 300, orbitSpeed: 0.08, color: "#f59e0b", darkColor: "#78350f", hasBands: true,
    dist: "778,5 Juta km", period: "11,86 Tahun", diameter: "139.820 km", moons: "95 Satelit",
    satellites: [
      { name: "Io", dist: 26, radius: 1.6, speed: 2.1, color: "#fde047" },
      { name: "Europa", dist: 32, radius: 1.5, speed: 1.4, color: "#bae6fd" }
    ],
    desc: "Planet terbesar di Tata Surya.",
    facts: ["Berotasi sangat cepat, satu hari hanya sekitar 10 jam."]
  },
  saturnus: {
    name: "Saturnus", nickname: "Permata Bercincin", type: "Raksasa Gas",
    radius: 16, orbitRadius: 395, orbitSpeed: 0.055, color: "#fde68a", darkColor: "#92400e", hasRings: true,
    dist: "1,43 Miliar km", period: "29,45 Tahun", diameter: "116.460 km", moons: "146 Satelit",
    satellites: [{ name: "Titan", dist: 40, radius: 2.2, speed: 0.9, color: "#fbbf24" }],
    desc: "Dikelilingi sistem cincin es spektakuler.",
    facts: ["Massa jenisnya lebih ringan dari air."]
  },
  uranus: {
    name: "Uranus", nickname: "Raksasa Es Miring", type: "Raksasa Es",
    radius: 12.5, orbitRadius: 480, orbitSpeed: 0.036, color: "#67e8f9", darkColor: "#155e75",
    dist: "2,87 Miliar km", period: "84 Tahun", diameter: "50.724 km", moons: "28 Satelit",
    desc: "Planet es berwarna sian yang berotasi miring.",
    facts: ["Suhu atmosfernya mencapai -224 °C."]
  },
  neptunus: {
    name: "Neptunus", nickname: "Raksasa Biru", type: "Raksasa Es",
    radius: 12, orbitRadius: 560, orbitSpeed: 0.025, color: "#3b82f6", darkColor: "#1e3a8a",
    dist: "4,50 Miliar km", period: "164,8 Tahun", diameter: "49.244 km", moons: "16 Satelit",
    desc: "Planet dengan hembusan angin badai tercepat.",
    facts: ["Kecepatan anginnya menembus 2.100 km/jam."]
  },
  pluto: {
    name: "Pluto", nickname: "Objek Sabuk Kuiper", type: "Planet Katai Es",
    radius: 5, orbitRadius: 640, orbitSpeed: 0.017, color: "#cbd5e1", darkColor: "#475569",
    dist: "5,9 Miliar km", period: "248 Tahun", diameter: "2.377 km", moons: "5",
    satellites: [{ name: "Charon", dist: 11, radius: 2.0, speed: 1.4, color: "#94a3b8" }],
    desc: "Dunia es kerdil di tepi Tata Surya.",
    facts: ["Pluto dan Charon berputar saling mengunci."]
  },
  blackhole: {
    name: "Sagittarius A*", nickname: "Pusat Galaksi", type: "Singularitas Gravitasi", isBlackHole: true,
    fixedX: 2900, fixedY: -650, radius: 260, color: "#000000", darkColor: "#ea580c",
    dist: "26.670 Tahun Cahaya", period: "Pusat Galaksi Bima Sakti", diameter: "24 Juta km", moons: "Cakram Akresi",
    desc: "Lubang hitam supermasif raksasa di jantung Bima Sakti.",
    facts: ["Tarikan gravitasinya begitu kuat sehingga cahaya pun tidak dapat lolos."]
  }
};

const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

let width = window.innerWidth;
let height = window.innerHeight;

let isPlaying = true;
let speedFactor = 1.0;
let simTime = 0;
let showOrbits = true, showLabels = true, showBelts = true;

const camera = {
  x: 0, y: 0, targetX: 0, targetY: 0,
  zoom: 0.78, targetZoom: 0.78,
  isDragging: false, dragMoved: false,
  dragStartX: 0, dragStartY: 0
};

let focusedKey = null, hoveredKey = null;
const orbitAngles = {}, satelliteAngles = {};

Object.keys(CELESTIAL_DATA).forEach((key, idx) => {
  orbitAngles[key] = (idx * 1.2) % (Math.PI * 2);
  if (CELESTIAL_DATA[key].satellites) {
    satelliteAngles[key] = CELESTIAL_DATA[key].satellites.map((_, i) => i * 2.1);
  }
});

const screenStars = [];
for (let i = 0; i < 180; i++) screenStars.push({ nx: Math.random(), ny: Math.random(), size: Math.random() * 1.3 + 0.4, alpha: Math.random() * 0.65 + 0.2 });

const asteroidBelt = [];
for (let i = 0; i < 140; i++) asteroidBelt.push({ dist: 242 + Math.random() * 32, angle: Math.random() * Math.PI * 2, speed: 0.09 + (Math.random() - 0.5) * 0.02, size: Math.random() * 1.3 + 0.6 });

const kuiperBelt = [];
for (let i = 0; i < 160; i++) kuiperBelt.push({ dist: 600 + Math.random() * 90, angle: Math.random() * Math.PI * 2, speed: 0.015 + (Math.random() - 0.5) * 0.005, size: Math.random() * 1.5 + 0.6 });

const bhSwirl = [];
for (let i = 0; i < 90; i++) bhSwirl.push({ dist: 340 + Math.random() * 520, angle: Math.random() * Math.PI * 2, speed: 0.4 + Math.random() * 0.7, size: Math.random() * 4 + 2, warm: Math.random() > 0.3 });

function resizeCanvas() {
  width = window.innerWidth; height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + 'px'; canvas.style.height = height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function getObjectPosition(key) {
  const obj = CELESTIAL_DATA[key];
  if (obj.isBlackHole) return { x: obj.fixedX, y: obj.fixedY };
  if (!obj.orbitRadius) return { x: 0, y: 0 };
  const a = orbitAngles[key];
  return { x: Math.cos(a) * obj.orbitRadius, y: Math.sin(a) * obj.orbitRadius };
}

let viewBounds = { left: 0, right: 0, top: 0, bottom: 0 };
function updateViewBounds() {
  const halfW = (width / 2) / camera.zoom, halfH = (height / 2) / camera.zoom;
  viewBounds.left = -camera.x - halfW; viewBounds.right = -camera.x + halfW;
  viewBounds.top = -camera.y - halfH; viewBounds.bottom = -camera.y + halfH;
}

function isInView(x, y, margin) {
  return (x + margin >= viewBounds.left && x - margin <= viewBounds.right && y + margin >= viewBounds.top && y - margin <= viewBounds.bottom);
}

function isOrbitRingVisible(cx, cy, radius) {
  const closestX = Math.max(viewBounds.left, Math.min(cx, viewBounds.right));
  const closestY = Math.max(viewBounds.top, Math.min(cy, viewBounds.bottom));
  const maxDist = Math.hypot(Math.max(Math.abs(cx - viewBounds.left), Math.abs(cx - viewBounds.right)), Math.max(Math.abs(cy - viewBounds.top), Math.abs(cy - viewBounds.bottom)));
  const pad = 20 / camera.zoom;
  return radius + pad >= Math.hypot(cx - closestX, cy - closestY) && radius - pad <= maxDist;
}

function drawBlackHole(r) {
  const glow = ctx.createRadialGradient(0, 0, r * 0.9, 0, 0, r * 3.8);
  glow.addColorStop(0, 'rgba(255, 237, 213, 0.85)'); glow.addColorStop(0.22, 'rgba(251, 146, 60, 0.45)');
  glow.addColorStop(0.55, 'rgba(194, 65, 12, 0.12)'); glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, r * 3.8, 0, Math.PI * 2); ctx.fill();

  ctx.save(); ctx.rotate(-0.24);
  for (let i = 0; i < bhSwirl.length; i++) {
    const p = bhSwirl[i]; const ang = p.angle + simTime * p.speed;
    ctx.fillStyle = p.warm ? 'rgba(253, 186, 116, 0.65)' : 'rgba(125, 211, 252, 0.65)';
    ctx.fillRect(Math.cos(ang) * p.dist - p.size * 0.5, Math.sin(ang) * p.dist * 0.34 - p.size * 0.5, p.size, p.size);
  }

  ctx.strokeStyle = 'rgba(251, 146, 60, 0.55)'; ctx.lineWidth = r * 0.16;
  ctx.beginPath(); ctx.arc(0, 0, r * 1.22, 0, Math.PI * 2); ctx.stroke();

  ctx.save(); ctx.scale(1, 0.28); ctx.strokeStyle = 'rgba(234, 88, 12, 0.7)'; ctx.lineWidth = r * 0.75;
  ctx.beginPath(); ctx.arc(0, 0, r * 2.1, Math.PI, Math.PI * 2); ctx.stroke(); ctx.restore(); ctx.restore();

  ctx.fillStyle = '#000000'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#fff7ed'; ctx.lineWidth = Math.max(2, r * 0.03); ctx.beginPath(); ctx.arc(0, 0, r * 1.02, 0, Math.PI * 2); ctx.stroke();

  ctx.save(); ctx.rotate(-0.24); ctx.scale(1, 0.28);
  const frontGrad = ctx.createLinearGradient(-r * 2.8, 0, r * 2.8, 0);
  frontGrad.addColorStop(0, 'rgba(56, 189, 248, 0)'); frontGrad.addColorStop(0.25, 'rgba(186, 230, 253, 0.92)');
  frontGrad.addColorStop(0.5, '#ffffff'); frontGrad.addColorStop(0.8, 'rgba(249, 115, 22, 0.9)'); frontGrad.addColorStop(1, 'rgba(249, 115, 22, 0)');
  ctx.strokeStyle = frontGrad; ctx.lineWidth = r * 0.6; ctx.beginPath(); ctx.arc(0, 0, r * 2.1, 0.03 * Math.PI, 0.97 * Math.PI); ctx.stroke();
  ctx.restore();
}

function drawPlanetOrSun(key, obj) {
  const r = obj.radius;
  if (key === 'matahari') {
    const sunGlow = ctx.createRadialGradient(0, 0, r * 0.6, 0, 0, r * 3.0);
    sunGlow.addColorStop(0, 'rgba(251, 191, 36, 0.5)'); sunGlow.addColorStop(1, 'rgba(251, 191, 36, 0)');
    ctx.fillStyle = sunGlow; ctx.beginPath(); ctx.arc(0, 0, r * 3.0, 0, Math.PI * 2); ctx.fill();
  }

  if (obj.hasRings) {
    ctx.save(); ctx.rotate(0.32); ctx.scale(1, 0.36);
    ctx.strokeStyle = 'rgba(253, 230, 138, 0.65)'; ctx.lineWidth = r * 0.48;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.85, Math.PI, Math.PI * 2); ctx.stroke(); ctx.restore();
  }

  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
  grad.addColorStop(0, '#ffffff'); grad.addColorStop(0.28, obj.color);
  grad.addColorStop(0.85, obj.darkColor); grad.addColorStop(1, '#020617');
  
  ctx.fillStyle = (key === 'matahari') ? obj.color : grad;
  ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();

  if (obj.hasBands && camera.zoom > 0.6) {
    ctx.fillStyle = 'rgba(120, 53, 15, 0.35)';
    ctx.fillRect(-r * 0.85, -r * 0.32, r * 1.7, r * 0.16); ctx.fillRect(-r * 0.85, r * 0.12, r * 1.7, r * 0.16);
  }

  if (obj.hasRings) {
    ctx.save(); ctx.rotate(0.32); ctx.scale(1, 0.36);
    ctx.strokeStyle = 'rgba(254, 243, 199, 0.85)'; ctx.lineWidth = r * 0.48;
    ctx.beginPath(); ctx.arc(0, 0, r * 1.85, 0, Math.PI); ctx.stroke(); ctx.restore();
  }

  if (obj.satellites && satelliteAngles[key] && camera.zoom > 0.45) {
    for (let i = 0; i < obj.satellites.length; i++) {
      const sat = obj.satellites[i]; const mAngle = satelliteAngles[key][i];
      const mx = Math.cos(mAngle) * sat.dist, my = Math.sin(mAngle) * sat.dist;
      if (showOrbits && camera.zoom > 1.4) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)'; ctx.lineWidth = 0.8 / camera.zoom;
        ctx.beginPath(); ctx.arc(0, 0, sat.dist, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.fillStyle = sat.color; ctx.beginPath(); ctx.arc(mx, my, sat.radius, 0, Math.PI * 2); ctx.fill();
      if (showLabels && camera.zoom > 2.2) {
        ctx.fillStyle = '#cbd5e1'; ctx.font = `${9 / camera.zoom}px sans-serif`;
        ctx.textAlign = 'center'; ctx.fillText(sat.name, mx, my + sat.radius + 9 / camera.zoom);
      }
    }
  }
}

const scaleBadge = document.getElementById('scale-badge');
let lastScaleLabel = '';
function updateScaleIndicator(z) {
  if (!scaleBadge) return;
  let text = 'Skala: Tata Surya', isGalactic = false;
  if (z > 2.0) text = 'Skala: Orbit Planet & Bulan';
  else if (z >= 0.45) text = 'Skala: Tata Surya';
  else if (z >= 0.22) text = 'Skala: Sabuk Kuiper';
  else { text = 'Skala: Pusat Galaksi'; isGalactic = true; }

  if (text !== lastScaleLabel) {
    lastScaleLabel = text; scaleBadge.textContent = text;
    scaleBadge.classList.toggle('galactic', isGalactic);
  }
}

let lastTime = performance.now();
function animate(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;

  if (isPlaying && speedFactor > 0) {
    const step = dt * speedFactor;
    simTime += step;
    for (const key in CELESTIAL_DATA) {
      if (CELESTIAL_DATA[key].orbitSpeed) orbitAngles[key] += CELESTIAL_DATA[key].orbitSpeed * step;
      if (CELESTIAL_DATA[key].satellites) {
        for (let i = 0; i < CELESTIAL_DATA[key].satellites.length; i++) satelliteAngles[key][i] += CELESTIAL_DATA[key].satellites[i].speed * step;
      }
    }
    for (let i = 0; i < asteroidBelt.length; i++) asteroidBelt[i].angle += asteroidBelt[i].speed * step;
    for (let i = 0; i < kuiperBelt.length; i++) kuiperBelt[i].angle += kuiperBelt[i].speed * step;
  }

  if (focusedKey) {
    const pos = getObjectPosition(focusedKey);
    camera.targetX = -pos.x; camera.targetY = -pos.y;
  }
  camera.x += (camera.targetX - camera.x) * 0.1;
  camera.y += (camera.targetY - camera.y) * 0.1;
  camera.zoom += (camera.targetZoom - camera.zoom) * 0.1;
  updateViewBounds(); updateScaleIndicator(camera.zoom);

  // Background Langit Gelap
  ctx.fillStyle = '#040711';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#e2e8f0';
  for (let i = 0; i < screenStars.length; i++) {
    const s = screenStars[i];
    ctx.globalAlpha = s.alpha;
    ctx.fillRect(((s.nx * width + camera.x * 0.03) % width + width) % width, ((s.ny * height + camera.y * 0.03) % height + height) % height, s.size, s.size);
  }
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.translate(width / 2, height / 2); ctx.scale(camera.zoom, camera.zoom); ctx.translate(camera.x, camera.y);
  const invZoom = 1 / camera.zoom;
  const bhPos = CELESTIAL_DATA.blackhole;

  if (camera.zoom < 0.38) {
    const galacticAlpha = Math.min(1, (0.38 - camera.zoom) / 0.22);
    const galacticDist = Math.hypot(bhPos.fixedX, bhPos.fixedY);
    if (showOrbits && isOrbitRingVisible(bhPos.fixedX, bhPos.fixedY, galacticDist)) {
      ctx.strokeStyle = `rgba(251, 146, 60, ${0.22 * galacticAlpha})`; ctx.lineWidth = 1.4 * invZoom;
      ctx.beginPath(); ctx.arc(bhPos.fixedX, bhPos.fixedY, galacticDist, 0, Math.PI * 2); ctx.stroke();
    }
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.09 * galacticAlpha})`; ctx.lineWidth = 140;
    ctx.beginPath(); ctx.arc(bhPos.fixedX, bhPos.fixedY, galacticDist, Math.PI * 0.65, Math.PI * 1.18); ctx.stroke();
  }

  // --- GARIS ORBIT ---
  if (showOrbits && camera.zoom > 0.08) {
    const orbitFade = Math.min(1, (camera.zoom - 0.08) / 0.12);
    for (const key in CELESTIAL_DATA) {
      const r = CELESTIAL_DATA[key].orbitRadius;
      if (r > 0 && isOrbitRingVisible(0, 0, r)) {
        const active = (hoveredKey === key || focusedKey === key);
        ctx.strokeStyle = active ? `rgba(56, 189, 248, ${0.55 * orbitFade})` : `rgba(255, 255, 255, ${0.09 * orbitFade})`;
        ctx.lineWidth = (active ? 1.5 : 1.0) * invZoom;
        ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.stroke();
      }
    }
  } 

  // --- SABUK ASTEROID ---
  if (showBelts && camera.zoom > 0.16) {
    if (isOrbitRingVisible(0, 0, 258)) {
      ctx.fillStyle = 'rgba(180, 180, 190, 0.45)';
      for (let i = 0; i < asteroidBelt.length; i++) {
        const ax = Math.cos(asteroidBelt[i].angle) * asteroidBelt[i].dist, ay = Math.sin(asteroidBelt[i].angle) * asteroidBelt[i].dist;
        if (isInView(ax, ay, 5)) ctx.fillRect(ax, ay, Math.max(1.2, 1.5 * invZoom), Math.max(1.2, 1.5 * invZoom));
      }
    }
    if (isOrbitRingVisible(0, 0, 645)) {
      ctx.fillStyle = 'rgba(147, 197, 253, 0.4)';
      for (let i = 0; i < kuiperBelt.length; i++) {
        const kx = Math.cos(kuiperBelt[i].angle) * kuiperBelt[i].dist, ky = Math.sin(kuiperBelt[i].angle) * kuiperBelt[i].dist;
        if (isInView(kx, ky, 5)) ctx.fillRect(kx, ky, Math.max(1.4, 1.6 * invZoom), Math.max(1.4, 1.6 * invZoom));
      }
    }
  }

  // --- PLANET & MATAHARI ---
  for (const key in CELESTIAL_DATA) {
    const obj = CELESTIAL_DATA[key];
    if (!obj.isBlackHole && key !== 'matahari' && camera.zoom < 0.12) continue;
    const pos = getObjectPosition(key);
    
    if (!isInView(pos.x, pos.y, obj.isBlackHole ? obj.radius * 4.0 : Math.max(obj.radius * 3.2, 50))) continue;

    ctx.save(); ctx.translate(pos.x, pos.y);
    if (obj.isBlackHole) drawBlackHole(obj.radius); else drawPlanetOrSun(key, obj);

    const isSelected = (hoveredKey === key || focusedKey === key);
    if (isSelected) {
      ctx.strokeStyle = obj.isBlackHole ? '#fb923c' : '#38bdf8'; ctx.lineWidth = 1.6 * invZoom;
      ctx.beginPath(); ctx.arc(0, 0, obj.isBlackHole ? obj.radius * 2.3 : obj.radius + 7 * invZoom, 0, Math.PI * 2); ctx.stroke();
    }

    if (showLabels) {
      let labelText = obj.name; let shouldDrawLabel = true;
      if (camera.zoom < 0.18) {
        if (key === 'matahari') labelText = '☀ Sistem Tata Surya Kita';
        else if (!obj.isBlackHole) shouldDrawLabel = false;
      }
      if (shouldDrawLabel) {
        ctx.fillStyle = isSelected ? (obj.isBlackHole ? '#fdba74' : '#38bdf8') : '#e2e8f0';
        ctx.font = `${isSelected ? '700' : '600'} ${11.5 * invZoom}px system-ui, sans-serif`;
        ctx.textAlign = 'center'; ctx.fillText(labelText, 0, (obj.isBlackHole ? obj.radius * 1.9 : obj.radius) + 15 * invZoom);
      }
    }
    ctx.restore();
  }
  
  ctx.restore(); 
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

function getHitCelestial(clientX, clientY) {
  const worldX = (clientX - width / 2) / camera.zoom - camera.x;
  const worldY = (clientY - height / 2) / camera.zoom - camera.y;
  for (const key in CELESTIAL_DATA) {
    if (!CELESTIAL_DATA[key].isBlackHole && key !== 'matahari' && camera.zoom < 0.12) continue;
    const pos = getObjectPosition(key);
    if (Math.hypot(worldX - pos.x, worldY - pos.y) <= Math.max(CELESTIAL_DATA[key].isBlackHole ? CELESTIAL_DATA[key].radius * 2.1 : CELESTIAL_DATA[key].radius * 1.5, 16 / camera.zoom)) return key;
  }
  return null;
}

// --- MOUSE EVENTS ---
canvas.addEventListener('mousedown', e => {
  camera.isDragging = true; camera.dragMoved = false;
  camera.dragStartX = e.clientX; camera.dragStartY = e.clientY;
});
window.addEventListener('mousemove', e => {
  if (camera.isDragging) {
    if (Math.abs(e.clientX - camera.dragStartX) > 3 || Math.abs(e.clientY - camera.dragStartY) > 3) camera.dragMoved = true;
    camera.targetX += (e.clientX - camera.dragStartX) / camera.zoom; camera.targetY += (e.clientY - camera.dragStartY) / camera.zoom;
    camera.dragStartX = e.clientX; camera.dragStartY = e.clientY;
    if (focusedKey && camera.dragMoved) resetSolarView();
  } else {
    hoveredKey = getHitCelestial(e.clientX, e.clientY); canvas.style.cursor = hoveredKey ? 'pointer' : 'grab';
  }
});
window.addEventListener('mouseup', () => { camera.isDragging = false; });
canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const nextZoom = Math.max(0.04, Math.min(6.0, camera.targetZoom * (e.deltaY < 0 ? 1.16 : 0.85)));
  if (e.deltaY > 0 && nextZoom < 0.22 && !focusedKey) {
    const blend = Math.min(1, (0.22 - nextZoom) / 0.14);
    camera.targetX += (-1350 - camera.targetX) * (0.18 * blend); camera.targetY += (300 - camera.targetY) * (0.18 * blend);
  }
  camera.targetZoom = nextZoom;
  if (document.getElementById('hint-pill')) document.getElementById('hint-pill').style.opacity = '0';
}, { passive: false });
canvas.addEventListener('click', e => {
  if (!camera.dragMoved) { const hit = getHitCelestial(e.clientX, e.clientY); if (hit) focusObject(hit); }
});

// --- TOUCH EVENTS ---
let initialPinchDist = null, lastPinchZoom = camera.targetZoom;
canvas.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    camera.isDragging = true; camera.dragMoved = false;
    camera.dragStartX = e.touches[0].clientX; camera.dragStartY = e.touches[0].clientY;
  } else if (e.touches.length === 2) {
    camera.isDragging = false; 
    initialPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
    lastPinchZoom = camera.targetZoom;
  }
}, { passive: false });
canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.touches.length === 1 && camera.isDragging) {
    if (Math.abs(e.touches[0].clientX - camera.dragStartX) > 5 || Math.abs(e.touches[0].clientY - camera.dragStartY) > 5) camera.dragMoved = true;
    camera.targetX += (e.touches[0].clientX - camera.dragStartX) / camera.zoom; camera.targetY += (e.touches[0].clientY - camera.dragStartY) / camera.zoom;
    camera.dragStartX = e.touches[0].clientX; camera.dragStartY = e.touches[0].clientY;
    if (focusedKey && camera.dragMoved) resetSolarView();
  } else if (e.touches.length === 2 && initialPinchDist) {
    const pinchScale = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) / initialPinchDist;
    const nextZoom = Math.max(0.04, Math.min(6.0, lastPinchZoom * pinchScale));
    if (pinchScale < 1 && nextZoom < 0.22 && !focusedKey) {
      const blend = Math.min(1, (0.22 - nextZoom) / 0.14);
      camera.targetX += (-1350 - camera.targetX) * (0.18 * blend); camera.targetY += (300 - camera.targetY) * (0.18 * blend);
    }
    camera.targetZoom = nextZoom;
    if (document.getElementById('hint-pill')) document.getElementById('hint-pill').style.opacity = '0';
  }
}, { passive: false });
canvas.addEventListener('touchend', e => {
  if (e.touches.length === 0) { camera.isDragging = false; initialPinchDist = null; }
  if (e.changedTouches.length === 1 && !camera.dragMoved && initialPinchDist === null) {
    const hit = getHitCelestial(e.changedTouches[0].clientX, e.changedTouches[0].clientY); if (hit) focusObject(hit);
  }
});

// --- UI SYNC ---
const infoPanel = document.getElementById('info-panel'), planetSelect = document.getElementById('planet-select'), planetSelectMobile = document.getElementById('planet-select-mobile');

function focusObject(key) {
  const data = CELESTIAL_DATA[key]; if (!data) return;
  focusedKey = key;
  if (planetSelect) planetSelect.value = key;
  if (planetSelectMobile) planetSelectMobile.value = key;

  if (key === 'matahari') camera.targetZoom = 1.1;
  else if (data.isBlackHole) camera.targetZoom = 0.35;
  else camera.targetZoom = Math.min(3.8, Math.max(1.8, 38 / data.radius));

  if (document.getElementById('obj-name')) {
    document.getElementById('obj-name').innerText = data.name; document.getElementById('obj-nickname').innerText = data.nickname;
    document.getElementById('obj-type').innerText = data.type; document.getElementById('obj-type').classList.toggle('bh-badge', !!data.isBlackHole);
    document.getElementById('stat-dist').innerText = data.dist; document.getElementById('stat-period').innerText = data.period;
    document.getElementById('stat-diameter').innerText = data.diameter; document.getElementById('stat-moons').innerText = data.moons;
    document.getElementById('obj-desc').innerText = data.desc;

    const orb = document.getElementById('obj-orb');
    if (data.isBlackHole) {
      orb.classList.add('is-blackhole'); orb.style.background = '#000'; orb.style.boxShadow = '';
    } else {
      orb.classList.remove('is-blackhole');
      orb.style.background = `radial-gradient(circle at 32% 32%, #fff, ${data.color} 45%, ${data.darkColor} 85%, #020617)`;
      orb.style.boxShadow = `0 0 20px ${data.color}55`;
    }
    const factsList = document.getElementById('obj-facts'); factsList.innerHTML = '';
    data.facts.forEach(f => { const li = document.createElement('li'); li.innerText = f; factsList.appendChild(li); });
    infoPanel.classList.add('open');
  }
  if (document.getElementById('hint-pill')) document.getElementById('hint-pill').style.opacity = '0';
}

function resetSolarView() {
  focusedKey = null;
  if (planetSelect) planetSelect.value = ""; if (planetSelectMobile) planetSelectMobile.value = "";
  camera.targetX = 0; camera.targetY = 0; camera.targetZoom = 0.78;
  if (infoPanel) infoPanel.classList.remove('open');
}

function showGalacticScale() {
  focusedKey = null;
  if (planetSelect) planetSelect.value = ""; if (planetSelectMobile) planetSelectMobile.value = "";
  camera.targetX = -1450; camera.targetY = 325; camera.targetZoom = 0.14;
  if (document.getElementById('hint-pill')) document.getElementById('hint-pill').style.opacity = '0';
}

// --- BINDING EVENTS ---
if (document.getElementById('btn-close-panel')) document.getElementById('btn-close-panel').addEventListener('click', () => infoPanel.classList.remove('open'));
if (document.getElementById('btn-unfocus')) document.getElementById('btn-unfocus').addEventListener('click', resetSolarView);
if (planetSelect) planetSelect.addEventListener('change', e => e.target.value ? focusObject(e.target.value) : resetSolarView());
if (planetSelectMobile) planetSelectMobile.addEventListener('change', e => e.target.value ? focusObject(e.target.value) : resetSolarView());
if (document.getElementById('btn-reset-view')) document.getElementById('btn-reset-view').addEventListener('click', resetSolarView);
if (document.getElementById('btn-galactic-view')) document.getElementById('btn-galactic-view').addEventListener('click', showGalacticScale);
if (document.getElementById('btn-galactic-mobile')) document.getElementById('btn-galactic-mobile').addEventListener('click', showGalacticScale);
if (document.getElementById('btn-zoom-in')) document.getElementById('btn-zoom-in').addEventListener('click', () => camera.targetZoom = Math.min(6.0, camera.targetZoom * 1.35));
if (document.getElementById('btn-zoom-out')) document.getElementById('btn-zoom-out').addEventListener('click', () => camera.targetZoom = Math.max(0.04, camera.targetZoom * 0.7));
if (document.getElementById('btn-zoom-in-mobile')) document.getElementById('btn-zoom-in-mobile').addEventListener('click', () => camera.targetZoom = Math.min(6.0, camera.targetZoom * 1.35));
if (document.getElementById('btn-zoom-out-mobile')) document.getElementById('btn-zoom-out-mobile').addEventListener('click', () => camera.targetZoom = Math.max(0.04, camera.targetZoom * 0.7));

const btnPlay = document.getElementById('btn-play'), playIcon = document.getElementById('play-icon'), btnPlayMobile = document.getElementById('btn-play-mobile');
function togglePlay() {
  isPlaying = !isPlaying;
  if (playIcon) { playIcon.innerText = isPlaying ? '⏸' : '▶'; btnPlay.classList.toggle('active', isPlaying); }
  if (btnPlayMobile) btnPlayMobile.innerText = isPlaying ? '⏸' : '▶';
}
if (btnPlay) btnPlay.addEventListener('click', togglePlay);
if (btnPlayMobile) btnPlayMobile.addEventListener('click', togglePlay);

const speedSlider = document.getElementById('speed-slider'), speedDisplay = document.getElementById('speed-display');
if (speedSlider) {
  speedSlider.addEventListener('input', e => { speedFactor = parseFloat(e.target.value); if (speedDisplay) speedDisplay.innerText = speedFactor.toFixed(1) + 'x'; });
}

function bindToggle(id, cb) { const el = document.getElementById(id); if (el) el.addEventListener('click', () => cb(el.classList.toggle('active'))); }
bindToggle('toggle-orbits', v => { showOrbits = v; });
bindToggle('toggle-labels', v => { showLabels = v; });
bindToggle('toggle-belts', v => { showBelts = v; });