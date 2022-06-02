const colors = require('tailwindcss/colors');

const primary = colors.cyan;
const neutral = colors.zinc;
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary,
        neutral,
        dblack: neutral["800"],
        dwhite: neutral["200"],
      }
    },
  },
  plugins: [],
};
