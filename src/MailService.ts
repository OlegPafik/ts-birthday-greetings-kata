import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import nodemailer from 'nodemailer'

export class MailService {
    async sendMessage(smtpHost: string, smtpPort: number, sender: string,
        subject: string, body: string, recipient: string) {

        const message = {
            host: smtpHost,
            port: smtpPort,
            from: sender,
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