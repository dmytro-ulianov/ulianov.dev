import Head from 'next/head'
import Link from 'next/link'
import { darken } from 'polished'

import { Meta } from 'components/meta'
import { css, theme } from 'stitches.config'
import { Heading } from 'ui/components/heading'
import { Text } from 'ui/components/text'
import { linearGradients } from 'ui/gradients'
import { zIndex } from 'ui/z-index'

const layout = css({
  alignItems: 'center',
  background: linearGradients.mellowUA,
  padding: theme.space[24],
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100%',
  '::selection': {
    backgroundColor: theme.colors.ukraineBlue,
    color: theme.colors.ukraineYellow,
  },
})

const title = 'Dmytro Ulianov | Software Engineer'
const description = `Hi! I'm Dmytro Ulianov, a software engineer from Ukraine.`

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <Meta
          title={title}
          description={description}
          image="/static/og-image.jpg"
          url="https://ulianov.me/"
        />
      </Head>

      <div className={layout()}>
        <div className={vStack()}>
          <Heading font="grotesk" level="1" align="left">
            Hi, I&apos;m Dmytro Ulianov
          </Heading>
          <Text as="p" font="grotesk" size={{ '@initial': '18', '@bp1': '24' }}>
            a software engineer from Ukraine 🇺🇦
            <br />
            building apps with React and TypeScript
            <br />
            passionate about user/developer experience
          </Text>

          <Link href="/static/resume.pdf">
            <a className={anchor()}>open my resume</a>
          </Link>
        </div>
      </div>

      <Texture />
    </>
  )
}

/* TODO: tinker with webkit-tap-highlight */
const anchor = css({
  alignSelf: 'flex-start',
  background: 'transparent',
  color: theme.colors.ukraineBlue,
  fontFamily: theme.fonts.grotesk,
  fontSize: theme.fontSizes[18],
  '@bp1': { fontSize: theme.fontSizes[24] },
  '&:focus': {
    outline: `2px solid ${theme.colors.ukraineBlue}`,
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
  '&:hover': {
    color: darken(0.1, theme.colors.ukraineBlue.value),
    // backgroundColor: theme.colors.blackA3,
  },
})

/* TODO: create Stack component */
const vStack = css({
  display: 'flex',
  flexDirection: 'column',
  '& > * + *': {
    marginTop: theme.space[12],
    '@bp1': { marginTop: theme.space[16] },
  },
})

const texture = css({
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: 'calc(100vh + 256px)',
  pointerEvents: 'none',
  opacity: '33%',
  filter: 'brightness(120%) contrast(120%)',
  zIndex: zIndex.paperTexture,
})

function Texture() {
  return (
    <svg className={texture()}>
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  )
}
