/** A generic name property */
export interface Nameable<T = string> {
  /** The name property */
  name: T
}

/** The basi contact data */
export interface MailerData extends Nameable {
  /** The sender email */
  email: string
  /** The email message */
  message: string
}
