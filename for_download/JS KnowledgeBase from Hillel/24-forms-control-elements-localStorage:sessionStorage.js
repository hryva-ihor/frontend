// const block = document.querySelector(`.block`);

// window.addEventListener(`resize`,()=>{
// 	window.innerWidth<=768 ? block.classList.add(`active`) : block.classList.remove(`active`)
// })

// textarea

// const textarea = document.querySelector(`textarea`);
// console.log(textarea.innerHTML);
// console.log(textarea.value);

// console.dir(textarea);
// textarea.value = 'JS value';

// radio, checkbox

// let size = document.querySelectorAll(`input[name="size"]`);
// console.log(size);

// size.forEach(input => {
// 	input.addEventListener(`change`, ()=>{
// 		console.log(input.value);
// 	})
// });

//setTimeout(()=>alert(document.querySelector(`input[name="size"]:checked`).value),3000);

// const userSizes = [];

// const sizes = document.querySelectorAll(`input[name="size"]`);

// sizes.forEach(input => {
// 	if(input.checked)
// 		userSizes.push(input.value);

// 	input.addEventListener(`change`, ()=>{
// 		if(input.checked){
// 			userSizes.push(input.value)
// 		} else{
// 			let sizeIndex = userSizes.indexOf(input.value);
// 			userSizes.splice(sizeIndex,1);
// 		}

// 		console.log(userSizes);
// 	})
// });

// console.log(userSizes);

// select

// const selectedOptions = [];

// const options = [...document.querySelector(`select`).children];
// console.log(options);

// options.forEach(option => {
// 	option.addEventListener(`click`, ()=>{
// 		if(option.selected){
// 			selectedOptions.push(option.value);
// 		} else{
// 			let indexOption = selectedOptions.indexOf(option.value);
// 			selectedOptions.splice(indexOption,1);
// 		}

// 		console.log(selectedOptions);
// 	})

// 	if(option.selected)
// 		selectedOptions.push(option.value);
// })

// console.log(selectedOptions);

// const foo = event => console.log(Math.round(Math.random()*10), event.target.value);
// const select = document.querySelector(`select`);

// // const doFunc = event => {
// // 	foo(Math.round(Math.random()*10), select.value);
// // }

// select.addEventListener(`change`, foo);
// setTimeout(()=>select.removeEventListener(`change`, foo),2000);

// const blockBG = document.querySelector(`#blockBG`);
// const block = document.querySelector(`.block`);

// blockBG.addEventListener(`input`, ()=>{
// 	block.style.background = blockBG.value;
// });

// const file = document.querySelector(`#file`);

// file.addEventListener(`change`, ()=>{
// 	console.log(file.value);
// 	console.dir(file);
// })

// const form = document.querySelector(`form`);

// form.addEventListener(`submit`,e=>{
// 	e.preventDefault();

// 	alert('Hello');

// 	let name = document.querySelector(`#userName`).value;
// 	let message = document.querySelector(`#userMessage`).value;

// 	console.log(name);
// 	console.log(message);

// 	form.reset();
// });

// const login = document.querySelector(`#login`);
// const register = document.querySelector(`#register`);

// login.addEventListener(`submit`, e=>{
// 	e.preventDefault();

// 	let userEmail = e.target.querySelector(`input[name="userEmail"]`).value;
// })

// register.addEventListener(`submit`, e=>{
// 	e.preventDefault();

// 	let userEmail = e.target.querySelector(`input[name="userEmail"]`).value;
// })

// localStorage, sessionStorage

// const login = document.querySelector(`#login`);

// const users = [];

// login.addEventListener(`submit`, e=>{
// 	e.preventDefault();

// 	let email = e.target.querySelector(`input[name="userEmail"]`).value;
// 	//console.log(email);

// 	users.push(email);
// 	localStorage.setItem('email',users);
// })

// localStorage.setItem(`name`,'Ivan');
// setTimeout(()=>alert(localStorage.getItem(`name`)), 1000);
// setTimeout(()=>localStorage.removeItem(`name`), 2000);

// const user = {
// 	name: 'Anton',
// 	age: 13
// }

// let userJSON = JSON.stringify(user);
// console.log(userJSON);

// localStorage.setItem('user', userJSON);

// console.log( JSON.parse(localStorage.getItem('user')) );

// const age = 13;
// localStorage.setItem(`age`, age);
// console.log( JSON.parse( localStorage.getItem(`age`) ) );

// const isFree = 'true';
// localStorage.setItem(`isFree`, JSON.stringify(isFree));
// console.log( localStorage.getItem(`isFree`) );

// const animals = ['cat','dog'];
// localStorage.setItem('animals', JSON.stringify(animals));
// console.log( JSON.parse( localStorage.getItem(`animals`) ) );

// document.addEventListener('mouseout', e => {
// 	if (!e.toElement && !e.relatedTarget) {
// 		console.log(e.type);
// 	}
// });


// calendar