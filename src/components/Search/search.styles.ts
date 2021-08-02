import { Theme } from 'hooks/use-theme'
import styled from 'styled-components'

interface SearchProps {
  themeProp?: Theme
}

export const SearchContainer = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  height: 35px;
  width: 230px;
  background-color: ${(props) =>
    props.themeProp === 'light'
      ? 'rgba(24, 31, 39, 0.1)'
      : 'rgba(250,249,250, 0.1)'};
  border-radius: 4px;
  padding: 8px;
`

export const Search = styled.input`
  height: 100%;
  width: auto;
  padding: 10px;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.fonts.color};
`
