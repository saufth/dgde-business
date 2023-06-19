// Types
import type { Dimensionable } from '@/types/sizing'
import type { ImageExt, LogoType } from '@/types/data-dislay'

/** The core path to images */
export const imagesPath = '/images/'

/** The path to logo images */
export const logosPath = `${imagesPath}logo/`

/** The path to icon images  */
export const iconsPath = `${imagesPath}icons/`

/** The path to picture images */
export const picturesPath = `${imagesPath}pictures/`

/** The image extention configuration */
export const IMG_EXT: Readonly<Record<ImageExt, ImageExt>> = {
  svg: 'svg',
  jpg: 'jpg',
  png: 'png'
}

/** The logo style types configuration */
export const LOGO_TYPES: Readonly<Record<LogoType, LogoType>> = {
  logotype: 'logotype',
  logoname: 'logoname',
  logomark: 'logomark',
  logovertical: 'logovertical'
}

/** The default pictures size */
export const PICTURES_SIZE: Readonly<Dimensionable> = {
  width: 1260,
  height: 840
}
