import { Employee } from '../../src/Entities/Employee'
import { EmployeesRepository } from '../../src/_interfaces/EmployeesRepository'

export class MockEmployeesRepository implements EmployeesRepository {

    getAllEmployees(): Employee[] {
        const employees = [
            new Employee( "Jhon", "Doe", "2008/10/08", "john.doe@foobar.com"),
            new Employee( "FirstName", "LastName", "2000/01/01", "email@company.com")
        ]
        return employees
    }
}