// Components
import LinkButton from './core/LinkButton'
// Config
import { CONTACT_NAV } from '@/modules/navigation/config'
// Types
import type { ActionThemeProps } from '@/types/common'

/**
 * The main link to contact page
 * @see {@link ActionThemeProps} for props specifications
 * @param ActionThemeProps The component props
 * @returns The LinkToContact component
 */
export default function LinkToContact ({ action, theme }: ActionThemeProps) {
  return (
    <LinkButton href={CONTACT_NAV.href} action={action} theme={theme}>
      {CONTACT_NAV.children}
    </LinkButton>
  )
}
