//Classes - are a template to create an object
//constructor method is used inside classes - for creating and initialising an object instance of that class - using constructor keyword 

class Person{
    constructor(name , age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi! I am ${this.name}`);
    }
}
//class constructor can't be evoked without new operator
let p1 = new Person("vinu",48);
let p2 = new Person("nandu",19);
console.log(p1.talk==p2.talk);//true