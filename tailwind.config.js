/** @type {import('tailwindcss').Config} */
/* leading 5, 6, 7, 8, 10 */
/* spaces 1.5, 2.5, 5, 10, 12, 72 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      creattion: ['Creattion', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
      },
    },
    extend: {
      screens: {
        '3xl': { min: '1728px' },
      },
      lineHeight: {
        5: '21px',
        7: '27px',
        8: '33px',
        10: '39px',
        11: '51px',
        12: '75px',
      },
    },
    colors: {
      transparent: 'transparent',
      primary: '#72ADD7',
      secondary: '#172066',
      tertiary: '#EDF2F6',
      black: {
        primary: '#000000',
        secondary: '#3B3E44',
      },
      gray: '#84878B',
      white: {
        primary: '#ffffff',
        secondary: '#F1F5F9',
        tertiary: '#EDF2F6',
      },
      red: '#F36A6A',
      orange: '#FF7A30',
      yellow: '#F8BB54',
      green: '#42C15F',
    },
    fontSize: {
      sm: ['14px', { lineHeight: '21px', fontWeight: '400' }],
      base: ['16px', { lineHeight: '24px', fontWeight: '400' }],
      lg: ['18px', { lineHeight: '27px', fontWeight: '600' }],
      xl: ['22px', { lineHeight: '33px', fontWeight: '600' }],
      '2xl': ['24px', { lineHeight: '36px', fontWeight: '600' }],
      '3xl': ['26px', { lineHeight: '39px', fontWeight: '600' }],
      '4xl': ['34px', { lineHeight: '51px', fontWeight: '700' }],
      '5xl': ['50px', { lineHeight: '75px', fontWeight: '700' }],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
    function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('third', '&:nth-child(3n)');
      addVariant('fourth', '&:nth-child(3n+1)');
    },
  ],
};
