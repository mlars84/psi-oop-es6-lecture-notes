# Psi ES6 Syntax IntroLecture Guide
-
## Objectives
- See some of the ES6 syntax

## Let and Const
Let and const are going to be our new var.

### Problem
Var scopes things to the nearest function which can cause some strange behaviors. See loop example below:

```
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log('i after loop -> ', i); // happily logs 10
```

Loops are not functions, so `i` the iterator will exist outside the loop that declared it. 

### Hoisting
The JavaScript interpreter will look for variable declarations and move them to the top of the function they are defined within. If they are not declared inside any function, they will be treated like global variables. 

This associating variables to the functions they are declared in is called `function scope`. 

### Function Scope vs Block Scope
ES5 has function scope and work arounds to it, which were shown in mpj's video (link in resources). These work arounds work, but are a lot more code than these new ES6 ways to declare variables. `let` effectively solves our problem above with one keyword and no need to wrap blocks in functions.

## Let Example
```
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log('i after loop -> ', i); // error
```

## Const Example
Const standing for constant allows us to declare globals in a safer way because const guarantees (i.e. will throw an error) that once declared we can't reassign the value. This prevents messed up state like in the mpj dishwasher example.

```
const x = 1;
x = 2; // error on reassignment line
console.log(x);
```
Where we might use it... 

```
const express = require('express');
```

## Resources
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [mpj video](https://www.youtube.com/watch?v=sjyJBL5fkp8)