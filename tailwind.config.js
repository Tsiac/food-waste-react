/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F0F7F4',
      'purple': '#270722',
      'grey': '#817F82',
      'yellow': '#F6AE2D',
      'yellowfade': '#ffe7a4',
      'green': '#7CB518',
      'greenhover': '#619506',
    },
    extend: {},
  },
  plugins: [],
}

