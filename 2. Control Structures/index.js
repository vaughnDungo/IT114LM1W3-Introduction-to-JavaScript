/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

console.log("Random Number:", randomNumber);

if (randomNumber > 50) {
  console.log("more than fifty");
}

else {
    console.log("Less than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here

console.log("Random Number:", randomNumber);

if (randomNumber % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

console.log("Random Number:", randomNumber);

// Check if randomNumber is a multiple of 3, 5, or both
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (randomNumber % 3 === 0) {
  console.log("Fizz");
} else if (randomNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(randomNumber);
}

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here

const toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";

// Display the result
console.log(`Random Number: ${randomNumber}`);
console.log(`The number is ${toDisplay}.`);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: In JavaScript, a switch statement is a control flow structure that allows you to select one of many code blocks to be executed. 
//It's a more concise and readable way to handle multiple conditions compared to using a series of if-else statements.

// TODO 2.5 Use a for loop to print the numbers 1 to N

// Your code here

let N = 10;

for (let i = 1; i <= N; i++) {
  console.log(i);
}


// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

let myList = [3, 7, 12, 18, 25];
let index = 0;

while (index < myList.length) {
  console.log(myList[index]);
  index++;
}


// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript

// Answer: 
/* In JavaScript, there is no direct "do-while" loop syntax like in some 
other programming languages. However, you can simulate the behavior of a 
do-while loop using a while loop. The key difference between a do-while loop 
and a regular while loop is that a do-while loop guarantees that the code inside 
the loop is executed at least once, as the condition is checked after the loop body.*/

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

let akingListahan = [3, 7, 12, 18, 25];

for (let value of akingListahan) {
  console.log(value);
}


// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

let listahan = [2, 4, 6, 8, 10];

for (let index in listahan) {
  console.log(listahan[index]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

// Sample list
var numberList = [1, 2, 3, 4, 5];

// Using forEach to display each value
numberList.forEach(function(value) {
    console.log(value);
});


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: 

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up resources");
}


