import { AppProps } from 'next/app'
import { GlobalStyles } from 'styles/globalStyle'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>quimicAR - Átomos em Realidade Aumentada</title>
        <link rel="shortcut icon" href="/img/atom.png" />
        <link rel="apple-touch-icon" href="/img/atom.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple template project to work with React, Typescript, Next, Styled Components and Storybook"
        />
        {/* <a href="https://dryicons.com/icon/atom-icon-5761">
          {' '}
          Icon by Dryicons{' '}
        </a> */}
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
