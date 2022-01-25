// const block = document.querySelector(`.block`);

// const STEP = 50;

// const maxOffsetLeft = (windowWidth=window.innerWidth) => windowWidth - block.offsetWidth;
// let maxOffsetTop = window.innerHeight - block.offsetHeight;

// const EVENTS = {
//   38: () => console.log('in 38'),
//   39: () => {
//     let nextOffsetLeft = block.offsetLeft + STEP;

//     if(nextOffsetLeft>maxOffsetLeft()){
//       block.style.left = `${parseInt(block.style.left) - STEP}px`;

//       block.classList.add(`bems`);
//       setTimeout(()=>block.classList.remove(`bems`), 1000);

//     } else{
//       block.style.left = !block.style.left ? `${STEP}px` : `${parseInt(block.style.left) + STEP}px`;
//     }
//   },
//   40: () => console.log('in 40')
// }

// document.onkeydown = event => {
//   EVENTS[event.keyCode] && EVENTS[event.keyCode]();
// }

// window.onresize = () => {
//   maxOffsetLeft(window.innerWidth);
//   console.log(window.innerWidth);
// }

// const MOBILE = 375;

// block.onclick = () => {
//   if(window.innerWidth <= MOBILE){
//     console.log('mobile func');
//   } else{
//     console.log('desktop func');
//   }
// }

// NEW

// const block = document.querySelector(`.block`);

// const firstFunc = () => console.log(`firstFunc`);
// const secondFunc = () => console.log(`secondFunc`);

// block.addEventListener('click', event=>console.log(event.type));
// block.addEventListener('click', firstFunc);
// block.addEventListener('click', secondFunc);

// const link = document.querySelector(`#link`);

// const pariMatch = e => {
//   e.preventDefault();
//   console.log(`pariMatch`);

//   link.removeEventListener(`click`, pariMatch);

//   link.addEventListener(`click`, e => {
//     e.preventDefault();
//     document.location.href = link.dataset.href;
//   });
// }

// link.addEventListener(`click`, pariMatch)
// link.addEventListener(`mouseenter`, ()=>{})
// link.addEventListener(`mouseenter`, ()=>{})

// const first = document.querySelector(`.first`);
// const second = document.querySelector(`.second`);
// const third = document.querySelector(`.third`);

// first.addEventListener(`click`, ()=>{
//   console.log('first function');
// }, true)

// second.addEventListener(`click`, event=>{
//   console.log('second function');
//   event.stopPropagation();
// })

// third.addEventListener(`click`, event=>{
//   console.log('third function');
// })

// let x = 200;

// f1(){
//   let x = 100;
//   f2();
// }

// function f2(){
//   console.log(x);
// }

// const showBlock = document.querySelector(`#showBlock`);
// const block = document.querySelector(`.block`);

// block.addEventListener('click', e=>e.stopPropagation());

// showBlock.addEventListener(`click`,e=>{
//   block.classList.toggle('show');

//   console.log('in btn func');

//   e.stopPropagation();
// })

// document.addEventListener('click', ()=>{
//   if(block.classList.contains('show')){
//     block.classList.remove('show');
//   }

//   console.log('in document func');
// })

// INPUT

const input = document.querySelector(`input`);
const text = document.querySelector(`#text`);

// input.addEventListener('keypress',e=>{
//   console.log(e);
//   console.log(e.key);
//   console.log(e.target.value);
// })


// input.addEventListener('input',e=>{
//   console.log(e.data);
//   console.log(e.target.value);

//   text.innerHTML = e.target.value;
// })

input.addEventListener('change',e=>{
  console.log(e);
})
