// Types
import type { Navigable } from './navigation'
import type { Dimensionable, SizeProps } from './sizing'
import type { Nameable } from './common'
import type { Themeable } from './theme'
import type { IMG_EXT, LOGO_TYPES } from '@/modules/data-display/config'

/** Image extention type */
export type ImageExt = typeof IMG_EXT[keyof typeof IMG_EXT]

/** Logo component types */
export type LogoType = typeof LOGO_TYPES[keyof typeof LOGO_TYPES]

/** The image component properties */
export interface ImageProps extends Nameable, Dimensionable {
  /** The image extention */
  ext: ImageExt
  /** The image alternative text */
  alt: string
  /** The image priority */
  priority?: boolean
}

/** Logo component properties */
export interface LogoProps extends
  Themeable,
  SizeProps,
  Partial<Pick<ImageProps, 'alt' | 'priority'>>
{
  /** Logo style type */
  type?: LogoType
}

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description: string | string[]
}

export interface ShowcaseProps extends HeaderProps, Partial<Pick<Navigable, 'href'>> {
  /** The element id property */
  id?: string
  /** The image properties */
  image: ImageProps
  /** Used to invert the order of the content */
  reverse?: boolean
}
