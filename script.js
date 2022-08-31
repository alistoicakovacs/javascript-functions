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
	console.log(this);
};

new Person("Ali", 1992);
// Steps
// 1. A new empty object is created
// 2. The function is called, this = {} - the this keyword is the empty object created in step 1.
// 3. The newly created object {} is linket to prototype
// 4. The function automatically returns the empty object from the beginning {}
