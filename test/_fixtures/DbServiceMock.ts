import { Employee } from '../../src/Employee'
import { DbServiceInterface } from '../../src/_interfaces/DbServiceInterface'

export class DbServiceMock implements DbServiceInterface {

    getAllEmployees(): Employee[] {
        const employees = [
            new Employee( "Jhon", "Doe", "2008/10/08", "john.doe@foobar.com"),
            new Employee( "FirstName", "LastName", "2000/01/01", "email@company.com")
        ]
        return employees
    }
}