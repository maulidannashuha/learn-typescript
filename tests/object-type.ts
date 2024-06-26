describe('object alias', () => {
    it('should support on typescript', () => { 
        const person: { id: number, name: string, description?: string } = {
            id: 1,
            name: 'food'
        }

        console.log(person)
    })
})