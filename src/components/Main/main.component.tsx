import PeriodicTable from 'components/PeriodicTable/periodictable.component'
import { IAtom } from 'interfaces/atom'
import Header from '../../components/Header/header.component'
import * as SC from './main.styles'

interface MainProps {
  elements: IAtom[]
}

const Main: React.FC<MainProps> = ({ elements }) => {
  return (
    <SC.Wrapper>
      <Header title="quimicAR" />
      <PeriodicTable elements={elements} />
    </SC.Wrapper>
  )
}

export default Main
