import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-dark:#1C1E21;
    --color-light: #faf9fa;
    --color-primary: #60A5FA;
    --color-danger: rgb(247,49,92);
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

    .mb-8 {
      margin-bottom: 8px;
    }
    .mb-16 {
      margin-bottom: 16px;
    }
  }

  html {
    font-size: 92.5%; // para usarmos unidade de medida *rem*
  }
`
