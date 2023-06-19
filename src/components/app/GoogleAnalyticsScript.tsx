'use client'
// Components
import Script from 'next/script'
// React
import { useEffect } from 'react'
// Config
import { baseUrl } from '@/modules/app/config'
// Router
import { usePathname } from 'next/navigation'

/** Google analitycs tacking id */
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

/**
 * Add the current page path configuration to google analytics
 * @param pathname The current page path
 */
const addPageView = (pathname: string) => {
// @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: `${baseUrl.origin}${pathname}`
  })
}

/**
 * Google analytics scripts
 * @returns The GoogleAnalyticsScript component
 */
export default function GoogleAnalyticsScript () {
  const pathname = usePathname()

  useEffect(() => {
    addPageView(pathname)
  }, [pathname])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}
