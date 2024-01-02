'use strict';

const operand1 = Number(prompt('Введіть перше число'));
const operand2 = Number(prompt('Введіть друге число'));
const operand3 = Number(prompt('Введіть третє число'));

function getAverage(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;

    if (String(average).length === 1) {
        alert(average);
    } else {
        alert(average.toFixed(2));
    }
}

getAverage(operand1, operand2, operand3);


