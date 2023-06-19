// Components
import LinkButton from './core/LinkButton'
// Config
import { SOLUTIONS_NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to solutions page component
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToSolutions component
 */
export default function LinkToSolutions ({ theme }: Themeable) {
  return (
    <LinkButton href={SOLUTIONS_NAV.href} theme={theme}>
      {SOLUTIONS_NAV.children}
    </LinkButton>
  )
}
