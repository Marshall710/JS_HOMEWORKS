'use strict'

let intNumber = +prompt('Input number');
if (isNaN(intNumber) || intNumber < 1) {
    console.log('NaN');
} else {
    let minDivider = 2;
        while (intNumber % minDivider !== 0) {
            minDivider++;
    }
    document.write(`${minDivider}`);
}
