//function is a group of resuable code that performs a specific task. It can be called multiple times to perform the same task multiple times.

// 1. function declaration

function greet(name) {
    console.log("Hello, " + name);
  }
  
  greet("John"); // Output: Hello, John  

// Arrow function
const greet = (name) => {
    console.log("Hello, " + name);
};
greet("Charlie");  // Output: Hello, Charlie
