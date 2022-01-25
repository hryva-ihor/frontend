// Object

// let user = ['Sasha','Bodgan',13,14];
// user[100] = 100; // 101

// let user = {
// 	name: 'Sasha',
// 	surname: 'Bodgan',
// 	mathMark: 13,
// 	englishMark: 14,
// 	"year of birth": 1990,
// 	age: 100
// }

// console.log(user);
// user.name = 'Alexandra';

// delete user.surname;

// let user = {
// 	name: 'Sasha',
// 	surname: 'Bodgan',
// };

// for(let key in user){
// 	console.log(`${key}: ${user[key]}`); // name: Sasha
// }

// arr = [10,20,30,40];
// console.log(arr);
// arr.name = 'Anna';

// for(let key in arr){
// 	console.log(arr[key]);
// }

// console.log('-----');

// for(let key of arr){
// 	console.log(key);
// }

// function sayHello(){
// 	return `Hello!`;
// }

// let user = {
// 	name: 'Anna',
// 	age: 3,
// 	isGirl: true,
// 	animals: ['cat','dog'],
// 	parents: [
// 		{
// 			name: 'Ivan',
// 			age: 40
// 		},
// 		{
// 			name: 'Ivanka',
// 			age: 39
// 		}
// 	],
// 	getInfo: function(){
// 		return `Hello!`;
// 	},
// 	userHello: sayHello,
// 	sayHello,
// 	flower: "rose"
// }

// // console.log( user.getInfo() );

// // console.log(sayHello());

// console.log( user.getInfo() );
// console.log(user.sayHello());
// console.log(user.userHello());

// function getInfo(animal={}){
// 	let type = animal.type ? `Type: ${animal.type}. ` : ``;
// 	let name = animal.name ? `Name: ${animal.name}. ` : ``;

// 	return [type,name].join(``);
// }

// let cat = {
// 	type: 'cat',
// 	name: 'Tom',
// 	getInfo
// }

// let mouse = {
// 	// type: 'mouse',
// 	name: 'Jerry',
// 	getInfo
// }

// let human = {
// 	name: 'Inna',
// 	yearOfBirth: 1990,
// 	age: new Date().getFullYear()-1990,
// 	getInfo
// }

// console.log( cat.getInfo(cat) );
// console.log( mouse.getInfo(mouse) );

// let data = [cat,mouse,human];

// data
// 	.forEach(function(obj){
// 		obj.getInfo && console.log(obj.getInfo(obj));
// 	})

// console.log(human.getInfo);

// false => 0, '', undefined, false
// true => function, ' ', -10, 10, true

// if(human.getInfo){
// 	console.log( human.getInfo() );
// }

// human.getInfo && console.log( human.getInfo(human) );

// function getInfo(){
// 	console.log(this);
// 	return `I'm ${this.name}, I'm ${this.age} years old.`;
// }

// let user = {
// 	name: 'Gleb',
// 	age: 30,
// 	getInfo
// }

// console.log( user.getInfo() );

// let cat = {
// 	name: 'Tom',
// 	age: 7,
// 	getInfo
// }

// console.log( cat.getInfo() );

// console.log( getInfo() );

// let cat = {
// 	name: 'Tom',
// 	age: 7,
// 	getName: function(){
// 		return `My name is ${this.name}.`
// 	},
// 	getAge: function(){
// 		return `I'm ${this.age} years old.`
// 	},
// 	getInfo: function(){
// 		//console.log(this); //cat
// 		let info = [this.getName(), this.getAge()]; // [`My name is Tom.`, `I'm 7 years old.`];
// 		return info.join(` `); // `My name is Tom. I'm 7 years old.`
// 	}
// }

// console.log( cat.getName() );
// console.log( cat.getAge() );
// console.log( cat.getInfo() );

// console.log('-----');

// let lion = {
// 	name: 'Simba',
// 	age: 13,
// 	getName: function(){
// 		return `My name is ${this.name}.`
// 	},
// 	getAge: function(){
// 		return `I'm ${this.age} years old.`
// 	},
// 	getInfo: function(){
// 		//console.log(this); //cat
// 		let info = [this.getName(), this.getAge()]; // [`My name is Tom.`, `I'm 7 years old.`];
// 		return info.join(` `); // `My name is Tom. I'm 7 years old.`
// 	}
// }

// console.log( lion.getName() );
// console.log( lion.getAge() );
// console.log( lion.getInfo() );


// ex 2

function getName(){
	return `My name is ${this.name}.`
};
function getAge(){
	return `I'm ${this.age} years old.`
};

function getInfo(){
	//console.log(this); //cat
	let info = [getName.call(this), getAge.call(this)]; // [`My name is Tom.`, `I'm 7 years old.`];
	return info.join(` `); // `My name is Tom. I'm 7 years old.`
};

const animalFunctions = [getName, getAge, getInfo];

let cat = {
	name: 'Tom',
	age: 7,
	animalFunctions
}

let lion = {
	name: 'Simba',
	age: 13,
	animalFunctions
}

console.log(cat);

cat.animalFunctions
	.forEach(
		function(singleFunc){
			console.log(singleFunc.call(cat));
		}
	)

// prototype

// this