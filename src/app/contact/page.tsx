// Components
import ContactForm from '@/components/input/ContactForm'
// Config
import { CONTACT_NAV } from '@/modules/navigation/config'
// Types
import type { Metadata } from 'next'

/** The contact page head metadata configuration */
export const metadata: Metadata = {
  title: CONTACT_NAV.children
}

/** The contact page of the application */
export default function ContactPage () {
  return (
    <main>
      <section className='pt-24 bg-stone-100'>
        <div className='max-w-5xl p-section mx-auto space-y-8 md:space-y-12'>
          <header>
            <h2>Pongámonos en contacto</h2>
          </header>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
