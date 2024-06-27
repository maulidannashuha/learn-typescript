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
})