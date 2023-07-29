/**
 * PRINTING TO CONSOLE
 */
console.log('Hii'); // Hii
console.log('ABC', 'DEF', 'GHI') // ABC DEF GHI

/**
 * SENDING AN ALERT
 */
//alert('This is an alert')

/**
 * PROMPT (GET USER INPUT)
 */
// const userInput = prompt('What\'s your favourite number?')

/**
 * USE SEMICOLONS OR NOT?
 */
/*
Semicolons are not necessary but a good practice.
 */

/**
 * "" VS ''
 */
/*
There is no difference between "" and '', it's up to you.
 */
console.log("Hi");
console.log('Hi');

/**
 * VARIABLES
 */
// Declare and assign variables
const firstName = 'David';
const lastName = 'Niessen';
let age = 18;

// Reassign variables
age = 19;

// Constants
const PI = 3.1415;

/**
 * DATA TYPES (PRIMITIVES)
 */
// Number - Floating point numbers
const num1 = 1;
const num2 = 4.5;

// String - Sequence of characters
const str = 'I\'m a string!';

// Boolean - Logical type that can be either true or false
const bool1 = true;
const bool2 = false;

// Undefined - value taken by a variable that is not (yet) defined
let undefinedVariable;

// Null - also means 'empty value'
const nullVariable = null;

// Symbol (ES2015) - a unique identifier
const symb = Symbol('id');

// BigInt (ES2020) - Larger integers than the Number type can hold
const big = 12345n;
const big2 = BigInt(12345); // same as 12345n

/**
 * typeof OPERATOR
 */
console.log(typeof "Hii"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean

/**
 * DYNAMIC TYPING
 *
 * A variable can be assigned to a value of
 * a different type
 */
let someInt = 50;
someInt = 'Hello';
console.log(someInt); // Hello

/**
 * let, const AND var
 */
/*
let -> mutable
 */
let mutableVariable = 3;
// can be reassigned
mutableVariable = 4;

/*
const -> immutable
 */
const immutableVariable = 3;
// immutableVariable = 5 -> not possible

/*
var -> legacy - should be avoided
var is mutable and function scoped
 */
var myVar = 1;
myVar = 2;

/**
 * BASIC OPERATORS
 */
/*
Math and assignment operators
 */
let x = 5 // assignment
// Addition
console.log(5 + 5 + 10); // 20
x += 5 // x = x + 5
// Subtraction
console.log(50 - 10 - 30); // 10R
x -= 2 // x = x - 2
// Multiplication
console.log(5 * 5); // 25
x *= 10 // x = x * 10
// Division
console.log(10 / 2); // 5
x /= 2 // x = x / 2
// Exponentiation
console.log(2 ** 4); // 16 (2^4 -> 2 * 2 * 2 * 2)
x **= 3 // x = x ** 3
// Modulo
console.log(5 % 2); // 1
x %= 2 // x = x % 2

// Addition operator can also be used to concat strings
const myFirstName = 'David';
const myLastName = 'Niessen';
const fullName = myFirstName + ' ' + myLastName;

console.log(fullName); // David Niessen

// pre increment
x = 0;
console.log(++x); // 1
console.log(x); // 1
// pre decrement
x = 1;
console.log(--x); // 0
console.log(x); // 0
// post increment
x = 0;
console.log(x++); // 0
console.log(x); // 1
// post decrement
x = 1
console.log(x--); // 1
console.log(x); // 0

/*
Comparison operators
 */
console.log(1 === 2); // false
console.log(4 === 4); // true

console.log(6 !== 3); // true
console.log(4 !== 4); // false

console.log(5 > 3); // true
console.log(5 < 3); // false

console.log(4 >= 4); // true
console.log(4 >= 3); // true
console.log(4 >= 5); // false

console.log(4 <= 4); // true
console.log(4 <= 3); // false
console.log(4 <= 5); // true

/**
 * TEMPLATE LITERALS
 */
const personFirstName = 'John';
const personJob = 'programmer';
const personBirthYear = 1999;

const personInfo = `${personFirstName} is a ${personJob} and was born in ${personBirthYear}.`;
console.log(personInfo);
const currentYear = 2023;
console.log(`John is ${currentYear - personBirthYear} years old.`);

// multiline string
console.log(`line 1
line 2
line 3`);

/**
 * IF / ELSE STATEMENTS
 */
const someonesAge = 15;
const isOldEnough = someonesAge >= 18;

if (isOldEnough) {
    console.log('You are allowed to drive!');
} else {
    console.log(`You need to wait ${18 - someonesAge} more years :C`);
}

/**
 * TYPE CONVERSION AND COERCION
 */
// Conversion -> manual type conversion
// Coercion -> automatic type conversion (by JavaScript)

// Conversion
const inputYearString = '1991';
console.log(inputYearString + 18); // 199118
const inputYearNumber = Number(inputYearString);
console.log(inputYearNumber + 18); // 2009

console.log(Number('ABC')); // NaN (Not a Number)
console.log(typeof NaN); // number

// Coercion
console.log('I am ' + 18 + ' years old.'); // I am 18 years old.
console.log('5' + 5); // 55
console.log('10' - '7'); // 3
console.log('50' * '3'); // 150

/**
 * TRUTHY AND FALSY VALUES
 */
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean('Hii')); // true
console.log(Boolean(35)); // true
console.log(Boolean({})); // true
console.log(Boolean(-5)); // true

let value;
if (value) {
    console.log('value is defined!');
} else {
    console.log('value is undefined :C');
} // value is undefined :C

/**
 * EQUALITY OPERATORS: == VS ===
 */
// === does not do type coercion (strict)
// == does type coercion (loose)

// ALWAYS use ===

const myAge = 18;
if (myAge === 18) console.log('You are an adult');

console.log(18 === '18'); // false -> different types
console.log(18 == '18'); // true

const favColor = 'red';
if (favColor !== 'green') console.log('Your favourite color is not green');

/**
 * LOGICAL OPERATORS
 */
// AND
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false

// OR
console.log(true || false); // true
console.log(true || true); // true
console.log(true || false); // false
// NOT
console.log(!true); // false
console.log(!false); // true

/**
 * SWITCH STATEMENT
 */
const day = 'monday';

switch (day) {
    case 'monday':
        console.log("It's monday!");
        break
    case 'tuesday':
        console.log("It's tuesday!");
        break
    case 'wednesday':
        console.log("It's wednesday!");
        break
    case 'thursday':
        console.log("It's thursday!");
        break
    case 'friday':
        console.log("It's friday!");
        break
    case 'saturday':
    case 'sunday':
        console.log("It's weekend!");
        break
    default:
        console.log('Unknown day');
}

/**
 * CONDITIONAL (TERNARY) OPERATOR
 */
const johnsAge = 17
const message = johnsAge > 18 ? 'John is an adult.' : 'John is a child.'
console.log(message) // John is a child