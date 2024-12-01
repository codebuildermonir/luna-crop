/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
      'customGreen-900':'#014737',
      'customGreen-800':'#03543F',
      'customGreen-700':'#046C4E',
      'customGreen-600':'#057A55',
      'customGreen-500':'#0E9F6E',
      'customGreen-400':'#31C48D',
      'customGreen-300':'#84E1BC',
      'customGreen-200':'#BCF0DA',
      'customGreen-100':'#DEF7EC',
      'customGreen-50':'#F3FAF7',
      'customGray-900':'#1F2A37',
      'customGray-300':'#E6E8EA',
      'customGray-200':'#6B7280',
    },
  },
  },
  plugins: [],
}

