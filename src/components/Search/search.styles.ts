import { Theme } from 'hooks/use-theme'
import styled from 'styled-components'
import { Input } from '@material-ui/core'
interface ThemeStylesProps {
  theme: Theme
}

export const Search = styled(Input)<ThemeStylesProps>`
  height: 35px !important;
  padding: 0px !important;
  border: none;
  background: transparent;
  color: ${(props) => (props.theme === 'light' ? '#040415' : '#f1ebdd')};
`
