'use strict'

const user = {}

// Практичне завдання

Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false
})

Object.defineProperty(user, 'age', {
  value: 30,
  enumerable: false
})

// Розширене завдання

Object.defineProperty(user, 'fullName', {
  get: function () {
    return `${this._name} ${this.surname || ''}`
  },
  set: function (value) {
    const parts = value.split(' ')
    this._name = parts[0]
    this.surname = parts[1] || ''
  }
})

user.fullName = 'John Doe'

console.log(user._name)
console.log(user.surname)

// Додаткове завдання

const frozenObj = {
  fullName: 'Alice'
}

frozenObj.name = 'John'
Object.freeze(frozenObj)

try {
  Object.defineProperty(frozenObj, 'name', { writable: true })
} catch (error) {
  console.log(error.message)
}
