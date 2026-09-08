/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#e6f4ff',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0066cc',  /* Exact vibrant royal blue from uploaded screenshots */
          700: '#063970',  /* Deep navy primary from screenshots */
          800: '#072e5b',
          900: '#051f3e',
        },
        ink: {
          DEFAULT: '#061f3d', /* Deep navy heading text from screenshots */
          soft: '#64748b',    /* Muted body text */
          muted: '#94a3b8',
        },
        pill: {
          bg: '#f0f8ff',
          text: '#0066cc',
          border: '#dbeafe',
        },
        fit: {
          bg: '#e6fbf3',
          text: '#059669',
          border: '#a7f3d0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'card-clean': '0 2px 12px rgba(2, 132, 199, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'hero-card': '0 20px 50px -10px rgba(2, 132, 199, 0.12), 0 1px 3px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
