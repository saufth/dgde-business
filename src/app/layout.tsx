// Components
import Footer from '@/components/sections/Footer'
import Navbar from '@/components/navigation/Navbar'
import ScrollProgressBar from '@/components/feedback/ScrollProgressBar'
// Scripts
import GoogleSearchScript from '@/components/app/GoogleSearchScript'
import GoogleAnalyticsScript from '@/components/app/GoogleAnalyticsScript'
// Config
import {
  description,
  keywords,
  authors,
  baseUrl,
  themeColor,
  organization
} from '@/modules/app/config'
// Types
import type { Metadata } from 'next'
import type { Parent } from '@/types/layout'
// Styles
import './globals.css'

/** The main head metadata configuration */
export const metadata: Metadata = {
  title: {
    default: organization,
    template: `%s – ${organization}`
  },
  description,
  keywords,
  applicationName: organization,
  metadataBase: baseUrl,
  authors,
  creator: authors.name,
  publisher: authors.name,
  generator: 'Next.js',
  robots: 'index, follow',
  openGraph: {
    title: organization,
    description,
    url: baseUrl,
    siteName: organization,
    locale: 'es-MX',
    type: 'website'
  },
  themeColor,
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

/**
 * The root layout component of the application
 * @see {@link Parent} for props specification
 * @param Parent The component props
 * @returns The RootLayout component
 */
export default function RootLayout ({ children }: Parent) {
  return (
    <html lang='es-MX'>
      <body>
        <ScrollProgressBar />
        <Navbar />
        {children}
        <Footer />
        <GoogleSearchScript />
        <GoogleAnalyticsScript />
      </body>
    </html>
  )
}
