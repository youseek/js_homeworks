'use strict'

// task 1
const getFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * getFactorial(n - 1)
  }
}
console.log(getFactorial(3))

// task 2

const pow = function (num, degree) {
  if (degree === 0) {
    return 1
  } else {
    return num * pow(num, degree - 1)
  }
}
console.log(pow(2, 3))

// task 3

const sumWithoutPlus = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return sumWithoutPlus(a + 1, b - 1)
  }
}
console.log(sumWithoutPlus(5, 3))
