import styled, { css } from 'styled-components'
import tw from 'tailwind-styled-components'

export const Admin = styled.div`
  background-color: red;
  width: 150px;
  height: 150px;
  padding: 3rem;
`

interface LayoutStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.section<LayoutStylesProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'sidebar header'
      'sidebar main'
      'sidebar main';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 60px 1fr;
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
  `}
`

export const Main = tw.main`
grid items-center justify-items-center overflow-auto p-5
`
