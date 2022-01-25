// Function

// debugger;

// function sayHi(){
// 	// debugger;
// 	sum = Math.floor(Math.random()*10) * 2;
// 	console.log(sum);
// }

// countOfFuncCall = +prompt(`Eneter count of function call`, 3);

// for(i=1; i<=countOfFuncCall; i++){
// 	sayHi();
// 	//console.log(10);
// }

// sayHi();
// sayHi();
// sayHi();
// sayHi();

// console.log(sum);

// function sayHi(userName='Simba', age, country="Ukraine"){
// 	nameStr = `Hello, ${userName}`;
// 	ageStr = !age ? `` : `I'm ${age} years old`;
// 	countryStr = `I'm from ${country}`;

// 	data = [];
// 	data.push(nameStr);

// 	// if(ageStr){
// 	// 	data.push(ageStr);
// 	// }
// 	ageStr && data.push(ageStr);

// 	data.push(countryStr);

// 	console.log(data.join(`. `));
// }

// sayHi('Artem', 13);
// sayHi(100, 'Nina');
// sayHi(undefined,undefined,'Poland');
// sayHi(undefined,200);

// console.log(userName);

// animalType = ['cat','dog'];
// animalName = ['Murka','Strelka'];

// function animalSet(types=animalType, names=animalName){
// 	for(i=0; i<types.length; i++){
// 		console.log(`${types[i]} ${names[i]}`);
// 	}
// }

// animalSet();

// animalNamesSecond = ['Mufasa','Red'];
// animalSet(['lion','fox'], animalNamesSecond);

// x = 10;

// function foo(){
// 	var x = 100;
// 	x *= 2;
// 	console.log(`in function`, x); // 600
// }

// foo();
// foo();

// console.log(`after function`, x); // not defined

// x = 10;

// if(true){
// 	var x = 300;
// }

// console.log(x); // 300

// x = 'hello'

// function animal(){
// 	let x = 10;
// }

// function human(){
// 	let x = 100;
// }

// animal();
// human();

// console.log(x);

// if(){}
// for(){}
// while(){}

// let x; // undefined

// x = 10;

// function foo(){
// 	let x = 100;
// 	console.log(`in function ${x}`); // 100
// }

// foo();

// console.log(`after function ${x}`); // 10

// let x = 10;

// if(true){
// 	let x = 300;
	
// 	if(true){
// 		let y = 400;
// 	}
// }

// console.log(x); // 300
// for(let i=0; i<=10; i++){

// }

// console.log(i); // not defined

// for(let i=0; i<=10; i++){

// }

// 1-10

// let sum = 0;

// for(let i=1; i<=10; i++){
// 	sum += i;
// }

// console.log(sum);
// const ADMIN = 1;
// const passwords = [ADMIN,2,3];

// Lexical environment, scopes

// debugger;

// let x = 10; // Script

// function foo(x){ // Local
// 	let y = 10;
// 	console.log(x,y);
// }

// foo(100);

// function foo2(a){ // Local
// 	let b = 10;
// 	console.log(a,b);
// }

// foo2(100);

// debugger;

// let x = 10; // Script

// function first(x){ // LE = x=100, second
// 	second(x);
// 	console.log(`in first function, ${x}`);
// }
// first(100);

// function second(){
// 	console.log(`in second function, ${x}`); // 100, LE = x = 100
// }

// console.log(`in global scope, ${x}`);

// hoisting

// let y = 'hello';

// function first(y){
// 	let x = 10;

// 	second();
// }

// first(30);

// function second(){
// 	let x = 20;

// 	function third(){
// 		console.log(x, y);
// 	}

// 	third();
// }


// var/let/const

//debugger;

// let x = 100;
// let z = 'hello';

// function first(x=10){ // 100
// 	x += 200;

// 	function second(){
// 		x *= 20;
// 		z += `!`;

// 		console.log(`in second ${x}`);
// 	}

// 	second();

// 	console.log(`in first ${x}`);
// }

// first();

// console.log(`after function ${x}`);

// closure

//debugger;

// function first(){
// 	let x = 10;

// 	function second(){
// 		x += 100;

// 		function third(){
// 			x += 200;
// 			console.log(`in third ${x}`);
// 		}

// 		third();

// 		console.log(`in second ${x}`);
// 	}

// 	second();
// 	console.log(`in first ${x}`);
// }

// first();

// console.log(`after ${x}`); // not defined

//debugger;

function foo(a,b,c,returnMult){
	let sum = a+b+c;
	let multiply = sum*10;
	let diff = multiply/100;

	// if(returnMult){
	// 	return multiply;
	// } else{
	// 	return diff;
	// }

	return returnMult ? multiply : diff;
}

// let resultFoo = foo(10,20,30,true);
// console.log(resultFoo);

console.log(foo(10,20,30,true));
console.log(foo(10,20,30));
