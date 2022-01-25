// class

// function Parent(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// Parent.prototype.getInfo = function(){
// 	return `Name: ${this.name}. Age: ${this.age}.`;
// }

// let Jack = new Parent('Jack', 30);
// console.log(Jack);
// console.log(Jack.getInfo());

// function Child(name, age, number){
// 	this.name = name;
// 	this.age = age;
// 	this.number = number;
// }

// Child.prototype = Object.create(Parent.prototype);

// Child.prototype.getNumber = function(){
// 	return `Child number: ${this.number}`;
// }

// let Anton = new Child("Anton", 7, 2);

// console.log(Anton);
// console.log(Anton.getNumber());
// console.log(Anton.getInfo());

// class

// class Grandparent{
// 	constructor(human){
// 		this.name = human.name;
// 		this.age = human.age;
// 		this.surname = "Ivanenko";
// 	}

// 	sayHello(){
// 		return `Hello, ${this.name}!`;
// 	}
// }

// class Parent extends Grandparent{
// 	constructor(human){
// 		super(human);
// 		this.country = human.country ? human.country : "Ukraine";
// 	}

// 	getInfo(){
// 		return `Name: ${this.name}. Age: ${this.age}.`;
// 	}

// 	getName(){
// 		return `Name: ${this.name}.`;
// 	}

// 	getAge(){
// 		return `Age: ${this.age}.`;
// 	}

// 	getCity(){
// 		return "Kiev";
// 	}
// }

// let Jack = new Parent('Jack', 30);
// console.log(Jack);
// console.log(Jack.getInfo());

// console.log(Jack.getCity());

// class Child extends Parent{
// 	constructor(human){
// 		super(human);
// 		this.number = human.number;
// 	}

// 	getNumber(){
// 		return `Child number: ${this.number}`;
// 	}
// }

// let Anton = new Child("Anton", 7, 2);
// console.log(Anton);
// console.log(Anton.getNumber());
// console.log(Anton.getInfo());

// let users = [
// 	{
// 		status: "parent",
// 		name: "Parent 1",
// 		age: 50
// 	},
// 	{
// 		status: "parent",
// 		name: "Parent 2",
// 		age: 60
// 	},
// 	{
// 		status: "child",
// 		name: "Child 1",
// 		age: 6,
// 		number: 1
// 	},
// 	{
// 		status: "child",
// 		name: "Child 2",
// 		age: 7,
// 		number: 2
// 	},
// 	{
// 		name: "Human",
// 		age: 700
// 	}
// ];

// const userStatus = {
// 	parent: human => new Parent(human),
// 	child: human => new Child(human)
// }

// users
// 	.map(human => {
// 		return userStatus[human.status] ? userStatus[human.status](human) : new Grandparent(human);
// 	})
// 	.forEach(human => console.log(human.sayHello()));

// let colors = ['red', 'green', 'blue', ['orange', 'purple']];
// let [red, green, blue, [orange, purple]] = colors;
// console.log(blue, purple);

// // sedan, coupe

// Car
// 	getInfo()

// Audi => Car
// 	getQ()
// BMW => Car
// 	getX()

// AudiQ7
// BMWX5

class Car{
	constructor(name, type){
		this.name = name;
		this.type = type;
	}

	getInfo(){
		return this.getOptions().join(`\n`);
	}

	getOptions(){
		let options = [this.getName(), this.getType()];
		return options;
	}

	getName(){
		return `Name: ${this.name}.`;
	}

	getType(){
		return `Type: ${this.type}.`;
	}
}

class Audi extends Car{
	constructor(name, type, Q){
		super(name, type);
		this.Q = Q;
	}

	getQ(){
		return `Q: ${this.Q}.`;
	}

	getOptions(){
		let options = super.getOptions();
		options.push(this.getQ());
		
		return options;
	}
}

class BMW extends Car{
	constructor(name, type, X){
		super(name, type);
		this.X = X;
	}

	getX(){
		return `X: ${this.X}.`;
	}

	getOptions(){
		let options = super.getOptions();
		options.push(this.getX());
		
		return options;
	}
}

const AudiQ7 = new Audi(`AudiQ7` , 'sedan', 7);
const BMWX5 = new BMW('BMWX5', 'coupe', 5);

console.log(AudiQ7.getInfo());
console.log(BMWX5.getInfo());

// OOP
// Средние показатели мужчин на длинные дистанции – 15-20 км/ч, у девушек – 12-15.

// SOLID

// const ANIMALS = [
// 	{
// 		group: 'bird',
// 		name: 'flamingo',
// 		icon: '🦩'
// 	},
// 	{
// 		group: 'bird',
// 		name: 'parrot',
// 		icon: '🦜'
// 	},
// 	{
// 		group: 'mammal',
// 		name: 'lion',
// 		icon: '🦁'
// 	},
// 	{
// 		group: 'mammal',
// 		name: 'horse',
// 		icon: '🐴'
// 	},
// 	{
// 		group: 'fish',
// 		name: 'tropical fish',
// 		icon: '🐠'
// 	},
// 	{
// 		group: 'fish',
// 		name: 'blowfish',
// 		icon: '🐡'
// 	},
// 	{
// 		group: 'smth',
// 		name: 'dog',
// 		icon: '~'
// 	}
// ];

// <li>
// 	Name: lion. 
// 	Icon: 🦁. 
// 	Group: mammal.
// </li>

// Animal

// Bird => Animal
// Mammal => Animal
// Fish => Animal