// mouse events
// onmouseenter/onmouseleave
// 	onmouseover/onmouseout
// 	onmousemove

// const block = document.querySelector(`.block`);

// const mouseEnterFunc = event => {
// 	console.log(event.type);
// 	console.dir(event.target);

// 	event.target.classList.toggle(`active`);
// };

// function handler(e){
// 	console.log(e);

// 	console.log(e.type);
// 	// console.dir(e.target);

// 	// e.target.classList.toggle(`active`);
// };

// block.onmouseenter = handler;
// block.onmouseover = handler;

// block.onmouseleave = handler;
// block.onmouseout = handler;

// block.onmousemove = handler;

// block.onmousedown = handler;
// block.onmouseup = handler;

// mouse events
// 	onmousedown
// 	onmouseup

// Drag & drop

// const block = document.querySelector(`.block`);

// let blockActivated = false;

// let x,y;

// block.onmousedown = e => {
// 	console.dir(e);

// 	x = e.clientX;
// 	y = e.clientY;

// 	console.log(x,y, e.type);

// 	blockActivated = true;
// }

// block.onmousemove = e => {
// 	if(blockActivated){
// 		console.dir(e);

// 		x_ = e.clientX;
// 		y_ = e.clientY;

// 		console.log(x_,y_, e.type);

// 		diff_x = x_ - x;
// 		diff_y = y_ - y;

// 		console.log(`Left: ${diff_x}. Top: ${diff_y}`);

// 		block.style.left = block.style.left === '' ? `${diff_x}px` : `${parseInt(block.style.left) + diff_x}px`;
// 		block.style.top = block.style.top === '' ? `${diff_y}px` : `${parseInt(block.style.top) + diff_y}px`;

// 		x = x_;
// 		y = y_;
// 	}
// }

// document.onmouseup = e => {
// 	if(blockActivated){
// 		console.dir(e);

// 		x_ = e.clientX;
// 		y_ = e.clientY;

// 		console.log(x_,y_, e.type);

// 		diff_x = x_ - x;
// 		diff_y = y_ - y;

// 		console.log(`Left: ${diff_x}. Top: ${diff_y}`);

// 		block.style.left = block.style.left === '' ? `${diff_x}px` : `${parseInt(block.style.left) + diff_x}px`;
// 		block.style.top = block.style.top === '' ? `${diff_y}px` : `${parseInt(block.style.top) + diff_y}px`;
// 		blockActivated = false;
// 	}
// }

// const block = document.querySelector(`.block`);

// const handler = e => {
// 	console.log(e.type);
// }

// block.onmousedown = handler;
// block.onmouseup = handler;
// block.onclick = handler;

// block.ondblclick = handler;
// block.oncontextmenu = handler;

const link = document.querySelector(`#link`);

// link.onclick = e => {
// 	e.preventDefault();

// 	console.log('click');

// 	// setTimeout(()=> document.location.href = link.href ,1000);
// 	setTimeout(()=> window.open(link.href, '_blank') ,1000);
// }

// let clicked = false;

// link.onclick = e => {
// 	e.preventDefault();

// 	if(!clicked){
// 		window.open('https://www.guestreservations.com/hilton-kyiv/booking', '_blank');
// 		clicked = true;
// 	} else{
// 		document.location.href = link.href;
// 	}

// }

// console.log(link.dataset);

// link.onclick = e => {
// 	e.preventDefault();
// 	document.location.href = link.dataset.href;
// }


// click events
// 	onclick
// 	ondblclick
// 	oncontextmenu

// preventDefault()

// const handler = e => {
// 	console.log(e.type);

// 	console.log(e);
// }

// document.onkeypress = handler;
// document.onkeydown = handler;
// document.onkeyup = handler;

// keyboard events
// 	onkeypress
// 	onkeydown
// 	onkeyup
