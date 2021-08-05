import styled, { css } from 'styled-components'

interface MainStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.main<MainStylesProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
  `}
`
