# Prompt: Membuat Platform E-Learning Interaktif (Klon W3Schools)

Gunakan prompt di bawah ini pada AI Code Builder (seperti Claude, ChatGPT, Cursor, atau sejenisnya) untuk menghasilkan kerangka dasar website pembelajaran *coding*.

**Role:**
Bertindaklah sebagai *Senior Web Developer* dan *System Analyst*. Saya ingin membuat sebuah platform belajar *coding* interaktif (mirip W3Schools) yang bertujuan untuk mengajarkan fundamental pemrograman kepada pemula. Tolong buatkan kode sumber lengkap (HTML, CSS, JavaScript) untuk MVP (*Minimum Viable Product*) dari web ini. Jangan gunakan framework seperti React, Vue, atau Tailwind. Gunakan **Vanilla HTML, CSS, dan JS murni** agar mudah dipelajari oleh pemula.

**Arsitektur & Kebutuhan UI/UX:**
Saya membutuhkan 2 halaman utama dengan fitur-fitur esensial berikut:

### 1. Halaman Tutorial (Materi):

* **Top Navbar:** Berisi logo di kiri, menu navigasi bahasa pemrograman (HTML, CSS, JS) di tengah, tombol "Login/Sign Up", dan **Tombol Toggle Dark/Light Mode** di kanan. Navbar harus bersifat *sticky*.
* **Left Sidebar:** Berisi daftar menu navigasi materi (misal: "HTML Introduction", "HTML Basic", "HTML Elements"). Sidebar ini harus bisa di-*scroll* secara independen dan memiliki indikator visual untuk materi yang sedang aktif/dibaca.
* **Main Content Area:** Berada di sebelah kanan sidebar. Berisi judul materi dan paragraf penjelasan.
* **Blok Code Snippet & Interaksi:**
  * Tampilkan blok kode contoh dengan warna latar belakang yang membedakannya dari teks biasa.
  * Tambahkan tombol **"Copy to Clipboard"** di sudut kanan atas setiap blok kode.
  * Di bawah blok kode, sediakan tombol hijau **"Try it Yourself"** yang mengarahkan ke Halaman Editor Kode dengan membawa data kode tersebut (bisa via URL parameter atau `localStorage`).
* **Navigasi Bawah (Footer Materi):** Tambahkan tombol **"❮ Previous"** dan **"Next ❯"** di bagian bawah materi untuk memudahkan pengguna berpindah ke pelajaran selanjutnya.

### 2. Halaman Live Code Editor (Tryit Editor):

* **Top Bar:** 
  * Ikon/tombol "Home" untuk kembali ke halaman materi.
  * Tombol **"Run"** berwarna hijau.
  * Tombol **"Reset"** (untuk mengembalikan kode ke kondisi awal contoh soal).
  * Tombol **Toggle Dark/Light Mode** yang sinkron dengan pengaturan di halaman materi.
* **Split-Screen Layout (Responsive 50/50):**
  * **Pane Kiri (Code Editor):** Sebuah `<textarea>` tempat pengguna mengetik kode HTML/CSS/JS. Gunakan font *monospace*, berikan *tab support* (agar saat menekan tombol Tab di keyboard tidak berpindah elemen, melainkan memberi spasi/indentasi).
  * **Pane Kanan (Live Preview):** Sebuah elemen `<iframe>` yang merender hasil dari kode.
* **Fungsionalitas JavaScript Utama:** 
  * Fungsi "Run" untuk menyuntikkan isi `textarea` ke dalam `document` milik `iframe`.
  * **Autosave / State Management:** Gunakan `localStorage` agar jika pengguna tidak sengaja me-refresh halaman editor, kode yang sedang mereka ketik tidak hilang.

### Aturan Tambahan (Sangat Penting):

* **Responsivitas:** Desain harus *mobile-friendly*. Di layar HP, *Sidebar* materi disembunyikan dan dibuka via menu *hamburger*. Layout Editor berubah dari kiri-kanan (kolom) menjadi atas-bawah (baris) di layar kecil.
* **Komentar Edukatif:** Berikan komentar atau penjelasan pada kode sumber (terutama pada CSS untuk *flexbox/grid* dan JS untuk manipulasi DOM, `localStorage`, & *Clipboard API*). Kodenya akan dibaca oleh siswa yang sedang belajar.
* **Struktur File:** Tolong berikan kodenya secara terpisah menjadi:
  * `index.html` (halaman materi)
  * `editor.html` (halaman Tryit editor)
  * `style.css` (untuk styling global, layouting, dan variabel CSS untuk *Dark Mode*)
  * `script.js` (untuk logika UI, Dark mode, Copy to clipboard)
  * `editor.js` (untuk logika spesifik `iframe` rendering, `localStorage`, dan indentasi textarea)