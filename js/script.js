'use strict';

const arr = [4, 5, 2, 1, 3];
// indexOf
const indexOf = function (arr, searchIndex) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === searchIndex) {
            return i;
        }
    }
    return -1;
};

console.log(indexOf(arr, 1));

//lastIndexOf
const lastIndexOf = function (arr, searchIndex) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === searchIndex) {
            return i;
        }
    }
    return -1;
};

console.log(lastIndexOf(arr, 5));

//find
const find = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
};

console.log(find(arr, function(item, index, arr) {
    return item > 5;
}));

//includes
const includes = function (arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            return true;
        }
    }
    return false;
};

console.log(includes(arr, 1));

//every
const every = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};

console.log(every(arr, function (item, index, arr) {
    return item < 10;
}));

//some
const some = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
};

console.log(some(arr, function (item, index, arr){
    return item > 1;
}));

