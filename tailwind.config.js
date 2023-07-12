/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "brown": {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832',
        },
    },
    boxShadow: {
      'custom-shadow': '0px 1px 10px 0px rgba(0,0,0,0.05)',
    },
    borderRadius: {
      '4xl':'2rem'
    },
    fontFamily:{
      "Dana":"Dana",
      "DanaMedium":"Dana Medium",
      "DanaDemiBolid":"Dana DemiBolid",
      "MorabbaLight":"Morabba Light",
      "MorabbaMedium":"Morabba Medium",
      "MorabbaBold":"Morabba Bold",
    },
    },
  },
  plugins: [],
}

