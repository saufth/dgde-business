// Components
import LinkButton from './core/LinkButton'
// Config
import { CONTACT_NAV } from '@/modules/navigation/config'
// Types
import type { ActionAndTheme } from '@/types/common'

/**
 * The main link to contact page
 * @see {@link ActionAndTheme} for props specifications
 * @param ActionAndTheme The component props
 * @returns The LinkToContact component
 */
export default function LinkToContact ({ action, theme }: ActionAndTheme) {
  return (
    <LinkButton href={CONTACT_NAV.href} action={action} theme={theme}>
      {CONTACT_NAV.children}
    </LinkButton>
  )
}
