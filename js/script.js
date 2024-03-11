'use strict'

//1
const a = 1;
console.log(a === 0 ? 'Вірно' : 'Неправильно');
//2
const a = 1;
console.log(a > 0 ? 'Вірно' : 'Невірно')
//3
const a = 1;
console.log(a < 0 ? 'Вірно' : 'Невірно')
//4
const a = 0;
console.log(a >= 0 ? 'Вірно' : 'Неправильно')
//5
const a = 1;
console.log(a <= 0 ? 'Вірно' : 'Неправильно')
//6
const a = 1;
console.log(a !== 0 ? 'Вірно' : 'Невірно');
//7
const a = 'test';
console.log(a === 'test' ? 'Вірно' : 'Неправильно');
//8
const a = '1';
console.log(typeof a === 'string' ? 'Вірно' : 'Невірно')
//9
const a = 3;
console.log((a > 0 && a < 5) ? 'Вірно' : 'Невірно');
//10
const a = 0;
if(a === 0 || a === 2) {
    console.log(a + 7)
} else {
    console.log(a / 10)
}
//11
const a = 1;
const b = 3;
if(a <= 1 && b >= 3) {
    console.log(a + b)
} else {
    console.log(a - b)
}
//12
const a = 0;
const b = 6;
if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// 13
const num = 3;
let result = '';

switch (num) {
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
    default: alert('Choose the correct number')
}