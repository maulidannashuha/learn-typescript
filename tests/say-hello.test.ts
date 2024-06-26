import { sayHello } from '../src/say-hello'

describe('sayHello', () => {
    it('should return hello eko', () => { 
        const name: string|undefined = 'Eko'

        expect(sayHello(name)).toBe('Hello Eko')
    })

    it('should return hello ', () => { 
        const name: string|undefined = undefined

        expect(sayHello(name)).toBe('Hello ')
    })

    it('should return hello ', () => { 
        const name: string|undefined|null = null

        expect(sayHello(name)).toBe('Hello ')
    })
})