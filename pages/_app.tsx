import { AppProps } from 'next/app'
import Head from 'next/head'

import { setupGlobalCss } from 'stitches.config'

setupGlobalCss()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
