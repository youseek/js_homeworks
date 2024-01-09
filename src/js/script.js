'use strict';

let userInput = prompt('Введіть число:');
let number = parseInt(userInput);

if (isNaN(number) || number < 1) {
    console.log('NaN');
} else {
    let minDivisor = 2;

    while (minDivisor <= Math.sqrt(number)) {
        if (number % minDivisor === 0) {
            console.log(`Найменший дільник числа ${number}: ${minDivisor}`);
            break;
        }
        minDivisor++;
    }

    if (minDivisor > Math.sqrt(number)) {
        console.log(`Число ${number} є простим, немає дільників, крім 1 та самого себе.`);
    }
}

