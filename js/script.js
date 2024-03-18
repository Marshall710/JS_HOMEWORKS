'use strict'

const positiveArr = function (arr) {
    const newArr = []
    if(arr.length === 0) {
        return 'масив порожній'
    } else if (!Array.isArray(arr)) {
        return 'аргумент має бути масивом!'
    }
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i])
        }
    }
    return (newArr.length > 0) ? newArr : null;
}

const arr = [1, 2, 3, -1, -2, -3];
console.log(positiveArr(arr));