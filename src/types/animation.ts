// Types
import type { OCHState, OCState } from '@/types/input'
import type { TargetAndTransition, Variant } from 'framer-motion'
import type { SizeDevice } from './sizing'

/** Used to open-closed state animation variants configuration */
export type OCVariantsConfig = Readonly<Record<OCState, Variant>>

/** Used to open-closed state animation variants devices configuration */
export type OCVariantsDevicesConfig = Readonly<Record<SizeDevice, OCVariantsConfig>>

/** Used to open-closed-hover state animation variants configuration */
export type OCHVariantsConfig = Readonly<Record<OCHState, Variant>>

/** Used to open-closed-hover state animation variants devices configuration */
export type OCHVariantsDevicesConfig = Readonly<Record<SizeDevice, OCHVariantsConfig>>

/** Used to animation transition */
export type Transition = TargetAndTransition['transition']
