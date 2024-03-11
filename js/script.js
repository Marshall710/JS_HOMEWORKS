'use strict'

const number = prompt('Input number');
let age = '';

if (!isNaN(+number)) {
    if (number % 10 === 1 && number % 100 !== 11) {
        age = 'рік';
    } else if ((number % 10 >= 2 && number % 10 <= 4) && (number % 100 < 10 || number % 100 >= 20)) {
        age = 'роки';
    } else {
        age = 'років';
    }
    alert(`${number} ${age}`);
} else {
    alert('Input only number')
}