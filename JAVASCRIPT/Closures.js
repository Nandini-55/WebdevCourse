// Closures- Refers to the combination of a function with its lexical environment within which it was declared .
// It is a function bundled/binded along with its lexical environment.
// Function along with its Lexical scope forms a closure.
// This helps to maintain a function's lexical scope even if it is called beyond its scope. But it must be a returned function.
//e.g.-
function z() {
  var a = 5;
  return function y() {
    console.log(a);
  };
}
let d = z();
d(); //prints 5 - still remembers the value of a
//Here, even when function y is not called inside the function z, but still it is able to print the value of a with the help of closure, as the value of a is combined with the function y.

//another imp. e.g.-
function f() {
  var a = 5;
  function y() {
    console.log(a);
  }
  a = 10;
  return y;
}
var a=20;
let u = f();
u();//10 - as function y stores th reference of the variable a and even if the global scope has the variable a but it refres to the nearest in its lexical scope.

//Key Characteristics & Uses:-
// Data Privacy: Closures are used to encapsulate variables, creating private state inaccessible from the outside.Emulating "private" variables that cannot be accessed or modified from the outside.

// Function Factories & Currying: They enable creating specialized functions with pre-configured environments or partial application.Creating functions with preset configurations (e.g., a function that specifically adds 5 to any number).

// Asynchronous Callbacks: Closures ensure that functions like setTimeout or event listeners retain access to the variables present when they were defined.Maintaining access to variables within setTimeout, promises, or event listeners after the main function has returned.

// Memoization: Storing the results of expensive function calls to avoid redundant calculations.

// Memory Management: While powerful, closures can lead to memory leaks if they retain large, unnecessary variables, as they prevent garbage collections.

//disadvantages-
// Memory Usage: Variables in the outer scope aren't garbage-collected as long as the closure exists, which can lead to high memory consumption .
// Memory Leaks: If closures (like event listeners) aren't properly cleaned up, they can trap large objects in memory indefinitely .
// Performance: Creating functions inside functions repeatedly adds overhead, and looking up variables across multiple scopes is slightly slower .
// Complexity: Deeply nested closures can make code harder to read and debug, especially for those unfamiliar with lexical scoping .


//task - print 1 to 5 with 1 with 1 sec gap , 2 with 2 sec gap and so on.

//failed approaches - 
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);//prints 6 each time but after 1,2,3,4,5 seconds- as the time stored with the function will be the current value of i *1000 but when it access the value of i for printing it got updated to 6 as the whole loop was executed before excution of setTimeout
//   }
//   console.log("Namaste");
// }

// function x(){
//     var j =1;
//    for(var i=1;i<=5;i++){
//     setTimeout(function (){
//         console.log(j++);
//     },j*1000);//all values from 1 to 5 prints after one sec as j in time stores 1 only each time.
//    }
//    console.log("Namaste");
// }

// right approaches:

//using let

// function x() {
//   for (let i = 1; i <= 5; i++) {//Here, by using `let` instead of `var` each time `setTimeout` function stores the new value of `i` with it. As let makes a block scope variable , The other `setTimeout` function cannot access the `i` value of the previous `setTimeout` function. 
//     setTimeout(function () {
//       console.log(i++);
//     }, i * 1000);
//   }
//   console.log("Namaste");
// }

//using var  

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i){
    setTimeout(function () {
      console.log(i++);
    }, i * 1000);}
    close(i);
  }
  console.log("Namaste");
}
//Here, the closure function helps to create a closure with each `i` value for each time `setTimeout` is called using close function. 
//`setTimeout` function creates a closure with the value of `i`, which is passed in the closure function while calling it. 

x();
