import { AppProps } from 'next/app'

import { globalStyles } from 'ui/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
