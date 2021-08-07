import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { Typography, IconButton } from '@material-ui/core'
import * as SC from './modal.styles'

interface ModalProps {
  open: boolean
  handleClose?: () => void
  title?: string
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false
}

const Modal: React.FC<ModalProps> = ({
  title,
  open,
  size,
  handleClose,
  children
}) => (
  <SC.ModalContainer
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
    maxWidth={size}
  >
    <SC.ModalTitle disableTypography>
      {title && <Typography variant="h3">{title}</Typography>}
      {handleClose && (
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      )}
    </SC.ModalTitle>
    <SC.ModalContent dividers>{children}</SC.ModalContent>
  </SC.ModalContainer>
)

export default Modal
