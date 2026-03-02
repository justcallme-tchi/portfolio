/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        bg: '#080b0f',
        surface: '#0d1117',
        card: '#111820',
        border: '#1e2d3d',
        accent: '#39ff8f',
        accent2: '#00bfff',
        accent3: '#ff6b6b',
        muted: '#64748b',
        dim: '#334155',
      },
      animation: {
        'blink': 'blink 1.5s infinite',
        'ticker': 'ticker 20s linear infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'glow-pulse': {
          '0%,100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
