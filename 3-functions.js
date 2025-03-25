// different ways to define functions in JavaScript


// 1. Function Declaration
function greet(name){
    console.log(`Hello, ${name}!!`);  // use backticks(``) for dynamic typing 
}
greet('Jack')

// 2. Function Expression
const sayHi = function(name) {          // instead of const, we can also use let
    return `Hi, ${name}!`;
};

// 3. Arrow Function
const welcome = (name) => {
    return `Welcome, ${name}!`;
};

// Arrow Function with implicit return (single line)
const greetShort = name => `Hey, ${name}!`;

// 4. IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('I run immediately!');
})();

// 5. Method in Object
const person = {
    name: 'John',
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    // Shorthand method syntax
    sayHi() {
        return `Hi from ${this.name}`;
    }
};

// 6. Constructor Function
function Person(name) {
    this.name = name;
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
}
const john = new Person('John');



// how to set default function parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!!`;
}
