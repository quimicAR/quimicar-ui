import { Category } from 'helper/format-category'
import { Size } from '../../styles/styles'
import styled, { css } from 'styled-components'
interface AtomContainerStyleProps {
  group: Category
  isDarkMode: boolean
  size: Size
}

export const AtomContainer = styled.a<AtomContainerStyleProps>`
  ${({ theme, group, isDarkMode, size }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: ${theme.sizes[size]};
    height: ${theme.sizes[size]};
    border-bottom: 2px solid ${theme.elementsGroups[group]};
    background-color: ${isDarkMode
      ? ' rgba(100, 100, 100, 0.08)'
      : 'rgba(30, 30, 30, 0.03)'};
    padding: 3px;
    border-radius: 3px;
    transition: ease-in-out 0.4s;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    &:hover {
      background-color: ${isDarkMode
        ? 'rgba(250,249,250, 0.1)'
        : 'rgba(32, 31, 32, 0.1)'};
      cursor: pointer;
    }
  `}
`
