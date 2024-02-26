'use strict'
const parseJSON = (jsonString) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    return 'Invalid JSON string'
  }
}
console.log(parseJSON('{"name": "John", "age": 30}'))
console.log(parseJSON('{"name": "John", "age":'))
