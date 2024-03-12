'use strict'

let sumD = 0;
for(let a = 1; a <= 20; a++) {
    if(a % 2 === 0) continue
    document.write(`${a}<br>`)
    sumD += a;
}
document.write(`Сума непарних дільників числа: ${sumD}`)