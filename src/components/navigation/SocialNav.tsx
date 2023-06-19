// Components
import Icon from '../data-display/core/Icon'
import NextLink from 'next/link'
// Utils
import { capitalize } from '@/modules/data-display/utils'
// Types
import type { URLIcon } from '@/types/data-dislay'

/** The organization social networks configuration */
export const SOCIAL_NETWORKS: ReadonlyArray<URLIcon> = [
  {
    name: 'facebook',
    url: new URL('/emahmx?mibextid=LQQJ4d', 'https://www.facebook.com')
  },
  {
    name: 'instagram',
    url: new URL('/emah.mx?igshid=YmMyMTA2M2Y=', 'https://instagram.com')
  },
  {
    name: 'tiktok',
    url: new URL('/@emahmarketing?_t=8ZWM4WdpXB0&_r=1', 'https://www.tiktok.com')
  },
  {
    name: 'linkedin',
    url: new URL('/in/emah-marketing-b58604264', 'https://www.linkedin.com')
  }
]

/**
 * The main social network navigation of application
 * @returns SocialNav component
 */
const SocialNav = () => {
  return (
    <ul className='flex gap-x-5 md:gap-x-3'>
      {SOCIAL_NETWORKS.map((social, key) => {
        const capitalizedName = capitalize(social.name)
        return (
          <li key={key}>
            <NextLink
              href={social.url}
              aria-label={capitalizedName}
              target='_blank'
              rel='noopener'
            >
              <Icon name={social.name} />
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav
