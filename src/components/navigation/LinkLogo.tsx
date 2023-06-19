// Components
import NextLink from 'next/link'
import Logo from '../data-display/core/Logo'
// Config
import { LOGO_TYPES } from '@/modules/data-display/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main logo link used to redirect to home page
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkLogo component
 */
export default function LinkLogo ({ theme }: Themeable) {
  return (
    <NextLink className='max-w-fit' href='/'>
      <Logo type={LOGO_TYPES.logovertical} theme={theme} size={SIZES.sm} />
    </NextLink>
  )
}
