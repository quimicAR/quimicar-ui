import React from 'react'
import * as SC from './atom.styles'
import useDarkMode from '../../hooks/use-dark-theme'
import { formatCategory } from '../../helper/format-category'
import Link from 'next/link'
import { Size } from 'models/styles'
interface AtomProps {
  atomName: string
  atomicNumber: number
  atomSymbol: string
  atomGroup: string
  position: {
    xPos: number
    yPos: number
  }
  size?: Size
}

const Atom: React.FC<AtomProps> = ({
  atomSymbol,
  atomicNumber,
  atomName,
  atomGroup,
  position: { xPos, yPos },
  size = 'sm'
}: AtomProps) => {
  const { isDarkMode } = useDarkMode()

  return (
    <Link href="/elements/[id]" as={`/elements/${atomicNumber}`}>
      <SC.AtomContainer
        style={{
          gridRow: yPos,
          gridColumn: xPos
        }}
        group={formatCategory(atomGroup)}
        isDarkMode={isDarkMode}
        size={size}
      >
        <SC.AtomicNumber>{atomicNumber}</SC.AtomicNumber>
        <SC.AtomSymbol>{atomSymbol}</SC.AtomSymbol>
        {size !== 'xsm' && <SC.AtomName>{atomName}</SC.AtomName>}
      </SC.AtomContainer>
    </Link>
  )
}

export default Atom
