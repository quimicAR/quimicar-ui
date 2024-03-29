import { TextSize, Weight } from 'styles/styles'
import * as SC from './text.styles'

interface TextProps {
  size?: TextSize
  color?: string
  weight?: Weight
  text?: string
  className?: string
}

const Text: React.FC<TextProps> = ({
  size,
  weight = 'light',
  color,
  text,
  children,
  className
}) => {
  return (
    <SC.Text
      fontSize={size as TextSize}
      color={color}
      weight={weight}
      className={className}
    >
      {text}
      {children}
    </SC.Text>
  )
}

export default Text
