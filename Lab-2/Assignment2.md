## Write a Paper about how JS engine oprimizes Jaascript Code 
## Introduction 
JavaScript is defined as a single thread, interprated and high level programming language. 
This is a packed definition filled with technical jargons in which each needs its proper 
time to describe. 
## JavaScript is a single Thread programming language
### A thread is something that has gone thorugh each line of the program keeping track off the value 
### all the variables, at runtime. JavaScript is a single thread language that executes a single thread at a time.
### Imagine you have two people writing on the same whiteboard, ignoring each other and with no qualms about erasing what the other has written. The Javascript model would mean you have only one pen-eraser that each person can only pick up once the previous person has finished. In the “multiple threads” approach, each person has their own pen-eraser and doesn’t care about hat the others are doing by default; you have to add explicit code to make sure they don’t step on each other.
[Reference](https://www.quora.com/What-are-single-thread-programming-languages)
## JavaScripted is an interprated 
### Means it is a programming language which is built without needing to know finer details about the underlying computer. 
## JS is interprated Language: 
### JS is a compiled language: Means there is the need to be an intermediary piece of software called the interpret that sits between the code we have wrtirren and the computer to translate the instructions back and forth.
[Reference](https://code.tutsplus.com/tutorials/what-is-javascript--cms-26177)

 ## At the heart of JavaScript code execution and interpretation is the JavaScript Engine which takes, based on its given architectural specification proecesses JavaScript codes and optimizes it for efficient results. 
## So the question is How does the JS engine optimizes JavaScript Code ? 
<p>This is made possible by what Rainer Hahnekamp in his excellent and concise article in FreeCodeCamp.org 'Combined Forces: Interpreter and Compiler'. In the words of the writer about the massive impovement in fast processing of js codes as '...reason behind this massive improvement lies mainly in the combination of interpreter and compiler. Today, all four engines use this technique. The interpreter executes source code almost immediately. The compiler generates machine code which the user’s system executes directly.'</p>
<p>As the compiler works on the machine code generation, it applies optimisations. Both compilation and optimisation result in faster code execution despite the extra time needed in the compile phase. The main idea behind modern engines is to combine the best of both worlds:

* Fast application startup of the interpreter.
* Fast execution of the compiler.</p>
### This is a huge success on the side of those who work on developing the engines.Achieving both goals start off with the interpreter. In parallel, the engine flags frequently executed ciode parts as a "Hot Path" and passes them to the compiler along with contextual information gathered during execution.This porocess lets the compiler adapt and optimise the code for the current context. 
[Reference](https://www.freecodecamp.org/news/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553/)
## Inshort this summary gives insisght into how the JS Engine works 
<p>JavaScriptCore performs a series of steps to interpret and optimize a script. It performs a lexical analysis, breaking down the source into a series of tokens or strings with an identified meaning. The tokens are then analyzed by the parser for syntax and built into a syntax tree. Four just-in-time processes then kick in, analyzing and executing the bytecode produced by the parser. In simple terms, this JavaScript engine takes the source code, breaks it up into strings—a.k.a. lexes it, takes those strings and converts them into bytecode that a compiler can understand, and then executes it.</p>

## The JavaScript Joureny 
<p>As mentioned earlier, JS is interprated programming language and needs to pass through a series of processed to properly interprated to machine language and then get the proper response.</p>

### Let's Look at the picture below

![The JS journey](./assets/javascript_journey.png)
<p>The JavaScript code that we write passes through the compiler (called the **Turbofan**) which opitimizes it to a high performance Machine Code. This interpreter in Chrome is called *Ignition*. Let's see how the V8 engine optimezes codes.</p>

## Parsing JavaScript
<p>The First treatment of our JavaScript code is to Parse it.</p>

## Parsing could be 
1. Eager (full-parse)- This Parses each line right away
2. Lazy(pre-parse)- do the bare minimum. parse what we need and leave the rest until later 
// eager parse declarations right away
const a = 1;
const b = 2;

// lazily parse this as we don't need it right away
function add(a, b) {
  return a + b;
}

// oh looks like we do need add so lets go back and parse it
add(a, b);
 
So here our variable declarations will be eager parsed but then our function is lazily parsed. This is great until we get to add(a, b) as we need our add function right away so it would have been quicker to eager parse add right away.

To eager parse the add function right away, we can do:

// eager parse declarations right away
const a = 1;
const b = 2;

// eager parse this too
var add = (function(a, b) {
  return a + b;
})();

// we can use this right away as we have eager parsed
// already
add(a, b);
 
This is how most modules you use are created.

Function Inlining
Chrome will sometimes essentially rewrite your JavaScript, one example of this is inlining a function that is being used.

Let’s take the following code as an example:

const square = (x) => { return x * x }

const callFunction100Times = (func) => {
  for(let i = 0; i < 100; i++) {
    // the func param will be called 100 times
    func(2)
  }
}

callFunction100Times(square)
 
The above code will be optimized by the V8 engine as follows:

const square = (x) => { return x * x }

const callFunction100Times = (func) => {
  for(let i = 100; i < 100; i++) {
    // the function is inlined so we don't have
    // to keep calling func
    return x * x
  }
}

callFunction100Times(square)
 
As you can see from the above, V8 is essentially removing the step where we call func and instead inlining the body of square. This is very useful as it will improve the performance of our code.

Function inlining gotcha
There is a little gotcha with this approach, let’s take the following code example:

const square = (x) => { return x * x }
const cube = (x) => { return x * x * x }

const callFunction100Times = (func) => {
  for(let i = 100; i < 100; i++) {
    // the function is inlined so we don't have
    // to keep calling func
    func(2)
  }
}

callFunction100Times(square)
callFunction100Times(cube)
 
So this time after we have called the square function 100 times, we will then call the cube function 100 times. Before cube can be called, we must first de-optimize the callFunction100Times as we have inlined the square function body. In cases like this, the square function will seem like it’s faster than the cube function but what is happening is the de-optimization step makes the execution longer.

## Objects
### When it comes to objects, V8 under the hood has a type system to differentiate your objects:

## Monomorphism
### The objects have the same keys with no differences.

// mono example
const person = { name: 'John' }
const person2 = { name: 'Paul' }
 
## Polymorphism
### The objects share a similar structure with some small differences.

// poly example
const person = { name: 'John' }
const person2 = { name: 'Paul', age: 27 }
 
## Megamorphism
### The objects are entirely different and cannot be compared.
<p>
// mega example
const person = { name: 'John' }
const building = { rooms: ['cafe', 'meeting room A', 'meeting room B'], doors: 27 }
 
So now we know the different objects in V8, let’s see how V8 optimizes our objects.

Hidden classes
Hidden classes are how V8 identifies our objects.

Let’s break this down into steps.

We declare an object:

const obj = { name: 'John'}
 
V8 will then declare a classId for this object.

const objClassId = ['name', 1]
 
Then our object is created as follows:

const obj = {...objClassId, 'John'}
 
Then when we access the name property on our object like so:

obj.name
 
V8 does the following lookup:

obj[getProp(obj[0], name)]
 </p>

## This is process V8 goes through when creating our objects, now let’s see how we can optimize our objects and reuse classIds.

## Tips for Creating Objects
<p>If you can, you should declare your properties in the constructor. This will ensure the object structure stays the same so V8 can then optimize your objects.

class Point {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(11, 22) // hidden classId created
const p2 = new Point(33, 44)
 
You should keep the property order constant, take the following example:

const obj = { a: 1 } // hidden class created
obj.b = 3

const obj2 = { b: 3 } // another hidden class created
obj2.a = 1

// this would be better
const obj = { a: 1 } // hidden class created
obj.b = 3

const obj2 = { a: 1 } // hidden class is reused
obj2.b = 3
 
General Optimization Tips
So now let’s get into some general tips that will help your JavaScript code be better optimized.
</p>
## Fix function argument types
<p>When arguments are being passed to a function it’s important they are the same type. Turbofan will give up trying to optimize your JavaScript after 4 tries if the argument types are different.

Take the following example:

function add(x,y) {
  return x + y
}

add(1,2) // monomorphic
add('a', 'b') // polymorphic
add(true, false)
add({},{})
add([],[]) // megamorphic - at this stage, 4+ tries, no optimization will happen
 
### Another tip is to make sure to declare classes in the global scope:

// don't do this
function createPoint(x, y) {
  class Point {
    constructor(x,y) {
      this.x = x
      this.y = y
    }
  }

  // new point object created every time
  return new Point(x,y)
}

function length(point) {
  //...
}
</p>
 
 [Reference](https://www.digitalocean.com/community/tutorials/js-v8-engine)
