'use strict'

const myReduce = (arr, callback, initialValue) => {
  let accumulator = initialValue === undefined ? 0 : initialValue
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i])
  }
  return accumulator
}

const arr = [1, 2, 3, 4, 5]
const sum = myReduce(arr, (acc, value) => acc + value)
console.log(sum) // 15
