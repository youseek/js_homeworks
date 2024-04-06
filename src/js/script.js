'use strict'

const notes = document.getElementById('notes')
const button = document.getElementById('save')

const createNote = () => {
  const textInput = document.getElementById('textInput')
  if (textInput.value === '' || textInput.value.trim() === '') {
    alert('Please enter a note')
  }
  const note = document.createElement('p')
  note.innerHTML = textInput.value
  notes.prepend(note)
  textInput.value = ''
}
button.addEventListener('click', createNote)
