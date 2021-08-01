import React, { createContext, useContext, useState } from 'react'
import {
  ThemeContext as SCThemeContext,
  ThemeProvider as SCThemeProvider
} from 'styled-components'

export type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeState, setThemeState] = useState<Theme>('light')
  const setTheme = (theme: Theme) => setThemeState(theme)

  const SCTheme = (theme: Theme) => ({
    bg: theme === 'dark' ? '#181f27' : '#FAF9FA',
    text: theme === 'light' ? '#181f27' : '#FAF9FA',
    groups: {
      alkalineEarthMetals: '#009cc7'
    }
  })

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      <SCThemeProvider theme={SCTheme(themeState)}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider')
  }

  return context
}

// dark theme
// bg -> #181f27
// text -> #fff

// light theme
// bg -> #fff
// text -> #181f27

// GROUP OF ELEMENTS:
// Alkaline Earth Metals --> #009cc7
// Akali metal --> #fe1110
// noble gas --> #6f25a1
// nonmetal --> #f5be25
// metalloid --> #c41d3d
// halogen --> #00803b
// metal --> #35c6b0
// transition metal --> #ff8000
// lanthanoid --> #cf6142
// actinoid --> #57733b
// post-transition metal --> #006da4
