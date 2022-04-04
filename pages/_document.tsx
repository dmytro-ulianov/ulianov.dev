import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import { getCssText } from 'stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap"
            rel="stylesheet"
          />

          <link href="/static/favicon.ico" rel="shortcut icon" />
          <link href="/static/site.webmanifest" rel="manifest" />

          <link
            href="/static/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
