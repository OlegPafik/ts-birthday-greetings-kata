
import { OurDate } from './OurDate'
import { DbServiceInterface } from './_interfaces/DbServiceInterface'
import { MailServiceInterface } from './_interfaces/MailServiceInterface'

export class BirthdayService {
    private readonly _dbService: DbServiceInterface
    private readonly _mailService: MailServiceInterface

    constructor(dbService: DbServiceInterface, mailService: MailServiceInterface) {
        this._dbService = dbService
        this._mailService = mailService
    }

    sendGreetings(ourDate: OurDate) {
        const employees = this._dbService.getAllEmployees();

        employees.forEach((employee) => {
            if (employee.isBirthday(ourDate)) {
                const recipient = employee.getEmail()
                const body = 'Happy Birthday, dear %NAME%!'.replace('%NAME%',
                    employee.getFirstName())
                const subject = 'Happy Birthday!'
                this._mailService.sendMessage(subject, body, recipient)
            }
        })
    }
}

