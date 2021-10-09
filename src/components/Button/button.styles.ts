import { lighten } from '@material-ui/core'
import styled, { css } from 'styled-components'

interface ButtonProps {
  isDarkMode?: boolean
  color: string
  isLink?: boolean
  disabled?: boolean
}

export const ButtonContainer = styled.div<ButtonProps>`
  ${({ color, isLink, disabled }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 230px;
    background-color: ${isLink
      ? 'rgba(0, 0, 0, 0)'
      : disabled
      ? lighten(color, 0.5)
      : color};
    color: ${isLink ? color : ''};
    border-radius: 4px;
    padding: 12px;
    cursor: pointer;
  `}
`

export const Button = styled.button<ButtonProps>`
  ${({ theme, isLink, color }) => css`
    height: 100%;
    width: 100%;
    border: none;
    background: transparent;
    color: ${isLink ? color : theme.fonts.color};
    text-decoration: ${isLink ? 'underline' : 'none'};
    cursor: pointer;
  `}
`
