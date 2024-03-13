'use strict'


//Task 1
for(let i = 10; i <= 20; i++) {
    document.write(`${i}`)
    if(i < 20) {
        document.write(', ' )
    }
}

// Task 2
for(let i = 10; i <= 20; i++) {
    document.write(`${Math.pow(i, 2)} `)
}

//Task 3
for (let i = 0; i < 10; i++) {
    document.write(i * 7 + ' ');
}

//Task 4
for(let i = 1; i <= 15; i++) {
    document.write(`${i + i} ` + ' ')
}

//Task 5
for(let i = 15; i <= 35; i++) {
    document.write(i * i + ' ')
}

//Task 6
let sumMean = 0;
for (let i = 1; i <= 500; i++) {
    sumMean += i ;
}
document.write(`${(sumMean) / 500}`);

// Task 7
let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
         // document.write(f + ' ')
        sum += i;
    }
}
document.write(`${sum}<br>`);

//Task 8
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        // document.write(g / 3 + ' ');
         document.write(`${i}<br>` + ' ');
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

//Task 12
for (let h = 1; h <= 10; h++) {
    for (let k = 1; k <= 10; k++) {
        document.write(`${h} * ${k} = ${h * k}<br>`);
    }
    document.write("<br>");
}
