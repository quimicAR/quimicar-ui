import { TextSize, Weight } from 'models/styles'
import styled, { css } from 'styled-components'

interface TextProps {
  fontSize: TextSize
  color?: string
  weight: Weight
}

export const Text = styled.p<TextProps>`
  ${({ theme, fontSize, color, weight }) => css`
    font-size: ${theme.fonts.sizes[fontSize]};
    font-weight: ${theme.fonts.weight[weight]};
    color: ${color || theme.fonts.color};
    word-spacing: 1px;
  `}
`
