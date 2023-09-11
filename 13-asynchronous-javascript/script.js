'use strict';

// PREPARATIONS
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderData = (data, isNeighbour = false) => {
  const html = `
        <article class="country ${isNeighbour ? 'neighbour' : ''}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
                <h3 class="country__name">${data.name.official}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1_000_000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>'${Object.values(data.languages)[0]}'</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};


/**
 * AJAX Calls: XMLHttpRequest
 *
 * The old way of making AJAX calls
 */

// First request
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/germany');
request.send();

request.addEventListener('load', () => {
  const [data] = JSON.parse(request.responseText);
  renderData(data);

  // Second request
  const [neighborCountry] = data.borders;

  if (!neighborCountry) return;

  const secondRequest = new XMLHttpRequest();
  secondRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighborCountry}`);
  secondRequest.send();

  secondRequest.addEventListener('load', () => {
    const [data] = JSON.parse(secondRequest.responseText);
    renderData(data, true);
  });
});

/**
 * Promises and the Fetch API
 *
 * The modern way of making AJAX calls
 */

const newRequest = fetch('https://restcountries.com/v3.1/name/usa');

const getCountryData = country => {

  // First request
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderData(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Second request
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderData(data[0], true))
    // Handle errors
    .catch(() => alert('An error occurred'))
    // This function will always be executed, even if an error occurs
    .finally(() => console.log('fetch executed'));


};

btn.addEventListener('click', () => getCountryData('usa'));

/**
 * THROWING ERRORS MANUALLY
 */

const throwError = false;
if (throwError) throw new Error('An error occurred'); // Uncaught Error: An error occurred

/**
 * BUILDING A PROMISE
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() >= .5) {
      resolve('You won :D');
    } else {
      reject('You lost :C');
    }
  }, 2000);
});

promise
  // If successful
  .then(res => console.log(res)) // You won :D
  // if failed
  .catch(err => console.log(err));

/**
 * HANDLING ERRORS WITH try/catch/finally
 */

try {
  throw new Error('test');
} catch (error) {
  // This will be executed when an error occurs
  console.log(error); // Error: test
} finally {
  // This will always be executed
  console.log('finally');
}

/**
 * CONSUMING PROMISES WITH async/await
 *
 *  async is used to declare an asynchronous function.
 *  An asynchronous function is a function that returns a Promise.
 *  This Promise resolves with the value that the async function returns
 *  or rejects with an error thrown from within the async function.
 *  An async function can contain an await expression,
 *  which pauses the execution of the async function and waits for the passed Promise's resolution,
 *  and then resumes the function's execution and returns the resolved value.
 */

// Functions declared with async run asynchronously in the background ->
// Does not block the main thread    
const renderJapan = async country => {
  try {
    // Waits for the result of the promise
    // Automatically returns the response value or throws an error
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    renderData(data[0]);
  } catch (error) {
    console.log(error);
  }
};

renderJapan('japan');

/**
 * RUNNING PROMISES IN PARALLEL
 *
 * Promise.all
 * - Returns a single promise that resolves when all the input promises have been resolved.
 *   The returned promise resolves to an array of the results of the input promises
 * - If any promise is rejected, a rejected promise is returned
 */

const getAfterSeconds = (text, seconds) =>
  new Promise(resolve => setTimeout(() =>
    resolve(text), seconds * 1000));

(async () => {

  const data = await Promise.all([
    getAfterSeconds('A', 5),
    getAfterSeconds('B', 1),
    getAfterSeconds('C', 3)
  ]);

  console.log(data); // ['A', 'B', 'C']
})();

/**
 * OTHER PROMISE COMBINATORS: race, allSettled and any
 */

// Promise.race
// Returns the first finished fulfilled promise 
(async () => {
  const response = await Promise.race([
    getAfterSeconds('A', 5),
    getAfterSeconds('B', 1),
    getAfterSeconds('C', 3)
  ]);

  console.log(response); // B
})();

// Use Promise.race to create a timeout
const timeout = sec =>
  new Promise((_, reject) =>
    setTimeout(() =>
      reject(new Error('Request took to long.')), sec * 1000));

Promise.race([
  getAfterSeconds('X', 2),
  timeout(1)
])
  .then(res => console.log(res))
  .catch(error => console.log(error)); // Error: Request took too long

Promise.race([
  getAfterSeconds('X', 1),
  timeout(2)
])
  .then(res => console.log(res)) // X
  .catch(error => console.log(error));

// Promise.allSettled
// Returns a new promise that resolves after all the input promises have settled,
// either resolved or rejected.
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
/*
{status: 'fulfilled', value: 'Success'}
{status: 'rejected', reason: 'Error'}
{status: 'fulfilled', value: 'Another success'}
 */

// Promise.any
// Returns the first fulfilled promise and ignores rejected promises
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));