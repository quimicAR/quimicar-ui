import React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { SCTheme } from '../styles/theme'
import useDarkMode from './use-dark-theme'

export const ThemeProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useDarkMode()

  return (
    <SCThemeProvider theme={SCTheme(isDarkMode)}>{children}</SCThemeProvider>
  )
}
