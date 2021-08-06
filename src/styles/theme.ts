import { DefaultTheme } from 'styled-components'

export const SCTheme = (isDarkMode: boolean): DefaultTheme => ({
  pallete: {
    bg: isDarkMode ? 'var(--color-dark)' : 'var(--color-light)',
    primary: '#00ffff',
    secondary: 'var(--color-dark)'
  },
  fonts: {
    color: isDarkMode ? 'var(--color-light)' : 'var(--color-dark)',
    sizes: {
      xsm: '8px',
      sm: '10px',
      md: '14px',
      lg: '18px',
      xlg: '28px'
    },
    weight: {
      xlight: 100,
      light: 400,
      medium: 500,
      bold: 700
    }
  },
  elementsGroups: {
    alkalineEarthMetals: '#009cc7',
    alkaliMetals: '#fe1110',
    nobleGases: '#6f25a1',
    nonMetal: '#f5be25',
    metalloid: '#c41d3d',
    halogens: '#00803b',
    metals: '#35c6b0',
    transitionMetals: '#ff8000',
    lanthanoids: '#cf6142',
    actinoids: '#57733b',
    postTransitionMetals: '#006da4'
  }
})
