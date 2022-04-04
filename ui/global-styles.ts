import { globalCss, theme } from 'stitches.config'

export const globalStyles = globalCss({
  /* Remove default margin */
  '*': {
    margin: 0,
  },

  /* Force border-box for all elements */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  /* Allow percentage-based heights */
  'html, body, #__next': {
    height: '100%',
  },

  /* Improve media defaults */
  'canvas, img, picture, svg, video': {
    display: 'block',
    maxWidth: '100%',
  },

  /* Overwrite built-in form typography */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  /* Avoid text overflows */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  /* Create a root stacking context*/
  '#__next': {
    isolation: 'isolate',
  },

  html: {
    fontSize: '14px',
  },

  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    lineHeight: '1.5',
    fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Helvetica, Arial, sans-serif`,
  },

  'h1, h2, h3, h4, h5, h6': {
    lineHeight: '1',
  },

  'code, kbd, samp, pre': {
    fontFamily: `ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace`,
    fontSize: '1em',
  },

  '::selection': {
    backgroundColor: theme.colors.text,
    color: theme.colors.loContrast,
  },

  /* NProgress customization */
  '#nprogress .bar': {
    background: theme.colors.hiContrast,
  },
  '#nprogress .peg': {
    boxShadow: `0 0 10px ${theme.colors.hiContrast}, 0 0 5px ${theme.colors.hiContrast}`,
  },
})
