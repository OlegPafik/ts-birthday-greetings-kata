import { Employee } from '../../src/domain/entities/Employee'
import { EmployeesRepository } from '../../src/domain/EmployeesRepository'

export class MockEmployeesRepository implements EmployeesRepository {

    getAllEmployees(): Employee[] {
        const employees = [
            new Employee( "Jhon", "Doe", "2008/10/08", "john.doe@foobar.com"),
            new Employee( "FirstName", "LastName", "2000/01/01", "email@company.com")
        ]
        return employees
    }
}