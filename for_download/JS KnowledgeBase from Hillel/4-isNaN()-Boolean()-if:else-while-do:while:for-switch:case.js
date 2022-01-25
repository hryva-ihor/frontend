// name, null, if/else, ternar

// userName = prompt(`Enter name`, `Alla Victoria`);
// userName = !userName ? 'not valid' : userName.trim();
// console.log(userName);

// name = prompt(`Enter name`, `Alla Victoria`);
// name = name==='' || name==='null' ? 'not valid' : name.trim();
// console.log(name);

// yearOfBirth = prompt(`Enter year`);
// age = 0;

// if(!isNaN(yearOfBirth)){
// 	age = new Date().getFullYear()-yearOfBirth;
// }

// document.write(`<li>Age: ${age}</li>`);
// console.log('after');

// userName = prompt('Enter name');

// if(!userName){
// 	userName = prompt('Enter name');
// }

// console.log(userName);

//switch/case


// name = prompt(`Enter name`);

// switch(name){
// 	case 'Dima':
// 	case 'Dmitriy':
// 		console.log(`No, I'm Dima`);
// 		break;
// 	case 'Ivan':
// 		console.log(`No, I'm Ivan`);
// 		break;
// 	case 'Olena':
// 		console.log(`Yes, I'm Olena`);
// 		break;
// 	default:
// 		console.log(`Smth`);
// }


// h1Text = prompt(`Enter text`);
// h1Text = !h1Text ? 'Smth' : h1Text.trim();

// h1Color = prompt(`Enter color`);
// h1Color = !h1Color ? 'red' : h1Color.trim().toLowerCase();

// switch(h1Color){
// 	case 'синий':
// 	case 'блакитний':
// 		h1Text += `, sky!`;
// 		h1Color = `blue`;
// 		break;
// 	case 'зелений':
// 		h1Color = 'green';
// 		break;
// }

// document.write(`<h1 style="color: ${h1Color}">${h1Text}</h1>`);

// confirm

// color = confirm(`Do you want blakutniy?`);
// console.log(color);

// if(color){
// 	console.log('ok');
// }

// prompt/confirm

// while
// do/while
// for

// userName = prompt(`Enter name`);

// while(!userName){
// 	userName = prompt(`Enter name`);
// }

// console.log(userName);

// debugger;

// x = prompt('Enter x>=5 && x<=10 && x !== 7'); //null
// //console.log(x);

// while(x<5 || x>10 || x==7 || x !== null){
// 	alert(`${x} is not valid, please enter another`);
// 	x = prompt('Enter x>=5 && x<=10 && x !== 7');
// 	console.log(x);
// }

// console.log(x);

// do/while

// report = 'Is not valid';
// reportShow = false;

// counter = 4;

// do{
// 	if(reportShow){
// 		alert(report);
// 		counter--;
// 	}

// 	x = prompt('Enter x>=5 && x<=10 && x !== 7');
// 	if(x<5 || x>10 || x==7){
// 		reportShow = true;
// 	}

// } while(x<5 || x>10 || x==7 || counter>=0)

// console.log(x);

// userName = prompt(`Enter name`);

// while(!userName){
// 	userName = prompt(`Enter name`);
// }

// do{
// 	userName = prompt(`Enter name`);
// } while(!userName);

// console.log(userName);

// do{}/while
// while(){}

// x = -10;

// do{
// 	x--;
// } while(x>=0)

// x = 8;

// if(x>=10){
// 	console.log('yes');
// 	console.log('smth');
// }
// else if(x===9)
// 	console.log('another yes');
// 	console.log('9 more');

// y = 10;
// do{
// 	year = parseInt(prompt(`Enter year`));
// } while(isNaN(year));

// console.log(year);

// userName = prompt(`Enter`);

// document.write(`<ul>
// 	${userName ? `<li>Name: ${userName}</li>` : ``}
// </ul>`);

// x = 10;
// x = x+1;
// x+=1;
// x++;
// ++x;

//debugger;

// x = 1;

// for(; x>=1 && x<=10 && x%2>0; x++){
// 	console.log(x); //1
// }

// console.log(`Final: ${x}`)

// x = 10;

// for(x = 10, y = 1; x>0 && y<=10; x--, y++){
// 	console.log(x,y);
// }


