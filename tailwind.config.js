/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  presets: [require('./src/data/theme.ts')],
  theme: {},
  plugins: [],
  darkMode: 'class',
};
