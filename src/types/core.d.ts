// Types
import { Nameable } from './common'

/** The basi contact data */
export interface MailerData extends Nameable {
  /** The sender email */
  email: string
  /** The email message */
  message: string
}
