import avanzaImage from '../assets/Toyota Avanza - ZA version 2012-15.jpg'
import innovaImage from '../assets/innova-reborn-putih.jpg'
import fortunerImage from '../assets/toyota-fortuner.webp'
import hiaceImage from '../assets/download (2).jpg'
import xeniaImage from '../assets/xenia.jpg'

export const WA_NUMBER = '6281362032324'
export const EMAIL = 'diego@gmail.com'
export const ADDRESS = 'Jl. Ujung Serdang Perumahan Puri Asri Taramedang Blok E No. 22 Tanjung Morawa'

export const cars = [
  {
    id: 1,
    name: 'Toyota Avanza',
    year: 2024,
    type: 'mpv',
    price: 350000,
    priceFormatted: '350.000',
    img: avanzaImage,
    badge: 'Best Seller',
    badgeColor: 'red',
    features: [
      { icon: '👥', label: '7 Kursi' },
      { icon: '❄️', label: 'AC Full' },
      { icon: '⛽', label: 'Irit BBM' },
      { icon: '🧼', label: 'Bersih & Terawat' },
    ],
    description: 'Pilihan ideal untuk keluarga dan perjalanan bisnis. Nyaman, luas, dan mudah dikendarai di berbagai kondisi jalan.',
    transmission: 'Automatic',
    fuel: 'Bensin',
    capacity: 7,
    available: true,
  },
  {
    id: 2,
    name: 'Toyota Innova Reborn',
    year: 2024,
    type: 'mpv',
    price: 550000,
    priceFormatted: '550.000',
    img: innovaImage,
    badge: 'Keluarga',
    badgeColor: 'gold',
    features: [
      { icon: '👥', label: '8 Kursi' },
      { icon: '❄️', label: 'AC Double' },
      { icon: '🧳', label: 'Bagasi Lapang' },
      { icon: '🛣️', label: 'Perjalanan Jauh' },
    ],
    description: 'Unit premium untuk kenyamanan ekstra. Cocok untuk keluarga besar, rombongan, dan aktivitas perjalanan jauh.',
    transmission: 'Automatic',
    fuel: 'Bensin',
    capacity: 8,
    available: true,
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    year: 2023,
    type: 'suv',
    price: 700000,
    priceFormatted: '700.000',
    img: fortunerImage,
    badge: 'SUV',
    badgeColor: 'gold',
    features: [
      { icon: '👥', label: '7 Kursi' },
      { icon: '⛽', label: 'Diesel' },
      { icon: '🛡️', label: 'Tangguh' },
      { icon: '🚗', label: 'Off-Road Ready' },
    ],
    description: 'SUV premium dengan performa tangguh dan tampilan elegan. Ideal untuk perjalanan keluarga ataupun petualangan luar kota.',
    transmission: 'Automatic',
    fuel: 'Diesel',
    capacity: 7,
    available: true,
  },
  {
    id: 4,
    name: 'Toyota Hiace',
    year: 2023,
    type: 'van',
    price: 1600000,
    priceFormatted: '1.600.000',
    img: hiaceImage,
    badge: 'Van Besar',
    badgeColor: 'blue',
    features: [
      { icon: '👥', label: '15 Kursi' },
      { icon: '❄️', label: 'AC Powerful' },
      { icon: '🧳', label: 'Bagasi Besar' },
      { icon: '🛣️', label: 'Rombongan' },
    ],
    description: 'Solusi sempurna untuk rombongan dan travel bandara. Kapasitas besar dengan kenyamanan dan keamanan maksimal.',
    transmission: 'Manual',
    fuel: 'Diesel',
    capacity: 15,
    available: true,
  },
  {
    id: 5,
    name: 'Daihatsu Xenia',
    year: 2024,
    type: 'city',
    price: 350000,
    priceFormatted: '350.000',
    img: xeniaImage,
    badge: 'Hemat',
    badgeColor: 'green',
    features: [
      { icon: '👥', label: '5-7 Kursi' },
      { icon: '⛽', label: 'Hemat BBM' },
      { icon: '🅿️', label: 'Parkir Mudah' },
      { icon: '🚗', label: 'Lincah' },
    ],
    description: 'Mobil city car ekonomis dan gesit. Cocok untuk mobilitas kota, hemat bahan bakar, dan mudah diparkirkan di area terbatas.',
    transmission: 'Automatic',
    fuel: 'Bensin',
    capacity: 5,
    available: true,
  },
]

export const categories = [
  { id: 'all', label: 'Semua' },
  { id: 'mpv', label: 'MPV' },
  { id: 'suv', label: 'SUV' },
  { id: 'city', label: 'City Car' },
  { id: 'van', label: 'Van' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    location: 'Medan, Sumatera Utara',
    rating: 5,
    text: 'Pelayanan luar biasa! Mobil bersih, driver tepat waktu dan ramah. Perjalanan keluarga kami ke Berastagi jadi sangat menyenangkan. Pasti akan pesan lagi!',
    avatar: 'https://i.pravatar.cc/80?img=1',
    car: 'Toyota Avanza',
  },
  {
    id: 2,
    name: 'Sari Dewi',
    location: 'Binjai, Sumatera Utara',
    rating: 5,
    text: 'Harga sangat bersaing dengan kualitas premium. Booking via WhatsApp super mudah, konfirmasi cepat. Diego Rental is the best rental di Medan!',
    avatar: 'https://i.pravatar.cc/80?img=5',
    car: 'Mitsubishi Xpander',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    location: 'Pematangsiantar',
    rating: 5,
    text: 'Sudah 3 kali sewa dan selalu puas. Mobilnya bagus-bagus, terawat, dan wangi. Drivernya juga sangat profesional dan hafal jalan. Recommended banget!',
    avatar: 'https://i.pravatar.cc/80?img=8',
    car: 'Toyota Fortuner',
  },
  {
    id: 4,
    name: 'Linda & Reza',
    location: 'Medan',
    rating: 5,
    text: 'Pakai Diego Rental untuk acara pernikahan kami. Sangat memuaskan! Mobil Camry-nya keren banget, driver on time, dan pelayanan bintang 5!',
    avatar: 'https://i.pravatar.cc/80?img=9',
    car: 'Toyota Camry',
  },
  {
    id: 5,
    name: 'Rizky Pratama',
    location: 'Lubuk Pakam',
    rating: 5,
    text: 'Respon WhatsApp-nya cepat sekali! Dalam 5 menit langsung dapat konfirmasi dan detail booking. Proses mudah, harga transparan, tidak ada biaya tersembunyi.',
    avatar: 'https://i.pravatar.cc/80?img=3',
    car: 'Honda CR-V',
  },
  {
    id: 6,
    name: 'Mega Lestari',
    location: 'Tebing Tinggi',
    rating: 5,
    text: 'Layanan 24 jam beneran ada! Saya pesan tengah malam untuk perjalanan subuh dan langsung dilayani dengan ramah. Top banget Diego Rental!',
    avatar: 'https://i.pravatar.cc/80?img=7',
    car: 'Toyota Innova',
  },
]

export const whyUs = [
  { icon: '🧼', title: 'Unit Bersih & Terawat', desc: 'Semua mobil rutin dibersihkan dan diperiksa sebelum setiap perjalanan. Kenyamanan Anda prioritas utama kami.' },
  { icon: '💰', title: 'Harga Transparan', desc: 'Tarif jelas tanpa biaya tersembunyi. Anda tahu harga sewa sejak awal, jadi pemesanan jadi lebih tenang.' },
  { icon: '👨‍✈️', title: 'Driver Profesional', desc: 'Driver berpengalaman, ramah, dan disiplin waktu. Antar jemput tepat waktu untuk perjalanan yang lebih nyaman.' },
  { icon: '🕐', title: 'Layanan 24 Jam', desc: 'Booking kapan saja, termasuk malam dan hari libur. Kami siap melayani perjalanan darurat dan mendadak.' },
  { icon: '🚗', title: 'Booking Cepat via WA', desc: 'Pesan mobil langsung lewat WhatsApp dengan pesan otomatis. Konfirmasi dalam hitungan menit.' },
  { icon: '📍', title: 'Antar Jemput Mudah', desc: 'Kami siap antar jemput ke alamat Anda di Tanjung Morawa dan area sekitarnya tanpa repot.' },
]

export function buildWAMessage(car, booking = null) {
  if (booking) {
    return encodeURIComponent(
      `Halo Diego Rental 👋, saya ingin booking mobil:\n\n` +
      `👤 Nama: ${booking.nama}\n` +
      `📱 WhatsApp: ${booking.wa || '-'}\n` +
      `🚗 Mobil: ${booking.mobil}\n` +
      `📅 Tanggal: ${booking.tanggal}\n` +
      `⏱️ Durasi: ${booking.durasi} hari\n` +
      `🔑 Tipe: ${booking.layanan}\n\n` +
      `Mohon konfirmasinya, terima kasih 🙏`
    )
  }
  const name = car?.name || 'pilihan saya'
  return encodeURIComponent(
    `Halo Diego Rental 👋, saya ingin booking:\n\n` +
    `🚗 Nama Mobil: ${name}\n` +
    `📅 Tanggal: (isi tanggal)\n` +
    `⏱️ Durasi: (isi durasi) hari\n` +
    `🔑 Tipe: Dengan Driver / Lepas Kunci\n\n` +
    `Mohon informasi ketersediaan dan konfirmasinya, terima kasih 🙏`
  )
}
