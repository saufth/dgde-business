// Components
import Link from './core/Link'
// Config
import { contactEmail } from '@/modules/app/config'
// Types
import type { ActionAndTheme } from '@/types/common'

/**
 * The main link to redirect to the default email provider interface of the user
 * @see {@link ActionAndTheme} for props specifications
 * @param ActionAndTheme The component props
 * @returns The LinkEmail component
 */
export default function LinkEmail ({ action, theme }: ActionAndTheme) {
  return (
    <div className='max-w-fit'>
      <Link
        href={`mailto:${contactEmail}`}
        action={action}
        theme={theme}
        target='_blank'
        rel='noreferrer'
        underline
      >
        {contactEmail}
      </Link>
    </div>
  )
}
