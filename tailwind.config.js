/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        xspace: ['"XSpace"', 'sans-serif'], 

      },
      colors: {
        primary: '#caeb23',
        secondary: '#9f28e7',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
