'use strict'

const products = {
  apple: 10,
  banana: 20,
  orange: 15,
  kiwi: 12
}
const decreasePrices = (products) => {
  const updatedPrices = {}
  for (const key in products) {
    updatedPrices[key] = products[key] * 0.9
  }
  return updatedPrices
}
console.log(decreasePrices(products))

const students = [
  { name: 'John', grade: 85 },
  { name: 'Alice', grade: 92 },
  { name: 'Bob', grade: 78 },
  { name: 'Emma', grade: 95 }
]
const topStudents = (students) => students.filter((student) => student.grade > 90)
console.log(topStudents(students))
