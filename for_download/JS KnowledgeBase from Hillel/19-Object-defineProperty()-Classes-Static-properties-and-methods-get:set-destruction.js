// static

// class Weather{

// 	getWind(){
// 		return 3.14;
// 	}

// 	static getWind(){
// 		return 3.14;
// 	}
// }

// let today = new Weather();

// console.log( today.getWind() );

// console.log( Weather.getWind() );

// console.log();

// class Animal{

// 	constructor(name){
// 		this.name = name;
// 	}

// 	getHi(){
// 		return `Hello, ${this.getName()}.`
// 	}

// 	getName(){
// 		return this.name;
// 	}

// 	static getHi(animal){
// 		return `Hello, animal ${animal.name}!`;
// 	}

// 	static animalData(){
// 		return `animal data`;
// 	}
// }

// class User{
// 	static getHi(){
// 		return `Hello, user!`;
// 	}
// }

// let Cat = new Animal('Anfisa');

// console.log( Cat.getHi() );

// console.log(Animal.getHi(Cat));
// console.log(User.getHi());


// class GrandParent{
// 	static getCountry(){
// 		return `Ukraine`;
// 	}
// }

// class Parent extends GrandParent{
// 	static getCity(){
// 		return "kiev";
// 	}
// }

// console.log(Parent.getCountry());

// class Activity{
// 	static getBanner(){
// 		return `black friday!`;
// 	}
// }

// class Product{
// 	static getBanner(){
// 		return `black friday!`;
// 	}
// }

// Product.getBanner();

// defineProperty

// const x = [100];

// x[0]++;

// console.log(x);

// const admin = 1;

// const PASS = {
// 	admin: admin,
// 	student: 2
// }

// PASS.admin = 10;
// console.log(PASS);

// const user = {
// 	name: 'Anna'
// }

// user.name = 'Dima';

// Object.defineProperty(user, 'name', {
// 	writable: false,
// 	configurable: false,
// 	// value: 'Dima'
// })

// Object.defineProperty(user, 'age', {
// 	value: 23
// })

// Object.defineProperty(user, 'getName', {
// 	value: function(value){
// 		return `Hello, ${value}`;
// 	}
// })

// user.age = 100;
// delete user.age;

// delete user.name;

// console.log(user);

// console.log(user.getName('Vladimir'));


// const user = {
// 	name: 'Anna',
// 	age: 23,
// 	getName(){
// 		return 'hello';
// 	},
// 	surname: 'Ivanov'
// }

// console.log(user);

// Object.defineProperty(user, 'age', {
// 	enumerable: false
// })

// Object.defineProperty(user, 'country', {
// 	value: 'Ukraine',
// 	// enumerable: true
// })

// Object.defineProperty(user, 'getName', {
// 	enumerable: false
// })


// for(let key in user){
// 	//console.log(user[key]);
// 	Object.defineProperty(user, key, {
// 		enumerable: false
// 	});
// }

// let arr = [1,2,3];
// arr.name = "anna";

// for(let key in arr){
// 	console.log(key);
// }

// class User{
// 	constructor(user){
// 		for(let key in user){
// 			this[key] = user[key];
// 		}

// 		for(let key in this){
// 			Object.defineProperty(this, key, {
// 				writable: false,
// 				configurable: false
// 			});
// 		}
// 	}
// }

// let Anna = new User(user);
// console.log(Anna);


// let user = {};

// Object.defineProperty(user, 'name', {
// 	get: function(){
// 		return this.userName ? this.userName : 'Anna';
// 	},
// 	set: function(value){
// 		this.userName = value;
// 	}
// })

// console.log(user);
// console.log(user.name);
// user.name = 'Igor';
// console.log(user.name);


// let user = {};

// let userName = "Anna";
// Object.defineProperty(user, 'name', {
// 	get: function(){
// 		return userName;
// 	},
// 	set: function(value){
// 		userName = value;
// 	}
// })

// console.log(user);

// console.log(user.name);
// user.name = 'Igor';
// console.log(user.name);

// let users = ['Anna','Ivan'];

// let usersNew = users
// 	.map(user => {
// 		let newUser = {};

// 		Object.defineProperty(newUser, 'name', {
// 			get: function(){
// 				return this.userName ? this.userName : user;
// 			},
// 			set: function(value){
// 				this.userName = value;
// 			}
// 		})

// 		return newUser;
// 	});

// console.log(usersNew);

// let animal = {};
// Object.defineProperty(animal, 'name', {
// 	get: function(){
// 		return userName;
// 	},
// 	set: function(value){
// 		userName = value;
// 	}
// })
// animal.name = 'Simba';

// console.log(user.name);


// Деструктурирующее присваивание


// let colors = ['red', 'green', 'blue', ['orange', 'purple'], {name: 'Anton'}];

// // let red = colors[0];
// // let green = colors[1];
// // let blue = colors[2];

// // let purple = colors[3][1];

// let [red,,,[orange, purple], {name:antonName} ] = colors;

// console.log(red);
// // console.log(green);
// // console.log(blue);

// console.log(purple);

// console.log(antonName);

let colors = ['red',undefined,'green','orange','pink','yellow'];

let [red, blue='blue', green, ...otherColors] = colors;

console.log(red);
console.log(blue);
console.log(green);

console.log(otherColors);

function showMenu(title = "Untitled", width = 200, height = 100, items=[]) {
  console.log(title);
  console.log(width);
  console.log(height);
  console.log(items);

  items.map(function(item){})
}

showMenu(['Buu',100,200]);

// call, apply, bind

// DOM