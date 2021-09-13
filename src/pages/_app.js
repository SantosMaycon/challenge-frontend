import { GlobalStorage } from 'context/GlobalContext'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Challenge</title>
        <meta
          author="@SantosMaycon"
          name="description"
          content="Uma aplicação web que permite gerenciar usuário, por meio de um layout amigável."
        />
      </Head>
      <GlobalStyles />
      <GlobalStorage>
        <Component {...pageProps} />
      </GlobalStorage>
    </>
  )
}

export default App
