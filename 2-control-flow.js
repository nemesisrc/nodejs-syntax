// control flow - if, else if, else, switch, while, do while, for, break, continue, return
let a = 5;
if (a <0){
    console.log("negative");
}
else if (a == 0){
    console.log("zero");
}
else{
    console.log("positive");
}

// ternary operator - condition ? expression-if-true : expression-if-false
let b = 5;
let result = (b > 0) ? "positive" : "negative";
console.log(result);

// Basic switch syntax
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// switch example with multiple cases sharing the same code
let fruit = "apple";
switch (fruit) {
    case "banana":
    case "apple":
    case "orange":
        console.log("This is a common fruit");
        break;
    case "kiwi":
        console.log("This is a less common fruit");
        break;
    default:
        console.log("Unknown fruit");
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop - executes at least once before checking condition
let j = 0;
do {
    console.log("do while iteration: " + j);
    j++;
} while (j < 3);

// example with do while when condition is false from the start
let k = 5;
do {
    console.log("This will still execute once");
} while (k < 0);

// for loop
for (let z=0; z<5; z++){
    console.log(z);
}
