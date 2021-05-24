var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function University(name, dept) {
    this.name = name;
    this.dept = dept;
    this.graduation = function (year) {
        console.log("Graduating " + this.dept + " " + year + " students");
    };
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);
// We can also use TS class 
// class Univerity2{ 
// 	constructor(name: string, dept: string) {
// 	}
// 	graduation(year:number) {
// 	console.log((`Graduating ${this.dept} ${year} students`))
// }
// }
// 2 
var bankAccount;
bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself;
myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.acclerate = function (speed) {
        throw new Error("Method not implemented.");
    };
    Car.prototype.honk = function () {
        return console.log(this.name + " is saying: Tooooooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(45);
console.log(car.acceleration); // 0+45 =45 
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = width;
        this.length = length;
    }
    BaseObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        if (width === void 0) { width = 1; }
        if (length === void 0) { length = 1; }
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcZize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new BaseObject(5, 2);
console.log(rectangle.calcSize()); // 10
