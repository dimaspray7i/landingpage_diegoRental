# 🚗 Diego Rental — Rental Mobil Premium

Landing page modern untuk bisnis rental mobil, dibangun dengan React + Vite + Tailwind CSS + Framer Motion.

---

## ✨ Fitur Utama

- 🎨 **Desain Premium** — Tema navy & gold elegan, typography Playfair Display
- 📱 **Fully Responsive** — Mobile-first, tampil sempurna di semua perangkat
- 🎬 **Animasi Halus** — Framer Motion untuk scroll reveal, parallax, float, marquee
- 💬 **WhatsApp Integration** — Pesan otomatis sesuai mobil & data form booking
- 🔍 **Filter & Search Unit** — Filter by type, sort, dan search real-time
- 📋 **Form Booking Lengkap** — Validasi input, redirect ke WhatsApp dengan data terisi
- 🌐 **Multi-page** — React Router untuk halaman Home dan Semua Unit
- ⚡ **Loading Screen** — Animasi splash screen premium
- 🔝 **Sticky Navbar** — Transparan → blur on scroll, hamburger mobile
- 💫 **Floating WhatsApp Button** — Selalu tersedia di semua halaman
- 🗂️ **SEO Ready** — Meta tags, OG tags lengkap

---

## 🛠️ Tech Stack

| Tool | Versi |
|------|-------|
| React | 18.x |
| Vite | 5.x |
| Tailwind CSS | 3.x |
| Framer Motion | 11.x |
| React Router | 6.x |
| Lucide React | 0.383.x |

---

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka browser di `http://localhost:5173`

### 3. Build untuk production

```bash
npm run build
```

### 4. Preview build

```bash
npm run preview
```

---

## ⚙️ Konfigurasi

### Nomor WhatsApp

Buka `src/data/cars.js` dan ubah:

```js
export const WA_NUMBER = '6281234567890'
// Ganti dengan nomor WhatsApp bisnis Anda (tanpa +)
// Contoh: '6281298765432'
```

### Data Mobil

Edit array `cars` di `src/data/cars.js` untuk menyesuaikan unit:

```js
{
  id: 1,
  name: 'Toyota Avanza',
  year: 2023,
  type: 'mpv',           // mpv | suv | sedan | city | van
  price: 350000,         // harga per hari (angka)
  priceFormatted: '350.000',
  img: 'URL_GAMBAR',
  badge: 'Terlaris',
  badgeColor: 'red',     // red | gold | green | blue
  features: [
    { icon: '👥', label: '7 Kursi' },
    // ...
  ],
  description: 'Deskripsi singkat...',
  transmission: 'Automatic',
  fuel: 'Bensin',
  capacity: 7,
  available: true,       // false = tampil "Tidak Tersedia"
}
```

### Informasi Bisnis

Edit `src/components/Footer.jsx` untuk:
- Nama bisnis
- Alamat
- Email
- Nomor telepon
- Link sosial media

---

## 📁 Struktur Folder

```
driveelite/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar + mobile menu
│   │   ├── CarCard.jsx         # Card mobil dengan animasi
│   │   ├── BookingForm.jsx     # Form booking → WhatsApp
│   │   ├── FloatingWA.jsx      # Tombol WA melayang
│   │   ├── LoadingScreen.jsx   # Splash screen animasi
│   │   └── Footer.jsx          # Footer lengkap
│   ├── data/
│   │   └── cars.js             # Data mobil, testimoni, dll
│   ├── hooks/
│   │   └── useScrollReveal.js  # Custom hook animasi scroll
│   ├── pages/
│   │   ├── Home.jsx            # Halaman utama (semua section)
│   │   └── Fleet.jsx           # Halaman semua unit
│   ├── App.jsx                 # Router + LoadingScreen
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🌐 Deploy ke Vercel

1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com) → Import repository
3. Framework: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy! 🎉

## 🌐 Deploy ke Netlify

1. Push ke GitHub
2. Buka [netlify.com](https://netlify.com) → Add new site
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! 🎉

> **Penting untuk Netlify:** Tambahkan file `public/_redirects` dengan isi:
> ```
> /*    /index.html   200
> ```
> Ini diperlukan agar React Router bekerja dengan benar.

---

## 📱 WhatsApp Format Pesan

### Booking dari Card Mobil:
```
Halo Diego Rental 👋, saya ingin booking:

🚗 Nama Mobil: Toyota Avanza
📅 Tanggal: (isi tanggal)
⏱️ Durasi: (isi durasi) hari
🔑 Tipe: Dengan Driver / Lepas Kunci

Mohon informasi ketersediaan dan konfirmasinya, terima kasih 🙏
```

### Booking dari Form:
```
Halo Diego Rental 👋, saya ingin booking mobil:

👤 Nama: Budi Santoso
📱 WhatsApp: 08123456789
🚗 Mobil: Toyota Avanza 2023
📅 Tanggal: 2025-07-01
⏱️ Durasi: 3 hari
🔑 Tipe: Dengan Driver
📝 Catatan: Tujuan Berastagi

Mohon konfirmasinya, terima kasih 🙏
```

---

## 🎨 Kustomisasi Warna

Edit `tailwind.config.js`:

```js
colors: {
  navy: {
    DEFAULT: '#0a1628',  // Latar utama
    mid: '#0f2040',      // Latar section
    light: '#1a3260',    // Elemen card
  },
  gold: {
    DEFAULT: '#c9a84c',  // Aksen utama
    light: '#e2c278',    // Hover state
    pale: '#f5e6ba',     // Text ringan
  },
},
```

---

## 📄 Lisensi

MIT License — Bebas digunakan untuk proyek komersial.

---

**Dibuat dengan ❤️ untuk bisnis rental mobil Indonesia**
