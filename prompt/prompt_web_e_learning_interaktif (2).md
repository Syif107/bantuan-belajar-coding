# Prompt: Membuat Platform E-Learning Interaktif (Klon W3Schools)

Gunakan prompt di bawah ini pada AI Code Builder (seperti Claude, ChatGPT, Cursor, atau sejenisnya) untuk menghasilkan kerangka dasar website pembelajaran *coding*.

**Role:**
Bertindaklah sebagai *Senior Web Developer* dan *System Analyst*. Saya ingin membuat sebuah platform belajar *coding* interaktif (mirip W3Schools) yang bertujuan untuk mengajarkan fundamental pemrograman kepada pemula. Tolong buatkan kode sumber lengkap (HTML, CSS, JavaScript) untuk MVP (*Minimum Viable Product*) dari web ini. Jangan gunakan framework seperti React, Vue, atau Tailwind. Gunakan **Vanilla HTML, CSS, dan JS murni** agar mudah dipelajari oleh pemula.

**Arsitektur & Kebutuhan UI/UX:**
Saya membutuhkan 2 halaman utama dengan fitur-fitur esensial berikut:

### 1. Halaman Tutorial (Materi):

* **Top Navbar:** Berisi logo di kiri, menu navigasi bahasa pemrograman (HTML, CSS, JS) di tengah, tombol "Login/Sign Up", dan **Tombol Toggle Dark/Light Mode** di kanan. Navbar harus bersifat *sticky*.

* **Left Sidebar (Sangat Penting):** 
  Buat sidebar yang bisa di-scroll secara independen. Struktur kontennya harus dibagi berdasarkan **Kategori** dengan judul kategori menggunakan huruf kapital, warna teks abu-abu yang lebih pudar, dan jarak margin yang jelas, persis seperti W3Schools. Tolong buatkan elemen HTML (struktur `<ul>` dan `<li>` atau `<div>` dan `<a>`) untuk hierarki menu berikut secara ekstensif:
  * **Kategori HTML:** 
    - `HTML TUTORIAL` (Isi contoh link: HTML Home, HTML Introduction, HTML Editors, HTML Basic, HTML Elements, HTML Attributes, HTML Headings, HTML Paragraphs, HTML Styles, HTML Formatting)
    - `HTML FORMS` (Isi contoh link: HTML Forms, HTML Form Attributes, HTML Form Elements, HTML Input Types)
    - `HTML GRAPHICS` (Isi contoh link: HTML Canvas, HTML SVG)
    - `HTML MEDIA` (Isi contoh link: HTML Media, HTML Video, HTML Audio, HTML Plug-ins)
    - `HTML APIS` (Isi contoh link: HTML Web APIs, HTML Geolocation, HTML Drag and Drop, HTML Web Storage)
    - `HTML EXAMPLES` & `HTML REFERENCES`
  * **Kategori CSS:**
    - `CSS TUTORIAL` (Isi contoh link: CSS Home, CSS Introduction, CSS Syntax, CSS Selectors, CSS How To, CSS Comments, CSS Colors, CSS Backgrounds, CSS Borders)
    - `CSS ADVANCED` (Isi contoh link: CSS Rounded Corners, CSS Border Images, CSS Backgrounds, CSS Colors, CSS Gradients)
    - `CSS FLEXBOX` (Isi contoh link: Flexbox Intro, Flex Container, Flex Items, Flex Responsive)
    - `CSS GRID` (Isi contoh link: Grid Intro, Grid Container, Grid Items, Grid 12-column Layout)
    - `CSS RESPONSIVE` (Isi contoh link: RWD Intro, RWD Viewport, RWD Grid View, RWD Media Queries)
    - Dan tambahan kategori: `CSS SASS`, `CSS EXAMPLES`, `CSS REFERENCES`.
  * **Interaksi Sidebar:** Berikan *highlight* (indikator visual berupa background warna hijau/abu-abu terang dan font tebal) pada link materi yang sedang aktif.

* **Main Content Area:** Berada di sebelah kanan sidebar. Berisi judul materi dan paragraf penjelasan.

* **Blok Code Snippet & Interaksi:**
  * Tampilkan blok kode contoh dengan warna latar belakang yang membedakannya dari teks biasa.
  * Tambahkan tombol **"Copy to Clipboard"** di sudut kanan atas setiap blok kode.
  * Di bawah blok kode, sediakan tombol hijau **"Try it Yourself"** yang mengarahkan ke Halaman Editor Kode dengan membawa data kode tersebut (bisa via URL parameter atau `localStorage`).

* **Navigasi Bawah (Footer Materi):** Tambahkan tombol **"❮ Previous"** dan **"Next ❯"** di bagian bawah materi.

### 2. Halaman Live Code Editor (Tryit Editor):

* **Top Bar:**
  * Ikon/tombol "Home" untuk kembali ke halaman materi.
  * Tombol **"Run"** berwarna hijau.
  * Tombol **"Reset"** (untuk mengembalikan kode ke kondisi awal).
  * Tombol **Toggle Dark/Light Mode** yang sinkron dengan pengaturan di halaman materi.

* **Split-Screen Layout (Responsive 50/50):**
  * **Pane Kiri (Code Editor):** Sebuah `<textarea>` tempat pengguna mengetik kode HTML/CSS/JS. Gunakan font *monospace*, berikan *tab support* (agar saat menekan tombol Tab tidak berpindah elemen, melainkan memberi spasi/indentasi).
  * **Pane Kanan (Live Preview):** Sebuah elemen `<iframe>` yang merender hasil dari kode.

* **Fungsionalitas JavaScript Utama:**
  * Fungsi "Run" untuk menyuntikkan isi `textarea` ke dalam `document` milik `iframe`.
  * **Autosave / State Management:** Gunakan `localStorage` agar jika pengguna tidak sengaja me-refresh halaman, kode tidak hilang.

### Aturan Tambahan (Sangat Penting):

* **Responsivitas:** Desain harus *mobile-friendly*. Di layar HP, *Sidebar* disembunyikan dan dibuka via menu *hamburger*. Layout Editor berubah dari kiri-kanan menjadi atas-bawah di layar kecil.
* **Komentar Edukatif:** Berikan komentar atau penjelasan pada kode sumber (terutama pada CSS dan JS). Kodenya akan dibaca oleh siswa yang sedang belajar.
* **Struktur File:** Tolong berikan kodenya secara terpisah menjadi:
  * `index.html` (halaman materi)
  * `editor.html` (halaman Tryit editor)
  * `style.css` (untuk styling global)
  * `script.js` (untuk logika UI)
  * `editor.js` (untuk logika spesifik `iframe` dan `textarea`)