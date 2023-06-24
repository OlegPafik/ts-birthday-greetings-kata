import { Email } from 'src/domain/entities/Email'
import { Message } from './entities/Message'
import { Employee } from 'src/domain/entities/Employee'

export interface MailManager {
    createEmail: (employee: Employee) => Email
    sendMessage: (email: Email) => void
    deliveryMessage: (message: Message) => void
}