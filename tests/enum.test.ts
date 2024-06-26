import { Customer, CustomerType } from "../src/models/customer"

describe('enum', () => { 
    it('should support enum', () => { 
        const customer: Customer = {
            id: 1,
            name: 'John',
            type: CustomerType.REGULAR
        }

        console.log(customer)
    })
})