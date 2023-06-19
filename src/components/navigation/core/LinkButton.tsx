// Components
import NextLink from 'next/link'
// Config
import { THEMES } from '@/modules/theme/config'
// Types
import type { LinkButtonProps } from '@/types/navigation'
import type { Theme } from '@/types/theme'

/** The button themeable styles configuration */
export const BTN_THEME_STYLES: Readonly<Record<Theme, string>> = {
  primary: 'btn__primary',
  secondary: 'btn__secondary'
}

/**
 * A simple themeable link button for navigation
 * @see {@link LinkButtonProps} for props specification
 * @param LinkButtonProps The component props
 * @returns The LinkButton component
 *
 * @default theme 'primary'
 */
export default function LinkButton ({
  children,
  href,
  action,
  theme = THEMES.primary
}: LinkButtonProps) {
  return (
    <NextLink href={href} onClick={action}>
      <div className={`btn ${BTN_THEME_STYLES[theme]}`}>
        {children}
      </div>
    </NextLink>
  )
}
