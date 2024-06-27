export interface Employee{
    name: string,
    position: string
}

export interface Manager extends Employee{
    lead: number
}