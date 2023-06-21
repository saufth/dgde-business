import type { DEVICE_SIZES, SIZES } from '@/modules/sizing/config'

/** Used to define a size property */
export type Size = typeof SIZES[keyof typeof SIZES]

/** Used to define a device size property */
export type SizeDevice = typeof DEVICE_SIZES[keyof typeof DEVICE_SIZES]

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
