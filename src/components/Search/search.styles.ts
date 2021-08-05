import styled, { css } from 'styled-components'

interface SearchProps {
  isDarkMode?: boolean
}

export const SearchContainer = styled.div<SearchProps>`
  ${({ isDarkMode }) => css`
    display: flex;
    align-items: center;
    height: 35px;
    width: 230px;
    background-color: ${isDarkMode
      ? 'rgba(250,249,250, 0.1)'
      : 'rgba(24, 31, 39, 0.1)'};
    border-radius: 4px;
    padding: 8px;
  `}
`

export const Search = styled.input`
  ${({ theme }) => css`
    height: 100%;
    width: auto;
    padding: 10px;
    border: none;
    background: transparent;
    color: ${theme.fonts.color};
  `}
`
