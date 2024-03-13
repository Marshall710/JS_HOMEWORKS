'use strict'

//Task 1
for (let a = 20; a <= 30; a += 0.5) {
    document.write(`${a}<br>`)
}

//Task 2
for (let d = 10; d <= 100; d += 10) {
    document.write(`${d * 27}<br>`);
}

//Task 3
let num = 81;
for(let b = 1; b <= 100; b++) {
    // document.write(`${(Math.pow(b,2))}<br>s`)
    if(Math.pow(b,2) < num) {
        document.write(`${b}<br>`)
    }
}

//Task 4
let isNatural = true;
if (num <= 1) {
    isNatural = false;
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isNatural = false;
            break;
        }
    }
}
document.write(isNatural ? 'Просте' : 'Непросте');

//Task 5
while (num % 3 === 0) {
    num /= 3;
}
document.write((num === 1)? "Можна отримати" : "Не можна отримати число");
