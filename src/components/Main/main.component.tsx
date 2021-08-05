import PeriodicTable from 'components/PeriodicTable/periodic-table.component'
import useDarkMode from 'hooks/use-dark-theme'
import { IAtom } from 'interfaces/atom'
import Header from '../../components/Header/header.component'
import * as SC from './main.styles'

interface MainProps {
  elements: IAtom[]
}

const Main: React.FC<MainProps> = ({ elements }) => {
  const { isDarkMode } = useDarkMode()
  return (
    <SC.Wrapper isDarkMode={isDarkMode}>
      <Header title="quimicAR" />
      <PeriodicTable elements={elements} />
    </SC.Wrapper>
  )
}

export default Main
