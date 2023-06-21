// Types
import type { Themeable } from './theme'
import type { Actionable } from './input'

/** A generic name property */
export interface Nameable<T = string> {
  /** The name property */
  name: T
}

/** Used to define theme and action basic properties */
export interface ActionThemeProps extends Themeable, Actionable {}
