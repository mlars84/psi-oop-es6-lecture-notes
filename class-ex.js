//animal is the super class
class Animal {
  constructor(name, color, size){
    this.name = name;
    this.color = color;
    this.size = size;
  }
  //methods / behaviors
  poops(){
    console.log(this.name, 'poopy');
  }
} //end super-Animal

//sub-class of Cat ('extends' connects it to Animal super class)
class Cat extends Animal{
  //delegates to parent or super class constructor
  constructor(name, color, size, claws, lives){
    super(name, color, size);
    this.lives = 9;
    this.claws = 10;
  }
  meow(){
    console.log(this.name, 'says meow!');
  }
} //end Cat
const gus = new Cat('Gus', 'white/brown', 'small');
const hugo = new Cat('Hugo', 'grey/white', 'medium');
console.log(gus, gus.meow());
console.log(hugo, hugo.meow());

// sub-class of Dog (class keyword gives class a name)
class Dog extends Animal {
  //constructor default function for every class
  //constructor assigns the properties their values
  constructor(name, color, size, claws, goodBreath){
    super(name, color, size);
    this.claws = 10;
    this.goodBreath = goodBreath;
  }
  //any behaviors come after the constructor
  bark(){
    console.log('WOOF!!!');
  }
} //end Dog

//new keyword allow us to create an inheritance of our classes
//instance means an object
const daisy = new Dog('Daisy', 'large', 'white', 10, false);
const fritz = new Dog('fritz', 'medium', 'white/brown', 10, true);
console.log('Dogs =>', daisy, fritz);
console.log('Dog barking =', daisy.bark(), fritz.bark());

console.log(daisy.poops(), fritz.poops(), gus.poops());



//composition example
class Company {
  constructor(name, salary){
    this.name = name;
    this.empList = [];
  }
}

class Employee {
  constructor(name, salary){
    this.name = name;
    this.salary = salary;
  }
}

//methods
// function addEmp(){
//   this.empList.push(myEmp);
// }

const myComp = new Company ('MattCo');
const myEmp = new Employee('Chuck', 56000);
// addEmp(myEmp);
