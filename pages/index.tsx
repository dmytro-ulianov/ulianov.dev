import Head from 'next/head'

import { Box } from 'components/box'
import { styled } from 'stitches.config'

const Layout = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh',
})

const Title = styled('h1', {
  fontSize: '$display',
  fontWeight: '$black',
})

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ulianov.dev</title>
        <meta name="description" content="Homepage of ulianov.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="h1" css={{ fontSize: '$display', fontWeight: '$black' }}>
        <i>Hi, I&apos;m Dmytro Ulianov</i>
      </Box>
    </Layout>
  )
}
