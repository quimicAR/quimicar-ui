import { Category } from 'helper/format-category'
import { Size } from '../../models/styles'
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
    border-bottom: 3px solid ${theme.elementsGroups[group]};
    border-radius: 4px;
    background-color: ${isDarkMode
      ? ' rgba(0, 0, 0, 0.1)'
      : 'rgba(0, 0, 0, 0.08)'};
    padding: 5px;
    transition: ease-in-out 0.4s;

    &:hover {
      background-color: ${isDarkMode
        ? 'rgba(250,249,250, 0.1)'
        : 'rgba(24, 31, 39, 0.2)'};
      cursor: pointer;
    }
  `}
`

export const AtomicNumber = styled.h3`
  ${({ theme }) => css`
    align-self: flex-end;
    font-size: ${theme.fonts.sizes.sm};
    color: ${theme.fonts.color};
    font-weight: ${theme.fonts.weight.bold};
  `}
`
export const AtomName = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.sm};
    color: ${theme.fonts.color};
    font-weight: ${theme.fonts.weight.light};
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  `}
`

export const AtomSymbol = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.fonts.color};
    font-weight: ${theme.fonts.weight.light};
  `}
`
