/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        // https://coolors.co/272838-5d536b-7d6b91-989fce-347fc4 each color is in the url
        'raisin-black': '#272838',
	'english-violet': '#5d536b',
	'pomp-and-power': '#7d6b91',
	'cool-gray': '#989fce',
	'steel-blue': '#347fc4',
      }
    },
  },
  plugins: [],
}
