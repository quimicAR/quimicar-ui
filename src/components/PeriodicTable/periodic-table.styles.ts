import styled, { css } from 'styled-components'
import { Size } from 'styles/styles'

interface PeriodicTableContainerStyleProps {
  size: Size
}

export const PeriodicTableContainer = styled.div<PeriodicTableContainerStyleProps>`
  ${({ theme, size }) => css`
    display: grid;
    grid-auto-rows: minmax(theme.sizes[size], theme.sizes[size]);
    grid-auto-columns: minmax(theme.sizes[size], theme.sizes[size]);
    grid-gap: 4px;
  `}
`
