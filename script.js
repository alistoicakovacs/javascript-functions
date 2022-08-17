// This is a function to sum all the number between the given numbers(inclusive both numbers) / Exercise on theodinproject;

const sumAll = function (number, ...numbers) {
	
  // first we create an array - total - here we pass in the numbers from the first number give as parameter, till the second number given as parameter.
  let total = [];
  // we create a for loop to find all the number from - to.
  for(i=number;i<=numbers;i++) {
  // we push the numbers to the array
	total.push(i)	
  }
  
  // we declare a variable, where the sum is going to be passed in
  let sum = 0;
  // we loop through the array - total - and we add each element
	for (const num of total){
  // we pass the numbers added to the variable
		sum += num;
  }
  
  // returning the sum
	return sum; 
 }

console.log(sumAll(-1,5))
