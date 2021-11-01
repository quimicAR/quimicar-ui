import React, { ChangeEvent, RefObject } from 'react'
import * as SC from './input.styles'
import useDarkMode from '../../hooks/use-dark-theme'
import { IconType } from 'react-icons'
import { FieldError } from 'react-hook-form'
import { FiAlertTriangle } from 'react-icons/fi'

interface InputProps {
  placeholder?: string
  type: 'text' | 'password' | 'email' | 'select' | 'checkbox' | 'textarea'
  options?: Array<{ id: string; name: string }>
  value?: string
  icon?: IconType | JSX.Element
  name?: string
  error?: FieldError
  label?: string
  rows?: number
  className?: string
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}

const Input: React.FC<InputProps> = React.forwardRef((props, ref) => {
  const {
    onChange,
    type,
    error,
    icon,
    name,
    placeholder,
    value,
    label,
    options,
    className,
    rows
  } = props
  const { isDarkMode } = useDarkMode()

  return (
    <div className="flex flex-col w-full">
      {label && type !== 'checkbox' && (
        <label
          className={`text-sm text-left font-medium text ${
            isDarkMode ? 'text-gray-100' : 'text-gray-700'
          }`}
        >
          {label}
        </label>
      )}
      {type === 'select' && (
        <SC.InputContainer isDarkMode={isDarkMode}>
          <select
            className={`w-full h-full bg-opacity-0 text-sm text-left text ${
              isDarkMode ? 'text-gray-100' : 'text-gray-900'
            }`}
            style={{ background: 'transparent' }}
            name={name}
            onChange={onChange}
            ref={ref as RefObject<HTMLSelectElement>}
          >
            <option disabled>{label}</option>
            {options &&
              options.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
          </select>
        </SC.InputContainer>
      )}
      {(type === 'email' || type === 'text' || type === 'password') && (
        <SC.InputContainer isDarkMode={isDarkMode}>
          <SC.Input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            ref={ref as RefObject<HTMLInputElement>}
            className={className}
          />
          {icon && icon}
        </SC.InputContainer>
      )}

      {type === 'textarea' && (
        <SC.InputContainer isDarkMode={isDarkMode}>
          <SC.TextArea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            name={name}
            ref={ref as RefObject<HTMLTextAreaElement>}
            className={className}
          />
          {icon && icon}
        </SC.InputContainer>
      )}

      {type === 'checkbox' && (
        <div className="flex items-center h-5 gap-2">
          <input
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            value={value}
            name={name}
            ref={ref as RefObject<HTMLInputElement>}
            onChange={onChange}
          />
          <label
            className={`text-sm text-left font-medium text ${
              isDarkMode ? 'text-gray-100' : 'text-gray-700'
            }`}
          >
            {label}
          </label>
        </div>
      )}

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
