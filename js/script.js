'use strict'

// indexOf
const indexOf = function (arr, searchIndex) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === searchIndex) {
            return i;
        }
    }
    return -1;
}
const arr = [4, 5, 2, 1, 3]
// console.log(indexOf(arr, 8));

//lastIndexOf
const lastIndexOf = function (arr, searchIndex) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === searchIndex) {
            return i;
        }
    }
    return -1;
}
// console.log(lastIndexOf(arr, 4));

//find
// const find = function (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return arr[i];
//         }
//     }
//     return undefined;
// }
// find(arr, function(element) {
//     console.log(element > 1)
// });

//includes
const includes = function (arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            return true;
        }
    }
    return false;
}
console.log(includes(arr, 1));

//every
const every = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

console.log(every(arr, function (element, index, array) {

}));

