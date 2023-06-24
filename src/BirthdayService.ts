
import { OurDate } from './OurDate'
import { DbServiceInterface } from './_interfaces/DbServiceInterface'
import { MailServiceInterface } from './_interfaces/MailServiceInterface'
// import { Email } from './Entities/Email'
// import { Employee } from './Employee'

export class BirthdayService {
    private readonly _dbService: DbServiceInterface
    private readonly _mailService: MailServiceInterface

    constructor(dbService: DbServiceInterface, mailService: MailServiceInterface) {
        this._dbService = dbService
        this._mailService = mailService
    }

    sendGreetings(ourDate: OurDate) {
        const employees = this._dbService.getAllEmployees();

        // Aquí un filter de employees a otro array de celebratingTodayEmployees, y mejor dentro del dbService.
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

    // private createEmail(employee: Employee): Email {
    //     const email: Email = {
    //         subject: 'Happy Birthday!',
    //         body: 'Happy Birthday, dear %NAME%!'.replace('%NAME%', employee.getFirstName()),
    //         recipient: employee.getEmail()
    //     }

    //     return email
    // }
}

// CreateEmail with Email (subject, body, recipient). Introduce to mailService.