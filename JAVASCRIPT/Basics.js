//Javascript is a synchronous sigle threaded language.
// Everything in JavaScript happens in an execution context.
// An Execution context (EC) is an abstract concept representing the environment where the current code is evaluated and executed.
// It has two parts -
// i. Memory component (variable environment) - first phase (step 1)- creation phase - assign memory to variables and functions -> variable = undefined and functions = whole code
//ii. Code component (Thread of execution) - second phase(step 2) - execution phase - executes code line by line-> stores the real value of variables and call the function (by creating a new execution context) - execution context inside another and this recursion is maintained by call stack .

//Hoisting is a mechanism where variables and functions are moved to the top of their scope before code execution. 
console.log(a); //undefined
var a = 2;
console.log(a); //2

// alert("Hello world");
// confirm("Accept the terms and condition.");
// var name = prompt("Enter your name: ");
// console.log("Hello" + name);

//Data types: there are two types of data types in JavaScript: primitive and non-primitive. Primitive are the basic data types in JavaScript; it considers:
// - null - Type of null is an object, which is considered a mistake as per the answer in Stack Overflow, but we can't change it because many things depend on it.
// - number
// - string
// - boolean
// - symbol
// - undefined
// - bigint
console.log(typeof null); //object
// Non-primitive data type is object, which is created using primitive data types you.Object stores data in key-value pairs.
// e.g.-
let obj = {
  name: "Vinu",
  marks: 100,
  "fav subjects": ["cs", "os"],
};
console.log(typeof obj); //object

//Something interesting is here. If we declare a constant object, then we can't change the type of that object, but we still can add key-value pairs in that object.

const employee = {
  name: "Rina",
  salary: 500000000,
  disgination: "CEO",
};

// employee= 34;//TypeError: Assignment to constant variable.

employee.experience = 10;

console.log(employee); //{ name: 'Rina', salary: 500000000, disgination: 'CEO', experience: 10 }

//There are three methods to declare a variable in JavaScript:
// 1. Using `var`
// 2. Using `let`
// 3. Using `const`
// Let's understand the difference between these:
// - `var` is globally scoped and can be updated and re-declared within its scope. It is initialized with `undefined`.It doesn't throw an error if you access it before initializing. It just returns undefined. 
//It is accessible using the window object. 
var d = 3;
console.log(d);
console.log(window.d);
console.log(this.d);//In the global scope, this refers to the window object. 

// - `let` and `const` are block scoped and Got declared in a different space with undefined but cannot be accessed before initialization .If you try to access it before initializing its value, it will throw an error. 
//Let and const variables are stored in a different space after declaration but before initialization. That space is known as the Temporal Dead Zone(TDZ). When they get initialized, they move to the scope of the block in which they are initialized. 
//Let and const variables cannot be accessed using the window or this object.  
//  `let` can be updated but cannot be re-declared.
//  `const` cannot be updated nor re-declared.It must be initialized with declaration. 

// Let's understand this with an example. :
var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = 20;
}
console.log(b); //-10

// Let's understand how the answer comes out to be -10, so you remember the execution context.
// 1. First, the creation phase takes place. In the creation phase, we created two variables, A and B. A is undefined, but B is not even initialized, as we had already discussed. B is not initialized in the creation phase.
// 2. Then we will move to the execution phase. When the first line is executed, we will assign the value 10 to A. Then we will move to the next line, in which a new scope is created using curly braces and A is redeclared and assigned the value -10. A is a var, so it can be redeclared and updated, so A will get its new value, which will be -10.
// 3. In the next line, when we execute `let B = A`, B will be initialized and will have the value -10, as the value of A is updated to -10.
// Now, in the next block scope where we declare let B = 20, we can re-declare B in a new scope using curly braces. That's why it is re-declared, but the previous B, which has the value of A as -10, is not updated because the later B declared is kept in that scope only. The value of the previous B, which has -10 as a value, is not updated, and another B will be created which will have the value of 20.

// Now, after getting out from that scope, we are printing the value of B. The value of the block-scoped B, which was declared as 20, is now removed, as that execution of that block is done and nothing is left in it. The other B, which has the value of -10, will be printed.
// That's how the value of b is printed as -10.


//-------------------------------------------------------------------------------
//Block - compund statements , It is combining multiple JavaScript statements into a single statement using curly braces. 
//follows lexical scope
let s = "hi";
{//Creates a different scope and creates a new variable s in that scope so it doesn't collapse the variable s which was declared in the outer scope. 
  let s = "bye";
  console.log(s);//bye
}
console.log(s);//hi