import tw from 'tailwind-styled-components'

type ButtonProps = {
  isDarkMode?: boolean
  color?: string
  isLink?: boolean
  disabled?: boolean
}
export const Button = tw.button<ButtonProps>`
  h-14
  sm:h-12
  w-full
  cursor-pointer
  rounded
  p-2
  ${(p) => (p.isLink ? 'text-blue-500 underline' : '')}
  ${(p) => (p.color ? `${p.color}` : p.isLink ? '' : 'bg-primary')}
  ${(p) =>
    p.disabled && p.isDarkMode
      ? 'bg-gray-500 text-gray-100'
      : p.isLink
      ? ''
      : 'bg-primary text-gray-100'}
`
