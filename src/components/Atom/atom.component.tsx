import { formatCategory } from 'helper/format-category'
import { useTheme } from 'hooks/use-theme'
import React from 'react'
import * as SC from './atom.styles'

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
  const { theme } = useTheme()
  return (
    <SC.AtomContainer
      style={{
        gridRow: yPos,
        gridColumn: xPos
      }}
      group={formatCategory(atomGroup)}
      themeProp={theme}
    >
      <SC.AtomicNumber>{atomicNumber}</SC.AtomicNumber>
      <SC.AtomSymbol>{atomSymbol}</SC.AtomSymbol>
      <SC.AtomName>{atomName}</SC.AtomName>
    </SC.AtomContainer>
  )
}

export default Atom
