import { Email } from 'src/Entities/Email'
import { MailServiceInterface } from '../../src/_interfaces/MailServiceInterface'
import { Message } from '../../src/_interfaces/Message'
import { Employee } from 'src/Employee'

export class MailServiceMock implements MailServiceInterface {
    timesCalled: number = 0

    createEmail(employee: Employee): Email {
        const email: Email = {
            subject: 'Happy Birthday!',
            body: 'Happy Birthday, dear %NAME%!'.replace('%NAME%', employee.getFirstName()),
            recipient: employee.getEmail()
        }

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
        this.timesCalled = this.timesCalled + 1;
    }
}