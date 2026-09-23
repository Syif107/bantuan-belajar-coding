/* ============================================================
   LESSONS.JS — Data seluruh materi belajar-coding
   Struktur: array of kategori, tiap kategori berisi daftar materi.

   Setiap materi:
   - id    : kode unik untuk deep-link (contoh: ?lesson=html-basic)
   - title : judul di sidebar
   - html  : paragraf penjelasan (materi nyata)
   - code  : contoh kode untuk blok snippet & Try it Yourself
   - empty : jika true => materi placeholder "segera hadir"
   ============================================================ */

/* ============================================================
   BAGIAN 1 — HTML
   ============================================================ */
const CATEGORIES = [
  {
    lang: "HTML",
    label: "HTML Tutorial",
    lessons: [
      {
        id: "html-home",
        title: "HTML Home",
        html: `
          <p>Selamat datang di materi <b>HTML</b>! HTML adalah bahasa
          pertama yang harus dikuasai untuk membangun website.
          Dengan HTML kamu menentukan <b>struktur</b> halaman:
          judul, paragraf, gambar, tombol, dan lainnya.</p>
          <p>Kamu tidak butuh alat khusus untuk memulai — cukup
          <b>Notepad</b> dan <b>browser</b>. Simpan file dengan
          ekstensi <code>.html</code>, lalu buka lewat browser.</p>
        `,
        quiz: [
          {
            q: "Ekstensi file yang benar untuk menyimpan halaman HTML?",
            options: [".html", ".txt", ".css", ".docx"],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Website Pertamaku</title>
</head>
<body>
  <h1>Halaman Pertamaku</h1>
  <p>Belajar HTML itu menyenangkan!</p>
</body>
</html>`,
      },
      {
        id: "html-introduction",
        title: "HTML Introduction",
        html: `
          <p>HTML (<i>HyperText Markup Language</i>) adalah bahasa
          <b>markup</b>, bukan bahasa pemrograman. Artinya HTML tidak
          menghitung atau mengambil keputusan — HTML hanya
          <b>menandai</b> konten agar browser bisa menampilkannya.</p>
          <p>Paragraf di atas ditulis memakai tag <code>&lt;p&gt;</code>,
          judul memakai <code>&lt;h1&gt;</code>, tautan memakai
          <code>&lt;a&gt;</code>. Browser membaca tag-tag ini lalu
          menggambar halamannya.</p>
        `,
        quiz: [
          {
            q: "HTML adalah bahasa markup yang fungsinya...",
            options: [
              "menandai struktur konten agar tampil di browser",
              "menjalankan logika program di server",
              "menyimpan data pengguna",
              "mengatur jaringan internet",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Halaman Pertama Saya</title>
</head>
<body>
  <h1>Halo, Dunia!</h1>
  <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>`,
      },
      {
        id: "html-editors",
        title: "HTML Editors",
        html: `
          <p>Kode HTML bisa ditulis di editor apa pun. Di awal belajar,
          editor paling sederhana adalah <b>Notepad</b> (Windows) atau
          <b>TextEdit</b> (Mac).</p>
          <p>Kamu juga bisa pakai editor berpikir bolak-balik seperti
          <b>Visual Studio Code</b>. Yang penting: simpan file dengan
          ekstensi <code>.html</code> dan pastikan menyimpan sebagai
          <i>plain text</i>, bukan <i>rich text</i>.</p>
        `,
        quiz: [
          {
            q: "Cara yang benar saat menyimpan file HTML dari editor?",
            options: [
              "simpan sebagai plain text dengan ekstensi .html",
              "simpan sebagai rich text (.rtf)",
              "simpan sebagai dokumen Word",
              "cukup salin tempel tanpa menyimpan",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Latihan</title>
</head>
<body>
  <p>Ketik kode ini di editor, simpan sebagai latihan.html</p>
</body>
</html>`,
      },
      {
        id: "html-basic",
        title: "HTML Basic",
        html: `
          <p>Dokumen HTML punya kerangka wajib berikut:</p>
          <ul>
            <li><code>&lt;!DOCTYPE html&gt;</code> — deklarasi jenis dokumen</li>
            <li><code>&lt;html&gt;</code> — akar dari seluruh halaman</li>
            <li><code>&lt;head&gt;</code> — informasi tentang halaman (tidak tampil)</li>
            <li><code>&lt;body&gt;</code> — semua konten yang terlihat</li>
          </ul>
          <p>Isi <code>&lt;body&gt;</code> inilah yang akan ditampilkan di browser.</p>
        `,
        quiz: [
          {
            q: "Tag mana yang berisi semua konten yang terlihat di browser?",
            options: ["<head>", "<body>", "<title>", "<meta>"],
            answer: 1,
          },
          {
            q: "Deklarasi apa yang wajib ada di awal dokumen HTML?",
            options: ["<head>", "<title>", "<!DOCTYPE html>", "<meta>"],
            answer: 2,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Struktur Dasar</title>
</head>
<body>
  <h1>Ini Heading</h1>
  <p>Ini paragraf di dalam elemen body.</p>
</body>
</html>`,
      },
      {
        id: "html-elements",
        title: "HTML Elements",
        html: `
          <p>Sebuah elemen HTML umumnya terdiri dari <b>tag pembuka</b>,
          <b>isi</b>, dan <b>tag penutup</b>:</p>
          <p><code>&lt;p&gt;</code> ...isi... <code>&lt;/p&gt;</code></p>
          <p>Ada juga tag <b>kosong</b> (tidak punya penutup) seperti
          <code>&lt;br&gt;</code> (pindah baris) dan
          <code>&lt;img&gt;</code> (gambar). Elemen juga bisa
          <b>bersarang (nested)</b> di dalam elemen lain.</p>
        `,
        quiz: [
          {
            q: "Contoh tag KOSONG (tanpa tag penutup) adalah...",
            options: ["<br>", "<p>", "<h1>", "<a>"],
            answer: 0,
          },
        ],
        code: `<p>Ini paragraf dengan
  <b>teks tebal</b> di dalamnya.</p>

<p>Ini baris satu.<br>Ini baris dua setelah tag br.</p>`,
      },
      {
        id: "html-attributes",
        title: "HTML Attributes",
        html: `
          <p><b>Atribut</b> memberi informasi tambahan pada elemen dan
          selalu ditulis di dalam tag pembuka, dalam bentuk
          <code>nama="nilai"</code>.</p>
          <ul>
            <li><code>&lt;a href="https://..."&gt;</code> — tujuan tautan</li>
            <li><code>&lt;img src="foto.jpg" alt="deskripsi"&gt;</code> — sumber & teks alternatif gambar</li>
            <li><code>&lt;p title="tips"&gt;</code> — tooltip saat kursor diarahkan</li>
          </ul>
          <p>Atribut <code>alt</code> pada gambar wajib untuk aksesibilitas.</p>
        `,
        quiz: [
          {
            q: "Atribut apa yang harus ada pada <img> agar ramah aksesibilitas?",
            options: ["src", "alt", "width", "style"],
            answer: 1,
          },
          {
            q: "Di mana letak penulisan atribut pada elemen?",
            options: [
              "di dalam tag pembuka",
              "di dalam tag penutup",
              "di luar tag",
              "di dalam isi elemen",
            ],
            answer: 0,
          },
        ],
        code: `<a href="https://www.google.com">Buka Google</a>
<img src="https://www.w3schools.com/w3images/lights600.jpg"
     alt="Gambar lampu" width="200">
<p title="Saya tooltip">Arahkan kursor ke paragraf ini.</p>`,
      },
      {
        id: "html-headings",
        title: "HTML Headings",
        html: `
          <p>Heading adalah <b>judul</b> yang diurutkan dari ukuran
          terbesar hingga terkecil: <code>&lt;h1&gt;</code> sampai
          <code>&lt;h6&gt;</code>.</p>
          <p>Gunakan satu <code>&lt;h1&gt;</code> per halaman sebagai
          judul utama. Heading juga bagus untuk <b>SEO</b> dan membantu
          pembaca memahami struktur artikel.</p>
        `,
        quiz: [
          {
            q: "Berapa level ukuran heading yang tersedia di HTML?",
            options: ["3", "6", "7", "tak terbatas"],
            answer: 1,
          },
        ],
        code: `<h1>Judul Terbesar (h1)</h1>
<h2>Sub judul (h2)</h2>
<h3>Sub sub judul (h3)</h3>
<h4>Lebih kecil lagi (h4)</h4>
<h5>Sangat kecil (h5)</h5>
<h6>Paling kecil (h6)</h6>`,
      },
      {
        id: "html-paragraphs",
        title: "HTML Paragraphs",
        html: `
          <p>Paragraf ditulis dengan tag <code>&lt;p&gt;</code>. Browser
          otomatis menambahkan baris kosong sebelum dan sesudah tiap
          paragraf.</p>
          <p>Perlu diingat: <b>banyak spasi dan baris baru di dalam
          kode dianggap satu spasi saja</b> oleh browser. Gunakan
          <code>&lt;br&gt;</code> untuk pindah baris atau
          <code>&lt;hr&gt;</code> untuk garis pemisah.</p>
        `,
        quiz: [
          {
            q: "Untuk pindah baris dalam satu paragraf (tanpa baris kosong), gunakan...",
            options: ["<br>", "<p>", "<hr>", "<div>"],
            answer: 0,
          },
        ],
        code: `<p>Ini paragraf pertama yang panjang sekali
          namun tetap tampil dalam satu blok.</p>
<hr>
<p>Ini paragraf kedua setelah garis pemisah.</p>
<p>Baris ini<br>terpisah pakai br.</p>`,
      },
      {
        id: "html-styles",
        title: "HTML Styles",
        html: `
          <p>Atribut global <code>style</code> menambahkan gaya CSS
          langsung pada sebuah elemen (inline style). Beberapa properti
          yang sering dipakai:</p>
          <ul>
            <li><code>color</code> — warna teks</li>
            <li><code>background-color</code> — warna latar</li>
            <li><code>font-family</code> — jenis huruf</li>
            <li><code>font-size</code> — ukuran huruf</li>
            <li><code>text-align</code> — perataan teks</li>
          </ul>
        `,
        quiz: [
          {
            q: "Properti CSS untuk mengubah warna teks?",
            options: ["color", "font-size", "text-align", "line-height"],
            answer: 0,
          },
        ],
        code: `<p style="color:red;">Teks merah</p>
<p style="background-color: lightblue;">Latar biru muda</p>
<p style="font-size: 24px;">Ukuran teks besar</p>
<p style="text-align: center;">Teks di tengah</p>`,
      },
      {
        id: "html-formatting",
        title: "HTML Formatting",
        html: `
          <p>HTML punya tag khusus untuk memformat teks agar lebih
          ekspresif sekaligus bermakna secara semantik:</p>
          <ul>
            <li><code>&lt;b&gt;</code> / <code>&lt;strong&gt;</code> — teks tebal (strong juga penting secara makna)</li>
            <li><code>&lt;i&gt;</code> / <code>&lt;em&gt;</code> — teks miring</li>
            <li><code>&lt;mark&gt;</code> — teks disorot kuning</li>
            <li><code>&lt;small&gt;</code> — teks kecil</li>
            <li><code>&lt;del&gt;</code> — teks dicoret</li>
            <li><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code> — pangkat bawah / atas</li>
          </ul>
        `,
        quiz: [
          {
            q: "Tag untuk teks yang disorot (ditandai warna)?",
            options: ["<mark>", "<small>", "<del>", "<i>"],
            answer: 0,
          },
        ],
        code: `<p><b>Teks tebal</b> dan <strong>penting</strong></p>
<p><i>Teks miring</i> dan <mark>disorot</mark></p>
<p><small>teks kecil</small> <del>coret</del> <ins>garis bawah</ins></p>
<p>Rumus: H<sub>2</sub>O dan 10<sup>2</sup></p>`,
      },
      {
        id: "html-links",
        title: "HTML Links",
        html: `
          <p>Tautan ditulis dengan tag <code>&lt;a&gt;</code>. Atribut
          <code>href</code> menentukan tujuannya, sedangkan isi tautan
          adalah teks yang tampil dan bisa diklik.</p>
          <p>Gunakan <code>target="_blank"</code> agar tautan dibuka di
          <b>tab baru</b>. Tautan juga bisa menuju file gambar, email
          (<code>mailto:</code>), atau bagian lain dalam halaman.</p>
        `,
        quiz: [
          {
            q: "Atribut apa yang menentukan tujuan dari sebuah tautan?",
            options: ["href", "src", "title", "link"],
            answer: 0,
          },
          {
            q: "Agar tautan dibuka di tab baru, tambahkan...",
            options: [
              'target="blank"',
              'target="_blank"',
              'tab="new"',
              'open="tab"',
            ],
            answer: 1,
          },
        ],
        code: `<a href="https://www.google.com">Buka Google</a>
<a href="https://www.google.com" target="_blank">Google di tab baru</a>
<a href="mailto:belajar@example.com">Kirim email</a>
<a href="#top">Lompat ke atas</a>`,
      },
      {
        id: "html-images",
        title: "HTML Images",
        html: `
          <p>Gambar dimasukkan dengan tag kosong
          <code>&lt;img&gt;</code>. Butuh satu atribut wajib:
          <code>src</code> (alamat gambar) dan <code>alt</code>
          (teks alternatif jika gambar gagal dimuat).</p>
          <p>Ukuran bisa diatur lewat atribut <code>width</code> dan
          <code>height</code> atau CSS. Selalu isi <code>alt</code>
          agar ramah aksesibilitas.</p>
        `,
        quiz: [
          {
            q: "Teks apa yang tampil saat gambar gagal dimuat?",
            options: ["alt", "src", "title", "width"],
            answer: 0,
          },
        ],
        code: `<img src="https://www.w3schools.com/w3images/lights600.jpg"
     alt="Lampu hias" width="300">
<img src="gambar-tidak-ada.jpg" alt="Teks ini muncul jika gambar rusak">`,
      },
      {
        id: "html-lists",
        title: "HTML Lists",
        html: `
          <p>Daftar (list) berguna untuk menampilkan kumpulan item.
          Ada tiga jenis utama:</p>
          <ul>
            <li><code>&lt;ul&gt;</code> — unordered list (berbullet)</li>
            <li><code>&lt;ol&gt;</code> — ordered list (bernomor)</li>
            <li><code>&lt;dl&gt;</code> — description list (istilah + penjelasan)</li>
          </ul>
          <p>Setiap item ditulis di dalam tag <code>&lt;li&gt;</code>.
          Daftar juga bisa bersarang (daftar di dalam daftar).</p>
        `,
        quiz: [
          {
            q: "Tag untuk satu item di dalam daftar?",
            options: ["<li>", "<ul>", "<ol>", "<dl>"],
            answer: 0,
          },
        ],
        code: `<ul>
  <li>Kopi</li>
  <li>Teh</li>
</ul>

<ol>
  <li>Ambil piring</li>
  <li>Tuang air</li>
  <li>Sajikan</li>
</ol>`,
      },
      {
        id: "html-tables",
        title: "HTML Tables",
        html: `
          <p>Untuk menampilkan data berbentuk baris-kolom, gunakan
          <b>tabel HTML</b>:</p>
          <ul>
            <li><code>&lt;table&gt;</code> — pembungkus tabel</li>
            <li><code>&lt;tr&gt;</code> — baris (<i>table row</i>)</li>
            <li><code>&lt;th&gt;</code> — sel header (tebal & di tengah)</li>
            <li><code>&lt;td&gt;</code> — sel data biasa</li>
            <li><code>&lt;caption&gt;</code> — judul tabel</li>
          </ul>
          <p>Tabel biasanya baru terlihat rapi setelah diberi gaya CSS.</p>
        `,
        quiz: [
          {
            q: "Tag untuk sel HEADER tabel (tebal dan di tengah)?",
            options: ["<th>", "<td>", "<tr>", "<caption>"],
            answer: 0,
          },
        ],
        code: `<table border="1">
  <tr>
    <th>Nama</th>
    <th>Umur</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>17</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>18</td>
  </tr>
</table>`,
      },
      {
        id: "html-blocks",
        title: "HTML Block & Inline",
        html: `
          <p>Tiap elemen HTML punya perilaku menampilkan yang berbeda:</p>
          <ul>
            <li><b>Block-level</b> selalu mulai di baris baru dan mengambil
            selebar layar. Contoh: <code>&lt;div&gt;</code>,
            <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>.</li>
            <li><b>Inline</b> tidak pindah baris dan hanya seukuran
            isinya. Contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>,
            <code>&lt;img&gt;</code>.</li>
          </ul>
          <p>Ini penting untuk mengatur tata letak dengan CSS.</p>
        `,
        quiz: [
          {
            q: "Contoh elemen INLINE (tidak pindah baris) adalah...",
            options: ["<span>", "<div>", "<p>", "<h1>"],
            answer: 0,
          },
        ],
        code: `<div>Ini div BLOCK — satu garis penuh.</div>
<div>Div ini mulai di baris baru.</div>

<span>Ini span INLINE.</span>
<span>Masih di baris yang sama.</span>`,
      },
      {
        id: "html-classes",
        title: "HTML Classes",
        html: `
          <p>Atribut <code>class</code> memberi <b>nama kelompok</b> pada
          elemen agar yan beberapa elemen bisa diberi gaya atau perilaku
          yang sama. Satu class bisa dipakai banyak elemen.</p>
          <p>Untuk mengambil semua elemen dengan class tertentu dari
          JavaScript, kamu bisa memakai <code>getElementsByClassName</code>
          atau <code>querySelectorAll('.nama')</code>.</p>
        `,
        quiz: [
          {
            q: "Atribut yang bisa dipakai oleh BANYAK elemen untuk pengelompokan?",
            options: ["class", "id", "action", "src"],
            answer: 0,
          },
        ],
        code: `<style>
  .kucing { color: orange; font-weight: bold; }
</style>
<p class="kucing">Ini kucing pertama</p>
<p class="kucing">Ini kucing kedua</p>
<p class="kucing">Ini kucing ketiga</p>`,
      },
      {
        id: "html-id",
        title: "HTML Id",
        html: `
          <p>Atribut <code>id</code> memberi <b>identitas unik</b> pada
          satu elemen. Berbeda dengan class, id dalam satu halaman tidak
          boleh dobel.</p>
          <p>id sangat berguna karena JavaScript bisa langsung menunjuk
          elemennya dengan <code>getElementById</code>. id juga menjadi
          target tautan lompat di dalam halaman.</p>
        `,
        quiz: [
          {
            q: "Berapa kali sebuah id boleh muncul dalam SATU halaman?",
            options: ["satu kali", "banyak kali", "dua kali", "tidak boleh ada"],
            answer: 0,
          },
        ],
        code: `<style>
  #kepala { background-color: lightgreen; padding: 10px; }
</style>

<div id="kepala">Saya elemen dengan id "kepala"</div>`,
      },
      {
        id: "html-div",
        title: "HTML Div",
        html: `
          <p>Elemen <code>&lt;div&gt;</code> adalah <b>wadah umum</b>
          (container) untuk mengelompokkan bagian-bagian halaman. Div
          tidak punya makna khusus — justru itu kelebihannya.</p>
          <p>Dengan CSS, div bisa diubah jadi kolom, sidebar, kartu, atau
          warna bagian lain melalui flexbox dan grid. Hampir semua layout
          website modern dibangun dari div.</p>
        `,
        quiz: [
          {
            q: "Kegunaan utama elemen <div> adalah...",
            options: [
              "wadah pengelompokan untuk diatur CSS-nya",
              "menampilkan daftar item",
              "membuat tautan klik",
              "memiringkan teks",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .kartu {
    background: #f0f0f0;
    margin: 10px;
    padding: 20px;
    width: 200px;
  }
</style>
<div class="kartu"><h2>Kartu Satu</h2><p>Isi kartu.</p></div>
<div class="kartu"><h2>Kartu Dua</h2><p>Isi kartu lain.</p></div>`,
      },
      {
        id: "html-comments",
        title: "HTML Comments",
        html: `
          <p>Komentar adalah <b>catatan untuk manusia</b> yang tidak
          ditampilkan oleh browser. Gunakan untuk menjelaskan bagian kode
          atau untuk menyembunyikan sementara sebagian kode.</p>
          <p>Penulisannya:
          <code>&lt;!-- isi komentar --&gt;</code>. Bisa satu baris
          maupun banyak baris.</p>
        `,
        quiz: [
          {
            q: "Komentar HTML ditulis dengan tanda...",
            options: ["<!-- ... -->", "// ...", "/* ... */", "# ..."],
            answer: 0,
          },
        ],
        code: `<!-- Ini komentar satu baris -->

<!--
  Komentar banyak baris.
  Baris ini juga tidak akan tampil.
-->
<p>Komentar di atas tidak terlihat.</p>`,
      },
      {
        id: "html-colors",
        title: "HTML Colors",
        html: `
          <p>Warna di halaman web bisa ditulis lewat properti CSS
          <code>color</code> (teks) dan <code>background-color</code>
          (latar) pada atribut <code>style</code>.</p>
          <p>Format yang paling umum: <b>nama warna</b> (<code>red</code>),
          <b>HEX</b> (<code>#ff0000</code>), <b>RGB</b>
          (<code>rgb(255,0,0)</code>), dan <b>HSL</b>
          (<code>hsl(0,100%,50%)</code>).</p>
        `,
        quiz: [
          {
            q: "Format warna HEX untuk merah murni adalah...",
            options: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"],
            answer: 0,
          },
        ],
        code: `<p style="color:tomato;">Nama warna: tomato</p>
<p style="color:#3b82f6;">HEX: #3b82f6</p>
<p style="color:rgb(76, 175, 80);">RGB: rgb(76,175,80)</p>
<p style="background-color: #f0f8ff;">Latar biru muda</p>`,
      },
      {
        id: "html-iframes",
        title: "HTML Iframes",
        html: `
          <p><code>&lt;iframe&gt;</code> menyematkan <b>halaman web lain
          di dalam halaman kita</b>. Contohnya: video YouTube, peta
          Google, atau dokumen lain.</p>
          <p>Ada beberapa atribut berguna: <code>src</code>,
          <code>title</code> (untuk aksesibilitas), <code>height</code>,
          <code>width</code>, dan <code>frameborder</code>.</p>
        `,
        quiz: [
          {
            q: "Tag untuk menyematkan halaman web lain di dalam halaman kita?",
            options: ["<iframe>", "<frame>", "<embed>", "<object>"],
            answer: 0,
          },
        ],
        code: `<iframe src="https://www.w3schools.com"
        title="Halaman W3Schools"
        height="200" width="350"></iframe>`,
      },
    ],
  },
  {
    lang: "HTML",
    label: "HTML Forms",
    lessons: [
      {
        id: "html-forms",
        title: "HTML Forms",
        html: `
          <p>Form HTML dipakai untuk <b>mengumpulkan data dari
          pengguna</b>, misalnya nama, email, dan kata sandi, lalu
          mengirimkannya ke server.</p>
          <p>Tag <code>&lt;form&gt;</code> membungkus semua elemen input.
          Atribut <code>action</code> menentukan tujuan pengiriman, dan
          <code>method</code> menentukan caranya
          (<code>get</code> / <code>post</code>).</p>
        `,
        quiz: [
          {
            q: "Atribut mana yang menentukan tujuan pengiriman data form?",
            options: ["method", "action", "name", "target"],
            answer: 1,
          },
          {
            q: "Dua nilai umum untuk atribut method adalah...",
            options: ["get dan post", "send dan receive", "open dan close", "put dan delete"],
            answer: 0,
          },
        ],
        code: `<form action="/kirim" method="post">
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="nama"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <input type="submit" value="Kirim">
</form>`,
      },
      {
        id: "html-form-attributes",
        title: "HTML Form Attributes",
        html: `
          <p>Atribut penting pada <code>&lt;form&gt;</code>:</p>
          <ul>
            <li><code>action</code> — URL tempat data dikirim</li>
            <li><code>method</code> — <code>get</code> atau <code>post</code></li>
            <li><code>target</code> — tempat hasil dibuka</li>
            <li><code>autocomplete</code> — aktif/nonaktif isi otomatis</li>
          </ul>
          <p>Pada input, <code>name</code> wajib ada agar data punya
          label saat dikirim.</p>
        `,
        quiz: [
          {
            q: "Agar data input teridentifikasi saat dikirim, atribut wajibnya?",
            options: ["name", "id", "class", "value"],
            answer: 0,
          },
        ],
        code: `<form action="/cari" method="get" target="_blank">
  <label>Kata kunci:</label>
  <input type="text" name="q">
  <input type="submit" value="Cari di tab baru">
</form>`,
      },
      {
        id: "html-form-elements",
        title: "HTML Form Elements",
        html: `
          <p>Form punya banyak jenis elemen untuk berbagai kebutuhan:</p>
          <ul>
            <li><code>&lt;input&gt;</code> — kotak isian (tipe bermacam-macam)</li>
            <li><code>&lt;label&gt;</code> — keterangan untuk input</li>
            <li><code>&lt;select&gt;</code> — dropdown pilihan</li>
            <li><code>&lt;textarea&gt;</code> — isian teks panjang</li>
            <li><code>&lt;button&gt;</code> — tombol</li>
            <li><code>&lt;fieldset&gt;</code> — mengelompokkan bagian form</li>
          </ul>
        `,
        quiz: [
          {
            q: "Elemen untuk isian teks PANJANG (beberapa baris)?",
            options: ["<textarea>", "<input>", "<select>", "<label>"],
            answer: 0,
          },
        ],
        code: `<form>
  <label>Pilih jurusan:</label>
  <select name="jurusan">
    <option value="ipa">IPA</option>
    <option value="ips">IPS</option>
  </select><br><br>

  <label>Pesan:</label>
  <textarea name="pesan" rows="3" cols="30"></textarea><br><br>

  <button type="submit">Simpan</button>
</form>`,
      },
      {
        id: "html-input-types",
        title: "HTML Input Types",
        html: `
          <p>Atribut <code>type</code> pada <code>&lt;input&gt;</code>
          menentukan tampilan dan fungsi input. Beberapa yang sering
          dipakai:</p>
          <ul>
            <li><code>text</code> — teks biasa</li>
            <li><code>password</code> — disembunyikan</li>
            <li><code>email</code> — validasi email</li>
            <li><code>number</code> — angka</li>
            <li><code>date</code> — tanggal</li>
            <li><code>radio</code> — pilih satu opsi</li>
            <li><code>checkbox</code> — boleh pilih banyak</li>
            <li><code>file</code> — unggah berkas</li>
          </ul>
          <p>Gunakan tipe yang sesuai agar feedback dari browser nyaman.</p>
        `,
        quiz: [
          {
            q: "Tipe input mana yang menyembunyikan teks yang diketik?",
            options: ["text", "hidden", "password", "key"],
            answer: 2,
          },
          {
            q: "Untuk memilih SATU opsi dari beberapa pilihan, gunakan...",
            options: ["checkbox", "radio", "date", "number"],
            answer: 1,
          },
        ],
        code: `<input type="text" placeholder="Teks"><br>
<input type="password" placeholder="Kata sandi"><br>
<input type="email" placeholder="mail@kamu.com"><br>
<input type="number" min="1" max="10"><br>
<input type="date"><br><br>

<input type="radio" id="pria" name="jk"><label for="pria">Pria</label>
<input type="radio" id="wanita" name="jk"><label for="wanita">Wanita</label>`,
      },
    ],
  },
  {
    lang: "HTML",
    label: "HTML Graphics",
    lessons: [
      { id: "html-canvas", title: "HTML Canvas", empty: true },
      { id: "html-svg", title: "HTML SVG", empty: true },
    ],
  },
  {
    lang: "HTML",
    label: "HTML Media",
    lessons: [
      { id: "html-media", title: "HTML Media", empty: true },
      { id: "html-video", title: "HTML Video", empty: true },
      { id: "html-audio", title: "HTML Audio", empty: true },
      { id: "html-plugins", title: "HTML Plug-ins", empty: true },
    ],
  },
  {
    lang: "HTML",
    label: "HTML APIs",
    lessons: [
      { id: "html-web-apis", title: "HTML Web APIs", empty: true },
      { id: "html-geolocation", title: "HTML Geolocation", empty: true },
      { id: "html-drag", title: "HTML Drag and Drop", empty: true },
      { id: "html-web-storage", title: "HTML Web Storage", empty: true },
    ],
  },
  {
    lang: "HTML",
    label: "HTML Examples",
    lessons: [
      { id: "html-examples", title: "HTML Examples", empty: true },
    ],
  },
  {
    lang: "HTML",
    label: "HTML References",
    lessons: [
      { id: "html-references", title: "HTML References", empty: true },
    ],
  },

/* ============================================================
   BAGIAN 2 — CSS
   ============================================================ */
  {
    lang: "CSS",
    label: "CSS Tutorial",
    lessons: [
      {
        id: "css-home",
        title: "CSS Home",
        html: `
          <p><b>CSS</b> (<i>Cascading Style Sheets</i>) adalah bahasa
          untuk mengatur <b>tampilan</b> halaman: warna, ukuran, jarak,
          posisi, dan jenis huruf.</p>
          <p>Jika HTML adalah kerangka dan isi rumah, maka CSS adalah
          cat, wallpaper, dan dekorasinya. CSS membuat halaman jadi
          cantik dan rapi.</p>
        `,
        quiz: [
          {
            q: "Kepanjangan CSS adalah...",
            options: [
              "Cascading Style Sheets",
              "Creative Style System",
              "Computer Styled Site",
              "Colorful Style Settings",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; }
    h1   { color: navy; }
  </style>
</head>
<body>
  <h1>Judul Berwarna Navy</h1>
  <p>Teks paragraf memakai Arial.</p>
</body>
</html>`,
      },
      {
        id: "css-introduction",
        title: "CSS Introduction",
        html: `
          <p>CSS bekerja dengan <b>menargetkan elemen HTML</b> lalu
          memberi properti gaya. Contoh,
          <code>h1 { color: blue; }</code> berarti "semua elemen h1
          berwarna biru".</p>
          <p>"Cascading" artinya aturan bisa <b>bertumpuk</b>: aturan
          yang ditulis belakangan atau lebih spesifik akan menang.
          Struktur tulisannya: <code>selektor { properti: nilai; }</code>.</p>
        `,
        quiz: [
          {
            q: "Struktur dasar satu aturan CSS adalah...",
            options: [
              "selektor { properti: nilai; }",
              "{ properti } selektor",
              "nilai: properti; selektor",
              "properti = selektor : nilai",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  /* selektor   { properti: nilai; } */
  body        { background-color: #fafafa; }
  h1          { color: green; }
  .penting    { font-weight: bold; }
  #judul-utama { font-size: 36px; }
</style>
<h1 id="judul-utama">Judul</h1>
<p class="penting">Paragraf tebal.</p>`,
      },
      {
        id: "css-syntax",
        title: "CSS Syntax",
        html: `
          <p>Setiap aturan CSS terdiri dari:</p>
          <ul>
            <li><b>Selektor</b> — elemen/mana yang ditarget</li>
            <li><b>Deklarasi</b> — blok di dalam <code>{ }</code></li>
            <li><b>Properti</b> — hal yang diatur (misal <code>color</code>)</li>
            <li><b>Nilai</b> — nilai properti (misal <code>red</code>)</li>
          </ul>
          <p>Properti dan nilai dipisahkan titik dua, tiap deklarasi
          diakhiri titik koma.</p>
        `,
        quiz: [
          {
            q: "Dalam CSS, setiap deklarasi diakhiri dengan tanda...",
            options: ["titik koma (;)", "titik dua (:)", "koma (,)", "titik (.)"],
            answer: 0,
          },
        ],
        code: `<style>
  p {
    color: white;
    background-color: teal;
    padding: 10px;
  }
</style>
<p>Dua properti diterapkan ke p.</p>`,
      },
      {
        id: "css-selectors",
        title: "CSS Selectors",
        html: `
          <p>Selektor menentukan <b>elemen mana yang digayakan</b>.
          Beberapa selektor dasar:</p>
          <ul>
            <li><code>p</code> — semua elemen p</li>
            <li><code>#id</code> — elemen dengan id tertentu</li>
            <li><code>.class</code> — elemen dengan class tertentu</li>
            <li><code>p, h1</code> — gabungan banyak selektor</li>
            <li><code>div p</code> — p di dalam div</li>
          </ul>
        `,
        quiz: [
          {
            q: "Selektor mana yang menarget elemen dengan class=\"kotak\"?",
            options: [".kotak", "#kotak", "kotak", "*kotak"],
            answer: 0,
          },
          {
            q: "Selektor \"div p\" artinya...",
            options: [
              "p di dalam div",
              "div di dalam p",
              "kedua sibling di parent sama",
              "p saja tanpa div",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  p      { color: blue; }          /* semua p */
  #unik  { background: gold; }     /* id "unik" */
  .kotak { padding: 10px; }        /* class "kotak" */
  div p  { border: 1px solid; }    /* p dalam div */
</style>
<p>Biru</p>
<p id="unik">Berlatar emas</p>
<div class="kotak"><p>Di dalam div</p></div>`,
      },
      {
        id: "css-how-to",
        title: "CSS How To",
        html: `
          <p>Ada tiga cara memasang CSS ke halaman:</p>
          <ul>
            <li><b>External</b> — file <code>.css</code> terpisah, paling
            dianjurkan karena bisa dipakai ulang (via <code>&lt;link&gt;</code>)</li>
            <li><b>Internal</b> — di dalam tag <code>&lt;style&gt;</code></li>
            <li><b>Inline</b> — di atribut <code>style</code> elemen</li>
          </ul>
          <p>Prioritas (yang menang): inline &gt; internal &gt; external.</p>
        `,
        quiz: [
          {
            q: "Cara memasang CSS yang paling dianjurkan (bisa dipakai ulang)?",
            options: [
              "file .css eksternal (via <link>)",
              "internal di dalam <style>",
              "inline di atribut style",
              "semua sama baiknya",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<head>
  <!-- External -->
  <link rel="stylesheet" href="style.css">
  <!-- Internal -->
  <style>
    h1 { color: purple; }
  </style>
</head>
<body>
  <h1>Judul</h1>
  <!-- Inline -->
  <p style="color: red;">Prioritas tertinggi</p>
</body>
</html>`,
      },
      {
        id: "css-comments",
        title: "CSS Comments",
        html: `
          <p>Komentar CSS ditulis dengan
          <code>/* di antara ini */</code> dan <b>tidak dieksekusi</b>.
          Gunakan untuk menjelaskan bagian kode atau menonaktifkan
          sementara sebagian aturan.</p>
          <p>Komentar boleh mencakup banyak baris dan sangat membantu
          saat belajar maupun bekerja dalam tim.</p>
        `,
        quiz: [
          {
            q: "Komentar CSS ditulis dengan tanda...",
            options: ["/* ... */", "<!-- ... -->", "// ...", "# ..."],
            answer: 0,
          },
        ],
        code: `<style>
  /* Warna utama halaman */
  body {
    background-color: lightgray;
    /* color: white; <- dinonaktifkan */
  }

  /* -------------------------
     Bagian header
     ------------------------- */
  h1 { color: darkslategray; }
</style>`,
      },
      {
        id: "css-colors",
        title: "CSS Colors",
        html: `
          <p>Warna CSS bisa ditulis dalam beberapa format:</p>
          <ul>
            <li><b>Nama warna:</b> <code>red</code>, <code>tomato</code></li>
            <li><b>HEX:</b> <code>#ff6347</code></li>
            <li><b>RGB / RGBA:</b> <code>rgb(255,99,71)</code>,
            <code>rgba(0,0,0,0.5)</code> (a = transparansi)</li>
            <li><b>HSL:</b> <code>hsl(9,100%,64%)</code></li>
          </ul>
          <p>Property <code>color</code> untuk teks,
          <code>background-color</code> untuk latar.</p>
        `,
        quiz: [
          {
            q: "Huruf 'a' pada RGBA singkatan dari...",
            options: ["alpha (transparansi)", "auto", "angle", "animate"],
            answer: 0,
          },
        ],
        code: `<style>
  h1 { color: white; background-color: tomato; }
  p  { color: #1e3a8a; background-color: rgba(255,255,0,0.4); }
</style>
<h1>Tomato</h1>
<p>Biru navy di latar kuning transparan.</p>`,
      },
      {
        id: "css-backgrounds",
        title: "CSS Backgrounds",
        html: `
          <p>Property <code>background</code> mengatur latar elemen.
          Beberapa variasinya:</p>
          <ul>
            <li><code>background-color</code> — warna solid</li>
            <li><code>background-image</code> — gambar latar</li>
            <li><code>background-repeat</code> — pengulangan gambar</li>
            <li><code>background-position</code> — posisi gambar</li>
            <li><code>background-size</code> — ukuran gambar</li>
          </ul>
        `,
        quiz: [
          {
            q: "Properti untuk memakai GAMBAR sebagai latar elemen?",
            options: ["background-image", "background-repeat", "border-image", "color"],
            answer: 0,
          },
        ],
        code: `<style>
  .hero {
    height: 180px;
    background-image: url("https://www.w3schools.com/w3images/lights600.jpg");
    background-size: cover;
    background-position: center;
  }
  body {
    background-color: #f5f5f5;
  }
</style>
<h1>Halaman dengan latar gambar</h1>
<div class="hero"></div>`,
      },
      {
        id: "css-borders",
        title: "CSS Borders",
        html: `
          <p>Property <code>border</code> menambahkan <b>garis tepi</b>.
          Biasanya ditulis tiga bagian: <code>lebar gaya warna</code>.</p>
          <ul>
            <li><code>border: 2px solid red;</code> — garis penuh</li>
            <li><code>border-style</code> — <code>dashed</code>,
            <code>dotted</code>, <code>double</code>, dsb.</li>
            <li>Sisi terpisah: <code>border-left</code>,
            <code>border-top</code>...</li>
          </ul>
        `,
        quiz: [
          {
            q: "Penulisan singkat border berisi 3 bagian, yaitu...",
            options: [
              "lebar, gaya, warna",
              "warna, nama, ukuran",
              "gaya, bayangan, ketebalan",
              "lebar, tinggi, warna",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  div {
    margin: 8px;
    padding: 10px;
    width: 200px;
  }
  .a { border: 3px solid red; }
  .b { border: 2px dashed blue; }
  .c { border-left: 6px solid green; }
</style>
<div class="a">Solid</div>
<div class="b">Dashed</div>
<div class="c">Hanya kiri</div>`,
      },
      {
        id: "css-margins",
        title: "CSS Margins",
        html: `
          <p><code>margin</code> adalah <b>jarak di luar</b> elemen
          (antar elemen). Sedangkan <code>padding</code> adalah
          <b>jarak di dalam</b> (antara isi dan tepi elemen).</p>
          <p>Bisa ditulis lengkap: <code>margin: atas kanan bawah kiri;</code>
          atau per sisi: <code>margin-top</code>, <code>margin-left</code>,
          dsb.</p>
        `,
        quiz: [
          {
            q: "margin: 15px 30px artinya...",
            options: [
              "atas-bawah 15px, kiri-kanan 30px",
              "kiri-kanan 15px, atas-bawah 30px",
              "hanya kiri 15px, kanan 30px",
              "penulisan tidak valid",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .a { background: powderblue; margin: 15px; padding: 10px; }
  .b { background: lightcoral; margin: 30px 60px; padding: 10px; }
</style>
<div class="a">Margin 15px semua sisi</div>
<div class="b">Margin 30px atas-bawah, 60px kiri-kanan</div>`,
      },
      {
        id: "css-padding",
        title: "CSS Padding",
        html: `
          <p><code>padding</code> membuat <b>ruang napas di dalam</b>
          elemen — antara isi dan batas elemen. Semakin besar padding,
          semakin luas area sekitar teks.</p>
          <p>Sama seperti margin, bisa ditulis singkat
          (<code>padding: 10px 20px;</code>) atau per sisi
          (<code>padding-left</code>).</p>
        `,
        quiz: [
          {
            q: "Semakin besar padding sebuah elemen...",
            options: [
              "semakin luas area sekitar isinya",
              "elemen semakin mengecil",
              "hanya teks yang jadi tebal",
              "elemen jadi transparan",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  div {
    background: lightyellow;
    border: 1px solid gold;
    margin: 8px;
  }
  .kecil { padding: 5px; }
  .besar { padding: 30px; }
</style>
<div class="kecil">Padding kecil</div>
<div class="besar">Padding besar</div>`,
      },
      {
        id: "css-box-model",
        title: "CSS Box Model",
        html: `
          <p>Setiap elemen HTML adalah <b>kotak</b>. Konsep ini disebut
          <b>box model</b> dan terdiri dari (dari dalam ke luar):</p>
          <ul>
            <li><b>content</b> — isi (teks/gambar)</li>
            <li><b>padding</b> — ruang dalam di sekitar konten</li>
            <li><b>border</b> — garis tepi</li>
            <li><b>margin</b> — ruang luar antarelemen</li>
          </ul>
          <p>Memahami box model adalah kunci menguasai tata letak CSS.</p>
        `,
        quiz: [
          {
            q: "Urutan box model dari dalam ke luar yang benar?",
            options: [
              "content → padding → border → margin",
              "margin → border → padding → content",
              "padding → content → margin → border",
              "border → margin → content → padding",
            ],
            answer: 0,
          },
          {
            q: "Padding adalah jarak...",
            options: [
              "di luar elemen antar elemen",
              "di dalam elemen antara isi dan tepi",
              "antarbaris teks",
              "antarkarakter",
            ],
            answer: 1,
          },
        ],
        code: `<style>
  .kotak {
    width: 240px;
    padding: 20px;    /* ruang dalam */
    border: 5px solid teal;
    margin: 20px;     /* ruang luar  */
    background: #e0f2f1;
  }
</style>
<div class="kotak">
  content => padding => border => margin
</div>`,
      },
      {
        id: "css-text",
        title: "CSS Text",
        html: `
          <p>CSS sangat berkuasa mengatur tampilan teks:</p>
          <ul>
            <li><code>text-align</code> — perataan (kiri, tengah, kanan)</li>
            <li><code>text-decoration</code> — garis bawah / coret</li>
            <li><code>text-transform</code> — kapital / kecil</li>
            <li><code>letter-spacing</code> — jarak antarahuruf</li>
            <li><code>line-height</code> — jarak antarbaris</li>
          </ul>
        `,
        quiz: [
          {
            q: "Properti untuk meratakan teks (kiri/tengah/kanan)?",
            options: ["text-align", "text-transform", "letter-spacing", "font-weight"],
            answer: 0,
          },
        ],
        code: `<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  p {
    text-align: justify;
    line-height: 1.8;
  }
  a { text-decoration: none; }
</style>
<h1>Judul Rapat</h1>
<p>Paragraf dengan spasi baris lega dan rata kanan-kiri.</p>
<a href="#">Tautan tanpa garis bawah</a>`,
      },
      {
        id: "css-fonts",
        title: "CSS Fonts",
        html: `
          <p>Property <code>font-family</code> menentukan jenis huruf.
          Beri <b>beberapa nama cadangan</b> agar browser memilih yang
          tersedia: <code>font-family: Arial, sans-serif;</code></p>
          <p>Ukuran diatur <code>font-size</code>, ketebalan
          <code>font-weight</code>, dan gaya <code>font-style</code>.</p>
        `,
        quiz: [
          {
            q: "font-family: Arial, sans-serif; artinya browser...",
            options: [
              "pakai Arial, lalu sans-serif jika Arial tak tersedia",
              "menampilkan dua huruf sekaligus",
              "selalu memakai sans-serif",
              "error karena nilainya dua",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  body { font-family: Arial, sans-serif; }
  h1   { font-size: 32px; font-weight: bold; }
  .miring { font-style: italic; font-weight: normal; }
</style>
<h1>Heading Arial</h1>
<p class="miring">Teks miring normal.</p>`,
      },
      {
        id: "css-display",
        title: "CSS Display",
        html: `
          <p>Property <code>display</code> mengubah perilaku tampilan
          elemen. Nilai penting yang sering dipakai:</p>
          <ul>
            <li><code>none</code> — elemen disembunyikan (ruang juga hilang)</li>
            <li><code>block</code> — baris penuh</li>
            <li><code>inline</code> — searah baris, seukuran isi</li>
            <li><code>inline-block</code> — seperti inline tapi bisa diatur
            lebar/tinggi & margin</li>
            <li><code>flex</code> / <code>grid</code> — layout modern</li>
          </ul>
        `,
        quiz: [
          {
            q: "Agar elemen hilang total (tanpa ruang sisa), gunakan...",
            options: ["display: none", "display: hidden", "display: invisible", "display: off"],
            answer: 0,
          },
          {
            q: "display: flex berguna untuk...",
            options: [
              "menyembunyikan elemen",
              "layout satu dimensi (baris/kolom)",
              "membuat tabel data",
              "memutar elemen",
            ],
            answer: 1,
          },
        ],
        code: `<style>
  span    { background: lightblue; padding: 4px; }
  .block  { display: block; margin: 4px 0; }
  .inline-block { display: inline-block; width: 120px; }
  .hidden { display: none; }
</style>
<span>inline biasa</span>
<span class="block">diubah jadi block</span>
<span class="inline-block">inline-block</span>
<span class="hidden">tidak terlihat</span>`,
      },
      {
        id: "css-position",
        title: "CSS Position",
        html: `
          <p>Property <code>position</code> mengatur posisi elemen:</p>
          <ul>
            <li><code>static</code> — default, mengalir normal</li>
            <li><code>relative</code> — bergeser dari posisi aslinya</li>
            <li><code>absolute</code> — posisi relatif ke induk ber-position</li>
            <li><code>fixed</code> — menempel di layar saat scroll</li>
            <li><code>sticky</code> — menempel setelah di-scroll melewatinya</li>
          </ul>
          <p>Setelah memberi position, kamu bisa pakai
          <code>top</code>, <code>left</code>, <code>right</code>,
          <code>bottom</code>.</p>
        `,
        quiz: [
          {
            q: "Elemen yang menempel pada layar saat di-scroll adalah...",
            options: ["fixed", "absolute", "relative", "static"],
            answer: 0,
          },
        ],
        code: `<style>
  .fixed { position: fixed; top: 0; left: 0;
           width: 100%; background: navy; color: white; }
  .rel   { position: relative; left: 30px; }
  .abs   { position: absolute; top: 10px; right: 10px; }
  .kartu { position: relative; padding: 20px;
           background: #eee; margin-top: 60px; }
</style>
<div class="fixed">Navbar menempel</div>
<div class="kartu">
  <span class="abs">Tanda absolute</span>
  <p class="rel">Bergerak 30px dari kiri</p>
</div>`,
      },
      {
        id: "css-overflow",
        title: "CSS Overflow",
        html: `
          <p>Jika isi elemen <b>lebih besar dari kotaknya</b>, properti
          <code>overflow</code> menentukan apa yang terjadi:</p>
          <ul>
            <li><code>visible</code> — meluber keluar (default)</li>
            <li><code>hidden</code> — dipotong, tidak tampil</li>
            <li><code>scroll</code> — muncul scrollbar</li>
            <li><code>auto</code> — scrollbar hanya jika perlu</li>
          </ul>
        `,
        quiz: [
          {
            q: "Supaya isi yang meluber tampil dengan scrollbar, gunakan...",
            options: ["overflow: auto", "overflow: hidden", "display: none", "position: relative"],
            answer: 0,
          },
        ],
        code: `<style>
  .box {
    width: 180px;
    height: 90px;
    border: 1px solid gray;
    overflow: auto;
  }
</style>
<div class="box">
  Isi yang panjang sekali sampai melebihi tinggi kotak,
  maka muncul scrollbar otomatis agar tetap bisa dibaca semua.
</div>`,
      },
      {
        id: "css-pseudo-classes",
        title: "CSS Pseudo-classes",
        html: `
          <p>Pseudo-class menargetkan elemen dalam <b>kondisi tertentu</b>
          dan ditulis dengan titik dua satu, misal <code>:hover</code>.</p>
          <ul>
            <li><code>:hover</code> — kursor di atasnya</li>
            <li><code>:active</code> — sedang diklik</li>
            <li><code>:focus</code> — input sedang aktif</li>
            <li><code>:first-child</code> — anak pertama</li>
            <li><code>:nth-child(n)</code> — urutan ke-n</li>
          </ul>
        `,
        quiz: [
          {
            q: "Pseudo-class yang aktif saat kursor di atas elemen?",
            options: [":hover", ":active", ":focus", ":first-child"],
            answer: 0,
          },
        ],
        code: `<style>
  a    { color: gray; }
  a:hover  { color: darkblue; }
  a:active { color: red; }
  input:focus { border: 2px solid green; outline: none; }
  li:first-child { font-weight: bold; }
</style>
<a href="#">Hover aku</a><br>
<input type="text" placeholder="klik aku">
<ul><li>Pertama</li><li>Kedua</li></ul>`,
      },
    ],
  },
  {
    lang: "CSS",
    label: "CSS Advanced",
    lessons: [
      {
        id: "css-rounded-corners",
        title: "CSS Rounded Corners",
        html: `
          <p>Property <code>border-radius</code> melengkungkan sudut
          elemen. Semakin besar nilai, semakin bulat sudutnya.</p>
          <p>Bonus: dengan nilai <code>50%</code>, kotak bisa berubah
          menjadi <b>lingkaran</b> penuh. Ini geral mengurangi ketajaman
          tampilan agar lebih ramah & modern.</p>
        `,
        quiz: [
          {
            q: "Nilai border-radius berapa yang membuat kotak jadi lingkaran?",
            options: ["50%", "10px", "0", "1px"],
            answer: 0,
          },
        ],
        code: `<style>
  div { width: 120px; height: 120px; background: #5b45d6;
        margin: 10px; display: inline-block; }
  .r10 { border-radius: 10px; }
  .r30 { border-radius: 30px; }
  .bulat { border-radius: 50%; }
</style>
<div class="r10"></div>
<div class="r30"></div>
<div class="bulat"></div>`,
      },
      {
        id: "css-border-images",
        title: "CSS Border Images",
        html: `
          <p>Property <code>border-image</code> memakai <b>gambar sebagai
          garis tepi</b> — bisa untuk bingkai hiasan yang membentang
          mengikuti ukuran elemen.</p>
          <p>Cara kerjanya: gambar dipotong sesuai <code>slice</code>,
          lalu diterapkan pada posisi bingkai. Karena bergantung pada
          gambar, untuk <i>border-image</i> kita perlu file gambar
          tertentu.</p>
        `,
        quiz: [
          {
            q: "border-image berasal dari...",
            options: [
              "gambar yang dipakai sebagai garis tepi",
              "warna solid bawaan CSS",
              "gradien linier",
              "bayangan elemen",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .bingkai {
    width: 220px;
    padding: 20px;
    border: 15px solid transparent;
    border-image: url("https://www.w3schools.com/css/border.png")
                  30 round;
  }
</style>
<div class="bingkai">
  Teks di dalam bingkai bergambar.
</div>`,
      },
      {
        id: "css-gradients",
        title: "CSS Gradients",
        html: `
          <p>Gradien adalah <b>perpaduan warna yang berubah secara
          bertahap</b>. Bisa menambilkan kesan premium tanpa gambar.</p>
          <ul>
            <li><code>linear-gradient(arah, warna1, warna2)</code> — memanjang</li>
            <li><code>radial-gradient(...)</code> — melebar dari titik pusat</li>
            <li><code>conic-gradient(...)</code> — melingkar</li>
          </ul>
          <p>Warna pertama bisa diberi persen untuk posisinya.</p>
        `,
        quiz: [
          {
            q: "Fungsi CSS untuk gradien yang memanjang lurus?",
            options: ["linear-gradient()", "radial-gradient()", "conic-gradient()", "smooth-gradient()"],
            answer: 0,
          },
        ],
        code: `<style>
  .satu {
    height: 100px;
    background: linear-gradient(90deg, #8d7ef2, #3f6ee8);
  }
  .dua {
    height: 100px;
    background: linear-gradient(to bottom right, tomato, gold);
  }
  .tiga {
    height: 100px;
    background: radial-gradient(circle, white, steelblue);
  }
</style>
<div class="satu"></div><br>
<div class="dua"></div><br>
<div class="tiga"></div>`,
      },
      {
        id: "css-transitions",
        title: "CSS Transitions",
        html: `
          <p><code>transition</code> membuat perubahan gaya berjalan
          <b>secara halus</b> dalam waktu tertentu, bukan melompat
          instan.</p>
          <p>Contoh: saat hover, warna latar berubah perlahan.
          Tulis property yang ingin di-transisi, durasi, dan kurva
          waktunya: <code>transition: background 0.3s ease;</code>.</p>
        `,
        quiz: [
          {
            q: "transition berguna agar perubahan properti...",
            options: [
              "berjalan halus dalam durasi tertentu",
              "langsung melompat instan",
              "hanya terjadi saat klik",
              "hanya untuk warna saja",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .tombol {
    background: #5b45d6;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.4s ease, transform 0.4s ease;
  }
  .tombol:hover {
    background: #8d7ef2;
    transform: scale(1.05);
  }
</style>
<button class="tombol">Arahkan kursor</button>`,
      },
      {
        id: "css-animations",
        title: "CSS Animations",
        html: `
          <p>Animasi CSS membuat elemen bergerak <b>otomatis tanpa
          interaksi</b>. Ada dua bagian:</p>
          <ul>
            <li>Definisi keyframes — alur perubahan dengan
            <code>from</code>/<code>to</code> atau persen</li>
            <li>Pemakaian — <code>animation: nama durasi cara;</code></li>
          </ul>
          <p>Pengaturan pendukung: <code>animation-iteration-count</code>
          (jumlah ulangan) dan <code>animation-delay</code>.</p>
        `,
        quiz: [
          {
            q: "Alur animasi CSS didefinisikan di dalam...",
            options: ["@keyframes", "@media", "@import", "@font-face"],
            answer: 0,
          },
        ],
        code: `<style>
  @keyframes melompat {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-30px); }
    100% { transform: translateY(0); }
  }
  .bola {
    width: 60px; height: 60px;
    background: #8d7ef2;
    border-radius: 50%;
    animation: melompat 1.5s infinite;
  }
</style>
<div class="bola"></div>`,
      },
      {
        id: "css-transforms",
        title: "CSS Transforms",
        html: `
          <p><code>transform</code> <b>memutar, memindahkan, atau
          mengubah ukuran</b> elemen dalam 2D maupun 3D:</p>
          <ul>
            <li><code>translate(x, y)</code> — geser</li>
            <li><code>rotate(deg)</code> — putar</li>
            <li><code>scale(faktor)</code> — perbesar/kecil</li>
            <li><code>skew(deg)</code> — miringkan</li>
          </ul>
          <p>Transform tidak mengganggu posisi elemen lain di halaman.</p>
        `,
        quiz: [
          {
            q: "Fungsi transform untuk MEMUTAR elemen?",
            options: ["rotate(deg)", "translate(x, y)", "scale(faktor)", "skew(deg)"],
            answer: 0,
          },
        ],
        code: `<style>
  .k { width: 100px; height: 60px; background: lightblue;
       margin: 20px; display: inline-block; }
  .geser { transform: translate(20px, 10px); }
  .putar { transform: rotate(15deg); }
  .besar { transform: scale(1.2); }
</style>
<div class="k geser">geser</div>
<div class="k putar">putar</div>
<div class="k besar">besar</div>`,
      },
    ],
  },
  {
    lang: "CSS",
    label: "CSS Flexbox",
    lessons: [
      {
        id: "flexbox-intro",
        title: "Flexbox Intro",
        html: `
          <p><b>Flexbox</b> adalah cara modern mengatur tata letak
          <b>satu dimensi</b> (satu baris atau satu kolom) dengan
          fleksibel. Aktifkan cukup dengan
          <code>display: flex;</code> pada elemen induk.</p>
          <p>Anak-anaknya otomatis tersusun rapi dan bisa dipusatkan
          dengan sangat mudah — hal yang sulit di CSS lama.</p>
        `,
        quiz: [
          {
            q: "Cara mengaktifkan flexbox pada elemen induk?",
            options: ["display: flex;", "flex: 1;", "display: block;", "align-items: center;"],
            answer: 0,
          },
        ],
        code: `<style>
  .row {
    display: flex;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  .row div {
    background: #5b45d6;
    color: white;
    padding: 20px;
    border-radius: 6px;
  }
</style>
<div class="row">
  <div>Satu</div>
  <div>Dua</div>
  <div>Tiga</div>
</div>`,
      },
      {
        id: "flexbox-container",
        title: "Flex Container",
        html: `
          <p>Elemen yang punya <code>display: flex</code> disebut
          <b>flex container</b>. Properti pentingnya:</p>
          <ul>
            <li><code>flex-direction</code> — <code>row</code> (baris)
            atau <code>column</code> (kolom)</li>
            <li><code>justify-content</code> — perataan pada sumbu utama</li>
            <li><code>align-items</code> — perataan pada sumbu silang</li>
            <li><code>flex-wrap</code> — boleh/tidaknya turun baris baru</li>
          </ul>
          <p>Ini "alat" utama tombol dan navbar dipusatkan.</p>
        `,
        quiz: [
          {
            q: "Properti yang mengatur perataan pada sumbu utama flexbox?",
            options: ["align-items", "justify-content", "flex-wrap", "align-content"],
            answer: 1,
          },
          {
            q: "flex-direction: column membuat item disusun...",
            options: ["kiri ke kanan", "atas ke bawah", "diagonal", "acak"],
            answer: 1,
          },
        ],
        code: `<style>
  .container {
    display: flex;
    justify-content: space-between; /* mentebar rata */
    align-items: center;
    background: #eef;
    padding: 12px;
  }
</style>
<div class="container">
  <span>Kiri</span>
  <span>Tengah</span>
  <span>Kanan</span>
</div>`,
      },
      {
        id: "flexbox-items",
        title: "Flex Items",
        html: `
          <p>Anak dari flex container disebut <b>flex item</b>. Properti
          yang sering dipakai pada item:</p>
          <ul>
            <li><code>flex</code> — gabungan pengaturan tumbuh-kecil
            (<code>flex: 1</code> membagi ruang rata)</li>
            <li><code>align-self</code> — posisi khusus satu item</li>
            <li><code>order</code> — urutan tampil tanpa ubah HTML</li>
          </ul>
          <p>Contoh klasik: tiga kolom yang membagi lebar sama besar.</p>
        `,
        quiz: [
          {
            q: "Agar tiga item membagi ruang SAMA RATA, properti item yang dipakai?",
            options: ["flex: 1", "flex: 0", "margin: auto", "width: 33px"],
            answer: 0,
          },
        ],
        code: `<style>
  .row { display: flex; background: #f5f5f5; }
  .item { padding: 20px; color: white; }
  .a { background: #4c6ef5; flex: 1; }
  .b { background: #12b886; flex: 2; }  /* dua kali lebih lebar */
  .c { background: #fa5252; flex: 1; }
</style>
<div class="row">
  <div class="item a">1</div>
  <div class="item b">2</div>
  <div class="item c">3</div>
</div>`,
      },
      {
        id: "flexbox-responsive",
        title: "Flex Responsive",
        html: `
          <p>Flexbox sangat membantu layout <b>responsif</b>: dengan
          <code>flex-wrap: wrap</code> + <code>flex-basis</code>,
          item otomatis turun baris saat layar mengecil.</p>
          <p>Sering dipadukan dengan <i>media query</i> untuk mengubah
          arah <code>flex-direction</code> dari baris menjadi kolom di
          layar HP.</p>
        `,
        quiz: [
          {
            q: "Agar item flex turun baris saat layar sempit, tambahkan...",
            options: ["flex-wrap: wrap", "flex-wrap: nowrap", "display: none", "position: sticky"],
            answer: 0,
          },
        ],
        code: `<style>
  .galeri {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .galeri div {
    flex: 1 1 200px; /* tumbuh: 1, kecil:1, basis minimal 200px */
    height: 120px;
    background: #8d7ef2;
    color: white;
    padding: 10px;
    border-radius: 6px;
  }
</style>
<div class="galeri">
  <div>Kartu 1</div>
  <div>Kartu 2</div>
  <div>Kartu 3</div>
  <div>Kartu 4</div>
</div>`,
      },
    ],
  },
  {
    lang: "CSS",
    label: "CSS Grid",
    lessons: [
      {
        id: "grid-intro",
        title: "Grid Intro",
        html: `
          <p><b>Grid</b> adalah layout <b>dua dimensi</b> (baris DAN
          kolom sekaligus) — lebih kuat dari flexbox untuk membuat
          tampilan hal-hal yang terstruktur seperti halaman majalah.</p>
          <p>Aktifkan dengan <code>display: grid;</code> lalu definisikan
          kolom lewat <code>grid-template-columns</code>.</p>
        `,
        quiz: [
          {
            q: "Grid adalah layout...",
            options: [
              "dua dimensi (baris DAN kolom sekaligus)",
              "satu dimensi saja",
              "khusus untuk gambar",
              "khusus untuk teks",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  .grid div { background: #5b45d6; color: white;
              padding: 20px; border-radius: 6px; }
</style>
<div class="grid">
  <div>1</div><div>2</div><div>3</div>
  <div>4</div><div>5</div><div>6</div>
</div>`,
      },
      {
        id: "grid-container",
        title: "Grid Container",
        html: `
          <p>Elemen dengan <code>display: grid</code> adalah
          <b>grid container</b>. Properti pentingnya:</p>
          <ul>
            <li><code>grid-template-columns</code> — lebar tiap kolom</li>
            <li><code>grid-template-rows</code> — tinggi tiap baris</li>
            <li><code>gap</code> — jarak antar sel</li>
            <li><code>justify-items</code> / <code>align-items</code> —
            perataan isi sel</li>
          </ul>
          <p>Unit <code>fr</code> membagi ruang secara proporsional.</p>
        `,
        quiz: [
          {
            q: "grid-template-columns: 1fr 1fr 1fr menghasilkan...",
            options: [
              "3 kolom dengan lebar sama besar",
              "3 kolom dengan lebar acak",
              "1 kolom yang fleksibel",
              "3 baris baru",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr; /* kolom kiri 2x kanan */
    grid-template-rows: 80px 80px;
    gap: 10px;
    background: #f0f0f0;
  }
  .grid div { background: tomato; color: white;
              padding: 15px; border-radius: 6px; }
</style>
<div class="grid">
  <div>Besar</div><div>Kecil</div>
  <div>Besar</div><div>Kecil</div>
</div>`,
      },
      {
        id: "grid-items",
        title: "Grid Items",
        html: `
          <p>Setiap anak grid bisa diberi <b>posisi khusus</b> memakai
          baris/kolom melalui garis grid (dimulai dari 1).</p>
          <ul>
            <li><code>grid-column</code> — bentangan kolom
            (misal <code>1 / 3</code> = dari garis 1 ke 3)</li>
            <li><code>grid-row</code> — bentangan baris</li>
            <li><code>grid-area</code> — kombinasi keduanya</li>
          </ul>
          <p>Ini dipakai untuk membuat header/artikel/sidebar/footer.</p>
        `,
        quiz: [
          {
            q: "grid-column: 1 / 3 berarti item...",
            options: [
              "membentang dari garis grid 1 ke 3",
              "berada tepat di kolom 3",
              "hanya di baris 1",
              "tidak akan tampil",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 10px;
    color: white;
  }
  .layout div { padding: 20px; border-radius: 6px; }
  .header { grid-column: 1 / 3; background: navy; }
  .side   { background: steelblue; }
  .main   { background: #5b45d6; }
</style>
<div class="layout">
  <div class="header">Header</div>
  <div class="side">Sidebar</div>
  <div class="main">Konten</div>
</div>`,
      },
      {
        id: "grid-12-column",
        title: "Grid 12-column Layout",
        html: `
          <p>Sistem <b>12 kolom</b> adalah pola paling populer di
          framework CSS. Halaman dibagi jadi 12 bagian lebar, lalu item
          mengambil sejumlah kolom — misal <code>span 6</code> = setengah
          halaman.</p>
          <p>Di Grid asli, kita menuliskannya langsung dengan
          <code>grid-template-columns: repeat(12, 1fr);</code>.</p>
        `,
        quiz: [
          {
            q: "col-6 pada sistem 12 kolom berarti item memakai...",
            options: [
              "setengah lebar (6 dari 12 kolom)",
              "6 baris",
              "lebar 6 pixel",
              "seperempat lebar",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 8px;
    color: white;
  }
  .row div {
    padding: 16px;
    background: #4c6ef5;
    border-radius: 4px;
    text-align: center;
  }
  .col-6 { grid-column: span 6; }
  .col-4 { grid-column: span 4; }
</style>
<div class="row">
  <div class="col-6">6 kolom</div>
  <div class="col-6">6 kolom</div>
  <div class="col-4">4</div>
  <div class="col-4">4</div>
  <div class="col-4">4</div>
</div>`,
      },
    ],
  },
  {
    lang: "CSS",
    label: "CSS Responsive",
    lessons: [
      {
        id: "rwd-intro",
        title: "RWD Intro",
        html: `
          <p><b>Responsive Web Design (RWD)</b> membuat website tetap
          nyaman dibuka di semua ukuran layar: HP, tablet, sampai monitor
          besar.</p>
          <p>Prinsipnya: tata letak bersifat <b>fleksibel</b> (pakai %,
          fr, atau rem), gambar menyesuaikan, dan aturan tertentu hanya
          berlaku di ukuran layar tertentu.</p>
        `,
        quiz: [
          {
            q: "RWD (Responsive Web Design) bertujuan agar website...",
            options: [
              "nyaman dibuka di semua ukuran layar",
              "hanya tampil di komputer",
              "berisi banyak gambar",
              "tidak memakai CSS",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  body { margin: 0; font-family: Arial; }
  .kepala { background: #5b45d6; color: white;
            padding: 20px; text-align: center; }
  .isi   { padding: 16px; }
</style>
<div class="kepala">Header</div>
<div class="isi">
  <p>Konten halaman.</p>
</div>`,
      },
      {
        id: "rwd-viewport",
        title: "RWD Viewport",
        html: `
          <p><b>Viewport</b> adalah area layar yang terlihat. Tanpa tag
          meta viewport, browser HP akan mengecilkan seluruh halaman agar
          muat — membuat teks sulit dibaca.</p>
          <p>Cukup tambahkan satu baris di <code>&lt;head&gt;</code>:
          <code>&lt;meta name="viewport" content="width=device-width,
          initial-scale=1.0"&gt;</code> agar halaman mengikuti lebar layar.</p>
        `,
        quiz: [
          {
            q: "Tanpa tag meta viewport, browser HP akan...",
            options: [
              "mengecilkan halaman agar muat (teks sulit dibaca)",
              "menampilkan halaman seperti aslinya",
              "menolak membuka halaman",
              "membuat halaman offline",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>Halaman Responsif</title>
</head>
<body>
  <h1>Tampil rapi di HP</h1>
  <p>Tag viewport ini kunci dari sema responsif.</p>
</body>
</html>`,
      },
      {
        id: "rwd-grid-view",
        title: "RWD Grid View",
        html: `
          <p>Layout responsif sering dibangun dengan <b>grid view</b>:
          halaman dibagi menjadi kolom yang jumlahnya berubah sesuai
          lebar layar.</p>
          <p>Dengan <code>auto-fit</code> dan <code>minmax()</code>,
          grid bisa <i>otomatis</i> menambah/merapikan kolom tanpa media
          query sama sekali.</p>
        `,
        quiz: [
          {
            q: "repeat(auto-fit, minmax(150px, 1fr)) membuat jumlah kolom...",
            options: [
              "menyesuaikan lebar layar secara otomatis",
              "selalu berjumlah 3",
              "selalu berjumlah 1",
              "harus diubah manual tiap layar",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }
  .grid div {
    background: #8d7ef2; color: white;
    padding: 40px; text-align: center;
    border-radius: 6px;
  }
</style>
<div class="grid">
  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
</div>
<p>Ubah lebar jendela — jumlah kolom menyesuaikan sendiri.</p>`,
      },
      {
        id: "rwd-media-queries",
        title: "RWD Media Queries",
        html: `
          <p><b>Media query</b> mengaktifkan aturan CSS hanya pada kondisi
          tertentu, biasanya lebar layar.</p>
          <p>Contoh: <code>@media (max-width: 600px) { ... }</code>
          berlaku hanya saat layar ≤ 600px. Ini trik standar untuk
          menata ulang layout di HP (misal sidebar jadi kolom).</p>
        `,
        quiz: [
          {
            q: "@media (max-width: 600px) berlaku saat layar berukuran...",
            options: ["lebih dari 600px", "600px atau kurang", "persis 600px saja", "semua ukuran"],
            answer: 1,
          },
          {
            q: "Tag apa yang wajib agar halaman tampil benar di layar HP?",
            options: [
              '<meta name="viewport" ...>',
              '<meta charset="UTF-8">',
              "<script mobile>",
              "<link responsive>",
            ],
            answer: 0,
          },
        ],
        code: `<style>
  .konten {
    display: flex;
    gap: 10px;
  }
  .konten div {
    flex: 1; background: #5b45d6; color: white; padding: 20px;
  }
  /* Aturan khusus layar kecil */
  @media (max-width: 600px) {
    .konten { flex-direction: column; }
  }
</style>
<div class="konten">
  <div>Kolom A</div>
  <div>Kolom B</div>
</div>
<p>Coba perkecil layar — kolom jadi bertumpuk.</p>`,
      },
    ],
  },
  {
    lang: "CSS",
    label: "CSS SASS",
    lessons: [
      { id: "css-sass", title: "CSS SASS", empty: true },
    ],
  },
  {
    lang: "CSS",
    label: "CSS Examples",
    lessons: [
      { id: "css-examples", title: "CSS Examples", empty: true },
    ],
  },
  {
    lang: "CSS",
    label: "CSS References",
    lessons: [
      { id: "css-references", title: "CSS References", empty: true },
    ],
  },

/* __JS__ */

/* ============================================================
   BAGIAN 3 — JavaScript
   ============================================================ */
  {
    lang: "JavaScript",
    label: "JS Tutorial",
    lessons: [
      {
        id: "js-home",
        title: "JS Home",
        html: `
          <p><b>JavaScript</b> (JS) adalah bahasa yang membuat halaman
          <b>hidup</b>: warnanya berubah, isinya berganti, tombol bereaksi,
          dan data bisa diproses — semuanya di sisi <b>browser</b>.</p>
          <p>JS tertulis di dalam tag <code>&lt;script&gt;</code> dan
          berjalan otomatis saat halaman dimuat, atau saat dipicu oleh
          kejadian seperti klik.</p>
        `,
        quiz: [
          {
            q: "Di dalam tag apa kode JavaScript ditulis?",
            options: ["<script>", "<style>", "<js>", "<code>"],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<body>
  <p id="demo">Teks lama.</p>
  <button onclick="ganti()">Klik Saya</button>

  <script>
    function ganti() {
      document.getElementById("demo").innerHTML = "Halo, JS!";
    }
  </script>
</body>
</html>`,
      },
      {
        id: "js-introduction",
        title: "JS Introduction",
        html: `
          <p>Dengan JavaScript kamu bisa mengerjakan banyak hal:</p>
          <ul>
            <li>Mengganti isi elemen HTML</li>
            <li>Mengubah warna dan gaya</li>
            <li>Menampilkan / menyembunyikan elemen</li>
            <li>Menanggapi interaksi pengguna (klik, ketik, scroll)</li>
            <li>Menyimpan data lewat localStorage</li>
          </ul>
          <p>Intinya: HTML = struktur, CSS = tampilan, JS = perilaku.</p>
        `,
        quiz: [
          {
            q: "Di sisi mana JavaScript pada platform ini biasanya berjalan?",
            options: [
              "browser (sisi klien)",
              "server database",
              "router jaringan",
              "sistem operasi server",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<body>
  <h1>Mengubah HTML</h1>
  <p id="demo">Aku paragraf.</p>
  <button onclick="ubah()">Ubah</button>

  <script>
    function ubah() {
      document.getElementById("demo").innerHTML = "Teks berubah!";
    }
  </script>
</body>
</html>`,
      },
      {
        id: "js-syntax",
        title: "JS Syntax",
        html: `
          <p>Dasar penulisan JavaScript:</p>
          <ul>
            <li><b>Statement</b> — satu perintah, diakhiri titik koma</li>
            <li><b>Komentar</b> — <code>//</code> satu baris,
            <code>/* */</code> banyak baris</li>
            <li><b>Kotak nilai</b> — <code>("teks")</code> untuk string,
            <code>(42)</code> untuk angka, <code>(true)</code> boolean</li>
            <li><b>Fungsi</b> — blok kode yang bisa dipanggil</li>
          </ul>
        `,
        quiz: [
          {
            q: "Cara menulis komentar satu baris di JavaScript?",
            options: ["// komentar", "# komentar", "<!-- komentar -->", "/* komentar */"],
            answer: 0,
          },
          {
            q: "Tipe nilai (42) disebut...",
            options: ["string", "number", "boolean", "object"],
            answer: 1,
          },
        ],
        code: `<script>
  // komentar satu baris
  /* komentar
     banyak baris */

  let nama = "Andi";   // string
  let umur = 17;       // number
  let aktif = true;    // boolean

  alert("Halo " + nama);
</script>`,
      },
      {
        id: "js-output",
        title: "JS Output",
        html: `
          <p>Ada beberapa cara JavaScript menampilkan data:</p>
          <ul>
            <li><code>document.getElementById(...).innerHTML</code> —
            tulis ke elemen (paling umum)</li>
            <li><code>document.write()</code> — langsung ke dokumen</li>
            <li><code>console.log()</code> — ke console (untuk debugging)</li>
            <li><code>alert()</code> — jendela pop-up</li>
          </ul>
          <p>Untuk debugging harian, <code>console.log()</code> adalah
          sahabat terbaikmu.</p>
        `,
        quiz: [
          {
            q: "Cara terbaik melihat data saat DEBUGGING adalah...",
            options: ["console.log()", "alert() di setiap baris", "document.write()", "menutup browser"],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<body>
  <p id="tampil"></p>
  <script>
    let hasil = 5 + 3;

    document.getElementById("tampil").innerHTML =
      "Hasil = " + hasil;

    console.log("Lihat aku di Console (F12)");
  </script>
</body>
</html>`,
      },
      {
        id: "js-variables",
        title: "JS Variables",
        html: `
          <p>Variabel adalah <b>tempat menyimpan data</b>. Tiga cara
          deklarasi:</p>
          <ul>
            <li><code>let</code> — dapat diubah nanti (paling umum)</li>
            <li><code>const</code> — tetap, tidak bisa diubah</li>
            <li><code>var</code> — cara lama, sebaiknya dihindari</li>
          </ul>
          <p>Aturan nama: huruf/angka/garis bawah/$, tidak mulai angka,
          dan case sensitif (nama ≠ Nama).</p>
        `,
        quiz: [
          {
            q: "Kata kunci untuk variabel yang nilainya TIDAK bisa diubah?",
            options: ["let", "var", "const", "fixed"],
            answer: 2,
          },
          {
            q: "Manakah nama variabel yang VALID di JavaScript?",
            options: ["2nama", "nama-2", "nama2", "nama 2"],
            answer: 2,
          },
        ],
        code: `<script>
  let kota = "Bandung";
  const tahun = 2026;
  let hasil = tahun - 2000;

  console.log(kota);          // Bandung
  console.log("Umur = " + hasil);
</script>`,
      },
      {
        id: "js-data-types",
        title: "JS Data Types",
        html: `
          <p>Tipe data menentukan jenis nilai dalam variabel:</p>
          <ul>
            <li><b>String</b> — teks: <code>"Hello"</code> / <code>'Hello'</code></li>
            <li><b>Number</b> — angka: <code>42</code>, <code>3.14</code></li>
            <li><b>Boolean</b> — <code>true</code> / <code>false</code></li>
            <li><b>Array</b> — daftar: <code>["a","b"]</code></li>
            <li><b>Object</b> — kumpulan kunci-nilai</li>
            <li><b>null / undefined</b> — kosong / belum terdefinisi</li>
          </ul>
          <p>Untuk melihat tipe bisa pakai <code>typeof</code>.</p>
        `,
        quiz: [
          {
            q: 'Hasil dari typeof "Andi" adalah...',
            options: ['"string"', '"text"', '"word"', '"char"'],
            answer: 0,
          },
        ],
        code: `<script>
  let nama   = "Andi";                // string
  let harga  = 5000;                  // number
  let besar  = true;                  // boolean
  let hobi   = ["coding", "main"];    // array
  let siswa  = { nama: "Andi", umur: 17 }; // object

  console.log(typeof nama);   // "string"
  console.log(typeof hobi);   // "object"
</script>`,
      },
      {
        id: "js-operators",
        title: "JS Operators",
        html: `
          <p><b>Operator</b> melakukan perhitungan atau perbandingan:</p>
          <ul>
            <li>Matematika: <code>+ - * / %</code> dan <code>**</code> (pangkat)</li>
            <li>Penugasan: <code>= += -=</code></li>
            <li>Perbandingan: <code>== === != &lt; &gt; &lt;= &gt;=</code>
            (gunakan <code>===</code> untuk cek nilai + tipe)</li>
            <li>Logika: <code>&amp;&amp; || !</code></li>
            <li>Gabungan string: <code>+</code></li>
          </ul>
        `,
        quiz: [
          {
            q: "Operator sisa bagi (modulus) di JavaScript adalah...",
            options: ["%", "/", "//", "**"],
            answer: 0,
          },
        ],
        code: `<script>
  let a = 10, b = 3;

  console.log(a + b);  // 13
  console.log(a % b);  // 1 (sisa bagi)
  console.log(a === 10 && b === 3); // true
  console.log(a > b ? "a besar" : "b besar");
</script>`,
      },
      {
        id: "js-functions",
        title: "JS Functions",
        html: `
          <p>Fungsi adalah <b>blok kode yang bisa dipanggil ulang</b>.</p>
          <ul>
            <li>Dibuat dengan kata kunci <code>function</code></li>
            <li>Bisa menerima <b>parameter</b> di dalam <code>( )</code></li>
            <li>Bisa mengembalikan nilai dengan <code>return</code></li>
            <li>Dijalankan dengan menulis namanya diikuti <code>()</code></li>
          </ul>
          <p>Fungsi mencegah pengulangan kode yang sama.</p>
        `,
        quiz: [
          {
            q: "Perintah untuk mengembalikan nilai dari sebuah fungsi?",
            options: ["return", "break", "console", "if"],
            answer: 0,
          },
        ],
        code: `<script>
  function kali(a, b) {
    return a * b;
  }

  function sapaan(nama) {
    return "Halo, " + nama + "!";
  }

  console.log(kali(6, 7));      // 42
  console.log(sapaan("Andi"));  // Halo, Andi!
</script>`,
      },
      {
        id: "js-objects",
        title: "JS Objects",
        html: `
          <p>Objek menyimpan data sebagai pasangan
          <b>kunci : nilai</b>, mirip kamus.</p>
          <ul>
            <li>Akses nilai: <code>siswa.nama</code> atau
            <code>siswa["nama"]</code></li>
            <li>Nilai bisa berupa string, angka, array, bahkan fungsi
            (disebut <b>method</b>)</li>
            <li>Sangat cocok untuk memodelkan hal nyata: siswa, produk,
            transaksi, dll.</li>
          </ul>
        `,
        quiz: [
          {
            q: "Nilai properti objek diakses dengan cara...",
            options: ["siswa.nama", "siswa->nama", "siswa#nama", "siswa.nama()"],
            answer: 0,
          },
        ],
        code: `<script>
  const siswa = {
    nama: "Andi",
    umur: 17,
    sapa: function () {
      return "Halo, aku " + this.nama;
    }
  };

  console.log(siswa.nama);      // Andi
  console.log(siswa.sapa());    // Halo, aku Andi
</script>`,
      },
      {
        id: "js-events",
        title: "JS Events",
        html: `
          <p><b>Event</b> adalah kejadian yang terjadi pada halaman —
          klik, ketik, muat halaman — dan JavaScript bisa "menangkapnya"
          untuk menjalankan kode.</p>
          <p>Cara umum: atribut <code>onclick</code> pada elemen, atau
          <code>addEventListener</code> dari JavaScript — cara kedua
          lebih dianjurkan.</p>
        `,
        quiz: [
          {
            q: "Cara memasang event yang paling dianjurkan?",
            options: [
              "addEventListener() dari JavaScript",
              "onclick di atribut HTML",
              "membuat file pendukung baru",
              "event tidak perlu dipasang",
            ],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<body>
  <button id="tombol">Klik Aku</button>
  <p id="hitung">0 kali diklik</p>

  <script>
    let n = 0;
    // addEventListener lebih bersih daripada onclick di HTML
    document.getElementById("tombol").addEventListener("click", function () {
      n++;
      document.getElementById("hitung").innerHTML = n + " kali diklik";
    });
  </script>
</body>
</html>`,
      },
      {
        id: "js-conditions",
        title: "JS Conditions",
        html: `
          <p>Agar program bisa <b>mengambil keputusan</b>, pakai
          <code>if</code>, <code>else if</code>, dan <code>else</code>.</p>
          <p>Ada pula <b>ternary</b> untuk satu kondisi singkat:
          <code>kondisi ? nilaiJikaTrue : nilaiJikaFalse</code>.</p>
          <p>Pembanding: <code>===</code> (sama), <code>!==</code>,
          <code>&gt;</code>, <code>&lt;</code>, dll.</p>
        `,
        quiz: [
          {
            q: "Operator yang membandingkan nilai SEKALIGUS tipe datanya?",
            options: ["==", "=", "===", "!="],
            answer: 2,
          },
          {
            q: 'Apa hasil dari (10 > 5) ? "besar" : "kecil"?',
            options: ["kecil", "besar", "error", "undefined"],
            answer: 1,
          },
        ],
        code: `<script>
  let umur = 17;

  if (umur >= 17) {
    console.log("Boleh membuat KTP");
  } else {
    console.log("Belum cukup umur");
  }

  // versi ternary singkat
  let pesan = umur >= 17 ? "Lulus" : "Remaja";
  console.log(pesan);
</script>`,
      },
      {
        id: "js-loops",
        title: "JS Loops",
        html: `
          <p><b>Loop</b> mengulang kode beberapa kali:</p>
          <ul>
            <li><code>for</code> — jumlah ulangan tertentu</li>
            <li><code>while</code> — ulangi selama kondisi benar</li>
            <li><code>for...of</code> — melewati tiap item array</li>
            <li><code>break</code> — hentikan; <code>continue</code> —
            lompati satu iterasi</li>
          </ul>
          <p>Berguna untuk daftar, tabel, dan penghitungan berulang.</p>
        `,
        quiz: [
          {
            q: "Manakah tipe loop untuk jumlah ulangan yang SUDAH diketahui?",
            options: ["for", "while", "do-while", "junction"],
            answer: 0,
          },
          {
            q: "Perintah untuk menghentikan loop sepenuhnya?",
            options: ["continue", "break", "exit", "stop"],
            answer: 1,
          },
        ],
        code: `<script>
  // pengulangan dari 1 sampai 5
  for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
  }

  // melewati array
  let buah = ["apel", "mangga", "pisang"];
  for (let b of buah) {
    console.log(b);
  }
</script>`,
      },
      {
        id: "js-arrays",
        title: "JS Arrays",
        html: `
          <p><b>Array</b> menyimpan banyak nilai dalam satu variabel,
          diurutkan dengan <b>indeks mulai dari 0</b>.</p>
          <p>Metode berguna:
          <code>push()</code> (tambah akhir), <code>pop()</code>
          (ambil akhir), <code>length</code> (jumlah item),
          <code>join()</code>, dan <code>forEach()</code>
          untuk melewati tiap item.</p>
        `,
        quiz: [
          {
            q: "Indeks pertama pada array dimulai dari angka...",
            options: ["0", "1", "-1", "tidak punya indeks"],
            answer: 0,
          },
          {
            q: "Menambahkan item di AKHIR array memakai...",
            options: ["push()", "pop()", "shift()", "length()"],
            answer: 0,
          },
        ],
        code: `<script>
  let buah = ["apel", "mangga"];

  buah.push("pisang");          // tambah di akhir
  console.log(buah.length);     // 3
  console.log(buah[0]);         // apel
  console.log(buah.join(" - "));// apel - mangga - pisang

  buah.forEach(function (item) {
    console.log(item);
  });
</script>`,
      },
      {
        id: "js-dom",
        title: "JS DOM",
        html: `
          <p><b>DOM</b> (<i>Document Object Model</i>) adalah jembatan
          antara HTML dan JavaScript: setiap elemen adalah "objek" yang
          bisa kamu ubah.</p>
          <p>Cari elemen:
          <code>getElementById</code>, <code>querySelector</code>,
          <code>querySelectorAll</code>. Ubah: <code>.innerHTML</code>,
          <code>.style</code>, <code>.className</code>, dan buat baru
          dengan <code>createElement</code>.</p>
        `,
        quiz: [
          {
            q: "Fungsi untuk membuat elemen BARU di DOM?",
            options: ["createElement()", "newTag()", "addTag()", "makeElement()"],
            answer: 0,
          },
        ],
        code: `<!DOCTYPE html>
<html>
<body>
  <ul id="list"></ul>
  <script>
    // ambil elemen ul lewat DOM
    let list = document.getElementById("list");

    let warna = ["merah", "kuning", "hijau"];
    warna.forEach(function (w) {
      // buat elemen li baru lalu tempel ke ul
      let li = document.createElement("li");
      li.textContent = w;
      list.appendChild(li);
    });
  </script>
</body>
</html>`,
      },
    ],
  },
];