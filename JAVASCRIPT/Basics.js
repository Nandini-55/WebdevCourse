//Javascript is a synchronous sigle threaded language.
// Everything in JavaScript happens in an execution context.
// An Execution context (EC) is an abstract concept representing the environment where the current code is evaluated and executed.
// It has two parts -
// i. Memory component (variable environment) - first phase (step 1)- creation phase - assign memory to variables and functions -> variable = undefined and functions = whole code
//ii. Code component (Thread of execution) - second phase(step 2) - execution phase - executes code line by line-> stores the real value of variables and call the function (by creating a new execution context) - execution context inside another and this recursion is maintained by call stack .

console.log(a); //undefined
var a = 2;
console.log(a); //2

alert("Hello world");
confirm("Accept the terms and condition.");
var name = prompt("Enter your name: ");
console.log("Hello" + name);
