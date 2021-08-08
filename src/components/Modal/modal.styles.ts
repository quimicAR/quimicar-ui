import { Dialog, DialogContent, DialogTitle } from '@material-ui/core'
import styled, { css } from 'styled-components'

export const ModalContainer = styled(Dialog)`
  padding: 1rem;
`
export const ModalTitle = styled(DialogTitle)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.pallete.bg};
    color: ${theme.fonts.color};
  `}
`
export const ModalContent = styled(DialogContent)`
  ${({ theme }) => css`
    padding: 1rem;
    width: 80em;
    height: 70em;
    background-color: ${theme.pallete.bg};
  `}
`
