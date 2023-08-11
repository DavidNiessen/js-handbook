'use strict';


/**
 * DATA TRANSFORMATIONS: MAP, FILTER AND REDUCE
 */

/*
map Method

Applies a callback function to all elements of the array
 */
console.log(['6', '3', '9', '2', '20'].map(element => element * 2)); // [ 12, 6, 18, 4, 40 ]
console.log(['a', 'b', 'c', 'd', 'e'].map((element, index) =>
    index % 2 === 0 ? element.toUpperCase() : element)); // [ 'A', 'b', 'C', 'd', 'E' ]

/*
filter Method

Creates a new array populated with all array elements that
pass a provided test function
 */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(num => num % 2 === 0)); // [ 2, 4, 6, 8, 10 ]

/*
reduce Method

The reduce method in JavaScript applies a function to an accumulator
and each element in an array to reduce it to a single value.
 */

// same as 1 + 2 + 3 + 4 + 5
console.log([1, 2, 3, 4, 5].reduce((previous, current) =>
    previous + current)); // 15

/**
 * find AND findIndex METHODS
 */

/*
find

Returns the first element that passes a provided test function
 */
console.log([1, 2, 3, 4, 5].find(element => element > 10)); // undefined
console.log([6, 7, 8, 9, 10, 11, 12].find(element => element > 10)); // 11

/*
findIndex

Returns the index of the first element that passes a provided test function
 */
console.log([1, 2, 3, 4, 5].findIndex(element => element > 10)); // -1
console.log([6, 7, 8, 9, 10, 11, 12].findIndex(element => element > 10)); // 5

/**
 * some AND every METHODS
 */

/*
some

Returns true if any element passes a provided test function
 */
console.log([1, 2, 3, 4, 5].some(element => element > 5)); // false
console.log([1, 2, 3, 4, 5, 6].some(element => element > 5)); // true

/*
every

Returns true if every element passes a provided test function
 */
console.log([1, 2, 3, 4].every(element => element > 5)); // false
console.log([1, 2, 3, 4].every(element => element < 5)); // true

/**
 * flat AND flatMap Methods
 */

/*
flat

The flat method makes a nested array simpler by turning it into a one dimensional array.
 */
console.log([1, 2, [3, 4, [5, 6]]].flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log([1, 2, [3, 4, [5, 6]]].flat(2)); // [ 1, 2, 3, 4, 5, 6 ]

/*
flatMap

A combination of map() and flat() -> first applies a function to each element of
an array and then flattens the result into a single-level array.
 */
console.log([1, 2, [4, 5], 6, 7, [8]]
    .flatMap(element => element)); // [ 1, 2, 4, 5, 6, 7, 8 ]

/**
 * SORTING
 */

console.log([3, 4, 1, 5, 2].sort((a, b) =>
    (a - b))); // [ 1, 2, 3, 4, 5 ]

console.log(['C', 'B', 'D', 'A'].sort((a, b) =>
    a.localeCompare(b))); // [ 'A', 'B', 'C', 'D' ]

/**
 * MORE WAYS OF CREATING AND FILLING ARRAYS
 */

// Create empty arrays
const emptyArray = new Array(7);

console.log(emptyArray); // [ <7 empty items> ]

// Fill array
emptyArray.fill('X');
console.log(emptyArray); // [ 'X', 'X', 'X', 'X', 'X', 'X', 'X' ]

emptyArray.fill('Y', 3);
console.log(emptyArray); // [ 'X', 'X', 'X', 'Y', 'Y', 'Y', 'Y' ]

emptyArray.fill('Z', 2, 5);
console.log(emptyArray); // [ 'X', 'X', 'Z', 'Z', 'Z', 'Y', 'Y' ]

// from Method
console.log(Array.from({length: 7},
    () => 1)); // [ 1, 1, 1, 1, 1, 1, 1 ]

console.log(Array.from({length: 7},
    (_, index) => index + 1)); // [ 1, 2, 3, 4, 5, 6, 7 ]





