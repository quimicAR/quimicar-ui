import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { SCTheme } from '../styles/theme'

export type Theme = 'light' | 'dark'

interface IThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [themeState, setThemeState] = useState<Theme>('light')

  const setTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme)
    setThemeState(theme)
  }

  useEffect(() => {
    const themePersisted = localStorage.getItem('theme')
    if (themePersisted === null) {
      setTheme('light')
    } else {
      setTheme(themePersisted as Theme)
    }
  }, [themeState])

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
