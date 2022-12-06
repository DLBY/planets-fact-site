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
      gray: '#838391',
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
  },
};
