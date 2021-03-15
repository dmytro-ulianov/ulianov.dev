import { AppProps } from 'next/app'
import Head from 'next/head'

import { setupGlobalCss } from 'stitches.config'

setupGlobalCss()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
