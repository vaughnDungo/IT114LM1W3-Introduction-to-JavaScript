/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Get the first item (index 0)
let firstItem = numbers[0];
// Get the 5th item (index 4)
let fifthItem = numbers[4];
// Get the last item (index numbers.length - 1)
let lastItem = numbers[numbers.length - 1];

console.log("First item:", firstItem);
console.log("Fifth item:", fifthItem);
console.log("Last item:", lastItem);


// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

let min = Math.min(...numbers);
let max = Math.max(...numbers);
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

console.log("Minimum:", min);
console.log("Maximum:", max);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists are dynamic arrays that can store elements of different data types. 
// Lists are created using square brackets, and they support dynamic resizing, meaning you can 
// easily add or remove elements. In JavaScript, arrays are also dynamic and can store elements 
// of various types. Arrays are declared using square brackets, and like Python lists, they can 
// be easily modified.  Python lists and JavaScript arrays are versatile and powerful data structures 
// that offer similar functionalities while having distinct characteristics. The choice between them 
// often depends on the programming context, language requirements, and personal preference. Python's 
// syntax may appeal to those who appreciate readability and ease of use, while JavaScript's array flexibility 
// and compatibility with web development make it a popular choice for front-end development. Understanding the 
// strengths and nuances of each allows developers to make informed decisions based on the specific needs of their 
// projects.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let it114lCourse = {
    courseCode: 'IT114L',
    name: 'Web Systems and Technologies',
    units: 1,
    numberOfStudents: '40+', // Assuming '40+' is a string to indicate it's an estimate
    professorName: 'Job Lipat'
};

// Accessing information
console.log("Course Code:", it114lCourse.courseCode);
console.log("Course Name:", it114lCourse.name);
console.log("Units:", it114lCourse.units);
console.log("Number of Students:", it114lCourse.numberOfStudents);
console.log("Professor's Name:", it114Course.professorName);


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

/* Please see TODO 3.3. I've already added the Professor name in one of the fields...

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here



// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
