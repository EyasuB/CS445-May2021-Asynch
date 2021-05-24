function University(name:string , dept:string):void{ 
	this.name = name; 
	this.dept = dept; 
	this.graduation = function(year: number) { 
		 console.log(`Graduating ${this.dept} ${year} students`); 
	} 
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
let bankAccount: {
	money: number;
	deposit(value: number): void;
}
bankAccount = {
	money: 2000,
	deposit: function (value: number) {
		this.money += value;
	}
}


let myself: {
    name: string,
    bankAccount: typeof bankAccount,
	hobbies: string[];
}
myself = {
	name: "Asaad",
	bankAccount: bankAccount,
	hobbies: ["Violin","Cooking"]
 }
interface motorVehicle {
	name: string;
	acceleration: number;
	honk(): string;
	acclerate(speed: number): void;

}
class Car implements motorVehicle{

	constructor(public name: string, public acceleration:number=0){
	}
	acclerate(speed: number): void {
		throw new Error("Method not implemented.");
	}
	honk():string{
		return `${this.name} is saying: Tooooooooooooot!`;
	}
	accelerate(speed:number):void{
		this.acceleration= this.acceleration + speed; 
	}
}
var car = new Car("BMW");
car.honk();
car.accelerate(45);
console.log(car.acceleration);// 0+45 =45 



class BaseObject {
	width: number;
	length: number;
	constructor(width: number, length: number) {
		this.width = width;
		this.length = length;
	}
	calcSize():number {
		return this.width * this.length;
	}
}
class Rectangle extends BaseObject {
	constructor(width: number = 1, length: number = 1) {
		super(width,length)
	}
	calcZize():number {
		return this.width * this.length;
	}
}
let rectangle = new BaseObject(5, 2);
console.log(rectangle.calcSize());// 10