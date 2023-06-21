// Types
import type { BUTTON_TYPES, OCH_STATE, OC_STATE } from '@/modules/input/config'
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
export type ButtonTypes = typeof BUTTON_TYPES[keyof typeof BUTTON_TYPES]

/** The link button component properties */
export interface ButtonProps extends Parent<string>, Actionable, Themeable {
  /** The button type */
  type?: ButtonTypes
  /** Used for disable or enable the button */
  disabled?: boolean
}

/** Open-closed state type */
export type OCState = typeof OC_STATE[keyof typeof OC_STATE]

/** The open-closed-hover state type */
export type OCHState = typeof OCH_STATE[keyof typeof OCH_STATE]
