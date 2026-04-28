import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import Footer from '../components/Footer'
import { cars, categories } from '../data/cars'

export default function Fleet() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [priceRange, setPriceRange] = useState([0, 1500000])

  const filtered = useMemo(() => {
    let result = [...cars]

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.type.toLowerCase().includes(q) ||
        c.features.some(f => f.label.toLowerCase().includes(q))
      )
    }

    // Type filter
    if (activeFilter !== 'all') {
      result = result.filter(c => c.type === activeFilter)
    }

    // Price range
    result = result.filter(c => c.price >= priceRange[0] && c.price <= priceRange[1])

    // Sort
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name))
    else if (sortBy === 'capacity') result.sort((a, b) => b.capacity - a.capacity)

    return result
  }, [search, activeFilter, sortBy, priceRange])

  return (
    <>
      {/* Header */}
      <div className="bg-navy-mid pt-28 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-mid" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
            <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
            <span>/</span>
            <span className="text-white">Semua Unit</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Koleksi Lengkap</div>
            <h1 className="section-title text-5xl">Semua Unit Kami</h1>
            <p className="section-subtitle max-w-lg">
              {cars.length} pilihan mobil premium tersedia. Temukan yang paling sesuai untuk perjalanan Anda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="bg-navy/95 backdrop-blur-xl border-b border-white/[0.06] sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Cari mobil..."
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all pr-9"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30">🔍</span>
            </div>

            {/* Type filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    activeFilter === cat.id
                      ? 'bg-gold border-gold text-navy'
                      : 'bg-transparent border-white/15 text-white/55 hover:border-gold/40'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white/70 outline-none focus:border-gold transition-all ml-auto"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{ background: '#0f2040' }}
            >
              <option value="default">Urutan Default</option>
              <option value="price-asc">Harga: Termurah</option>
              <option value="price-desc">Harga: Termahal</option>
              <option value="name">Nama A–Z</option>
              <option value="capacity">Kapasitas Terbesar</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-navy-mid py-12 min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Count */}
          <div className="flex items-center justify-between mb-7">
            <p className="text-white/50 text-sm">
              Menampilkan <span className="text-gold font-semibold">{filtered.length}</span> dari {cars.length} unit
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((car, i) => (
                <CarCard key={car.id} car={car} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="font-display text-xl text-white mb-2">Tidak ada hasil</h3>
              <p className="text-white/40 mb-6">Coba ubah kata kunci atau filter pencarian Anda.</p>
              <button
                onClick={() => { setSearch(''); setActiveFilter('all'); setSortBy('default') }}
                className="btn-primary px-6 py-2.5 text-sm"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
