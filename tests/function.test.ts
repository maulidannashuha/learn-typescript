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
})