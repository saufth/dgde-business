// Config
import { organization, themeColor } from '@/modules/app/config'
// Types
import type { MetadataRoute } from 'next'

/** Generate the manifest document */
export default function sitemap () : MetadataRoute.Manifest {
  return {
    name: organization,
    short_name: 'AppManifest',
    icons: [
      {
        src: '/icon1.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        src: '/icon2.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        src: '/icon3.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon4.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    orientation: 'portrait',
    display: 'standalone',
    theme_color: themeColor,
    background_color: themeColor
  }
}
