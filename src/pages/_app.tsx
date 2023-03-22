import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>ViaCep</title>
        <link rel="shortcut icon" href="/img/sebrae.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0609B" />
        <meta
          name="description"
          content="ViaCep is a frontend challege with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
