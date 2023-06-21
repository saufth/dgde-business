// Components
import NextLink from 'next/link'
import Logo from '../data-display/core/Logo'
// Config
import { LOGO_TYPES } from '@/modules/data-display/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { ActionThemeProps } from '@/types/common'

/**
 * The main logo link used to redirect to home page
 * @see {@link ActionThemeProps} for props specifications
 * @param ActionThemeProps The component props
 * @returns The LinkLogo component
 */
export default function LinkLogo ({ action, theme }: ActionThemeProps) {
  return (
    <NextLink className='max-w-fit' href='/' onClick={action}>
      <Logo type={LOGO_TYPES.logovertical} theme={theme} size={SIZES.sm} />
    </NextLink>
  )
}
