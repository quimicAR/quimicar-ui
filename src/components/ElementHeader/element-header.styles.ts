import { Category } from '../../helper/format-category'
import styled, { css } from 'styled-components'

interface StylesProps {
  group: Category
  isDarkMode?: boolean
  elementUrl?: string
}

export const ElementHeaderContainer = styled.header<StylesProps>`
  ${({ theme, group, elementUrl }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 350px;
    margin-bottom: 1em;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.1) 10%,
        rgba(0, 0, 0, 0.65) 100%
      ),
      ${elementUrl ? `url(${elementUrl})` : `${theme.elementsGroups[group]}`}
        no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
  `}
`

export const ElementSymbol = styled.div<StylesProps>`
  ${({ theme, group }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0px 2em;
    padding: 6px;
    width: 140px;
    height: 140px;
    background-color: ${theme.elementsGroups[group]};
    border-radius: 4px;
  `}
`
export const ElementCategory = styled.div<StylesProps>`
  ${({ theme, group }) => css`
    width: auto;
    height: 40px;
    padding: 0px 1em;
    background-color: ${theme.elementsGroups[group]};
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    border-radius: 5px;
  `}
`
