let person = {
  firstName: "Nandini",
  lastName: "Gupta",
  printFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
person.printFullName(); //Nandini Gupta

let person2 = {
  firstName: "Kartik",
  lastName: "Gupta",
};

//function borrowing - is a technique that allows an object to use a method belonging to another object, without inheriting from it or duplicating the code. -- can be donw by three methods -

// i)call : first argument - object to refer for this , second argument - other parameters required seperated by comma ; executes the function immediately  ; return what ever the real function returns.
person.printFullName.call(person2); //helps to change the reference of 'this'
//output - Kartik Gupta

let printBelongsTo = function (hometown, state) {
  console.log(
    `${this.firstName} ${this.lastName} belongs to ${hometown} , ${state}`,
  );
};

printBelongsTo.call(person2, "Mumbai", "Maharastra"); //Kartik Gupta belongs to Mumbai , Maharastra

//ii)apply : first argument - object to refer for this , second argument - other parameters required within a array ; executes the function immediately  ; return what ever the real function returns.

printBelongsTo.apply(person2, ["Mumbai", "Maharastra"]); //Kartik Gupta belongs to Mumbai , Maharastra

//iii)bind : first argument - object to refer for this , second argument - other parameters required within a array ; executes the function later ,when the function storing it is called  ; return function with this refereing for giving object.
let belonging = printBelongsTo.bind(person2, "Mumbai", "Maharastra");
console.log(belonging); //[Function: bound printBelongsTo]
belonging(); //Kartik Gupta belongs to Mumbai , Maharastra

//---------------------------------------------------------------------------------------------------------------------------------
//polyfill for mybind method - creating your own bind method for older versions of js

//Function.prototype.mybind- this helps to attatch mybind function to all functions using their prototype property
Function.prototype.mybind = function (...args) {
  //...args - this extracts the parameters passed while calling the function. -first argument will be the object we want to refer to it for 'this' function(the function using mybind) at args[0]
  let obj = this; //this refers to the function calling this function
  let params = args.slice(1); //gives array from 1st index to last
  return function (...args2) {
    //returns a function as bind method returns function // args2 - these arguments are the other arguments that were not provided while binding the method but were given when calling the returning function of mybind method
    obj.apply(args[0], [...params, ...args2]); //.apply helps to pas the arguments in form of array ; args[0] - refers to the object to which the function will refer to this. ; params and args2 are the other paramets used by the calling function
    //[...params,...args2]- concatinates both the arrays
  };
};

let belonging2 = printBelongsTo.mybind(person2, "Mumbai", "Maharastra");
belonging2(); //Kartik Gupta belongs to Mumbai , Maharastra

let belonging3 = printBelongsTo.mybind(person, "Meerut");
belonging3("Uttar Pradesh"); //Nandini Gupta belongs to Meerut , Uttar Pradesh

//---------------------------------------------------------------------------------------------------------------------------------
//FUNCTION CURRYING

