/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#0f2040',
          light: '#1a3260',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c278',
          pale: '#f5e6ba',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.5)' },
          '50%': { boxShadow: '0 0 0 16px rgba(201,168,76,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c, #e2c278, #c9a84c)',
        'gradient-navy': 'linear-gradient(135deg, #0a1628, #1a3260)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      boxShadow: {
        'gold': '0 10px 40px rgba(201,168,76,0.25)',
        'gold-lg': '0 20px 60px rgba(201,168,76,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
