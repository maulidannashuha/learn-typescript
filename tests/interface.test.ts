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
})