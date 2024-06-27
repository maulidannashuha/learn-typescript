import { Manager } from "../src/employee"

describe('interface', () => {
    it('should support indexable interface', () => {
        interface StringArray{
            [index: number]: string
        }

        const names: StringArray = ['maulidan', 'nashuha']

        expect(names).toContain('maulidan')
    })

    it('should support indexable interface with string index', () => {
        interface Dictionary{
            [index: string]: string
        }

        const student: Dictionary = {
            name: 'Maulidan'
        }

        expect(student['name']).toBe('Maulidan')
    })

    it('should support extend interface', () => {
        const manager: Manager = {
            name: 'Maulidan',
            position: 'Manager',
            lead: 10
        }

        expect(manager.lead).toBe(10)
    })

    it('should support function interface', () => { 
        interface Student{
            name: string,
            sayHello(name: string): string
        }

        const student: Student = {
            name: 'Maulidan Nashuha',
            sayHello(name) {
                return `Hello ${name}`
            }
        }

        expect(student.sayHello('Maulidan')).toBe('Hello Maulidan')
    })

    it('should support intersection type', () => {
        interface HasID{
            id: string
        }

        interface HasName{
            name: string
        }

        type Domain = HasID & HasName

        const domain: Domain = {
            id: "1",
            name: "Maulidan"
        }

        expect(domain.id).toBe('1')
    })
})