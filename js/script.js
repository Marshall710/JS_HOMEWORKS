'use strict'

// Task 1
const arr1= [1,2,3];
const arr2 = [4,5,6];
arr2.unshift(...arr1);
console.log(arr2);
// Task 2
console.log(arr1.reverse());
// Task 3
const arr4 = [1,2,3];
console.log(arr1.push(...[4,5,6]))
// Task 4
console.log(arr1.unshift(...[4,5,6]))
// Task 5
const arrStr = ['js','css', 'jq'];
document.write(arrStr[0]);
// Task 6
document.write(arrStr[2]);
// Task 7
const arr3 = [1,2,3,4,5];
console.log(arr3.slice(0, 3));
// Task 8
console.log(arr3.slice(-2));
// Task 9
console.log(arr3.splice(1, 2));
// Task 10
const newArr = arr3.slice(1, 4);
console.log(newArr);
// Task 11
arr3.splice(3, 0, 'a', 'b', 'c');
console.log(arr3);
// Task 12
arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.push('e');
console.log(arr3);
// Task 13
const arr5 = [3, 4, 1, 2, 7];
arr5.sort();
console.log(arr5);
// Task 14
const arr6 = [5, 6, 7, 8, 9];
const sum = arr6.reduce((sum, current) => sum + current, 0);
console.log(sum);
// Task 15
const sqr = arr6.map(num => num * num);
console.log(sqr);
// Task 16
const arr7 = [1, -3, 5, 6, -7, 8, 9, -11];
console.log(arr7.filter(num => num < 0));
// Task 17
console.log(arr7.filter(num => num % 2 === 0));
// Task 18
const arr8 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
console.log(arr8.filter(str => str.length > 5));
// Task 19
const arr9 = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr9.filter(item => Array.isArray(item)));
// Task 20
const arr10 = [5, -3, 6, -5, 0, -7, 8, 9];
console.log(arr10.filter(num => num < 0).length);