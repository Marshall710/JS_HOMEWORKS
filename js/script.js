'use strict'

const operands1 = parseInt(prompt('Input first operand'), 10);
const operands2 = parseInt(prompt('Input second operands'), 10);

alert(`  
    ${operands1} + ${operands2} = ${operands1 + operands2} 
    ${operands1} - ${operands2} = ${operands1 - operands2} 
    ${operands1} * ${operands2} = ${operands1 * operands2} 
    ${operands1} / ${operands2} = ${operands1 / operands2} 
`);