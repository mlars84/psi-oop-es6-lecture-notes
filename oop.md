# Psi OOP Lecture Guide
-
## Objectives
- Hear about some of the OOP terms and concepts

## Browser Support
Not all browsers support ES6. Our objective is to see the syntax and talk about some OOP concepts, so we will not be focusing on how to write ES6 for the browser. That said, you can `transpile` i.e. convert ES6 sytnax to ES5 using a tool called [Babel](https://babeljs.io/). They do have a grunt plugin, so it is doable using tools we already have seen.

## OOP (Object Oriented Programming)

> is a programming paradigm based on the concept of "objects", which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

[Wiki OOP Article](https://en.wikipedia.org/wiki/Object-oriented_programming)

It is a **paradigm** meaning pattern used across languages. Common OOP languages include Java, C++, and Python. JavaScript introduced some of these patterns with ES6.

So, this *object* isn't exactly the JavaScript object we are familiar with, but a concept that describes entities in our programs. 

#### Objects Have:

- Identity that describes an object. 
- Attributes define the state of an object. 
- Behavior defines how the objects acts, or ‘things they can do’.

## Classes
Classes are how we describe these objects. They are like the blueprint for constructing objects that share the defined attributes and behaviors. Objects are instances of the classes that created them.

Like in mongoose the schema describes how the documents should be structured, but isn't the document itself.

We have a keyword `class`.

```
// Identity or name
class Dog {

  // attributes or state of the object
  constructor(){
    this.name = name;
  }
  
  // procedures or behaviors that describe how the object acts
  bark(){
    console.log('woof!');
  }
}
```

## Inheritance 
To reduce duplication and try to model like objects classes can `extend` other classes. This concept is called `abstraction`. Meaning we can describe a base class with all the generic attributes and behaviors and anything specific can be part of the `subclass`.

```
class Animal {
  constructor(name){
    this.name = name;
  }

  poop(){
    console.log('everyone poops!');
  }
}

class Dog extends Animal{

  constructor(name){
    super(name);
  }

  bark(){
    console.log('woof!');
  }
}

var ourDog = new Dog('barkly');

```

### Whoa whoa whoa, what's happening there?

`extends` - here says that Dog inherits from Animal meaning every dog has all the properties of an Animal and a few other things that are specific to just Dogs.

`super` - calls the constructor of the super class i.e. Animal or the class Dog inherits from.

`new` - is the keyword to create an instance (or an object) of Dog.

## How does this differ from Prototypes
On a high level, prototypes define something similar, but the JavaScript interpreter has to 'walk the chain' to find an objects prototype. With classes it is part of it's blueprint at creation time. 

### Why add Classes in ES6?
Prototypes get us everything we need, but people are not as familiar with them and are familiar with classes. 

## Composition vs Inheritance
### *has-a (composition) vs is-a (inheritance)*

We won't go too deep into this. On a high-level mpj's video (link in resources) describes this well.

Inheritance is more brittle. It is hard to plan for all business needs and how the code is going to change overtime. Composition is much more flexible, which it work longer term.

## Resources
Using examples based on the [mpj video](https://www.youtube.com/watch?v=wfMtDGfHWpA).

## Jargon Alert!
- Object
- Class
- Sub class
- Super class
- Encapsulation 
- Inheritance 
- Extend
- Abstraction