// 💔💚
// async/await

// const controller = async file => {
// 	let request = await fetch(file);

// 	if(request.ok){
// 		return request.json();
// 	} else{
// 		throw new Error(request.statusText);
// 	}
// }

// controller(`https://jsonplaceholder.typicode.com/photos`)
// 	.then(
// 		data => console.log(data)
// 	)

// const getCourses = async () => {

// 	try{
// 		let user = await controller(`files/user.json`);
// 		console.log(user);

// 		let role = await controller(`files/${user.role}.json`);
// 		console.log(role);

// 		let courses = await Promise
// 			.allSettled(
// 				role.courses.map(course => controller(`files/courses/${course}.json`))
// 			)
// 			.then(
// 				files => files.filter(file => file.status === "fulfilled").map(file => file.value)
// 			)
// 			.then(
// 				courses => courses.map(course => `${course.icon} ${course.title}`).join(`\n`)
// 			)

// 		console.log(courses);
	
// 	} catch(err){
// 		console.log(err);
// 	}

// };

// const getCoursesBtn = document.querySelector(`#getCourses`);
// getCoursesBtn.addEventListener(`click`, getCourses);


// REST

// API: https://jsonplaceholder.typicode.com/

// 'https://jsonplaceholder.typicode.com/comments/1'

// URL
// 	protocol http/https
// 	domain
// 	path
// 	queryParameter

// METHOD
// 	GET – получение данных
// 	POST * – отправка данных на сервер в теле запроса (body)
// 	PUT * – отправка данных на сервер в теле запроса (обновление ресурса)
// 	PATCH * – отправка данных на сервер в теле запроса
// 	DELETE

// BODY

// HEADERS – служебная информация (кодировка, сжатие, сервер, кеширование)

// STATUS
// 	100
// 		101

// 	200
// 		201
// 		204

// 	300
// 		301
// 		302

// 	400 – ошибка на фронте
// 		401
// 		403
// 		404

// 	500 – ошибка на сервере
// 		502
// 		503

// https://jsonplaceholder.typicode.com/

// REST – архитектура клиент-серверного взаимодействия
// свод правил (рекомендаций), по которым клиент (web app, mobile app) и сервер должны между собой взаимодействовать

// REST говорит, что нужно думать о данных, которые хранятся на сервере как о ресурсе.
// У каждого ресурса на сервере есть свой URL. 

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /posts     body:{name: Alex, age: 21} // – запрос на ресурс posts c телом запроса, id всегда назначает только сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{id: 101, name: Ivan} // в body отправляются все поля объекта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // в body отправляется только то, что изменилось
// <== {id: 101, name: '', age: 21}

// DELETE – /posts/:id
// <== {}

// RESTfull Api – сферический конь в вакууме 😌

const API = "https://jsonplaceholder.typicode.com";

const controller = async (file, method="GET", obj) => {
	
	let options = {
		method: method,
		headers: {
			"Content-type": "application/json"
		}
	}

	if(obj)
		options.body = JSON.stringify(obj);

	console.log(options);
	
	let request = await fetch(file, options);

	if(request.ok){
		return request.json();
	} else{
		throw new Error(request.statusText);
	}
}

(async () => {

	try{
		let posts = await controller(`${API}/posts`);
		console.log(posts);

		let lastPostId = posts[posts.length-1].id;

		let lastPost = await controller(`${API}/posts/${lastPostId}`);
		console.log(lastPost);

		let lastPostComments = await controller(`${API}/posts/${lastPostId}/comments`);
		console.log(lastPostComments);

		let lastPostCommentsSecond = await controller(`${API}/comments?postId=${lastPostId}`);
		console.log(lastPostCommentsSecond);

		let newPost = {
			userId: 10,
			title: "Cat",
			body: "Cat info"
		}

		let newPostAdded = await controller(`${API}/posts`, "POST", newPost);

		// button.innerHTML = 'Loading...';
		// button.style.pointerEvents = true

		console.log(newPostAdded);

		// if(newPostAdded){
		// 	button.innerHTML = 'Added!';
		// 	setTimeout(() => button.innerHTML = 'Add post again!',100);
		// 	button.style.pointerEvents = true;
		// }

		// let jokes = await controller(`https://api.chucknorris.io/jokes/random`, "POST", {});
		// console.log(jokes);


		let changedPostPut = await controller(`${API}/posts/99`, "PUT", {cat: "privetik", id: 10000});
		console.log(changedPostPut);

		let changedPostPatch = await controller(`${API}/posts/99`, "PATCH", {cat: "privetik", id: 10000});
		console.log(changedPostPatch);

		let deletedPost = await controller(`${API}/posts/99`, "DELETE");
		console.log(deletedPost);


	} catch(err){
		console.log(err);
	}


})();
