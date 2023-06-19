// Types
import type { Theme, ThemeVariant } from '@/types/theme'

/** Themes configuration */
export const THEMES: Readonly<Record<Theme, Theme>> = {
  primary: 'primary',
  secondary: 'secondary'
}

/** Theme vriants configuration */
export const THEMES_VARIANT: Readonly<Record<ThemeVariant, ThemeVariant>> = {
  light: 'light',
  dark: 'dark'
}
