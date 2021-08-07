import styled, { css } from 'styled-components'

interface LayoutStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.main<LayoutStylesProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
  `}
`
