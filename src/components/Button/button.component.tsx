import React, { RefObject } from 'react'
import useDarkMode from '../../hooks/use-dark-theme'
import * as SC from './button.styles'
interface ButtonProps {
  onClick?: () => void
  label: string
  color?: string
  isLink?: boolean
  disabled?: boolean
  type?: 'button' | 'reset' | 'submit'
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => {
  const {
    onClick,
    label,
    color = 'rgb(57,182,206)',
    isLink,
    disabled,
    type
  } = props
  const { isDarkMode } = useDarkMode()

  return (
    <SC.ButtonContainer
      isDarkMode={isDarkMode}
      color={color}
      isLink={isLink}
      disabled={disabled}
    >
      <SC.Button
        ref={ref as RefObject<HTMLButtonElement>}
        onClick={onClick}
        isLink={isLink}
        color={color}
        disabled={disabled}
        type={type}
      >
        {label}
      </SC.Button>
    </SC.ButtonContainer>
  )
})

Button.displayName = 'Button'

export default Button
