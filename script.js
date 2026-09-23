/* ============================================================
   SCRIPT.JS — Logika halaman materi (index.html)
   1. Bangun daftar flat dari data kategori (lessons.js)
   2. Render sidebar berkelompok kategori
   3. Render konten (materi nyata vs placeholder)
   4. Navigasi Previous / Next
   5. Copy to Clipboard
   6. Try it Yourself -> kirim kode ke editor.html
   7. Dark mode toggle
   8. Tab navbar HTML/CSS/JS & hamburger menu
   ============================================================ */

/* ------------------------------------------------------------
   1. DAFTAR FLAT MATERI
   CATEGORIES (dari lessons.js) berbentuk pohon kategori.
   Kita ratakan menjadi satu array berurutan biar Previous/Next
   dan deep-link (?lesson=...) gampang dihitung dengan indeks.
   ------------------------------------------------------------ */
const FLAT = [];
CATEGORIES.forEach((cat, catIndex) => {
  cat.lessons.forEach((lesson) => {
    FLAT.push({
      ...lesson,
      lang: cat.lang,
      cat: catIndex,
    });
  });
});

/* Kunci localStorage yang dipakai bersama editor.html */
const LS_KEY = "belajarCoding:code";   // autosave kode editor
const PREF_KEY = "belajarCoding:dark"; // preferensi tema

/* Materi yang sedang dibuka. Deep-link via ?lesson=id */
let currentIndex = 0;
const params = new URLSearchParams(window.location.search);
const requestedId = params.get("lesson");
if (requestedId) {
  const found = FLAT.findIndex((l) => l.id === requestedId);
  if (found !== -1) currentIndex = found;
}

const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const navLinks = document.querySelectorAll("#navLinks a");

/* ------------------------------------------------------------
   2. RENDER SIDEBAR (berkelompok kategori)
   Setiap kategori dirender sebagai satu grup: heading kapital
   (dibuat pudar oleh CSS) + daftar <ul>. Materi aktif diberi
   class "active" untuk highlight.
   ------------------------------------------------------------ */
function renderSidebar() {
  const activeId = FLAT[currentIndex].id;

  sidebar.innerHTML = CATEGORIES.map((cat) => {
    // progres kategori: hanya materi nyata (placeholder tidak dihitung)
    const realLessons = cat.lessons.filter((l) => !l.empty);
    const doneCount = realLessons.filter((l) => GAMIFY.isComplete(l.id)).length;
    const pct = realLessons.length ? Math.round((doneCount / realLessons.length) * 100) : 0;

    const items = cat.lessons.map((l) => {
      const isActive = l.id === activeId;
      const done = !l.empty && GAMIFY.isComplete(l.id);
      const cls = isActive ? ' class="active"' : "";
      const idx = FLAT.findIndex((f) => f.id === l.id);
      const check = done ? ' <span class="li-check">&#10004;</span>' : "";
      return `<li><a href="#${l.id}"${cls} data-index="${idx}">${l.title}${check}</a></li>`;
    }).join("");

    return `
      <div class="sidebar-group">
        <h3>${cat.label} <span class="cat-count">${doneCount}/${realLessons.length}</span></h3>
        <div class="cat-progress"><span class="cp-fill" style="width:${pct}%"></span></div>
        <ul>${items}</ul>
      </div>`;
  }).join("");
}

/* esc() mengubah karakter HTML agar aman ditampilkan sebagai teks
   (misalnya contoh kode tidak dirender sebagai tag asli HTML). */
function esc(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ------------------------------------------------------------
   3. RENDER KONTEN
   ------------------------------------------------------------ */
function renderContent() {
  const lesson = FLAT[currentIndex];

  // Update judul tab browser
  document.title = lesson.title + " — BelajarCoding";

  // Tandai tab navbar sesuai bahasa materi sekarang
  navLinks.forEach((a) => a.classList.remove("active"));
  const langKey = lesson.lang === "JavaScript" ? "js" : lesson.lang.toLowerCase();
  const activeLink = document.querySelector(`#navLinks a[data-lang="${langKey}"]`);
  if (activeLink) activeLink.classList.add("active");

  // Kasus 1: materi placeholder — belum tersedia isinya
  if (lesson.empty) {
    content.innerHTML = `
      <div class="coming-soon">
        <div class="cs-icon">&#128218;</div>
        <h1>${lesson.title}</h1>
        <p>Topik <b>${esc(lesson.title)}</b> sedang disusun dan akan
        segera hadir di platform ini. Kamu tetap bisa lanjut ke materi
        berikutnya melalui tombol navigasi di bawah.</p>
      </div>
      ${lessonNavHtml()}
    `;
    attachNav();
    return;
  }

  // Kasus 2: materi nyata dengan kode contoh
  content.innerHTML = `
    <h1>${lesson.title}</h1>
    ${lesson.html}

    <!-- Blok code snippet dengan tombol copy -->
    <div class="code-block">
      <button class="copy-btn" data-copy='${esc(lesson.code)}'
              title="Salin kode">&#128203; Copy to Clipboard</button>
      <pre><code>${esc(lesson.code)}</code></pre>
    </div>

    <!-- Tombol hijau : Try it Yourself -->
    <button class="try-btn" data-code='${esc(lesson.code)}'
            data-title="${lesson.title}">Try it Yourself &#9654;</button>

    <!-- Kuis uji pemahaman: satu-satunya pintu XP & "materi selesai" -->
    ${lesson.quiz ? quizHtml(lesson) : ""}

    ${lessonNavHtml()}
  `;

  attachLessonEvents();

  // Kuis
  if (lesson.quiz) attachQuiz(lesson);
}

/* Navigasi bawah (Previous / Next) — dipakai oleh dua kasus di atas.
   Indeks 0 dan terakhir otomatis disable. */
function lessonNavHtml() {
  return `
    <nav class="lesson-nav">
      <button class="prev-btn" id="prevBtn"
        ${currentIndex === 0 ? "disabled" : ""}>&#10094; Previous</button>
      <button class="next-btn" id="nextBtn"
        ${currentIndex === FLAT.length - 1 ? "disabled" : ""}>Next &#10095;</button>
    </nav>
  `;
}

function attachNav() {
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");
  if (prev) prev.addEventListener("click", () => goTo(currentIndex - 1));
  if (next) next.addEventListener("click", () => goTo(currentIndex + 1));

  // Menu sidebar selalu punya event klik (dipasang sekali di bawah),
  // dan jika sidebar terbuka di layar kecil, tutup setelah memilih.
  sidebar.classList.remove("open");
}

function attachLessonEvents() {
  // --- Copy to Clipboard ---
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", copyToClipboard);
  });

  // --- Try it Yourself ---
  document.querySelectorAll(".try-btn").forEach((btn) => {
    btn.addEventListener("click", openEditor);
  });

  attachNav();
}

/* ------------------------------------------------------------
   3b. GAMIFIKASI — karena berjalan, effort terlihat & ter-reward
   ------------------------------------------------------------ */

/* Widget akun di navbar: tamu vs user yang login */
function renderAuthWidget() {
  const area = document.getElementById("authArea");
  const user = window.AUTH ? AUTH.current() : null;

  if (!user) {
    area.innerHTML =
      '<a class="btn-login" href="login.html?next=index.html">Login / Sign Up</a>';
    return;
  }

  area.innerHTML =
    '<span class="user-chip">&#128100; ' + esc(user.name) + "</span>" +
    '<button class="btn-logout" id="btnLogout" title="Keluar">Keluar</button>';

  document.getElementById("btnLogout").addEventListener("click", () => {
    const name = user.name;
    AUTH.logout();
    GAMIFY.toast({
      icon: "\u{1F44B}",
      title: "Sampai jumpa, " + name + "!",
      sub: "Kamu kembali ke mode tamu.",
    });
    renderAuthWidget();
    renderSidebar();
    renderContent();
  });
}

/* Kuis adalah satu-satunya pintu "materi selesai" (lihat attachQuiz).
   Tidak ada lagi tombol centang — reward = bukti pemahaman. */

/* Blok kuis "Uji Pemahaman" — jalur TUNGGAL menuju XP & "selesai".
   Chip status menunjukkan progres soal. Materi TIDAK bisa dicentang
   tanpa membuktikan pemahaman lewat kuis (anti-curang). */
function quizHtml(lesson) {
  const stats = GAMIFY.quizStats(lesson);
  const allDone = stats.total > 0 && stats.correct === stats.total;
  const chip = allDone
    ? '<span class="quiz-chip done" id="quizChip">&#10004; Materi selesai — +10 XP didapat</span>'
    : '<span class="quiz-chip" id="quizChip">&#128161; Jawab benar ' + stats.correct + "/" + stats.total +
      " soal di bawah untuk menyelesaikan materi (+10 XP)</span>";
  return `
    <div class="quiz-box" id="quizBox">
      <h2>&#129504; Uji Pemahaman</h2>
      ${chip}
      ${lesson.quiz.map((q, qi) => `
        <div class="quiz-item" data-qi="${qi}">
          <p class="quiz-q"><b>${qi + 1}.</b> ${escText(q.q)}</p>
          <div class="quiz-opts">
            ${q.options.map((opt, oi) =>
              `<button class="qopt" data-opt="${oi}">${escText(opt)}</button>`
            ).join("")}
          </div>
          <p class="quiz-feedback"></p>
        </div>`).join("")}
    </div>`;
}

function attachQuiz(lesson) {
  // Soal yang sudah benar di sesi lalu: pre-mark agar tak dijawab ulang
  lesson.quiz.forEach((q, qi) => {
    if (!GAMIFY.isQuestionSolved(lesson.id, qi)) return;
    const item = document.querySelector('#quizBox .quiz-item[data-qi="' + qi + '"]');
    if (!item) return;
    item.dataset.answered = "1";
    item.querySelectorAll(".qopt").forEach((b, oi) => {
      if (oi === q.answer) b.classList.add("correct");
      b.disabled = true;
    });
    const fb = item.querySelector(".quiz-feedback");
    if (fb) {
      fb.textContent = "Benar!";
      fb.className = "quiz-feedback right";
    }
  });

  document.querySelectorAll("#quizBox .qopt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".quiz-item");
      if (item.dataset.answered) return; // soal sudah benar, terkunci

      const qi = Number(item.dataset.qi);
      const choice = Number(btn.dataset.opt);
      const q = lesson.quiz[qi];
      const res = GAMIFY.answerQuiz(lesson, qi, choice);

      const fb = item.querySelector(".quiz-feedback");
      if (res.correct) {
        // benar -> kunci soal dan tandai jawaban
        item.dataset.answered = "1";
        item.querySelectorAll(".qopt").forEach((b, oi) => {
          if (oi === q.answer) b.classList.add("correct");
          b.disabled = true;
        });
        fb.textContent = res.first ? "Benar! +4 XP" : "Benar!";
        fb.className = "quiz-feedback right";
        if (res.first) GAMIFY.toast({ icon: "\u2705", title: "Jawaban benar!", sub: "+4 XP" });

        // Seluruh soal tuntas => materi selesai + bonus 10 XP
        if (res.completed) {
          const chip = document.getElementById("quizChip");
          if (chip) {
            chip.textContent = "\u2714 Materi selesai \u2014 +10 XP didapat";
            chip.classList.add("done");
          }
          GAMIFY.toast({ icon: "\u2B50", title: "+10 XP \u2014 " + lesson.title + " selesai!", sub: "Semua soal kuis terjawab benar." });
          renderSidebar();
        }

        if (res.levelUp) GAMIFY.toast({ icon: "\u{1F31F}", title: "Level naik!", sub: "Sekarang level " + res.level });
        res.newBadges.forEach((b) =>
          GAMIFY.toast({ icon: b.icon, title: "Lencana baru: " + b.name, sub: b.desc })
        );
      } else {
        // salah -> opsi itu dinonaktifkan, soal TETAP bisa dicoba lagi
        btn.classList.add("wrong");
        btn.disabled = true;
        fb.textContent = "Belum tepat. Jawaban benar: " + q.options[q.answer];
        fb.className = "quiz-feedback wrong";
      }
    });
  });
}

/* Pindah ke materi dengan index idx lalu scroll halaman ke atas */
function goTo(idx) {
  if (idx < 0 || idx >= FLAT.length) return;
  currentIndex = idx;
  renderSidebar();
  renderContent();
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update URL tanpa reload. try/catch karena beberapa browser
  // menolak pushState pada protokol file://
  try {
    history.pushState(null, "", "?lesson=" + FLAT[idx].id);
  } catch (e) {
    /* abaikan — navigasi tetap jalan meski URL tak berubah */
  }
}

/* ------------------------------------------------------------
   4. COPY TO CLIPBOARD
   Modern: navigator.clipboard (hanya di HTTPS). Fallback:
   execCommand("copy") untuk file:// dan browser lama.
   ------------------------------------------------------------ */
function copyToClipboard(e) {
  const btn = e.currentTarget;
  const text = btn.dataset.copy;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "\u2713 Tersalin!";
      setTimeout(() => (btn.textContent = "\u{1F4CB} Copy to Clipboard"), 1500);
    });
    return;
  }

  // Fallback: buat textarea siluman, pilih teksnya, lalu salin.
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand("copy");
    btn.textContent = "\u2713 Tersalin!";
  } catch (err) {
    alert("Tidak bisa menyalin: " + err);
  }
  document.body.removeChild(temp);
  setTimeout(() => (btn.textContent = "\u{1F4CB} Copy to Clipboard"), 1500);
}

/* ------------------------------------------------------------
   5. TRY IT YOURSELF -> buka editor.html
   Kode dikirim lewat localStorage (aman untuk kode panjang).
   ------------------------------------------------------------ */
function openEditor(e) {
  const btn = e.currentTarget;
  // Kunci khusus: editor.js menjadikannya "kode contoh" untuk Reset
  localStorage.setItem("belajarCoding:tryit", btn.dataset.code);
  localStorage.setItem("belajarCoding:title", btn.dataset.title);
  window.location.href = "editor.html";
}

/* ------------------------------------------------------------
   6. DARK MODE TOGGLE
   Preferensi disimpan di localStorage agar sinkron lintas halaman.
   ------------------------------------------------------------ */
const themeToggle = document.getElementById("themeToggle");

function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "");
  themeToggle.textContent = dark ? "\u2600" : "\u263E"; // ☀ / ☾
  localStorage.setItem(PREF_KEY, dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem(PREF_KEY);
applyTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  applyTheme(!isDark);
});

/* ------------------------------------------------------------
   7. NAVBAR TAB & HAMBURGER
   Klik tab HTML/CSS/JS -> pindah ke materi pertama bahasa itu.
   Klik hamburger -> buka/tutup sidebar di layar kecil.
   ------------------------------------------------------------ */
navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault(); // jangan lompat ke anchor kosong
    const lang = a.dataset.lang;
    const map = { html: "HTML", css: "CSS", js: "JavaScript" };
    // cari materi pertama dengan bahasa tsb, minimal dari posisi sekarang
    for (let i = 0; i < FLAT.length; i++) {
      if (FLAT[i].lang === map[lang]) { goTo(i); break; }
    }
    // tutup sidebar mobile jika sedang terbuka
    sidebar.classList.remove("open");
  });
});

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/* Tombol panel progres (🏆) */
const btnProgress = document.getElementById("btnProgress");
btnProgress.addEventListener("click", () => {
  GAMIFY.updateStreak();
  GAMIFY.openPanel();
});

/* ------------------------------------------------------------
   KLIK ITEM SIDEBAR (delegasi event)
   Satu listener untuk semua link hasil render — lebih efisien
   dibanding memasang listener per item setiap render ulang.
   ------------------------------------------------------------ */
sidebar.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-index]");
  if (!link) return;
  e.preventDefault();
  goTo(Number(link.dataset.index));
});

/* ------------------------------------------------------------
   START
   ------------------------------------------------------------ */
renderAuthWidget();
GAMIFY.updateStreak(); // hitung streak kunjungan hari ini
renderSidebar();
renderContent();