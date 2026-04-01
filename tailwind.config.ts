import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      colors: {
        terminal: {
          bg: '#0a0a0a',
          surface: '#111111',
          green: '#22c55e',
          'green-dim': '#16a34a',
          purple: '#a78bfa',
          amber: '#fbbf24',
          blue: '#60a5fa',
          cyan: '#22d3ee',
          muted: '#6b7280',
          border: '#1f2937',
          'border-bright': '#374151',
          red: '#f87171',
        }
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.2s ease-in',
        'slide-in': 'slideIn 0.15s ease-out',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideIn: { '0%': { opacity: '0', transform: 'translateY(4px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
} satisfies Config
