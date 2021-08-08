import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-dark: #222;
    --color-light: #faf9fa;
    --color-primary: rgb(219,44,108);
    --color-secondary: rgb(57,182,206);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  main,
  #__next {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  html {
    font-size: 92.5%; // para usarmos unidade de medida *rem*
  }
`
