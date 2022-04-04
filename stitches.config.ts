import { blackA } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

const defaultFonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Helvetica, Arial, sans-serif`

function font(name: string) {
  return `${name}, ${defaultFonts}`
}

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  media: { bp1: `(min-width: 640px)` },
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      ...blackA,

      ukraineYellow: 'hsl(50 100% 50%)',
      ukraineBlue: 'hsl(211 100% 37%)',

      background: '$white',
      text: '$blackA12',
      textHiContrast: '$black',
      hiContrast: '$black',
      loContrast: '$white',
    },

    fonts: {
      grotesk: font('Space Grotesk'),
      inter: font('Inter'),
    },

    fontSizes: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      32: '32px',
      48: '48px',
      56: '56px',
    },

    space: {
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
    },

    lineHeights: {
      body: '1.5',
    },
  },
  utils: {
    size: (value: any) => ({ height: value, width: value }),
  },
})

export type CSS = Stitches.CSS<typeof config>

// const { css, getCssString, global, styled } = createStitches({
//   conditions: {
//     xs: `@media (max-width: 400px)`,
//     md: `@media (min-width: 720px)`,
//   },
//   theme: {
//     colors: { primary: 'teal' },
//     fonts: { primary: WorkSans },
//     fontSizes: { 1: '0.8rem', 2: '0.9rem', 3: '1rem', display: '3rem' },
//     fontWeights: { regular: '400', bold: '600', black: '800' },
//   },
// })

// const setupGlobalCss = global({
//   '*': { boxSizing: 'border-box' },
//   'html, body': {
//     fontFamily: '$primary',
//     fontSize: '12px',
//     height: '100vh',
//     margin: 0,
//     minHeight: '-webkit-fill-available',
//     padding: 0,
//     when: { xs: { fontSize: '10px' }, md: { fontSize: '16px' } },
//   },
//   '#__next': { height: '100%' },
//   '::selection': { background: 'yellow' },
// })

// export { css, getCssString, setupGlobalCss, styled }
