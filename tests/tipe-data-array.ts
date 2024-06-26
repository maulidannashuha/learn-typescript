describe('array', () => {
    it('learn array', () => {
        const names: string[] = ['maulidan', 'nashuha']

        expect(names).toContain('maulidan')
    })

    it('should readonly', () => {
        const names: ReadonlyArray<String> = ['maulidan']
        // names[1] = 'nashuha'
    })
})