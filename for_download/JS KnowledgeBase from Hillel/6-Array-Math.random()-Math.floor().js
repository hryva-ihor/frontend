// 5-10.
// 5
// 6
// 7
// 8
// 9
// 10

// for(a=5, b=10; a<=b; a += 1){
//     console.log(a); //6
// }

// arr = [10,20,30,40,50];
//        // 0  1  2  3  4

// for(i=0; i<arr.length; i+=4){
//     //console.log(poryadkovyNomer);
//     console.log(arr[i]); //10, 50.
// }

// 1-10;
// 1,2,3,5,7

// toStart: for(i=1; i<=10; i++){
//     //console.log(i);

//     for(j=2; j<i; j++){
//         //console.log(`   ${j}`);
//         if(i%j === 0){
//             continue toStart;
//         }
//     }

//     console.log(i);
// }

// 5%1 = 0
// 5%2
// 5%3
// 5%4
// 5%5 = 0

// Калькулятор
// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение
// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение
// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение
// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).

// do{
//     znak = prompt(`Enter one of operation +,-,*,/`, `+`); //+
//     znak = znak ? znak.trim() : ``;
// } while(znak !== '+' && znak !== '-' && znak !== '*' && znak !== '/');

// console.log(znak);

// do{
//     countOfOperands = +prompt(`Enter count of operands, >1 and <=7`, 5);
// } while(countOfOperands<=1 || countOfOperands>7);

// console.log(countOfOperands); // 5


// for(i=1; i<=countOfOperands; i++){
//     operand = +prompt(`Enter operand #${i}`);// 10, 20
//     //console.log(operand);

//     if(i==1){
//         result = operand;
//     } else {
//         switch(znak){
//             case '+':
//                 result += operand;
//                 break;
//             case `-`:
//                 result -= operand;
//                 break;
//             case `*`:
//                 result *= operand;
//                 break;
//             case `/`:
//                 result /= operand;
//                 break;
//         }
//     }
// }

// console.log(result);

// a = 10;
// b = 20;

// console.log(result);

// min = -10;
// max = 10;
// Math.floor(Math.random() * (max - min + 1)) + min;

// arrA = new Array(10);

// for(i=0, min=-10, max=10; i<arrA.length; i++){
//     arrA[i] = Math.floor(Math.random() * (max - min + 1)) + min;

//     if(i===0){
//         minValue = maxValue = arrA[i];
//     } else{
//         if(arrA[i]<minValue){
//             minValue = arrA[i];
//         }

//         if(arrA[i]>maxValue){
//             maxValue = arrA[i];
//         }
//     }
// }

// console.log(arrA);
// console.log(`Min value = ${minValue}`);
// console.log(`Max value = ${maxValue}`);


// index

// arrA = new Array(10);

// for(i=0, min=-10, max=10, minIndex=maxIndex=0; i<arrA.length; i++){
//     arrA[i] = Math.floor(Math.random() * (max - min + 1)) + min;

//     if(arrA[i]<=arrA[minIndex]){
//         minIndex = i;
//     }

//     if(arrA[i]>=arrA[maxIndex]){
//         maxIndex = i;
//     }
// }

// console.log(arrA);
// console.log(`Min index = ${minIndex}`); // 6
// console.log(`Max index = ${maxIndex}`); // 1

// arrB = [];

// if(minIndex>maxIndex){
//     startIndex = maxIndex;
//     endIndex = minIndex;
// } else{
//     startIndex = minIndex;
//     endIndex = maxIndex;
// }

// for(i=0, startIndex+=1; startIndex<endIndex; startIndex++, i++){
//     arrB[i] = arrA[startIndex];
// }

// console.log(arrB);

// max, min

// push
// pop
// shift
// unshift
// reverse
// join
// split

// in range

// copy

// spread/rest

// Math.max();
// Math.min()

