import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      sizes: {
        xsm: string
        sm: string
        md: string
        lg: string
        xlg: string
      }
      weight: {
        xlight: number
        light: number
        medium: number
        bold: number
      }
      color: string
    }
    pallete: {
      primary: string
      secondary: string
      bg: string
    }

    elementsGroups: {
      alkalineEarthMetals: string
      alkaliMetals: string
      nobleGases: string
      nonMetal: string
      metalloid: string
      halogens: string
      metals: string
      transitionMetals: string
      lanthanoids: string
      actinoids: string
      postTransitionMetals: string
    }
  }
}
