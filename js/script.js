'use strict'

//Task 1
const arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
document.write(`Сума елементів: ${sum}</br>`);
//Task 2
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
   sum2 += (Math.pow(arr[i], 2));
}
document.write(`Сума квадратів: ${sum2}`)