/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        '28px': '28px',
      },
      lineHeight: {
        '42px': '42px',
      },
      textColor: {
        'united': '#0A3161',
        'states': '#B31942',
      },
    },
  },
  plugins: [],
}
