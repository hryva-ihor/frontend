// let arr = [1,1,2,2,3,4,5,6,2,1];

// let unique = arr
// 	.filter(function(item, index, arr){
// 		return arr.indexOf(item) === index;
// 	});

// console.log(unique);

// example

// 1. find year and add it as last el of arr
// 2. filter users, that younger then 50
// 3. print all data

// const women = [
// 	['Anna',1990],
// 	['Inna',2007]
// ];

// const men = [
// 	['Igor',1966],
// 	['Ivan',1975]
// ];

// const currentYear = new Date().getFullYear();

// const userData = ['Name', 'Year', 'Age'];

// let users = women
// 	.concat(men)
// 	.map(function(woman){
// 		return woman.slice();
// 	})
// 	.map(function(user){
// 		user.push(currentYear-user[1]);
// 		return user;
// 	})
// 	.filter(function(user){
// 		return user[2]<=50;
// 	})
// 	.map(function(user){
// 		//console.log(user);
// 		let userInfoRender = user
// 			.map(function(userInfo, index){
// 				return `<p>${userData[index]}: ${userInfo}</p>`;
// 			})
// 			.join('');

// 		return `<li>${userInfoRender}</li>`;
// 	})
// 	.join(``);

// document.write(`<ul>${users}</ul>`);

// [3,3]


// flat
// let arr = [
// 	[1,2,3, [10,20,30, [40,50,60]]],
// 	[4,5,6]
// ];

// let arrModified = arr
// 	.flat(Infinity) // [1,2,3, [10,20,30, [40,50,60]], 4,5,6]
// 	.map(function(item){
// 		return item*2;
// 	})

// console.log(arrModified);

// every/some

// let arr = [1,2,3,4,'5'];

// let arrOfNumbers = arr
// 	.some(function(item, index, arr){
// 		return typeof item === 'number';
// 	})

// console.log(arrOfNumbers); // true

// reduce

// let arr = [10,20,30];

// let summ = 0;
// for(let i=0; i<arr.length; i++){
// 	summ+= arr[i];
// }
// console.log(summ);

// debugger;

// let summ = arr
// 	.reduce(
// 		function(kormashek, item, index, arr){
// 			return kormashek/item;
// 		}
// 	);

// console.log(summ);

// [name, price, callories]

// let products = [
// 	['potato', 30, 6],
// 	['tomato', 25, 3],
// 	['kiwi', 40, 7]
// ];

// let reduceResult = products
// 	.reduce(
// 		function(karmashek, item, index){
// 			let price = item[1],
// 				callories = item[2];

// 			if(index === 0){
// 				karmashek.push(price, callories);
// 			} else{
// 				karmashek[0] += price;
// 				karmashek[1] += callories;
// 			}

// 			return karmashek;
// 		}, []
// 	);

// console.log(reduceResult);

// [allPrice, allCallories]

// olympic

// object