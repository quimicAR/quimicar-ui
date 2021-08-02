import { Theme } from 'hooks/use-theme'
import { DefaultTheme } from 'styled-components'

export const SCTheme = (theme: Theme): DefaultTheme => ({
  pallete: {
    bg: theme === 'dark' ? '#181f27' : '#FAF9FA',
    primary: '#00ffff',
    secondary: '#181f27'
  },
  fonts: {
    color: theme === 'light' ? '#181f27' : '#FAF9FA',
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
