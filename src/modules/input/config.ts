// Types
import type { ButtonTypes, OCHState, OCState } from '@/types/input'

/** Button types configuration */
export const BUTTON_TYPES: Readonly<Record<ButtonTypes, ButtonTypes>> = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}

/** The open-closed state configuration */
export const OC_STATE: Readonly<Record<OCState, OCState>> = {
  open: 'open',
  closed: 'closed'
}

/** The open-closed-hover state configuration */
export const OCH_STATE: Readonly<Record<OCHState, OCHState>> = {
  ...OC_STATE,
  hover: 'hover'
}
