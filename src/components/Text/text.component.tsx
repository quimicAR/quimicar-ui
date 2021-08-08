import { TextSize, Weight } from 'models/styles'
import * as SC from './text.styles'

interface TextProps {
  size?: TextSize
  color?: string
  weight?: Weight
  text?: string
}

const Text: React.FC<TextProps> = ({
  size,
  weight = 'light',
  color,
  text,
  children
}) => {
  return (
    <SC.Text fontSize={size as TextSize} color={color} weight={weight}>
      {text}
      {children}
    </SC.Text>
  )
}

export default Text
