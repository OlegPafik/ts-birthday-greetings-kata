import { Employee } from './Employee'
import { OurDate } from './OurDate'
import { DbService } from './DbService'
import { MailService } from './MailService'

export class BirthdayService {
    sendGreetings(fileName: string, ourDate: OurDate, smtpHost: string, smtpPort: number) {
        const dbService = new DbService()
        const mailService = new MailService(smtpHost, smtpPort, 'sender@here.com')
        const employees = dbService.get(fileName);

        // print all lines
        employees.forEach((line) => {
            const employeeData = line.split(', ')
            const employee = new Employee(employeeData[1], employeeData[0], employeeData[2], employeeData[3])
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

