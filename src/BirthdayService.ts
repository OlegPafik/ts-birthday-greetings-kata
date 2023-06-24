
import { OurDate } from './Entities/OurDate'
import { EmployeesRepository } from './_interfaces/EmployeesRepository'
import { MailServiceInterface } from './_interfaces/MailServiceInterface'

export class BirthdayService {
    private readonly _employeesRepository: EmployeesRepository
    private readonly _mailService: MailServiceInterface

    constructor(employeesRepository: EmployeesRepository, mailService: MailServiceInterface) {
        this._employeesRepository = employeesRepository
        this._mailService = mailService
    }

    sendGreetings(ourDate: OurDate) {
        const employees = this._employeesRepository.getAllEmployees();

        employees.forEach((employee) => {
            if (employee.isBirthday(ourDate)) {
                const email = this._mailService.createEmail(employee)
                this._mailService.sendMessage(email)
            }
        })
    }
}