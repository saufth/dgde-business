// Components
import NextLink from 'next/link'
// Config
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { LinkProps } from '@/types/navigation'
import type { Size } from '@/types/sizing'
import type { Theme } from '@/types/theme'

/** The link size style configuration */
const SIZE_STYLES: Readonly<Record<Size, string>> = {
  sm: '',
  md: 'font-secondary-medium',
  lg: 'font-secondary-medium text-5xl md:text-7xl'
}

/** The link theme style configuration */
const THEME_STYLES: Readonly<Record<Theme, string>> = {
  primary: ' hover:text-secondary',
  secondary: 'text-white hover:text-primary'
}

/**
 * A simple link component for navigation
 * @see {@link LinkProps} for props specification
 * @param LinkProps The component props
 * @returns The Link component
 *
 * @default size 'md'
 * @default theme 'primary'
 */
export default function Link ({
  children,
  href,
  target,
  rel,
  size = SIZES.md,
  theme = THEMES.primary,
  underline,
  action
}: LinkProps) {
  // Props
  const linkRel = rel && (typeof rel === 'string' ? rel : rel?.join(' '))
  // Styles
  const underlineSTyle = underline ? 'underline' : ''
  const linkStyle = `${SIZE_STYLES[size]} ${THEME_STYLES[theme]} ${underlineSTyle}`

  return (
    <NextLink
      className={`max-w-fit transition-colors ${linkStyle}`}
      href={href}
      target={target}
      rel={linkRel}
      onClick={action}
    >
      {children}
    </NextLink>
  )
}
