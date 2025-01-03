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

// 1. Creating an object using object literal notation
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {  // Method inside an object
      console.log('Hello!');
    }
  };
  person.greet();  // Output: Hello!
  
  // 2. Creating an object using a constructor function
  // Constructor functions allow creating multiple instances of objects with the same properties
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person2 = new Person('Bob', 25);
  console.log(person2.name); // Output: Bob
  console.log(person2.age);  // Output: 25
  
  // 3. Creating an object using Object.create()
  // This method creates a new object with a specified prototype object and properties
  const person3 = Object.create(null); // Creates an object with no prototype (completely empty)
  person3.name = 'Charlie';
  console.log(person3.name);  // Output: Charlie
  
  // 4. Accessing object properties using dot notation
  console.log(person.name);  // Output: Alice
  // Dot notation works when the property name is a valid identifier and known
  
  // 5. Accessing object properties using bracket notation
  // Bracket notation allows using dynamic property names and keys with special characters
  console.log(person['age']);  // Output: 30
  const key = 'name';
  console.log(person[key]);  // Output: Alice
  
  // 6. Modifying object properties
  person.age = 35;  // Updating the 'age' property
  console.log(person.age);  // Output: 35
  
  // 7. Adding new properties to an object
  person.city = 'New York';  // Adding a new property 'city'
  console.log(person.city);  // Output: New York
  
  // 8. Deleting properties from an object
  delete person.city;  // Deletes the 'city' property
  console.log(person.city);  // Output: undefined (since 'city' was deleted)
  
  // 9. Using ES6 shorthand method syntax in objects
  // ES6 provides shorthand syntax for defining methods inside objects
  const dog = {
    name: 'Rex',
    bark() {  // Shortened syntax for defining a method
      console.log('Woof!');
    }
  };
  dog.bark();  // Output: Woof!
  
  // 10. Object.keys() - Get all keys of an object
  // Object.keys() returns an array of the object's own enumerable property names (keys)
  const keys = Object.keys(person);
  console.log(keys);  // Output: ['name', 'age', 'greet'] (keys of the 'person' object)
  
  // 11. Object.values() - Get all values of an object
  // Object.values() returns an array of the values of the object's properties
  const values = Object.values(person);
  console.log(values);  // Output: ['Alice', 35, function] (values of the 'person' object)
  
  // 12. Object.entries() - Get an array of key-value pairs
  // Object.entries() returns an array of [key, value] pairs, which can be used for iteration
  const entries = Object.entries(person);
  console.log(entries);
  // Output: [['name', 'Alice'], ['age', 35], ['greet', function]] 
  
  // 13. Property Descriptors - Define and get property descriptors
  // Property descriptors include characteristics like value, writable, enumerable, configurable
  Object.defineProperty(person, 'age', {
    value: 40,  // The value of the 'age' property
    writable: false,  // The property can't be modified
    enumerable: true,  // The property will be included in loops (e.g., for...in)
    configurable: true  // The property can be deleted or reconfigured later
  });
  console.log(Object.getOwnPropertyDescriptor(person, 'age'));
  // Output: { value: 40, writable: false, enumerable: true, configurable: true }
  
  // 14. Object.freeze() - Prevents modification of an object (deep freeze is not possible)
  // When you freeze an object, it becomes immutable — you can't modify, add, or delete properties.
  Object.freeze(person);
  person.age = 50;  // This won't change the 'age' property because the object is frozen
  console.log(person.age);  // Output: 40 (the object is still frozen)
  
  // 15. Object.seal() - Prevents addition or deletion of properties
  // The seal method allows property values to be modified, but no new properties can be added or existing ones removed.
  Object.seal(person);
  person.country = 'USA';  // Won't add the 'country' property because the object is sealed
  console.log(person.country);  // Output: undefined (property not added)
  person.age = 45;  // Modifying the 'age' property works because the property is not frozen
  console.log(person.age);  // Output: 45
  
  // 16. Object.assign() - Shallow copy properties from one object to another
  // Object.assign() copies the values of all enumerable properties from one or more source objects to a target object
  const newPerson = Object.assign({}, person);  // Create a shallow copy of 'person'
  newPerson.name = 'David';  // Modifying the copy
  console.log(newPerson.name);  // Output: David
  console.log(person.name);  // Output: Alice (original object is not affected)
  
  // 17. Spread syntax for objects - Shallow copy using the spread operator
  // The spread operator allows you to quickly copy properties from one object into another.
  const copiedPerson = { ...person };  // Creating a shallow copy using the spread operator
  copiedPerson.age = 50;  // Modifying the copied object
  console.log(copiedPerson.age);  // Output: 50
  console.log(person.age);  // Output: 45 (original object remains unaffected)
  
  // 18. Object.is() - Compares two values for strict equality (similar to === but with some differences)
  // Object.is() is like strict equality but has some nuances (like handling +0 and -0)
  console.log(Object.is(0, -0));  // Output: false (different sign)
  console.log(Object.is(NaN, NaN));  // Output: true (special case for NaN, === would return false)
  
  // 19. Using dynamic property names (ES6 computed property names)
  // You can use expressions inside square brackets to compute property names dynamically
  const key = 'age';
  const dynamicObject = {
    [key]: 30  // Property name 'age' is dynamically computed from the 'key' variable
  };
  console.log(dynamicObject.age);  // Output: 30
  
  // 20. Using the 'this' keyword in objects and constructors
  // The 'this' keyword refers to the object that is executing the current function
  const car = {
    brand: 'Tesla',
    model: 'Model S',
    displayInfo() {
      console.log(`Car: ${this.brand} ${this.model}`);  // 'this' refers to the 'car' object
    }
  };
  car.displayInfo();  // Output: Car: Tesla Model S
  
  // 21. Using class syntax (ES6) to create an object
  // ES6 classes provide a more concise and readable way to define object constructors and methods
  class Animal {
    constructor(name, sound) {
      this.name = name;  // 'this' refers to the current instance of the class
      this.sound = sound;
    }
    speak() {
      console.log(`${this.name} says ${this.sound}`);  // Using 'this' inside the class method
    }
  }
  const dog2 = new Animal('Dog', 'Woof');
  dog2.speak();  // Output: Dog says Woof
  
  // 22. JSON - Converting an object to JSON and back
  // JSON.stringify() converts an object to a JSON string
  // JSON.parse() converts a JSON string back to a JavaScript object
  const personJson = JSON.stringify(person);  // Convert object to JSON string
  console.log(personJson);  // Output: '{"name":"Alice","age":45,"greet":{}}'
  
  const parsedPerson = JSON.parse(personJson);  // Convert JSON string back to an object
  console.log(parsedPerson);  // Output: { name: 'Alice', age: 45, greet: {} }
  
  // 23. Shallow copy vs Deep copy (manually)
  // A shallow copy copies the top-level properties, but nested objects remain references to the original objects
  const nestedObject = { name: 'John', details: { age: 25, city: 'LA' } };
  const shallowCopy = Object.assign({}, nestedObject);  // Shallow copy
  shallowCopy.details.age = 30;  // Modify the nested object in the copy
  console.log(nestedObject.details.age);  // Output: 30 (shallow copy points to the same nested object)
  
  const deepCopy = JSON.parse(JSON.stringify(nestedObject));  // Deep copy using JSON methods
  deepCopy.details.age = 35;  // Modify the nested object in the deep copy
  console.log(nestedObject.details.age);  // Output: 30 (original object is unaffected)
  
  // 24. WeakMap and WeakSet - Example usage
  // WeakMap: A collection of key-value pairs where the keys are objects and the values can be any type.
  // WeakSet: A collection of objects where each object is stored weakly (no strong reference).
  const weakMap = new WeakMap();
  const obj = {};  // WeakMap keys must be objects
  weakMap.set(obj, 'This is a weak map entry');
  console.log(weakMap.get(obj));  // Output: 'This is a weak map entry'
  
  const weakSet = new WeakSet();
  const obj2 = {};
  weakSet.add(obj2);  // Add object to weak set
  console.log(weakSet.has(obj2));  // Output: true
  