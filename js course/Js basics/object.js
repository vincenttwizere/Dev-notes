// javascript objects
// in javascript objects are used to store key value pairs
// objects are created using curly braces

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);

// accessing object properties

console.log(person.name);
console.log(person.age);
console.log(person.city);

// modifying object properties

person.name = "Evodie";
console.log(person.name);

// deleting object properties

delete person.age;
console.log(person);