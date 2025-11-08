//1st way to create objects -
//factory functions  - fucntions that creates objects
//not commonly used - instead use classes and constructors
function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hi ! my name is ${this.name}`);
    },
  };
  return person;
}
//disadvantages - o every object has to create its own copy for each and every thing 
//e.g.-
let p1 = personMaker("vinu",48);
let p2 = personMaker("nandu",19);
console.log(p1.talk==p2.talk);//false - as they both created different copy of same function
