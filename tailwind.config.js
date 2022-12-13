/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      serif: ['Outfit', 'serif'],
    },
    extend: {
      colors: {
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)', 
        darkBlue: 'hsl(218, 44%, 22%)',
      },
    },
  },
  plugins: [],
}
