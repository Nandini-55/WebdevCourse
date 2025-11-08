//2nd way to create objects
//Constructors - special functions - doesn't return anything - start with capital letter
function Person(name , age){
    this.name=name;
    this.age= age;
}

//created constructor's prototype property -
Person.prototype.talk = function(){
    console.log(`Hi! I am ${this.name}`);
}

//creating object with this constructor -
 
let p1 = new Person("vinu",48); //- Person {name: 'vinu', age: 48}
// age: 48
// name:"vinu"
// [[Prototype]]:Object


//new operator - lets developers create an instance  of a user-defined object type or of one of the built-in object types that has a constructor function.
//when a function is called with new keyword it works as a constructor
//new keyword helps to create a blank js object (new instance) in memory 
//helps the object of constructor access the prototype of the constructor
//passes arguments of object to constructor to bind object as the 'this'context  -if no new operator is used then this will refer to 'Window' object-
// function Person(name , age){
//     this.name=name;
//     this.age= age;
//     console.log(this);
// } //- Person("nandu",19)
// newOperator.js:23 Window {window: Window, self: Window, document: document, name: 'nandu', location: Location, …}

let p2 = new Person("Nandin",19); 
console.log(p1.talk===p2.talk);//true

