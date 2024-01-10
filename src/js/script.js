'use strict';

// 1
let result = '';
for(let i = 10; i <= 20; i++) {
    if (i!== 20) {
        result += i + ', ';
    } else {
        result += i;
    }
}
console.log(result);

// 2
let raisedToPower = '';
for(let i = 10; i <=20; i++) {
    if (i!== 20) {
        raisedToPower += (i**2) + ', ';
    } else {
        raisedToPower += (i**2);
    }
}
console.log(raisedToPower);

// 3
let multiplicationTable = '';
for(let i = 1; i <= 10; i++) {
    if (i!== 10) {
        multiplicationTable += (i*7) + ', ';
    } else {
        multiplicationTable += (i*7);
    }
}
console.log(multiplicationTable);

// 4
let sumPositiveNumbers = 0;
for(let i = 1; i <= 15; i++) {
    sumPositiveNumbers += i;
}
console.log(sumPositiveNumbers);

// 5
let multiplicationPositiveNumbers = 1;
for(let i = 1; i <= 35; i++) {
    multiplicationPositiveNumbers *= i;
}
console.log(multiplicationPositiveNumbers);

// 6
let arithmeticMean = 0;
let sum = 0;
for(let i = 1; i <= 500; i++) {
    sum += i;
}
arithmeticMean = sum / 500;
console.log(arithmeticMean);

// 7
let sumEvenNumbers = 0;
for(let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEvenNumbers += i;
    }
}
console.log(sumEvenNumbers);

// 8
let numbersInRangeDivisibleBy3 = '';
for(let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        numbersInRangeDivisibleBy3 += i + ', ';
    }
}
numbersInRangeDivisibleBy3 = numbersInRangeDivisibleBy3.slice(0, -2);
console.log(numbersInRangeDivisibleBy3);

// 9, 10, 11
const givenNumber = 72;
let divisorsString = "Дільники числа " + givenNumber + ": ";
let countOfEvenDivisors = 0;
let sumOfEvenDivisors = 0;

for (let i = 1; i <= givenNumber; i++) {
    if (givenNumber % i === 0 && i !== givenNumber) {
        divisorsString += i + " ";
        if (i % 2 === 0) {
            countOfEvenDivisors++;
            sumOfEvenDivisors += i;
        }
    }
}
console.log(divisorsString);
console.log("Кількість парних дільників: " + countOfEvenDivisors);
console.log("Сума парних дільників: " + sumOfEvenDivisors);

// 12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log();
}