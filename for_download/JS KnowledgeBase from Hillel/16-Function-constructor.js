// const CONTINENT = {
// 	getInfo(){
// 		return `<tr>
// 			<td>${this.name}</td>
// 			<td>${this.population}</td>
// 		</tr>`;
// 	}
// }

// const Africa = {
// 	name: "Africa",
// 	population: 1275920972
// }

// const Europe = {
// 	name: "Europe",
// 	population: 746419440
// }

// const AfricanСountries = [
// 	{
// 		name: "Nigeria",
// 		population: 206139589
// 	},
// 	{
// 		name: "Ethiopia",
// 		population: 114963588
// 	},
// 	{
// 		name: "Egypt",
// 		population: 102334404
// 	}
// ];

// const EuropeanСountries = [
// 	{
// 		name: "Monaco",
// 		population: 39242
// 	},
// 	{
// 		name: "Liechtenstein",
// 		population: 38128
// 	},
// 	{

// 		name: "San Marino",
// 		population: 33931
// 	}
// ];

// function makeProto(obj, proto){
// 	let newObj = Object.create(proto);
// 	for(let key in obj){
// 		newObj[key] = obj[key];
// 	}

// 	return newObj;
// }

// function renderContinentInfo(countriesList, continentProto){
// 	continentProto = makeProto(continentProto, CONTINENT);

// 	let TRsСountries = countriesList
// 		.map(country => makeProto(country, continentProto))
// 		.map(country => country.getInfo())
// 		.join(``);

// 	return `<table>
// 		<caption>${continentProto.name}</caption>
// 		<thead>
// 			<tr>
// 				<th>Name</th>
// 				<th>Population</th>
// 			</tr>
// 		</thead>
// 		<tbody>
// 			${TRsСountries}
// 		</tbody>
// 	</table>`;
// }

// let data = [
// 	{
// 		countriesList: AfricanСountries,
// 		continent: Africa
// 	},
// 	{
// 		countriesList: EuropeanСountries,
// 		continent: Europe
// 	}
// ];

// let continentsTable = data
// 	.map(item => renderContinentInfo(item.countriesList, item.continent))
// 	.join('');

// document.write(continentsTable);

// function-constructor

// let Human = {
// 	getInfo(){
// 		return `Hello, my name is ${this.name} ${this.surname}. I'm ${this.age} years old.`;
// 	}
// }

// let Vladimir = Object.create(Human);
// Vladimir.name = "Vladimir";
// Vladimir.surname = "Vladimirov";
// Vladimir.age = 20;

// console.log(Vladimir.getInfo());

// let Nina = Object.create(Human);
// Nina.name = "Nina";
// Nina.surname = "Vladimirova";
// Nina.age = 30;

// console.log(Nina.getInfo());


// function Human(name, surname, age, country="Ukraine"){
// 	this.name = name;

// 	if(!surname){
// 		surname = prompt(`Enter surname`);
// 	}

// 	this.surname = surname;

// 	this.fullName = `${name} ${surname}`;
// 	this.age = age;
// 	this.country = country;
// }

// Human.prototype.getInfo = function(){
// 	return `Hello, my name is ${this.name} ${this.surname}. I'm ${this.age} years old.`;
// }

// Human.prototype.nationality = "ukrainian";

// let Vladimir = new Human('Vladimir', "Vladimirov", 20);
// console.log(Vladimir);

// let NinaInfo = ['Nina', "Vladimirova", 30, "USA", "New York"];
// let Nina = new Human(...NinaInfo);
// console.log(Nina);

// Animal

// function Animal(type, name){
// 	this.type = type;
// 	this.name = name;
// }

// Animal.prototype.countOfPaws = 4;
// Animal.prototype.getInfo = function(){
// 	let info = [];
// 	for(let key in this){
// 		// if(this.hasOwnProperty(key)){
// 		// 	info.push(`${key}: ${this[key]}`); // `type: cat``
// 		// }

// 		if(typeof this[key] !== 'function'){
// 			info.push(`${key}: ${this[key]}`); // `type: cat``
// 		}
// 	}

// 	return info.join(`\n`);
// };

// let Tom = new Animal("cat", "Tom");
// let Jerry = new Animal("mouse", "Jerry");

// console.log(Tom);
// console.log(Jerry);

// console.log(Tom.countOfPaws);

// console.log(Tom.getInfo());
// console.log(Jerry.getInfo());


// let Grandparent = {
// 	country: 'Ukraine'
// }

// let Parent = Object.create(Grandparent);
// Parent.city = 'Kiev';

// let Child = Object.create(Parent);
// Child.name = 'Dmitry';

// console.log(Child);
// console.log(Child.country);

// function Grandparent(){}
// Grandparent.prototype.country = "Ukraine";

// function Parent(){}
// Parent.prototype = Object.create(Grandparent.prototype);
// Parent.prototype.city = "Kiev";

// function Child(name){
// 	this.name = name;
// }
// Child.prototype = Object.create(Parent.prototype);
// Child.prototype.surname = "Vladimirov";

// let Dmitry = new Child("Dmitry");
// console.log(Dmitry);

// let Nina = new Child("Nina");
// console.log(Nina);

// console.log(Nina.country, Dmitry.country);

function Animal(type, voice){
	this.type = type;
	this.voice = voice;
}

Animal.prototype.getVoice = function(){
	return `I can say ${this.voice}.`
}
Animal.prototype.getName = function(){
	return `My name is ${this.type}.`
}

function Hishnik(type, voice){
	this.type = type;
	this.voice = voice;
}

Hishnik.prototype  = Object.create(Animal.prototype);
Hishnik.prototype.getVoice = function(){
	return `I can say ${this.voice}!`
}

let Lion = new Hishnik('Lion', 'arrrr');
console.log(Lion);
console.log(Lion.getVoice());
console.log(Lion.getName());

let Pumba = new Animal('Pumba', 'auf');
console.log(Pumba);
console.log(Pumba.getVoice());
console.log(Pumba.getName());


// class

// OOP
// Средние показатели мужчин на длинные дистанции – 15-20 км/ч, у девушек – 12-15.

// SOLID
