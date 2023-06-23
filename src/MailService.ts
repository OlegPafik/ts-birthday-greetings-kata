import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import nodemailer from 'nodemailer'

export class MailService {
    private readonly _smtpHost: string
    private readonly _smtpPort: number
    private readonly _senderMail: string

    constructor(smtpHost: string, smtpPort: number, senderMail: string) {
        this._smtpHost = smtpHost
        this._smtpPort = smtpPort
        this._senderMail = senderMail
    }

    async sendMessage(subject: string, body: string, recipient: string) {
        const message = {
            host: this._smtpHost,
            port: this._smtpPort,
            from: this._senderMail,
            to: [recipient],
            subject,
            text: body
        }

        this.deliveryMessage(message)
    }

    // made protected for testing :-(
    protected async deliveryMessage({host, port, ...msg}: Message) {
        const transport = nodemailer.createTransport({host, port})

        await transport.sendMail(msg)
    }
}

export interface Message extends SMTPTransport.Options, Mail.Options {
}