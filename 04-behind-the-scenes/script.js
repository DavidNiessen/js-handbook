'use strict';

/**
 * SCOPE
 *
 * JavaScript has two type of Scope:
 * - Global Scope
 * - Local Scope (Function Scope and Block Scope)
 */

// GLOBAL SCOPE
let carName = 'Toyota';

function myFunction() {
  // carsName is a global variable and can be accessed from any function
  console.log(carName);
}

myFunction(); // Toyota

// FUNCTION SCOPE
function anotherFunction() {
  let greetings = 'Hello, world!';

  // greetings is a local variable and can not be accessed from outside the function
  console.log(greetings);
}

anotherFunction(); // Hello, world!

try {
  console.log(greetings); // Uncaught ReferenceError: greetings is not defined
} catch (err) {
  console.log(err.message); // greetings is not defined
}

// BLOCK SCOPE
{
  let blockVariable = 'Block Scope';
  console.log(blockVariable);
}

try {
  console.log(blockVariable); // Uncaught ReferenceError: blockVariable is not defined
} catch (err) {
  console.log(err.message); // blockVariable is not defined
}


/**
 * HOISTING
 *
 * Hoisting is a JavaScript feature that moves variable and function declarations
 * to the top of their containing scope during the execution phase, before code has been executed.
 * Only the declarations are hoisted, not initializations.
 * Note: The hoisting feature does NOT apply to let or const variables.
 */

console.log(y); // undefined
var y = 5;

try {
  console.log(z); // Throws error
  let z = 5;
} catch (err) {
  console.log(err.message); // z is not defined
}

/**
 * this KEYWORD
 *
 * In JavaScript, the `this` keyword refers to the object it belongs to.
 * The value of `this` is determined by how a function is called and can have different values
 * depending on the context.
 * In a method, `this` refers to the owner object. Alone, `this` refers to the global object.
 */

/*
METHOD

this = object that is calling the method
 */

const person = {
  name: 'John Doe',
  someFunction: function () {
    return this;
  }
};
console.log(person.someFunction()); // { name: 'John Doe', someFunction: [Function: someFunction] }

/*
SIMPLE FUNCTION CALL

Strict mode: this = undefined
Non-Strict mode: this = window (in the browser)
 */

const someOtherFunction = function () {
  return this;
};
console.log(someOtherFunction()); // undefined

/*
ARROW FUNCTIONS

this is lexically bound (inherited from the surrounding scope)
 */

// Arrow function within surrounding function
const anotherObject = {
  someProperty: 999,
  outerMethod: function () {
    const innerArrowFunction = () => this;
    console.log(innerArrowFunction()); // { someProperty: 999, outerMethod: [Function: outerMethod] }
  }
};
anotherObject.outerMethod();

// Arrow function without surrounding function
const thirdObject = {
  someProperty: 'Hi',
  arrowMethod: () => this
};
console.log(thirdObject.arrowMethod()); // Window object (in browser)


/**
 * arguments KEYWORD
 *
 * arguments is an Array-like object accessible inside functions
 * that contains the values of the arguments passed to that function.
 * It does not work in arrow functions.
 *
 * WARNING: the arguments keyword is an old feature.
 * the new way is called rest parameters.
 */

function funcDeclaration() {
  console.log(arguments);
}

funcDeclaration('A', 46, true, 'B'); // [Arguments] { '0': 'A', '1': 46, '2': true, '3': 'B' }

const funcExpression = function () {
  console.log(arguments);
};
funcExpression('X', 'Y'); // [Arguments] { '0': 'X', '1': 'Y' }


/**
 * PRIMITIVES VS OBJECTS
 *
 * primitives: pass by value
 * objects: pass by reference
 */

// PRIMITIVES (pass by value)
let age = 30;
let oldAge = age; // age is copied
age = 31;

console.log(oldAge); // 30

// OBJECTS (pass by reference)
const john = {
  name: 'John',
};

const max = john; // max points to john
max.name = 'Max';

console.log(john.name); // Max


