import { Link } from 'react-router-dom'
import { WA_NUMBER } from '../data/cars'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#060e1a] border-t border-white/[0.05] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-3xl font-bold text-gold tracking-wide block mb-4">
              Diego<span className="text-white"> Rental</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Layanan rental mobil premium terpercaya di Medan dan sekitarnya. Unit terbaik, driver profesional, harga terjangkau.
            </p>
         </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { label: 'Unit Mobil', href: '/#fleet' },
                { label: 'Keunggulan Kami', href: '/#why-us' },
                { label: 'Testimoni', href: '/#testimonials' },
                { label: 'Form Booking', href: '/#booking' },
                { label: 'Semua Unit', href: '/unit' },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/40 text-sm hover:text-gold transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Layanan</h4>
            <ul className="space-y-3">
              {['Dengan Driver', 'Lepas Kunci (Self Drive)', 'Antar Jemput Bandara', 'Sewa Bulanan', 'Wisata & Tour', 'Wedding Car'].map(l => (
                <li key={l}>
                  <a href="#" className="text-white/40 text-sm hover:text-gold transition-colors duration-200">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Kontak</h4>
            <div className="space-y-4">
              {[
                { icon: '📞', text: '0813-6203-2324', href: `https://wa.me/${WA_NUMBER}` },
                { icon: '📧', text: 'diego@gmail.com', href: 'mailto:diego@gmail.com' },
                { icon: '📍', text: 'Jl. Ujung Serdang Perumahan Puri Asri Taramedang Blok E No. 22 Tanjung Morawa', href: 'https://www.google.com/maps/search/?api=1&query=Jl.+Ujung+Serdang+Perumahan+Puri+Asri+Taramedang+Blok+E+No.+22+Tanjung+Morawa' },
                { icon: '🕐', text: 'Layanan 24 Jam, siap melayani setiap saat', href: '#' },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-start gap-3 text-sm text-white/40 hover:text-white/70 transition-colors duration-200 group"
                >
                  <span className="text-gold mt-0.5 flex-shrink-0">{c.icon}</span>
                  <span className="leading-relaxed">{c.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © {year} <span className="text-gold">Diego Rental</span>. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Kebijakan Privasi', 'Syarat & Ketentuan'].map(t => (
              <a key={t} href="#" className="text-xs text-white/25 hover:text-gold transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
