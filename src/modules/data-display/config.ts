/** The core path to images */
export const imagesPath = '/images/'

/** The path to logo images */
export const logosPath = `${imagesPath}logos/`

/** The path to icon images  */
export const iconsPath = `${imagesPath}icons/`

/** The path to picture images */
export const picturesPath = `${imagesPath}pictures/`

/** The image extention configuration */
export const IMG_EXT = {
  svg: 'svg',
  jpg: 'jpg',
  png: 'png'
} as const

/** The logo style types configuration */
export const LOGO_TYPES = {
  logotype: 'logotype',
  logoname: 'logoname',
  logomark: 'logomark',
  logovertical: 'logovertical'
} as const

/** The default pictures size */
export const PICTURES_SIZE = {
  width: 1260,
  height: 840
} as const
