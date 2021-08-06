import * as SC from './periodic-table.styles'
import { IAtom } from 'interfaces/atom'
import Atom from 'components/Atom/atom.component'

interface PeriodicTableProps {
  elements: IAtom[]
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  elements
}): JSX.Element => {
  return (
    <SC.PeriodicTableContainer>
      {elements.map((element: IAtom) => {
        const { name, number, symbol, category, xpos, ypos } = element
        return (
          <Atom
            key={name}
            atomName={name}
            atomSymbol={symbol}
            atomicNumber={number}
            atomGroup={category}
            position={{ xPos: xpos, yPos: ypos }}
          />
        )
      })}
    </SC.PeriodicTableContainer>
  )
}

export default PeriodicTable
