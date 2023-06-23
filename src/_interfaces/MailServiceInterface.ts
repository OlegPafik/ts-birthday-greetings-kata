import { Message } from './Message'

export interface MailServiceInterface {
    sendMessage: (subject: string, body: string, recipient: string) => void
    deliveryMessage: (message: Message) => void
}