import { createCss } from '@stitches/react'

const WorkSans =
  'Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'

const { css, getCssString, global, styled } = createCss({
  conditions: {
    md: `@media (min-width: 640px)`,
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
    margin: 0,
    padding: 0,
    fontSize: '12px',
    when: { md: { fontSize: '16px' } },
  },
  '::selection': { background: 'yellow' },
})

export { css, getCssString, setupGlobalCss, styled }
