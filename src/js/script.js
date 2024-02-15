'use strict'

const IndexOf = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
  }
  return -1
}
const arr = [1, 2, 3, 4, 5]
console.log(IndexOf(arr, 3)) // 2
console.log(IndexOf(arr, 6)) // -1

const lastIndexOf = function (arr, item) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === item) {
      return i
    }
  }
  return -1
}
const arr2 = [1, 2, 3, 4, 5, 6]
console.log(lastIndexOf(arr2, 6)) // 5
console.log(lastIndexOf(arr2, 1)) // 0

const find = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}
const arr3 = [1, 2, 3, 4, 5, 6]
console.log(find(arr3, (item) => item > 3)) // 4
console.log(find(arr3, (item) => item > 6)) // undefined

const findIndex = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i
    }
  }
  return -1
}
const arr4 = ['apple', 'banana', 'cherry', 'date']
console.log(findIndex(arr4, (item) => item === 'banana')) // 1
console.log(findIndex(arr4, (item) => item === 'grape')) // -1

const includes = function (arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}
const arr5 = ['blue', 'red', 'green', 'yellow']
console.log(includes(arr5, 'green')) // true
console.log(includes(arr5, 'black')) // false

const every = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false
    }
  }
  return true
}
const arr6 = ['lion', 'tiger', 'leopard', 'cheetah']
console.log(every(arr6, (item) => item.length > 3)) // true
console.log(every(arr6, (item) => item.length > 5)) // false

const some = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true
    }
  }
  return false
}
const arr7 = ['sun', 'moon', 'star', 'planet']
console.log(some(arr7, (item) => item === 'star')) // true
console.log(some(arr7, (item) => item === 'comet')) // false
