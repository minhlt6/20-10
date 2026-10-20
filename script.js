/**
 * ============================================================================
 * HAPPY VIETNAMESE WOMEN'S DAY 20/10 — INTERACTIVE DIGITAL GIFT EXPERIENCE
 * ============================================================================
 * Tệp cấu hình cá nhân hóa nằm ngay đầu file để dễ dàng chỉnh sửa tên lớp,
 * lời chúc, danh sách các bạn nữ, màu sắc chủ đạo và nhạc nền.
 */

const WOMENS_DAY_CONFIG = {
  // 1. Thông tin lớp / tập thể gửi lời chúc
  className: "Lớp Đại Học Thân Yêu Của Chúng Mình",
  senderName: "Tập thể các bạn nam trong lớp ❤️",

  // 2. Dòng chữ mở đầu bí ẩn (Chương 1)
  prologueText: "Có một điều đặc biệt mà chúng tớ muốn dành tặng các cậu...",

  // 3. Lời chúc chính (Chương 2)
  mainGreeting: {
    title: "HAPPY WOMEN'S DAY",
    date: "20 / 10",
    headline: "Gửi đến những cô gái tuyệt vời của lớp chúng mình 🌷",
    body: "Chúc các cậu luôn xinh đẹp, rạng rỡ, tự tin và hạnh phúc. Mong rằng mỗi ngày trôi qua đều mang đến thật nhiều niềm vui, những điều ngọt ngào và những cơ hội để các cậu tỏa sáng theo cách riêng của mình."
  },

  // 4. Thông điệp lời kết (Chương 6)
  finaleMessage: {
    line1: "Gửi đến những bông hoa xinh đẹp của lớp chúng mình...",
    line2: "Cảm ơn các cậu vì đã góp phần làm cho những năm tháng đại học trở nên vui vẻ, đáng nhớ và đầy màu sắc.",
    line3: "Chúc các cậu không chỉ có một ngày 20/10 thật đẹp, mà cả 365 ngày đều được yêu thương, hạnh phúc và tự do theo đuổi những điều mình mong muốn.",
    line4: "Happy Vietnamese Women's Day! 💐"
  },

  // 5. Danh sách 20 câu chúc khu vườn hoa (Chương 3 — Không lặp lại cho đến khi mở hết)
  flowerWishes: [
    "Chúc cậu luôn là phiên bản rực rỡ nhất của chính mình!",
    "Mong mọi ước mơ của cậu đều có cơ hội trở thành hiện thực.",
    "Chúc cô gái nhỏ luôn được yêu thương và trân trọng.",
    "Hy vọng nụ cười sẽ luôn hiện diện trên môi cậu.",
    "Chúc cậu mỗi sáng thức dậy đều thấy lòng bình yên và ngập tràn năng lượng tích cực.",
    "Cảm ơn cậu vì đã mang đến lớp mình sự dịu dàng, thông minh và những tiếng cười trong trẻo.",
    "Chúc cậu luôn vững vàng trước mọi thử thách, rực rỡ như đóa hướng dương đón nắng mai.",
    "Mong rằng những năm tháng đại học của cậu sẽ luôn đong đầy kỷ niệm đẹp và điểm A+ rực rỡ!",
    "Chúc cậu đi đến đâu cũng gặp được người tử tế, làm việc gì cũng thuận buồm xuôi gió.",
    "Dù thế giới ngoài kia có bận rộn thế nào, chúc cậu luôn giữ được sự hồn nhiên và ấm áp trong tim.",
    "Chúc cậu không chỉ tỏa sáng hôm nay mà cả 365 ngày trong năm đều ngập tràn hạnh phúc.",
    "Mong cậu luôn tự hào về chính mình — một cô gái bản lĩnh, duyên dáng và tuyệt vời.",
    "Chúc mọi deadline đều nhẹ nhàng qua đi, chỉ còn lại niềm vui và những chuyến đi thanh xuân đáng nhớ.",
    "Chúc cậu luôn tìm thấy niềm vui trong những điều giản dị nhất mỗi ngày.",
    "Mong rằng bầu trời của cậu sẽ luôn trong xanh, và mỗi bước chân đều nở hoa thơm ngát.",
    "Chúc cậu luôn giữ được ngọn lửa đam mê và tự do theo đuổi con đường mình đã chọn.",
    "Gửi đến cậu ngàn lời chúc ngọt ngào nhất: Luôn xinh đẹp, tự tin và ngập tràn yêu thương!",
    "Chúc cô gái của lớp mình luôn tỏa ra nguồn năng lượng dịu dàng khiến ai gặp cũng quý mến.",
    "Mong mọi điều tốt lành, may mắn và bình an sẽ luôn đồng hành cùng cậu trên mọi chặng đường.",
    "Chúc cậu có một ngày 20/10 thật trọn vẹn bên những người thân yêu và những người bạn tuyệt vời!"
  ],

  // 6. Danh sách các bạn nữ trong lớp (Tùy chọn cá nhân hóa)
  femaleClassmates: [
    {
      name: "Tất cả các bạn nữ",
      note: ""
    },
    {
      name: "Minh Anh",
      note: "Chúc Minh Anh luôn giữ vững nụ cười tỏa nắng và nguồn năng lượng tích cực truyền cảm hứng cho cả lớp nhé! ✨"
    },
    {
      name: "Khánh Linh",
      note: "Gửi Khánh Linh — cô gái dịu dàng, tinh tế và luôn hết mình vì tập thể. Chúc cậu một ngày 20/10 thật ngọt ngào! 🌸"
    },
    {
      name: "Phương Thảo",
      note: "Chúc Phương Thảo luôn rạng rỡ, tự tin và gặt hái thật nhiều thành công trên giảng đường đại học! 🌷"
    },
    {
      name: "Thu Hà",
      note: "Chúc Thu Hà luôn vui vẻ, bình an và có thật nhiều kỷ niệm thanh xuân tuyệt đẹp cùng lớp chúng mình! 💖"
    },
    {
      name: "Ngọc Ánh",
      note: "Như chính cái tên của mình, chúc Ngọc Ánh luôn tỏa sáng lấp lánh và hạnh phúc mỗi ngày nhé! 🌟"
    },
    {
      name: "Bảo Ngọc",
      note: "Chúc Bảo Ngọc — viên ngọc quý của lớp mình luôn ngập tràn niềm vui, may mắn và tiếng cười! 💎"
    },
    {
      name: "Thanh Trúc",
      note: "Chúc Thanh Trúc luôn thanh lịch, bản lĩnh và đạt được mọi ước mơ mà cậu đang ấp ủ! 🎋"
    },
    {
      name: "Quỳnh Hương",
      note: "Chúc Quỳnh Hương dịu dàng như đóa quỳnh đêm, luôn được yêu thương và trân trọng! 🌺"
    }
  ],

  // 7. Bảng màu chủ đạo (Tự động đồng bộ vào CSS Variables)
  themeColors: {
    pastelPink: "#ffd1e1",
    blushPink: "#ff8fb6",
    lavender: "#dfc2ff",
    pearlWhite: "#fffafc",
    champagneGold: "#f6d58e"
  },

  // 8. Đường dẫn nhạc nền (Nếu để trống "", hệ thống sẽ tự động chơi giai điệu Piano & Celesta bằng Web Audio API)
  musicUrl: ""
};

/* ============================================================================
   DỮ LIỆU 8 BÔNG HOA TRONG KHU VƯỜN KỲ DIỆU (CHƯƠNG 3)
   ============================================================================ */
const GARDEN_FLOWERS_DATA = [
  {
    id: "rose-velvet",
    name: "Hoa Hồng Nhung",
    type: "rose",
    colorOuter: "#ff5c8d",
    colorInner: "#ffacc5",
    colorCenter: "#ffe699"
  },
  {
    id: "tulip-lavender",
    name: "Hoa Tulip Tím",
    type: "tulip",
    colorOuter: "#b76ef0",
    colorInner: "#e6c7ff",
    colorCenter: "#fff0b3"
  },
  {
    id: "sunflower-gold",
    name: "Hoa Hướng Dương",
    type: "sunflower",
    colorOuter: "#ffbe3b",
    colorInner: "#ffe484",
    colorCenter: "#783f16"
  },
  {
    id: "daisy-pearl",
    name: "Cúc Họa Mi",
    type: "daisy",
    colorOuter: "#fff8fc",
    colorInner: "#ffdbed",
    colorCenter: "#f7c454"
  },
  {
    id: "rose-pastel",
    name: "Hoa Hồng Phấn",
    type: "rose",
    colorOuter: "#ff8fb6",
    colorInner: "#ffd6e6",
    colorCenter: "#fff2bd"
  },
  {
    id: "lotus-stylized",
    name: "Hoa Sen Ngọc",
    type: "lotus",
    colorOuter: "#f279a6",
    colorInner: "#ffc4dc",
    colorCenter: "#f6d58e"
  },
  {
    id: "tulip-champagne",
    name: "Tulip Champagne",
    type: "tulip",
    colorOuter: "#f5b864",
    colorInner: "#ffeaad",
    colorCenter: "#fff9e6"
  },
  {
    id: "lily-starlight",
    name: "Hoa Linh Lan Sao",
    type: "lily",
    colorOuter: "#c48ef7",
    colorInner: "#f3e3ff",
    colorCenter: "#ffe58f"
  }
];

/* ============================================================================
   DỮ LIỆU 6 HỘP QUÀ TINH THẦN BẤT NGỜ (CHƯƠNG 5)
   ============================================================================ */
const MYSTERY_GIFTS_DATA = [
  {
    id: 1,
    icon: "💐",
    shortTitle: "Hộp Quà Sắc Hoa",
    subtitle: "Một bó hoa rực rỡ",
    boxGradient: "linear-gradient(135deg, #ff94bd, #d93b75)",
    ribbonGradient: "linear-gradient(180deg, #fff6d1, #e8b856)",
    giftTitle: "Một Bó Hoa Vĩnh Cửu Rực Rỡ",
    message: "Dành tặng cậu bó hoa kết từ những đóa hồng phấn, tulip lavender và ánh nắng ban mai. Bó hoa này sẽ không bao giờ tàn, giống như nét thanh xuân tươi đẹp và sự rạng rỡ của cậu trong ký ức lớp chúng mình!",
    svgType: "bouquet"
  },
  {
    id: 2,
    icon: "💌",
    shortTitle: "Hộp Quà Chân Tình",
    subtitle: "Một tấm thiệp đặc biệt",
    boxGradient: "linear-gradient(135deg, #c78bf5, #7e3eb8)",
    ribbonGradient: "linear-gradient(180deg, #ffe3f0, #ff99c2)",
    giftTitle: "Tấm Thiệp Viết Tay Đặc Biệt",
    message: "“Cảm ơn cậu vì đã luôn là mảnh ghép dịu dàng và tuyệt vời của lớp mình. Có những ngày học hành vất vả, chỉ cần nhìn thấy nụ cười của các bạn nữ trong lớp là mọi mệt mỏi đều tan biến. Chúc cậu luôn hạnh phúc nhé!”",
    svgType: "letter"
  },
  {
    id: 3,
    icon: "👑",
    shortTitle: "Hộp Quà Vương Miện",
    subtitle: "Danh hiệu tỏa sáng nhất",
    boxGradient: "linear-gradient(135deg, #f6cc76, #c4872b)",
    ribbonGradient: "linear-gradient(180deg, #fffafc, #ffb8d2)",
    giftTitle: "Danh Hiệu: “Cô Gái Tỏa Sáng Nhất Hôm Nay”",
    message: "Trao tặng cậu chiếc vương miện ánh sao ngày 20/10! Không cần so sánh với bất kỳ ai, cậu chính là nữ hoàng trong câu chuyện của riêng mình — thông minh, duyên dáng, độc nhất và vô cùng đáng quý.",
    svgType: "crown"
  },
  {
    id: 4,
    icon: "🍀",
    shortTitle: "Hộp Quà May Mắn",
    subtitle: "Một lời chúc may mắn",
    boxGradient: "linear-gradient(135deg, #74d9a8, #2b8f64)",
    ribbonGradient: "linear-gradient(180deg, #fff5cc, #f0c265)",
    giftTitle: "Cỏ Bốn Lá Pha Lê May Mắn",
    message: "Cánh thứ nhất cho sức khỏe dồi dào, cánh thứ hai cho điểm số và sự nghiệp thăng hoa, cánh thứ ba cho tình bạn & tình yêu ngọt ngào, và cánh thứ tư cho bình an luôn ở bên cậu suốt 365 ngày!",
    svgType: "clover"
  },
  {
    id: 5,
    icon: "🌌",
    shortTitle: "Hộp Quà Ngân Hà",
    subtitle: "Một bầu trời đầy sao",
    boxGradient: "linear-gradient(135deg, #758bf7, #353f9e)",
    ribbonGradient: "linear-gradient(180deg, #fff4d4, #e5b655)",
    giftTitle: "Bầu Trời Đầy Sao Dành Riêng Cho Cậu",
    message: "Chúng tớ gói cả một dải ngân hà nhỏ vào chiếc hộp này. Khi nào cảm thấy áp lực hay mỏi mệt, hãy nhớ rằng cậu luôn là một vì sao lấp lánh và luôn có cả tập thể lớp mình ủng hộ phía sau!",
    svgType: "galaxy"
  },
  {
    id: 6,
    icon: "💖",
    shortTitle: "Hộp Quà Trái Tim",
    subtitle: "Trái tim thông điệp bí mật",
    boxGradient: "linear-gradient(135deg, #ff789e, #b81d53)",
    ribbonGradient: "linear-gradient(180deg, #fff5d6, #f2c464)",
    giftTitle: "Trái Tim Pha Lê & Thông Điệp Bí Mật",
    message: "Bí mật nhỏ từ các bạn nam trong lớp: “Thật may mắn vì thanh xuân đại học của chúng tớ có sự hiện diện của các cậu. Chúc những cô gái của lớp mình mãi mãi xinh đẹp, tự do và được yêu thương trọn vẹn!”",
    svgType: "heart"
  }
];

/* ============================================================================
   HỆ THỐNG ÂM THANH & NHẠC NỀN PHÉP THUẬT (WEB AUDIO API + MP3 FALLBACK)
   ============================================================================ */
class MagicalAudioEngine {
  constructor(musicUrl = "") {
    this.musicUrl = musicUrl;
    this.ctx = null;
    this.isPlayingMusic = false;
    this.isMuted = true;
    this.melodyTimer = null;
    this.externalAudio = null;
    this.noteStep = 0;

    if (this.musicUrl && this.musicUrl.trim() !== "") {
      this.externalAudio = new Audio(this.musicUrl);
      this.externalAudio.loop = true;
      this.externalAudio.volume = 0.45;
      this.externalAudio.addEventListener("error", () => {
        this.externalAudio = null;
      });
    }
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  startMusic() {
    this.ensureContext();
    this.isMuted = false;
    this.isPlayingMusic = true;
    this.updateMusicUI();

    if (this.externalAudio) {
      this.externalAudio.play().catch(() => {
        this.startSynthPianoLoop();
      });
    } else {
      this.startSynthPianoLoop();
    }
  }

  stopMusic() {
    this.isMuted = true;
    this.isPlayingMusic = false;
    this.updateMusicUI();

    if (this.externalAudio) {
      this.externalAudio.pause();
    }
    if (this.melodyTimer) {
      clearInterval(this.melodyTimer);
      this.melodyTimer = null;
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopMusic();
    } else {
      this.startMusic();
    }
  }

  updateMusicUI() {
    const btn = document.getElementById("btn-music-toggle");
    const icon = document.getElementById("music-icon");
    if (!btn || !icon) return;
    if (this.isPlayingMusic) {
      btn.classList.add("playing");
      btn.setAttribute("aria-pressed", "true");
      icon.textContent = "🎵";
    } else {
      btn.classList.remove("playing");
      btn.setAttribute("aria-pressed", "false");
      icon.textContent = "🔇";
    }
  }

  // Giai điệu Piano & Music Box dịu dàng (Hợp âm Fmaj7 - Dm7 - Bbmaj7 - C7)
  startSynthPianoLoop() {
    if (this.melodyTimer) clearInterval(this.melodyTimer);

    const sequence = [
      { bass: 174.61, notes: [349.23, 440.0, 523.25, 659.25] }, // Fmaj7
      { bass: 146.83, notes: [293.66, 440.0, 523.25, 587.33] }, // Dm7
      { bass: 233.08, notes: [293.66, 349.23, 440.0, 587.33] }, // Bbmaj7
      { bass: 196.0,  notes: [329.63, 392.0, 523.25, 659.25] }  // C6/G
    ];

    const playStep = () => {
      if (this.isMuted || !this.ctx) return;
      const bar = Math.floor(this.noteStep / 4) % sequence.length;
      const beat = this.noteStep % 4;
      const chord = sequence[bar];

      if (beat === 0) {
        this.playWarmPianoTone(chord.bass, 2.4, 0.045);
      }
      const melodyFreq = chord.notes[beat];
      this.playWarmPianoTone(melodyFreq, 1.5, 0.042);

      if (beat === 2 && Math.random() > 0.35) {
        this.playWarmPianoTone(melodyFreq * 2, 1.1, 0.018);
      }
      this.noteStep++;
    };

    playStep();
    this.melodyTimer = setInterval(playStep, 680);
  }

  playWarmPianoTone(freq, duration = 1.4, maxGain = 0.05) {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();

    osc1.type = "sine";
    osc2.type = "triangle";
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now);

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1650, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(maxGain, now + 0.035);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.05);
    osc2.stop(now + duration + 0.05);
  }

  // Hiệu ứng âm thanh phép thuật khi mở hộp quà
  playGiftOpenChime() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playWarmPianoTone(freq, 1.3, 0.055);
      }, idx * 75);
    });
  }

  // Hiệu ứng âm thanh khi hoa nở
  playFlowerChime(index = 0) {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const pentatonic = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];
    const base = pentatonic[index % pentatonic.length];
    this.playWarmPianoTone(base, 1.1, 0.05);
    setTimeout(() => {
      this.playWarmPianoTone(base * 1.5, 0.9, 0.03);
    }, 90);
  }

  // Hiệu ứng âm thanh khi gửi điều ước bay lên trời
  playWishStarSound() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    const notes = [587.33, 783.99, 987.77, 1174.66, 1567.98];
    notes.forEach((f, i) => {
      setTimeout(() => this.playWarmPianoTone(f, 1.0, 0.042), i * 85);
    });
  }

  // Hiệu ứng pháo hoa nhẹ
  playFireworkSparkle() {
    this.ensureContext();
    if (!this.ctx || this.isMuted) return;
    this.playWarmPianoTone(880 + Math.random() * 520, 0.7, 0.035);
  }
}

/* ============================================================================
   HỆ THỐNG HẠT ÁNH SÁNG, CÁNH HOA, PHÁO HOA & CON TRỎ (AMBIENT CANVAS)
   ============================================================================ */
class AmbientCanvasSystem {
  constructor(canvas, audioEngine) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.audio = audioEngine;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.activeChapter = 1;
    this.reducedMotion = false;
    this.isLowPower = window.innerWidth < 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

    this.stars = [];
    this.convergeParticles = [];
    this.petals = [];
    this.cursorTrail = [];
    this.fireworks = [];
    this.sparks = [];

    this.resize();
    this.initStars();
    this.initPrologueConvergence();
    this.initPetals();
    this.bindEvents();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  initStars() {
    const count = this.isLowPower ? 55 : 115;
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.3 ? "#fff8fc" : "#ffe6a3"
      });
    }
  }

  // Các hạt ánh sáng di chuyển và hội tụ về hộp quà trung tâm ở Chương 1
  initPrologueConvergence() {
    const count = this.isLowPower ? 28 : 55;
    this.convergeParticles = [];
    for (let i = 0; i < count; i++) {
      this.convergeParticles.push(this.createConvergeParticle());
    }
  }

  createConvergeParticle() {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.max(this.width, this.height) * (0.25 + Math.random() * 0.45);
    return {
      angle,
      dist,
      speed: 0.9 + Math.random() * 1.6,
      spin: (Math.random() - 0.5) * 0.015,
      size: 1.5 + Math.random() * 2.4,
      color: Math.random() > 0.45 ? "#ff9ec4" : "#f6d58e"
    };
  }

  initPetals() {
    const count = this.isLowPower ? 16 : 32;
    this.petals = [];
    for (let i = 0; i < count; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    const rising = this.activeChapter === 6;
    const colors = ["#ffb3cf", "#ff85b2", "#e2b8ff", "#ffd9e8", "#fce1a8"];
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : (rising ? this.height + 20 : -20),
      size: 6 + Math.random() * 8,
      speedY: rising ? -(0.6 + Math.random() * 1.2) : (0.65 + Math.random() * 1.25),
      speedX: (Math.random() - 0.5) * 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.025,
      swayPhase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.55 + Math.random() * 0.35
    };
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      this.resize();
      this.initStars();
    });

    const addTrailPoint = (x, y) => {
      if (this.reducedMotion) return;
      const limit = this.isLowPower ? 25 : 55;
      if (this.cursorTrail.length > limit) return;
      for (let i = 0; i < 2; i++) {
        this.cursorTrail.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2 - 0.4,
          size: 1.8 + Math.random() * 2.5,
          life: 1,
          decay: 0.024 + Math.random() * 0.018,
          color: Math.random() > 0.5 ? "#ffe9a8" : "#ff9ec6"
        });
      }
    };

    window.addEventListener("mousemove", (e) => addTrailPoint(e.clientX, e.clientY), { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (e.touches && e.touches[0]) {
        addTrailPoint(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
  }

  // Hiệu ứng nổ kim tuyến / hạt sáng tại tọa độ bất kỳ
  burstSparkles(x, y, count = 65) {
    if (this.reducedMotion) return;
    const actualCount = this.isLowPower ? Math.floor(count * 0.6) : count;
    const palette = ["#fff6d6", "#f6d58e", "#ff8fb6", "#ffb8d2", "#dfc2ff", "#ffffff"];

    for (let i = 0; i < actualCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 7.5;
      this.sparks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        gravity: 0.08,
        size: 2 + Math.random() * 3.5,
        life: 1,
        decay: 0.012 + Math.random() * 0.016,
        color: palette[Math.floor(Math.random() * palette.length)],
        isConfetti: Math.random() > 0.45,
        rot: Math.random() * Math.PI
      });
    }
  }

  // Bắn pháo hoa chúc mừng
  launchFireworkSalvo(salvoCount = 3) {
    if (this.reducedMotion) return;
    for (let i = 0; i < salvoCount; i++) {
      setTimeout(() => {
        const x = this.width * (0.2 + Math.random() * 0.6);
        const y = this.height * (0.18 + Math.random() * 0.34);
        this.burstSparkles(x, y, 55);
        if (this.audio) this.audio.playFireworkSparkle();
      }, i * 340);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Vẽ những ngôi sao lấp lánh trên nền
    for (const s of this.stars) {
      if (!this.reducedMotion) {
        s.phase += s.twinkleSpeed;
      }
      const currentAlpha = s.alpha * (0.55 + 0.45 * Math.sin(s.phase));
      this.ctx.save();
      this.ctx.globalAlpha = currentAlpha;
      this.ctx.fillStyle = s.color;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // 2. Chương 1: Các hạt ánh sáng hội tụ vào hộp quà trung tâm
    if (this.activeChapter === 1 && !this.reducedMotion) {
      const cx = this.width / 2;
      const cy = this.height * 0.42;

      for (let i = 0; i < this.convergeParticles.length; i++) {
        const p = this.convergeParticles[i];
        p.dist -= p.speed;
        p.angle += p.spin;
        if (p.dist < 22) {
          this.convergeParticles[i] = this.createConvergeParticle();
          continue;
        }
        const x = cx + Math.cos(p.angle) * p.dist;
        const y = cy + Math.sin(p.angle) * p.dist * 0.75;

        this.ctx.save();
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 10;
        this.ctx.beginPath();
        this.ctx.arc(x, y, p.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    // 3. Cánh hoa rơi (Chương 2, 3, 5) hoặc Cánh hoa bay từ dưới lên (Chương 6)
    if (this.activeChapter !== 1 && this.activeChapter !== 4 && !this.reducedMotion) {
      const isRising = this.activeChapter === 6;
      for (let i = 0; i < this.petals.length; i++) {
        const pt = this.petals[i];
        pt.swayPhase += 0.02;
        pt.x += pt.speedX + Math.sin(pt.swayPhase) * 0.45;
        pt.y += isRising ? -Math.abs(pt.speedY) : Math.abs(pt.speedY);
        pt.rotation += pt.rotSpeed;

        if (!isRising && pt.y > this.height + 25) {
          this.petals[i] = this.createPetal(false);
        } else if (isRising && pt.y < -25) {
          this.petals[i] = this.createPetal(false);
        }

        this.ctx.save();
        this.ctx.translate(pt.x, pt.y);
        this.ctx.rotate(pt.rotation);
        this.ctx.globalAlpha = pt.alpha;
        this.ctx.fillStyle = pt.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -pt.size);
        this.ctx.bezierCurveTo(pt.size, -pt.size * 0.5, pt.size, pt.size * 0.8, 0, pt.size);
        this.ctx.bezierCurveTo(-pt.size, pt.size * 0.8, -pt.size, -pt.size * 0.5, 0, -pt.size);
        this.ctx.fill();
        this.ctx.restore();
      }
    }

    // 4. Pháo hoa ánh sáng & Confetti
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const sp = this.sparks[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.vy += sp.gravity;
      sp.vx *= 0.985;
      sp.life -= sp.decay;

      if (sp.life <= 0) {
        this.sparks.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, sp.life);
      this.ctx.fillStyle = sp.color;
      this.ctx.shadowColor = sp.color;
      this.ctx.shadowBlur = 8;

      if (sp.isConfetti) {
        this.ctx.translate(sp.x, sp.y);
        this.ctx.rotate(sp.rot + sp.life * 4);
        this.ctx.fillRect(-sp.size, -sp.size * 0.5, sp.size * 2, sp.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        this.ctx.fill();
      }
      this.ctx.restore();
    }

    // 5. Hiệu ứng hạt sáng đi theo con trỏ chuột / chạm cảm ứng
    for (let i = this.cursorTrail.length - 1; i >= 0; i--) {
      const tr = this.cursorTrail[i];
      tr.x += tr.vx;
      tr.y += tr.vy;
      tr.life -= tr.decay;
      if (tr.life <= 0) {
        this.cursorTrail.splice(i, 1);
        continue;
      }
      this.ctx.save();
      this.ctx.globalAlpha = tr.life;
      this.ctx.fillStyle = tr.color;
      this.ctx.shadowColor = tr.color;
      this.ctx.shadowBlur = 6;
      this.ctx.beginPath();
      this.ctx.arc(tr.x, tr.y, tr.size * tr.life, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }
  }
}

/* ============================================================================
   CHƯƠNG 4 — HỆ THỐNG BẦU TRỜI ĐIỀU ƯỚC & CHÒM SAO (WISH SKY CANVAS)
   ============================================================================ */
class WishSkySystem {
  constructor(canvas, audioEngine) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.audio = audioEngine;
    this.stars = [];
    this.flyingWishes = [];
    this.bgTwinkles = [];
    this.width = 800;
    this.height = 340;

    this.resize();
    this.initDefaultConstellation();
    this.bindEvents();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = Math.max(300, rect.width);
    this.height = Math.max(240, rect.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.bgTwinkles = [];
    for (let i = 0; i < 45; i++) {
      this.bgTwinkles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: 0.7 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  initDefaultConstellation() {
    const presets = [
      { rx: 0.16, ry: 0.58, text: "Chúc các bạn nữ lớp mình luôn rạng rỡ và hạnh phúc! 🌷" },
      { rx: 0.31, ry: 0.34, text: "Mong kỳ này cả lớp đều đạt học bổng và điểm cao! ✨" },
      { rx: 0.49, ry: 0.46, text: "Tình bạn đại học của chúng mình mãi bền chặt! 💖" },
      { rx: 0.65, ry: 0.28, text: "Mọi ước mơ tuổi 20 đều sớm thành hiện thực! 🌟" },
      { rx: 0.81, ry: 0.52, text: "365 ngày ngập tràn tiếng cười và yêu thương! 💐" }
    ];

    this.stars = presets.map((p) => ({
      x: p.rx * this.width,
      y: p.ry * this.height,
      rx: p.rx,
      ry: p.ry,
      text: p.text,
      radius: 4.5,
      pulse: Math.random() * Math.PI * 2,
      flare: 0
    }));
    this.updateStarCounter();
  }

  updateStarCounter() {
    const counter = document.getElementById("star-wish-count");
    if (counter) counter.textContent = String(this.stars.length);
  }

  bindEvents() {
    window.addEventListener("resize", () => {
      const oldW = this.width;
      const oldH = this.height;
      this.resize();
      this.stars.forEach((s) => {
        s.x = (s.rx || s.x / oldW) * this.width;
        s.y = (s.ry || s.y / oldH) * this.height;
      });
    });

    const tooltip = document.getElementById("star-wish-tooltip");
    const handlePointer = (clientX, clientY) => {
      if (!tooltip) return;
      const rect = this.canvas.getBoundingClientRect();
      const mx = clientX - rect.left;
      const my = clientY - rect.top;

      let found = null;
      for (const s of this.stars) {
        const dist = Math.hypot(mx - s.x, my - s.y);
        if (dist < 22) {
          found = s;
          break;
        }
      }

      if (found) {
        tooltip.hidden = false;
        tooltip.textContent = `✨ “${found.text}”`;
        tooltip.style.left = `${Math.min(Math.max(found.x, 90), this.width - 90)}px`;
        tooltip.style.top = `${Math.max(found.y, 45)}px`;
      } else {
        tooltip.hidden = true;
      }
    };

    this.canvas.addEventListener("mousemove", (e) => handlePointer(e.clientX, e.clientY));
    this.canvas.addEventListener("click", (e) => handlePointer(e.clientX, e.clientY));
    this.canvas.addEventListener("mouseleave", () => {
      if (tooltip) tooltip.hidden = true;
    });
  }

  // Biến điều ước thành ngôi sao bay lên theo đường cong Bezier mềm mại
  launchWishStar(wishText, onArrived) {
    if (this.audio) this.audio.playWishStarSound();

    const startX = this.width * 0.5;
    const startY = this.height - 12;
    const targetRx = 0.15 + Math.random() * 0.7;
    const targetRy = 0.2 + Math.random() * 0.52;
    const targetX = targetRx * this.width;
    const targetY = targetRy * this.height;

    const ctrlX = (startX + targetX) / 2 + (Math.random() - 0.5) * 220;
    const ctrlY = Math.min(startY, targetY) - 60;

    this.flyingWishes.push({
      t: 0,
      speed: 0.016,
      startX,
      startY,
      ctrlX,
      ctrlY,
      targetX,
      targetY,
      targetRx,
      targetRy,
      text: wishText,
      trail: [],
      onArrived
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Sao nhỏ lấp lánh phía xa
    for (const b of this.bgTwinkles) {
      b.phase += 0.02;
      this.ctx.save();
      this.ctx.globalAlpha = 0.3 + 0.35 * Math.sin(b.phase);
      this.ctx.fillStyle = "#e8d6ff";
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // Đường nối chòm sao
    if (this.stars.length > 1) {
      this.ctx.save();
      this.ctx.strokeStyle = "rgba(246, 213, 142, 0.26)";
      this.ctx.lineWidth = 1.2;
      this.ctx.setLineDash([4, 4]);
      this.ctx.beginPath();
      this.ctx.moveTo(this.stars[0].x, this.stars[0].y);
      for (let i = 1; i < this.stars.length; i++) {
        this.ctx.lineTo(this.stars[i].x, this.stars[i].y);
      }
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Vẽ từng ngôi sao trong chòm sao
    for (const s of this.stars) {
      s.pulse += 0.035;
      if (s.flare > 0) s.flare = Math.max(0, s.flare - 0.02);

      const r = s.radius + Math.sin(s.pulse) * 1.1 + s.flare * 8;
      this.ctx.save();
      const grad = this.ctx.createRadialGradient(s.x, s.y, 1, s.x, s.y, r * 3.5);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.35, "#ffe9a8");
      grad.addColorStop(0.7, "rgba(255, 143, 182, 0.45)");
      grad.addColorStop(1, "transparent");

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, r * 3.5, 0, Math.PI * 2);
      this.ctx.fill();

      // Tia sao 4 cánh
      this.ctx.strokeStyle = "#fff9e6";
      this.ctx.lineWidth = 1.4;
      const spike = r * 2.1;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x - spike, s.y);
      this.ctx.lineTo(s.x + spike, s.y);
      this.ctx.moveTo(s.x, s.y - spike);
      this.ctx.lineTo(s.x, s.y + spike);
      this.ctx.stroke();
      this.ctx.restore();
    }

    // Vẽ ngôi sao điều ước đang bay lên theo đường cong Bezier
    for (let i = this.flyingWishes.length - 1; i >= 0; i--) {
      const fw = this.flyingWishes[i];
      fw.t = Math.min(1, fw.t + fw.speed);
      const t = fw.t;
      const inv = 1 - t;

      const x = inv * inv * fw.startX + 2 * inv * t * fw.ctrlX + t * t * fw.targetX;
      const y = inv * inv * fw.startY + 2 * inv * t * fw.ctrlY + t * t * fw.targetY;

      fw.trail.push({ x, y, life: 1 });
      if (fw.trail.length > 26) fw.trail.shift();

      // Đuôi sao băng
      for (let j = 0; j < fw.trail.length; j++) {
        const pt = fw.trail[j];
        const ratio = (j + 1) / fw.trail.length;
        this.ctx.save();
        this.ctx.globalAlpha = ratio * 0.75;
        this.ctx.fillStyle = j % 2 === 0 ? "#ffe699" : "#ff9ec4";
        this.ctx.beginPath();
        this.ctx.arc(pt.x, pt.y, ratio * 4.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      }

      // Đầu ngôi sao đang bay
      this.ctx.save();
      this.ctx.fillStyle = "#ffffff";
      this.ctx.shadowColor = "#ffe699";
      this.ctx.shadowBlur = 16;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      if (fw.t >= 1) {
        this.stars.push({
          x: fw.targetX,
          y: fw.targetY,
          rx: fw.targetRx,
          ry: fw.targetRy,
          text: fw.text,
          radius: 5.5,
          pulse: 0,
          flare: 1.4
        });
        this.updateStarCounter();
        if (typeof fw.onArrived === "function") fw.onArrived();
        this.flyingWishes.splice(i, 1);
      }
    }
  }
}

/* ============================================================================
   CHƯƠNG 6 — HẠT SÁNG HỘI TỤ THÀNH SỐ "20/10" (FINALE NUMBER CONVERGENCE)
   ============================================================================ */
class FinaleNumberCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.particles = [];
    this.pointer = { x: -9999, y: -9999 };
    this.isConverging = false;

    this.sampleTextCoordinates();
    this.bindEvents();
  }

  sampleTextCoordinates() {
    const off = document.createElement("canvas");
    off.width = this.width;
    off.height = this.height;
    const octx = off.getContext("2d");

    octx.fillStyle = "#ffffff";
    octx.font = "700 108px 'Cormorant Garamond', Georgia, serif";
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillText("20 / 10", this.width / 2, this.height / 2 + 4);

    const imgData = octx.getImageData(0, 0, this.width, this.height).data;
    this.particles = [];
    const palette = ["#fff6d6", "#f6d58e", "#ffb3cf", "#ff85b3", "#e2b8ff"];

    const step = 4;
    for (let y = 0; y < this.height; y += step) {
      for (let x = 0; x < this.width; x += step) {
        const alpha = imgData[(y * this.width + x) * 4 + 3];
        if (alpha > 128) {
          this.particles.push({
            tx: x,
            ty: y,
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: 0,
            vy: 0,
            size: 1.6 + Math.random() * 1.4,
            color: palette[Math.floor(Math.random() * palette.length)]
          });
        }
      }
    }
  }

  scatterAndConverge() {
    this.isConverging = true;
    for (const p of this.particles) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 80 + Math.random() * 180;
      p.x = this.width / 2 + Math.cos(angle) * dist;
      p.y = this.height / 2 + Math.sin(angle) * dist;
    }
  }

  bindEvents() {
    const updatePointer = (clientX, clientY) => {
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = this.width / rect.width;
      const scaleY = this.height / rect.height;
      this.pointer.x = (clientX - rect.left) * scaleX;
      this.pointer.y = (clientY - rect.top) * scaleY;
    };

    this.canvas.addEventListener("mousemove", (e) => updatePointer(e.clientX, e.clientY));
    this.canvas.addEventListener("mouseleave", () => {
      this.pointer.x = -9999;
      this.pointer.y = -9999;
    });
    this.canvas.addEventListener("click", () => this.scatterAndConverge());
    this.canvas.addEventListener("touchstart", () => this.scatterAndConverge(), { passive: true });
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      const dx = p.tx - p.x;
      const dy = p.ty - p.y;
      p.vx += dx * 0.065;
      p.vy += dy * 0.065;

      // Tương tác đẩy nhẹ khi di chuột qua
      const mdx = p.x - this.pointer.x;
      const mdy = p.y - this.pointer.y;
      const mdist = Math.hypot(mdx, mdy);
      if (mdist < 48 && mdist > 0.1) {
        const force = (48 - mdist) / 48;
        p.vx += (mdx / mdist) * force * 3.2;
        p.vy += (mdy / mdist) * force * 3.2;
      }

      p.vx *= 0.82;
      p.vy *= 0.82;
      p.x += p.vx;
      p.y += p.vy;

      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
}

/* ============================================================================
   BỘ ĐIỀU KHIỂN CHÍNH CỦA WEBSITE 6 CHƯƠNG
   ============================================================================ */
class WomensDayExperienceApp {
  constructor(config) {
    this.config = config;
    this.currentChapter = 1;
    this.selectedRecipient = config.femaleClassmates[0];
    this.prologueCompleted = false;

    // Shuffle-bag không lặp lại lời chúc hoa ở Chương 3
    this.wishPool = [];
    this.bloomedFlowers = new Set();
    this.openedGifts = new Set();

    // Khởi tạo Audio & Canvas
    this.audio = new MagicalAudioEngine(config.musicUrl);
    this.ambientCanvas = new AmbientCanvasSystem(
      document.getElementById("ambient-canvas"),
      this.audio
    );
    this.wishSky = new WishSkySystem(
      document.getElementById("wish-sky-canvas"),
      this.audio
    );
    this.finaleNumbers = new FinaleNumberCanvas(
      document.getElementById("finale-number-canvas")
    );

    this.init();
  }

  init() {
    this.applyConfigThemeAndTexts();
    this.setup3DTitleReveal();
    this.renderRecipientSelectors();
    this.renderGardenFlowers();
    this.renderMysteryGiftBoxes();
    this.bindGlobalControls();
    this.bindPrologueEvents();
    this.bindChapter4WishEvents();
    this.bindFinaleEvents();
    this.setupScrollAndParallaxObservers();
    this.startAnimationLoop();
    this.runPrologueTypewriter();
  }

  // 1. Áp dụng cấu hình cá nhân hóa từ WOMENS_DAY_CONFIG
  applyConfigThemeAndTexts() {
    const root = document.documentElement;
    const c = this.config.themeColors;
    if (c) {
      if (c.pastelPink) root.style.setProperty("--pastel-pink", c.pastelPink);
      if (c.blushPink) root.style.setProperty("--blush-pink", c.blushPink);
      if (c.lavender) root.style.setProperty("--lavender", c.lavender);
      if (c.pearlWhite) root.style.setProperty("--pearl-white", c.pearlWhite);
      if (c.champagneGold) root.style.setProperty("--champagne-gold", c.champagneGold);
    }

    const navClass = document.getElementById("nav-class-name");
    const footerClass = document.getElementById("footer-class-name");
    const senderEl = document.getElementById("ch2-sender-name");

    if (navClass) navClass.textContent = `20/10 • ${this.config.className}`;
    if (footerClass) footerClass.textContent = this.config.className;
    if (senderEl) senderEl.textContent = this.config.senderName;

    // Lời chúc Chương 2
    const g1 = document.getElementById("ch2-greeting-line-1");
    const g2 = document.getElementById("ch2-greeting-line-2");
    if (g1) g1.textContent = this.config.mainGreeting.headline;
    if (g2) g2.textContent = this.config.mainGreeting.body;

    // Lời kết Chương 6
    const f1 = document.getElementById("finale-line-1");
    const f2 = document.getElementById("finale-line-2");
    const f3 = document.getElementById("finale-line-3");
    const f4 = document.getElementById("finale-line-4");
    if (f1) f1.textContent = this.config.finaleMessage.line1;
    if (f2) f2.textContent = this.config.finaleMessage.line2;
    if (f3) f3.textContent = this.config.finaleMessage.line3;
    if (f4) f4.textContent = this.config.finaleMessage.line4;
  }

  // 2. Tách từng chữ cho hiệu ứng 3D Reveal ở Chương 2
  setup3DTitleReveal() {
    const titleEl = document.getElementById("hero-title-en");
    if (!titleEl) return;
    const rawText = this.config.mainGreeting.title || "HAPPY WOMEN'S DAY";
    titleEl.innerHTML = "";

    Array.from(rawText).forEach((ch, idx) => {
      if (ch === " ") {
        const space = document.createElement("span");
        space.innerHTML = "&nbsp;";
        titleEl.appendChild(space);
      } else {
        const span = document.createElement("span");
        span.className = "char-3d";
        span.textContent = ch;
        span.style.transitionDelay = `${idx * 48}ms`;
        titleEl.appendChild(span);
      }
    });
  }

  triggerChapter2RevealAnimations() {
    const chars = document.querySelectorAll("#hero-title-en .char-3d");
    chars.forEach((el) => el.classList.add("revealed"));

    const lines = [
      document.getElementById("ch2-greeting-line-1"),
      document.getElementById("ch2-greeting-line-2"),
      document.getElementById("ch2-personal-note"),
      document.getElementById("ch2-greeting-signature")
    ];

    lines.forEach((line, idx) => {
      if (!line) return;
      setTimeout(() => {
        line.classList.add("line-visible");
      }, 450 + idx * 320);
    });

    this.ambientCanvas.launchFireworkSalvo(3);
  }

  // 3. Cá nhân hóa tên các bạn nữ trong lớp
  renderRecipientSelectors() {
    const chipsContainer = document.getElementById("recipient-chips-container");
    const modalList = document.getElementById("modal-recipient-list");
    if (!chipsContainer || !modalList) return;

    const createButtons = (container, closeModalOnSelect = false) => {
      container.innerHTML = "";
      this.config.femaleClassmates.forEach((person) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "recipient-chip" + (person.name === this.selectedRecipient.name ? " active" : "");
        btn.textContent = person.name;
        btn.addEventListener("click", () => {
          this.selectRecipient(person);
          if (closeModalOnSelect) {
            document.getElementById("personalize-modal").hidden = true;
          }
        });
        container.appendChild(btn);
      });
    };

    createButtons(chipsContainer, false);
    createButtons(modalList, true);
  }

  selectRecipient(person) {
    this.selectedRecipient = person;
    this.renderRecipientSelectors();

    const topLabel = document.getElementById("current-recipient-label");
    const headline = document.getElementById("ch2-greeting-line-1");
    const personalNote = document.getElementById("ch2-personal-note");

    if (person.name === "Tất cả các bạn nữ") {
      if (topLabel) topLabel.textContent = "Gửi: Các bạn nữ";
      if (headline) headline.textContent = this.config.mainGreeting.headline;
      if (personalNote) {
        personalNote.hidden = true;
        personalNote.textContent = "";
      }
    } else {
      if (topLabel) topLabel.textContent = `Gửi: ${person.name} 🌸`;
      if (headline) {
        headline.textContent = `Gửi đến ${person.name} — cô gái tuyệt vời của lớp chúng mình 🌷`;
      }
      if (personalNote) {
        personalNote.hidden = false;
        personalNote.classList.add("line-visible");
        personalNote.textContent =
          person.note ||
          `Chúc ${person.name} có một ngày 20/10 thật ngọt ngào, luôn giữ vững nụ cười rạng rỡ và thực hiện được mọi điều cậu mong ước nhé! ✨`;
      }
    }

    this.audio.playFlowerChime(2);
  }

  // 4. Chương 1: Chữ gõ từng ký tự & Mở hộp quà 3D
  runPrologueTypewriter() {
    const textEl = document.getElementById("prologue-typewriter");
    const ctaWrap = document.getElementById("prologue-cta-wrap");
    if (!textEl || !ctaWrap) return;

    const fullText = this.config.prologueText;
    textEl.textContent = "";
    let index = 0;

    const typeNext = () => {
      if (this.prologueCompleted) return;
      if (index <= fullText.length) {
        textEl.textContent = fullText.slice(0, index);
        index++;
        setTimeout(typeNext, 46);
      } else {
        ctaWrap.classList.add("visible");
      }
    };

    setTimeout(typeNext, 650);
  }

  bindPrologueEvents() {
    const giftWrapper = document.getElementById("prologue-gift-wrapper");
    const openBtn = document.getElementById("btn-open-secret-gift");
    const skipBtn = document.getElementById("btn-skip-intro");

    const handleOpenSecretGift = () => {
      if (this.isOpeningPrologueGift) return;
      this.isOpeningPrologueGift = true;
      this.prologueCompleted = true;

      // Bật nhạc nền sau khi người dùng chủ động nhấn mở quà
      if (!this.audio.isPlayingMusic) {
        this.audio.startMusic();
      }
      this.audio.playGiftOpenChime();

      if (giftWrapper) {
        giftWrapper.classList.add("is-shaking");
      }

      setTimeout(() => {
        if (giftWrapper) {
          giftWrapper.classList.remove("is-shaking");
          giftWrapper.classList.add("is-opened");
        }
        // Bùng nổ hạt kim tuyến từ hộp quà
        const rect = giftWrapper.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        this.ambientCanvas.burstSparkles(cx, cy, 95);
      }, 550);

      // Chuyển cảnh điện ảnh sang Chương 2
      setTimeout(() => {
        this.transitionToChapter(2, true);
        this.isOpeningPrologueGift = false;
      }, 1550);
    };

    if (openBtn) openBtn.addEventListener("click", handleOpenSecretGift);
    if (giftWrapper) {
      giftWrapper.addEventListener("click", handleOpenSecretGift);
      giftWrapper.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpenSecretGift();
        }
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        this.prologueCompleted = true;
        this.transitionToChapter(2, true);
      });
    }
  }

  // Chuyển cảnh mượt mà giữa các chương
  transitionToChapter(chapterNum, useCinematicVeil = false) {
    const veil = document.getElementById("cinematic-veil");
    const prologueSection = document.getElementById("chapter-1");

    const activateTarget = () => {
      this.currentChapter = chapterNum;
      this.ambientCanvas.activeChapter = chapterNum;
      document.body.dataset.activeChapter = String(chapterNum);

      // Cập nhật thanh điều hướng chương
      document.querySelectorAll(".chapter-dot").forEach((dot) => {
        dot.classList.toggle("active", Number(dot.dataset.target) === chapterNum);
      });

      if (chapterNum === 1) {
        document.body.classList.add("in-prologue");
        if (prologueSection) {
          prologueSection.classList.add("revisiting-prologue");
          const giftWrapper = document.getElementById("prologue-gift-wrapper");
          if (giftWrapper) giftWrapper.classList.remove("is-opened", "is-shaking");
          document.getElementById("prologue-cta-wrap")?.classList.add("visible");
        }
      } else {
        document.body.classList.remove("in-prologue");
        if (prologueSection) prologueSection.classList.remove("revisiting-prologue");

        const targetEl = document.getElementById(`chapter-${chapterNum}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: useCinematicVeil ? "auto" : "smooth" });
        }

        if (chapterNum === 2) {
          this.triggerChapter2RevealAnimations();
        } else if (chapterNum === 6) {
          this.finaleNumbers.scatterAndConverge();
          this.ambientCanvas.launchFireworkSalvo(3);
        }
      }
    };

    if (useCinematicVeil && veil) {
      veil.classList.add("active");
      setTimeout(() => {
        activateTarget();
      }, 520);
      setTimeout(() => {
        veil.classList.remove("active");
      }, 1050);
    } else {
      activateTarget();
    }
  }

  // 5. Chương 3: Khởi tạo Khu Vườn Hoa Kỳ Diệu & Lời Chúc Ngẫu Nhiên Không Lặp Lại
  getNextUniqueFlowerWish() {
    if (this.wishPool.length === 0) {
      // Trộn ngẫu nhiên toàn bộ danh sách 20 lời chúc (Fisher-Yates shuffle)
      this.wishPool = [...this.config.flowerWishes];
      for (let i = this.wishPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.wishPool[i], this.wishPool[j]] = [this.wishPool[j], this.wishPool[i]];
      }
    }
    return this.wishPool.pop();
  }

  createFlowerSVG(flower) {
    const { type, colorOuter, colorInner, colorCenter } = flower;
    let petalsOuterMarkup = "";
    let petalsInnerMarkup = "";

    if (type === "rose") {
      for (let a = 0; a < 360; a += 60) {
        petalsOuterMarkup += `<path d="M60,58 C42,26 78,26 60,58 Z" fill="${colorOuter}" transform="rotate(${a} 60 58) translate(0 -12) scale(1.35)" opacity="0.92"/>`;
      }
      for (let a = 30; a < 390; a += 60) {
        petalsInnerMarkup += `<path d="M60,58 C46,34 74,34 60,58 Z" fill="${colorInner}" transform="rotate(${a} 60 58) translate(0 -6) scale(1.1)"/>`;
      }
      petalsInnerMarkup += `<path d="M50,54 C54,44 68,45 68,56 C68,65 53,66 52,57 C51,51 62,50 62,56" stroke="#fff5f9" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;
    } else if (type === "tulip") {
      petalsOuterMarkup = `
        <path d="M60,68 C32,58 34,20 50,24 C56,34 58,48 60,68 Z" fill="${colorOuter}"/>
        <path d="M60,68 C88,58 86,20 70,24 C64,34 62,48 60,68 Z" fill="${colorOuter}"/>
      `;
      petalsInnerMarkup = `
        <path d="M60,68 C40,48 45,16 60,14 C75,16 80,48 60,68 Z" fill="${colorInner}"/>
        <circle cx="60" cy="44" r="6" fill="${colorCenter}" opacity="0.85"/>
      `;
    } else if (type === "sunflower") {
      for (let a = 0; a < 360; a += 30) {
        petalsOuterMarkup += `<ellipse cx="60" cy="30" rx="6.5" ry="18" fill="${colorOuter}" transform="rotate(${a} 60 58)"/>`;
      }
      for (let a = 15; a < 375; a += 30) {
        petalsInnerMarkup += `<ellipse cx="60" cy="34" rx="5" ry="14" fill="${colorInner}" transform="rotate(${a} 60 58)"/>`;
      }
      petalsInnerMarkup += `<circle cx="60" cy="58" r="14" fill="${colorCenter}" stroke="#f5d061" stroke-width="2.5"/>`;
    } else if (type === "daisy") {
      for (let a = 0; a < 360; a += 30) {
        petalsOuterMarkup += `<ellipse cx="60" cy="31" rx="5.5" ry="17" fill="${colorOuter}" transform="rotate(${a} 60 58)"/>`;
      }
      for (let a = 15; a < 375; a += 45) {
        petalsInnerMarkup += `<ellipse cx="60" cy="36" rx="4.5" ry="12" fill="${colorInner}" transform="rotate(${a} 60 58)"/>`;
      }
      petalsInnerMarkup += `<circle cx="60" cy="58" r="10" fill="${colorCenter}"/>`;
    } else {
      // Lotus & Starlight Lily
      for (let a = -60; a <= 60; a += 30) {
        petalsOuterMarkup += `<path d="M60,64 C44,42 48,18 60,12 C72,18 76,42 60,64 Z" fill="${colorOuter}" transform="rotate(${a} 60 64)" opacity="0.9"/>`;
      }
      for (let a = -36; a <= 36; a += 36) {
        petalsInnerMarkup += `<path d="M60,64 C48,46 52,24 60,18 C68,24 72,46 60,64 Z" fill="${colorInner}" transform="rotate(${a} 60 64)"/>`;
      }
      petalsInnerMarkup += `<circle cx="60" cy="52" r="7" fill="${colorCenter}"/>`;
    }

    return `
      <svg viewBox="0 0 120 170" class="flower-svg" aria-hidden="true">
        <!-- Thân cây -->
        <path class="flower-stem" d="M60,165 Q55,115 60,62" stroke="#47b884" stroke-width="4.5" stroke-linecap="round" fill="none"/>
        <!-- Lá cây -->
        <g class="flower-leaves">
          <path d="M58,125 C34,118 28,96 48,98 C56,100 58,114 58,125 Z" fill="#5cd69d"/>
          <path d="M61,115 C85,108 92,86 72,88 C64,90 61,104 61,115 Z" fill="#3da675"/>
        </g>
        <!-- Đài hoa & cánh hoa nhiều tầng -->
        <g class="flower-head">
          <g class="flower-petals-outer">${petalsOuterMarkup}</g>
          <g class="flower-petals-inner">${petalsInnerMarkup}</g>
        </g>
      </svg>
    `;
  }

  renderGardenFlowers() {
    const bed = document.getElementById("flowers-bed");
    const totalEl = document.getElementById("total-flowers-count");
    if (!bed) return;

    if (totalEl) totalEl.textContent = String(GARDEN_FLOWERS_DATA.length);
    bed.innerHTML = "";

    GARDEN_FLOWERS_DATA.forEach((flower, idx) => {
      const card = document.createElement("div");
      card.className = "flower-item";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `${flower.name} - chạm để nhận lời chúc`);

      card.innerHTML = `
        <div class="flower-svg-wrap">
          <div class="flower-pollen-aura"></div>
          ${this.createFlowerSVG(flower)}
        </div>
        <span class="flower-name-tag">${flower.name}</span>
        <span class="flower-status-hint">Chạm để nở hoa ✨</span>
      `;

      const bloomThisFlower = () => {
        card.classList.add("bloomed");
        const hint = card.querySelector(".flower-status-hint");
        if (hint) hint.textContent = "Đã nở rộ 🌸 (Chạm để xem lời chúc mới)";

        this.bloomedFlowers.add(flower.id);
        const countEl = document.getElementById("bloomed-count");
        if (countEl) countEl.textContent = String(this.bloomedFlowers.size);

        // Âm thanh đàn hạc & hiệu ứng hạt phấn hoa
        this.audio.playFlowerChime(idx);
        const rect = card.getBoundingClientRect();
        this.ambientCanvas.burstSparkles(rect.left + rect.width / 2, rect.top + 45, 28);

        // Hiển thị lời chúc không trùng lặp
        const wish = this.getNextUniqueFlowerWish();
        const banner = document.getElementById("garden-wish-banner");
        const tagEl = document.getElementById("wish-flower-tag");
        const quoteEl = document.getElementById("garden-wish-text");
        const metaEl = document.getElementById("garden-wish-meta");

        if (tagEl) tagEl.textContent = `🌸 Thông điệp từ ${flower.name}`;
        if (quoteEl) quoteEl.textContent = `“${wish}”`;
        if (metaEl) {
          const recipientName =
            this.selectedRecipient.name === "Tất cả các bạn nữ"
              ? "cậu"
              : this.selectedRecipient.name;
          metaEl.textContent = `Dành tặng ${recipientName} • Còn ${this.wishPool.length} lời chúc mới trong lượt này`;
        }

        if (banner) {
          banner.classList.remove("wish-pop");
          void banner.offsetWidth;
          banner.classList.add("wish-pop");
        }
      };

      card.addEventListener("click", bloomThisFlower);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          bloomThisFlower();
        }
      });

      bed.appendChild(card);
    });

    const bloomAllBtn = document.getElementById("btn-bloom-all");
    if (bloomAllBtn) {
      bloomAllBtn.addEventListener("click", () => {
        const items = bed.querySelectorAll(".flower-item");
        items.forEach((item, idx) => {
          setTimeout(() => item.click(), idx * 140);
        });
      });
    }
  }

  // 6. Chương 4: Gửi Điều Ước Lên Bầu Trời Đêm
  bindChapter4WishEvents() {
    const form = document.getElementById("wish-form");
    const input = document.getElementById("wish-input");
    const confirmBox = document.getElementById("wish-confirmation");
    const chips = document.querySelectorAll(".wish-chip");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        if (input) {
          input.value = chip.dataset.wish || "";
          input.focus();
        }
      });
    });

    if (form && input) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = input.value.trim() || "Luôn xinh đẹp, hạnh phúc và rạng rỡ mỗi ngày! ✨";
        if (confirmBox) confirmBox.hidden = true;

        this.wishSky.launchWishStar(text, () => {
          if (confirmBox) {
            confirmBox.hidden = false;
          }
          const skyRect = document.getElementById("night-sky-stage").getBoundingClientRect();
          this.ambientCanvas.burstSparkles(
            skyRect.left + skyRect.width / 2,
            skyRect.top + skyRect.height * 0.35,
            40
          );
        });

        input.value = "";
      });
    }
  }

  // 7. Chương 5: 6 Hộp Quà Bí Ẩn 3D & Minh Họa Quà Tinh Thần
  getGiftIllustrationSVG(svgType) {
    switch (svgType) {
      case "bouquet":
        return `<img src="assets/bouquet.svg" alt="Bó hoa rực rỡ" style="width:125px;height:125px;object-fit:contain;" />`;
      case "letter":
        return `
          <svg viewBox="0 0 120 120" width="110" height="110">
            <rect x="14" y="28" width="92" height="66" rx="10" fill="#ffd6e7" stroke="#f6d58e" stroke-width="2.5"/>
            <path d="M16 32 L60 68 L104 32" fill="#ff9ec4" stroke="#fff" stroke-width="2"/>
            <path d="M60 46 C52 36 38 42 44 54 C48 62 60 70 60 70 C60 70 72 62 76 54 C82 42 68 36 60 46 Z" fill="#e03e76"/>
          </svg>
        `;
      case "crown":
        return `
          <svg viewBox="0 0 120 120" width="110" height="110">
            <path d="M18 84 L28 38 L48 60 L60 28 L72 60 L92 38 L102 84 Z" fill="#f6d58e" stroke="#fff6d6" stroke-width="2.5" stroke-linejoin="round"/>
            <rect x="20" y="86" width="80" height="10" rx="5" fill="#e0a943"/>
            <circle cx="60" cy="24" r="5" fill="#fff"/>
            <circle cx="26" cy="34" r="4" fill="#ff9ec4"/>
            <circle cx="94" cy="34" r="4" fill="#ff9ec4"/>
          </svg>
        `;
      case "clover":
        return `
          <svg viewBox="0 0 120 120" width="110" height="110">
            <g transform="translate(60,56)">
              <path d="M0,0 C-18,-28 -36,-10 0,0" fill="#5ce0a2" transform="rotate(0) scale(1.3)"/>
              <path d="M0,0 C18,-28 36,-10 0,0" fill="#42c488" transform="rotate(0) scale(1.3)"/>
              <path d="M0,0 C-18,-28 -36,-10 0,0" fill="#5ce0a2" transform="rotate(90) scale(1.3)"/>
              <path d="M0,0 C18,-28 36,-10 0,0" fill="#42c488" transform="rotate(90) scale(1.3)"/>
              <path d="M0,0 C-18,-28 -36,-10 0,0" fill="#5ce0a2" transform="rotate(180) scale(1.3)"/>
              <path d="M0,0 C18,-28 36,-10 0,0" fill="#42c488" transform="rotate(180) scale(1.3)"/>
              <path d="M0,0 C-18,-28 -36,-10 0,0" fill="#5ce0a2" transform="rotate(270) scale(1.3)"/>
              <path d="M0,0 C18,-28 36,-10 0,0" fill="#42c488" transform="rotate(270) scale(1.3)"/>
              <circle cx="0" cy="0" r="6" fill="#fff4c2"/>
            </g>
          </svg>
        `;
      case "galaxy":
        return `
          <svg viewBox="0 0 120 120" width="110" height="110">
            <circle cx="60" cy="60" r="44" fill="#1e164a" stroke="#f6d58e" stroke-width="2.5"/>
            <ellipse cx="60" cy="60" rx="38" ry="14" fill="none" stroke="#c896ff" stroke-width="2" transform="rotate(-24 60 60)"/>
            <circle cx="46" cy="48" r="3" fill="#fff"/>
            <circle cx="74" cy="52" r="4" fill="#ffe699"/>
            <circle cx="58" cy="72" r="2.5" fill="#ff9ec4"/>
            <path d="M60 32 L63 42 L73 45 L63 48 L60 58 L57 48 L47 45 L57 42 Z" fill="#fff6d6"/>
          </svg>
        `;
      default:
        return `
          <svg viewBox="0 0 120 120" width="110" height="110">
            <path d="M60 98 C60 98 16 68 16 38 C16 20 30 10 44 10 C53 10 58 16 60 22 C62 16 67 10 76 10 C90 10 104 20 104 38 C104 68 60 98 60 98 Z" fill="#ff6b9d" stroke="#fff4d2" stroke-width="2.5"/>
          </svg>
        `;
    }
  }

  renderMysteryGiftBoxes() {
    const grid = document.getElementById("mystery-gifts-grid");
    if (!grid) return;
    grid.innerHTML = "";

    MYSTERY_GIFTS_DATA.forEach((gift) => {
      const card = document.createElement("div");
      card.className = "mystery-gift-card";
      card.style.setProperty("--box-color", gift.boxGradient);
      card.style.setProperty("--ribbon-color", gift.ribbonGradient);
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `${gift.shortTitle}: ${gift.subtitle}`);

      card.innerHTML = `
        <div class="mini-box-stage">
          <div class="mini-cube">
            <div class="mini-lid">
              <div class="mini-lid-top"></div>
              <div class="mini-lid-front"></div>
            </div>
            <div class="mini-face mini-front"></div>
            <div class="mini-face mini-back"></div>
            <div class="mini-face mini-left"></div>
            <div class="mini-face mini-right"></div>
            <span class="mini-gift-icon" aria-hidden="true">${gift.icon}</span>
          </div>
        </div>
        <h3 class="mystery-box-title">${gift.shortTitle}</h3>
        <p class="mystery-box-subtitle">${gift.subtitle}</p>
        <span class="mystery-box-badge">Chạm để mở hộp quà 🎁</span>
      `;

      const openThisBox = () => {
        card.classList.add("shaking");
        this.audio.playGiftOpenChime();

        setTimeout(() => {
          card.classList.remove("shaking");
          card.classList.add("opened");
          const badge = card.querySelector(".mystery-box-badge");
          if (badge) badge.textContent = "Đã mở ✨ (Chạm để xem lại)";

          this.openedGifts.add(gift.id);
          const countEl = document.getElementById("opened-gifts-count");
          if (countEl) countEl.textContent = String(this.openedGifts.size);

          const rect = card.getBoundingClientRect();
          this.ambientCanvas.burstSparkles(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            55
          );

          this.showGiftModal(gift);
        }, 460);
      };

      card.addEventListener("click", openThisBox);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openThisBox();
        }
      });

      grid.appendChild(card);
    });
  }

  showGiftModal(gift) {
    const modal = document.getElementById("gift-modal");
    const badge = document.getElementById("gift-modal-badge");
    const illust = document.getElementById("gift-modal-illustration");
    const title = document.getElementById("gift-modal-title");
    const recipient = document.getElementById("gift-modal-recipient");
    const message = document.getElementById("gift-modal-message");

    if (!modal) return;
    if (badge) badge.textContent = `MÓN QUÀ TINH THẦN SỐ ${gift.id} / 6`;
    if (illust) illust.innerHTML = this.getGiftIllustrationSVG(gift.svgType);
    if (title) title.textContent = gift.giftTitle;

    const targetName =
      this.selectedRecipient.name === "Tất cả các bạn nữ"
        ? "Cô gái tuyệt vời của lớp chúng mình"
        : this.selectedRecipient.name;
    if (recipient) recipient.textContent = `Dành tặng: ${targetName} 🌷`;
    if (message) message.textContent = gift.message;

    modal.hidden = false;
  }

  // 8. Chương 6: Trải nghiệm lại & Tải thiệp kỷ niệm 20/10
  bindFinaleEvents() {
    const replayBtn = document.getElementById("btn-replay-journey");
    const downloadBtn = document.getElementById("btn-download-card");

    if (replayBtn) {
      replayBtn.addEventListener("click", () => {
        this.prologueCompleted = false;
        this.transitionToChapter(1, true);
        setTimeout(() => {
          this.runPrologueTypewriter();
        }, 650);
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        this.generateAndDownloadCommemorativeCard();
      });
    }
  }

  // Tạo tấm thiệp kỷ niệm 20/10 độ phân giải cao ngay trên trình duyệt
  generateAndDownloadCommemorativeCard() {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext("2d");

    // Nền Gradient sang trọng
    const grad = ctx.createLinearGradient(0, 0, 1080, 1350);
    grad.addColorStop(0, "#230f38");
    grad.addColorStop(0.45, "#59225c");
    grad.addColorStop(0.8, "#b8547e");
    grad.addColorStop(1, "#f7c9b6");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1350);

    // Khung viền vàng champagne
    ctx.strokeStyle = "rgba(246, 213, 142, 0.75)";
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, 984, 1254);
    ctx.strokeStyle = "rgba(255, 224, 238, 0.35)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(64, 64, 952, 1222);

    // Hạt sao trang trí
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = i % 2 === 0 ? "rgba(255,245,214,0.65)" : "rgba(255,182,212,0.55)";
      ctx.beginPath();
      ctx.arc(80 + Math.random() * 920, 80 + Math.random() * 1180, 1.5 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.textAlign = "center";
    ctx.fillStyle = "#f6d58e";
    ctx.font = "600 28px 'Be Vietnam Pro', sans-serif";
    ctx.fillText("HAPPY VIETNAMESE WOMEN'S DAY • 20 / 10", 540, 160);

    ctx.fillStyle = "#ffffff";
    ctx.font = "700 84px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText("Món Quà Thanh Xuân", 540, 275);

    const recipientText =
      this.selectedRecipient.name === "Tất cả các bạn nữ"
        ? "Gửi đến những bông hoa xinh đẹp của lớp mình"
        : `Dành tặng riêng: ${this.selectedRecipient.name}`;

    ctx.fillStyle = "#fff2cc";
    ctx.font = "italic 600 44px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText(recipientText, 540, 380);

    // Nội dung lời chúc
    ctx.fillStyle = "#fffafc";
    ctx.font = "400 32px 'Be Vietnam Pro', sans-serif";
    const lines = [
      "Chúc cậu luôn xinh đẹp, rạng rỡ, tự tin và hạnh phúc.",
      "Mong rằng không chỉ ngày 20/10 hôm nay,",
      "mà cả 365 ngày trong năm cậu đều được yêu thương,",
      "trân trọng và tự do theo đuổi ước mơ của mình.",
      "",
      "Cảm ơn cậu vì đã làm cho những năm tháng đại học",
      "của lớp chúng mình trở nên thật rực rỡ và đáng nhớ!"
    ];

    lines.forEach((line, i) => {
      ctx.fillText(line, 540, 520 + i * 62);
    });

    ctx.fillStyle = "#f6d58e";
    ctx.font = "700 42px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText(`— ${this.config.senderName} —`, 540, 1080);

    ctx.fillStyle = "rgba(255, 250, 252, 0.85)";
    ctx.font = "500 26px 'Be Vietnam Pro', sans-serif";
    ctx.fillText(this.config.className, 540, 1145);

    const link = document.createElement("a");
    link.download = "Thiep-Ky-Niem-20-10.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    this.audio.playGiftOpenChime();
  }

  // 9. Điều khiển toàn cục (Navigation, Music, Reduced Motion, Modals)
  bindGlobalControls() {
    // Điều hướng chương trên thanh Topbar
    document.querySelectorAll(".chapter-dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const target = Number(dot.dataset.target);
        this.transitionToChapter(target, target === 1 || this.currentChapter === 1);
      });
    });

    // Nút chuyển chương ở cuối mỗi section
    document.querySelectorAll("[data-goto]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const nextChap = Number(btn.dataset.goto);
        this.transitionToChapter(nextChap, false);
      });
    });

    // Nút bắn pháo hoa Chương 2
    const fwBtn = document.getElementById("btn-trigger-fireworks");
    if (fwBtn) {
      fwBtn.addEventListener("click", () => {
        this.ambientCanvas.launchFireworkSalvo(4);
      });
    }

    // Nút bật/tắt nhạc
    const musicBtn = document.getElementById("btn-music-toggle");
    if (musicBtn) {
      musicBtn.addEventListener("click", () => {
        this.audio.toggleMusic();
      });
    }

    // Nút bật/tắt hiệu ứng chuyển động mạnh (Reduced Motion)
    const motionBtn = document.getElementById("btn-motion-toggle");
    const motionIcon = document.getElementById("motion-icon");
    if (motionBtn) {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        this.ambientCanvas.reducedMotion = true;
        document.body.classList.add("reduced-motion");
      }

      motionBtn.addEventListener("click", () => {
        const isReduced = document.body.classList.toggle("reduced-motion");
        this.ambientCanvas.reducedMotion = isReduced;
        motionBtn.setAttribute("aria-pressed", String(isReduced));
        if (motionIcon) motionIcon.textContent = isReduced ? "🌙" : "✨";
      });
    }

    // Đóng mở Modal Quà tặng Chương 5
    const giftModal = document.getElementById("gift-modal");
    const closeGiftBtn = document.getElementById("btn-close-gift-modal");
    const exploreMoreBtn = document.getElementById("btn-explore-more-gifts");

    const closeGiftModal = () => {
      if (giftModal) giftModal.hidden = true;
    };
    if (closeGiftBtn) closeGiftBtn.addEventListener("click", closeGiftModal);
    if (exploreMoreBtn) exploreMoreBtn.addEventListener("click", closeGiftModal);
    if (giftModal) {
      giftModal.addEventListener("click", (e) => {
        if (e.target === giftModal) closeGiftModal();
      });
    }

    // Đóng mở Modal Cá nhân hóa tên người nhận
    const personalizeModal = document.getElementById("personalize-modal");
    const openPersonalizeBtn = document.getElementById("btn-personalize-open");
    const closePersonalizeBtn = document.getElementById("btn-close-personalize-modal");
    const customNameForm = document.getElementById("custom-name-form");
    const customNameInput = document.getElementById("custom-name-input");

    if (openPersonalizeBtn && personalizeModal) {
      openPersonalizeBtn.addEventListener("click", () => {
        personalizeModal.hidden = false;
      });
    }
    if (closePersonalizeBtn && personalizeModal) {
      closePersonalizeBtn.addEventListener("click", () => {
        personalizeModal.hidden = true;
      });
      personalizeModal.addEventListener("click", (e) => {
        if (e.target === personalizeModal) personalizeModal.hidden = true;
      });
    }
    if (customNameForm && customNameInput) {
      customNameForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const customName = customNameInput.value.trim();
        if (customName) {
          const newPerson = {
            name: customName,
            note: `Chúc ${customName} có một ngày 20/10 ngập tràn niềm vui, luôn xinh đẹp rạng ngời và hạnh phúc trên hành trình thanh xuân của mình nhé! 💖`
          };
          this.config.femaleClassmates.push(newPerson);
          this.selectRecipient(newPerson);
          customNameInput.value = "";
          if (personalizeModal) personalizeModal.hidden = true;
        }
      });
    }
  }

  // 10. Scroll-triggered Animation & Parallax
  setupScrollAndParallaxObservers() {
    // Quan sát các phần tử .reveal-on-scroll
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealObs.observe(el));

    // Quan sát từng chương khi người dùng cuộn trang
    const chapterObs = new IntersectionObserver(
      (entries) => {
        if (document.body.classList.contains("in-prologue")) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chap = Number(entry.target.dataset.chapter);
            if (!chap) return;
            entry.target.classList.add("chapter-entered");
            this.currentChapter = chap;
            this.ambientCanvas.activeChapter = chap;
            document.body.dataset.activeChapter = String(chap);

            document.querySelectorAll(".chapter-dot").forEach((dot) => {
              dot.classList.toggle("active", Number(dot.dataset.target) === chap);
            });

            if (chap === 2 && !this.ch2AnimatedOnce) {
              this.ch2AnimatedOnce = true;
              this.triggerChapter2RevealAnimations();
            }
            if (chap === 6 && !this.ch6AnimatedOnce) {
              this.ch6AnimatedOnce = true;
              this.finaleNumbers.scatterAndConverge();
              this.ambientCanvas.launchFireworkSalvo(3);
            }
          }
        });
      },
      { threshold: 0.42 }
    );

    document.querySelectorAll(".chapter-section").forEach((sec) => chapterObs.observe(sec));

    // Hiệu ứng Parallax nhẹ cho các bông hoa nền ở Chương 2
    const parallaxNodes = document.querySelectorAll("[data-parallax]");
    window.addEventListener(
      "mousemove",
      (e) => {
        if (this.ambientCanvas.reducedMotion) return;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        parallaxNodes.forEach((node) => {
          const factor = parseFloat(node.dataset.parallax || "0.03");
          node.style.transform = `translate3d(${dx * factor}px, ${dy * factor}px, 0)`;
        });
      },
      { passive: true }
    );
  }

  // 11. Vòng lặp requestAnimationFrame tối ưu
  startAnimationLoop() {
    const tick = () => {
      this.ambientCanvas.render();
      if (this.currentChapter === 4) {
        this.wishSky.render();
      }
      if (this.currentChapter === 6) {
        this.finaleNumbers.render();
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

// Khởi chạy ứng dụng khi DOM sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
  window.womensDayApp = new WomensDayExperienceApp(WOMENS_DAY_CONFIG);
});
