const CELESTIAL_DATA = {
  matahari: {
    name: "Matahari",
    nickname: "Bintang Induk Tata Surya",
    type: "Bintang Deret Utama (G2V)",
    radius: 30,
    orbitRadius: 0,
    orbitSpeed: 0,
    color: "#fbbf24",
    darkColor: "#c2410c",
    dist: "0 km (Pusat Tata Surya)",
    period: "230 Juta Tahun (Mengitari Galaksi)",
    diameter: "1.392.700 km (109x Bumi)",
    moons: "8 Planet Utama",
    desc: "Pusat gravitasi Tata Surya yang menyumbang 99,86% total massa sistem. Matahari sendiri bergerak mengitari pusat galaksi Bima Sakti (Sagittarius A*).",
    facts: [
      "Suhu intinya mencapai 15 juta °C melalui reaksi fusi hidrogen.",
      "Cahaya Matahari membutuhkan 8 menit 20 detik untuk tiba di Bumi.",
      "Mengorbit Lubang Hitam pusat galaksi pada jarak ~26.670 tahun cahaya."
    ]
  },
  merkurius: {
    name: "Merkurius",
    nickname: "Planet Terkecil & Terdekat",
    type: "Planet Terestrial",
    radius: 5.5,
    orbitRadius: 72,
    orbitSpeed: 0.45,
    color: "#94a3b8",
    darkColor: "#334155",
    dist: "57,9 Juta km (0,39 SA)",
    period: "88 Hari Bumi",
    diameter: "4.879 km",
    moons: "0",
    desc: "Planet berbatu penuh kawah yang paling dekat dengan Matahari dengan perbedaan suhu siang dan malam paling ekstrem.",
    facts: [
      "Siang hari mencapai 430 °C dan malam hari turun hingga -180 °C.",
      "Tidak memiliki atmosfer tebal untuk menahan panas.",
      "Planet tercepat yang mengelilingi Matahari (47 km/detik)."
    ]
  },
  venus: {
    name: "Venus",
    nickname: "Bintang Kejora",
    type: "Planet Terestrial",
    radius: 8.5,
    orbitRadius: 112,
    orbitSpeed: 0.28,
    color: "#fde047",
    darkColor: "#a16207",
    dist: "108,2 Juta km (0,72 SA)",
    period: "225 Hari Bumi",
    diameter: "12.104 km",
    moons: "0",
    desc: "Planet terpanas di Tata Surya akibat efek rumah kaca ekstrem dari atmosfer karbon dioksida yang sangat rapat.",
    facts: [
      "Suhu permukaannya stabil di angka 465 °C.",
      "Berputar searah jarum jam (kebalikan dari Bumi).",
      "Objek paling terang di langit malam Bumi setelah Bulan."
    ]
  },
  bumi: {
    name: "Bumi",
    nickname: "Planet Biru Kehidupan",
    type: "Planet Terestrial",
    radius: 9.5,
    orbitRadius: 158,
    orbitSpeed: 0.2,
    color: "#38bdf8",
    darkColor: "#1e3a8a",
    dist: "149,6 Juta km (1,00 SA)",
    period: "365,25 Hari",
    diameter: "12.742 km",
    moons: "1 (Bulan)",
    satellites: [
      { name: "Bulan", dist: 19, radius: 2.4, speed: 1.8, color: "#e2e8f0" }
    ],
    desc: "Satu-satunya planet dengan lautan air cair stabil dan atmosfer kaya oksigen yang menopang kehidupan.",
    facts: [
      "71% permukaan Bumi diselimuti air.",
      "Bulan menjaga kestabilan kemiringan poros Bumi dan pasang surut laut.",
      "Dilindungi oleh perisai medan magnet dari radiasi angin matahari."
    ]
  },
  mars: {
    name: "Mars",
    nickname: "Planet Merah",
    type: "Planet Terestrial",
    radius: 7.2,
    orbitRadius: 208,
    orbitSpeed: 0.14,
    color: "#f97316",
    darkColor: "#7f1d1d",
    dist: "227,9 Juta km (1,52 SA)",
    period: "687 Hari Bumi",
    diameter: "6.779 km",
    moons: "2 (Phobos & Deimos)",
    satellites: [
      { name: "Phobos", dist: 13, radius: 1.3, speed: 2.5, color: "#cbd5e1" },
      { name: "Deimos", dist: 17, radius: 1.0, speed: 1.5, color: "#94a3b8" }
    ],
    desc: "Planet dingin berwarna merah karat karena kandungan besi oksida, rumah bagi gunung berapi tertinggi di Tata Surya.",
    facts: [
      "Gunung Olympus Mons menjulang setinggi 21 km (3x Everest).",
      "Memiliki tudung es abadi di kedua kutubnya.",
      "Fokus utama eksplorasi robotik penjelajah antariksa saat ini."
    ]
  },
  yupiter: {
    name: "Yupiter",
    nickname: "Raksasa Gas Terbesar",
    type: "Raksasa Gas",
    radius: 19,
    orbitRadius: 300,
    orbitSpeed: 0.08,
    color: "#f59e0b",
    darkColor: "#78350f",
    hasBands: true,
    dist: "778,5 Juta km (5,20 SA)",
    period: "11,86 Tahun",
    diameter: "139.820 km (11x Bumi)",
    moons: "95 Satelit",
    satellites: [
      { name: "Io", dist: 26, radius: 1.6, speed: 2.1, color: "#fde047" },
      { name: "Europa", dist: 32, radius: 1.5, speed: 1.4, color: "#bae6fd" }
    ],
    desc: "Planet terbesar di Tata Surya dengan badai abadi 'Bintik Merah Besar' yang ukurannya melebihi diameter Bumi.",
    facts: [
      "Berotasi sangat cepat, satu hari hanya sekitar 10 jam.",
      "Gravitasinya sering melindungi planet dalam dari hantaman komet.",
      " tersusun sebagian besar atas gas hidrogen dan helium."
    ]
  },
  saturnus: {
    name: "Saturnus",
    nickname: "Permata Bercincin",
    type: "Raksasa Gas",
    radius: 16,
    orbitRadius: 395,
    orbitSpeed: 0.055,
    color: "#fde68a",
    darkColor: "#92400e",
    hasRings: true,
    dist: "1,43 Miliar km (9,58 SA)",
    period: "29,45 Tahun",
    diameter: "116.460 km",
    moons: "146 Satelit",
    satellites: [
      { name: "Titan", dist: 40, radius: 2.2, speed: 0.9, color: "#fbbf24" }
    ],
    desc: "Dikelilingi sistem cincin es spektakuler yang membentang ratusan ribu kilometer namun sangat tipis.",
    facts: [
      "Massa jenisnya lebih ringan dari air.",
      "Cincinnya terdiri dari miliaran bongkahan es dan debu batuan.",
      "Bulan terbesarnya, Titan, memiliki atmosfer tebal dan danau metana."
    ]
  },
  uranus: {
    name: "Uranus",
    nickname: "Raksasa Es Miring",
    type: "Raksasa Es",
    radius: 12.5,
    orbitRadius: 480,
    orbitSpeed: 0.036,
    color: "#67e8f9",
    darkColor: "#155e75",
    dist: "2,87 Miliar km (19,2 SA)",
    period: "84 Tahun",
    diameter: "50.724 km",
    moons: "28 Satelit",
    desc: "Planet es berwarna sian yang berotasi miring 98 derajat sehingga tampak menggelinding di jalurnya.",
    facts: [
      "Suhu atmosfernya mencapai -224 °C (terdingin di Tata Surya).",
      "Warna birunya berasal dari gas metana di atmosfer atas.",
      "Memiliki 13 cincin tipis dan redup."
    ]
  },
  neptunus: {
    name: "Neptunus",
    nickname: "Raksasa Biru Berangin",
    type: "Raksasa Es",
    radius: 12,
    orbitRadius: 560,
    orbitSpeed: 0.025,
    color: "#3b82f6",
    darkColor: "#1e3a8a",
    dist: "4,50 Miliar km (30,1 SA)",
    period: "164,8 Tahun",
    diameter: "49.244 km",
    moons: "16 Satelit",
    desc: "Planet utama terjauh dari Matahari yang memiliki hembusan angin badai supersonik tercepat.",
    facts: [
      "Kecepatan anginnya menembus 2.100 km/jam.",
      "Ditemukan berkat perhitungan matematika sebelum diamati teleskop.",
      "Membutuhkan 165 tahun Bumi untuk satu kali mengelilingi Matahari."
    ]
  },
  pluto: {
    name: "Pluto",
    nickname: "Objek Terbesar Sabuk Kuiper",
    type: "Planet Katai Es",
    radius: 5,
    orbitRadius: 640,
    orbitSpeed: 0.017,
    color: "#cbd5e1",
    darkColor: "#475569",
    dist: "5,9 Miliar km (39,5 SA)",
    period: "248 Tahun",
    diameter: "2.377 km",
    moons: "5 (Charon, Nix...)",
    satellites: [
      { name: "Charon", dist: 11, radius: 2.0, speed: 1.4, color: "#94a3b8" }
    ],
    desc: "Dunia es kerdil di tepi Tata Surya (Sabuk Kuiper) dengan dataran gletser nitrogen berbentuk hati.",
    facts: [
      "Ukurannya lebih kecil daripada Bulan milik Bumi.",
      "Pluto dan Charon berputar saling berhadapan secara terkunci.",
      "Menandai batas luar zona planet sebelum memasuki ruang antarbintang."
    ]
  },
  blackhole: {
    name: "Sagittarius A*",
    nickname: "Lubang Hitam Supermasif Pusat Galaksi",
    type: "Singularitas Gravitasi",
    isBlackHole: true,
    // Diposisikan jauh di luar Tata Surya agar baru tersingkap saat Zoom Out jauh!
    fixedX: 2900,
    fixedY: -650,
    radius: 260,
    color: "#000000",
    darkColor: "#ea580c",
    dist: "26.670 Tahun Cahaya dari Bumi",
    period: "Pusat Galaksi Bima Sakti",
    diameter: "24 Juta km (4,3 Juta Massa Matahari)",
    moons: "Cakram Akresi & Lensa Gravitasi",
    desc: "Lubang hitam supermasif raksasa di jantung galaksi Bima Sakti. Seluruh Tata Surya kita sebenarnya sedang mengorbit objek kolosal ini dari jarak puluhan ribu tahun cahaya.",
    facts: [
      "Tarikan gravitasinya begitu kuat sehingga cahaya pun tidak dapat lolos setelah melewati batas Event Horizon.",
      "Materi gas panas yang tersedot membentuk Cakram Akresi terang yang berputar mendekati kecepatan cahaya.",
      "Membelokkan ruang dan waktu di sekitarnya sesuai teori Relativitas Umum Einstein."
    ]
  }
};

// --- INISIALISASI KANVAS RINGAN (CAP DPR MAKS 1.5 AGAR ENTENG 60 FPS) ---
const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d', { alpha: false });

let width = window.innerWidth;
let height = window.innerHeight;

let isPlaying = true;
let speedFactor = 1.0;
let simTime = 0; // Terkunci 100% saat Pause

let showOrbits = true;
let showLabels = true;
let showBelts = true;

// Kamera: Zoom 0.78x (Tata Surya) bisa di-zoom out sampai 0.045x (Skala Galaksi & Black Hole)
const camera = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  zoom: 0.78,
  targetZoom: 0.78,
  isDragging: false,
  dragMoved: false,
  dragStartX: 0,
  dragStartY: 0
};

let focusedKey = null;
let hoveredKey = null;

// Sudut Orbit Planet & Bulan
const orbitAngles = {};
const satelliteAngles = {};

Object.keys(CELESTIAL_DATA).forEach((key, idx) => {
  orbitAngles[key] = (idx * 1.2) % (Math.PI * 2);
  if (CELESTIAL_DATA[key].satellites) {
    satelliteAngles[key] = CELESTIAL_DATA[key].satellites.map((_, i) => i * 2.1);
  }
});

// --- BINTANG LATAR STATIS DI LAYAR (SCREEN-SPACE: SANGAT RINGAN DI SEMUA LEVEL ZOOM!) ---
const screenStars = [];
for (let i = 0; i < 180; i++) {
  screenStars.push({
    nx: Math.random(), // Posisi ternormalisasi 0..1
    ny: Math.random(),
    size: Math.random() * 1.3 + 0.4,
    alpha: Math.random() * 0.65 + 0.2
  });
}

// Sabuk Asteroid & Kuiper (Jumlah dioptimalkan agar ringan)
const asteroidBelt = [];
for (let i = 0; i < 140; i++) {
  asteroidBelt.push({
    dist: 242 + Math.random() * 32,
    angle: Math.random() * Math.PI * 2,
    speed: 0.09 + (Math.random() - 0.5) * 0.02,
    size: Math.random() * 1.3 + 0.6
  });
}

const kuiperBelt = [];
for (let i = 0; i < 160; i++) {
  kuiperBelt.push({
    dist: 600 + Math.random() * 90,
    angle: Math.random() * Math.PI * 2,
    speed: 0.015 + (Math.random() - 0.5) * 0.005,
    size: Math.random() * 1.5 + 0.6
  });
}

// Partikel Pusaran Black Hole
const bhSwirl = [];
for (let i = 0; i < 90; i++) {
  bhSwirl.push({
    dist: 340 + Math.random() * 520,
    angle: Math.random() * Math.PI * 2,
    speed: 0.4 + Math.random() * 0.7,
    size: Math.random() * 4 + 2,
    warm: Math.random() > 0.3
  });
}

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  // Cap DPR di 1.5x supaya tetap tajam namun sangat ringan saat zoom-in dekat
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// --- POSISI OBJEK ---
function getObjectPosition(key) {
  const obj = CELESTIAL_DATA[key];
  if (obj.isBlackHole) {
    return { x: obj.fixedX, y: obj.fixedY };
  }
  if (!obj.orbitRadius) return { x: 0, y: 0 };
  const a = orbitAngles[key];
  return {
    x: Math.cos(a) * obj.orbitRadius,
    y: Math.sin(a) * obj.orbitRadius
  };
}

// --- VIEWPORT CULLING (CEGAH GAMBAR OBJEK DI LUAR LAYAR SAAT ZOOM-IN) ---
let viewBounds = { left: 0, right: 0, top: 0, bottom: 0 };

function updateViewBounds() {
  const halfW = (width / 2) / camera.zoom;
  const halfH = (height / 2) / camera.zoom;
  viewBounds.left = -camera.x - halfW;
  viewBounds.right = -camera.x + halfW;
  viewBounds.top = -camera.y - halfH;
  viewBounds.bottom = -camera.y + halfH;
}

function isInView(x, y, margin) {
  return (
    x + margin >= viewBounds.left &&
    x - margin <= viewBounds.right &&
    y + margin >= viewBounds.top &&
    y - margin <= viewBounds.bottom
  );
}

// Cek apakah garis lingkaran orbit masuk ke area layar (supaya tidak berat saat zoom ke planet)
function isOrbitRingVisible(cx, cy, radius) {
  const closestX = Math.max(viewBounds.left, Math.min(cx, viewBounds.right));
  const closestY = Math.max(viewBounds.top, Math.min(cy, viewBounds.bottom));
  const minDist = Math.hypot(cx - closestX, cy - closestY);

  const farthestX = Math.max(Math.abs(cx - viewBounds.left), Math.abs(cx - viewBounds.right));
  const farthestY = Math.max(Math.abs(cy - viewBounds.top), Math.abs(cy - viewBounds.bottom));
  const maxDist = Math.hypot(farthestX, farthestY);

  const pad = 20 / camera.zoom;
  return radius + pad >= minDist && radius - pad <= maxDist;
}

// --- GAMBAR BLACK HOLE RAKSASA (RINGAN TANPA SHADOWBLUR) ---
function drawBlackHole(r) {
  // 1. Pendaran Ruang-Waktu Luar
  const glow = ctx.createRadialGradient(0, 0, r * 0.9, 0, 0, r * 3.8);
  glow.addColorStop(0, 'rgba(255, 237, 213, 0.85)');
  glow.addColorStop(0.22, 'rgba(251, 146, 60, 0.45)');
  glow.addColorStop(0.55, 'rgba(194, 65, 12, 0.12)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, r * 3.8, 0, Math.PI * 2);
  ctx.fill();

  // Partikel Materi Tersedot (Berhenti saat Pause karena memakai simTime)
  ctx.save();
  ctx.rotate(-0.24);
  for (let i = 0; i < bhSwirl.length; i++) {
    const p = bhSwirl[i];
    const ang = p.angle + simTime * p.speed;
    const px = Math.cos(ang) * p.dist;
    const py = Math.sin(ang) * p.dist * 0.34;
    ctx.fillStyle = p.warm ? 'rgba(253, 186, 116, 0.65)' : 'rgba(125, 211, 252, 0.65)';
    ctx.fillRect(px - p.size * 0.5, py - p.size * 0.5, p.size, p.size);
  }

  // 2. Lengkungan Lensa Gravitasi Atas/Bawah
  ctx.strokeStyle = 'rgba(251, 146, 60, 0.55)';
  ctx.lineWidth = r * 0.16;
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.22, 0, Math.PI * 2);
  ctx.stroke();

  // 3. Cakram Akresi Belakang
  ctx.save();
  ctx.scale(1, 0.28);
  ctx.strokeStyle = 'rgba(234, 88, 12, 0.7)';
  ctx.lineWidth = r * 0.75;
  ctx.beginPath();
  ctx.arc(0, 0, r * 2.1, Math.PI, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  ctx.restore();

  // 4. Event Horizon (Inti Hitam Pekat) + Cincin Foton Putih Tajam
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#fff7ed';
  ctx.lineWidth = Math.max(2, r * 0.03);
  ctx.beginPath();
  ctx.arc(0, 0, r * 1.02, 0, Math.PI * 2);
  ctx.stroke();

  // 5. Cakram Akresi Depan Melintas di Depan Event Horizon
  ctx.save();
  ctx.rotate(-0.24);
  ctx.scale(1, 0.28);
  const frontGrad = ctx.createLinearGradient(-r * 2.8, 0, r * 2.8, 0);
  frontGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
  frontGrad.addColorStop(0.25, 'rgba(186, 230, 253, 0.92)');
  frontGrad.addColorStop(0.5, '#ffffff');
  frontGrad.addColorStop(0.8, 'rgba(249, 115, 22, 0.9)');
  frontGrad.addColorStop(1, 'rgba(249, 115, 22, 0)');

  ctx.strokeStyle = frontGrad;
  ctx.lineWidth = r * 0.6;
  ctx.beginPath();
  ctx.arc(0, 0, r * 2.1, 0.03 * Math.PI, 0.97 * Math.PI);
  ctx.stroke();
  ctx.restore();
}

// --- GAMBAR PLANET & BULAN (OPTIMAL & CEPAT) ---
function drawPlanetOrSun(key, obj) {
  const r = obj.radius;

  // Korona ringan khusus Matahari
  if (key === 'matahari') {
    const sunGlow = ctx.createRadialGradient(0, 0, r * 0.6, 0, 0, r * 3.0);
    sunGlow.addColorStop(0, 'rgba(251, 191, 36, 0.5)');
    sunGlow.addColorStop(1, 'rgba(251, 191, 36, 0)');
    ctx.fillStyle = sunGlow;
    ctx.beginPath();
    ctx.arc(0, 0, r * 3.0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cincin Saturnus Bagian Belakang
  if (obj.hasRings) {
    ctx.save();
    ctx.rotate(0.32);
    ctx.scale(1, 0.36);
    ctx.strokeStyle = 'rgba(253, 230, 138, 0.65)';
    ctx.lineWidth = r * 0.48;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.85, Math.PI, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  // Bola Planet (Tanpa ctx.clip berat!)
  const grad = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.28, obj.color);
  grad.addColorStop(0.85, obj.darkColor);
  grad.addColorStop(1, '#020617');

  ctx.fillStyle = (key === 'matahari') ? obj.color : grad;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  // Detail Sabuk Yupiter Ringan (hanya digambar saat cukup dekat)
  if (obj.hasBands && camera.zoom > 0.6) {
    ctx.fillStyle = 'rgba(120, 53, 15, 0.35)';
    ctx.fillRect(-r * 0.85, -r * 0.32, r * 1.7, r * 0.16);
    ctx.fillRect(-r * 0.85, r * 0.12, r * 1.7, r * 0.16);
  }

  // Cincin Saturnus Bagian Depan
  if (obj.hasRings) {
    ctx.save();
    ctx.rotate(0.32);
    ctx.scale(1, 0.36);
    ctx.strokeStyle = 'rgba(254, 243, 199, 0.85)';
    ctx.lineWidth = r * 0.48;
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.85, 0, Math.PI);
    ctx.stroke();
    ctx.restore();
  }

  // Satelit Alami / Bulan (Hanya digambar saat zoom > 0.45 & 100% berhenti saat Pause)
  if (obj.satellites && satelliteAngles[key] && camera.zoom > 0.45) {
    const sats = obj.satellites;
    for (let i = 0; i < sats.length; i++) {
      const sat = sats[i];
      const mAngle = satelliteAngles[key][i];
      const mx = Math.cos(mAngle) * sat.dist;
      const my = Math.sin(mAngle) * sat.dist;

      if (showOrbits && camera.zoom > 1.4) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
        ctx.lineWidth = 0.8 / camera.zoom;
        ctx.beginPath();
        ctx.arc(0, 0, sat.dist, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = sat.color;
      ctx.beginPath();
      ctx.arc(mx, my, sat.radius, 0, Math.PI * 2);
      ctx.fill();

      if (showLabels && camera.zoom > 2.2) {
        ctx.fillStyle = '#cbd5e1';
        ctx.font = `${9 / camera.zoom}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(sat.name, mx, my + sat.radius + 9 / camera.zoom);
      }
    }
  }
}

// --- INDIKATOR SKALA OTOMATIS ---
const scaleBadge = document.getElementById('scale-badge');
let lastScaleLabel = '';

function updateScaleIndicator(z) {
  let text = 'Skala: Tata Surya';
  let isGalactic = false;

  if (z > 2.0) text = 'Skala: Orbit Planet & Bulan';
  else if (z >= 0.45) text = 'Skala: Tata Surya';
  else if (z >= 0.22) text = 'Skala: Sabuk Kuiper & Tepi Surya';
  else {
    text = 'Skala: Pusat Galaksi & Black Hole';
    isGalactic = true;
  }

  if (text !== lastScaleLabel) {
    lastScaleLabel = text;
    scaleBadge.textContent = text;
    scaleBadge.classList.toggle('galactic', isGalactic);
  }
}

// --- RENDER LOOP UTAMA (60 FPS STABIL) ---
let lastTime = performance.now();

function animate(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.05);
  lastTime = now;

  // 1. UPDATE WAKTU & ORBIT (BERHENTI TOTAL JIKA DI-PAUSE)
  if (isPlaying && speedFactor > 0) {
    const step = dt * speedFactor;
    simTime += step;

    for (const key in CELESTIAL_DATA) {
      const obj = CELESTIAL_DATA[key];
      if (obj.orbitSpeed) {
        orbitAngles[key] += obj.orbitSpeed * step;
      }
      if (obj.satellites && satelliteAngles[key]) {
        for (let i = 0; i < obj.satellites.length; i++) {
          satelliteAngles[key][i] += obj.satellites[i].speed * step;
        }
      }
    }

    for (let i = 0; i < asteroidBelt.length; i++) asteroidBelt[i].angle += asteroidBelt[i].speed * step;
    for (let i = 0; i < kuiperBelt.length; i++) kuiperBelt[i].angle += kuiperBelt[i].speed * step;
  }

  // 2. INTERPOLASI KAMERA
  if (focusedKey) {
    const pos = getObjectPosition(focusedKey);
    camera.targetX = -pos.x;
    camera.targetY = -pos.y;
  }
  camera.x += (camera.targetX - camera.x) * 0.1;
  camera.y += (camera.targetY - camera.y) * 0.1;
  camera.zoom += (camera.targetZoom - camera.zoom) * 0.1;

  updateViewBounds();
  updateScaleIndicator(camera.zoom);

  // 3. BERSIHKAN LAYAR & GAMBAR BINTANG LATAR (SCREEN-SPACE: 0 OVERHEAD)
  ctx.fillStyle = '#040711';
  ctx.fillRect(0, 0, width, height);

  // Bintang digambar langsung di koordinat layar dengan sedikit efek paralaks ringan
  const parallaxX = camera.x * 0.03;
  const parallaxY = camera.y * 0.03;
  ctx.fillStyle = '#e2e8f0';
  for (let i = 0; i < screenStars.length; i++) {
    const s = screenStars[i];
    const sx = ((s.nx * width + parallaxX) % width + width) % width;
    const sy = ((s.ny * height + parallaxY) % height + height) % height;
    ctx.globalAlpha = s.alpha;
    ctx.fillRect(sx, sy, s.size, s.size);
  }
  ctx.globalAlpha = 1;

  // 4. MASUK KE TRANSFORMASI KAMERA DUNIA
  ctx.save();
  ctx.translate(width / 2, height / 2);
  ctx.scale(camera.zoom, camera.zoom);
  ctx.translate(camera.x, camera.y);

  const invZoom = 1 / camera.zoom;
  const bhPos = CELESTIAL_DATA.blackhole;

  // 5. EFEK TRANSISI SKALA GALAKSI SAAT ZOOM-OUT JAUH (zoom < 0.38)
  if (camera.zoom < 0.38) {
    const galacticAlpha = Math.min(1, (0.38 - camera.zoom) / 0.22);

    // Jalur Orbit Besar Tata Surya Mengelilingi Black Hole Pusat Galaksi
    const galacticDist = Math.hypot(bhPos.fixedX, bhPos.fixedY);
    if (showOrbits && isOrbitRingVisible(bhPos.fixedX, bhPos.fixedY, galacticDist)) {
      ctx.strokeStyle = `rgba(251, 146, 60, ${0.22 * galacticAlpha})`;
      ctx.lineWidth = 1.4 * invZoom;
      ctx.beginPath();
      ctx.arc(bhPos.fixedX, bhPos.fixedY, galacticDist, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Lengan Spiral Galaksi Lembut yang Menghubungkan Black Hole ke Tata Surya
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.09 * galacticAlpha})`;
    ctx.lineWidth = 140;
    ctx.beginPath();
    ctx.arc(bhPos.fixedX, bhPos.fixedY, galacticDist, Math.PI * 0.65, Math.PI * 1.18);
    ctx.stroke();
  }

  // 6. GARIS ORBIT PLANET (Hanya digambar jika terlihat & tidak terlalu kecil)
  if (showOrbits && camera.zoom > 0.08) {
    const orbitFade = Math.min(1, (camera.zoom - 0.08) / 0.12);
    for (const key in CELESTIAL_DATA) {
      const r = CELESTIAL_DATA[key].orbitRadius;
      if (r > 0 && isOrbitRingVisible(0, 0, r)) {
        const active = (hoveredKey === key || focusedKey === key);
        ctx.strokeStyle = active
          ? `rgba(56, 189, 248, ${0.55 * orbitFade})`
          : `rgba(255, 255, 255, ${0.09 * orbitFade})`;
        ctx.lineWidth = (active ? 1.5 : 1.0) * invZoom;
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  // 7. SABUK ASTEROID & KUIPER (Otomatis di-skip jika zoom terlalu jauh atau di luar layar)
  if (showBelts && camera.zoom > 0.16) {
    if (isOrbitRingVisible(0, 0, 258)) {
      ctx.fillStyle = 'rgba(180, 180, 190, 0.45)';
      const pSize = Math.max(1.2, 1.5 * invZoom);
      for (let i = 0; i < asteroidBelt.length; i++) {
        const a = asteroidBelt[i];
        const ax = Math.cos(a.angle) * a.dist;
        const ay = Math.sin(a.angle) * a.dist;
        if (isInView(ax, ay, 5)) ctx.fillRect(ax, ay, pSize, pSize);
      }
    }

    if (isOrbitRingVisible(0, 0, 645)) {
      ctx.fillStyle = 'rgba(147, 197, 253, 0.4)';
      const kSize = Math.max(1.4, 1.6 * invZoom);
      for (let i = 0; i < kuiperBelt.length; i++) {
        const k = kuiperBelt[i];
        const kx = Math.cos(k.angle) * k.dist;
        const ky = Math.sin(k.angle) * k.dist;
        if (isInView(kx, ky, 5)) ctx.fillRect(kx, ky, kSize, kSize);
      }
    }
  }

  // 8. GAMBAR SEMUA OBJEK KOSMIK YANG MASUK LAYAR
  for (const key in CELESTIAL_DATA) {
    const obj = CELESTIAL_DATA[key];

    // Saat zoom-out sangat jauh (< 0.14), sembunyikan planet kecil agar Tata Surya rapi menjadi 1 titik bintang
    if (!obj.isBlackHole && key !== 'matahari' && camera.zoom < 0.12) {
      continue;
    }

    const pos = getObjectPosition(key);
    const cullMargin = obj.isBlackHole ? obj.radius * 4.0 : Math.max(obj.radius * 3.2, 50);

    // LEWATI SEPENUHNYA JIKA OBJEK DI LUAR LAYAR (KUNCI ANTI-LAG SAAT ZOOM IN!)
    if (!isInView(pos.x, pos.y, cullMargin)) {
      continue;
    }

    ctx.save();
    ctx.translate(pos.x, pos.y);

    if (obj.isBlackHole) {
      drawBlackHole(obj.radius);
    } else {
      drawPlanetOrSun(key, obj);
    }

    // Lingkaran Seleksi
    const isSelected = (hoveredKey === key || focusedKey === key);
    if (isSelected) {
      ctx.strokeStyle = obj.isBlackHole ? '#fb923c' : '#38bdf8';
      ctx.lineWidth = 1.6 * invZoom;
      const ringR = obj.isBlackHole ? obj.radius * 2.3 : obj.radius + 7 * invZoom;
      ctx.beginPath();
      ctx.arc(0, 0, ringR, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Label Nama Rapi Sesuai Skala Zoom
    if (showLabels) {
      let labelText = obj.name;
      let shouldDrawLabel = true;

      // Pada skala galaksi jauh, Matahari diberi label "Sistem Tata Surya Kita"
      if (camera.zoom < 0.18) {
        if (key === 'matahari') labelText = '☀ Sistem Tata Surya Kita';
        else if (!obj.isBlackHole) shouldDrawLabel = false;
      }

      if (shouldDrawLabel) {
        ctx.fillStyle = isSelected ? (obj.isBlackHole ? '#fdba74' : '#38bdf8') : '#e2e8f0';
        ctx.font = `${isSelected ? '700' : '600'} ${11.5 * invZoom}px system-ui, sans-serif`;
        ctx.textAlign = 'center';
        const offsetY = (obj.isBlackHole ? obj.radius * 1.9 : obj.radius) + 15 * invZoom;
        ctx.fillText(labelText, 0, offsetY);
      }
    }

    ctx.restore();
  }

  ctx.restore();
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// --- INTERAKSI MOUSE & ZOOM ---
function getHitCelestial(clientX, clientY) {
  const worldX = (clientX - width / 2) / camera.zoom - camera.x;
  const worldY = (clientY - height / 2) / camera.zoom - camera.y;

  for (const key in CELESTIAL_DATA) {
    const obj = CELESTIAL_DATA[key];
    if (!obj.isBlackHole && key !== 'matahari' && camera.zoom < 0.12) continue;

    const pos = getObjectPosition(key);
    const hitR = Math.max(obj.isBlackHole ? obj.radius * 2.1 : obj.radius * 1.5, 16 / camera.zoom);
    if (Math.hypot(worldX - pos.x, worldY - pos.y) <= hitR) {
      return key;
    }
  }
  return null;
}

canvas.addEventListener('mousedown', e => {
  camera.isDragging = true;
  camera.dragMoved = false;
  camera.dragStartX = e.clientX;
  camera.dragStartY = e.clientY;
});

window.addEventListener('mousemove', e => {
  if (camera.isDragging) {
    const dx = (e.clientX - camera.dragStartX) / camera.zoom;
    const dy = (e.clientY - camera.dragStartY) / camera.zoom;
    if (Math.abs(e.clientX - camera.dragStartX) > 3 || Math.abs(e.clientY - camera.dragStartY) > 3) {
      camera.dragMoved = true;
    }
    camera.targetX += dx;
    camera.targetY += dy;
    camera.dragStartX = e.clientX;
    camera.dragStartY = e.clientY;

    if (focusedKey && camera.dragMoved) {
      focusedKey = null;
      document.getElementById('planet-select').value = "";
    }
  } else {
    const hit = getHitCelestial(e.clientX, e.clientY);
    hoveredKey = hit;
    canvas.style.cursor = hit ? 'pointer' : 'grab';
  }
});

window.addEventListener('mouseup', () => {
  camera.isDragging = false;
});

// Zoom: Bisa zoom-out jauh sampai 0.04x hingga Black Hole muncul penuh di layar!
canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.16 : 0.85;
  const nextZoom = Math.max(0.04, Math.min(6.0, camera.targetZoom * factor));

  // Saat user zoom-out ke skala galaksi (< 0.22), geser kamera perlahan agar Tata Surya & Black Hole masuk bingkai bersama
  if (e.deltaY > 0 && nextZoom < 0.22 && !focusedKey) {
    const blend = Math.min(1, (0.22 - nextZoom) / 0.14);
    camera.targetX += (-1350 - camera.targetX) * (0.18 * blend);
    camera.targetY += (300 - camera.targetY) * (0.18 * blend);
  }

  camera.targetZoom = nextZoom;
  document.getElementById('hint-pill').style.opacity = '0';
}, { passive: false });

canvas.addEventListener('click', e => {
  if (camera.dragMoved) return;
  const hit = getHitCelestial(e.clientX, e.clientY);
  if (hit) focusObject(hit);
});

// --- FOKUS KAMERA & PANEL DETAIL ---
const infoPanel = document.getElementById('info-panel');
const planetSelect = document.getElementById('planet-select');

function focusObject(key) {
  const data = CELESTIAL_DATA[key];
  if (!data) return;

  focusedKey = key;
  planetSelect.value = key;

  if (key === 'matahari') {
    camera.targetZoom = 1.1;
  } else if (data.isBlackHole) {
    camera.targetZoom = 0.35;
  } else {
    camera.targetZoom = Math.min(3.8, Math.max(1.8, 38 / data.radius));
  }

  document.getElementById('obj-name').innerText = data.name;
  document.getElementById('obj-nickname').innerText = data.nickname;

  const badge = document.getElementById('obj-type');
  badge.innerText = data.type;
  badge.classList.toggle('bh-badge', !!data.isBlackHole);

  document.getElementById('stat-dist').innerText = data.dist;
  document.getElementById('stat-period').innerText = data.period;
  document.getElementById('stat-diameter').innerText = data.diameter;
  document.getElementById('stat-moons').innerText = data.moons;
  document.getElementById('obj-desc').innerText = data.desc;

  const orb = document.getElementById('obj-orb');
  if (data.isBlackHole) {
    orb.classList.add('is-blackhole');
    orb.style.background = '#000';
    orb.style.boxShadow = '';
  } else {
    orb.classList.remove('is-blackhole');
    orb.style.background = `radial-gradient(circle at 32% 32%, #fff, ${data.color} 45%, ${data.darkColor} 85%, #020617)`;
    orb.style.boxShadow = `0 0 20px ${data.color}55`;
  }

  const factsList = document.getElementById('obj-facts');
  factsList.innerHTML = '';
  data.facts.forEach(fact => {
    const li = document.createElement('li');
    li.innerText = fact;
    factsList.appendChild(li);
  });

  infoPanel.classList.add('open');
  document.getElementById('hint-pill').style.opacity = '0';
}

function resetSolarView() {
  focusedKey = null;
  planetSelect.value = "";
  camera.targetX = 0;
  camera.targetY = 0;
  camera.targetZoom = 0.78;
  infoPanel.classList.remove('open');
}

function showGalacticScale() {
  focusedKey = null;
  planetSelect.value = "";
  // Menempatkan kamera tepat di tengah antara Tata Surya (0,0) dan Black Hole (2900, -650)
  camera.targetX = -1450;
  camera.targetY = 325;
  camera.targetZoom = 0.14;
  document.getElementById('hint-pill').style.opacity = '0';
}

// --- KONTROL TOMBOL DOCK ---
document.getElementById('btn-close-panel').addEventListener('click', () => {
  infoPanel.classList.remove('open');
});

document.getElementById('btn-unfocus').addEventListener('click', resetSolarView);

planetSelect.addEventListener('change', e => {
  if (e.target.value) focusObject(e.target.value);
  else resetSolarView();
});

const btnPlay = document.getElementById('btn-play');
const playIcon = document.getElementById('play-icon');
btnPlay.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playIcon.innerText = isPlaying ? '⏸' : '▶';
  btnPlay.classList.toggle('active', isPlaying);
});

const speedSlider = document.getElementById('speed-slider');
const speedDisplay = document.getElementById('speed-display');
speedSlider.addEventListener('input', e => {
  speedFactor = parseFloat(e.target.value);
  speedDisplay.innerText = speedFactor.toFixed(1) + 'x';
});

document.getElementById('btn-zoom-in').addEventListener('click', () => {
  camera.targetZoom = Math.min(6.0, camera.targetZoom * 1.35);
});

document.getElementById('btn-zoom-out').addEventListener('click', () => {
  const nextZoom = Math.max(0.04, camera.targetZoom * 0.7);
  if (nextZoom < 0.22 && !focusedKey) {
    camera.targetX = -1450;
    camera.targetY = 325;
  }
  camera.targetZoom = nextZoom;
});

document.getElementById('btn-reset-view').addEventListener('click', resetSolarView);
document.getElementById('btn-galactic-view').addEventListener('click', showGalacticScale);

function bindToggle(id, cb) {
  const el = document.getElementById(id);
  el.addEventListener('click', () => {
    cb(el.classList.toggle('active'));
  });
}

bindToggle('toggle-orbits', v => { showOrbits = v; });
bindToggle('toggle-labels', v => { showLabels = v; });
bindToggle('toggle-belts', v => { showBelts = v; });

// --- DUKUNGAN SENTUHAN (MOBILE & TABLET) ---
let initialPinchDist = null;
let lastPinchZoom = camera.targetZoom;

canvas.addEventListener('touchstart', e => {
  if (e.touches.length === 1) {
    // 1 Jari: Geser (Pan)
    camera.isDragging = true;
    camera.dragMoved = false;
    camera.dragStartX = e.touches[0].clientX;
    camera.dragStartY = e.touches[0].clientY;
  } else if (e.touches.length === 2) {
    // 2 Jari: Pinch-to-Zoom
    camera.isDragging = false; // Batalkan geser
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    initialPinchDist = Math.hypot(dx, dy);
    lastPinchZoom = camera.targetZoom;
  }
}, { passive: false });

canvas.addEventListener('touchmove', e => {
  e.preventDefault(); // Mencegah pull-to-refresh / scroll halaman di mobile

  if (e.touches.length === 1 && camera.isDragging) {
    const dx = (e.touches[0].clientX - camera.dragStartX) / camera.zoom;
    const dy = (e.touches[0].clientY - camera.dragStartY) / camera.zoom;
    
    // Cek jika jari bergerak lebih dari batas toleransi (agar tap tidak dianggap drag)
    if (Math.abs(e.touches[0].clientX - camera.dragStartX) > 5 || Math.abs(e.touches[0].clientY - camera.dragStartY) > 5) {
      camera.dragMoved = true;
    }
    
    camera.targetX += dx;
    camera.targetY += dy;
    camera.dragStartX = e.touches[0].clientX;
    camera.dragStartY = e.touches[0].clientY;

    if (focusedKey && camera.dragMoved) {
      focusedKey = null;
      document.getElementById('planet-select').value = "";
    }

  } else if (e.touches.length === 2 && initialPinchDist) {
    // Proses Zoom (Pinch)
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    const currentDist = Math.hypot(dx, dy);
    
    const pinchScale = currentDist / initialPinchDist;
    const nextZoom = Math.max(0.04, Math.min(6.0, lastPinchZoom * pinchScale));
    
    // Transisi halus ke arah galaksi jika zoom out cukup jauh
    if (pinchScale < 1 && nextZoom < 0.22 && !focusedKey) {
      const blend = Math.min(1, (0.22 - nextZoom) / 0.14);
      camera.targetX += (-1350 - camera.targetX) * (0.18 * blend);
      camera.targetY += (300 - camera.targetY) * (0.18 * blend);
    }
    
    camera.targetZoom = nextZoom;
    document.getElementById('hint-pill').style.opacity = '0';
  }
}, { passive: false });

canvas.addEventListener('touchend', e => {
  if (e.touches.length === 0) {
    camera.isDragging = false;
    initialPinchDist = null;
  }

  // Jika disentuh 1 jari dan tidak ada pergeseran berarti itu "Klik" (Tap)
  if (e.changedTouches.length === 1 && !camera.dragMoved && initialPinchDist === null) {
    const hit = getHitCelestial(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    if (hit) focusObject(hit);
  }
});