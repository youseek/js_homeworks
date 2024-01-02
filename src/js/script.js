'use strict';

const operator = prompt(`Введіть оператор (+, -, *, /) або (add, sub, mult, div)`);
const firstNumber = Number(prompt(`Введіть перше число`));
const secondNumber = Number(prompt(`Введіть друге число`));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert(`Одне з введених значень не є числом`);
} else if (operator === '+' || operator === 'add') {
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
} else if (operator === '-' || operator === 'sub') {
    alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
} else if (operator === '*' || operator === 'mult') {
    alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
} else if (operator === '/' || operator === 'div') {
    alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
} else {
    alert(`Введіть коректний оператор`);
}