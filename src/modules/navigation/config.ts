// Config
import { organization } from '../app/config'

/** The application route names configuration */
export const APP_ROUTES = {
  home: 'home',
  solutions: 'solutions',
  about: 'about',
  values: 'values',
  contact: 'contact'
} as const

/** The home navigation configuration */
export const HOME_NAV = {
  children: 'Inicio',
  href: '/' // The home reference always is '/'
} as const

/** The solutions section navigation configuration */
export const SOLUTIONS_NAV = {
  children: 'Soluciones',
  href: `/#${APP_ROUTES.solutions}`
} as const

/** The about us section navigation configuration */
export const ABOUT_NAV = {
  children: 'Nosotros',
  href: `/#${APP_ROUTES.about}`
} as const

/** The values section navigation configuration */
export const VALUES_NAV = {
  children: 'Valores',
  href: `/#${APP_ROUTES.values}`
} as const

/** The contact page navigation configuration */
export const CONTACT_NAV = {
  children: 'Contáctanos',
  href: `/${APP_ROUTES.contact}`
} as const

/** The main navigation configuration of the application */
export const NAV_LIST = [
  HOME_NAV,
  SOLUTIONS_NAV,
  ABOUT_NAV,
  VALUES_NAV,
  CONTACT_NAV
] as const

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
