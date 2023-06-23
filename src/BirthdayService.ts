
import { OurDate } from './OurDate'
import { DbService } from './DbService'
import { MailService } from './MailService'

export class BirthdayService {
    sendGreetings(fileName: string, ourDate: OurDate, smtpHost: string, smtpPort: number) {
        const dbService = new DbService(fileName)
        const mailService = new MailService(smtpHost, smtpPort, 'sender@here.com')
        const employees = dbService.getAllEmployees();

        // print all lines
        employees.forEach((employee) => {
            if (employee.isBirthday(ourDate)) {
                const recipient = employee.getEmail()
                const body = 'Happy Birthday, dear %NAME%!'.replace('%NAME%',
                    employee.getFirstName())
                const subject = 'Happy Birthday!'
                mailService.sendMessage(subject, body, recipient)
            }
        })
    }
}

