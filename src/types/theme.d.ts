/** Application themes */
export type Theme = 'primary' | 'secondary'

/** Application themes */
export type ThemeVariant = 'dark' | 'light'

/** Used for define a theme */
export interface Themeable {
  /** Theme property */
  theme?: Theme
  /** Theme variant property */
  variant?: ThemeVariant
}
