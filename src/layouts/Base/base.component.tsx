import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth-context'
import * as SC from './base.styles'
import useDarkMode from 'hooks/use-dark-theme'
import { Header, Sidebar } from 'components'

const Base: React.FC = ({ children }) => {
  const { isAdmin } = useContext(AuthContext)
  const { isDarkMode } = useDarkMode()

  return (
    <SC.Wrapper isDarkMode={isDarkMode}>
      <Header title="quimicAR" showTitle={!isAdmin} />
      {isAdmin && <Sidebar />}
      <SC.Main
        style={{ gridArea: 'main' }}
        className={`h-full ${
          isDarkMode ? 'bg-secondary' : 'bg-gray-100 bg-opacity-50'
        } `}
      >
        {children}
      </SC.Main>
    </SC.Wrapper>
  )
}

export default Base
