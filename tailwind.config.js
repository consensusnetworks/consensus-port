module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [

  ],
  theme: {
    colors: {
      'primary': '#F36F27',
      'secondary': '#f3f4f6',
      'grey': '#898484',
      'white': '#fff',
    },
    extend: {
      transitionDuration: {
        '10000': '10000ms',
      }
    }
  }
}
