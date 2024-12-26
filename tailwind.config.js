/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },

      backgroundImage:{
       'checkbox-bg': 'url("/src/assets/icons/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg")',
       'image-bg': 'url("/src/assets/images/bg-im-2.png")',
       'image-bg2': 'url("/src/assets/images/bg-img.png")',
       'custom-gradient': 'linear-gradient(345deg, #46a16f, #31c48d)',

      },
      boxShadow: {
        'btn-shadow': '0 0 64px 0 rgba(49, 196, 141, 0.42)', 
        'btn-shadow2': '0 20px 36px 0 rgba(49, 196, 141, 0.19)', 
        'boxShadow': '0 0 55px 0 rgba(0, 0, 0, 0.06)',
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
    fontSize: {
      'customSize-28': '1.75rem',
      'customSize-32': '2rem',
      'customSize-10': '0.625rem',
      
    },
    lineHeight: {
      'cL-27': '1.688rem',
      'cL-42': '2.625rem',
      'cL-39': '2.476rem',
      'cL-17': '1.083rem',
      'cL-35': '2.196rem',
      'cL-22': '1.412rem',
      'cL-14': '0.894rem',
      'cL-29': '1.823rem',
      'cL-21': '1.313rem',
      
    },
    letterSpacing: {
      'extra-wide': '0.25em', 
    },
    screens: {
      'custom-lg': '820px',
      'custom-xl': '1100px',
      
    }
  },
  },
  plugins: [],
}

