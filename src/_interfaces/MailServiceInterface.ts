import { Email } from 'src/Entities/Email'
import { Message } from './Message'
import { Employee } from 'src/Employee'

export interface MailServiceInterface {
    createEmail: (employee: Employee) => Email
    sendMessage: (email: Email) => void
    deliveryMessage: (message: Message) => void
}