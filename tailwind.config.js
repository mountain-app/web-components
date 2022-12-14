/** @type {import('tailwindcss').Config} */

const theme = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#1b1f23',
      white: '#ffffff',
      brand: {
        primary: '#52b69a',
        accent: '#276er1',
      },
      gray: [
        '#fafbfc',
        '#f6f8fa',
        '#e1e4e8',
        '#d1d5da',
        '#959da5',
        '#6a737d',
        '#586069',
        '#444d56',
        '#2f363d',
        '#24292e',
      ],
      red: [
        '#fffbfa',
        '#fef3f2',
        '#fee4e2',
        '#fecdca',
        '#fda29b',
        '#f97066',
        '#f04438',
        '#d92d20',
        '#b42318',
        '#912018',
      ],
      yellow: [
        '#fffcf5',
        '#fffaeb',
        '#fef0c7',
        '#fedf89',
        '#fec84b',
        '#fdb022',
        '#f79009',
        '#dc6803',
        '#b54708',
        '#93370d',
      ],
      green: [
        '#f6fef9',
        '#ecfdf3',
        '#d1fadf',
        '#a6f4c5',
        '#6ce9a6',
        '#32d583',
        '#12b76a',
        '#039855',
        '#027a48',
        '#05603a',
      ],
    },
    screens: {
      sm: '544px',
      md: '768px',
      lg: '1012px',
      xl: '1280px',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      none: '0',
      DEFAULT: '1px',
      1.5: '1.5px',
    },
    spacing: {
      px: '1px',
      0: '0',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      56: '3.5rem',
      64: '4rem',
      96: '6rem',
      128: '8rem',
    },
  },
};

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [theme],
  theme: {},
  plugins: [],
  darkMode: 'class',
};
