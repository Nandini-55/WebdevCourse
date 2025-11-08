// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes
 class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    talk(){
        console.log(`Hi! I am ${this.name}`);
    }
 }
 class Student extends Person{//moreover inheritance avoided repeatation of functions in both (student and teacher) classes. - talk function can be called by both without having their own one
    constructor(name,age,marks){
        super(name,age);//super keyword used to access parent class constructor or other members - helped to avoid lengthy code - no need to repeat (this.name=name , same for age in both (student and teacher) classes.)
        this.marks=marks;
    }
 }
 class Teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
 }

 let s1 = new Student("vinu",48,100);
 console.log(s1);// object of child class with has a prototype containing parent class and then it has a prototype containing  all the members of parent class
 s1.talk();