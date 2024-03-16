'use strict'

const number = +prompt("Введіть число!")
const pow = +prompt("Введіть ступінь числа!")
const powNumber = function (number, pow = 1) {
    if (isNaN(number) || isNaN(pow)) {
        return 'помилка';
    } else {
        return Math.pow(number, pow);
    }
}
alert(powNumber(number, pow));