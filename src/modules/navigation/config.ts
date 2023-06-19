// Config
import { organization } from '../app/config'
// Types
import type { AppRoute, Navigable } from '@/types/navigation'

/** The application route names configuration */
export const APP_ROUTES: Readonly<Record<AppRoute, AppRoute>> = {
  home: 'home',
  solutions: 'solutions',
  about: 'about',
  values: 'values',
  contact: 'contact'
}

/** The home navigation configuration */
export const HOME_NAV: Readonly<Navigable> = {
  children: 'Inicio',
  href: '/' // The home reference always is '/'
}

/** The solutions section navigation configuration */
export const SOLUTIONS_NAV: Readonly<Navigable> = {
  children: 'Soluciones',
  href: `/#${APP_ROUTES.solutions}`
}

/** The about us section navigation configuration */
export const ABOUT_NAV: Readonly<Navigable> = {
  children: 'Nosotros',
  href: `/#${APP_ROUTES.about}`
}

/** The values section navigation configuration */
export const VALUES_NAV: Readonly<Navigable> = {
  children: 'Valores',
  href: `/#${APP_ROUTES.values}`
}

/** The contact page navigation configuration */
export const CONTACT_NAV: Readonly<Navigable> = {
  children: 'Contáctanos',
  href: `/${APP_ROUTES.contact}`
}

/** The main navigation configuration of the application */
export const NAV_LIST: ReadonlyArray<Readonly<Navigable>> = [
  HOME_NAV,
  SOLUTIONS_NAV,
  ABOUT_NAV,
  VALUES_NAV,
  CONTACT_NAV
]

/** The aria label for navigation directories */
export const navAriaLabel = `${organization} directory`
