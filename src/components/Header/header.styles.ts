import styled, { css } from 'styled-components'
import tw from 'tailwind-styled-components'

export const Header = styled.header<{ isDark: boolean }>`
  ${({ theme }) => css`
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    padding: 0px 1.5em;
    margin-bottom: 2rem;
    background-color: ${theme.pallete.bg};
    -webkit-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
    -moz-box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
    box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  `}
`

export const Logo = tw.img`
w-6 h-6 animate-spin-slow mr-3 transition duration-300`

export const IconButton = tw.button`w-12 h-12 border-none cursor-pointer hover:opacity-50`
