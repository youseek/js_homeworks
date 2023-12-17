'use strict';

// task 1
const userInput1 = prompt("Введіть перший рядок:");
const userInput2 = prompt("Введіть другий рядок:");
const userInput3 = prompt("Введіть третій рядок:");

// Конкатенація та виведення результату
const concatenatedString = userInput1 + " " + userInput2 + " " + userInput3;
console.log("Результат конкатенації рядків:", concatenatedString);


// task 2
const fiveDigitNumber = prompt("Введіть п'ятизначне число:");
const digitsArray = fiveDigitNumber.split('').join(' ');
console.log("Розбиття за цифрами:", digitsArray);