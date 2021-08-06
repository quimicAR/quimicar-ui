import { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globalStyle'
import Head from 'next/head'
import { ThemeProvider } from '../hooks/use-theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>quimicAR - Átomos em Realidade Aumentada</title>
        <link rel="shortcut icon" href="/img/atom-light.svg" />
        <link rel="apple-touch-icon" href="/img/atom-light.svg" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple template project to work with React, Typescript, Next, Styled Components and Storybook"
        />
        {/* <a href="https://dryicons.com/icon/atom-icon-5761">
          {' '}
          Icon by Dryicons{' '}
        </a> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
