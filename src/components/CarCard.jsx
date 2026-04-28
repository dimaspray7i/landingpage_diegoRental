import { motion } from 'framer-motion'
import { WA_NUMBER, buildWAMessage } from '../data/cars'

const badgeColors = {
  red: 'bg-red-500 text-white',
  gold: 'bg-gold text-navy',
  green: 'bg-emerald-500 text-white',
  blue: 'bg-blue-500 text-white',
}

export default function CarCard({ car, index = 0 }) {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWAMessage(car)}`

  return (
    <motion.div
      className="glass-card overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10] bg-navy-light">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

        {/* Badge */}
        {car.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full tracking-wide ${badgeColors[car.badgeColor] || badgeColors.gold}`}>
            {car.badge}
          </span>
        )}

        {/* Availability */}
        {!car.available && (
          <div className="absolute inset-0 bg-navy/75 flex items-center justify-center">
            <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Tidak Tersedia
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="mb-1">
          <h3 className="font-display text-lg font-bold text-white">{car.name}</h3>
          <p className="text-xs text-white/50 uppercase tracking-wide">
            {car.type.toUpperCase()} • {car.year} • {car.transmission}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2 my-3">
          {car.features.map((f, i) => (
            <span
              key={i}
              className="flex items-center gap-1 text-xs text-white/60 bg-white/5 px-2.5 py-1 rounded-full"
            >
              <span>{f.icon}</span>
              {f.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-white/45 leading-relaxed mb-4 line-clamp-2">
          {car.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.07]">
          <div>
            <p className="text-[10px] text-white/40 mb-0.5">Mulai dari</p>
            <p className="font-display text-xl font-bold text-gold">
              Rp {car.priceFormatted}
              <span className="font-sans text-xs font-normal text-white/40">/hari</span>
            </p>
          </div>

          {car.available ? (
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-gold text-navy text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gold"
              onClick={e => e.stopPropagation()}
            >
              📱 Booking
            </a>
          ) : (
            <span className="text-xs text-white/30 font-medium">Hubungi kami</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
