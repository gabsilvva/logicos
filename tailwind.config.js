/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green': '#44BD32',
        'dark-green': '#399C2A',
        'light-green': '#F3FCF3',
        'black': '#171717',
        'gray': '#7C7E80',
        'light-gray': '#DCDCDC',
        'white': '#FFFFFF'
      },
      screens: {
        md: { 'max': '1440px' },
        sm: { 'max': '1024px' }
      },
      extend: {
        padding: {
          'md': '48px',
          'sm': '24px',
          'top': '160px',
          'topm': '120px'
        }
      }
    }
}  