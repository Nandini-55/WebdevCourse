//PROTOTYPES -it is a type of property for every object in javascript-is an object itself - are the mechanism by which javascript objects inherit features from one another.

//It is like a single template object that all objects inherit methods and properties from without having their own copy.

// arr.__proto__(reference)

arr = [1, 2];
console.log(arr.__proto__);
//prints :-
// Array(0)
// at
// :
// ƒ at()
// concat
// :
// ƒ concat()
// constructor
// :
// ƒ Array()
// copyWithin
// :
// ƒ copyWithin()
// entries
// :
// ƒ entries()
// every
// :
// ƒ every()
// fill
// :
//- all the data consisted by prototype of that object

//- change in prototype
arr.__proto__.push = (n) => {
  console.log("Pushing number : ", n);
};
arr.push(5); //output - Pushing number :  5
console.log(arr); //output - (2) [1, 2] -hence the property used changed the real function stored in arr's prototype

//to access (actual object): -
// Array.prototype
// console.log(Array.prototype); //[at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
//String.prototype
// console.log(String.prototype); //String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}

//without prototype
arr.sayHello = () => {
  console.log("Hello");
};
arr2 = [4, 5];
arr2.sayHello = () => {
  console.log("Hello");
};

console.log(arr.sayHello==arr2.sayHello); //false - they both have have their own different functions

console.log(arr.pop==arr.pop);//true - as they both are accessing it from the prototype

