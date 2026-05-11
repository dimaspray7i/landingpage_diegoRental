import { useState } from 'react'
import { motion } from 'framer-motion'
import { cars, WA_NUMBER, buildWAMessage } from '../data/cars'

export default function BookingForm() {
  const today = new Date().toISOString().split('T')[0]
  const [form, setForm] = useState({
    nama: '',
    wa: '',
    tanggal: '',
    durasi: '',
    mobil: '',
    layanan: 'Dengan Driver',
    catatan: '',
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const set = (key, val) => {
    setForm(f => ({ ...f, [key]: val }))
    if (errors[key]) setErrors(e => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.nama.trim()) e.nama = 'Nama wajib diisi'
    if (!form.tanggal) e.tanggal = 'Tanggal wajib dipilih'
    if (!form.durasi || Number(form.durasi) < 1) e.durasi = 'Durasi minimal 1 hari'
    if (!form.mobil) e.mobil = 'Pilih mobil terlebih dahulu'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitting(true)

    const pesan = encodeURIComponent(
      `Halo Diego Rental 👋, saya ingin booking mobil:\n\n` +
      `👤 Nama: ${form.nama}\n` +
      `📱 WhatsApp: ${form.wa || '-'}\n` +
      `🚗 Mobil: ${form.mobil}\n` +
      `📅 Tanggal: ${form.tanggal}\n` +
      `⏱️ Durasi: ${form.durasi} hari\n` +
      `🔑 Tipe: ${form.layanan}\n` +
      (form.catatan ? `📝 Catatan: ${form.catatan}\n` : '') +
      `\nMohon konfirmasinya, terima kasih 🙏`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${pesan}`, '_blank')
    setTimeout(() => setSubmitting(false), 1000)
  }

  const inputClass = (key) =>
    `w-full bg-white/[0.06] border ${errors[key] ? 'border-red-400' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-sm font-sans placeholder-white/30 outline-none focus:border-gold focus:bg-gold/[0.04] focus:ring-2 focus:ring-gold/10 transition-all duration-200`

  return (
    <motion.div
      className="glass-card p-7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="font-display text-2xl font-bold text-white mb-6">Form Booking</h3>

      <div className="space-y-4">
        {/* Nama */}
        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Nama Lengkap *</label>
          <input
            type="text"
            className={inputClass('nama')}
            placeholder="Masukkan nama lengkap Anda"
            value={form.nama}
            onChange={e => set('nama', e.target.value)}
          />
          {errors.nama && <p className="text-red-400 text-xs mt-1">{errors.nama}</p>}
        </div>

        {/* WA */}
        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Nomor WhatsApp</label>
          <input
            type="tel"
            className={inputClass('wa')}
            placeholder="08xxxxxxxxxx"
            value={form.wa}
            onChange={e => set('wa', e.target.value)}
          />
        </div>

        {/* Tanggal & Durasi */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Tanggal Mulai *</label>
            <input
              type="date"
              className={inputClass('tanggal')}
              min={today}
              value={form.tanggal}
              onChange={e => set('tanggal', e.target.value)}
            />
            {errors.tanggal && <p className="text-red-400 text-xs mt-1">{errors.tanggal}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Durasi (Hari) *</label>
            <input
              type="number"
              className={inputClass('durasi')}
              placeholder="1"
              min="1"
              value={form.durasi}
              onChange={e => set('durasi', e.target.value)}
            />
            {errors.durasi && <p className="text-red-400 text-xs mt-1">{errors.durasi}</p>}
          </div>
        </div>

        {/* Mobil */}
        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Pilih Mobil *</label>
          <select
            className={inputClass('mobil')}
            value={form.mobil}
            onChange={e => set('mobil', e.target.value)}
          >
            <option value="">-- Pilih Mobil --</option>
            {cars.filter(c => c.available).map(c => (
              <option key={c.id} value={`${c.name} ${c.year}`} style={{ background: '#0a1628' }}>
                {c.name} {c.year} — Rp {c.priceFormatted}/hari
              </option>
            ))}
          </select>
          {errors.mobil && <p className="text-red-400 text-xs mt-1">{errors.mobil}</p>}
        </div>

        {/* Layanan */}
        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Tipe Layanan</label>
          <div className="grid grid-cols-2 gap-3">
            {['Dengan Driver', 'Lepas Kunci'].map(opt => (
              <button
                key={opt}
                type="button"
                onClick={() => set('layanan', opt)}
                className={`py-3 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  form.layanan === opt
                    ? 'bg-gold border-gold text-navy'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-gold/40'
                }`}
              >
                {opt === 'Dengan Driver' ? '👨‍✈️' : '🔑'} {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Catatan */}
        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5 tracking-wide">Catatan Tambahan</label>
          <textarea
            className={`${inputClass('catatan')} resize-none`}
            placeholder="Tujuan, permintaan khusus, dll..."
            rows={3}
            value={form.catatan}
            onChange={e => set('catatan', e.target.value)}
          />
        </div>

        {/* Submit */}
        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full btn-wa justify-center py-4 text-base rounded-xl mt-2 disabled:opacity-60"
          whileTap={{ scale: 0.98 }}
        >
          {submitting ? (
            <span className="flex items-center gap-2">cc
              <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              Membuka WhatsApp...
            </span>
          ) : (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Lanjutkan via WhatsApp
            </>
          )}
        </motion.button>

        <p className="text-center text-xs text-white/30">
          🔒 Data Anda aman. Kami tidak menyimpan informasi pribadi Anda.
        </p>
      </div>
    </motion.div>
  )
}
