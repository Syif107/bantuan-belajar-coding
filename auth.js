/* ============================================================
   AUTH.JS — Akun & "Database Lokal"
   semua data akun disimpan di localStorage perangkat ini.
   ============================================================ */

const DB_KEY = "belajarCoding:db";
const SESSION_KEY = "belajarCoding:session";

/* ------------------------------------------------------------
   DATABASE LOKAL
   Struktur: { users: [ { id, name, email, passHash, passSalt, createdAt } ] }
   Dibaca/ditulis lewat localStorage (berfungsi sebagai database
   paling sederhana untuk MVP).
   ------------------------------------------------------------ */
const DB = {
  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      return raw ? JSON.parse(raw) : { users: [] };
    } catch (e) {
      return { users: [] };
    }
  },
  save(db) {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  },
  nextId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  },
};

/* ------------------------------------------------------------
   HASH PASSWORD SEDERHANA
   !! CATATAN EDUKATIF !!
   Ini DEMO pembelajaran — bukan keamanan produksi. Fungsinya
   cukup mencegah meletakkan password polos di penyimpanan.
   Di aplikasi sungguhan, gunakan hashing yang aman (bcrypt/argon2)
   dan simpan di SERVER, bukan di perangkat pengguna.
   ------------------------------------------------------------ */
function hashString(str) {
  // Algoritma djb2 sederhana -> hasil hex
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
  }
  return "h" + h.toString(16);
}

function makeSalt() {
  // salt acak per pengguna: meskipun dua password sama, hashnya beda
  return Math.random().toString(36).slice(2, 10);
}

function hashPassword(password, salt) {
  return hashString(salt + "::" + password + "::" + salt);
}

/* bersihkan karakter berbahaya untuk HTML */
function cleanText(str) {
  return String(str).replace(/[<>]/g, "");
}

/* ------------------------------------------------------------
   AUTH — API autentikasi
   ------------------------------------------------------------ */
const AUTH = {
  /* Pengguna yang sedang login (atau null jika tamu) */
  current() {
    const sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) return null;
    const db = DB.load();
    return db.users.find((u) => u.id === sessionId) || null;
  },

  /* Identitas untuk kunci progres: "guest" atau id akun */
  userId() {
    const u = AUTH.current();
    return u ? u.id : "guest";
  },

  signup({ name, email, password }) {
    name = cleanText(name.trim());
    email = cleanText(email.trim().toLowerCase());

    if (name.length < 2) return { ok: false, error: "Nama minimal 2 huruf." };
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return { ok: false, error: "Format email tidak valid." };
    if (password.length < 6)
      return { ok: false, error: "Kata sandi minimal 6 karakter." };

    const db = DB.load();
    if (db.users.some((u) => u.email === email))
      return { ok: false, error: "Email sudah terdaftar. Silakan masuk." };

    const salt = makeSalt();
    const user = {
      id: DB.nextId(),
      name,
      email,
      passHash: hashPassword(password, salt),
      passSalt: salt,
      createdAt: Date.now(),
    };

    db.users.push(user);
    DB.save(db);
    localStorage.setItem(SESSION_KEY, user.id); // langsung login
    return { ok: true, user };
  },

  login({ email, password }) {
    const db = DB.load();
    const user = db.users.find((u) => u.email === email.trim().toLowerCase());
    if (!user) return { ok: false, error: "Email belum terdaftar." };
    if (user.passHash !== hashPassword(password, user.passSalt))
      return { ok: false, error: "Kata sandi salah." };

    localStorage.setItem(SESSION_KEY, user.id);
    return { ok: true, user };
  },

  logout() {
    localStorage.removeItem(SESSION_KEY);
  },

  /* Pindahkan progres tamu ke akun yang sedang login.
     Kembalikan true jika berhasil dipindahkan. */
  migrateGuest() {
    const guestKey = "belajarCoding:progress:guest";
    const guestRaw = localStorage.getItem(guestKey);
    if (!guestRaw) return false;

    const userKey = "belajarCoding:progress:" + AUTH.userId();
    if (localStorage.getItem(userKey)) return false; // jangan timpa akun

    localStorage.setItem(userKey, guestRaw);
    localStorage.removeItem(guestKey);
    return true;
  },

  /* Helper: progres per user (dipakai leaderboard) */
  xpOfUserId(userId) {
    try {
      const s = JSON.parse(localStorage.getItem("belajarCoding:progress:" + userId));
      return s && typeof s.xp === "number" ? s.xp : 0;
    } catch (e) {
      return 0;
    }
  },
};

/* Eksplisit tempel ke window: const/let di top-level TIDAK otomatis
   menjadi properti window, padahal kode lain memakai window.AUTH. */
window.AUTH = AUTH;