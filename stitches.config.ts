import { createCss } from '@stitches/react'

const Inter =
  'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

const { css, getCssString, global, styled } = createCss({
  theme: {
    colors: { primary: 'teal' },
    fonts: { inter: Inter },
    fontSizes: { 1: '12px', 2: '14px', 3: '16px' },
    fontWeights: { regular: '400', bold: '600', black: '800' },
  },
})

const setupGlobalCss = global({
  '*': { boxSizing: 'border-box' },
  'html, body': { fontFamily: '$inter', margin: 0, padding: 0 },
  '::selection': { background: 'yellow' },
})

export { css, getCssString, setupGlobalCss, styled }
