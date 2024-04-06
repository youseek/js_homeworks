'use strict'

const form = document.querySelector('form')
const button = document.querySelector('button')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const formStatus = document.querySelector('p')
  const formData = new FormData(form)
  if (formData.get('name') === '' || formData.get('email') === '' || formData.get('password') === '') {
    formStatus.textContent = 'Please fill in all fields'
    return
  }
  formStatus.textContent = 'Form submitted successfully!'
})
