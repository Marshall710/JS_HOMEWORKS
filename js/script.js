'use strict'

//Task1
const user = {
    name: 'John',
    surname: 'Smith'
}

user.name = 'Pete'
delete user.name;
console.log(user);

//Task2
//так це працюватиме, тому що user зберігає посиланням на об'єкт і воно не змінилось,
//властивості об'єкта можна змінювати

//Task3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);