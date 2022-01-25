// Array

//trafficLights

// circles = [];
// colors = ['red', 'yellow', 'green', 'purple', 'orange'];

// for(i=0; i<colors.length; i++){

// 	// switch(i){
// 	// 	case 0:
// 	// 		color = 'red';
// 	// 		break;
// 	// 	case 1:
// 	// 		color = 'yellow';
// 	// 		break;
// 	// 	case 2:
// 	// 		color = 'green';
// 	// 		break;
// 	// }

// 	circles[circles.length] = `<span class="circle" style="background: ${colors[i]}"></span>`;
// }

// console.log(circles);

// document.write(`<div class="trafficLights">${ circles.join('') }</div>`);

// cycle

// myArr = [];
// sum = 0;

// for(i=10; i<13; i++){
// 	// myArr[myArr.length] = i;
// 	sum += i;
// }

// console.log(sum);

// animals

// animalsIcons = ['🐶', '🐱', '🐹', '🐰', '🦊', '🐻'];
// animalsNames = ['dog', 'cat', 'mouse', 'rabbit'];

// trs = [];

// arrToWork = animalsIcons.length>animalsNames.length ? animalsNames : animalsIcons;

// for(i=0; i<arrToWork.length; i++){

// 	firstLetter = animalsNames[i][0].toUpperCase();
// 	// name = firstLetter + animalsNames[i].slice(1, animalsNames[i].length)
// 	name = firstLetter + animalsNames[i].slice(1);

// 	trs[trs.length] = `<tr>
// 		<td>${name}</td>
// 		<td>${animalsIcons[i]}</td>
// 	</tr>`;

// 	//animalsNames[i] === 'cat' ? alert('hello') : console.log('hello');
// }

// document.write(`<table border="1">
// 	${trs.join('')}
// </table>`);

// str = 'Hillel';
// newStr = str.slice(-3); // lle
// console.log(newStr);

// product

// vegetables = ['cabbage','avocado','tomato'];
// vegetablesPrice = [8,30,10];

vegetables = [
	['cabbage', 8],
	['avocado', 30],
	['tomato', 10],
];

// vegetablesNames = '';
// for(i=0; i<vegetables.length; i++){
// 	vegetablesNames += vegetables[i][0];
	
// 	if(i !== vegetables.length-1){
// 		vegetablesNames += ', ';
// 	}
// }

// vegetablesNames = [];
// for(i=0; i<vegetables.length; i++){
// 	vegetablesNames[vegetablesNames.length] = vegetables[i][0];
// }

// vegetablesNamesStr = vegetablesNames.join(`, `);
// console.log(vegetablesNamesStr);

// fruits = [
// 	['grapes', 20],
// 	['raspberry', 25],
// 	['coconut', 50],
// ];

// fruitsNames = [];
// for(i=0; i<fruits.length; i++){
// 	fruitsNames[fruitsNames.length] = fruits[i][0];
// }

// fruitsNamesStr = fruitsNames.join(`, `);
// console.log(fruitsNamesStr);

// season = [
// 	['avocado', 30],
// 	['raspberry', 25],
// ];

// koef = 2;

// type = confirm(`Do you want vegetables?`);

// if(type){
// 	do{
// 		product = prompt(`Select ${vegetablesNamesStr}`, vegetablesNames[0]);
// 		product = product ? product.trim().toLowerCase() : ``;

// 	} while(vegetablesNames.indexOf(product)===-1);


// 	for(i=0; i<vegetables.length; i++){
// 		if(vegetables[i][0] === product){
// 			price = vegetables[i][1];
// 			break;
// 		}
// 	}

// } else{
// 	do{
// 		product = prompt(`Select ${fruitsNamesStr}`, fruitsNames[0]);
// 		product = product ? product.trim().toLowerCase() : ``;

// 	} while(fruitsNames.indexOf(product)===-1);

// 	for(i=0; i<fruits.length; i++){
// 		if(fruits[i][0] === product){
// 			price = fruits[i][1];
// 			break;
// 		}
// 	}
// }

// currentMonth = new Date().getMonth();
// winterSeason = currentMonth === 0 || currentMonth === 1 || currentMonth === 11 ? true : false;

// if(winterSeason){
// 	for(i=0; i<season.length; i++){
// 		if(season[i][0] === product){
// 			price *= koef;
// 			break;
// 		}
// 	}
// }

// console.log(`Your product is ${product} and cost $${price}`);

// CHESS BOARD

TRS = [];
alphabet = `abcdefgh`;
figures = [`rook`,`horse`,`bishop`,`queen`,`king`,`bishop`,`horse`,`rook`];

for(trIndex=9; trIndex>=0; trIndex--){

	value = '';

	color = trIndex === 1 || trIndex === 2 ? `black` : `white`;

	TDS = [];
	for(tdIndex=0; tdIndex<=9; tdIndex++){
		
		if(trIndex>0 && trIndex<9){
			if(tdIndex === 0 || tdIndex === 9){
				value = trIndex;
			} else{
				value = ``
			}
		} else{
			if(tdIndex>0 && tdIndex<9){
				value = alphabet[tdIndex-1];
			} else{
				value = '';
			}
		}

		if(trIndex === 2 || trIndex===7){
			if(tdIndex>0 && tdIndex<9){
				value = `<img src="images/chess/${color}/pawn.svg" width="40" height="40">`;
			}
		}

		if(trIndex === 1 || trIndex===8){
			if(tdIndex>0 && tdIndex<9){
				value = `<img src="images/chess/${color}/${figures[tdIndex-1]}.svg" width="40" height="40">`;
			}
		}

		TDS[TDS.length] = `<td>${value}</td>`;
	}

	TRS[TRS.length] = `<tr>${TDS.join('')}</tr>`;
}

console.log(TRS);


document.write(`<table>${TRS.join('')}</table>`);
