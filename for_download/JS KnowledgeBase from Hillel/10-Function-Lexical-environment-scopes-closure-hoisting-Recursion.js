// let list = [
// 	[1,2,3],
// 	[4,5,6]
// ];

// function copiedArr(arr){
// 	let newArr = [];
// 	for(let i=0; i<arr.length; i++){
// 		if(Array.isArray(arr[i])){
// 			newArr.push(arr[i].slice())
// 		} else{
// 			newArr.push(arr[i]);
// 		}
// 	}

// 	return newArr;
// }

// function modify(arr, value){

// 	let localArr = copiedArr(arr);

// 	for(let i=0; i<localArr.length; i++){
// 		let currentArr = localArr[i]; // [1,2,3]

// 		for(let j=0; j<currentArr.length; j++){
// 			currentArr[j] *= value;
// 		}
// 	}

// 	return localArr;
// }

// let modifiedArr = modify(list, 2);

// console.log(list);
// console.log(modifiedArr);

// let animals = ['cat','dog','lion'];

// function renderTable(arr){

// 	let TRs = [];

// 	for(let i=0; i<arr.length; i++){
// 		let tr = `<tr><td>${arr[i]}</td></tr>`;
// 		TRs.push(tr);
// 	}

// 	console.log(TRs);
// 	console.log(TRs.join(`\n`));

// 	return `<table>${TRs.join(``)}</table>`;
// }

// document.write( renderTable(animals) );

// let winter = [-7,-3];
// let summer = [7,3];
// let fruits = ['apple','kiwi'];

// let allItems = winter.concat(summer,fruits);
// console.log(allItems);

// let all = [winter,summer,fruits];

// console.log(all);

// for(let i=0; i<all.length; i++){
// 	console.log(all[i]);
// 	let innerArr = all[i];

// 	for(let j=0; j<innerArr.length; j++){
// 		console.log(innerArr[j]);
// 	}
// }

// let all = [
// 	[winter, 'Winter'],
// 	[summer, 'Summer'],
// 	[fruits, 'Fruits']
// ];

// for(let i=0; i<all.length; i++){
// 	let innerArr = all[i]; // [winter, 'Winter'],

// 	console.log(innerArr[1]);

// 	for(let j=0; j<innerArr[0].length; j++){
// 		console.log(`	${innerArr[0][j]}`);
// 	}
// }

// function in function

// debugger;

// function foo(value, someFunc){

// 	if(typeof someFunc === 'function'){
// 		return someFunc(value);
// 	} else{
// 		return value;
// 	}

// }

// function multiply(value){ 
// 	return value*10; 
// }

// function sum(x){
// 	return x+10;
// }

// let result = foo(10, multiply);
// console.log(result);

// let result_2 = foo(10, sum);
// console.log(result_2);

// let result_3 = foo(10, function(value){ return value+' hello!' });
// console.log(result_3);

// function modifyStr(str, firstFunc, secondFunc){

// 	let result = firstFunc(str);
// 	let finalResult = secondFunc(result);

// 	return finalResult;
// }

// function sayHello(name){
// 	return `Hello, ${name}.`;
// }

// function countryInfo(str){
// 	return `${str} I'm from Ukraine.`;
// }

// let AnnaInfo = modifyStr(`Anna`, sayHello, countryInfo);
// console.log(AnnaInfo);

// `Anna. 20. Ukraine.`
// `Hello, my name is Anna. I'm 20 years old. I'm from Ukraine.`


// function userInfo(name, age, country, nameFunc, ageFunc, countryFunc){

// 	if(typeof nameFunc === 'function'){
// 		name = nameFunc(name);
// 	}

// 	if(typeof ageFunc === 'function'){
// 		age = ageFunc(age);
// 	}

// 	if(typeof countryFunc === 'function'){
// 		country = countryFunc(country);
// 	}

// 	let resultStr = [name, age, country].join(`. `);
// 	return `${resultStr}.`;
// }

// function nameModify(name){
// 	return `Hello, my name is ${name}`;
// }

// function ageModify(age){
// 	return `I'm ${age} years old`;
// }

// function countryModify(country){
// 	return `I'm from ${country}`;
// }

// let AnnaInfo = userInfo(`Anna`,20,`Ukraine`,nameModify,ageModify,countryModify);
// console.log(AnnaInfo);

// let IgorInfo = userInfo(`Igor`,25,`Poland`,nameModify,undefined,countryModify);
// console.log(IgorInfo)

// function sum(someFunc, ...kotik){

// 	console.log(kotik);

// 	//console.log(arguments);
	
// 	// let newArr = new Array();
// 	// for(let i=0; i<arguments.length; i++){
// 	// 	newArr.push(arguments[i]);
// 	// }

// 	// let newArr = [...arguments];
// 	// console.log(newArr);
// }

// let result = sum(function(value){ console.log(value) }, 10,20,30,40);
// console.log(result);

// recursion

// let arr = [
// 	[1,2,3,[[true,false],'dog']],
// 	[4,5,6],
// 	7
// ];

// // debugger;

// function copiedArray(arr){ // [true,false]
// 	let newArr = [];

// 	for(let i=0; i<arr.length; i++){
// 		if(Array.isArray(arr[i])){
// 			newArr.push( copiedArray(arr[i]) ); // [1,2,3]
// 		} else{
// 			newArr.push(arr[i]);
// 		}
// 	}

// 	return newArr;
// }

// let copyOfArr = copiedArray(arr);

// console.log(arr);
// console.log(copyOfArr);

// copyOfArr[0][3][0][0] = 'skotik';


// forEach()
// filter()
// map()
// split(), join()
// every / some
// reduce

