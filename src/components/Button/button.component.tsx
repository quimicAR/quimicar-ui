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
  className?: string
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => {
  const { onClick, label, color, isLink, disabled, type, className } = props
  const { isDarkMode } = useDarkMode()

  return (
    <SC.Button
      isDarkMode={isDarkMode}
      ref={ref as RefObject<HTMLButtonElement>}
      onClick={onClick}
      isLink={isLink}
      color={color}
      disabled={disabled}
      type={type}
      className={className}
    >
      {label}
    </SC.Button>
  )
})

Button.displayName = 'Button'

export default Button
