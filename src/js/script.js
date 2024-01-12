'use strict';

// task 1
const startValue = 20;
const endValue = 30;
const step = 0.5;

let numberString = '';

for (let i = startValue; i <= endValue; i += step) {
    numberString += i + ' ';
}
console.log(numberString);

// task 2
const dollar = 38;
let currencyString = '';

for (let i = 10; i <= 100;) {
    currencyString += `${i} USD = ${i * dollar} UAH \n`;
    i += 10;
}
console.log(currencyString);

// task 3
const nNumber = +prompt('Enter n number');
let result = '';

for (let i = 1; i <=100; i++) {
    if (i * i > nNumber) break;
    result += i + ' ';
}
console.log(result);

// task 4
const parseIntNumber = +prompt('Введіть число');
let isPrime = true;

if (parseIntNumber > 1) {
    for (let i = 2; i < parseIntNumber; i++) {
        if (parseIntNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}
if (isPrime) {
    console.log(`${parseIntNumber} є простим числом.`);
} else {
    console.log(`${parseIntNumber} не є простим числом.`);
}

// task 5
const someNumber = +prompt('Введіть число');
let isPowerOfThree = false;

if (someNumber > 0) {
    let result = someNumber;

    while (result !== 1) {
        if (result % 3 !== 0) {
            break;
        }
        result /= 3;
    }
    if (result === 1) {
        isPowerOfThree = true;
    }
}
if (isPowerOfThree) {
    console.log(`${someNumber} є степенем трійки.`);
}
else {
    console.log(`${someNumber} не є степенем трійки.`);
}
