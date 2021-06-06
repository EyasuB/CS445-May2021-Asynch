const Cart = (function () {
    let basket = [];
    return {
        upsertItem: function (product) {
            for (let i = 0; i < basket.length; i++) {
                let temp = basket[i];
                if (temp.id === product.id) {
                    basket[i] = product;
                    return;
                }
            }
            basket.push(product);
        },
        getItemsCount: function () {
            return basket.length;
        },
        getTotalPrice() {
            return basket.reduce((ourTotal, p) =>
                ourTotal + p.price * p.count, 0);
        },
        removeItemById(id) {
            basket = basket.filter(p => p.id !== id);
        }
    };
})()
/*
## Exercise 02
Write an implementation for the Observer Pattern where observers have the following format: {'event': [observers]}
For example:

{
   'eat': [function1, function2],
   'study': [function3, function4, function5]
}
This Observable/Subject should be used as following:

const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana

*/
//using function prototype 
class Subject {
    observers = {};


    on(anyevent, fn) {
        if (!this.observers[anyevent]) {
            this.observers[anyevent] = [fn];
        } else {
            this.observers[anyevent].push(fn);
        }
    }
    emit(anyevent, message) {
        if (this.observers[anyevent]) {
            this.observers[anyevent].forEach(fn => fn(message));
        }
    }
    off(anyevent, fn) {
        this.observers[anyevent] = this.observers[anyevent].filter(f => f !== fn);
    }
}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');
//output
// Corn
// foo: Corn
// cs445
// foo: cs445
subject.off('eat', foo);
subject.emit('eat', 'Banana');
//output
//Banana