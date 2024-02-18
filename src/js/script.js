'use strict'

const user = {
  name: 'John',
  age: 30,
  gender: 'male'
}

const printName = function (prefix) {
  console.log(prefix + ' ' + this.name)
}

const myApply = function (func, ctx, args) {
  ctx.printName = func
  ctx.printName(...args)
  delete ctx.printName
}

myApply(printName, user, ['Mr.'])
