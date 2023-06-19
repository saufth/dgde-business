'use client'
// Components
import Button from '@/components/input/core/Button'
// React
import { useRef, FormEvent, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
// Types
import type { MailerData } from '@/types/common'

/** The google recaptcha site key */
const recaptchaSitekey = String(process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY)

/** The contact form of the application */
export default function ContactForm () {
  // The modal state
  const [modalMessageState, setModalMessageState] = useState<string>('')
  // The send button state
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState<boolean>(false)

  // The form reference
  const formRef = useRef<HTMLFormElement>(null)
  // The recaptcha reference
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  // The modal reference
  const dialogRef = useRef<HTMLDialogElement>(null)

  /**
   * Open the modal
   * @param message The message to show in the modal
   */
  const openModal = (message: string) => {
    setModalMessageState(message)
    dialogRef.current?.showModal()
  }
  /** Close the modal */
  const closeModal = () => {
    dialogRef.current?.close()
    setIsSendButtonDisabled(false)
  }

  /**
   * Used for send emails from contact form
   * @param event The form event used for prevent default
   */
  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!recaptchaRef.current?.getValue()) {
      openModal('Porfavor, verifica que no eres un robot.')
      return
    }

    const data: MailerData = {
      name: String(event.currentTarget.contactName.value),
      email: String(event.currentTarget.contactEmail.value),
      message: String(event.currentTarget.contactMessage.value)
    }

    setIsSendButtonDisabled(true)
    const response = await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    response.ok && formRef.current?.reset()

    const { message: responseMessage } = await response.json()
    openModal(responseMessage)
  }

  return (
    <>
      <form
        className='space-y-8'
        onSubmit={sendEmail}
        ref={formRef}
      >
        <div>
          <input
            className='w-full px-4 py-3 border-b border-b-stone-300 rounded-lg resize-none'
            type='text'
            name='contactName'
            id='contactName'
            placeholder='Tu nombre'
            required
          />
        </div>
        <div>
          <input
            className='w-full px-4 py-3 border-b border-b-stone-300 rounded-lg resize-none'
            type='email'
            name='contactEmail'
            id='contactEmail'
            placeholder='Tu Email'
            required
          />
        </div>
        <div>
          <textarea
            className='w-full px-4 py-3 border-b border-b-stone-300 rounded-lg resize-none'
            name='contactMessage'
            id='contactMessage'
            rows={2}
            placeholder='Cuéntanos sobre tu proyecto'
            defaultValue=''
            required
          />
        </div>

        <div className='flex flex-col items-center gap-y-8'>
          <div className='max-w-fit'>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaSitekey}
            />
          </div>
          <Button type='submit' disabled={isSendButtonDisabled}>
            {!recaptchaRef.current?.getValue() ? 'Enviar' : 'Enviando..'}
          </Button>
        </div>
      </form>

      <dialog className='p-5 m-auto space-y-3' ref={dialogRef}>
        <div className='pb-5 text-lg text-stone-500 border-b border-b-stone-300'>
          {modalMessageState}
        </div>
        <button
          className='font-secondary-medium text-primary float-right'
          onClick={closeModal}
        >
          Cerrar
        </button>
      </dialog>
    </>
  )
}
