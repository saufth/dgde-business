// Components
import NextLink from 'next/link'
// Config
import { THEMES } from '@/modules/theme/config'
// Types
import type { LinkButtonProps } from '@/types/navigation'

/** The button themeable styles configuration */
export const BTN_THEME_STYLES = {
  [THEMES.primary]: 'btn__primary',
  [THEMES.secondary]: 'btn__secondary'
} as const

/**
 * A simple themeable link button for navigation
 * @see {@link LinkButtonProps} for props specification
 * @param LinkButtonProps The component props
 * @returns The LinkButton component
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
