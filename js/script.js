'use strict'

const a = 1;
const b = 3;
let str = 'test';
//1
console.log(a === 0 ? 'Вірно' : 'Неправильно');
//2
console.log(a > 0 ? 'Вірно' : 'Невірно')
//3
console.log(a < 0 ? 'Вірно' : 'Невірно')
//4
console.log(a >= 0 ? 'Вірно' : 'Неправильно')
//5
console.log(a <= 0 ? 'Вірно' : 'Неправильно')
//6
console.log(a !== 0 ? 'Вірно' : 'Невірно');
//7
console.log(str === 'test' ? 'Вірно' : 'Неправильно');
//8
str = '1';
console.log(typeof str === 'string' ? 'Вірно' : 'Невірно')
//9
console.log((a > 0 && a < 5) ? 'Вірно' : 'Невірно');
//10
if(a === 0 || a === 2) {
    console.log(a + 7)
} else {
    console.log(a / 10)
}
//11
if(a <= 1 && b >= 3) {
    console.log(a + b)
} else {
    console.log(a - b)
}
//12
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// 13
let result = '';
switch (b) {
    case 1:
        result = 'Winner';
        break;
    case 2:
        result = 'Spring'
        break;
    case 3:
        result = 'Summer'
        break;
    case 4:
        result = 'Autumn'
        break;
    default: alert('Choose the correct number');
}

console.log(result);