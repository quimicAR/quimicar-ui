import { Category } from 'helper/format-category'
import styled, { css } from 'styled-components'
interface AtomContainerStyleProps {
  group: Category
  isDarkMode: boolean
}

export const AtomContainer = styled.a<AtomContainerStyleProps>`
  ${({ theme, group, isDarkMode }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: auto;
    height: auto;
    border-bottom: 3px solid ${theme.elementsGroups[group]};
    border: ${!isDarkMode ? '1px solid #333' : ''}
    background-color: ${theme.pallete.bg};
    padding: 4px;
    transition: ease-in-out 0.4s;

    &:hover {
      background-color: ${
        isDarkMode ? 'rgba(250,249,250, 0.1)' : 'rgba(24, 31, 39, 0.1)'
      };
      cursor: pointer;
    }
  `}
`

export const AtomicNumber = styled.h3`
  align-self: flex-end;
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  color: ${(props) => props.theme.fonts.color};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
`
export const AtomName = styled.p`
  font-size: ${(props) => props.theme.fonts.sizes.sm};
  color: ${(props) => props.theme.fonts.color};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

export const AtomSymbol = styled.h1`
  font-size: ${(props) => props.theme.fonts.sizes.lg};
  color: ${(props) => props.theme.fonts.color};
  font-weight: ${(props) => props.theme.fonts.weight.light};
`
