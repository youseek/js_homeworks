'use strict'

const customFlat = function (arr) {
  if (arguments.length > 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided')
  }

  const isMultiDimensional = arr.some(item => Array.isArray(item))
  if (!isMultiDimensional) {
    return arr.slice()
  }
  const flatten = function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result = result.concat(flatten(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  }
  return flatten(arr)
}
const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13]
]
console.log(customFlat(complexArray)) // Результат: [1, 2, 3.1, 3.2, 3.21, 3.22, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
