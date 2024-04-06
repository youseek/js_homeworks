'use strict'

const body = document.querySelector('body')
const generateList = function (arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null
  }
  const ul = document.createElement('ul')
  arr.forEach(item => {
    const li = document.createElement('li')

    if (Array.isArray(item)) {
      li.appendChild(generateList(item))
    }

    li.textContent = item
    ul.appendChild(li)
  })
  return ul
}

const testArr = [1, 2, [1.1, 1.2, 1.3], 3]

body.appendChild(generateList(testArr))
