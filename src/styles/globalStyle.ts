import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html, body, main, #__next {
  height: 100%;
  width: 100%;
}



body, #__next {

  height: 100%;
}
html {
  font-size: 62.5%; // para usarmos unidade de medida *rem*
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif // Pega fonts base do sistema


}

`
