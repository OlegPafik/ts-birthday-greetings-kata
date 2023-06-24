import { Email } from 'src/Entities/Email'
import { MailManager } from '../../src/_interfaces/MailManager'
import { Message } from '../../src/Entities/Message'
import { Employee } from 'src/Entities/Employee'

export class MockMailManager implements MailManager {
    deliveredMessages: number = 0
    employeesContacted: Employee[] = []

    createEmail(employee: Employee): Email {
        const email: Email = {
            subject: 'Happy Birthday!',
            body: 'Happy Birthday, dear %NAME%!'.replace('%NAME%', employee.getFirstName()),
            recipient: employee.getEmail()
        }
        this.employeesContacted.push(employee)
        return email
    }

    async sendMessage(email: Email) {
        const message = {
            to: [email.recipient],
            subject: email.subject,
            text: email.body
        }

        this.deliveryMessage(message)
    }

    // made protected for testing :-(, but public for IMailService don't allow protected
    async deliveryMessage({host, port, ...msg}: Message) {
        this.deliveredMessages = this.deliveredMessages + 1;
    }
}