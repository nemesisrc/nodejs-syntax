// main.js

// Importing specific items
import { PI, add, Calculator } from './mathUtils.js';

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5

const calc = new Calculator();
console.log(calc.multiply(4, 5)); // 20

// Importing everything as a namespace
import * as mathUtils from './mathUtils.js';

console.log(mathUtils.subtract(10, 4)); // 6
console.log(mathUtils.divide(20, 5)); // 4