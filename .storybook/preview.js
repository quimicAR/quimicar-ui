import { GlobalStyles } from '../src/styles/globalStyle'
import { ThemeProvider } from '../src/hooks/use-theme'
import { AuthProvider } from '../src/contexts/auth-context'
import { Base } from '../src/layouts'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <AuthProvider>
        <Base>
          <GlobalStyles />
          <Story />
        </Base>
      </AuthProvider>
    </ThemeProvider>
  )
]
