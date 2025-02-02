import { OurDate } from '../src/domain/entities/OurDate'
import { BirthdayService } from '../src/services/BirthdayService'
import { FilesyncEmployeesRepository } from '../src/infrastructure/FilesyncEmployeesRepository'
import { NodemailerMailManager } from '../src/infrastructure/NodemailerMailManager'
import { messagesSent, startMailhog, stopMailHog } from './mailhog'
import flushPromises from 'flush-promises'

describe('Acceptance', () => {
    const fileName = 'employee_data.txt'
    const employeesRepository = new FilesyncEmployeesRepository(fileName)
    const mailService = new NodemailerMailManager('sender@here.com')
    let service: BirthdayService

    beforeEach(() => {
        startMailhog()

        service = new BirthdayService(employeesRepository, mailService)
    })

    afterEach(() => {
        stopMailHog()
    })

    it('base scenario', async () => {
        service.sendGreetings(new OurDate('2008/10/08'))
        await flushPromises()

        const messages = await messagesSent()
        expect(messages.length).toEqual(1)
        const message = messages[0]
        expect(message.Content.Body).toEqual('Happy Birthday, dear John!')
        expect(message.Content.Headers.Subject[0]).toEqual('Happy Birthday!')
        const tos = message.Content.Headers.To
        expect(tos.length).toEqual(1)
        expect(tos[0]).toEqual('john.doe@foobar.com')
    })

    it('will not send emails when nobodys birthday', async () => {
        service.sendGreetings(new OurDate('2008/01/01'))
        await flushPromises()

        const messages = await messagesSent()
        expect(messages.length).toEqual(0)
    })
})