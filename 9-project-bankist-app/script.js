'use strict';

// Data
const account1 = {
  owner: 'David Nießen',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2021-03-08T14:11:59.604Z',
    '2021-10-27T17:01:17.194Z',
    '2022-07-11T23:36:17.929Z',
    // FOR TESTING PURPOSES
    // 5 days ago
    ((date) => {
      date.setDate(date.getDate() - 5);
      return date.toISOString();
    })(new Date()),
    // yesterday
    ((date) => {
      date.setDate(date.getDate() - 1);
      return date.toISOString();
    })(new Date()),
    // today
    new Date().toISOString()
  ],
  currency: 'EUR',
  locale: 'de-DE', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functions
const formatMovementDate = (date, locale) => {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date1 - date2) / 1000 / 60 / 60 / 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = (value, locale, currency) => new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: currency
}).format(value);

const displayMovements = (account, sort = false) => {
  containerMovements.innerHTML = '';

  const movs = sort ? account.movements.slice().sort((a, b) => a - b) : account.movements;

  movs.forEach((movement, index) => {
    const transactionType = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(date, account.locale);
    const formattedMovement = formatCurrency(movement, account.locale, account.currency);

    const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${transactionType}">${index + 1} ${transactionType}</div>
                <div class="movements__date">${displayDate}</div>
                <div class="movements__value">${formattedMovement}</div>
            </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = account => {
  account.balance = account.movements.reduce((previous, current) =>
    previous + current);

  labelBalance.textContent =
    formatCurrency(account.balance, account.locale, account.currency);
};

const calcDisplaySummary = account => {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((previous, current) => previous + current);
  labelSumIn.textContent =
    formatCurrency(incomes, account.locale, account.currency);

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((previous, current) => previous + current);
  labelSumOut.textContent =
    formatCurrency(Math.abs(out), account.locale, account.currency);

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * account.interestRate / 100)
    .filter(interest => interest >= 1)
    .reduce((previous, current) => previous + current);
  labelSumInterest.textContent =
    formatCurrency(interest, account.locale, account.currency);
};

const createUsernames = accounts => accounts.forEach(account =>
  account.username = account.owner.toLowerCase().split(' ')
    .map(name => name[0]).join(''));
createUsernames(accounts);

const updateUI = account => {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
};

const startLogoutTimer = () => {
  // Set time to 5:00
  let time = 60 * 5;

  // Call timer every second
  const timer = setInterval(() => {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    // In each call, print the remaining time to the UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);

      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = '0';
    }

    // Decrease 1s
    time--;

  }, 1000);

  return timer;
};

// Event handler
let currentAccount;
let timer;

btnLogin.addEventListener('click', event => {
  // Prevent form from submitting
  event.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = '1';

    // Current date
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };

    labelDate.textContent = new Intl
      .DateTimeFormat(currentAccount.locale, options).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);

    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', event => {
  event.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(acc =>
    acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0
    && receiverAccount
    && amount <= currentAccount?.balance
    && receiverAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', event => {
  event.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * .1)) {
    // Add movement

    // Simulate delay
    setTimeout(() => {
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', event => {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username
    && +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', event => {
  event.preventDefault();

  sorted = !sorted;
  displayMovements(currentAccount, sorted);
});