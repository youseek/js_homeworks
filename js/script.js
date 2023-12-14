'use strict';

const operand1 = Number(prompt('Введіть перше число'));
const operand2 = Number(prompt('Введіть друге число'));

//Складання
const sum = operand1 + operand2;
console.log(`Результат: ${operand1} + ${operand2} = ${sum}`);
//Віднімання
const difference = operand1 - operand2;
console.log(`Результат: ${operand1} - ${operand2} = ${difference}`);
//Множення
const multiplication = operand1 * operand2;
console.log(`Результат: ${operand1} * ${operand2} = ${multiplication}`);
//Ділення
const division = operand1 / operand2;
console.log(`Результат: ${operand1} / ${operand2} = ${division}`);