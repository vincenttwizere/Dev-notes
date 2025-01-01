// if else statement

// let create simple program that if the student if aligible for scholarship 

let academicTalent = true;
let economicallyStable = false;
let humanitarianStatus = true;
let sociallyActive = true;

if (academicTalent && economicallyStable && sociallyActive ){
    console.log("You are eligible for scholarship");
} else {
    console.log("You are not eligible for scholarship");
}

//using or operator

if ( academicTalent && sociallyActive || economicallyStable || humanitarianStatus){
    console.log("You are eligible for scholarship");
}
else {
    console.log("You are not eligible for scholarship");
}

// simple program that tells you your native language, after entering your country or origin 

let prompt = require('prompt-sync')();

let country = prompt("Enter your country of origin:");

if (country == "Rwanda")
    console.log(" You speak Kinyarwanda");
else if (country == "Uganda")
    console.log("You speak Luganda");
else if (country == "Tanzania")
    console.log("You speak Swahili");
else
    console.log("I don't know your native language");

// switch statement.

let day = prompt("Enter a number between 1 and 7:");

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

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}
// example 2: a simple program that guide drivers to follow traffic rules

let trafficLight = "red";
let message;

switch (trafficLight){

    case "red":
        message = "Stop";
        break;

    case "yellow":
        message = "Slow down";
        break;

    case "green":
        message = "Go";
        break;

    default:
        message = "Invalid traffic light color";

}

console.log(message);

// example three: building a simple calculator using switch case statement

let number1 = prompt("Enter the first number:");
let operator = prompt("Enter the operator: (+, -, *, /)");
let number2 = prompt("Enter the second number:");
let result;

switch (operator){

    case "+":
        result = number1 + number2;
        break;

    case "-":
        result = number1 - number2;
        break;

    case "*":
        result = number1 * number2;
        // console.log()
        break;

    case "/":
        result = number1 / number2;
        break;



    default:
        console.log("Invalid operator");
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
//for loop

for (let i= 0; i < 5; i++){
    console.log("I love javascript");
}

// for loop with array

let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// while loop

// ----- 1. Basic `while` Loop -----
console.log("Basic while loop:");

let i = 0;
// The while loop checks the condition first before executing the code block
while (i < 5) {
    console.log(i); // Print the current value of 'i'
    i++; // Increment 'i' to avoid an infinite loop
}
// Output: 0 1 2 3 4
// The loop stops once 'i' reaches 5 because the condition 'i < 5' becomes false


// ----- 2. `do...while` Loop -----
console.log("\nBasic do...while loop:");

i = 0; // Reset i
// The do...while loop executes the code block at least once, regardless of the condition
do {
    console.log(i); 
    i++; 
} while (i < 5);
// Output: 0 1 2 3 4
// The loop executes the code block first, then checks the condition
// It stops when 'i' reaches 5 because the condition 'i < 5' becomes false


// ----- 3. Infinite `while` Loop (with `break`) -----
console.log("\nInfinite while loop with break:");

i = 0; // Reset i
// Infinite loop, will run forever without stopping unless we manually break out of it
while (true) {
    console.log(i); // Print the current value of 'i'
    i++; // Increment 'i'

    // Exit the loop once 'i' is greater than 5
    if (i > 5) {
        break; // Break out of the infinite loop when 'i' is greater than 5
    }
}
// Output: 0 1 2 3 4 5
// The loop would run indefinitely if not for the 'break' condition.


// ----- 4. `do...while` Loop with Initial Condition Not Met -----
console.log("\ndo...while loop with initial false condition:");

i = 10; // Set 'i' to a value greater than 5
// The 'do...while' loop runs at least once, regardless of the condition
do {
    console.log(i); // Print the current value of 'i'
    i++; // Increment 'i'
} while (i < 5);
// Output: 10
// Even though the condition 'i < 5' is false initially, the loop runs once
// and then exits because 'i' was incremented after the first execution.

// BREAK STATEMENTS
// The `break` statement in a `while` loop or `do...while` loop terminates the loop prematurely.

// ----- 1. Using `break` in a `while` loop -----
console.log("Using break in a while loop:");

let i = 0;
while (i < 10) {
    if (i === 5) {
        break; 
    }
    console.log(i);
    i++;
}
// Output:
// 0
// 1
// 2
// 3
// 4
// The loop stops when i reaches 5, so it does not print 5 and higher


// ----- 2. Using `break` in a `for` loop -----
console.log("\nUsing break in a for loop:");

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}
// Output:
// 0
// 1
// 2
// The loop stops when i reaches 3, so it does not print 3 and higher


// ----- 3. Using `break` in a `do...while` loop -----
console.log("\nUsing break in a do...while loop:");

i = 0; // Reset i
do {
    if (i === 4) {
        break; 
    }
    console.log(i);
    i++;
} while (i < 10);
// Output:
// 0
// 1
// 2
// 3
// The loop stops when i reaches 4


// ----- 4. Using `break` in a `switch` statement -----
console.log("\nUsing break in a switch statement:");

let dayOfWeek = 3;

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
        console.log("Invalid day");
}
// Output:
// Wednesday
// The break prevents fall-through to the next cases

