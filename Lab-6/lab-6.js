async function isPrimeAsync(num) {
    let result = await isPrime(5);
    console.log(result);
}
console.log('start');
isPrimeAsync(5);
console.log('end')


Array.prototype.removeDuplicatesAsync = async function () {
    let result = await removeDuplicates(this);
    console.log(result);
}