import { MailServiceInterface } from '../../src/_interfaces/MailServiceInterface'
import { Message } from '../../src/_interfaces/Message'

export class MailServiceMock implements MailServiceInterface {
    timesCalled: number = 0

    async sendMessage(subject: string, body: string, recipient: string) {
        const message = {
            to: [recipient],
            subject,
            text: body
        }

        this.deliveryMessage(message)
    }

    // made protected for testing :-(, but public for IMailService don't allow protected
    async deliveryMessage({host, port, ...msg}: Message) {
        this.timesCalled = this.timesCalled + 1;
    }
}