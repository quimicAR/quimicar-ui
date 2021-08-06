import React from 'react'
import * as SC from './atom.styles'
import useDarkMode from 'hooks/use-dark-theme'
import { formatCategory } from 'helper/format-category'
import Link from 'next/link'

interface AtomProps {
  atomName: string
  atomicNumber: number
  atomSymbol: string
  atomGroup: string
  position: {
    xPos: number
    yPos: number
  }
}

const Atom: React.FC<AtomProps> = ({
  atomSymbol,
  atomicNumber,
  atomName,
  atomGroup,
  position: { xPos, yPos }
}: AtomProps) => {
  const { isDarkMode } = useDarkMode()
  return (
    <Link
      href={`/?id=${atomicNumber}`}
      // href={`/elements/[id]?id=${atomicNumber}`}
      as={`/elements/${atomicNumber}`}
    >
      <SC.AtomContainer
        style={{
          gridRow: yPos,
          gridColumn: xPos
        }}
        group={formatCategory(atomGroup)}
        isDarkMode={isDarkMode}
      >
        <SC.AtomicNumber>{atomicNumber}</SC.AtomicNumber>
        <SC.AtomSymbol>{atomSymbol}</SC.AtomSymbol>
        <SC.AtomName>{atomName}</SC.AtomName>
      </SC.AtomContainer>
    </Link>
  )
}

export default Atom
