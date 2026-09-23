/* ============================================================
   GAMIFY.JS — Mesin motivasi & progres belajar
   XP, level, streak, lencana, kuis, leaderboard, sertifikat.
   Dipakai bersama oleh index.html (materi) dan editor.html.
   ============================================================ */

const PROG_BASE = "belajarCoding:progress";

/* ---------- identitas user (akun atau tamu) ---------- */
function gamifyKey() {
  const uid = window.AUTH ? AUTH.userId() : "guest";
  return PROG_BASE + ":" + uid;
}

const GAMIFY = {
  /* ---------- simpan / baca progres user ---------- */
  load() {
    try {
      const raw = localStorage.getItem(gamifyKey());
      const s = raw ? JSON.parse(raw) : null;
      return s || { completed: {}, quiz: {}, xp: 0, runs: 0, streak: { days: 0, last: null }, badges: [] };
    } catch (e) {
      return { completed: {}, quiz: {}, xp: 0, runs: 0, streak: { days: 0, last: null }, badges: [] };
    }
  },
  save(s) {
    localStorage.setItem(gamifyKey(), JSON.stringify(s));
  },

  isComplete(id) {
    return !!this.load().completed[id];
  },

  countDone(s) {
    return Object.keys(s.completed).length;
  },

  /* ---------- status kuis per materi ---------- */
  /* qkey unik per materi + nomor soal, dipakai juga di file lain. */
  quizKey(lessonId, qi) {
    return lessonId + "#" + qi;
  },
  /* Soal tertentu sudah dijawab benar? (untuk pre-mark saat render) */
  isQuestionSolved(lessonId, qi) {
    return !!(this.load().quiz[this.quizKey(lessonId, qi)]);
  },
  /* Berapa soal terverifikasi benar dari total soal sebuah materi */
  quizStats(lesson) {
    const s = this.load();
    let correct = 0;
    lesson.quiz.forEach((q, qi) => {
      if (s.quiz[this.quizKey(lesson.id, qi)]) correct++;
    });
    return { correct, total: lesson.quiz.length };
  },
  /* Semua soal sebuah materi sudah benar? Inilah "gerbang tuntas". */
  lessonFullyPassed(lesson, s) {
    for (let i = 0; i < lesson.quiz.length; i++) {
      if (!s.quiz[this.quizKey(lesson.id, i)]) return false;
    }
    return true;
  },

  /* ---------- level ---------- */
  levelFrom(xp) {
    return Math.floor(Math.sqrt(xp / 100)) + 1;
  },
  levelProgress(xp) {
    const L = this.levelFrom(xp);
    const base = (L - 1) * (L - 1) * 100;
    const next = L * L * 100;
    const pct = Math.min(100, Math.round(((xp - base) / (next - base)) * 100));
    return { level: L, pct, xp, base, next };
  },

  /* ---------- streak harian ---------- */
  /* Dipanggil tiap halaman dibuka. Naik 1 hanya jika kemarin
     pernah buka; kalau bolos sehari, streak mulai dari 1 lagi. */
  updateStreak() {
    const s = this.load();
    const today = new Date().toISOString().slice(0, 10);
    if (s.streak.last === today) return s.streak.days; // sudah dihitung hari ini

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    s.streak.days = s.streak.last === yesterday ? s.streak.days + 1 : 1;
    s.streak.last = today;
    this.save(s);
    return s.streak.days;
  },

  /* ---------- kelengkapan materi per bahasa ---------- */
  langStats(lang) {
    if (typeof CATEGORIES === "undefined")
      return { real: 0, done: 0, complete: false };
    const ids = [];
    CATEGORIES.forEach((c) => {
      if (c.lang !== lang) return;
      c.lessons.forEach((l) => { if (!l.empty) ids.push(l.id); });
    });
    const s = this.load();
    const done = ids.filter((id) => s.completed[id]).length;
    return { real: ids.length, done, complete: ids.length > 0 && done === ids.length };
  },
  langComplete(lang) {
    return this.langStats(lang).complete;
  },

  /* ---------- selesaikan materi ---------- */
  completeLesson(lesson) {
    const s = this.load();
    if (s.completed[lesson.id])
      return { event: "already", xp: 0, levelUp: false, newBadges: [] };

    s.completed[lesson.id] = { at: Date.now() };
    const before = this.levelFrom(s.xp);
    s.xp += 10;
    const after = this.levelFrom(s.xp);
    const newBadges = this._checkBadges(s);
    this.save(s);

    return {
      event: "complete",
      xp: 10,
      levelUp: after > before,
      level: after,
      newBadges,
    };
  },

  /* ---------- kuis ---------- */
  /* Mengunci reward di balik pemahaman:
     - Benar pertama kali         => +4 XP (per soal)
     - Seluruh soal benar pertama => materi dianggap selesai
       + +10 XP (bonus tuntas) + lencana, seperti ditandai manual dulu.
     Jawaban salah tidak memberi apa-apa. Materi TIDAK bisa dicomplete
     lewat tombol lagi — kuis adalah satu-satunya jalur (anti "centang
     asal tanpa baca"). */
  answerQuiz(lesson, qi, choice) {
    const q = lesson.quiz[qi];
    if (q.answer !== choice) {
      return { correct: false, xp: 0, levelUp: false, newBadges: [], completed: false };
    }

    const s = this.load();
    const qkey = this.quizKey(lesson.id, qi);

    if (!s.quiz[qkey]) {
      s.quiz[qkey] = true;
      const before = this.levelFrom(s.xp);
      s.xp += 4;

      // Gerbang tuntas: seluruh soal benar pertama kali => +10 XP
      let completed = false;
      if (!s.completed[lesson.id] && this.lessonFullyPassed(lesson, s)) {
        s.completed[lesson.id] = { at: Date.now() };
        s.xp += 10;
        completed = true;
      }

      const after = this.levelFrom(s.xp);
      const newBadges = this._checkBadges(s);
      this.save(s);
      return { correct: true, xp: 4, completed, levelUp: after > before, level: after, newBadges, first: true };
    }

    // Sudah pernah benar — jawab ulang tidak menambah XP
    this.save(s);
    return { correct: true, xp: 0, levelUp: false, newBadges: [], completed: false, first: false };
  },

  /* ---------- hitung Run di editor ---------- */
  countRun() {
    const s = this.load();
    s.runs += 1;
    const newBadges = this._checkBadges(s);
    this.save(s);
    return newBadges;
  },

  /* ---------- lencana ---------- */
  badgeDefs() {
    return [
      { id: "member", icon: "\u{1F91D}", name: "Bergabung", desc: "Membuat akun di platform", check: (s) => !!(window.AUTH && AUTH.current()) },
      { id: "first", icon: "\u{1F3AF}", name: "Kode Pertama", desc: "Menyelesaikan 1 materi", check: (s) => this.countDone(s) >= 1 },
      { id: "ten", icon: "\u{1F4DA}", name: "Pelajar 10", desc: "10 materi diselesaikan", check: (s) => this.countDone(s) >= 10 },
      { id: "twentyfive", icon: "\u{1F3C5}", name: "Rajin 25", desc: "25 materi diselesaikan", check: (s) => this.countDone(s) >= 25 },
      { id: "fifty", icon: "\u{1F3C6}", name: "Bersemangat 50", desc: "50 materi diselesaikan", check: (s) => this.countDone(s) >= 50 },
      { id: "master-html", icon: "\u{1F000}", name: "Master HTML", desc: "Semua materi nyata HTML tuntas", check: (s) => this.langComplete("HTML") },
      { id: "master-css", icon: "\u{1F535}", name: "Master CSS", desc: "Semua materi nyata CSS tuntas", check: (s) => this.langComplete("CSS") },
      { id: "master-js", icon: "\u{1F7E1}", name: "Master JavaScript", desc: "Semua materi nyata JavaScript tuntas", check: (s) => this.langComplete("JavaScript") },
      { id: "runner", icon: "\u26A1", name: "Praktik Rajin", desc: "Run kode 10 kali di editor", check: (s) => s.runs >= 10 },
    ];
  },
  earnedBadges() {
    const s = this.load();
    const earned = this.badgeDefs().filter((b) => b.check(s));
    return earned.map((b) => b.id);
  },
  /* Mengembalikan lencana yang baru didapat (belum ada di s.badges) */
  _checkBadges(s) {
    const defs = this.badgeDefs();
    const newly = [];
    defs.forEach((b) => {
      if (b.check(s) && !s.badges.includes(b.id)) {
        s.badges.push(b.id);
        newly.push(b);
      }
    });
    return newly;
  },

  /* ---------- notifikasi toast ---------- */
  toast({ icon, title, sub }) {
    let root = document.getElementById("gamify-toast");
    if (!root) {
      root = document.createElement("div");
      root.id = "gamify-toast";
      document.body.appendChild(root);
    }
    const el = document.createElement("div");
    el.className = "gtoast";
    el.innerHTML =
      '<span class="gtoast-icon">' + (icon || "\u2728") + "</span>" +
      '<span class="gtoast-body"><b>' + title + "</b>" +
      (sub ? "<small>" + sub + "</small>" : "") + "</span>";
    root.appendChild(el);
    setTimeout(() => el.classList.add("out"), 3200);
    setTimeout(() => el.remove(), 3600);
  },

  /* ============================================================
     PANEL PROGRES (modal)
     ============================================================ */
  openPanel() {
    this.closeModal();
    const s = this.load();
    const lp = this.levelProgress(s.xp);
    const streak = s.streak.days || this.updateStreak();
    const user = window.AUTH ? AUTH.current() : null;
    const earned = s.badges;

    // bar tiap bahasa
    const langs = ["HTML", "CSS", "JavaScript"];
    const langBars = langs.map((L) => {
      const st = this.langStats(L);
      const pct = st.real ? Math.round((st.done / st.real) * 100) : 0;
      return `
        <div class="pl-row">
          <span class="pl-label">${L}</span>
          <span class="pl-track"><span class="pl-fill" style="width:${pct}%"></span></span>
          <span class="pl-num">${st.done}/${st.real}</span>
        </div>`;
    }).join("");

    // lencana: semua def, yang belum didapat tampak redup
    const badgeCards = this.badgeDefs().map((b) => {
      const got = earned.includes(b.id);
      return `
        <div class="abcard ${got ? "got" : ""}" title="${b.desc}">
          <span class="ab-icon">${b.icon}</span>
          <span class="ab-name">${b.name}</span>
        </div>`;
    }).join("");

    // leaderboard lokal dari semua akun di perangkat ini
    let leaderboard = "";
    if (window.AUTH) {
      const db = (() => { try { return JSON.parse(localStorage.getItem("belajarCoding:db")) || { users: [] }; } catch (e) { return { users: [] }; } })();
      const rows = db.users
        .map((u) => ({ name: u.name, xp: AUTH.xpOfUserId(u.id), id: u.id }))
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 5);
      if (rows.length) {
        const medals = ["\u{1F947}", "\u{1F948}", "\u{1F949}"];
        leaderboard = `
          <h4 class="pl-section">&#129351; Peringkat Lokal (perangkat ini)</h4>
          <ol class="lb-list">
            ${rows.map((r, i) => {
              const isMe = user && r.id === user.id;
              return `<li class="${isMe ? "me" : ""}">
                <span class="lb-medal">${medals[i] || i + 1 + "."}</span>
                <span class="lb-name">${r.name}${isMe ? " (kamu)" : ""}</span>
                <span class="lb-xp">${r.xp} XP</span>
              </li>`;
            }).join("")}
          </ol>`;
      }
    }

    // sertifikat yang bisa dicetak
    const certBtns = langs
      .filter((L) => this.langComplete(L))
      .map((L) => `<button class="btn-cert-open" data-lang="${L}">&#128203; Sertifikat ${L}</button>`)
      .join("");

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-card">
        <button class="modal-close" aria-label="Tutup">&times;</button>
        <h2>🏆 Panel Progres</h2>
        <p class="pl-greet">${user ? 'Halo, <b>' + escText(user.name) + "</b>" : "Mode <b>Tamu</b> — daftar akun agar progresmu tersimpan!"} &middot; Level <b>${lp.level}</b> &middot; XP <b>${lp.xp}</b> &middot; Streak <b>${streak} hari</b></p>

        <div class="pl-bar">
          <div class="pl-bar-fill" style="width:${lp.pct}%"></div>
        </div>
        <p class="pl-bar-note">${lp.pct}% menuju level ${lp.level + 1} (${lp.xp}/${lp.next} XP)</p>

        <h4 class="pl-section">Materi per bahasa</h4>
        ${langBars}

        ${leaderboard}

        <h4 class="pl-section">Lencana</h4>
        <div class="ab-grid">${badgeCards}</div>

        ${certBtns ? `<h4 class="pl-section">Sertifikat</h4><div class="cert-btns">${certBtns}</div>` : ""}
      </div>`;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) this.closeModal();
    });
    overlay.querySelector(".modal-close").addEventListener("click", () => this.closeModal());
    overlay.querySelectorAll(".btn-cert-open").forEach((b) => {
      b.addEventListener("click", () => this.openCertificate(b.dataset.lang));
    });
  },

  /* ============================================================
     SERTIFIKAT (modal, bisa dicetak)
     ============================================================ */
  openCertificate(lang) {
    this.closeModal();
    const user = window.AUTH ? AUTH.current() : null;
    const defaultName = user ? user.name : (localStorage.getItem("belajarCoding:certName") || "");

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    overlay.innerHTML = `
      <div class="modal-card cert-modal">
        <button class="modal-close" aria-label="Tutup">&times;</button>
        <h2>&#127942; Sertifikat Pencapaian</h2>
        <p>Kamu telah menuntaskan semua materi nyata <b>${lang}</b>. Tulis namamu (atau biarkan dari akun):</p>
        <input type="text" id="certName" class="cert-input" placeholder="Nama di sertifikat" value="${escText(defaultName)}" />
        <div class="cert-actions">
          <button class="btn-auth" id="btnPrintCert">Cetak Sertifikat</button>
        </div>
        <div class="certificate-sheet">
          <div class="cert-border">
            <h3>&lt;/&gt; belajarcoding</h3>
            <p class="cert-title">SERTIFIKAT</p>
            <p class="cert-award">diberikan kepada</p>
            <p class="cert-name" id="certNameDisplay">${escText(defaultName) || "__________"}</p>
            <p class="cert-desc">karena telah menyelesaikan seluruh materi nyata <b>${lang}</b> pada platform BelajarCoding.</p>
            <p class="cert-date">${new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
        </div>
      </div>`;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", (e) => { if (e.target === overlay) this.closeModal(); });
    overlay.querySelector(".modal-close").addEventListener("click", () => this.closeModal());

    const input = overlay.querySelector("#certName");
    const display = overlay.querySelector("#certNameDisplay");
    input.addEventListener("input", () => {
      display.textContent = input.value.trim() || "__________";
      localStorage.setItem("belajarCoding:certName", input.value);
    });

    overlay.querySelector("#btnPrintCert").addEventListener("click", () => {
      // kelas "printing" di <html> -> CSS @media print hanya menampilkan sertifikat
      document.documentElement.classList.add("printing");
      window.print();
      setTimeout(() => document.documentElement.classList.remove("printing"), 500);
    });
  },

  closeModal() {
    document.querySelectorAll(".modal-overlay").forEach((m) => m.remove());
  },
};

/* esc teks di dalam HTML */
function escText(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* Eksplisit tempel ke window (editor.js memakai window.GAMIFY) */
window.GAMIFY = GAMIFY;