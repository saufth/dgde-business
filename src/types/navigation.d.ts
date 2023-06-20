// Types
import type { APP_ROUTES } from '@/modules/navigation/config'
import type { Actionable } from './input'
import type { Parent } from './layout'
import type { Size } from './sizing'
import type { Themeable } from './theme'

/** The main routes of the application */
export type AppRoute = typeof APP_ROUTES[keyof typeof APP_ROUTES]

/** Specifes where to open the linked document */
export type LinkTarget = '_blank'
| '_self'
| '_parent'
| '_top'
| 'framename'

/** Specifies the relationship between the current document and the linked document */
export type LinkRel = 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noopener'
  | 'noreferrer'
  | 'prev'
  | 'search'
  | 'tag'

/** Navegable properties */
export interface Navigable extends Required<Parent<string>> {
  /** Reference to redirect */
  href: string
}

/** Link element properties */
export interface Linkabe extends Navigable {
  /** Link target property */
  target?: LinkTarget
  /** Link rel property */
  rel?: LinkRel | LinkRel[]
}

/** Link component properties */
export interface LinkProps extends Linkabe, Themeable, Actionable {
  /** Link resize property */
  size?: Size
  /** Underline the link text */
  underline?: boolean
}

/** The link button component properties */
export interface LinkButtonProps extends LinkProps, Themeable {}
