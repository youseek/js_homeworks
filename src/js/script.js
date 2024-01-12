'use strict';

let sumOfEvenNumbers = 0;

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) continue;
    sumOfEvenNumbers += i;
}
console.log(sumOfEvenNumbers);