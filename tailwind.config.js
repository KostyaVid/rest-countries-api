/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      DarkBlue: 'hsl(209, 23%, 22%)',
      VeryDarkBlue: 'hsl(207, 26%, 17%)',
      VeryDarkBlue: 'hsl(200, 15%, 8%)',
      DarkGray: 'hsl(0, 0%, 52%)',
      VeryLightGray: 'hsl(0, 0%, 98%)',
      White: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      Nunito: ['Nunito Sans', 'sans-serif'],
    },
    fontWeight: { light: 300, semibold: 600, extrabold: 800 },
    boxShadow: {
      out: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
    },
  },
  darkMode: 'class',
  plugins: [],
};
