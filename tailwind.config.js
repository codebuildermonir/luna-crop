/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.25em', 
      },
      backgroundImage:{
       'checkbox-bg': 'url("/src/assets/icons/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg")',
       'custom-gradient': 'linear-gradient(345deg, #46a16f, #31c48d)',

      },
      boxShadow: {
        'btn-shadow': '0 0 64px 0 rgba(49, 196, 141, 0.42)', 
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
      'customGray-500':'#9B9B9B',
      'customGray-400':'#313236',
      'customGray-300':'#E6E8EA',
      'customGray-200':'#6B7280',
      'customGray-100':'#F3F4F6',
      'customGray-50':'#D8D8D8',
    },
    screens: {
      'custom-lg': '820px',
    }
  },
  },
  plugins: [],
}

