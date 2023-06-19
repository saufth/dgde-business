// Types
import type { Navigable } from './navigation'
import type { Dimensionable, SizeProps } from './sizing'
import type { Nameable } from './common'
import type { Themeable } from './theme'
import { ID } from './layout'

/** Video names of the application */
export type VideoApp = 'hero'

/** The video component properties */
export interface VideoProps extends Nameable<VideoApp> {}

/** Image extention type */
export type ImageExt = 'svg'
  | 'jpg'
  | 'png'

/** Logo component types */
export type LogoType = 'logotype'
  | 'logoname'
  | 'logomark'
  | 'logovertical'

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

/** The svg icons of the application */
export type AppIcon = 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'linkedin'

/** The icon component props */
export interface IconProps extends Nameable<AppIcon> {}

/** The svg icon properties */
export interface SVGIcon extends Dimensionable {
  /** The svg icon path */
  path: string
}

/** Used for url configurations */
export interface URLIcon extends Nameable<AppIcon> {
  /** Item URL */
  url: URL
}

/** Header properties */
export interface HeaderProps {
  /** Header heading */
  heading: string
  /** Header description */
  description: string | string[]
}

export interface ShowcaseProps extends ID, HeaderProps, Partial<Pick<Navigable, 'href'>> {
  /** The image properties */
  image: ImageProps
  /** Used to invert the order of the content */
  reverse?: boolean
}
