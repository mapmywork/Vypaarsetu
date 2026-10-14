/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1746A2',
          hover: '#123985',
          light: '#EEF3FD',
          subtle: '#E0EBFF',
        },
        navy: {
          DEFAULT: '#0D2340',
          light: '#16355F',
          dark: '#081628',
          muted: '#4B5565',
        },
        accent: {
          DEFAULT: '#19A783',
          hover: '#13896B',
          light: '#E8F7F2',
          subtle: '#CEEFE5',
        },
        surface: {
          DEFAULT: '#F3F6FB',
          card: '#FFFFFF',
          muted: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(13, 35, 64, 0.05), 0 1px 2px 0 rgba(13, 35, 64, 0.03)',
        'premium': '0 10px 25px -5px rgba(13, 35, 64, 0.06), 0 8px 10px -6px rgba(13, 35, 64, 0.04)',
        'premium-hover': '0 20px 30px -10px rgba(13, 35, 64, 0.12), 0 10px 15px -5px rgba(13, 35, 64, 0.06)',
      },
    },
  },
  plugins: [],
}
