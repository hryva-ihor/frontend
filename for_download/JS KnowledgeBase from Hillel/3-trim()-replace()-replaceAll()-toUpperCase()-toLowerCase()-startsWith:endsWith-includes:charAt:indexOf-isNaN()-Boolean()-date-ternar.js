// !

// x = 10;

// if(x != '10'){
// 	console.log('yes, x not 20');
// }

// userAnswer = prompt("enter smth NOT yes");

// if(userAnswer !== 'yes'){
// 	console.log('ok');
// }

// ' ', 'hello', 'a' => true
// -10,10 => true

// '' => false
// 0 => false

// q1 = prompt("Do you want fruits?").toLowerCase().replaceAll(' ','');

// console.log(q1);

// if(q1 === 'yes'){
// 	console.log('in progress');
// }

// name = prompt('Enter name').trim().replaceAll(' ','');
// console.log(name);

// if(q1 === 'yes'){
// 	console.log('in progress');
// }

// trim()

// replace() / replaceAll()

// toUpperCase() / toLowerCase()

// x = prompt('Enter value, which >1 and <=10'); // 5

// if(x>1 && x<=10 && x%2 !== 0){
// 	console.log('yes');
// }

// color = prompt(`Choose: red or blue`); // red

// if(color==='red' ||  color==='blue' || color==='green'){
// 	console.log(yes);
// }

// name = prompt('Enter name, which not start with a, A'); // Bogdan
// console.log(name);
// console.log(name[0]);

// if(name[0].toLowerCase() !== 'a'){
// 	console.log('yes', name);
// }

// email = prompt('Enter email', 'hello').replaceAll(' ',''); // hello

// // console.log(email.length);
// // console.log(email[email.length-1]);

// if(!email.startsWith('@') && !email.endsWith('@') && email.includes('@')){ // true && true
// 	console.log('Hello')
// } else{
// 	console.log('not valid');
// }

// if(email[0] === '@' || email[email.length-1] === '@' || !email.includes('@')){ // false || false || false
// 	console.log('not valid');
// } else{
// 	console.log('Hello')
// }

// startsWith/endsWith

// includes/charAt/indexOf

// ++

// sum = 0;
// apple = 3;

// // sum = sum+apple;
// sum += apple;

// orange = 4;

// // sum = sum+orange;
// sum += orange;


// sum = 0;

// sum = sum + 1;
// sum += 1;
// sum++;
// ++sum;

// sum = 0;
// ++sum;
// console.log(sum);

// sum = 10;
// sum = sum - 1;
// sum -= 1;
// sum--;
// --sum;

// result = 0;
// applePrice = 10;

// result += appleCount*applePrice;
// result += orangeCount*orangePrice;

// isNaN

// result = 0;

// appleCount = parseInt(prompt('Enter count of apple', 10));
// console.log(appleCount);

// if( !isNaN(appleCount) ){
// 	result += appleCount;
// }

// orangeCount = parseInt(prompt('Enter count of orange', 10)); // NaN
// console.log(orangeCount); // NaN;

// if(orangeCount>0){
// 	result += orangeCount;
// }

// console.log(`Result = ${result}`);

// x = '10'; // NaN;
// console.log( isNaN(x) );

// year = prompt('Enter year');
// // '', null, 0

// if(year && year>0 && !isNaN(year)){
// 	console.log(`Hello, ${year}`);

// 	currentDate = new Date();
// 	currentYear = currentDate.getFullYear();

// 	age = new Date().getFullYear() - year;

// 	console.log(age);
// }


// age = +prompt('23');

// if(!isNaN(age)){
// 	console.log('yes');
// }

// 'dfgdfg19sdfsdf'

// typeof

// ternars

// color = 'red';

// if(color === 'red'){
// 	console.log('yes');
// } esle{
// 	console.log('no');
// }

// console.log( color === 'red' ? 'yes' : 'no' );

// color === 'red' ? console.log('yes') : console.log('no');

// user = prompt('Enter + or -');
// color = user === "+" ? "red" : 'black';

// fruits = prompt('Do you want fruits');

// fruits === 'yes' ? 
// 	prompt('Do you want apple') === 'yes' ? console.log('Apple yes') : console.log('Apple no') 
// 	: prompt('Do you want orange') === 'yes' ? console.log('Orange yes') : console.log('Orange no');


// вопрос ? да : нет

// Date – https://learn.javascript.ru/date