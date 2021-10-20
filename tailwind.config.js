// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#202225',
      secondary: '#5865f2',
      gray: colors.trueGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia
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
