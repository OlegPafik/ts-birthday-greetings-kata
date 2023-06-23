import Mail from 'nodemailer/lib/mailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface Message extends SMTPTransport.Options, Mail.Options {
}