import fs from 'fs'
import path from 'path'
import { Employee } from './Entities/Employee'
import { DbServiceInterface } from './_interfaces/DbServiceInterface'

export class DbService implements DbServiceInterface {
    private readonly _fileName: string

    constructor(fileName: string) {
        this._fileName = fileName
    }

    getAllEmployees(): Employee[] {
        const data = fs.readFileSync(path.resolve(__dirname, `../resources/${this._fileName}`), 'UTF-8')

        // split the contents by new line
        const lines = data.split(/\r?\n/)
        lines.shift()

        const employees = lines.map((line) => {
            const employeeData = line.split(', ')
            return new Employee(employeeData[1], employeeData[0], employeeData[2], employeeData[3])
        })

        return employees
    }
}