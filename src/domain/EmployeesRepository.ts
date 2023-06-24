import { Employee } from './entities/Employee'

export interface EmployeesRepository {
    getAllEmployees: () => Employee[]
}