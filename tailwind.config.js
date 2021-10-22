// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#60A5FA',
      secondary: '#1C1E21',
      gray: {
        900: '#202225',
        800: '#4C4E50',
        700: '#626466',
        600: '#797A7C',
        500: '#8F9092',
        400: '#A5A6A7',
        300: '#BCBCBD',
        200: '#D2D2D3',
        100: '#E8E8E9'
      },
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled']
    }
  },
  plugins: []
}
