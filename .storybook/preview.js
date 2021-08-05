import { GlobalStyles } from '../src/styles/globalStyle'
import { ThemeProvider } from '../src/hooks/use-theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
