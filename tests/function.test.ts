describe('function', () => {
    it('should support function', () => {
        interface AddFunction {
            (value1: number, value2: number): number
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2
        }

        expect(add(1, 2)).toBe(3)
    })

    it('should support function overloading', () => {
        function callMe(value: number): number
        function callMe(value: string): string
        function callMe(value: any): any {
            if (typeof value === 'string')
                return value.toUpperCase()
            else if (typeof value === 'number')
                return value*10
        }

        expect(callMe(1)).toBe(10)
        expect(callMe('Maulidan')).toBe('MAULIDAN')
    })
})