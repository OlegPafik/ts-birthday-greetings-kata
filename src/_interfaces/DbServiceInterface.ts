import { Employee } from '../Employee'

export interface DbServiceInterface {
    getAllEmployees: () => Employee[]
}