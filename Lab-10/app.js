/*
Implement the Factory pattern and create two types of light bulbs, regular bulbs and energy saver bulbs.

Regular bulbs have a range of lumens between 50 and 100 and last for 1 year.
Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years.
*/
class Regularbulbs {
    constructor() {
            this.rangehour = [50, 100];
            this.lifespan = 1;
        }
    
}
class Energysavingbulbs{
    constructor() {
        this.rangehour = [5, 40];
        this.lifespan = 10;
    }
}
// let's emplement the facctory pattern 
class BulbFactory {
    createBulbs(type) {
        let bulb;
        switch (type) {
            case "regular":
                bulb = new Regularbulbs();
                break;
            case "energy":
                bulb = new Energysavingbulbs();
                break;
            default:
                console.log("No type specified");
                
        }
        return bulb;
    }
}
const bulbs = [];
const factory = new BulbFactory();

bulbs.push(factory.createBulbs("regular"));
bulbs.push(factory.createBulbs("energy"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}
/*
    Exercise 02
Implement the Decorator pattern to add a logger to any object(add behavior).A logger method will log a message to the console.
*/
class myObject {
    constructor(weight) {
        this.weight = weight;
    }
}
class myDecoratedObject {
    constructor(myobj, height, width) {
        this.myobj = myobj;
        this.weight = myobj.weight;
        this.height = height;
        this.width = width;
    }
    logger() {
        console.log("My Decorated Object has dimensions: "+ this.weight+ " ,"+ this. height+" " + this.width)
    }
    
        

}
let mygold = new myObject(10);
let mydecogold = new myDecoratedObject(mygold, 10, 20);
mydecogold.logger();
/*
    Exercise 03
Implement the Strategy pattern to choose between different logging algorithms, choosing between
console.info()
console.warn()
console.error()
console.table() accepts an array of objects

*/
// This is a brilliant way of concealing the strategy and algorithm from the client 
class Info{
    logging(msg) {
        console.info(msg);
    }
}
class Warn {
    logging(msg) {
        console.warn(msg);
    }
}
class Error {
    logging(msg) {
        console.error(msg);
    }
}
class Table {
    logging(msg) {
        console.table(msg);
    }
}

class userStrategy {

    setStrategy(loggingMethod) {
        this.loggingMethod = loggingMethod;
    }
    logging(msg) {
    this.loggingMethod.logging(msg)
}
}
const newstrategy = new userStrategy();
newstrategy.setStrategy(new Info());
newstrategy.logging('what do you want to log?');
newstrategy.setStrategy(new Warn());
newstrategy.logging('Any Warning?')
newstrategy.setStrategy(new Error());
newstrategy.logging('Any error?')

/*
Exercise 04
Create a memoized version of the following fibonacci() recursive method to improve its performance.

function fibonacci(n) {
    if (n <= 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
You may use console.time(label) and console.timeEnd(label) to measure the difference in performance.
*/
// How do we fix the performance related issue with the repeated and recurring sequence in Fibonacci series function Despite the much better recurssion solution
    function fibonacci(n, memo) {   // as memo as an object as a cache to so store recurring through their sequence.
    memo = memo || {} // Either it's elements or is an empty object
    if (memo[n]) {
        return memo[n]
    }
    if (n <= 1) {
        return 1
    }
    return memo[n]= fibonacci(n-1,memo)+fibonacci(n-2,memo)
}
console.log(fibonacci(1000));