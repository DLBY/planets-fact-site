/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      blue: {
        dark: '#070724',
        DEFAULT: '#2d68f0',
        light: '#419EBB',
      },
      purple: {
        DEFAULT: '#6f2ed6',
        light: '#38384F',
      },
      gray: {
        DEFAULT: '#838391',
        secondary: '#979797',
      },

      yellow: '#EDA249',
      red: '#D83A34',
      orange: {
        DEFAULT: '#D14C32',
        light: '#CD5120',
      },
      cyan: '#1ec2a4',
    },
    fontFamily: {
      sans: ['Spartan-Regular', 'sans-serif'],
      serif: ['Antonio-Medium', 'serif'],
    },
    fontSize: {
      xxs: '0.5625rem',
      xs: '0.6875rem',
      sm: '0.8rem',
      xsm: '0.9375rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.75rem',
      '4xl': '2.5rem',
      '5xl': '305.2rem',
    },
    letterSpacing: {
      tightest: '-1.05px',
    },
    lineHeight: {
      medium: '22px',
    },
    extend: {
      content: {
        stars: 'url(/src/assets/icons/background-stars.svg)',
        chevron: 'url(/src/assets/icons/icon-chevron.svg)',
      },
    },
  },
};
