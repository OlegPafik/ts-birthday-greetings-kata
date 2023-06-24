import { MockEmployeesRepository } from './_fixtures/MockEmployeesRepository'
import { OurDate } from '../src/Entities/OurDate'
import { BirthdayService } from '../src/BirthdayService'
import { MockMailManager } from './_fixtures/MockMailManager'

describe('BirthdayService', () => {
    let employeesRepository: MockEmployeesRepository
    let mailManager: MockMailManager
    let birthDayService: BirthdayService

    beforeEach(() => {
        employeesRepository = new MockEmployeesRepository()
        mailManager = new MockMailManager()
        birthDayService = new BirthdayService(employeesRepository, mailManager)
    })

    it('base scenario', async () => {
        birthDayService.sendGreetings(new OurDate('2008/10/08'))
        expect(mailManager.timesCalled).toEqual(1)
    })

    it('will not send emails when nobodys birthday', async () => {
        birthDayService.sendGreetings(new OurDate('2008/01/01'))
        expect(mailManager.timesCalled).toEqual(1)
    })
})