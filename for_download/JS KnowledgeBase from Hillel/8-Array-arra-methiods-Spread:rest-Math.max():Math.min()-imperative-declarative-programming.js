// TRS = [];
// flowers = ['cherry-blossom','iris','pink-cosmos','sunflower']

// for(tr=0; tr<=9; tr++){

//     TDS = [];
//     for(td=0; td<=9; td++){
//         if(tr === 0 || tr === 9 || td === 0 || td === 9){
//             value = `<img src="images/sprout.png">`;
//         } else if(tr === 1 || tr === 8 || td === 1 || td === 8){
//             randomFlower = flowers[Math.floor(Math.random() * (flowers.length))];
//             value = `<img src="images/flowers/${randomFlower}.png">`;
//         } else if(tr>1 && tr<8 && (tr===td || td===9-tr) ){
//             value = `<img src="images/mushroom.png">`;
//         } else{
//             value = ``;
//         }

//         tdTag = `<td>${value}</td>`;
//         TDS[TDS.length] = tdTag;
//     }

//     trTag = `<tr>${TDS.join(``)}</tr>`;
//     TRS[TRS.length] = trTag;
// }

// document.write(`<table>${TRS.join(``)}</table>`);

// deep copy of array

// arr = [1,2,3];

// arr_2 = arr;

// arr_3 = arr_2;

// arr_3[0] = 100;

// console.log(arr);
// console.log(arr_2);
// console.log(arr_3);

// arr_1 = [10,20,30];
// arr_2 = []; // 1

// for(i=0; i<arr_1.length; i++){
//     arr_2[arr_2.length] = arr_1[i];
// }

// arr_2[0] = 100;

// console.log(arr_1);
// console.log(arr_2);

// arr = [
//     10,
//     [10,20,30],
//     [40,50,60],
// ];

// arr_2 = [];

// // debugger;

// for(i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//         newInnerArray = [];
//         currentArr = arr[i]; // [10,20,30]

//         for(j=0; j<currentArr.length; j++){
//             newInnerArray[newInnerArray.length] = currentArr[j];
//         }

//         arr_2[arr_2.length] = newInnerArray;
//     } else{
//         arr_2[arr_2.length] = arr[i];
//     }
// }

// console.log(arr);
// console.log(arr_2);

// arr_2[0] = 100;
// arr_2[1][0] = 100;

// push

// arr = [10,20,30];
// arr[arr.length] = 40;

// console.log(arr);

// arr.push(50);
// arr.push(50, 60, true, 'hello');

// newElement = [50, 60, true, 'hello'];
// for(i=0; i<newElement.length; i++){
//     arr[arr.length] = newElement[i];
// }

// arr = [10,20,30];
// console.log(arr);

//console.log( arr.push(49,50,'hello') ); 

// arr.unshift(100,'hello');
// console.log( arr.unshift(600) );

// arr = [10,20,30];
// arr.pop();

// console.log( arr.pop() );

// console.log(arr);

// arr.shift();

// console.log(arr);
// console.log(arr.shift());

// push/unshift
// pop/shift

// reverse

// arr = [1,2,3,4,5,6,7];
// console.log(arr);

// arr.reverse();

// concat

// arr_1 = [['cat','dog'],2,3];
// arr_2 = [4,5,6];
// arr_100 = ['new',true]

// arr_3 = arr_1.concat(arr_2, arr_100);

// console.log(arr_3);

// arr_3[0][0] = 'lion';

// console.log(arr_1);

// arr_1 = [[1,2,3]];
// arr_2 = [[4,5,6]];

// arr_3 = arr_1[0].concat(arr_2[0]);

// console.log(arr_3);

// arr_3[0] = 100;

// console.log(arr_1);

// slice

// arr = [10,['cat','dog'],30,40,50,60];

// arr_2 = arr.slice(1,3); // ['cat','dog'],30

// console.log(arr);
// console.log(arr_2);

// arr_2[0][0] = 'LION';

// arr = [1,2,3,4];

// arr_2 = arr.slice(-3);

// console.log(arr_2);


// arr = [
//     10,
//     [1,2,3],
//     [4,5,6],
//     'hello'
// ];

// arr_2 = [];

// for(i=0; i<arr.length; i++){
//     if(Array.isArray(arr[i])){
//         arr_2.push(arr[i].slice());
//     } else{
//         arr_2.push(arr[i]);
//     }
// }

// console.log(arr);
// console.log(arr_2);

// arr_2[2][1] = 500;


// splice

// arr = [10,20,30,40,50,60]; // 6

// arr_2 = arr
//     .slice(1,arr.length-1) // [20,30,40,50]
//     .slice(-2) 
//     // .splice(2,1,'hello')// [20,30,'hello',40,50]

// console.log(arr_2);
// console.log(arr);

// indexOf

// arr = [10,20,30,40,50];
// console.log(arr.indexOf(100));

// join

// arr = [
//     [10,20,30, [10,20,30, [10,20,30]]],
//     [40,50,60]
// ];
// str = arr.join(', ');

// console.log(str);

// split

// str = '10,    20, a    30'.replaceAll(' ','');
// arr = str.split('a')
// console.log(arr);

// spread/rest
// http://jsraccoon.ru/es6-spread-rest


// colors = ['red','green','blue'];
// rainbow = ['black',...colors,'orange','white'];

// // // for(i=0; i<rainbow.length; i++){
// // //     if(i===1){
// // //         for(j=0; j<colors.reverse().length; j++){
// // //             rainbow.splice(i,0,colors[j]);
// // //         }
// // //     }
// // // }


// // console.log(colors);
// console.log(rainbow);

// // colors = ['red','green','blue'];

// arr_2 = '...colors';
// // arr_2 = colors.slice();

// console.log(arr_2);


// Math.max()/Math.min()


arr = [10,100,2,45,6,5];
console.log( Math.max(...[20,45,56,3]) );

// Императивное и декларативное программирование – https://tproger.ru/translations/imperative-declarative-programming-concepts/

// Function