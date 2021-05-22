function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
var miu = new Univeristy("MIU", "Computer Science");
miu.graduation(2019);

let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);
function Car(name) {
    this.name = name;
    this.acceleration = 0;
    this.honk = function () {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    };
    this.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60

var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);

rectangle.width = 5;
rectangle.length = 2;

rectangle.calcSize = function () {
    return this.width * this.length;
};

console.log(rectangle.calcSize()); // 10