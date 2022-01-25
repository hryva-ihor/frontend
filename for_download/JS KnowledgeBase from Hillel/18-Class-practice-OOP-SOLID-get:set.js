// Средние показатели мужчин на длинные дистанции – 15-20 км/ч, у девушек – 12-15.

class Human{
	constructor(name, smoking=false){
		this.name = name;
		this.smoking = smoking;
		this.speed = 15;
	}

	getSmokingKoef(){
		return 0.8;
	}

	getTime(distance=1000){
		let time = distance/this.speed;

		if(this.smoking){
			time /= this.getSmokingKoef();
		}

		return Math.round(time);
	}
}

class Woman extends Human{
	constructor(name, smoking, hasChild=false){
		super(name, smoking);
		this.speed = 13;
		this.hasChild = hasChild;
	}

	getChildKoef(){
		return 0.9;
	}

	getTime(distance){
		let time = super.getTime(distance);

		if(this.hasChild){
			time /= this.getChildKoef();
		}

		return Math.round(time);
	}
}

class Man extends Human{
	constructor(name, smoking){
		super(name, smoking);
		this.speed = 17;
	}
}

let Anna = new Woman('Anna', true, true);
let Nina = new Woman('Nina', false, true);

let Ivan = new Man('Ivan');

// console.log(Anna);
// console.log(Ivan);

// console.log(Anna.getTime());
// console.log(Nina.getTime());

// console.log(Ivan.getTime());

// SOLID

const ANIMALS = [
	{
		group: 'bird',
		name: 'flamingo',
		icon: '🦩'
	},
	{
		group: 'bird',
		name: 'parrot',
		icon: '🦜'
	},
	{
		group: 'mammal',
		name: 'lion',
		icon: '🦁'
	},
	{
		group: 'mammal',
		name: 'horse',
		icon: '🐴'
	},
	{
		group: 'fish',
		name: 'tropical fish',
		icon: '🐠'
	},
	{
		group: 'fish',
		name: 'blowfish',
		icon: '🐡'
	},
	{
		group: 'smth',
		name: 'dog',
		icon: '~'
	}
];

// <li>
// 	Name: lion. 
// 	Icon: 🦁. 
// 	Group: mammal.
// </li>

class Animal{
	constructor(animal){
		for(let key in animal){
			this[key] = animal[key];
		}
	}

	getInfo(){
		let li = [];
		for(let key in this){
			li.push(`${key}: ${this[key]}`);
		}

		return `<li>${li.join(`<br>`)}</li>`;
	}
}

class Bird extends Animal{
	constructor(animal){
		super(animal);
		this.voice = 'kurlyk';
	}

	getVoice(){
		return `kurlyk`;
	}
}

class Mammal extends Animal{
	constructor(animal){
		super(animal);
	}
}

class Fish extends Animal{
	constructor(animal){
		super(animal);
	}

	getVoice(){
		return `auuu`;
	}
}

const GROUPS = {
	bird: animal => new Bird(animal),
	mammal: animal => new Mammal(animal),
	fish: animal => new Fish(animal)
};

let renderAnimals = ANIMALS
	.map(animal => {
		// if(GROUPS[animal.group]){
		// 	return GROUPS[animal.group](animal);
		// } else{
		// 	return new Animal(animal);
		// }
		return GROUPS[animal.group] ? GROUPS[animal.group](animal) : new Animal(animal);
	})
	.map(animal => animal.getInfo())
	.join(``);

//document.write(`<ul>${renderAnimals}</ul>`);

// Animal

// Bird => Animal
// Mammal => Animal
// Fish => Animal

// get/set

class Car{
	constructor(name){
		this.name = name;
	}

	// getMaxSpeed(){
	// 	return this.maxSpeed ? this.maxSpeed : 300;
	// }

	// setMaxSpeed(value, year){
	// 	this.maxSpeed = year>=2000 ? value+10 : value;
	// }

	get maxSpeed(){
		return this.maxSpeedValue ? this.maxSpeedValue : 300;
	}

	set maxSpeed(obj){
		this.maxSpeedValue = obj.year>=2000 ? obj.speed+10 : obj.speed;
	}

}

let AudiRS = new Car('AudiRS');
let BMWX5 = new Car('BMWX5');

console.log( AudiRS.maxSpeed );
AudiRS.maxSpeed = {speed: 310, year: 2020};
console.log( AudiRS.maxSpeed );

// AudiRS.setMaxSpeed(310, 2020);

// console.log(AudiRS.getMaxSpeed());

// AudiRS.setMaxSpeed(320);

// console.log(AudiRS.getMaxSpeed());

// defineProperty

// Деструктурирующее присваивание

// static

