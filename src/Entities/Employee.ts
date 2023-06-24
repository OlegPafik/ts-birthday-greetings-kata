import { OurDate } from './OurDate'

export class Employee {

    readonly firstName: string
    private readonly _lastName: string
    private readonly _birthDate: OurDate
    private readonly _email: string

    constructor(firstName: string, lastName: string, birthDate: string, email: string) {
        this.firstName = firstName
        this._lastName = lastName
        this._birthDate = new OurDate(birthDate)
        this._email = email
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this._lastName
    }

    getEmail(): string {
        return this._email
    }

    isBirthday(today: OurDate) {
        return today.isSameDay(this._birthDate)
    }

    equals(obj: object) {
        if (!(obj instanceof Employee)) {
            return false
        }

        if (!this._birthDate.equals(obj._birthDate)) {
            return false
        }
        if (this._email !== obj._email) {
            return false
        }
        if (this.firstName !== obj.firstName) {
            return false
        }
        return this._lastName === obj._lastName
    }
}