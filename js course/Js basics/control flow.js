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