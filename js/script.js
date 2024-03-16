'use strict';

const padString = function (string, lengthString, char = '*', left = false) {
    if (typeof string !== 'string' || !Number(lengthString) || typeof char !== 'string' || lengthString < 0) {
        return `помилка: ${string}: має бути рядком, ${lengthString}: має бути числом, ${char} має бути символом`;
    } else if (string.length >= lengthString) {
        return string.substr(0, lengthString);
    } else {
        return left ? string.padStart(lengthString, char) : string.padEnd(lengthString, char);
    }
}

console.log(padString('hello', 8));
console.log(padString('hello', 6, '*', true));
console.log(padString('hello', 2));


