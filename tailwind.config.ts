import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#060608',
        surface:  '#0e0e12',
        border:   '#1a1a24',
        card:     '#0b0b10',
        accent:   '#ff3d5a',
        accent2:  '#ff9500',
        accent3:  '#00d4ff',
        muted:    '#5a5a70',
        green:    '#10b981',
      },
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'sans-serif'],
        heading: ['var(--font-unbounded)', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.4' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.4s ease both',
        pulse2: 'pulse 2s infinite',
      }
    },
  },
  plugins: [],
}
export default config
