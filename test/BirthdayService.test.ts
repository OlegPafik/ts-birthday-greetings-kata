import { MockEmployeesRepository } from './_fixtures/MockEmployeesRepository'
import { OurDate } from '../src/Entities/OurDate'
import { BirthdayService } from '../src/BirthdayService'
import { MockMailManager } from './_fixtures/MockMailManager'

describe('BirthdayService', () => {
    let dbService: MockEmployeesRepository
    let mailService: MockMailManager
    let birthDayService: BirthdayService

    beforeEach(() => {
        dbService = new MockEmployeesRepository()
        mailService = new MockMailManager()
        birthDayService = new BirthdayService(dbService, mailService)
    })

    it('base scenario', async () => {
        birthDayService.sendGreetings(new OurDate('2008/10/08'))
        expect(mailService.timesCalled).toEqual(1)
    })

    it('will not send emails when nobodys birthday', async () => {
        birthDayService.sendGreetings(new OurDate('2008/01/01'))
        expect(mailService.timesCalled).toEqual(1)
    })
})