'use strict'

let i = 10;
//Task 1
for(i; i <= 20; i++) {
    document.write(`${i}`)
    if(i < 20) {
        document.write(', ' )
    }
}

// Task 2
for(i; i <= 20; i++) {
    document.write(`${Math.pow(i, 2)} `)
}

//Task 3
for (let a = 0; a < 10; a++) {
    document.write(a * 7 + ' ');
}

//Task 4
for(let b = 1; b <= 15; b++) {
    document.write(`${b + b} ` + ' ')
}

//Task 5
for(let c = 15; c <= 35; c++) {
    document.write(c * c + ' ')
}

//Task 6 ???????????????????????????
let sumMean = 0;
for (let d = 1; d <= 500; d++) {
    sumMean += d / 500;
}
document.write(`${Math.floor(sumMean)}`);

// Task 7
let sum = 0;
for (let f = 30; f <= 80; f++) {
    if (f % 2 === 0) {
         // document.write(f + ' ')
        sum += f;
    }
}
document.write(`${sum}<br>`);

//Task 8
for (let g = 100; g <= 200; g++) {
    if (g % 3 === 0) {
        // document.write(g / 3 + ' ');
         document.write(`${g}<br>` + ' ');
    }
}

//Task 9 Task 10 Task 11
let intNum = 100;
let counter = 0;
let evenDiv = 0;
    for(let div = 1; div <= intNum; div++) {
        if(intNum % div === 0 && div % 2 === 0) {
            document.write(`Дільник:${div}<br>` + ' ');
            counter++;
            evenDiv += div;
        }
    }
    document.write(`Кількість парних дільників числа ${intNum}: ${counter}<br>`);
    document.write(` Сума парних дільників числа ${intNum}: ${evenDiv}<br>`);

// //Task 12
for (let h = 1; h <= 10; h++) {
    for (let k = 1; k <= 10; k++) {
        document.write(`${h} * ${k} = ${h * k}<br>`);
    }
    document.write("<br>");
}
