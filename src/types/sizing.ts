/** Used to define a size property */
export type Size = 'sm' | 'md' | 'lg'

/** Used to define a device size property */
export type SizeDevice = 'mobile' | 'desktop'

/** The size properties */
export interface SizeProps {
  /** Size property */
  size?: Size
}

/** Define width and height properties  */
export interface Dimensionable {
  /** Width property */
  width: number
  /** Height property */
  height: number
}
