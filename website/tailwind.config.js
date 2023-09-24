/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: { max: '1024px' },
      md: { max: '744px' },
      s: { max: '595px' },
      xs: { max: '320px' },
    },
    colors: {
      transparent: 'transparent',
      gray: {
        clean: '#FFFFFF30',
        light: '#F6F6F6',
        medium: '#ECECEC',
        dark: '#72727240',
        bg: '#3A3A3A30',
      },
      black: { medium: '#565656', dark: '#3E3E3E' },
    },
    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
    },
    fontSize: {
      caption1: ['12px', '16px'],
      body3: ['14px', '18px'],
      body2: ['16px', '20px'],
      body1: ['18px', '22px'],
      h2: ['24px', '28px'],
      h1: ['36px', '50px'],
    },
    backdropBlur: {
      custom: '4px',
    },
    gridTemplateColumns: {
      list: 'repeat(auto-fit, minmax(180px, 240px))',
      book: '1fr',
    },
    gridTemplateRows: {
      book: 'max-content max-content minmax(1fr, max-content)',
    },
    gridAutoRows: {
      list: 'minmax(340px, max-content)',
    },
    extend: {
      width: {
        screen: ['100vw', '100dvw'],
      },
      height: {
        screen: ['100vh', '100dvh'],
      },
      keyframes: {
        movingFromRight: {
          '0%': { transform: 'translateX(16px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        movingLeft: {
          '0%': { transform: 'translateX(0px)', opacity: 1 },
          '100%': { transform: 'translateX(-16px)', opacity: 0 },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
