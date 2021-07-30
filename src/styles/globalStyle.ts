import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
  --background-body: #FAF9FA;

  --color-neutral-bright: #FFFFFF;
  --color-neutral-soft: #F5F5F5;
  --color-neutral-soft-light: #EAEAEA;
  --color-neutral-base: #D5D5D5;;
  --color-neutral-light: #B0B0AF;
  --color-neutral-medium: #6E6E6E;
  --color-neutral-dark: #3F3F3C;
  --color-neutral-soft-black: #292927;

  --color-primary-bright: #D0E1F0;
  --color-primary-light: #B9D2E9;
  --color-feedback-tips-base: #1473E6;
  --color-feedback-tips-pure: #115FBD;
  --color-primary: #005BAF;
  --color-primary-pure: #004B90;
  --color-primary-dark: #003260;

  --color-feedback-danger-pure: #E8503E;
  --color-feedback-danger-soft-dark: #D14838;

  --color-feedback-attention-base: #FCC216;
  --color-feedback-attention-pure: #E6B114;

  --color-feedback-success-base: #36B37E;
  --color-feedback-success-pure: #2D9368;
  --color-feedback-success-dark: #237251;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

html, body, main, #__next {
  height: 100%;
  width: 100%;
  background-color: #f1ebdd
;
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
