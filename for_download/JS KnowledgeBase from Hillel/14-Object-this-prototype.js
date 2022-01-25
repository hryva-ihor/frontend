// let obj_1 = {
// 	a: {
// 		cat: {
// 			name: 'Tom',
// 			age: 7
// 		},
// 		mouse: 'Jerry',
// 	},
// 	b: 20,
// 	c: 30
// };

// let obj_2 = {
// 	b: 50,
// 	c: 60,
// 	d: 70,
// 	j: [10,20,30, [40,50, [60,70, {cat: 'Anfisa'}]]]
// };

// console.log(obj_1);
// console.log(obj_2);

// function copiedArray(arr){
// 	let newArr = [];

// 	for(let key in arr){
// 		if(Array.isArray(arr[key])){
// 			newArr[key] = copiedArray(arr[key]);
// 		} else if(typeof arr[key] === 'object'){
// 			newArr[key] = copiedObject(arr[key]);
// 		} else{
// 			newArr[key] = arr[key];
// 		}
// 	}

// 	return newArr;
// }

// function copiedObject(obj){
// 	let newObj = {};

// 	for(let key in obj){
// 		if(Array.isArray(obj[key])){
// 			newObj[key] = copiedArray(obj[key]);
// 		} else if(typeof obj[key] === 'object'){
// 			newObj[key] = copiedObject(obj[key]);
// 		} else{
// 			newObj[key] = obj[key];
// 		}
// 	}

// 	return newObj;
// }

// function concatObjects(...args){
// 	//console.log(args);

// 	let copiedObjects = args
// 		.map(function(obj){
// 			return copiedObject(obj);
// 		}); // [obj_1, obj_2]

// 	return Object.assign({}, ...copiedObjects);
// }

// let resultObj = concatObjects(obj_1, obj_2);
// console.log(resultObj);

// resultObj.j[0] = 100;

// let newObj = {
// 	// x: 'hello'
// };

// let key = prompt('Enter option key'); // x
// let value = prompt('Enter option value'); // hello

// newObj[key] = value;
// console.log(newObj);

// let obj_3 = {
// 	a: 10,
// 	b: 20
// };

// let obj_4 = {
// 	a: 100,
// 	c: 30
// };

// console.log(obj_3);
// console.log(obj_4);


// let resultObj = Object.assign({}, obj_3, obj_4);
// console.log(resultObj);

// resultObj.a = 200;

// spread/rest

// let arr = [1,2,3,4,'hello',true];

// console.log(1,2,3,4);
// console.log(...arr);
// console.log(arr);

// function foo(...myArr){
// 	console.log(myArr);
// }

// foo(10,20);

// this

// function foo(){
// 	console.log(this); // window
// }

// foo();
// window.foo();

// let cat = {
// 	type: 'kotik',
// 	foo
// }

// cat.foo();

// let dog = {
// 	type: 'sobachcka',
// 	dogFunc: foo,
// 	dogUniqueFunc(){
// 		console.log('dogUniqueFunc');
// 	}
// }

// dog.dogFunc();
// dog.dogUniqueFunc();

// function animalInfo(){
// 	return `Type: ${this.type}`;
// }

// let cat = {
// 	type: 'kotik',
// 	// animalInfo
// 	animalInfo(){
// 		return `Type: ${this.type}`;
// 	}
// }
// console.log( cat.animalInfo() );

// let dog = {
// 	type: 'sobachka',
// 	// animalInfo
// 	animalInfo(){
// 		return `Type: ${this.type}`;
// 	}
// }
// console.log( dog.animalInfo() );

// let user = {
// 	name: 'Gleb',
// 	animalInfo
// }

// console.log(user.animalInfo());

// prototype

// let user = {
// 	name: 'Anna',
// }

// console.log(user.__proto__);

// let arr = [1,2,3];

// console.log(arr.__proto__.__proto__);

// let x = 3;

// console.log( x.__proto__.__proto__ );

// console.log(Array.prototype);
// console.log(String.prototype);

Array.prototype.getInfo = function(){
	console.log('hello');
}

// if(user.__proto__ === arr.__proto__.__proto__ === x.__proto__.__proto__){
// 	console.log('equals');
// }

// myPush

//renderList

// const animals = [
// 	{
// 		name: 'dog',
// 		icon: '🐶'
// 	},
// 	{
// 		name: 'cat',
// 		icon: '🐱'
// 	},
// 	{
// 		name: 'hamster',
// 		icon: '🐹'
// 	},
// 	{
// 		name: 'rabbit',
// 		icon: '🐰'
// 	}
// ];

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


// Object.create