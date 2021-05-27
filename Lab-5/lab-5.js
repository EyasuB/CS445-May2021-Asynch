const isPrime = (num) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    reject({ prime: false });
                }
            }
            resolve({ prime: num > 1 });
        }, 500);
    });
};
console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');
// A new array removeDuplicatesAsync function that removes duplicates 
/*
Array.prototype.removeDuplicatesAsync = function () {
    let arr = this;
    new Promise(function (resolve, reject) {
        resolve([...new Set(arr)]);
    }).then(console.log)
}
console.log(`start`);
[3, 3, 5, 9, 6, 5, 4, 3, 5, 2, 2].removeDuplicatesAsync();
console.log(`end`);
*/
// using a different algorithm 
Array.prototype.removeDuplicatesAsync = function () {
    let arr = this;
    let unique = [];
    new Promise(function (resolve, reject) {
        resolve(this.forEach(element => {
            if (!unique.includes(element)) {
            unique.push(element)
        }
    }))
    }).then(console.log);
    
}
[3, 3, 5, 9, 6, 5, 4, 3, 5, 2, 2].removeDuplicatesAsync();
console.log(`end`);