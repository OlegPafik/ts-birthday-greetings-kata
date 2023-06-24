import { Employee } from '../Entities/Employee'

export interface EmployeesRepository {
    getAllEmployees: () => Employee[]
}