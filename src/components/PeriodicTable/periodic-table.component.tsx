import * as SC from './periodic-table.styles'
import { IAtom } from '../../models/atom'
import { Atom } from '../../components'
import { Size } from '../../models/styles'
interface PeriodicTableProps {
  elements: IAtom[]
  size?: Size
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  elements,
  size
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
            size={size}
          />
        )
      })}
    </SC.PeriodicTableContainer>
  )
}

export default PeriodicTable
