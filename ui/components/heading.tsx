import { VariantProps } from '@stitches/react'
import { forwardRef } from 'react'

import { clsx } from 'lib/clsx'
import { css, theme } from 'stitches.config'

export const heading = css({
  variants: {
    align: {
      center: { textAlign: 'center' },
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
    },

    font: {
      grotesk: { fontFamily: theme.fonts.grotesk },
      inter: { fontFamily: theme.fonts.inter },
    },

    level: {
      1: {
        fontSize: theme.fontSizes[32],
        '@bp1': { fontSize: theme.fontSizes[48] },
      },
      2: {
        fontSize: theme.fontSizes[24],
        '@bp1': { fontSize: theme.fontSizes[32] },
      },
      3: {
        fontSize: theme.fontSizes[20],
        '@bp1': { fontSize: theme.fontSizes[24] },
      },
      4: {
        fontSize: theme.fontSizes[18],
        '@bp1': { fontSize: theme.fontSizes[20] },
      },
    },
  },
})

type ElRef = React.ElementRef<'h1'>
type ElProps = React.ComponentPropsWithoutRef<'h1'>

interface HeadingProps extends VariantProps<typeof heading>, ElProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
}

export const Heading = forwardRef<ElRef, HeadingProps>(function Heading(
  props,
  ref,
) {
  const { align, as: Root = 'h1', className, font, level, ...rest } = props
  return (
    <Root
      className={clsx(heading({ align, font, level }), className)}
      ref={ref as any}
      {...rest}
    />
  )
})
