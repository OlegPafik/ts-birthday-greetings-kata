import { Employee } from '../Entities/Employee'

export interface DbServiceInterface {
    getAllEmployees: () => Employee[]
}