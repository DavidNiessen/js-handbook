'use strict';

/**
 * Converting and Checking Numbers
 */

// Numbers are represented in binary form, so there are precision errors
console.log(.1 + .2); // 0.30000000000000004
console.log(.1 + .2 === .3); // false

// Conversion
console.log(Number('23')); // 23
console.log('23'); // 23

// Parsing
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('px30', 10)); // NaN

console.log(Number.parseFloat('5.8rfwc')); // 5.8
console.log(Number.parseFloat('x5.8')); // NaN

// Check if value NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'x')); // true

// Check if value is finite (best way to check if value is a number)
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(20 / 0)); // false

// Check if value is an integer
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger(2.2)); // false
console.log(Number.isInteger(+'2')); // true

/**
 * MATH AND ROUNDING
 */

// Square root
console.log(Math.sqrt(9)); // 3

// Get the maximum/minimum value
console.log(Math.max(4, 1, 7, 3, 2)); // 7
console.log(Math.min(5, 9, 3, 2, 8)); // 2

// Constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Generate random numbers
// example: between 1 and 6
console.log(Math.trunc(Math.random() * 6) + 1);

// Rounding integers
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.7)); // 23

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.7)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.7)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.7)); // 24

// Rounding decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'

/**
 * NUMERIC SEPARATORS
 *
 * Separate numbers in code for better readability
 */

const diameter = 287_460_000_000;
console.log(diameter); // 287460000000

const priceInCents = 345_99;
console.log(priceInCents); // 34599

/**
 * WORKING WITH BigInt
 *
 * Normal integers start to lose precision after they exceed
 * Number.MAX_SAFE_INTEGER (9007199254740991), BigInts don't
 */

// Create BigInt
console.log(4534685453423142536457843423123243546n);
// other Way (only use if value does not exceed max (safe integer value)
console.log(BigInt(453465765645342));

// Operations
console.log(10000n + 10000n); // 20000n
console.log(10000n * 10000n); // 100000000n
// ...

// Mixing regular numbers with BigInts is not allowed
// console.log(1000n + 10); ERROR

/**
 * WORKING WITH DATES
 */

// Create date
const now = new Date(); // 2023-08-11T16:12:40.124Z
console.log(now);

// Parse from string
console.log(new Date('')); // Invalid Date
console.log(new Date('2019-11-30T09:48:16.867Z')); // 2019-11-30T09:48:16.867Z

// Pass data as arguments
console.log(new Date(2023, 7, 11, 18, 19, 0));

// Extract data
const future = new Date(2037, 10, 19, 15, 23);

console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
// getDay() returns the day of the week (e.g. 4 = thursday)
console.log(future.getDay()); // 4
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.getMilliseconds()); // 0

// Convert to ISO string (international standard)
console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

// Get timestamp
console.log(future.getTime()); // 2142253380000

// Convert milliseconds to date
console.log(new Date(2142253380000)); // 2037-11-19T14:23:00.000Z

// Get current timestamp
console.log(Date.now()); // 1691771437292

// Set data
future.setFullYear(2023);
future.setMonth(8);
future.setDate(11);
future.setHours(18);
future.setMinutes(32);
future.setSeconds(0);
future.setMilliseconds(0);

/**
 * OPERATIONS WITH DATES
 */

// Convert to number
const futureDate1 = new Date(2037, 10, 19, 15, 23);
console.log(+futureDate1); // 2142253380000

// Subtract two dates
const futureDate2 = new Date(2036, 10, 19, 15, 23);
const difference = futureDate1 - futureDate2;
const daysPassed = difference / 1000 / 60 / 60 / 24;

console.log(daysPassed); // 365

/**
 * INTERNATIONALIZING DATES (Intl)
 *
 * Format dates for different languages
 * List with ISO language codes: http://www.lingoes.net/en/translator/langcode.htm
 */

console.log(new Intl.DateTimeFormat('de-DE').format(new Date())); // 11.8.2023
console.log(new Intl.DateTimeFormat('en-US').format(new Date())); // 8/11/2023
console.log(new Intl.DateTimeFormat('tr-TR').format(new Date())); // 11.08.2023

// Apply options
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long'
};

console.log(new Intl.DateTimeFormat('de-DE', options)
    .format(new Date())); // Freitag, 11. August 2023 um 21:27

// Get locale from user's browser
// const locale = navigator.language;
// console.log(locale); // en-US

/**
 * INTERNATIONALIZING NUMBERS (Intl)
 *
 * Format numbers for different languages
 * List with ISO language codes: http://www.lingoes.net/en/translator/langcode.htm
 */

const num = 3884764.23;
console.log(new Intl.NumberFormat('en-US').format(num)); // 3,884,764.23
console.log(new Intl.NumberFormat('de-DE').format(num)); // 3.884.764,23
console.log(new Intl.NumberFormat('ar-SY').format(num)); // ٣٬٨٨٤٬٧٦٤٫٢٣

// Apply options
const options2 = {
    style: 'unit',
    unit: 'mile-per-hour'
};

console.log(new Intl.NumberFormat('en-US', options2).format(num)); // 3,884,764.23 mph
console.log(new Intl.NumberFormat('de-DE', options2).format(num)); // 3.884.764,23 mi/h


/**
 * TIMERS: setTimeout AND setInterval
 */

/*
setTimeout

Delays function execution
 */

// This function will be executed after 3 seconds
setTimeout(() => console.log('3 seconds later...'), 3000);

// Because setTimeout is async, the following code will be executed immediately
console.log('I\'m faster!'); // I'm faster! (...) 3 seconds later...

// Pass arguments
setTimeout((...text) =>
    console.log(...text), 1000, 'A', 'B', 'C'); // A B C

// Cancel timer
const timer = setTimeout(() => console.log('I will never ne logged :C'), 1000);
clearTimeout(timer);


/*
setInterval

Repeats a function indefinitely (until cancelled)
 */

// Executed every second
const interval1 = setInterval(() => console.log('A'), 1000);

// Pass arguments
const interval2 = setInterval((...text) =>
    console.log(...text), 1000, 'X', 'Y', 'Z');

// Cancel timer
clearInterval(interval1);
clearInterval(interval2);





