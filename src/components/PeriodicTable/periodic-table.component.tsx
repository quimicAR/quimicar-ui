import * as SC from './periodic-table.styles'
import { IElement } from '../../models/element'
import { Size } from '../../styles/styles'
import loadable from '@loadable/component'

const Atom = loadable(() => import('../Atom/atom.component'))

interface PeriodicTableProps {
  elements: IElement[]
  size: Size
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({
  elements,
  size
}): JSX.Element => {
  return (
    <SC.PeriodicTableContainer size={size}>
      {elements.map((element: IElement) => {
        const { id, name, number, symbol, category, xpos, ypos, enabled } =
          element
        if (enabled)
          return (
            <Atom
              key={id}
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
