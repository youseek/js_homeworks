'use strict';

const num1 = Number(prompt("Введіть перше число:"));
const num2 = Number(prompt("Введіть друге число:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Будь ласка, введіть числа.");
} else {
    alert(
        `${num1} + ${num2} = ${num1+num2}\n` +
        `${num1} - ${num2} = ${num1-num2}\n` +
        `${num1} * ${num2} = ${num1*num2}\n` +
        `${num1} / ${num2} = ${num1/num2}`
    );
}
