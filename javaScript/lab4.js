//TASK 1 DECLARING FUNCTIONS
//1. Write a function declaration to calculate the sum of two numbers and return the
//result.
console.log('##### TASK 1.1 #####');
function sum(a, b) {
  return a + b;
}
let add = sum(4, 6);
console.log(add);
//2. Write a function expression to calculate the product of two numbers and return
//the result.
console.log('\n##### TASK 1.2 #####')
const multiply = function(a, b) {
  return a * b;
};
let mult = multiply(2, 5);
console.log(mult);
//3. Write an arrow function to calculate the difference between two numbers and
//return the result.
console.log('\n##### TASK 1.3 #####')
const subtract = (a, b) => a - b;
let sub = subtract(10, 4);
console.log(sub);
//TASK 2 PASSING PARAMETERS
//1. Write a function that accepts a variable number of arguments and returns their
//sum using the rest parameter.
console.log('\n##### TASK 2.1 #####')
function sumAll(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}
console.log(sumAll(2, 3, 5));
console.log(sumAll(15, 25, 35, 45, 55));
//2. Write a function that accepts a name parameter with a default value of
//"Anonymous" and returns a greeting message.
console.log('\n##### TASK 2.2 #####')
function greet(name = "Anonymous") {
  return `Hello, ${name}!`;
}
console.log(greet("Enzo"));
console.log(greet());
//3. Write a function that uses the arguments object to calculate the sum of all passed
//arguments.
console.log('\n##### TASK 2.3 #####')
function sumEverthing() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumEverthing(1, 2, 3, 4));
console.log(sumEverthing(2, 5));
console.log(sumEverthing());
//TASK 3 RETURNING VALUES
//1. Write a function that returns an object representing a person with name and age
//properties.
console.log('\n##### TASK 3.1 #####')
function Person(name, age) {
  return {
    name: name,
    age: age
  };
}
console.log(Person("Enzo", 25));
console.log(Person("Alice", 30));
//2. Write a function that returns true if a number is even and false if it is odd.
console.log('\n##### TASK 3.2 #####')
function FalseEven(number) {
  return number % 2 === 0;
}
console.log(FalseEven(4));
console.log(FalseEven(7));
console.log(FalseEven(0));
//3. Write a function that returns undefined by omission.
function omission() {
}
console.log(omission());
//TASK 4 CLOSURES
//1. Write a function that returns another function which prints a message.
//Demonstrate the closure by calling the inner function.
console.log('\n##### TASK 4.1 #####')
function out() {
  return function inner() {
    console.log("Hello from the inner function!");
  };
}
const myFunc = out();
myFunc();

//2. Write a function that creates a private counter using closures. The function should
//return an object with increment and decrement methods to modify the counter.
console.log('\n##### TASK 4.2 #####')
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
