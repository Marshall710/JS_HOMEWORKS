'use strict'

const convert = prompt('Input temperature and temperature unit (C or F)');

if (convert.toLowerCase().includes('c')) {
    alert(parseInt(convert, 10) * 9 / 5 + 32)
} else if (convert.toLowerCase().includes('f')) {
    alert((parseInt(convert, 10) - 32) * 5 / 9)
} else {
    alert('Incorrect value')
}