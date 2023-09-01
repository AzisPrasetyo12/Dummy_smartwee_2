/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false,
  },
  separator: "_",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': 'var(--main-color)',
      },
      zIndex: {
        '1': '1',
      },
      fontFamily: {
        'tilt': ['Tilt Prism', 'cursive'],
      }
    },
  },
  plugins: [],
}
