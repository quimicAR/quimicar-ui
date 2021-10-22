import React, { ChangeEvent, RefObject } from 'react'
import * as SC from './input.styles'
import useDarkMode from '../../hooks/use-dark-theme'
import { IconType } from 'react-icons'
import { FieldError } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'

interface InputProps {
  placeholder?: string
  type: 'text' | 'password' | 'email'
  value?: string
  icon?: IconType | JSX.Element
  name?: string
  error?: FieldError
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const { onChange, type, error, icon, name, placeholder, value } = props
  const { isDarkMode } = useDarkMode()

  return (
    <div className="flex flex-col w-full">
      <SC.InputContainer isDarkMode={isDarkMode}>
        <SC.Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          ref={ref as RefObject<HTMLInputElement>}
        />
        {icon && icon}
      </SC.InputContainer>
      {error?.message && (
        <SC.InputError>
          <FiAlertTriangle />
          {error?.message}
        </SC.InputError>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
