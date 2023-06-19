// Config
import { baseUrl } from '@/modules/app/config'
// Types
import type { MetadataRoute } from 'next'

/** Generate the robots document */
export default function Robots () : MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${baseUrl.host}sitemap.xml`
  }
}
