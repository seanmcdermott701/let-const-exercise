// var PI = 3.14;
// PI = 42;  stop me from doing this!

// Refactored
const PI = 3.14;
// PI = 42 will now give an error

// Quiz

// Q1: What is the difference between var and let?
// A:  The main difference is that you cannot redeclare a variable using the let keyword. 
//     Let also creates block scope, whereas variables created with the var keyword are hoisted.
// Q2: What is the difference between var and const?
// A:  Variables declared with the const keyword cannot be redelcared, whereas they can with var.
// Q3: What is the difference between let and const?
// A:  You can't reassign the value of a variable created using the const keyword, whereas you can with let.
// Q4: What is hoisting?
// A:  Hoisting describes how variables are compiled by javascript. They are "hoisted" to the top of whatever scopre they are delcared in.