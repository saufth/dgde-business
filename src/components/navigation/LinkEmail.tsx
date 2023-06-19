// Components
import Link from './core/Link'
// Config
import { contactEmail } from '@/modules/app/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to redirect to the default email provider interface of the user
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkEmail component
 */
export default function LinkEmail ({ theme = THEMES.primary }: Themeable) {
  return (
    <div className='max-w-fit'>
      <Link
        href={`mailto:${contactEmail}`}
        theme={theme}
        rel={['noopener', 'noreferrer']}
        underline
      >
        {contactEmail}
      </Link>
    </div>
  )
}
