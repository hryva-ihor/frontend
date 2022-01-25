// DOM

// const h2 = document.querySelector(`section article:nth-child(70) > h2:nth-child(2)`);
// const headers = document.querySelectorAll(`h1`);
// headers.forEach(h1 => console.log(h1));

// const h1 = document.querySelector(`.example`);
// console.dir(h1);

// h1.dataset.sale = true;
// delete h1.dataset.id;

// h1.innerText = 'New <i>data</i>';
// h1.innerHTML += ' New <i>data</i>';
// h1.align = "center";

// console.log(h1.style.color);
// h1.style.background = h1.style.color === 'green' ? 'yellow' : 'red';

// h1.style.color = 'blue';
// h1.style.height = '30px';
// h1.style.width = '30px';
// h1.style.border = '2px solid green';
// h1.style.borderRadius = '50%';


// setTimeout(()=>{
// 	h1.style.color = '';
// 	h1.style.height = '';
// 	h1.style.width = '';
// 	h1.style.border = '';
// 	h1.style.borderRadius = '';
// },1000);

// h1.className += ` active`;
// setTimeout(()=>{
// 	h1.className = h1.className.replace(` active`,``);
// },1000)

// console.log(h1.classList.contains(`active`));
// h1.classList.add(`active`);

// setTimeout(()=>{
// 	h1.classList.remove(`active`);
// },1000)

// setInterval(()=>{
// 	// if(h1.classList.contains('active')){
// 	// 	h1.classList.remove('active');
// 	// } else{
// 	// 	h1.classList.add('active');
// 	// }

// 	h1.classList.toggle('active');
// },1000);

// style

// className
// classList

// setTimeout(()=>h1.id = 'newId', 1000);

// setAttribute/removeAttribute

// console.log( h1.getAttribute(`id`));

// console.log(h1.getAttribute('kotik'));
// h1.setAttribute('sobachka','Timka');
// h1.removeAttribute('id');

// data-attributes

// .remove()

// setTimeout(()=>h1.remove(),1000);
// setTimeout(()=>document.querySelector(`body`).append(h1),2000);
// setTimeout(()=>document.querySelector(`body`).prepend(h1),3000);

// const wrapper = document.querySelector(`.wrapper`);
// wrapper.innerHTML = `<h2>Header 2</h2>` + wrapper.innerHTML;

// const h2 = document.createElement(`h2`);
// h2.innerHTML = 'Header 2';
// h2.className = 'active';
// console.dir(h2);

// wrapper.append(h2);
//wrapper.innerHTML += h2;

// document.createElement()
// .append()

// console.log(h1.textContent);
// console.log(h1.innerHTML);

// h1.innerHTML += ` <i>hello</i>`;

// const liSecond = document.querySelector(`li:nth-child(2)`);
// console.dir(liSecond);

// liSecond.parentNode.style.border = '1px solid pink';

// liSecond.nextElementSibling.style.color = 'orange';
// liSecond.previousElementSibling.style.color = 'red';

// const liSpecial = document.querySelector(`li.special`);
// const liNotSpecial = liSpecial.parentNode.querySelectorAll(`li:not(.special)`);

// liNotSpecial.forEach(li => li.style.color = 'orange');

// var color = window.getComputedStyle(
// 	document.querySelector(`li.special`), ':before'
// ).getPropertyValue('content');

// console.log(color);

const h1 = document.querySelector(`h1`);

// const myHRBefore = document.createElement(`hr`);
// const myHRAfter = document.createElement(`hr`);

// h1.before(myHRBefore);
// h1.after(myHRAfter);

console.log(h1.innerHTML);
h1.outerHTML = `<h2>${h1.innerHTML}</h2>`;
