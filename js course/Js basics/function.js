//function is a group of resuable code that performs a specific task. It can be called multiple times to perform the same task multiple times.

// 1. function declaration

function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("John"); // Output: Hello, John  

// 2. Arrow function
const greet = (name) => {
    console.log("Hello, " + name);
};
greet("Charlie");  // Output: Hello, Charlie

//3. Parameters and Arguments

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));  // Output: 15

//4.Default Parameters (ES6)

function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet();        // Output: Hello, Guest
greet("Alice"); // Output: Hello, Alice

//  5. Return Statement

function add(a, b) {
    return a + b;
}
const result = add(5, 10);  // result = 15
console.log(result);  // Output: 15

//Function Hoisting
console.log(greet());  // Output: Hello, world!
function greet() {
    return "Hello, world!";
}

// 6. Anonymous Functions: are the functions without a name

setTimeout(function() {
    console.log("This message is delayed");
}, 1000);

// 7.IIFE (Immediately Invoked Function Expression) 

(function() {
    console.log('Hello, big man')
})();// Output: Hello, big man

//The this Keyword

const person = {    
    name: 'John',
    age: 30,
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  person.greet();// Output: Hello, John