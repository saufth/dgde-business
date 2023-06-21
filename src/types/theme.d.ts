// Types
import type { THEMES } from '@/modules/theme/config'

/** Application themes */
export type Theme = typeof THEMES[keyof typeof THEMES]

/** Used for define a theme */
export interface Themeable {
  /** Theme property */
  theme?: Theme
}
