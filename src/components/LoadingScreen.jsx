import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-navy z-[9999] flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
      >
        {/* Logo */}
        <motion.div
          className="font-display text-4xl font-bold text-gold mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Drive<span className="text-white">Elite</span>
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-navy-light rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #c9a84c, #e2c278, #c9a84c)', backgroundSize: '200%' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-white/40 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Premium Car Rental
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
