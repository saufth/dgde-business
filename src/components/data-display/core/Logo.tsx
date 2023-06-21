// Components
import Image from 'next/image'
// Config
import { IMG_EXT, LOGO_TYPES, logosPath } from '@/modules/data-display/config'
import { organization } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { LogoProps } from '@/types/data-dislay'

/** The default logotype height */
const logoHeight = 512

/** Logo component sizes configuration */
const LOGO_SIZES = {
  [LOGO_TYPES.logotype]: {
    width: 597.43401,
    height: logoHeight
  },
  [LOGO_TYPES.logoname]: {
    width: 692.175,
    height: logoHeight
  },
  [LOGO_TYPES.logomark]: {
    width: 525.226,
    height: logoHeight
  },
  [LOGO_TYPES.logovertical]: {
    width: 1735.008,
    height: logoHeight
  }
} as const

/** Logo component size styles configuration */
const LOGO_SIZE_STYLES = {
  [SIZES.sm]: 'h-9',
  [SIZES.md]: 'h-16',
  [SIZES.lg]: 'h-24'
} as const

/**
 * The main logotype of the application
 * @see {@link LogoProps} for props definition
 * @param LogoProps The logo component props
 * @returns The Logo component
 */
export default function Logo ({
  type = LOGO_TYPES.logotype,
  theme = THEMES.primary,
  alt = organization,
  size,
  priority
}: LogoProps) {
  const imageSrc = `${logosPath}${type}-${theme}.${IMG_EXT.svg}`
  const sizeStyle = size ? `w-auto ${LOGO_SIZE_STYLES[size]}` : 'w-full h-auto'

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={sizeStyle}
      width={LOGO_SIZES[type].width}
      height={LOGO_SIZES[type].height}
      priority={priority}
    />
  )
}
