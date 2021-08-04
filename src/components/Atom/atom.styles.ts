import { Theme } from 'hooks/use-theme'
import styled from 'styled-components'

interface AtomContainerStyleProps {
  group: string
  themeProp: Theme
}

export const AtomContainer = styled.a<AtomContainerStyleProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  height: auto;
  border-bottom: 3px solid
    ${(props) => props.theme.elementsGroups[`${props.group}`]};
  background-color: ${(props) => props.theme.pallete.bg};
  padding: 4px;
  transition: ease-in-out 0.4s;

  &:hover {
    background-color: ${(props) =>
      props.themeProp === 'light'
        ? 'rgba(24, 31, 39, 0.1)'
        : 'rgba(250,249,250, 0.1)'};
    cursor: pointer;
  }
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
