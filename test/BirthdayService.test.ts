import { DbServiceMock } from './_fixtures/DbServiceMock'
import { OurDate } from '../src/Entities/OurDate'
import { BirthdayService } from '../src/BirthdayService'
import { MailServiceMock } from './_fixtures/MailServiceMock'

describe('BirthdayService', () => {
    let dbService: DbServiceMock
    let mailService: MailServiceMock
    let birthDayService: BirthdayService

    beforeEach(() => {
        dbService = new DbServiceMock()
        mailService = new MailServiceMock()
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