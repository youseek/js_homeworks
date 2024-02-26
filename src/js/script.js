'use strict'
const sum = (a, b) => a + b
const stringLength = str => str.length
const incrementArray = arr => arr.map(num => num + 1)

console.log(sum(3, 5)) // Виведе: 8
console.log(stringLength('Hello')) // Виведе: 5
console.log(incrementArray([1, 2, 3, 4, 5])) // Виведе: [2, 3, 4, 5, 6]
