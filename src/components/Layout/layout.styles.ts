import styled, { css } from 'styled-components'

interface LayoutStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.section<LayoutStylesProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
    padding-top: 80px;
  `}
`

export const Main = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 75%;
    height: 100%;
    overflow: hidden;
  `}
`
