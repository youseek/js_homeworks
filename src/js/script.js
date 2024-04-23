'use strict'

class Student {
  constructor (firstName, lastName, birthYear) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.grades = []
    this.attendance = new Array(25).fill(undefined)
  }

  getAge () {
    const currentYear = new Date().getFullYear()
    return currentYear - this.birthYear
  }

  addGrade (grade) {
    this.grades.push(grade)
  }

  present () {
    const index = this.attendance.findIndex(status => status === undefined)
    if (index !== -1) {
      this.attendance[index] = true
    } else {
      console.log('Максимальна кількість записів відвідуваності досягнута.')
    }
  }

  absent () {
    const index = this.attendance.findIndex(status => status === undefined)
    if (index !== -1) {
      this.attendance[index] = false
    } else {
      console.log('Максимальна кількість записів відвідуваності досягнута.')
    }
  }

  summary () {
    const averageGrade = this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length
    const attendanceRate = this.attendance.filter(status => status === true).length / this.attendance.length

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return 'Молодець!'
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return 'Добре, але можна краще'
    } else {
      return 'Редиска!'
    }
  }
}

const student1 = new Student('Володимир', 'Петров', 2000)
const student2 = new Student('Анна', 'Коваленко', 2001)

student1.addGrade(95)
student1.addGrade(85)
student1.present()
student1.present()
student1.present()
student1.absent()

student2.addGrade(75)
student2.addGrade(85)
student2.present()
student2.present()
student2.present()
student2.present()

console.log(student1.summary())
console.log(student2.summary())
