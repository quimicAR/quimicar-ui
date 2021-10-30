import * as SC from './admin.styles'
import { Header } from '../../components'
import useDarkMode from '../../hooks/use-dark-theme'
import Sidebar from 'components/Sidebar/sidebar.component'

const Admin: React.FC = ({ children }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <SC.Wrapper isDarkMode={isDarkMode}>
      <Header title="quimicAR" showTitle={false} />
      <Sidebar />
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

export default Admin
