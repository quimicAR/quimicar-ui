import * as SC from './header.styles'
const Header = ({ title = 'quimicAR' }) => {
  return (
    <SC.Header>
      <SC.Logo src="/img/atomo.png" alt="Imagem de um átomo "></SC.Logo>

      <SC.Title>{title}</SC.Title>
    </SC.Header>
  )
}

export default Header
