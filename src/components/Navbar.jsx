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
  { href: '/unit', label: 'Semua Unit' },
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
            ? 'backdrop-blur-xl border-b border-gold/10 py-3'
            : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Diego Rental" className="h-20 w-auto" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/75 text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Diego Rental, saya ingin informasi rental mobil 🚗')}`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-gold text-navy text-sm font-bold px-4 py-2 rounded-md hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone size={15} />
            Hubungi Kami
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
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

            <Link to="/" className="mb-12">
              <img src={logo} alt="Diego Rental" className="h-20 w-auto" />
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
