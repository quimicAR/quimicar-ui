import { Text } from '../../components'
import { formatCategory } from '../../helper/format-category'
import * as SC from './element-header.styles'

interface ElementHeaderProps {
  category: string
  element_img: string
  number: number
  symbol: string
  name: string
  atomic_mass: number
}

const ElementHeader: React.FC<ElementHeaderProps> = ({
  category,
  element_img,
  atomic_mass,
  name,
  number,
  symbol
}) => {
  const formatedCategory = formatCategory(category)

  return (
    <SC.ElementHeaderContainer
      group={formatedCategory}
      elementUrl={element_img}
    >
      <SC.ElementSymbol group={formatedCategory}>
        <div style={{ alignSelf: 'flex-end', padding: '0px 14px' }}>
          <Text size="lg" color="var(--color-light)">
            {number}
          </Text>
        </div>
        <Text size="xxxlg" weight="bold" color="var(--color-light)">
          {symbol}
        </Text>
        <Text size="lg" weight="light" color="var(--color-light)">
          {name}
        </Text>
        <Text size="md" weight="light" color="var(--color-light)">
          {atomic_mass.toFixed(4)} (g/mol)
        </Text>
      </SC.ElementSymbol>
      <SC.ElementHeaderInfoContainer>
        <SC.ElementCategory group={formatedCategory}>
          <Text size="md" weight="light" color="var(--color-light)">
            {category.toUpperCase()}
          </Text>
        </SC.ElementCategory>
      </SC.ElementHeaderInfoContainer>
    </SC.ElementHeaderContainer>
  )
}

export default ElementHeader
