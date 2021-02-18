import * as SC from './main.styles'

const Main = ({
  title = 'React Avançado',
  description = 'React, Typescript, NextJS e Styled Components'
}) => {
  return (
    <SC.Wrapper>
      <SC.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      ></SC.Logo>

      <SC.Title>{title}</SC.Title>

      <SC.Description>{description}</SC.Description>

      <SC.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente com uma tela com código "
      ></SC.Illustration>
    </SC.Wrapper>
  )
}

export default Main
