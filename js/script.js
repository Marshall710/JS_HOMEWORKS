'use strict'

const arr = [1, 2, 3, -1, -2, -3];
const positiveArr = function (arr) {
    const newArr = []
    if(arr.length === 0) {
        return 'array is empty!'
    }

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i])
        } else {
            console.log('всі інші негативні:', arr[i]);
        }
    }

    return (newArr.length > 0) ? newArr : null;
}
console.log(positiveArr(arr));