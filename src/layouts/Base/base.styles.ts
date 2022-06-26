import styled, { css } from 'styled-components'
import tw from 'tailwind-styled-components'

interface LayoutStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.div<LayoutStylesProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'sidebar header'
      'sidebar main'
      'sidebar main';
    grid-template-rows: 60px auto;
    grid-template-columns: min-content auto;
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
  `}
`

export const Main = tw.main`
grid items-center w-full justify-items-center overflow-auto p-5
`
