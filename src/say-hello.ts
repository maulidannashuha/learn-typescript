export function sayHello(name?: String | null): String {
    return `Hello ${name != undefined ? name : ''}`
}