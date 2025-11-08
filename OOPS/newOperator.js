//Constructors - special functions - doesn't return anything - start with capital letter
function Person(name , age){
    this.name=name;
    this.age= age;
}

Person.prototype.talk = function(){
    console.log(`Hi! I am ${this.name}`);
}

//creating object with this constructor -
 
let p1 = new Person("vinu",48);
//new operator - lets developers create an instance  of a user-defined object type or of one of the built-in object types that has a constructor function.
//when a function is called with new keyword it works as a constructor
//new keyword helps to create a blank js object (new instance)
