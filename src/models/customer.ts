import { ID } from "./product"

export enum CustomerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export type Customer = {
    id: ID,
    name: string,
    type: CustomerType
}