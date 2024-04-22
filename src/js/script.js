'use strict'

const customIterator = function (arr) {
  let index = 0

  return {
    next: function () {
      return index < arr.length
        ? { value: arr[index++], done: false }
        : { done: true }
    }
  }
}

const arr = [1, 2, 3, 4, 5]
arr[Symbol.iterator] = function () {
  return customIterator(this)
}

const iterator = arr[Symbol.iterator]()

let result = iterator.next()
while (!result.done) {
  console.log(result.value)
  result = iterator.next()
}
