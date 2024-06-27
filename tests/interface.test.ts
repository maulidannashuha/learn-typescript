describe('interface', () => {
    it('should support indexable interface', () => {
        interface StringArray{
            [index: number]: string
        }

        const names: StringArray = ['maulidan', 'nashuha']

        expect(names).toContain('maulidan')
    })
})