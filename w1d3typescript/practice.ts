//Data Types
//Tuple:Declaring different data Types in an array 
//Union 
//Enum:Creating a our defined type 
//Arrays 
/*
Square brackets 
*/
let values: number[] = [12, 7, 5, 4];

/*
Generic array Types 

*/
let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

let message1: string = 'Hello World';
let message2: string;
let message3 = 'Hello World';
let message4;

//Access Modifiers 

interface Book {
    boooknmane: string;
    isbn: number;
}

class Course implements Book {
    constructor(public bookName: string, public isbn: number, author: string) {
        
    }
}