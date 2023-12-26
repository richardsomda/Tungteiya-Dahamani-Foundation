/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ourblack': '#2F2F2F',
        'ouryellow': '#F9EDC3',
        'ourpink': '#FF6D6D',
      }
    },
  },
  plugins: [],
}
