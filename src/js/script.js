'use strict'

// Завдання 1
const runCallbacks = (callbacks, value) => {
  return callbacks.reduce((accumulator, currentCallback) => currentCallback(accumulator), value)
}
const addOne = function (x) {
  return x + 1
}
const square = function (x) {
  return x * x
}
const callbacks = [addOne, square, addOne]
const result = runCallbacks(callbacks, 1)
console.log(result)

// Завдання 2
const composeFunctions = function (...funcs) {
  return function (value) {
    return funcs.reduceRight((currentValue, currentFunc) => {
      return currentFunc(currentValue)
    }, value)
  }
}
const addOne2 = function (x) {
  return x + 1
}
const square2 = function (x) {
  return x * x
}
const multiplyByTwo = function (x) {
  return x * 2
}
const composedFunction = composeFunctions(addOne2, square2, multiplyByTwo)
const result2 = composedFunction(2)
console.log(result2)
