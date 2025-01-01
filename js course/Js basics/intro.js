// variables

// in js we use var, let and const to declare variables

let name;
name = "John";
console.log(name);

// reasigning a variable

name = "Evodie";
console.log(name);

//naming varibles
// variable name should be descriptive
// variable name should be short
// variable name should be case-sensitive
// variable name should not be a reserved keyword

// let my-name = "John";// this is not a valid variable name becuase of hyphen
// let my name = "John"; // this is not a valid variable name becuase of space
// let 1myname = "John"; // this is not a valid variable name becuase of number
// console.log(my name);
// console.log(my name);
// console.log(1myname);

// js we camelCase naming convention


//  js data types
// 8 js data types: 1.string, 2. number, 3. boolean, 4. null, 5. undefined, 6. object, 7. symbol, 8. bigint. 

// string
let firstName = "John";

//  number
let age = 30; 

// boolean
let isStudent = true; // true or false

// // null
let car = null; // no value

// undefined
let city; // we don't know the value of city and by default it is undefined

// objects 

let person ={
    name: "John",
    age: 30,
    isStudent: true
}// object


// accessing object properties

console.log(person.age);
console.log(person.name);

//working with objects
// we can access object properties using dot notation or bracket notation

// dot notation

person.name = "Olivin";
console.log(person.name);

// bracket notation

person['name'] = "twizere";
console.log(person['name']);

// Arrays: arrays are used to store multiple values in a single variable

let fruits = ["apple", "banana", "orange"];
fruits[3] = "mango"; //increase the length of the array. On other hand, we can reassign a value at a specific index using this medothod.
console.log(fruits);

// accessing array elements

console.log(fruits[0]);
console.log(fruits[1]); 

// functions: are set of statements that perform a task or calculate a value

function greet(){
    console.log("Evodie bit")
};

greet();

function add(num1, num2){
    // return num1 + num2;
    console.log(num1 + num2);
};
 
add( 2,8);
add(50, 100);

// writing the function that calculate the square of a number.

function square(number){
    console.log(number * number);
    return number * number;
}

square(2);
square(3);
square(4);