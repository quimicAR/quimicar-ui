// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/contexts/**/*.{js,ts,jsx,tsx}',
    './src/helpers/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/models/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/services/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}'
  ],
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
        100: '#E8E8E9',
        50: '#FAF9FA'
      },
      blue: colors.sky,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      white: colors.white
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
        'spin-slow': 'spin 7s linear infinite'
      },
      width: {
        18: '4.5rem'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
      scale: ['group-hover'],
      width: ['responsive', 'hover', 'focus']
    }
  },
  plugins: []
}
