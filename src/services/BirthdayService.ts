
import { OurDate } from '../domain/entities/OurDate'
import { EmployeesRepository } from '../domain/EmployeesRepository'
import { MailManager } from '../domain/MailManager'

export class BirthdayService {
    private readonly _employeesRepository: EmployeesRepository
    private readonly _mailManager: MailManager

    constructor(employeesRepository: EmployeesRepository, mailManager: MailManager) {
        this._employeesRepository = employeesRepository
        this._mailManager = mailManager
    }

    sendGreetings(ourDate: OurDate) {
        const employees = this._employeesRepository.getAllEmployees();

        employees.forEach((employee) => {
            if (employee.isBirthday(ourDate)) {
                const email = this._mailManager.createEmail(employee)
                this._mailManager.sendMessage(email)
            }
        })
    }
}