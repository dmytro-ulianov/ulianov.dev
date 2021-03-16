import { createCss } from '@stitches/react'

const WorkSans =
  'Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

const { css, getCssString, global, styled } = createCss({
  conditions: {
    xs: `@media (max-width: 400px)`,
    md: `@media (min-width: 720px)`,
  },
  theme: {
    colors: { primary: 'teal' },
    fonts: { primary: WorkSans },
    fontSizes: { 1: '0.8rem', 2: '0.9rem', 3: '1rem', display: '3rem' },
    fontWeights: { regular: '400', bold: '600', black: '800' },
  },
})

const setupGlobalCss = global({
  '*': { boxSizing: 'border-box' },
  'html, body': {
    fontFamily: '$primary',
    fontSize: '12px',
    height: '100vh',
    margin: 0,
    minHeight: '-webkit-fill-available',
    padding: 0,
    when: { xs: { fontSize: '10px' }, md: { fontSize: '16px' } },
  },
  '#__next': { height: '100%' },
  '::selection': { background: 'yellow' },
})

export { css, getCssString, setupGlobalCss, styled }
