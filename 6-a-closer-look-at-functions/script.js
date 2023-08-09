'use strict';

/**
 * DEFAULT PARAMETERS
 */

const sayHi = (name = '') => console.log(`Hi ${name}`);

sayHi(); // Hi
sayHi('John'); // Hi John

// Use default parameter
const multipleDefaultParams = (a = true, b = true, c = true) => console.log(a, b, c);
multipleDefaultParams(false, undefined, false); // false true false

/**
 * HIGHER ORDER FUNCTIONS - FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
 */

const oneWord = text => text.replaceAll(' ', '').toLowerCase();

const upperFirstWord = text => {
    const [first, ...others] = text.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = (text, fn) => console.log(`Transformed string "${fn(text)}" by ${fn.name}`);

const text = 'I\'m just a random string!';
transformer(text, oneWord); // Transformed string "i'mjustarandomstring!" by oneWord
transformer(text, upperFirstWord); // Transformed string "I'M just a random string!" by upperFirstWord

/**
 * HIGHER ORDER FUNCTIONS - FUNCTIONS RETURNING FUNCTIONS
 */

const greet = greeting => name => console.log(`${greeting}, ${name}!`);
greet('Hello')('David'); // Hello, David!

/**
 * THE call AND apply METHODS
 *
 * The call and apply methods allow you to call methods
 * from another object, so the 'this' keyword is bound to it.
 */

const person1 = {name: 'John'};
const person2 = {name: 'Max'};

const greetPerson = function (greeting) {
    console.log(`${greeting} ${this.name}!`);
};

// CALL
greetPerson.call(person1, 'Hi'); // Hi John!
greetPerson.call(person2, 'Hi'); // Hi Max!

// APPLY
// Works the same as call, but takes an array as the second argument
greetPerson.apply(person1, ['Hello']); // Hello John!
greetPerson.apply(person2, ['Hello']); // Hello Max!

/**
 * THE bind METHOD
 *
 * The bind method also allows to manually set the 'this' keyword.
 * The difference is that it does not call the function but returns a new one
 * with a bound 'this'.
 */

const person3 = {name: 'John'};
const person4 = {name: 'Max'};

const greetSomeone = function (greeting) {
    console.log(`${greeting} ${this.name}!`);
};

const greetJohn = greetSomeone.bind(person3, 'Hi');
const greetMax = greetSomeone.bind(person4);

greetJohn(); // Hi John!
greetMax('Hey'); // Hey Max!

/**
 * IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
 */

// Function expression
(function () {
    console.log('This will never run again!');
})(); // This will never run again!

// Arrow function
(() => console.log('This will never run again!'))(); // This will never run again!
