'use strict';

/**
 * SELECTING ELEMENTS
 */

// Select document, head and body elements
console.log(document.documentElement); // <html lang="en"> ... </html>
console.log(document.head); // <head> ... </head>
console.log(document.body); // <body> ... </body>

// Select element by class
console.log(document.querySelector('.header__title')); // <h2 class="header__title">HEADER</h2>

// Select element by id
console.log(document.querySelector('#header')); // <header id="header"> ... </header>
// or 
console.log(document.getElementById('header')); // <header id="header"> ... </header>

// Select multiple elements (returns a static NodeList that won't update automatically)
console.log(document.querySelectorAll('.header__title')); // NodeList(2)
// Select multiple elements (returns a live HTMLCollection which automatically updates when
// the document is changed)
console.log(document.getElementsByClassName('header__title')); // HTMLCollection(2)

// Get elements by tag name
console.log(document.getElementsByTagName('p')); // HTMLCollection(2)

// Get elements by name
console.log(document.getElementsByName('fname')); // NodeList

/**
 * CREATING AND INSERTING ELEMENTS
 */

// Insert
const shoppingList = document.querySelector('.shopping-list');
shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list__item">Oil</li>`);

// Create
const message = document.createElement('h3');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics.';

document.body.prepend(message);
// Also possible: append, before, after

/**
 * DELETING ELEMENTS
 */

const firstListElement = document.querySelectorAll('.shopping-list__item')[0];
firstListElement.remove();

/**
 * CLASSES
 */

const header = document.querySelector('#header');

// Add class
header.classList.add('new-class');

// Remove class
header.classList.remove('new-class');

// Toggle
header.classList.toggle('new-class');

// Contains
console.log(header.classList.contains('new-class')); // true

/**
 * CSS STYLES
 */

// Setting a style
header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

// Getting a style
console.log(header.style.backgroundColor); // rgba(0, 0, 0, 0.2)
// The following won't work because you can only access inline styles like this
console.log(header.style.display); //  (empty)
// Correct way
console.log(getComputedStyle(header).display); // flex

// CSS custom properties (variables)
// Set
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Get
console.log(document.documentElement.style.getPropertyValue('--color-primary')); // orangered

/**
 * ATTRIBUTES
 */
const icon = document.querySelector('.header__icon');

// Setting attributes
icon.src = 'assets/icon.png';
icon.alt = 'Icon';

// Setting non-standard attributes
icon.setAttribute('designer', 'David');

// Getting attributes
console.log(icon.alt); // Icon

// Getting non-standard attributes
console.log(icon.getAttribute('designer')); // David

// Data Attributes
// Get
console.log(icon.dataset.versionNumber); // 3.0

// Set
icon.dataset.versionNumber = '4.0';


/**
 * LISTENING FOR EVENTS
 */

// Click event
header.addEventListener('click', () => header.style.backgroundColor = 'yellow');

/**
 * REMOVING EVENT LISTENERS
 */
const handler = () => alert('Hi');
header.addEventListener('mouseenter', handler);
header.removeEventListener('mouseenter', handler);

/**
 * EVENT PROPAGATION
 *
 * Event propagation in JavaScript involves three phases:
 *
 * Capture phase: The event first moves from window down to the target
 * element. But few events are not visible in this phase. (DISABLED BY DEFAULT)
 *
 * Target phase: This is the actual target of the event,
 * in other terms, the element where the event has occurred.
 *
 * Bubbling phase: After the target phase, the event moves up from the target
 * to the parent elements and the DOM tree. This is known as bubbling,
 * where the event bubbles up from the deepest target
 * element to the document object level. (ENABLED BY DEFAULT)
 */

///////////////////////////////////////////
// Capturing (disabled by default)
const section1 = document.querySelector('.propagation__section--1');
const container1 = document.querySelector('.propagation__container--1');
const button1 = document.querySelector('.propagation__button--1');

section1.addEventListener('click', event => {
    event.preventDefault();
    console.log('SECTION CLICKED');
}, true); // This argument enables the capturing phase and disables bubbling

container1.addEventListener('click', event => {
    event.preventDefault();
    console.log('CONTAINER CLICKED');
}, true); // This argument enables the capturing phase and disables bubbling

button1.addEventListener('click', event => {
    event.preventDefault();
    console.log('BUTTON CLICKED');
}, true); // This argument enables the capturing phase and disables bubbling

/*
OUTPUT (only the button was clicked)

SECTION CLICKED
CONTAINER CLICKED
BUTTON CLICKED
 */


///////////////////////////////////////////
// Bubbling (enabled by default)
const section2 = document.querySelector('.propagation__section--2');
const container2 = document.querySelector('.propagation__container--2');
const button2 = document.querySelector('.propagation__button--2');


section2.addEventListener('click', event => {
    event.preventDefault();
    console.log('SECTION CLICKED');
});

container2.addEventListener('click', event => {
    event.preventDefault();
    console.log('CONTAINER CLICKED');
});

button2.addEventListener('click', event => {
    event.preventDefault();
    console.log('BUTTON CLICKED');
});

/*
OUTPUT (only the button was clicked)

BUTTON CLICKED
CONTAINER CLICKED
SECTION CLICKED
 */

///////////////////////////////////////////
// Bubbling disabled (manually)
const section3 = document.querySelector('.propagation__section--3');
const container3 = document.querySelector('.propagation__container--3');
const button3 = document.querySelector('.propagation__button--3');


section3.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation(); // Disables bubbling

    console.log('SECTION CLICKED');
});

container3.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation(); // // Disables bubbling

    console.log('CONTAINER CLICKED');
});

button3.addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation(); // // Disables bubbling

    console.log('BUTTON CLICKED');
});

/*
OUTPUT (only the button was clicked)

BUTTON CLICKED
 */

/**
 * DOM TRAVERSING
 */

const list = document.querySelector('.shopping-list');
const listItem = document.querySelectorAll('.shopping-list__item')[2];

// Select child with query selector
console.log(list.querySelectorAll('.shopping-list__item')[0]); // <li class="shopping-list__item">...</li>

// Select all child nodes (as static NodeList)
// WARNING: NodeLists also include all comments, texts, etc.
console.log(list.childNodes); // NodeList(4)

// Select all child elements (as live HTMLCollection)
console.log(list.children); // HTMLCollection(4)

// Select first and last child node
// WARNING: Nodes also include all comments, texts etc
console.log(list.firstChild); // #text
console.log(list.lastChild); // <li class="shopping-list__item">...</li>

// Select first and last child element
console.log(list.firstElementChild); // <li class="shopping-list__item">...</li>
console.log(list.lastElementChild); // <li class="shopping-list__item">...</li>

// Select parent node
// WARNING: Nodes also include all comments, texts etc
console.log(listItem.parentNode); // <ul class="shopping-list">...</ul>

// Select parent element
console.log(listItem.parentElement); // <ul class="shopping-list">...</ul>

// Select closest parent element
console.log(listItem.closest('.main')); // <main class="main">...</main>

// Selecting previous and next sibling nodes
// WARNING: Nodes also include all comments, texts etc
console.log(listItem.previousSibling); // #text
console.log(listItem.nextSibling); // #text

// Selecting previous and next sibling elements
// WARNING: Nodes also include all comments, texts etc
console.log(listItem.previousElementSibling); // <li class="shopping-list__item">...</li>
console.log(listItem.nextElementSibling); // <li class="shopping-list__item">...</li>


/**
 * LIFECYCLE DOM EVENTS
 */

// DOMContentLoaded
// Fired when the HTML is parsed and the DOM tree is built
// Also all scripts must be loaded and executed before it is fired
// It does not wait for images etc. to load
document.addEventListener('DOMContentLoaded', () =>
    console.log('HTML parsed and DOM tree built!'));

// load
// Fired when the complete page has finished loading, including
// images, css and external resources
window.addEventListener('load', () =>
    console.log('Page fully loaded!')
);

// beforeunload
// Fired immediately before the user is about to leave the page
window.addEventListener('beforeunload', event => {
    event.preventDefault();
    event.returnValue = '';
});

/**
 * EFFICIENT SCRIPT LOADING: DEFER AND ASYNC
 */

/*
============================================================================
REGULAR (end of body)

EXAMPLE:
<body>
    <main>...</main>

    <script src="script.js">
</body>

DESCRIPTION:
-> Scripts are fetched and executed after
   the HTML is completely parsed
============================================================================
 */


/*
============================================================================
ASYNC (in head)

EXAMPLE:
<head>
    <script async src="script.js">
</head>

DESCRIPTION:
-> Scripts are fetched asynchronously and executed immediately
-> Usually the DOMContentLoaded event waits for all scripts to execute,
   except the async ones. So DOMContentLoaded does not wait for an async script
-> Scripts are not guaranteed to execute in order

=> Use for 3rd-party scripts where order doesn't matter (e.g. Google Analytics)
============================================================================
 */


/*
============================================================================
DEFER (in head)

EXAMPLE:
<head>
    <script defer src="script.js">
</head>

DESCRIPTION:
-> Scripts are fetched asynchronously and executed after the
   HTML is completely parsed
-> DOMContentLoaded event fires after all defer scripts are executed
-> Scripts are executed in order

=> This is overall the best solution! Use for your own scripts and when
   order matters (e.g. including a library)
============================================================================
 */








