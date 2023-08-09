'use strict';

/**
 * DESTRUCTURING ARRAYS
 */

const animals = ['tiger', 'dog', 'elephant'];

const [animal1, animal2, animal3] = animals;
console.log(animal1, animal2, animal3); // tiger dog elephant

const [anim1, , anim3] = animals;
console.log(anim1, anim3); // tiger elephant

// Switch variables
let [x, y] = [1, 2];
[x, y] = [y, x];
console.log(x, y); // 2 1

// Destructure array returned by function
const menu = () => ['burger', 'pizza'];
const [meal1, meal2] = menu();
console.log(meal1, meal2); // burger pizza

// Destructure nested arrays
const nestedArray = [1, 2, [3, 4]];
const [a, b, [c, d]] = nestedArray;
console.log(a, b, c, d); // 1 2 3 4

// Default values
const [p = 1, q = 2, r = 2] = ['X', 'Y'];
console.log(p, q, r); // X Y 2


/**
 * DESTRUCTURING OBJECTS
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1999,
    hobbies: ['racing', 'gaming'],
    car: {
        brand: 'Chevrolet',
        model: 'Corvette C7'
    }
};

const {firstName, lastName} = person;
console.log(firstName, lastName); // John Doe

// Different variable names
const {firstName: name1, birthYear: year} = person;
console.log(name1, year); // John 1999

// Default values
const {age = -1, birthYear} = person;
console.log(age, birthYear); // -1 1999

// Mutating variables
let l = 1;
let k = 2;
const obj = {l: 'X', k: 'Y'};

({l, k} = obj); // Parenthesis are required
console.log(l, k); // X Y

// Nested objects
const {car: {brand, model}} = person;
console.log(brand, model); // Chevrolet Corvette C7

const {hobbies: [hobby1, hobby2]} = person;
console.log(hobby1, hobby2); // racing gaming


/**
 * SPREAD OPERATOR (...)
 *
 * The spread operator allows an iterable (like an array or string) to be
 * expanded into individual elements, or to clone objects.
 *
 * Example: f(...[1, 2, 3, 4]) -> f(1, 2, 3, 4)
 */

// Append array to array
const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2); // [ 1, 2, 3, 4, 5, 6 ]

// Spread operator as argument
console.log(...[1, 2, 3]); // 1 2 3

// Copy array
const friends = ['john', 'max', 'mark'];
const friendsCopy = [...friends];
friendsCopy.pop();

console.log(friends); // [ 'john', 'max', 'mark' ]
console.log(friendsCopy); // [ 'john', 'max' ]

// Join arrays together
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const joinedArray = [...array1, ...array2];
console.log(joinedArray); // [ 1, 2, 3, 4, 5, 6 ]

// Works for all iterables, including strings, maps, sets...
const myName = 'David';
console.log([...myName]); // [ 'D', 'a', 'v', 'i', 'd' ]

// Also works with objects
const car = {
    wheels: 4,
    seats: 4
};

const mercedes = {
    ...car,
    brand: 'Mercedes'
};
console.log(mercedes); // { wheels: 4, seats: 4, brand: 'Mercedes' }


/**
 * REST PATTERN AND PARAMETERS
 */

// Arrays
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others); // 1 2 [ 3, 4, 5 ]

// Object
const {firstName: fName, lastName: lName, ...otherData} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    country: 'Germany',
    parents: ['Johnson', 'Johnetta']
};
console.log(otherData); // { age: 27, country: 'Germany', parents: [ 'Johnson', 'Johnetta' ] }

// Functions
const uppercase = (...strings) => strings.map(string => string.toUpperCase());
console.log(uppercase('hello', 'what\'s up?', 'hi')); // [ 'HELLO', "WHAT'S UP?", 'HI' ]


/**
 * SHORT CIRCUITING (||, &&)
 */

/*
Logical OR (||)

Returns the first truthy value it encounters.
When it cannot find any truthy value, it returns the last evaluated falsy value.
 */
console.log(3 || 'ABC'); // 3 because it is a truthy value
console.log(0 || 'ABC'); // ABC because 0 is a falsy value
console.log(true || 0); // true because it is a truthy value
console.log(undefined || null); // null because undefined is a falsy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello because it is the first truthy value
console.log(undefined || null || '' || false || 0); // 0 because there is no truthy value

/*
Logical AND (&&)

Returns the first falsy value it encounters.
When it cannot find any falsy value, it returns the last evaluated truthy value.
 */
console.log(0 && 'ABC'); // 0
console.log('Hi' && null); // null
console.log(false && true); // false
console.log(1 && 'X' && true && undefined && [1]); // undefined

/**
 * NULLISH COALESCING OPERATOR (??)
 *
 * Returns its right-hand side operand when its left-hand side operand is nullish
 * (null or undefined), otherwise it returns the left-hand side operand.
 */

console.log(3 ?? null); // 3
console.log(undefined ?? 'ABC'); // ABC
console.log(undefined ?? null); // null
console.log(0 ?? 'ABC'); // 0


/**
 * LOGICAL ASSIGNMENT OPERATORS (||=, &&=, ??=)
 */

const restaurant1 = {
    name: 'Restaurant 1',
    guests: 7
};

const restaurant2 = {
    name: 'Restaurant 2',
    owner: 'John'
};

// OR assignment operator
restaurant1.guests ||= 10; // if guests is falsy, set it to 10
restaurant2.guests ||= 10; // if guests is falsy, set it to 10

console.log(restaurant1.guests); // 7
console.log(restaurant2.guests); // 10

// AND assignment operator
restaurant1.owner &&= 'Max'; // if owner is truthy, set it to 'Max'
restaurant2.owner &&= 'Max'; // if owner is truthy, set it to 'Max'

console.log(restaurant1.owner); // undefined
console.log(restaurant2.owner); // Max

// Nullish assignment operator
restaurant1.owner ??= 'Mark'; // if owner is nullish, set it to 'Mark'
restaurant2.owner ??= 'Mark'; // if owner is nullish, set it to 'Mark'

console.log(restaurant1.owner); // Mark
console.log(restaurant2.owner); // Max


/**
 * ENHANCED OBJECT LITERALS
 */

/*
 New way to add object to another object
*/
const myObj1 = {id: 1};
// OLD WAY (BEFORE ES6)
const myObj2 = {obj1: myObj1};
// NEW WAY (AFTER ES6)
const myObj3 = {myObj1};

console.log(myObj2); // { obj1: { id: 1 } }
console.log(myObj3); // { myObj1: { id: 1 } }

/*
 New way to write methods
*/
// OLD WAY
const newObj1 = {
    print: function (text) {
        console.log(text);
    }
};

// NEW WAY (ES6)
const newObj2 = {
    print(text) {
        console.log(text);
    }
};

/*
 Compute properties
*/
const weekdays = ['mon', 'tue', 'wed'];
const openingHours = {
    [weekdays[0]]: '7am - 9pm',
    [weekdays[1]]: '8am - 10pm',
    [weekdays[2]]: '7am - 9pm'
};

console.log(openingHours); // { mon: '7am - 9pm', tue: '8am - 10pm', wed: '7am - 9pm' }

/**
 * OPTIONAL CHAINING (??.)
 */

const max = {
    name: 'Max',
    car: {
        brand: 'Ferrari',
        model: 'FXX K'
    }
};

const mark = {
    name: 'Mark'
};

const maxCarBrand = max?.car?.brand ?? 'none';
const markCarBrand = mark?.car?.brand ?? 'none';

console.log(maxCarBrand); // Ferrari
console.log(markCarBrand); // none

// Check if method exists
console.log({}.someMethod?.(1, 2) ?? 'Method does not exist ');


/**
 * SETS
 *
 * A collection of unique values
 */

// Every value is unique
const mySet = new Set([1, 1, 1, 2, 3, 4, 4, 5]);
console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }

// Get size
console.log(mySet.size); // 5

// Check if Set contains element
console.log(mySet.has(3)); // true
console.log(mySet.has(8)); // false

// Add element
mySet.add(6);
console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 6 }

// Remove element
mySet.delete(1);
console.log(mySet); // Set(5) { 2, 3, 4, 5, 6 }

// Clear Set
mySet.clear();
console.log(mySet); // Set(0) {}

/**
 * MAP FUNDAMENTALS
 *
 * A map is a data structure that pairs keys to values
 */

// Create Map
const userMap = new Map();

// Add a key-value pair
userMap.set('john', 'john@gmail.com');
console.log(userMap); // Map(2) { 'john' => 'john@gmail.com', 'max' => 'max@gmail.com' }

// Because set returns the map, you can chain it
userMap
    .set('max', 'max@gmail.com')
    .set('mark', 'mark@gmail.com')
    .set('tom', 'tom@gmail.com');

// Get value by key
console.log(userMap.get('john')); // john@gmail.com
console.log(userMap.get('abc')); // undefined

// Check if key exists
console.log(userMap.has('john')); // true
console.log(userMap.has('abc')); // false

// Get map size
console.log(userMap.size); // 4

// Remove pair
console.log(userMap.delete('tom'));
console.log(userMap.size); // 3

// Get all keys
console.log(userMap.keys()); // [Map Iterator] { 'john', 'max', 'mark' }

// Get all values
console.log(userMap.values()); // [Map Iterator] { 'john@gmail.com', 'max@gmail.com', 'mark@gmail.com' }

// Get all entries
console.log(userMap.entries()); // [Map Entries] { [ 'john', 'john@gmail.com' ], [ 'max', 'max@gmail.com' ], [ 'mark', 'mark@gmail.com' ] }

// Clear map
userMap.clear();
console.log(userMap); // Map(0) {}


/**
 * WORKING WITH STRINGS
 */

// Access single characters
console.log('ABC'[0]); // A

// Get string length
console.log('123456'.length); // 6

// Get index of string (first occurrence)
console.log('ABCDEFG'.indexOf('E')); // 4
console.log('ABCDEFG'.indexOf('X')); // -1

// Get index of string (last occurrence)
console.log('123232312323'.lastIndexOf('1')); // 7
console.log('123232312323'.lastIndexOf('X')); // -1

// Extract part of the string
console.log('John Doe'.slice(0, 4)); // John
console.log('John Doe'.slice(5, 8)); // Doe
console.log('John Doe'.slice(5)); // Doe

// Change case
console.log('John Doe'.toUpperCase()); // JOHN DOE
console.log('John Doe'.toLowerCase()); // john doe

// Trim string
console.log('  John Doe   '.trim()); // John Doe

// Replacing
console.log('Hi person!'.replace('person', 'John')); // Hi John!

// Replace all occurrences
console.log('x x x'.replaceAll('x', 'y')); // y y y

// Booleans
console.log('ABC'.includes('B')); // true
console.log('ABC'.includes('b')); // false

console.log('ABC'.startsWith('A')); // true

console.log('ABC'.endsWith('C')); // true

// Split
console.log('Hey what\'s up?'.split(' ')); // [ 'Hey', "what's", 'up?' ]
console.log('Hey what\'s up?'.split('')); // [ 'H', 'e', 'y', ' ', 'w', 'h', 'a', 't', "'", 's', ' ', 'u', 'p', '?' ]

const [frstName, lstName] = 'John Doe'.split(' ');
console.log(frstName, lstName); // John Doe

// Join
console.log(['Hey', 'there', 'what\'s', 'up?'].join(' ')); // Hey there what's up?

// Padding
const message = 'How are you?';
console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++++How are you?++++++++++

// Repeat
console.log('H' + 'i'.repeat(20)); // Hiiiiiiiiiiiiiiiiiiii