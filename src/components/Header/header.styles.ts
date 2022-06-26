import tw from 'tailwind-styled-components'

interface HeaderProps {
  $showTitle: boolean
}
export const Header = tw.header<HeaderProps>`flex w-full h-14 items-center ${(
  p: HeaderProps
) => (p.$showTitle ? 'justify-between' : 'justify-end')}  px-4 shadow-md`

export const IconButton = tw.button`w-12 h-12 flex items-center justify-center border-none cursor-pointer hover:opacity-50`
