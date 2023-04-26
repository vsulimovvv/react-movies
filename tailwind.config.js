/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {},
    theme: {
      colors: {},
      screens: {
        xl: { max: '1300px' },
        lg: { max: '992px' },
        md: { max: '767.98px' },
        sm: { max: '576px' },
        xs: { max: '359.98px' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
