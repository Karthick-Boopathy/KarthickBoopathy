/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        blueprint: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          glow: '#3B82F6',
        },
        draft: {
          canvas: '#F8FAFC',
          'canvas-dark': '#0B0F1A',
          surface: '#FFFFFF',
          'surface-dark': '#111827',
          'surface-elevated': '#F1F5F9',
          'surface-elevated-dark': '#1A2332',
          line: '#E2E8F0',
          'line-dark': '#1E293B',
          'line-strong': '#CBD5E1',
          'line-strong-dark': '#334155',
          ink: '#0F172A',
          'ink-dark': '#F1F5F9',
          body: '#334155',
          'body-dark': '#CBD5E1',
          muted: '#64748B',
          'muted-dark': '#94A3B8',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'rotate-gradient': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
      },
      animation: {
        shimmer: 'shimmer 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'rotate-gradient': 'rotate-gradient 4s linear infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.15)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.2)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.25)',
        'glow-xl': '0 0 80px rgba(59, 130, 246, 0.15)',
      },
    },
  },
  plugins: [],
}
