console.log('start');

let xhr = new XMLHttpRequest();
xhr.open("GET", "user.json");
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === 4 && xhr.status === 200){
		console.log(xhr);
		console.log(JSON.parse(xhr.response));
	}
})

console.log('end');

console.log(2);

console.log(3);