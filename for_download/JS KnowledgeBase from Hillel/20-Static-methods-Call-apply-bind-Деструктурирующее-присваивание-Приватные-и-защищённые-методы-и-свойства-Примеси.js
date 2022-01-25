// call static method from object

// class User{
// 	constructor(name){
// 		this.name = name;
// 	}
	
// 	static getInfo(){
// 		return `User info.`
// 	}
// }

// let Gleb = new User('Gleb');
// console.log(Gleb);

// console.log(Gleb.constructor.getInfo());
// console.log(User.getInfo());

// extends

// class Grandparent{
// 	get country(){
// 		return 'Ukraine';
// 	}

// 	static get city(){
// 		return `Kiev`;
// 	}
// }

// class Father extends Grandparent{
// 	constructor(){
// 		super();
// 	}

// 	get country(){
// 		let grandparentCountry = super.country;
// 		return `${grandparentCountry}, Poland`;
// 	}

// 	get city(){
// 		let grandparentCity = super.constructor.city;
// 		return `${grandparentCity}, Odessa`;
// 	}
// }

// let Alexandr = new Father();
// console.log(Alexandr.country);

// console.log(Alexandr.city);

// call/apply/bind

// function info(){
// 	console.log(this);
// 	return `Age: ${this.age}.`;
// }

// let user = {
// 	age: 30,
// 	getAge(){
// 		return `Age: ${this.age}.`
// 	}
// }

// let animal = {
// 	age: 7
// }

// console.log( info.call(user) );
// console.log( user.getAge() );

// console.log( user.getAge.call(animal) );

// class User{
// 	constructor(name){
// 		this.name = name;
// 	}
	
// 	static getInfo(){
// 		return `${this.name ? this.name : `User`}, hello!`
// 	}
// }

// let Gleb = new User('Gleb');

// console.log(Gleb.constructor.getInfo.call(Gleb));
// console.log(User.getInfo.call(Gleb));

// console.log(User.getInfo());

// function info(country=`Poland`, city=`Krakov`){
// 	return `
// 		Hello, ${this.name}.
// 		Country: ${country}.
// 		City: ${city}.
// 	`;
// }

// let user = {
// 	name: 'Anton'
// }

// let cat = {
// 	name: 'Tom'
// }

// let SMTH = 'smth'

// const data = [`Ukraine`,`Kiev`];

// console.log( info.call(user) );
// console.log( info.call(user,...data) );

// console.log( info.apply(user,data) );
// console.log( info.apply(user) );

// const infoUser = info.bind(user,`Ukraine`,`Kiev`);
// const infoCat = info.bind(cat,SMTH);

// console.log( infoUser() );

// console.log( infoCat() );
// SMTH = 'else';
// console.log( infoCat() );


// Деструктурирующее присваивание

// let colors = ['red', ,['black','white', ['dark','light']],'blue','orange','yellow'];
// //console.log(colors);
// //let [red, purple=`purple`, [black,,[,light]], blue, ...others] = colors;

// function renderColors([red, purple=`purple`, [black,,[,light]=[]]=[], blue, ...others]=[]){
// 	console.log(red);
// 	console.log(purple);
// 	console.log(blue);
// 	console.log(others);

// 	console.log(black);
// 	console.log(light);
// }

// renderColors(colors);
// renderColors();

// let students = ['Anna','Gleb','Nina','Ivan','Petr','Katya'];

// function getStudents([greates, greater, great, ...others]=[]){
// 	console.log(`First: ${greates}`);
// 	console.log(`Second: ${greater}`);
// 	console.log(`Third: ${great}`);

// 	console.log(others);
// }

// function getStudents(students){
// 	let greates = students[0];
// 	let greater = students[1];
// 	let great = students[2];

// 	let others = students.slice(3);

// 	console.log(`First: ${greates}`);
// 	console.log(`Second: ${greater}`);
// 	console.log(`Third: ${great}`);

// 	console.log(others);
// }

// getStudents(students)

// let user = {
// 	name: 'Ivan',
// 	age: 30,
// 	animals: [`cat`,`dog`],
// 	homeland: {
// 		country: 'Ukraine',
// 		city: 'Kiev'
// 	},
// 	children: [
// 		{
// 			// name: `Child 1`,
// 			age: 7,
// 			sport: 'tennis'
// 		},
// 		{
// 			name: `Child 2`,
// 			age: 10
// 		}
// 	]
// };

// //let {children:[{age:childFirstAge, sport:childFirstSport='dance', name:childFirstName="Anton"}]} = user;

// function userInfo({children:[{age:childFirstAge, sport:childFirstSport='dance', name:childFirstName="Anton"}]=[]} = {}){
// 	console.log(childFirstAge, childFirstSport, childFirstName);
// }

// userInfo(user);

// let colors = ['red',10];
// let [red, [white, black]] = colors;

// console.log(red);
// console.log(white);
// console.log(black);

// function summ(x,y){
// 	return x+y;
// }

// const summ = (x,y) => x+y;

// class User{
// 	_country = 'Ukraine';
// 	#city = 'Kiev';

// 	constructor(name){
// 		this.name = name;
// 	}

// 	get country(){
// 		return `My country: ${this._country}`;
// 	}

// 	set country(value){
// 		this._country = value;
// 	}

// 	get city(){
// 		return `My city: ${this.#city}`;
// 	}

// 	set city(value){
// 		this.#city = value;
// 	}

// 	superFunc(){
// 		return `Data from super function ${this.#city}.`
// 	}
// }

// let Jack = new User(`Jack`);
// console.log(Jack);

// console.log(Jack._country);
// console.log(Jack.country);

// console.log(`****`);

// Jack.country = 'Poland';
// console.log(Jack.country);

// console.log( Jack.city );
// Jack.city = 'Odessa';
// console.log( Jack.city );

// console.log(Jack.superFunc());

// public _var and private #var

// Примеси

// DOM
