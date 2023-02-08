/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['"Poppins"', 'sans-serif'],
      },

      spacing: {
        '112': '28rem',
        '144': '36rem',
      }
    },
  },
  plugins: [],
};
