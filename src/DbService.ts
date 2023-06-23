import fs from 'fs'
import path from 'path'

export class DbService {
    private readonly _fileName: string

    constructor(fileName: string) {
        this._fileName = fileName
    }


    getAll(): string[] {
        const data = fs.readFileSync(path.resolve(__dirname, `../resources/${this._fileName}`), 'UTF-8')

        // split the contents by new line
        const lines = data.split(/\r?\n/)
        lines.shift()

        return lines
    }
}