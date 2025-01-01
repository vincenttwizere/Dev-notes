//js operators
// in js we have different types of operators: arithmatic operators, comparison operators, logical operators, bitwise operators, etc

// arithmatic operators: +, -, *, /, %: are used to perfom calculations to produce a result.

let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//Assignement and comparison operators: =, ==, ===, !=, !==, >, <, >=, <=, etc: are used to assign or compare values.

let a = 10;
let b = 5;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// logical operators: &&, ||, !: are used to perform logical operations to produce a result.

let c = true;
let d = false;

console.log(c && d);
console.log(c || d);
console.log(!c);    

// let consider a real world application of the logical operators
// using && operator.

let academicTalent = true;
let physicalTalent = true;
let integrity = false;

if(academicTalent && physicalTalent){
    console.log("You are allowed to join military Academy");
}

if (academicTalent && physicalTalent || integrity){
    console.log("You are allowed to join military Academy");
}

// bitwise operators: &, |, ^, ~, <<, >>, >>>: are used to perform bitwise operations to produce a result.

let e = 10;
let f = 5;

console.log(e & f); 
console.log(e | f);
console.log(e ^ f); 
console.log(~e);
console.log(e << f);    
console.log(e >> f);
console.log(e >>> f);          
