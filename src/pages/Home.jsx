import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'
import { cars, categories, testimonials, whyUs, WA_NUMBER } from '../data/cars'

// ── Marquee Strip ──────────────────────────────────────────────
const marqueeItems = ['Unit Premium', 'Driver Profesional', 'Layanan 24 Jam', 'Harga Terjangkau', 'Mobil Terawat', 'Booking Mudah']

function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div className="bg-gold overflow-hidden py-3">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-navy font-bold text-sm tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 bg-navy rounded-full" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Hero ────────────────────────────────────────────────────────
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/97 via-navy/75 to-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </motion.div>

      {/* Decorative orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <motion.div
        className="relative max-w-7xl mx-auto px-6 pt-24 grid lg:grid-cols-2 gap-12 items-center w-full"
        style={{ opacity }}
      >
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="show">


          <motion.h1 variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
          >
            Rental Mobil Terpercaya<br />
            di Tanjung Morawa
          </motion.h1>

          <motion.p variants={fadeUp}
            className="text-white/65 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Nyaman, Aman, dan Siap Antar Jemput Kapan Saja. Unit bersih, driver profesional, dan proses booking cepat via WhatsApp.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Diego Rental 👋, saya ingin booking mobil sekarang!')}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-base px-7 py-3.5"
            >
              📱 Booking Sekarang
            </a>
            <a href="#fleet" className="btn-secondary text-base px-7 py-3.5">
              🚗 Lihat Mobil
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="flex gap-8 mt-10">
            {[
              { num: '500+', label: 'Pelanggan Puas' },
              { num: '20+', label: 'Unit Mobil' },
              { num: '4.9★', label: 'Rating Rata-rata' },
              { num: '24/7', label: 'Layanan Aktif' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-gold leading-none">{s.num}</div>
                <div className="text-xs text-white/45 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Floating Car */}
        <motion.div
          className="hidden lg:block relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85"
            alt="Mobil Premium"
            className="w-full rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Floating cards */}
          <motion.div
            className="absolute -bottom-4 -left-8 glass-card px-4 py-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <p className="text-xs text-white/50 mb-0.5">Rating Pelanggan</p>
            <p className="text-sm font-bold text-white">⭐ 4.9 / 5.0</p>
            <p className="text-gold text-xs mt-0.5">★★★★★ (500+ review)</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}

// ── Fleet Section ───────────────────────────────────────────────
function FleetSection() {
  const [activeFilter, setActiveFilter] = useState('all')
  const filtered = activeFilter === 'all' ? cars : cars.filter(c => c.type === activeFilter)

  return (
    <section id="fleet" className="bg-navy-mid py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Pilihan Terbaik</div>
            <h2 className="section-title">Unit Kami</h2>
            <p className="section-subtitle max-w-md">
              Semua mobil terawat, bersih, dan siap antar jemput ke lokasi Anda.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-gold border-gold text-navy font-bold'
                    : 'bg-transparent border-white/20 text-white/60 hover:border-gold/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/unit"
            className="btn-secondary inline-flex px-8 py-3"
          >
            Lihat Semua Unit →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ── Booking Section ─────────────────────────────────────────────
function BookingSection() {
  const perks = [
    'Konfirmasi instan via WhatsApp',
    'Tanpa biaya admin tersembunyi',
    'Antar jemput gratis dalam kota',
    'Asuransi perjalanan included',
    'Bisa reschedule gratis 24 jam sebelum',
    'Driver hafal rute terbaik',
  ]

  return (
    <section id="booking" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Mudah & Cepat</div>
            <h2 className="section-title">
              Pesan Sekarang,<br />
              Berangkat Kapan Saja
            </h2>
            <p className="section-subtitle mb-8">
              Isi form booking dan kami akan langsung menghubungi Anda via WhatsApp untuk konfirmasi pemesanan dalam hitungan menit.
            </p>

            <div className="space-y-3">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-sm text-white/65"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold text-xs">✓</span>
                  </div>
                  {p}
                </motion.div>
              ))}
            </div>

            {/* Quick WA */}
            <div className="mt-10 p-5 glass-card">
              <p className="text-white/50 text-sm mb-3">Atau langsung chat kami:</p>
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="btn-wa inline-flex"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat Sekarang — Respon Cepat!
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}

// ── Why Us ──────────────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section id="why-us" className="bg-navy-mid py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label justify-center">Kenapa Kami?</div>
          <h2 className="section-title">Keunggulan Diego Rental</h2>
          <p className="section-subtitle mx-auto max-w-lg">
            Kami hadir untuk memastikan setiap perjalanan Anda aman, nyaman, dan tak terlupakan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              {/* Top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-10">
            <div className="section-label">Kontak</div>
            <h2 className="section-title">Siap Melayani Pesanan Anda</h2>
            <p className="section-subtitle max-w-xl">
              Butuh mobil sekarang? Hubungi kami dan booking dalam hitungan menit! Kami siap membantu perjalanan Anda dengan layanan cepat dan transparan.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-3xl bg-white/5 border border-white/10 p-5 hover:border-gold/40 transition-all duration-200"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <p className="text-sm text-white/40">WhatsApp</p>
                  <p className="font-semibold text-white">0813-6203-2324</p>
                </div>
              </a>

              <a
                href="mailto:diego@gmail.com"
                className="flex items-start gap-4 rounded-3xl bg-white/5 border border-white/10 p-5 hover:border-gold/40 transition-all duration-200"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="font-semibold text-white">diego@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-3xl bg-white/5 border border-white/10 p-5">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-sm text-white/40">Alamat</p>
                  <p className="font-semibold text-white">Jl. Ujung Serdang Perumahan Puri Asri Taramedang Blok E No. 22 Tanjung Morawa</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 bg-gradient-to-br from-navy/80 to-navy/50 border border-white/10">
            <h3 className="font-display text-2xl font-bold text-white mb-4">Layanan Kami</h3>
            <ul className="space-y-3 text-white/70">
              <li>• Unit bersih & terawat</li>
              <li>• Harga transparan tanpa biaya tersembunyi</li>
              <li>• Driver profesional dan berpengalaman</li>
              <li>• Layanan 24 jam siap melayani kapan saja</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Testimonials ─────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label justify-center">Kata Mereka</div>
          <h2 className="section-title">Testimoni Pelanggan</h2>
          <p className="section-subtitle mx-auto max-w-lg">
            Kepercayaan pelanggan adalah motivasi terbesar kami untuk terus berkembang.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="font-display text-5xl text-gold/25 leading-none mb-2">"</div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-gold/40" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-white/30 bg-white/5 px-2 py-1 rounded-full">{t.car}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA Final ────────────────────────────────────────────────────
function CTAFinal() {
  return (
    <section className="relative py-28 overflow-hidden bg-navy-light">
      {/* BG glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/6 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label justify-center mb-5">Mulai Perjalanan Anda</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Siap Bepergian dengan<br />
            <span className="text-gradient-gold">Nyaman & Aman?</span>
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto">
            Hubungi kami sekarang dan dapatkan penawaran terbaik untuk perjalanan impian Anda bersama Diego Rental.
          </p>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Diego Rental 👋, saya ingin pesan mobil sekarang!')}`}
            target="_blank"
            rel="noreferrer"
            className="btn-wa inline-flex text-lg px-10 py-4 rounded-xl animate-pulse-gold"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat WhatsApp Sekarang
          </a>

          <p className="text-white/30 text-sm mt-5">⚡ Respon dalam &lt; 5 menit • 24 Jam tersedia</p>
        </motion.div>
      </div>
    </section>
  )
}

// ── Home Page ────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FleetSection />
      <BookingSection />
      <WhyUsSection />
      <ContactSection />
      <TestimonialsSection />
      <CTAFinal />
      <Footer />
    </>
  )
}
