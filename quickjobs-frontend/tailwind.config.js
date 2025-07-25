/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cloud-burst': {
          50: '#f0f7fe',
          100: '#deecfb',
          200: '#c5e0f8',
          300: '#9ccdf4',
          400: '#6eb0ec',
          500: '#4b92e6',
          600: '#3676da',
          700: '#2d62c8',
          800: '#2b50a2',
          900: '#274681',
          950: '#1f3056',
        },
        buccaneer: {
          50: '#fcf4f4',
          100: '#f8e8e8',
          200: '#f4d4d4',
          300: '#eab7b7',
          400: '#dd8c8c',
          500: '#cd6666',
          600: '#b74b4b',
          700: '#993c3c',
          800: '#803434',
          900: '#582828',
          950: '#391616',
        },
        sangria: {
          50: '#ffeff0',
          100: '#ffdadc',
          200: '#ffbcc0',
          300: '#ff8d93',
          400: '#ff4c55',
          500: '#ff1521',
          600: '#ff000d',
          700: '#e4000c',
          800: '#bb000a',
          900: '#880209',
          950: '#550004',
        },
      },
      animation: {
        'option-animation':'option-animation 200ms ease forwards',
      },
      screens: {
        'xsm' : '350px',
        'xs' : '476px',
        'sm': '640px',
        'md':'768px',
        'bs':'900px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',

        '2xl-mx':{'max':'1535px'},
        'xl-mx':{'max':'1279px'},
        'lg-mx':{'max':'1023px'},
        'bs-mx':{'max':'899px'}
      }
    },
  },
  plugins: [],
};
