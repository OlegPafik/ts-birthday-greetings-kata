import { Email } from 'src/Entities/Email'
import { Message } from '../Entities/Message'
import { Employee } from 'src/Entities/Employee'

export interface MailServiceInterface {
    createEmail: (employee: Employee) => Email
    sendMessage: (email: Email) => void
    deliveryMessage: (message: Message) => void
}