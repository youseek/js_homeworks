'use strict';

//task 1
const x = 10;
const y = 7;

console.log(x > y ? 'x більше за y' : 'x не більше,ніж y')

//task 2
const integer = prompt('Введіть ціле число');
console.log(integer.startsWith('-') ? `Довжина числа ${integer.length - 1}` : `Довжина числа ${integer.length}`);
console.log(+integer >=0 ?`Число ${integer} однозначно позитивне` : `Число ${integer} однозначно негативне`);

//task 3
const firstNumber = +prompt('Введіть перше число');
const secondNumber = +prompt('Введіть друге число');
const thirdNumber = +prompt('Введіть третє число');

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(`Найбільше число ${firstNumber}`);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(`Найбільше число ${secondNumber}`);
} else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log(`Найбільше число ${thirdNumber}`);
} else {
    console.log('Введіть коректні дані');
}

//task 4
const firstSide = +prompt('Введіть першу сторону трикутника');
const secondSide = +prompt('Введіть другу сторону трикутника');
const thirdSide = +prompt('Введіть третю сторону трикутника');

if(firstSide + secondSide > thirdSide && firstSide + thirdSide > secondSide && secondSide + thirdSide > firstSide) {
    console.log('Трикутник існує');
} else {
    console.log('Трикутник не існує');
}