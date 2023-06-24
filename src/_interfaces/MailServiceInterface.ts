import { Email } from 'src/Entities/Email'
import { Message } from './Message'

export interface MailServiceInterface {
    sendMessage: (email: Email) => void
    deliveryMessage: (message: Message) => void
}