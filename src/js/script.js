'use strict'

const myBind = function (func, ctx, ...args) {
  return function (...bindArgs) {
    return func.apply(ctx, [...args, ...bindArgs])
  }
}

const user = {
  name: 'John',
  age: 30,
  gender: 'male'
}

const printInfo = function (prefix) {
  console.log(prefix + ' ' + this.name + ', age ' + this.age)
}

const boundFunction = myBind(printInfo, user, 'Mr.')
boundFunction()
