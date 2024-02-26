'use strict'
const stringsArray = ['apple', 'banana', 'orange', 'kiwi', 'grapefruit', 'watermelon', 'pineapple', 'mango', 'papaya', 'pear']
const filteredArray = stringsArray.filter((str) => str.length > 5)
console.log(filteredArray)

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumOfEvenNumbers = numbersArray.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
console.log(sumOfEvenNumbers)

const average = numbersArray.reduce((acc, cur) => acc + cur, 0) / numbersArray.length
console.log(average)
