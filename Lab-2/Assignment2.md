## Write a Paper about how JS engine oprimizes Jaascript Code 
## Introduction 
JavaScript is defined as a single thread, interprated and high level programming language. 
This is a packed definition filled with technical jargons in which each needs its proper 
time to describe. 
## JavaScript is a single Thread programming language
### A thread is something that has gone thorugh each line of the program keeping track off the value 
### all the variables, at runtime. JavaScript is a single thread language that executes a single thread at a time.
### Imagine you have two people writing on the same whiteboard, ignoring each other and with no qualms about erasing what the other has written. The Javascript model would mean you have only one pen-eraser that each person can only pick up once the previous person has finished. In the “multiple threads” approach, each person has their own pen-eraser and doesn’t care about hat the others are doing by default; you have to add explicit code to make sure they don’t step on each other.
![Reference](https://www.quora.com/What-are-single-thread-programming-languages)
## JavaScripted is an interprated 
### Means it is a programming language which is built without needing to know finer details about the underlying computer. 
## JS is interprated Language: 
### JS is a compiled language: Means there is the need to be an intermediary piece of software called the interpret that sits between the code we have wrtirren and the computer to translate the instructions back and forth.
![Reference](https://code.tutsplus.com/tutorials/what-is-javascript--cms-26177)

 # At the heart of JavaScript code execution and interpretation is the JavaScript Engine which takes keeps, based on its given architectural specification proecesses JavaScript codes and optimizes it for efficient results. 
## So the question is How does the JS engine optimizes JavaScript Code ? 
## The JavaScript Joureny 
<p>As mentioned earlier, JS is interprated programming language and needs to pass through a series of processed to properly interprated to machine language and then get the proper response.</p>

### Let's Look at the picture below

![The JS joureny](./assets/javascript_journey.png)
<p>The JavaScript code that we write passes through the compiler (called the **Turbofan**) which opitimizes it to a high performance Machine Code. This interpreter in Chrome is called *Ignition* </p>

## Parsing JavaScript
<p>The First treatment of our JavaScript code is to Parse it.</p>

## Parsing could be 
1. Eager (full-parse)- This Parses each line right away
2. Lazy(pre-parse)- do the bare minimum. parse what we need and leave the rest until later 
