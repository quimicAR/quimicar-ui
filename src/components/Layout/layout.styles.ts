import styled, { css } from 'styled-components'

interface LayoutStylesProps {
  isDarkMode: boolean
}

export const Wrapper = styled.section<LayoutStylesProps>`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas:
      'header header'
      'main main'
      'main main';
    grid-template-rows: 60px 1fr;
    grid-template-columns: 60px 1fr;
    width: 100%;
    height: 100%;
    background-color: ${theme.pallete.bg};
  `}
`

export const Main = styled.main`
  ${() => css`
    grid-area: main;
    display: grid;
    align-items: center;
    justify-items: center;
    overflow: auto;
    padding: 1em 1.5em;
  `}
`
