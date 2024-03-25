'use strict'

//Task 1
const arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1.slice(0, 2).join('+') + ', ' + arr1.slice(2).join('+'));
//Task 2
const arr = [2,5,3,9];
const result = arr[0] * arr[1] + ', ' + arr[2] * arr[3]
console.log(result);
//Task 3
const arr2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr2[1][0]);
//Task 4
const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
console.log(obj.js[0]);
//Task 5
const arr3 = [];
for (let i = 1; i <= 6; i++) {
    arr3.push('x'.repeat(i));
}
console.log(arr3);
//Task 6
const arr4 = [];
for (let i = 1; i <= 6; i++) {
    arr4.push(String(i).repeat(i));
}
console.log(arr4);
//Task 7
function arrayFill(value, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('x', 5));
//Task 8
const limitedCounter = function (arr) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        counter++;
        if (sum > 10) {
            break;
        }
    }
    return counter;
}
const array = [1,2,5,8,2];
console.log(limitedCounter(array));
//Task 9
const reversArr = function(arr) {
    let reversArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversArr.push(arr[i]);
    }
    return reversArr;
}
const num = [1, 2, 3, 4, 5];
console.log(reversArr(num));
//Task 10
const sumArr = function (arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            totalSum += arr[i][j];
        }
    }
    return totalSum;
}
const array2 =  [[1, 2, 3], [4, 5], [6]];
console.log(sumArr(array2));
//Task 11
const sumNumArr = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
                sum += arr[i][j][k]
            }
        }
    }
    return sum;
}
const array3 =  [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(sumNumArr(array3))
