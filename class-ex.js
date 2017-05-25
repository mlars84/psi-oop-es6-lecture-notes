//animal is the super class
class Animal {
  constructor(name, color, size){
    this.name = name;
    this.color = color;
    this.size = size;
  }
  //methods / behaviors
} //end super-Animal

//sub-class of Cat ('extends' connects it to Animal super class)
class Cat extends Animal{
  //delegates to parent or super class constructor
  super(name, color, size){
  }
  meow(){
    console.log(this.name, 'says meow!');
  }
} //end Cat
const ourCat = new Cat('Gus', 'white/brown', 'small');
console.log(ourCat, ourCat.meow());

// sub-class of Dog (class keyword gives class a name)
class Dog extends Animal {
  //constructor default function for every class
  //constructor assigns the properties their values
  super(name, color, size){
  }
  //any behaviors come after the constructor
  bark(){
    console.log('WOOF!!!');
  }
} //end Dog

//new keyword allow us to create an inheritance of our classes
//instance means an object
const ourDog = new Dog('Daisy', 'large', 'white');
const otherDog = new Dog('fritz', 'medium', 'white/brown');
console.log('ourDog =>', ourDog, otherDog);
console.log('ourDog barking =', ourDog.bark(), otherDog.bark());
