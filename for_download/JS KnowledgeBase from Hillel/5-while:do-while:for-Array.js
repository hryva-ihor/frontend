// result = 0;

// q1 = prompt(`...`);
// q1 = q1 ? q1.trim().toLowerCase() : ``;

// switch(q1){
// 	case 'blue':
// 		result += 10;
// }

// q2 = confirm(`...`);

// if(q2)
// 	result += 10;

// result;

// for

// for(i=0; i<=10; i++){
// 	console.log(i);
// }

// console.log(`after cycle ${i}`);

// do{
// 	a = parseInt(prompt(`Enter a`, 5)); // 5
// } while(isNaN(a));

// //console.log(a); // 5

// do{
// 	b = parseInt(prompt(`Enter b`, 10)); // 10
// } while(isNaN(b) || b<=a);

// //console.log(b); // 3

// do{
// 	h = parseInt(prompt(`Enter h`)); // -11
// } while(isNaN(h) || h<=0);


// // while(a<=b){
// // 	console.log(a);
// // 	a++;
// // }

// for(; a<=b; a += h){
// 	console.log(a);
// }

// city = 'saint petersburg new smth';
// newStr = '';

// for(i=0; i<city.length; i++){
// 	//console.log(i, city[i]);
// 	letter = city[i];

// 	if(i===0 || city[i-1] === ' '){
// 		newStr += letter.toUpperCase();
// 	} else{
// 		newStr += letter;
// 	}
// }

// console.log(newStr);

// debugger;

// for(i=1; i<=10; i++){
// 	console.log(i);

// 	if(i === 3){
// 		break;
// 	}

// 	console.log('after if');
// }

// debugger;

// for(i=1; i<=4; i++){
// 	console.log(i);

// 	if(i === 3){
// 		break;
// 	}

// 	console.log('after if');
// }

// toPoint: for(i=1; i<=5; i++){
// 	console.log(i);

// 	for(j=1; j<=i; j++){
// 		console.log(`	${j}`);

// 		if(j==3){
// 			break toPoint;
// 		}
// 	}
// }

// debugger;

// toStart: for(i=1; i<=5; i++){
// 	console.log(i);

// 	for(j=1; j<=i; j++){
// 		console.log(`	${j}`);

// 		if(j==2){
// 			continue toStart;
// 		}

// 		console.log(`****`);
// 	}

// 	console.log('in outer func')
// }

// break/continue

// 5

// // 5%1 = 0
// 5%2 = 1
// 5%3 = 1
// 5%4 = 1
// // 5%5 = 0

// 6

// // 6%1 = 0
// 6%2 = 0 // is not Prime; break
// 6%3
// 6%4
// 6%5
// // 6%6 = 0

// number = 5;
// isPrime = true;

// for(i=2; i<number; i++){
// 	ostatok = number%i;

// 	console.log(`${number} % ${i} = ${ostatok}`);

// 	if(ostatok === 0){
// 		isPrime = false;
// 		break;
// 	}
// }


// if(isPrime){
// 	console.log(`${number} is Prime`);
// } else{
// 	console.log(`${number} is not Prime`);
// }

//console.log(isPrime ? `${number} is Prime` : `${number} is not Prime`);

// debugger;

// for(number=1, sumOfPrimes=0; number<=10; number++){

// 	console.log(`${number}`);

// 	isPrime = true;
	
// 	for(i=2; i<number; i++){
// 		ostatok = number%i;

// 		console.log(`	${number} % ${i} = ${ostatok}`);

// 		if(ostatok === 0){
// 			isPrime = false;
// 			break;
// 		}
// 	}

// 	console.log(isPrime ? `${number} is Prime` : `${number} is not Prime`);

// 	if(isPrime){
// 		sumOfPrimes += number;
// 	}

// }

// console.log(`Sum of prime numbers = ${sumOfPrimes}`);

// toStart: for(i=1, sumOfPrimeNumbers=0; i<=10; i++){

// 	for(j=2; j<i; j++){
		
// 		if(i%j === 0){
// 			continue toStart;
// 		}

// 	}

// 	sumOfPrimeNumbers += i;
// }

// console.log(sumOfPrimeNumbers); // 1+2+3

// for(i=1, sum=0; i<=10; i++){
// 	console.log(`${i} + ${sum} = ${sum+i}`);
// 	sum += i;
// }

// console.log(sum);

// for(i=1, multiply=1; i<=10; i++){
// 	console.log(`${i} * ${multiply} = ${multiply*i}`);
// 	multiply *= i;
// }

// console.log(multiply);

// 3! = 1*2*3;
// 5! = 1*2*3*4*5;

// 1-5

// 1! + 2! + 3! = sumOfFactorials

// number = 5;
// for(i=1, factorial=1; i<=number; i++){
// 	factorial *= i;
// }

// console.log(`${number}! = ${factorial}`);

// Array


// student = 'Artem';
// age = 13;

// student_2 = 'Olenka'
// age_2 = 14;

// names = ['Artem', 'Olenka'];
// ages = [13, 14];

//console.log(x);

// animals = ['cat','dog','lion',12,true,,'hello'];
// console.log(animals);

// animals[0] = 'lion';
// animals[5] = 'NEW';

// console.log( animals.indexOf('lion') );

// animals[7] = 100;
// animals[animals.length] = 200;

// animals[50] = 'fifty';
// animals[animals.length] = 'sixty';

// console.log(animals);

// cat = animals[0];
// console.log( cat );

// console.log(animals[5]);


// numbers = [10,20,30,40,50]; //5

// for(i=0; i<numbers.length; i++) {
// 	item = numbers[i];
// 	item *= 2;

// 	numbers[i] = item;
// }

// console.log(numbers);

// console.log(numbers);

// console.log(numbers.length);

// numbers.length = 3;
// console.log(numbers);

animals = ['cat','dog',23,true,,'lion',100];

document.write(`<ul>`);

for(i=0; i<animals.length; i++){
	if(typeof animals[i] === 'string')
		document.write(`<li>${animals[i]}</li>`);
}

document.write(`</ul>`);

// Math.random()

// Math.floor()
// Math.ceil()
// Math.round()