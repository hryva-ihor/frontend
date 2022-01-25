// const animals = ['🐶', '🐱', '🐹', '🐰'];

// const fruits = [
// 	{
// 		name: 'apple',
// 		icon: '🍎'
// 	},
// 	{
// 		name: 'cherries',
// 		icon: '🍒'
// 	},
// 	{
// 		name: 'grapes',
// 		icon: '🍇'
// 	}
// ];

// //animals.__proto__.renderList = 'hello';

// function capitalize(word){ // apple
// 	let letterFirst = word[0].toUpperCase(); // A
// 	return `${letterFirst}${word.slice(1)}`; // Apple
// }

// function renderObject(item){
// 	let optionsRender = []; // [`name: apple`, `icon: 🍎`];
// 	for(let key in item){
// 		optionsRender.push(`${capitalize(key)}: ${item[key]}.`)
// 	}
// 	return optionsRender.join('<br>');
// }

// Array.prototype.renderList = function(tagName='ul'){
// 	let LIs = this
// 		.map(function(item){
// 			if(typeof item === "object"){
// 				return `<li>${renderObject(item)}</li>`;
// 			} else{
// 				return `<li>${item}</li>`;
// 			}
// 		})
// 		.join('');

// 	return `<${tagName}>${LIs}</${tagName}>`;
// }

// document.write(animals.renderList());
// document.write(fruits.renderList('ol'));

// myPush


// let arr = [10,20,30];
// arr.push(40,50);

// console.log(arr.push(60,70));
// console.log(arr);

// Array.prototype.myPush = function(...args){
// 	//console.log(this); // [10,20,30]
// 	//console.log(args); // [40,50]

// 	// let currentArray = this;

// 	args.forEach(arg => this[this.length] = arg)

// 	// for(let item of args){ //[40,50]
// 	// 	this[this.length] = item;
// 	// }

// 	return this.length;
// }

// arr.myPush(40,50);

// function sum(a,b){
// 	return a+b;
// }

// const sum = (a,b) => a+b;

// console.log( sum(10,20) );

// function sum(a){
// 	return a+10;
// }

// const sum = a => a+10;

// console.log( sum(10) );

// function sum(){
// 	return 10;
// }

// const sum = () => 10;

// console.log( sum() );

// function sum(a,b){
// 	console.log(a,b);
// 	return a+b;
// }

// const sum = (a,b) => {
// 	console.log(a,b);
// 	return a+b;
// }

// const sum = (a,b) => {
// 	return a+b;
// }

// const sum = (a,b) => a+b;

// console.log( sum(10,20) );

// function sum(){
// 	console.log(arguments);
// 	//return a+b;
// }

// const sum = (...args) => {
// 	console.log(args);
// }

// sum(10,20,30,40);

// function foo(){
// 	console.log(this);
// }

// const foo = () => console.log(this);

// let cat = {
// 	type: 'cat',
// 	foo
// }

// cat.foo();

// let arr = [-10,10,-20,30,true,'hello',100];
// console.log(arr);

// // 1. filter number
// // 2. filter >0
// // 3. Math.pow(item,2)
// // 4. console

// arr
// 	.filter(item => typeof item === 'number')
// 	.filter(item => item>0)
// 	.map(item => Math.pow(item,2))
// 	.forEach(item => console.log(item))

// Object.create

// let Parent = {
// 	name: 'Aleksandr',
// 	surname: 'Ivanov',
// 	country: 'Ukraine',
// 	getInfo(){
// 		return `Hello, my name is ${this.name} ${this.surname}. I'm from ${this.country}.`
// 	}
// }
// console.log(Parent);
// console.log(Parent.getInfo());

// let Gleb = Object.create(Parent);
// Gleb.name = 'Gleb';
// Gleb.country = 'Poland';

// console.log(Gleb.name);
// console.log(Gleb.surname);
// console.log(Gleb.getInfo());

// let Nina = {};
// Nina.__proto__ = Gleb;
// Nina.name = "Nina";

// console.log(Nina.getInfo());

// console.log(Nina);

// Anton = Object.create(Parent);

// Anton.name = 'Anton';
// Anton.age = 20;

// console.log(Anton);

// let Animal = {
// 	getInfo(){
// 		return `My type is ${this.type}. Count of pows: ${this.countOfPaws}`;
// 	},
// 	countOfPaws: 4,
// 	animals: {
// 		fox: {
// 			type: 'fox'
// 		}
// 	}
// }

// let cat = Object.create(Animal);
// cat.type = 'cat';

// console.log(cat);
// console.log(cat.getInfo());

// let dog = Object.create(Animal);
// dog.type = 'dog';

// console.log(dog);
// console.log(dog.getInfo());

// Animal.animals.fox.getInfo();

const animals = [
	{
		name: 'dog',
		icon: '🐶'
	},
	{
		name: 'cat',
		icon: '🐱'
	},
	{
		name: 'hamster',
		icon: '🐹'
	},
	{
		name: 'rabbit',
		icon: '🐰'
	}
];
console.log(animals);

const Animal = {
	getInfo(){
		return `Name: ${this.name}. Icon: ${this.icon}.`;
	}
}

let modifiedAnimals = animals
	.map(
		function(animal){
			let newAnimal = Object.create(Animal);
			// newAnimal.name = animal.name;
			// newAnimal.icon = animal.icon;

			for(let key in animal){
				newAnimal[key] = animal[key];
			}

			//console.log(newAnimal);
			return newAnimal;
		}
	)
	.map(
		function(animal){
			return `<li>${animal.getInfo()}</li>`;
		}
	)
	.join('');

document.write(`<ul>${modifiedAnimals}</ul>`);

// Function-costructor

// Class