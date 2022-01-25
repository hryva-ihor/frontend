// get file users.json
// get file for each user from users.json and push to users ages to USER_AGES array;

// console.log('before');

// const USER_AGES = [];

// const getUsers = arrUsers => arrUsers.forEach(user => {

// 	console.log(`start getting file ${user}.json`);

// 	let xhr = new XMLHttpRequest();
// 	xhr.open('GET', `files/${user}.json`, true);
// 	xhr.send();

// 	xhr.addEventListener('readystatechange', ()=>{
// 		// console.log(xhr.readyState);
// 		if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status<400){
// 			let user = JSON.parse(xhr.response);
// 			console.log(user);

// 			USER_AGES.push(user.age);
// 		}
// 	})
// });

// setTimeout(()=>{
// 	console.log(USER_AGES)
// 	USER_AGES.forEach(age => console.log(age));
// },2000);

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'files/users.json', true);
// xhr.send();

// xhr.addEventListener('readystatechange', ()=>{
// 	// console.log(xhr.readyState);
// 	if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status<400){
// 		let users = JSON.parse(xhr.response);
// 		console.log(users);
// 		getUsers(users);
// 	}
// })

// console.log('after');

// Event loop

// function main() {
// 	console.log('A')

// 	setTimeout(
// 		function exec() {
// 	  		console.log('B')
// 		},
// 		0
// 	)

// 	// for(let i=0; i<=100; i++){
// 	// 	console.log(i);
// 	// }

// 	console.log('C');
// }

// main();


// A
// B
// C

// Promise 💚💔

// let cleanedRoom = true;

// const thirdResolve = () => console.log('💚 third resolve');

// const secondResolve = () => {
// 	console.log('💚 second resolve');
// 	thirdResolve();
// }

// const resolve = () => {
// 	console.log('💚 Yes, go play.');
// 	secondResolve();
// };
// const reject = () => console.log('💔 No, do the laundry.');

// setTimeout(()=>{
// 	cleanedRoom ? resolve() : reject();
// },2000);

// let cleanedRoom = true;
// let markMath = 4;

// let myPromise = new Promise(
// 	function(resolve, reject){

// 		setTimeout(()=>{
// 			cleanedRoom ? resolve(markMath) : reject(markMath);
// 		},100);
		
// 	}
// );

// myPromise
// 	.then(
// 		function(mark){ 
// 			console.log('💚 Yes, go play.');
// 			return mark >= 7 ? Promise.resolve(mark) : Promise.reject(mark);
// 		},
// 		function(mark){ 
// 			console.log('💔 No, do the laundry.');
// 			return Promise.reject();
// 		}
// 	)
// 	.then(
// 		function(mark){ 
// 			console.log('💚 Second resolve.') 
// 			return mark >= 11 ? Promise.resolve() : Promise.reject();
// 		},
// 		function(mark){ 
// 			console.log('💔 Second reject.') 
// 			return mark >= 5 ? Promise.resolve() : Promise.reject();
// 		}
// 	)
// 	.then(
// 		function(){ console.log('💚 Third resolve.') },
// 		function(){ console.log('💔 Third reject.') }
// 	)


// next

let cleanedRoom = true;

let myPromise = new Promise(
	(resolve, reject) => {
		setTimeout(() => {
			cleanedRoom ? resolve(100) : reject(100);
		}, 100);
	}
)

myPromise
	.finally(
		() => console.log('1 💚💚💚 in finally')
	)
	.then(
		x => {
			console.log('💚 in 1 resolve', x);
			//return Promise.reject(--x);
			return --x;
		}	
	)
	.finally(
		() => console.log('2 💚💚💚 in finally')
	)
	.then(
		x => {
			console.log('💚 in 2 resolve', x);
			return --x;
		}
	)
	.then(
		x => console.log('💚 in 3 resolve', x)
	)
	.finally(
		() => console.log('3 💚💚💚 in finally')
	)
	.catch(
		x => console.log('💔 in catch', x)
	)
	.finally(
		() => console.log('4 💚💚💚 in finally')
	)

// then, finally, catch

// Promise.all(), Promise.allSettled()