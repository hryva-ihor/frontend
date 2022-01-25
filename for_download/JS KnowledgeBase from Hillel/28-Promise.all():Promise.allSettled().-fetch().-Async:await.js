//💚💔

// const getFile = file => {
// 	console.log(`start getting ${file}`);

// 	return new Promise((resolve, reject) => {
// 		let xhr = new XMLHttpRequest();
// 		xhr.open("GET", file);
// 		xhr.send();

// 		xhr.addEventListener(`readystatechange`, ()=>{
// 			if(xhr.readyState == 4){
// 				console.log(`end getting ${file}`);
// 				xhr.status < 400 ? resolve(JSON.parse(xhr.response)) : reject(file)
// 			}
// 		})
// 	})
// }

// getFile(`files/users.json`)
// 	.then(
// 		users => {
// 			console.log(users);

// 			users.forEach(userName => {

// 				console.log(`Start getting file ${userName}.json`);
				
// 				getFile(`files/${userName}.json`)
// 					.then(user => {
// 						console.log(`End getting file ${userName}.json`);
// 						console.log(user);
// 					})
// 					.catch(
// 						err => console.log(`💔 in catch ${err}`)
// 					)

// 			})

// 		}
// 	)
// 	.catch(
// 		err => console.log(`💔 in catch ${err}`)
// 	)

// Promise
// 	.all([
// 		getFile('files/Alla.json'), // 1.5s
// 		getFile('files/Anton.json'), // 0.9s
// 		getFile('files/Vika.json'), // 0.7s
// 		getFile('files/Ivan.json') // 0.7s
// 	])
// 	.then(
// 		data => console.log(`💚 in resolve`, data)
// 	)
// 	.catch(
// 		err => console.log(`💔 in catch, ${err}`)
// 	)

// Promise.all | Promise.allSettled

// Promise
// 	.allSettled([
// 		getFile('files/Alla.json'), // 1.5s
// 		getFile('files/Anton.json'), // 0.9s
// 		getFile('files/Vika.json'), // 0.7s
// 		getFile('files/Ivan.json') // 0.7s
// 	])
// 	.then(
// 		data => {
// 			console.log(`💚 in resolve`, data);
// 			return data.filter(file => file.status === "fulfilled")
// 		}
// 	)
// 	.then(
// 		users => {
// 			console.log(users); // filtered
// 			return users.map(user => user.value);
// 		}
// 	)
// 	.then(
// 		users => console.log(users)
// 	)

// Promise
	// .allSettled([
	// 	getFile('files/Alla.json'), // 1.5s
	// 	getFile('files/Anton.json'), // 0.9s
	// 	getFile('files/Vika.json'), // 0.7s
	// 	getFile('files/Ivan.json') // 0.7s
	// ])
// 	.then(
// 		data => data.filter(file => file.status === "fulfilled").map(user => user.value)
// 	)
// 	.then(
// 		users => console.log(users)
// 	)


// getFile(`files/users.json`)
// 	.then(
// 		users => {
// 			console.log(users); // ['Alla', 'Anna', 'Anton', 'Vika', 'Ivan']
// 			// [getFile(`files/Alla.json`), getFile(`files/Anna.json`)]

// 			return Promise
// 				.allSettled(users.map(user => getFile(`files/${user}.json`)))
// 					.then(
// 						data => data.filter(file => file.status === "fulfilled").map(user => user.value)
// 					)
// 		}
// 	)
// 	.then(
// 		users => {
// 			console.log(`💚 in second resolve`);
// 			users.forEach(user => console.log(user.age))
// 		}
// 	)
// 	.catch(
// 		err => console.log(`💔 in catch ${err}`)
// 	)


// fetch

// let xhr = new XMLHttpRequest();
// xhr.open("GET", file);
// xhr.send();

// xhr.addEventListener(`readystatechange`, ()=>{
// 	if(xhr.readyState == 4){
// 		console.log(`end getting ${file}`);
// 		xhr.status < 400 ? resolve(JSON.parse(xhr.response)) : reject(file)
// 	}
// })


// fetch(`files/users.json`)
// 	.then(
// 		data => { // Response = new Promise();
// 			console.log(data);
// 			return data.ok ? data.json() : Promise.reject(data.statusText)
// 		}
// 	)
// 	.then(
// 		users => {
// 			console.log(users)

// 			return Promise
// 				.allSettled(
// 					users
// 						.map(user => {
// 							return fetch(`files/${user}.json`)
// 								.then(file => file.ok ? file.json() : Promise.reject(file.statusText))
// 						})
// 				)
// 				.then(
// 					users => users.filter(user => user.status === "fulfilled").map(user => user.value)
// 				)
// 		}
// 	)
// 	.then(
// 		users => console.log(users)
// 	)
// 	.catch(
// 		err => console.log(`💔 in catch ${err}`)
// 	)

// async/await

// const getFile = async file => {
// 	try{
// 		let request = await fetch(file),
// 			response = request.ok ? await request.json() : await Promise.reject(request.statusText)

// 		return response;

// 	} catch(err){
// 		console.log(err)
// 	};
// }

// (async () => {

// 	let users = await getFile(`files/users.json`);
// 	console.log(users);

// })()

// let myPromise = new Promise((resolve, reject) => {
// 	resolve({x: 10, y: 20})
// 	reject([10, 20])
// })

// myPromise
// 	.then(
// 		data  => console.log(data.x, data.y)
// 	)
// 	.catch(
// 		arr => console.log(data[0], data[y])
// 	)

// async/await
