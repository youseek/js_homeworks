'use strict';

let sumOfEvenNumbers = 0;

outerLoop: for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        continue outerLoop;
    }
    sumOfEvenNumbers += i;
}
console.log(sumOfEvenNumbers);
