// let

// let sum=0;

// for(let i=1; i<=10; i++){
// 	sum+=i;
// }
// console.log(sum); // not defined
// console.log(i); // 11

// forEach()

// let arr = [10,20,30,40,20];

// for(let i=0; i<arr.length; i++){
// 	let x = arr[i]*2;
// 	document.write(`<p>${x}</p>`);
// }

// arr.forEach(
// 	function(el, index, arr){
// 		el *= 2;
// 		document.write(`<p>${el}</p>`);
// 	}
// )

// console.log(arr);

// arr.forEach(
// 	function (el, index, myArr){ // 10, 0, [10,20,30]
// 		if(myArr[index+1] === 20){
// 			console.log(el*100);
// 		} else{
// 			console.log(el);
// 		}
// 	}
// );

// console.log(arr);

// filter()

// let arr = [10,-10,true,'hello',function(){},100];

// let numbersArr = [];
// for(let i=0; i<arr.length; i++){
// 	if(typeof arr[i] === 'number'){
// 		numbersArr.push(arr[i]);
// 	}
// }

// console.log(numbersArr);
// console.log(arr);

// let numbersArr = arr.filter(
// 	function(item, index, arr){
// 		return typeof item === 'number';
// 	}
// )

// console.log(numbersArr);
// console.log(arr);

// let arr = [
// 	[10, true],
// 	[10, 20],
// 	[10, false],
// 	[10, 'hello'],
// 	10,
// 	true
// ]

// let arraOfArrays = arr.filter(
// 	function(item){
// 		return Array.isArray(item) && typeof item[1] === 'boolean';
// 	}
// )

// console.log(arraOfArrays);


// let arr = [10,20,true,'hello',100,-10,-20];

// for(let i=0; i<arr.length; i++){
// 	if(typeof arr[i] === 'number' && arr[i]<0){
// 		document.write(`<p>${arr[i]*2}</p>`);
// 	}
// }

// arr
// 	.filter(
// 		function(item){
// 			return typeof item === 'number';
// 		}
// 	)
// 	.filter(
// 		function(item){
// 			return item<0;
// 		}
// 	)
// 	.forEach(
// 		function(item){
// 			document.write(`<p>${item*2}</p>`);
// 		}
// 	)

// map()

// let arr = [10,20,30];

// let modifiedElements = arr
// 	.map(
// 		function(item, index, arr){
// 			return item*2;
// 		}
// 	);

// console.log(arr);
// console.log(modifiedElements);

// let arr = [10,20,true,'hello',100,-10,-20];

// 1. number && <0
// 2. Math.pow(el,2);
// 3. <li>

// document.write(`<ul>`);

// arr
// 	.forEach(
// 		function(item){
// 			if(typeof item === 'number' && item<0)
// 				document.write(`<li>${Math.pow(item,2)}</li>`);
// 		}
// 	)

// document.write(`<ul>`);

// arr
// 	.filter(
// 		function(item){
// 			return typeof item === 'number' && item<0
// 		}
// 	)
// 	.map(
// 		function(item){
// 			return Math.pow(item,2);
// 		}
// 	)
// 	.forEach(
// 		function(item){
// 			document.write(`<li>${item}</li>`);
// 		}
// 	)

// document.write(`</ul>`);

// let LIs = arr
// 	.filter(
// 		function(item,index,arr){
// 			return typeof item === 'number' && item<0;
// 		}
// 	) // [-10,-20]
// 	.map(
// 		function(item){
// 			return `<li>${Math.pow(item,2)}</li>`;
// 		}
// 	) // ['<li>100</li>','<li>400</li>']
// 	.map(
// 		function(item){
// 			return `<li>${item}</li>`
// 		}
// 	)
// 	.join(''); // '<li>100</li><li>400</li>'

// document.write(`<ul>${LIs}</ul>`);

// let arr = [10,20,30,-10,-20,-30];

// 1. >0, *2, li
// 2. >0, *5, li

// function modify(arr, value){
// 	let newArr = arr
// 		.filter(function(item){
// 			return item>0
// 		})
// 		.map(function(item){
// 			return `<li>${item*value}</li>`;
// 		})
// 		.join('');

// 	return newArr;
// }

// document.write(`<ul>${modify(arr, 2)}</ul>`);
// document.write(`<ul>${modify(arr, 5)}</ul>`);

// let arr = [10,20,'cat',true,77,'cat'];

// let myCat = arr
// 	.find(
// 		function(item, index, arr){
// 			// console.log(item);
// 			return item === 'cat';
// 		}
// 	);

// console.log(myCat);


// let arr = [10,20,'cat',true,77,'cat'];

// let modifyElements = arr
// 	.map(function(item){
// 		return typeof item === 'number' ? Math.pow(item,2) : typeof item === 'string' ? item.toUpperCase() : !item;
// 	});

// console.log(modifyElements); // [100,400,'CAT',false,5929,'CAT'];

// const sports = [
// 	['🤺','fencing'],
// 	['⛸','figure skating'],
// 	['⛷','skier'],
// 	['🏂','snowboarder'],
// 	['🏌','golfing'],
// 	['🚣','rowing boat'],
// 	['🏊','swimming'],
// 	['🤸','gymnastics'],
// 	['🤾','handball']
// ];

// function getSportIcon(sportName){
// 	let SportInfo = sports
// 		.find(
// 			function(sport){ // ['🤺','fencing']
// 				return sport[1] === sportName;
// 			}
// 		);

// 	console.log(SportInfo); // ['🤸','gymnastics']

// 	return SportInfo[0];
// }

// console.log( getSportIcon('gymnastics') );

// let arr = ['handball', 'gymnastics', 'gymnastics'];


// function getSportIcon(arr,sportName){
// 	return arr.filter(
// 		function(sport){
// 			return sport === sportName;
// 		}
// 	)
// }

// console.log( getSportIcon(arr, 'gymnastics') );

// let arr = ['cat','catball','dogball','find'];

// let ballElements = arr
// 	.filter(function(item){
// 		return item.includes('ball');
// 	});

// console.log(ballElements);

// find() / findIndex()
// split(), join()
// every / some
// reduce
