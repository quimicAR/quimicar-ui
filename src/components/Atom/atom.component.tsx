import React from 'react'
import * as SC from './atom.styles'
import useDarkMode from '../../hooks/use-dark-theme'
import { formatCategory } from '../../helpers/format-category'
import Link from 'next/link'
import { Size } from '../../styles/styles'
import loadable from '@loadable/component'

const Text = loadable(() => import('../Text/text.component'))

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
        <div className="self-end">
          <Text size="sm">{atomicNumber}</Text>
        </div>
        <Text size="lg" weight="medium">
          {atomSymbol}
        </Text>
        {size !== 'xsm' && size !== 'sm' && (
          <Text size="sm" weight="light">
            {atomName}
          </Text>
        )}
      </SC.AtomContainer>
    </Link>
  )
}

export default Atom
