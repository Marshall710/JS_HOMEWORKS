'use strict'

const operation = prompt('Choose math operation (add, sub, mult, div)').toLowerCase();
const operands1 = parseInt(prompt('Input first operand'), 10);
const operands2 = parseInt(prompt('Input second operands'), 10);

let result = '';

if (operation === 'add') {
    result = operands1 + operands2;
    alert(`${operands1} + ${operands2} = ${result}`);
} else if (operation === 'sub') {
    result = operands1 - operands2;
    alert(`${operands1} - ${operands2} = ${result}`)
} else if (operation === 'multi') {
    result = operands1 * operands2;
    alert(`${operands1} * ${operands2} = ${result}`)
} else if (operation === 'div') {
    result = operands1 / operands2;
    alert(`${operands1} / ${operands2} = ${result}`)
} else {
    alert('Incorrect math operations');
}

