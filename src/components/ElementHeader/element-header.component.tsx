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
  height?: string
}

const ElementHeader: React.FC<ElementHeaderProps> = ({
  category,
  element_img,
  atomic_mass,
  name,
  number,
  symbol,
  height
}) => {
  const formatedCategory = formatCategory(category)

  return (
    <SC.ElementHeaderContainer
      group={formatedCategory}
      elementUrl={element_img}
      height={height}
    >
      <SC.ElementSymbol group={formatedCategory}>
        <div className="self-end">
          <Text size="md" color="var(--color-light)">
            {number}
          </Text>
        </div>
        <Text size="xxxlg" weight="medium" color="var(--color-light)">
          {symbol}
        </Text>
        <Text size="lg" weight="light" color="var(--color-light)">
          {name}
        </Text>
        <Text
          size="md"
          weight="light"
          color="var(--color-light)"
          className="whitespace-nowrap overflow-ellipsis"
        >
          {atomic_mass} (g/mol)
        </Text>
      </SC.ElementSymbol>
      <div className="flex flex-col justify-start h-36">
        <SC.ElementCategory group={formatedCategory}>
          <Text size="md" weight="light" color="var(--color-light)">
            {category.toUpperCase()}
          </Text>
        </SC.ElementCategory>
      </div>
    </SC.ElementHeaderContainer>
  )
}

export default ElementHeader
