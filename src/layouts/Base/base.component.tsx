import * as SC from './base.styles'
import { Header } from '../../components'
import useDarkMode from '../../hooks/use-dark-theme'

const Base: React.FC = ({ children }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <SC.Wrapper isDarkMode={isDarkMode}>
      <Header title="quimicAR" />
      <SC.Main>{children}</SC.Main>
    </SC.Wrapper>
  )
}

export default Base
