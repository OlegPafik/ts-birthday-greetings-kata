import { MockEmployeesRepository } from './_fixtures/MockEmployeesRepository'
import { OurDate } from '../src/domain/entities/OurDate'
import { BirthdayService } from '../src/services/BirthdayService'
import { MockMailManager } from './_fixtures/MockMailManager'

describe('BirthdayService', () => {
    let employeesRepository: MockEmployeesRepository
    let mailManager: MockMailManager
    let birthdayService: BirthdayService

    beforeEach(() => {
        employeesRepository = new MockEmployeesRepository()
        mailManager = new MockMailManager()
        birthdayService = new BirthdayService(employeesRepository, mailManager)
    })

    it('base scenario', async () => {
        birthdayService.sendGreetings(new OurDate('2008/10/08'))
        expect(mailManager.employeesContacted[0].firstName).toEqual('Jhon')
        expect(mailManager.deliveredMessages).toEqual(1)
    })

    it('will not send emails when nobodys birthday', async () => {
        birthdayService.sendGreetings(new OurDate('1950/09/05'))
        expect(mailManager.deliveredMessages).toEqual(0)
    })
})