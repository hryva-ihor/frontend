const controller = async (url, method="GET", obj) => {

	let options = {
		method: method,
		headers: {
			"content-type": "application/json"
		}
	}

	if(obj)
		options.body = JSON.stringify(obj);

	let request = await fetch(url, options);

	if(request.ok){
		return request.json();
	} else{
		throw new Error(request.statusText);
	}
}

// const API = `https://61e82124e32cd90017acc07e.mockapi.io`;

// (async () => {

// 	try{
		
// 		let users = await controller(`${API}/users`);
// 		console.log(users);

// 		let usersAnimals = users
// 			.reduce((animalsObj, user) => {
// 				animalsObj[user.animal] = [];
// 				return animalsObj;
// 			}, {});
// 		console.log(`*** create object of animals names ****`);
// 		console.log(usersAnimals); // create object of all animals, that avaliable for all users

// 		let animals = Promise // fill each animal
// 			.allSettled(
// 				Object.keys(usersAnimals)
// 					.map(animal => {
// 						console.log(`start getting ${animal} list`);
// 						return controller(`${API}/${animal}`)
// 							.then(data => {
// 								usersAnimals[animal] = data;

// 								console.log(`getted ${animal} list`);
// 								console.log(usersAnimals);
// 							})
// 					})
// 			)
// 			.then(
// 				() => {
// 					console.log(`*** final object of animals names ****`);
// 					console.log(usersAnimals);

// 					users.forEach(async user => {
// 						let block = document.createElement(`div`);
// 						block.className = `user`;

// 						block.innerHTML = `<h3>Name: ${user.name}</h3>`;

// 						let userAnimalName = document.createElement(`h4`);
// 						userAnimalName.innerHTML = `Animal name: ${user.animalName ? user.animalName : ``}`;

// 						let animalAvaliableNames = usersAnimals[user.animal];

// 						let animalsSelect = document.createElement(`select`);
// 						animalsSelect.innerHTML = animalAvaliableNames
// 							.map(animal => `<option value="${animal.name}" ${user.animalName === animal.name ? `selected` : ``}>${animal.name}</option>`)
// 							.join(``);

// 						animalsSelect.addEventListener(`change`, () => {
// 							console.log(animalsSelect.value);

// 							let changeUser = controller(`${API}/users/${user.id}`, "PUT", {animalName: animalsSelect.value})
// 									.then(user => {
// 										console.log(user);
// 										userAnimalName.innerHTML = `Animal name: ${user.animalName}`;
// 									})
// 						})

// 						block.append(userAnimalName, animalsSelect);

// 						document.body.append(block);
// 					})
// 				}
// 			)

// 	} catch(err){
// 		console.log(`in catch: ${err}`)
// 	}

// })();