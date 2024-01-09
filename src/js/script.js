'use strict';

const a = prompt('Введіть значення змінної a:');
const b = prompt('Введіть значення змінної b:');
let result;

// Виконання завдань
const task1 = (a === 0) ? 'Вірно' : 'Неправильно';
const task2 = (a > 0) ? 'Вірно' : 'Неправильно';
const task3 = (a < 0) ? 'Вірно' : 'Неправильно';
const task4 = (a >= 0) ? 'Вірно' : 'Неправильно';
const task5 = (a <= 0) ? 'Вірно' : 'Неправильно';
const task6 = (a !== 0) ? 'Вірно' : 'Неправильно';
const task7 = (a === 'test') ? 'Вірно' : 'Неправильно';
const task8 = (a === 1) ? 'Вірно' : 'Неправильно';
const task9 = (a > 0 && a < 5) ? 'Вірно' : 'Неправильно';
const task10 = (a === 0 || a === 2) ? a + 7 : a / 10;
const task11 = (a <= 1 && b >= 3) ? a + b : a - b;
const task12 = ((a > 2 && a < 11) || (b >= 6 && b < 14)) ? 'Вірно' : 'Неправильно';
const num = prompt('Введіть значення змінної num:');
switch (parseInt(num)) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'Невірне значення для num';
}
// Виведення результатів
console.log(`Завдання 1: ${task1}`);
console.log(`Завдання 2: ${task2}`);
console.log(`Завдання 3: ${task3}`);
console.log(`Завдання 4: ${task4}`);
console.log(`Завдання 5: ${task5}`);
console.log(`Завдання 6: ${task6}`);
console.log(`Завдання 7: ${task7}`);
console.log(`Завдання 8: ${task8}`);
console.log(`Завдання 9: ${task9}`);
console.log(`Завдання 10: ${task10}`);
console.log(`Завдання 11: ${task11}`);
console.log(`Завдання 12: ${task12}`);
console.log(`Завдання 13: ${result}`);