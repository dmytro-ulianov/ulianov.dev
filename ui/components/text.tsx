import { VariantProps } from '@stitches/react'
import { forwardRef } from 'react'

import { clsx } from 'lib/clsx'
import { css, theme } from 'stitches.config'

export const text = css({
  display: 'inline-block',
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

    size: {
      12: { fontSize: theme.fontSizes['12'] },
      14: { fontSize: theme.fontSizes['14'] },
      16: { fontSize: theme.fontSizes['16'] },
      18: { fontSize: theme.fontSizes['18'] },
      20: { fontSize: theme.fontSizes['20'] },
      24: { fontSize: theme.fontSizes['24'] },
      32: { fontSize: theme.fontSizes['32'] },
      48: { fontSize: theme.fontSizes['48'] },
      56: { fontSize: theme.fontSizes['56'] },
    },
  },
})

type ElRef = React.ElementRef<'span'>
type ElProps = React.ComponentPropsWithoutRef<'span'>

interface TextProps extends VariantProps<typeof text>, ElProps {
  as?: 'span' | 'p' | 'label' | 'div' | 'small' | 'strong'
  children: React.ReactNode
  className?: string
}

export const Text = forwardRef<ElRef, TextProps>(function Text(props, ref) {
  const { align, as: Root = 'span', className, font, size, ...rest } = props
  return (
    <Root
      className={clsx(text({ align, font, size }), className)}
      ref={ref as any}
      {...rest}
    />
  )
})
