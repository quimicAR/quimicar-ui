import React, { RefObject } from 'react'
import { IconType } from 'react-icons'
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
  icon?: IconType | JSX.Element
}

const Button: React.FC<ButtonProps> = React.forwardRef((props, ref) => {
  const { onClick, label, color, isLink, disabled, type, className, icon } =
    props
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
      className={className || 'w-full'}
    >
      {icon && icon}
      {label}
    </SC.Button>
  )
})

Button.displayName = 'Button'

export default Button
