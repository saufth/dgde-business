/** Button types configuration */
export const BUTTON_TYPES = {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
} as const

/** The open-closed state configuration */
export const OC_STATE = {
  open: 'open',
  closed: 'closed'
} as const

/** The open-closed-hover state configuration */
export const OCH_STATE = {
  ...OC_STATE,
  hover: 'hover',
  out: 'out'
} as const
