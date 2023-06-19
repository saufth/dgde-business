// Config
import { BUTTON_TYPES } from '@/modules/input/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { ButtonProps } from '@/types/input'
import type { Theme } from '@/types/theme'

/** The button themeable styles configuration */
export const BTN_THEME_STYLES: Readonly<Record<Theme, string>> = {
  primary: 'btn__primary',
  secondary: 'btn__secondary'
}

/**
 * A simple themeable button component
 * @see {@link ButtonProps} for props specification
 * @param ButtonProps The component props
 * @returns The Button component
 *
 * @default type 'button'
 * @default theme 'primary'
 */
export default function Button ({
  children,
  action,
  type = BUTTON_TYPES.button,
  theme = THEMES.primary,
  disabled
}: ButtonProps) {
  return (
    <button
      className={`btn ${BTN_THEME_STYLES[theme]}`}
      onClick={action}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
