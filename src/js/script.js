'use strict'

const Student = function (firstName, lastName, birthYear) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthYear = birthYear
  this.grades = []
  this.attendance = Array(25).fill(undefined)
  this.presentCount = 0

  this.getAge = function () {
    const currentYear = new Date().getFullYear()
    return currentYear - this.birthYear
  }

  this.addGrade = function (grade) {
    this.grades.push(grade)
  }

  this.present = function () {
    if (this.presentCount < 25) {
      this.attendance[this.presentCount++] = true
    } else {
      console.log('Масив відвідуваності повністю заповнений.')
    }
  }

  this.absent = function () {
    if (this.presentCount < 25) {
      this.attendance[this.presentCount++] = false
    } else {
      console.log('Масив відвідуваності повністю заповнений.')
    }
  }

  this.calculateAverage = function (arr) {
    const sum = arr.reduce((total, grade) => total + grade, 0)
    return sum / arr.length
  }

  this.summary = function () {
    const averageGrade = this.calculateAverage(this.grades)
    const attendanceRate = this.attendance.filter(value => value === true).length / this.attendance.length

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return 'Молодець!'
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return 'Добре, але можна краще '
    } else {
      return 'Редиска!'
    }
  }
}

const student1 = new Student('Іван', 'Іванов', 1998)
const student2 = new Student('Петро', 'Петров', 1997)

student1.addGrade(95)
student1.addGrade(85)
student1.addGrade(90)

student2.addGrade(80)
student2.addGrade(88)
student2.addGrade(92)

student1.present()
student1.absent()

console.log(student1.summary()) // Редиска!
console.log(student2.summary()) // Добре, але можна краще
