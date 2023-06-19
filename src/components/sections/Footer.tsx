// Components
import Link from '../navigation/core/Link'
import LinkEmail from '../navigation/LinkEmail'
import LinkLogo from '../navigation/LinkLogo'
import LinkToContact from '../navigation/LinkToContact'
// Config
import { NAV_LIST, navAriaLabel } from '@/modules/navigation/config'
import { organization } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'

/** The main footer of the application */
export default function Footer () {
  return (
    <footer className='bg-secondary'>
      <div className='px-section'>
        <div className='max-w-8xl py-section mx-auto flex flex-col lg:flex-row justify-between gap-y-8'>
          <div className='lg:w-[232px] grid lg:block place-content-center'>
            <LinkLogo theme={THEMES.secondary} />
          </div>
          <nav aria-label={navAriaLabel}>
            <ul className='w-full flex flex-col lg:flex-row gap-y-4 lg:gap-x-6 text-center'>
              {NAV_LIST.map((option, key) => (
                <li key={key}>
                  <Link
                    href={option.href}
                    size={SIZES.sm}
                    theme={THEMES.secondary}
                  >
                    {option.children}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='lg:w-[232px] flex justify-center lg:block lg:text-right'>
            <LinkEmail theme={THEMES.secondary} />
          </div>
          <div className='grid place-content-center lg:hidden'>
            <LinkToContact />
          </div>
        </div>
      </div>
      <div>
        <div className='max-w-8xl px-1 pb-4 mx-auto text-white text-center'>
          {`Copyright ${new Date().getFullYear()} ${organization}. All rights reserved.`}
        </div>
      </div>
    </footer>
  )
}
