"use strict";
// For THEODINPROJECT -  Project given on the website
// This is a function to sum all the number between the given numbers(inclusive both numbers) / Exercise on theodinproject;

// const sumAll = function (number, ...numbers) {

// first we create an array - total - here we pass in the numbers from the first number give as parameter, till the second number given as parameter.
// let total = [];
// we create a for loop to find all the number from - to.
// for(i=number; i<=numbers; i++) {
// we push the numbers to the array
// total.push(i)
// }

// we declare a variable, where the sum is going to be passed in
// let sum = 0;
// we loop through the array - total - and we add each element
// for (const num of total){
// we pass the numbers added to the variable
// 	sum += num;
// }

// returning the sum
// 	return sum;
//  }

////////////////////////////////
// OOP - Object Oriented Programming

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
	// console.log(this);

	// Never create a method inside a constructor function!!!
	// this.calcAge = function () {
	// 	console.log(2022 - this.birthYear);
	// };
};

const ali = new Person("Ali", 1992);
// Steps
// 1. A new empty object is created
// 2. The function is called, this = {} - the this keyword is the empty object created in step 1.
// 3. The newly created object {} is linket to prototype
// 4. The function automatically returns the empty object from the beginning {}

const jay = "";
const matilda = new Person("Matilda", 2012);
const jack = new Person("Jack", 1975);

// console.log(ali instanceof Person); // true
// console.log(jay instanceof Person); // false

///////////////////////////////
// Prototypes
// console.log(Person.prototype); // returns the constructor, that already has the calcAge function in it

Person.prototype.calcAge = function () {
	console.log(2022 - this.birthYear);
};

ali.calcAge();
matilda.calcAge();
jack.calcAge();

// The this keyword is set to the object that is calling the method

// console.log(Person.prototype.isPrototypeOf(ali)); // true
// this is the way of checking of this is the prototype of another object
// Prototype = Prototype of Linked Objects //

Person.prototype.species = "Homo Sapiens";

// console.log(ali.species, matilda.species); // Returns Homo Sapiens - the species can be found now in the prototype section of the object
/////////////////////////
// Prototypal Inheritance on Built-in Objects
// Object.prototype (top of prototype chain)
// console.log(ali.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor); // f() Person (firstName, birthYear)

const arr = [3, 6, 1, 2, 3, 4, 5, 8]; // --> new Array === [];
console.log(arr.__proto__); // -> all the methods

// adding a method to the Array prototype, in order that any array can use it
Array.prototype.unique = function () {
	return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");

//////////////////////////////
// Coding Challenge #1 - OOP
const Car = function (make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
	this.speed -= 10;
	console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

// console.log(bmw);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();
// mercedes.brake();

/////////////////////////////////////////////
// ES6 Classes

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
	constructor(fullName, birthYear) {
		this.name = name;
		this.birthYear = birthYear;
	} // <- constructor function - needs to be called constructor

	// Instance methods
	// Methods will be added to .prototype property
	calcAge() {
		console.log(2037 - this.birthYear);
	}

	get age() {
		return 2037 - this.birthYear;
	}
	// this is also possible - adding the method inside the class directly
	// greet () {
	// 	console.log(`Hey ${this.name}`)
	// }

	// Set a property that already exists
	set fullName(name) {
		console.log(name);

		if (name.includes(" ")) this._fullName = name;
		else alert(`${name} is not a full name`);
	}

	get fullName() {
		return this._fullName;
	}

	// Static methods
	static hey() {
		console.log(`Hey there 😊`);
		console.log(this);
	}
}

const jessica = new PersonCl("Jessica Davis", 1992);
console.log(jessica);

jessica.calcAge(); // 45
console.log(jessica.age); // 45

PersonCl.prototype.greet = function () {
	console.log(`Hey ${this.name}`);
};

jessica.greet(); // " Hey Jessica "

// 1. Classes are not hoisted
// 2. Classes are first-class citizens --> we can pass them into functions and then return them from functions
// 3. The body of a class is always executed in strict mode

////////////////////////////////////////////////

// Setters and Getters

const walter = new PersonCl("Walter", 1965);

console.log(walter);
PersonCl.hey();

const account = {
	owner: "Ali",
	movements: [200, 300, 120, 520, 300],

	// Getter
	get latest() {
		return this.movements.slice(-1).pop();
	},

	// Setter
	// Any setter method has to have exactly one parameter
	set latest(mov) {
		this.movements.push(mov);
	},
};

console.log(account.latest); // 300

console.log(account.movements); // Array + the 50 added above

////////////////////////////////////////////
// Static methods

// Static class methods are defined on the class itself.
// You cannot call a static method on an Object, only on an object class.

// Points to remember:
// - The static keyword is used to declare a static method.
// - The static method can be  of any name.
// - A class can contain more than one static method.
// - If we declare more than one static method with a similar name, the JavaScript will always invoke the last one.
// - The static method can be used to create utility functions.
// - We can use the this keyword to call a static method within another static method.
// - We cannot use the this keyword directly to call a static method within a non-static method. In such case, we can call the static method either using the class name or as the property of the constructor.
