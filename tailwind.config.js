const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
