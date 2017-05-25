/*jshint esversion: 6*/

// class keyword gives class a name
class Dog {

  //constructor default function for every class
  //constructor assigns the properties their values
  constructor(name, size, color){
    this.name = name;
    this.size = size;
    this.color = color;
    //this.tails = 1;
    // ^ can hard code if no param and seeting property here
  }

  //any behaviors come after the constructor
  bark(){
    console.log('WOOF!!!');
  }
} //end Dog

//new keyword allow us to create an inheritance of our classes
//instance means an object
const ourDog = new Dog('barkley', 'large', 'brown');
const otherDog = new Dog('fritz', 'medium', 'white/brown');
console.log('ourDog =>', ourDog, otherDog);
console.log('ourDog barking =', ourDog.bark(), otherDog.bark());
