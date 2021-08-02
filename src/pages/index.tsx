import Main from 'components/Main/main.component'
import { ThemeProvider } from '../hooks/use-theme'

export default function Home() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}
