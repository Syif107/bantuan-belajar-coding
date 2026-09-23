/* ============================================================
   EDITOR.JS — Logika halaman Tryit editor (editor.html)
   1. Memuat kode awal (localStorage)
   2. Fungsi Run    -> render kode ke iframe
   3. Autosave      -> simpan otomatis ke localStorage
   4. Reset         -> kembalikan kode contoh
   5. Tab support   -> indentasi saat menekan Tab
   6. Sinkron dark mode
   ============================================================ */

/* Kunci localStorage yang sama dengan script.js */
const LS_KEY = "belajarCoding:code";
const PREF_KEY = "belajarCoding:dark";

/* Referensi elemen DOM */
const codeInput = document.getElementById("code-input");
const preview = document.getElementById("preview");
const btnRun = document.getElementById("btnRun");
const btnReset = document.getElementById("btnReset");
const btnHome = document.getElementById("btnHome");
const themeToggle = document.getElementById("themeToggle");

/* Simpan kode contoh (versi asli) untuk dipakai tombol Reset */
let originalCode = "";

/* ------------------------------------------------------------
   1. MEMUAT KODE AWAL
   Prioritas: kode dari localStorage (dikirim oleh tombol
   "Try it Yourself" atau autosave user) -> fallback contoh.
   ------------------------------------------------------------ */
function loadInitialCode() {
  // Kode "Try it Yourself" ditaruh di localStorage saat tombol diklik
  // di index.html. Beda kunci dari autosave agar reset tetap benar.
  const sentCode = localStorage.getItem("belajarCoding:tryit");
  const title = localStorage.getItem("belajarCoding:title");
  const saved = localStorage.getItem(LS_KEY); // hasil autosave user

  if (sentCode) {
    originalCode = sentCode;       // kode contoh = yang dikirim materi
    codeInput.value = sentCode;
    localStorage.removeItem("belajarCoding:tryit");
    localStorage.removeItem("belajarCoding:title");
  } else if (saved) {
    originalCode = saved;          // jika user sudah pernah mengetik
    codeInput.value = saved;
  } else {
    // Default contoh apabila editor dibuka langsung
    originalCode = `<!DOCTYPE html>
<html>
<head>
  <title>Tryit Editor</title>
</head>
<body>
  <h1>Mulai menulis kode di sini!</h1>
  <p>Tekan tombol Run untuk melihat hasilnya.</p>
</body>
</html>`;
    codeInput.value = originalCode;
  }

  // Tampilkan judul materi (jika ada) di top bar
  if (title) {
    document.getElementById("editorTitle").textContent = "Tryit — " + title;
  }

  // Render sekaligus saat pertama kali dibuka
  runCode();
}

/* ------------------------------------------------------------
   2. FUNGSI RUN — MERENDER KODE KE IFRAME
   Cara kerja: document milik iframe didapat lewat contentDocument.
   Lalu kita buka (open), tulis (write) isi textarea, dan tutup
   (close). Iframe langsung mengeksekusi HTML/CSS/JS di dalamnya.
   ------------------------------------------------------------ */
function runCode() {
  const code = codeInput.value;
  // Akses dokumen internal iframe (same-origin, jadi boleh)
  const frameDoc = preview.contentDocument ||
                   preview.contentWindow.document;

  // write() menimpa seluruh isi iframe dengan kode user
  frameDoc.open();
  frameDoc.write(code);
  frameDoc.close();
}

btnRun.addEventListener("click", runAndCount);

/* Jalankan kode sekaligus mencatat aktivitas "Run" untuk lencana */
function runAndCount() {
  runCode();
  if (window.GAMIFY) {
    GAMIFY.countRun().forEach((b) =>
      GAMIFY.toast({ icon: b.icon, title: "Lencana baru: " + b.name, sub: b.desc })
    );
  }
}

/* ------------------------------------------------------------
   3. AUTOSAVE
   Setiap kali user mengetik (event input), simpan isi textarea
   ke localStorage. Jika user tidak sengaja me-refresh halaman,
   kode tidak akan hilang.
   ------------------------------------------------------------ */
codeInput.addEventListener("input", () => {
  localStorage.setItem(LS_KEY, codeInput.value);
});

/* ------------------------------------------------------------
   4. RESET — MENGEMBALIKAN KODE KE CONTOH AWAL
   Kembalikan ke originalCode DAN hapus kunci autosave agar
   localStorage tidak menyimpan kode lama.
   ------------------------------------------------------------ */
btnReset.addEventListener("click", () => {
  codeInput.value = originalCode;
  localStorage.removeItem(LS_KEY);
  runCode();
});

/* ------------------------------------------------------------
   5. HOME — KEMBALI KE HALAMAN MATERI
   ------------------------------------------------------------ */
btnHome.addEventListener("click", () => {
  window.location.href = "index.html";
});

/* ------------------------------------------------------------
   6. TAB SUPPORT
   Secara default menekan Tab pada textarea memindahkan fokus ke
   elemen lain. Kita intercept (preventDefault) lalu menyisipkan
   2 spasi pada posisi kursor agar jadi indentasi.
   ------------------------------------------------------------ */
codeInput.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;

  e.preventDefault(); // hentikan perilaku default pindah fokus

  const start = codeInput.selectionStart; // posisi kursor awal
  const end = codeInput.selectionEnd;     // posisi kursor akhir
  const value = codeInput.value;
  const indent = "  "; // indentasi 2 spasi

  // Sisipkan spasi di posisi kursor
  codeInput.value =
    value.slice(0, start) + indent + value.slice(end);

  // Geser kursor ke akhir spasi yang baru disisipkan
  codeInput.selectionStart = codeInput.selectionEnd = start + indent.length;
});

/* Tambahan kemampuan: menampilkan kode sebagai teks biasa BUKAN dieksekusi
   bisa dilakukan dengan memanipulasi DOM — berguna untuk belajar.
   Ini placeholder edukatif, tidak dipakai aktif.
   Snap used: <iframe> punya document sendiri (sandbox oleh browser). */

/* ------------------------------------------------------------
   7. SINKRON DARK MODE
   Baca preferensi yang disimpan oleh index.html dan terapkan
   di halaman editor agar terlihat konsisten.
   ------------------------------------------------------------ */
function applyTheme(dark) {
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "");
  themeToggle.textContent = dark ? "\u2600" : "\u263E";
  localStorage.setItem(PREF_KEY, dark ? "dark" : "light");
}

const savedTheme = localStorage.getItem(PREF_KEY);
applyTheme(savedTheme === "dark");

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  applyTheme(!isDark);
});

/* ------------------------------------------------------------
   START
   ------------------------------------------------------------ */
loadInitialCode();