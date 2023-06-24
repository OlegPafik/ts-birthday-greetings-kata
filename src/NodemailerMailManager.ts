import { Employee } from './Entities/Employee'
import { Email } from './Entities/Email'
import { MailManager } from './_interfaces/MailManager'
import { Message } from './Entities/Message'
import nodemailer from 'nodemailer'

export class NodemailerMailManager implements MailManager {
    private readonly _smtpHost: string = '127.0.0.1'
    private readonly _smtpPort: number = 1025
    private readonly _senderMail: string

    constructor(senderMail: string) {
        this._senderMail = senderMail
    }

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
            host: this._smtpHost,
            port: this._smtpPort,
            from: this._senderMail,
            to: [email.recipient],
            subject: email.subject,
            text: email.body
        }

        this.deliveryMessage(message)
    }

    // made protected for testing :-(, but public for IMailService don't allow protected
    async deliveryMessage({host, port, ...msg}: Message) {
        const transport = nodemailer.createTransport({host, port})

        await transport.sendMail(msg)
    }
}