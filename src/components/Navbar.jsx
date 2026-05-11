import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { WA_NUMBER } from '../data/cars'
import logo from '../assets/logo.png'

const links = [
  { href: '/#fleet', label: 'Beranda' },
  { href: '/#why-us', label: 'Keunggulan' },
  { href: '/#testimonials', label: 'Testimoni' },
  { href: '/#booking', label: 'Booking' },
  { href: '/unit', label: 'Unit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close on route change
  useEffect(() => setMobileOpen(false), [location])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 bg-transparent ${
          scrolled
            ? 'backdrop-blur-xl border-b border-gold/10 py-1'
            : 'py-2'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Desktop Layout: 3 Columns */}
          <div className="hidden lg:grid grid-cols-3 items-center w-full gap-4">
            {/* Left: Logo */}
            <div className="flex justify-start">
              <Link to="/">
                <img 
                  src={logo} 
                  alt="Diego Rental" 
                  className={`transition-all duration-300 object-contain ${scrolled ? 'h-16' : 'h-32'} w-auto`} 
                />
              </Link>
            </div>

            {/* Center: Brand Info & Links */}
            <div className="flex flex-col items-center text-center gap-2 max-w-md mx-auto">
              <div className="w-full overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-marquee gap-20">
                  <span className="text-xl font-display font-bold text-gold tracking-[0.8em] uppercase">
                    D I E G O &nbsp; R E N T A L
                  </span>
                  <span className="text-xl font-display font-bold text-gold tracking-[0.8em] uppercase">
                    D I E G O &nbsp; R E N T A L
                  </span>
                </div>
              </div>
              
              <h3 className="text-[9px] text-white/30 font-medium uppercase tracking-[0.2em] whitespace-nowrap">
                Jl. Ujung Serdang Perumahan Puri Asri Taramedang Blok E No. 22 Tanjung Morawa
              </h3>

              {/* Links */}
              <ul className="flex items-center gap-6 mt-1">
                {links.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 text-[11px] font-bold tracking-[0.15em] uppercase hover:text-gold transition-colors duration-200 relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="flex justify-end">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Diego Rental, saya ingin informasi rental mobil 🚗')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-navy text-xs font-bold px-5 py-2 rounded-md hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gold/10"
              >
                <Phone size={14} />
                Hubungi Kami
              </a>
            </div>
          </div>

          {/* Mobile Layout (Logo & Hamburger) */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <Link to="/">
              <img 
                src={logo} 
                alt="Diego Rental" 
                className={`transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'} w-auto`} 
              />
            </Link>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-navy z-[60] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            <button
              className="absolute top-5 right-6 text-gold text-3xl"
              onClick={() => setMobileOpen(false)}
            >
              <X size={30} />
            </button>

            <Link to="/" className="mb-10 flex flex-col items-center text-center gap-4">
              <img src={logo} alt="Diego Rental" className="h-44 w-auto" />
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-display font-bold text-gold tracking-widest">
                  DIEGO RENTAL
                </h1>
                <h3 className="text-sm text-white/50 font-medium mt-2 max-w-[250px]">
                  Jl. Ujung Serdang Perumahan Puri Asri Taramedang Blok E No. 22 Tanjung Morawa
                </h3>
              </div>
            </Link>

            <nav className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-white text-3xl font-display font-semibold hover:text-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-10 btn-wa text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              📱 Chat WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
