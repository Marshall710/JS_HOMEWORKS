'use strict'

const number = +prompt("Введіть число!")
const pow = +prompt("Введіть ступінь числа!")
const powNumber = function (number, pow = 1) {
   return (isNaN(null) || isNaN(pow)) ? 'помилка' : Math.pow(number, pow);
}
alert(powNumber(number, pow));