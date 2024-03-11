'use strict'

const date = Number(prompt('Year of birth?'));
const city = prompt('Where do you live?');
const sport = prompt('What is your favorite sport: Football, Boxing or Formula 1?');

let alertResult = '';

if (date) {
    alertResult += `${2024 - date}\n`;
} else {
    alertResult += 'It is a pity that you did not want to enter your year of birth\n';
}

if (city === "Kyiv") {
    alertResult += "You live in the capital of Ukraine!\n";
} else if (city === "Washington") {
    alertResult += "You live in the capital of USA!\n";
} else if (city === "London") {
    alertResult += "You live in the capital of UK!\n";
} else if (city !== null) {
    alertResult += `You live in the city of ${city}!\n`;
} else {
    alertResult += 'It is a pity that you did not want to enter your city\n'
}

if (sport === 'Football') {
    alertResult += "Cool! Do you want to become like Lionel Messi?";
} else if (sport === "Boxing") {
    alertResult += "Cool! Do you want to become like Usyk Oleksandr?";
} else if (sport === "Formula 1") {
    alertResult += "Cool! Do you want to become like Max Verstappen?";
} else {
    alertResult += "It's a pity that you didn't want to enter your sport\n";
}

alert(alertResult);