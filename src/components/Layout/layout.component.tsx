import * as SC from './layout.styles'
import Header from 'components/Header/header.component'
import useDarkMode from 'hooks/use-dark-theme'
const Layout: React.FC = ({ children }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <SC.Wrapper isDarkMode={isDarkMode}>
      <Header title="quimicAR" />
      {children}
    </SC.Wrapper>
  )
}

export default Layout
