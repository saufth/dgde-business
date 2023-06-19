// Components
import Script from 'next/script'
// Config
import { baseUrl, organization } from '@/modules/app/config'

/** Google seach scheme */
const SEARCH_SCHEME = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl.href}#organization`,
      name: `${organization}`
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl.href}#website`,
      url: `${baseUrl.href}`,
      name: `${organization}`,
      publisher: {
        '@id': `${baseUrl.href}#organization`
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': `${baseUrl.href}#webpage`,
      url: `${baseUrl.href}`,
      name: `${organization}`,
      about: {
        '@id': `${baseUrl.href}#organization`
      },
      isPartOf: {
        '@id': `${baseUrl.href}#website`
      },
      inLanguage: 'es-MX'
    }
  ]
} as const

/**
 * Add the website JSON ID schema for Google Search to the script of this layout
 * @returns A Javascript object for dangerouslySetInnerHTML
 */
const addWebsiteJsonId = () => {
  return {
    __html: JSON.stringify(SEARCH_SCHEME)
  }
}

/**
 * Google seacrh schema script
 * @returns The GoogleSearchScript component
 */
export default function GoogleSearchScript () {
  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={addWebsiteJsonId()}
      id='WebSite'
    />
  )
}
