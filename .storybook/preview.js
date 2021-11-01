import { GlobalStyles } from '../src/styles/globalStyle'
import { ThemeProvider } from '../src/hooks/use-theme'
import { AuthProvider } from '../src/contexts/auth-context'
import { Base } from '../src/layouts'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <MemoryRouterProvider>
        <AuthProvider>
          <Base>
            <GlobalStyles />
            <Story />
          </Base>
        </AuthProvider>
      </MemoryRouterProvider>
    </ThemeProvider>
  )
]
