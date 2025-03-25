// mathUtils.js

// Exporting a variable
export const PI = 3.14159;

// Exporting a function
export function add(a, b) {
    return a + b;
}

// Exporting a class
export class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// You can also export multiple things at once
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };