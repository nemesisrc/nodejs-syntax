// different ways to declare arrays


// 1. Using the Array constructor
let arr1 = new Array(1, 2, 3, 4, 5);

// 2. Using the square brackets
let arr2 = [1, 2, 3, 4, 5];

// 3. Using the Array.from() method
let arr3 = Array.from([1, 2, 3, 4, 5]);

// 4. Using the Array.of() method
let arr4 = Array.of(1, 2, 3, 4, 5);

// 5. Using the Array.fill() method
let arr5 = new Array(5).fill(1);


// arrays.length
let arr6 = [1, 2, 3, 4, 5];
console.log(arr6.length);       // output: 5
arr6.length = 3;                // set the length of the array to 3
console.log(arr6);


// array destructing
let fruits = ['apple', 'banana', 'cherry'];
[fruit1, fruit2, fruit3] = fruits;
console.log(fruit1); // logs 'apple'
console.log(fruit2); // logs 'banana'
console.log(fruit3); // logs 'cherry'


// skipping elements
let [fruit1, , fruit3] = fruits;
console.log(fruit1); // logs 'apple'
console.log(fruit3); // logs 'cherry'


// spread operator
fruits = ['apple', 'banana', 'cherry'];
let moreFruits = [...fruits, 'date', 'elderberry'];
console.log(moreFruits);        // logs ['apple', 'banana', 'cherry', 'date', 'elderberry']