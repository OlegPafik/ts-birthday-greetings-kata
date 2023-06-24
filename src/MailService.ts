import { Employee } from './Entities/Employee'
import { Email } from './Entities/Email'
import { MailServiceInterface } from './_interfaces/MailServiceInterface'
import { Message } from './Entities/Message'
import nodemailer from 'nodemailer'

export class MailService implements MailServiceInterface {
    private readonly _smtpHost: string
    private readonly _smtpPort: number
    private readonly _senderMail: string

    constructor(smtpHost: string, smtpPort: number, senderMail: string) {
        this._smtpHost = smtpHost
        this._smtpPort = smtpPort
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