import {Category, Product} from '../src/models/product'

describe('type alias', () => {
    it('should support in typescript', () => {
        const category: Category = {
            id: 1,
            name: 'Food'
        }

        const product: Product = {
            id: 1,
            name: 'Rice',
            price: 10,
            category: category
        }
    })
})