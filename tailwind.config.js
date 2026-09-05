/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
          500: '#2563EB',
          600: '#0052CC',
          700: '#0043A8',
          800: '#003380',
        },
        draft: {
          canvas: '#F8FAFC',
          surface: '#FFFFFF',
          line: '#E2E8F0',
          'line-strong': '#CBD5E1',
          ink: '#0F172A',
          body: '#334155',
          muted: '#64748B',
        },
      },
    },
  },
  plugins: [],
}
