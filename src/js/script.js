'use strict'

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = new FormData(this)
  const data = {}
  formData.forEach(function (value, key) {
    data[key] = value
  })
  localStorage.setItem('formData', JSON.stringify(data))
  this.reset()
  window.location.href = 'data.html'
})
