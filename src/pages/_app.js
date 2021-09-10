import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coodesh Frontend Challenge</title>
        <meta
          author="@SantosMaycon"
          name="description"
          content="Uma aplicação web que permite gerenciar usuário, por meio de um layout amigável."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
