/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '50': '50',
        '100': '100',
        '150': '150',
        '200': '200',
        '250': '250',
      },
      keyframes: {
        'jump-in': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'jump-in': 'jump-in 3s infinite', // You can adjust the duration and timing here
      },
    },
  },
  plugins: [],
}