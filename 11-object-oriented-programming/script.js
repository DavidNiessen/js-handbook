'use strict';

/**
 * CONSTRUCTOR FUNCTIONS
 */

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // DON'T DO THIS
    // If you would do this, every instance would have its own copy of the
    // method, which could lead to a performance issue
    // USE PROTOTYPES INSTEAD
    /*
    this.calcAge = function () {
        return 2023 - this.birthYear;
    };
     */
};

const person = new Person('David', 2004);

// WHAT HAPPENS?
// 1. New {} (empty object) is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}


console.log(person); // Person { firstName: 'David', birthYear: 2004 }

/**
 * instanceof OPERATOR
 *
 * The instanceof operator is used to check whether an object is an
 * instance of a particular class or constructor function
 */

const anotherPerson = new Person('John', 1999);
console.log(anotherPerson instanceof Person); // true
console.log({firstName: 'John', birthYear: 1999} instanceof Person); // false

/**
 * PROTOTYPES
 *
 * Every function in javascript automatically has a property called prototype.
 * When an instance is created, it gets access to all methods and properties
 * of the prototype.
 */

Person.prototype.calcAge = function () {
    return 2023 - this.birthYear;
};

console.log(person.calcAge()); // 19

// Access the prototype of the object
// .__prototype__ points to the prototype of the class
console.log(person.__proto__); // { calcAge: [Function (anonymous)] }
console.log(person.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(person)); // true
console.log(Person.prototype.isPrototypeOf(anotherPerson)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

/**
 * PROTOTYPE CHAIN
 *
 * The prototype chain in JavaScript is a mechanism that allows objects to
 * inherit properties from other objects. Every JavaScript object has an internal link,
 * known as a prototype, referencing another object or null. When a property or method is accessed
 * on an object, JavaScript initially looks at the object's own properties. If it cannot find the
 * property there, it follows the prototype link and searches there, continually going up the chain
 * (hence, prototype "chain") until it either finds the property/method or reaches an
 * object with a null prototype. If it reaches null, undefined is returned. This mechanism
 * underlies JavaScript's prototype-based inheritance and property lookup.
 */

console.log(person.__proto__.constructor); // [Function: Person]
// Object is the top of every chain (methods like hasOwnProperty() are inherited from Object
console.log(person.__proto__.__proto__.constructor); // [Function: Object]
console.log(person.__proto__.__proto__.__proto__); // null

/**
 * ES6 Classes
 *
 * ES6 classes are actually constructor functions, but are using a more modern syntax
 */

// Class expression
const ClassExpr = class {
};

// Class declaration
class ClassDecl {
}

// Create class with constructor
class User {
    constructor(id, name, rank) {
        this.id = id;
        this.name = name;
        this.rank = rank;
    }

    // Methods will be added to the prototype property of the class
    isAdmin() {
        return this.rank.toLowerCase() === 'admin';
    }
}

const user = new User(29421, 'user_1', 'user');
console.log(user.isAdmin());

/**
 * GETTERS AND SETTERS
 */

// Getters and setters are methods that "simulate properties"
const bankAccount = {
    movements: [50, 100, 320],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(movement) {
        this.movements.push(movement);
    }
};

console.log(bankAccount.latest); // 320
bankAccount.latest = 110;
console.log(bankAccount.latest); // 110

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }
}

const personInstance = new PersonClass('John', 27);
console.log(personInstance.age); // 27
personInstance.age = 30;
console.log(personInstance.age); // 30


/**
 * STATIC PROPERTIES AND METHODS
 */

class Num {
    static PI = 3.14159;

    static parseNum(str) {
        return new Num(+str);
    }

    constructor(value) {
        this._value = value;
    }

    get value() {
        return this._value;
    }
}

console.log(Num.PI); // 3.14159
const myNum = Num.parseNum('34');
console.log(myNum.value); // 34


/**
 * Object.create()
 *
 * Object.create() is a method in JavaScript that is used to create a new object with
 * the specified prototype object and properties.
 */

// Create the prototype
const PersonPrototype = {
    calcAge() {
        return 2023 - this.birthYear;
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

// Create an object which is linked to the prototype
const david = Object.create(PersonPrototype);
david.init('David', 2004);
console.log(david.calcAge()); // 19


/**
 * INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS
 */

const ParentCF = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

ParentCF.prototype.calcAge = function () {
    return 2023 - this.birthYear;
};


const ChildCF = function (firstName, birthYear, car) {
    Person.call(this, firstName, birthYear);
    this.car = car;
};

// Linking prototypes
ChildCF.prototype = Object.create(Person.prototype);
ChildCF.prototype.constructor = ChildCF;

ChildCF.prototype.drive = function () {
    console.log('Driving 🚗');
};

const child = new ChildCF('Mike', 2002, 'Mercedes');
child.drive(); // Driving 🚗
console.log(child.calcAge()); // 21

/**
 * INHERITANCE BETWEEN CLASSES: ES6 CLASSES
 */

class Vehicle {
    constructor(topSpeed) {
        this._topSpeed = topSpeed;
    }

    logTopSpeed() {
        console.log(this._topSpeed);
    }
}

class Car extends Vehicle {
    constructor(topSpeed, color) {
        super(topSpeed);
        this._color = color;
    }

    logColor() {
        console.log(this._color);
    }
}

const redCar = new Car('240km/h', 'red');
redCar.logTopSpeed(); // 240km/h
redCar.logColor(); // red


/**
 * INHERITANCE BETWEEN CLASSES: Object.create()
 */

const PersonProto = {
    calcAge() {
        return 2023 - this.birthYear;
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`Hi I'm ${this.firstName} and I'm ${this.calcAge()} years old. I'm a ${this.course} student.`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2000, 'Computer Science');
jay.introduce(); // Hi I'm Jay and I'm 23 years old. I'm a Computer Science student.


/**
 * ENCAPSULATION: PROTECTED PROPERTIES AND METHODS
 *
 * Before ES2020, there was no way to define truly private fields, but an underscore
 * in front of the variable shows that it is meant to be private.
 */

class AnotherPerson {
    constructor(birthYear) {
        this._birthYear = birthYear;
        this._currentYear = 2023;
    }

    _calcAge() {
        return this._currentYear - this._birthYear;
    }

    logAge() {
        console.log(this._calcAge());
    }
}

const anotherPerson1 = new AnotherPerson(2000);
anotherPerson1.logAge(); // 23
console.log(anotherPerson1._birthYear); // 2000 -> Can be accessed but shouldn't


/**
 * ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS
 *
 * Truly private properties and methods exist since ES2020.
 */

class YetAnotherPerson {
    // Public fields
    imPublic = 'I\'m public!';
    // Private fields
    #currentYear = 2023;
    #birthYear;

    constructor(birthYear) {
        this.#birthYear = birthYear;
    }

    // Public methods
    logAge() {
        console.log(this.#calcAge());
    }

    // Private methods
    #calcAge() {
        return this.#currentYear - this.#birthYear;
    }
}

const yetAnotherPerson = new YetAnotherPerson(1989);
yetAnotherPerson.logAge(); // 34
console.log(yetAnotherPerson.imPublic); // I'm public!

// console.log(yetAnotherPerson.#birthYear); ERROR
// console.log(yetAnotherPerson.#calcAge()); ERROR


