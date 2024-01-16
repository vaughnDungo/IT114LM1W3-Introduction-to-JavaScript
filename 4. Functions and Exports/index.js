/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here

console.log("4.1")

function greet(name){
    console.log(`Hello, ${name}!`)
}

greet("Vaughn Erik")
console.log()


// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: 

/* both function declarations and function expressions are essential tools in JavaScript for defining 
    and utilizing functions. Understanding their differences in syntax, hoisting behavior, and scoping 
    can help developers make informed decisions based on the specific needs of their code. */

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here

console.log("4.2")
const calculateArea = function(length, width){
    return length * width
}

const area = calculateArea(5, 10)
console.log("Area of a rectangle:", area)
console.log()


// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: 

/*In JavaScript, a callback function is a function that is passed as an 
argument to another function and is executed after the completion of a 
specific task. Callback functions are often used to handle asynchronous 
operations, events, or to ensure that a certain piece of code runs only 
after the completion of another function.

Here's a simple example to illustrate the concept of a callback function. 
Suppose we have a function doSomething that takes a callback function as 
an argument and executes it after performing some task:*/

function doSomething(callback) {
  console.log("Doing something...");
  // Simulating a task that takes time (asynchronous operation)
  setTimeout(function() {
    console.log("Task completed!");
    // Execute the callback function
    callback();
  }, 2000); // Simulating a 2-second delay
}

// Define a callback function
function afterTask() {
  console.log("Callback function executed!");
}

// Call the doSomething function and pass the callback function
doSomething(afterTask);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

console.log("4.3")
function modifyArray(array, callback){
    return array.map(callback)
}

const numbers = [1,2,3,4,5]
const modifiedArray = modifyArray(numbers,function(num){
    return num + 1
})

console.log("Modifed Array:", modifiedArray)
console.log()


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("4.4")

const mathUtils = require('./mathUtils')
const sum = mathUtils.add(2,5) // Change numbers to add
console.log("Sum:", sum)
console.log("PI Constant:", mathUtils.PI)
console.log()


// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

console.log("4.5")

const isPalindrome = require('./isPalindrome')

const wordCheck = "kayak" // change word here
const result = isPalindrome(wordCheck)

if (result){
    console.log(`The word ${wordCheck} is a palindrome.`)
}
else{
    console.log(`The word ${wordCheck} is not a palindrome.`)
}


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 

/* The choice between require/module.exports and import/export depends on the specific 
    context of your project. For Node.js or CommonJS environments, sticking with require 
    and module.exports is appropriate. If you are working in a modern JavaScript environment 
    or using tools that support ES6 modules, using import and export is a more standardized 
    and feature-rich approach.
*/
