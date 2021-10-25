import styled, { css } from 'styled-components'

interface InputProps {
  isDarkMode?: boolean
}

export const InputContainer = styled.div<InputProps>`
  ${({ isDarkMode }) => css`
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: ${isDarkMode
      ? 'rgba(250,249,250, 0.08)'
      : 'rgba(24, 31, 39, 0.05)'};
    border-radius: 4px;
    padding: 8px;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    height: 100%;
    width: 95%;
    padding: 10px;
    border: none;
    background: transparent;
    color: ${theme.fonts.color};
  `}
`

export const InputError = styled.span`
  ${({ theme }) => css`
    margin-top: 0.8em;
    color: var(--color-danger);
    font-size: ${theme.fonts.sizes.sm};
    display: flex;
    svg {
      margin-right: 0.4em;
    }
  `}
`
