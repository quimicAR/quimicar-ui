import { DefaultTheme } from 'styled-components'

export const SCTheme = (isDarkMode: boolean): DefaultTheme => ({
  pallete: {
    bg: isDarkMode ? 'var(--color-dark)' : 'var(--color-light)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-dark)'
  },
  fonts: {
    color: isDarkMode ? 'var(--color-light)' : 'var(--color-dark)',
    sizes: {
      xsm: '0.5rem',
      sm: '0.625rem',
      md: '0.875rem',
      lg: '1.125rem',
      xlg: '1.75rem',
      xxlg: '2.0rem',
      xxxlg: '2.75rem'
    },
    weight: {
      xlight: 100,
      light: 400,
      medium: 500,
      bold: 700
    }
  },
  sizes: {
    xsm: '45px',
    sm: '55px',
    md: '60px',
    lg: '75px'
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
