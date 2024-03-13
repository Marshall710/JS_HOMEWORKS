'use strict'

//Task1
const x = 10, y = 7;
console.log(x > y ? 'x більше за y' : 'x не быльший за y');

const intNumber = prompt('Input int number');

//Task3
const isPositiveOrNegative = intNumber >= 0;
const length = isPositiveOrNegative ? intNumber.length : intNumber.length - 1;
const lengthNum = length === 1 ? 'однозначне' : length === 2 ? 'двоцифрове' : 'трицифрове і більше';

alert(`Number: ${intNumber}\, ${lengthNum}\, ${isPositiveOrNegative ? 'однозначне позитивне' : 'однозначне негативне'}`);

//Task4
const firstNum = Number(prompt('Input first number'));
const secondNum = Number(prompt('Input second number'));
const thirdNum = Number(prompt('Input third number'));

if (firstNum > secondNum && firstNum > thirdNum) {
    alert(`${firstNum}`)
} else if (secondNum > firstNum && secondNum > thirdNum) {
    alert(`${secondNum}`)
} else if (thirdNum > firstNum && thirdNum > secondNum) {
    alert(`${thirdNum}`)
} else {
    alert('Incorrect')
}

//Task5
const a = Number(prompt('Input a side'));
const b = Number(prompt('Input b side'));
const c = Number(prompt('Input c side'));

if (a + b > c || b + c > a || a + c > b) {
    alert('Triangle exists')
} else {
    alert('Triangle does not exist');
}

console.log(a + b > c)
console.log(b + c > a)
console.log(a + c > b)