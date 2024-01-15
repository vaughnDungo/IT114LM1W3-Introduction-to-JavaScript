/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var myVariable = "Hello, world!";
console.log(myVariable); 


// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let pagbati = "Hello, Vaughn!";
console.log(pagbati); 


// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const school = "Mapua Malayan Colleges of Laguna";
console.log(school);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

/* In JavaScript, var, let, and const are used for variable declarations, but they 
differ in terms of scope and mutability. The var keyword has function-level scope 
and is hoisted, meaning the variable is lifted to the top of its containing function or 
global scope. let and const, introduced in ES6, have block-level scope, limiting their visibility 
to the block in which they are defined. */

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators

// Your code here

// Addition
let additionResult = 5 + 3;
console.log("Addition:", additionResult); // Output: 8

// Subtraction
let subtractionResult = 10 - 4;
console.log("Subtraction:", subtractionResult); // Output: 6

// Multiplication
let multiplicationResult = 6 * 2;
console.log("Multiplication:", multiplicationResult); // Output: 12

// Division
let divisionResult = 20 / 4;
console.log("Division:", divisionResult); // Output: 5

// Modulus (Remainder)
let modulusResult = 15 % 4;
console.log("Modulus:", modulusResult); // Output: 3

// Increment
let incrementVariable = 7;
incrementVariable++;
console.log("Increment:", incrementVariable); // Output: 8

// Decrement
let decrementVariable = 9;
decrementVariable--;
console.log("Decrement:", decrementVariable); // Output: 8


// Checkpoint 1.2 What operators did you use?
// Answer: Addition, Subtraction, Multiplication, Division, Modulus, Increment, Decrement

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here 

// Concatenation
let firstName = "Vaughn Erik";
let lastName = "Dungo";
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName); // Output: John Doe

// String Length
let message = "Hello, World!";
let messageLength = message.length;
console.log("String Length:", messageLength); // Output: 13

// String Concatenation with Assignment
let greeting = "What's up";
greeting += ", Vaughn";
console.log("Concatenation with Assignment:", greeting); // Output: Hello, World!

// String Interpolation (Template Literal)
let age = 19;
let sentence = `I am ${age} years old.`;
console.log("String Interpolation:", sentence); // Output: I am 25 years old.

// Accessing Individual Characters
let str = "JavaScript";
let firstChar = str[0];
let lastChar = str[str.length - 1];
console.log("First Character:", firstChar); // Output: J
console.log("Last Character:", lastChar); // Output: t

// String Methods
let uppercaseMessage = message.toUpperCase();
console.log("Uppercase:", uppercaseMessage); // Output: HELLO, WORLD!

let lowercaseMessage = message.toLowerCase();
console.log("Lowercase:", lowercaseMessage); // Output: hello, world!

// Substring
let substring = message.substring(0, 5);
console.log("Substring:", substring); // Output: Hello


// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation, String Length, String Concatenation with Assignment, 
// String Interpolation, Accessing Individual Characters, String Methods, Substring

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

// Logical AND (&&)
let isTrue = true;
let isFalse = false;
let andResult1 = isTrue && isFalse;
let andResult2 = isTrue && !isFalse;
console.log("Logical AND Result 1:", andResult1); // Output: false
console.log("Logical AND Result 2:", andResult2); // Output: true

// Logical OR (||)
let orResult1 = isTrue || isFalse;
let orResult2 = !isTrue || isFalse;
console.log("Logical OR Result 1:", orResult1); // Output: true
console.log("Logical OR Result 2:", orResult2); // Output: false

// Logical NOT (!)
let notResult1 = !isTrue;
let notResult2 = !isFalse;
console.log("Logical NOT Result 1:", notResult1); // Output: false
console.log("Logical NOT Result 2:", notResult2); // Output: true

//  Logical NOT (!)
let xorResult1 = isTrue ^ isFalse;
let xorResult2 = isTrue ^ true;
console.log("Logical XOR Result 1:", xorResult1); // Output: true
console.log("Logical XOR Result 2:", xorResult2); // Output: false


// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&), Logical OR (||), Logical NOT (!), 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

// Equality (==)
let isEqual1 = 5 == "5";
let isEqual2 = 5 == 5;
console.log("Equality Result 1:", isEqual1); // Output: true
console.log("Equality Result 2:", isEqual2); // Output: true

// Inequality (!=)
let isNotEqual1 = 10 != "10";
let isNotEqual2 = 10 != 5;
console.log("Inequality Result 1:", isNotEqual1); // Output: false
console.log("Inequality Result 2:", isNotEqual2); // Output: true

// Strict Equality (===)
let isStrictEqual1 = 5 === "5";
let isStrictEqual2 = 5 === 5;
console.log("Strict Equality Result 1:", isStrictEqual1); // Output: false
console.log("Strict Equality Result 2:", isStrictEqual2); // Output: true

// Strict Inequality (!==)
let isStrictNotEqual1 = 10 !== "10";
let isStrictNotEqual2 = 10 !== 5;
console.log("Strict Inequality Result 1:", isStrictNotEqual1); // Output: true
console.log("Strict Inequality Result 2:", isStrictNotEqual2); // Output: true

// Greater Than (>)
let isGreaterThan = 8 > 5;
console.log("Greater Than Result:", isGreaterThan); // Output: true

// Less Than (<)
let isLessThan = 3 < 7;
console.log("Less Than Result:", isLessThan); // Output: true

// Greater Than or Equal To (>=)
let isGreaterOrEqual = 10 >= 10;
console.log("Greater Than or Equal To Result:", isGreaterOrEqual); // Output: true

// Less Than or Equal To (<=)
let isLessOrEqual = 15 <= 20;
console.log("Less Than or Equal To Result:", isLessOrEqual); // Output: true

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 

/* In JavaScript, the expression `[] == false` evaluates to `true`. This behavior might seem counterintuitive at first, but it can be explained by the rules of type coercion in JavaScript.

When the equality (`==`) operator is used, JavaScript performs type coercion to compare values of different types. In this case, an empty array `[]` and `false` are of different types: one is an array, and the other is a boolean.

Here's what happens:

1. JavaScript attempts to convert the operands to a common type.
2. An empty array `[]` is a truthy value in a boolean context, so it is considered `true`.
3. `false` is already a boolean value.

Now, the comparison becomes `true == true`, and the result is `true`.

To avoid unexpected behavior and ensure strict equality without type coercion, it's recommended to use the strict equality operator (`===`). For example, `[] === false` would evaluate to `false` because it checks both value and type.
*/


// Your code here