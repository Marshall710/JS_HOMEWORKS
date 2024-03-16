'use strict'

let result = '';
const generateKey = function (length, characters) {
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);