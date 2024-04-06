'use strict'
const checkNumber = function () {
  const number = document.getElementById('numberInput').value
  if (number % 2 === 0) {
    alert('Парне число')
  } else {
    alert('Непарне число')
  }
}
