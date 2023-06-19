// Types
import type { Parent } from './layout'
import type { Themeable } from './theme'

/** Generic arrow function type */
export type Action<P = undefined, R = void> = P extends undefined
  ? () => R
  : (param: P) => R

/** Used to define the action property to components */
export interface Actionable<P = undefined, R = void> {
  /** The action to perform */
  action?: Action<P, R>
}

/** Button types porpoerty */
export type ButtonTypes = 'button' | 'submit' | 'reset'

/** The link button component properties */
export interface ButtonProps extends Parent<string>, Actionable, Themeable {
  /** The button type */
  type?: ButtonTypes
  /** Used for disable or enable the button */
  disabled?: boolean
}

/** Open-closed state type */
export type OCState = 'open' | 'closed'

/** The open-closed-hover state type */
export type OCHState = OCState | 'hover'
