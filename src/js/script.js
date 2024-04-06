'use strict'
const button = document.getElementById('button')
const answers = document.getElementById('answers')
const poll = document.getElementById('poll')

const addOption = function () {
  const option = document.createElement('input')
  const optionLabel = document.createElement('label')
  optionLabel.textContent = 'Варіант відповіді'
  option.type = 'text'
  optionLabel.append(option)
  answers.append(optionLabel)
}
const createdPoll = function () {
  const input = document.getElementById('input')
  if (input.value === '' || answers.children.length < 2) {
    throw new Error('Заповніть всі поля')
  }
  const polls = document.getElementById('polls')
  const pollTitle = document.createElement('h2')
  pollTitle.textContent = input.value

  const pollAnswers = document.createElement('ul')
  for (let i = 0; i < answers.children.length; i++) {
    if (answers.children[i].children[0].value === '') {
      throw new Error('Заповніть всі поля')
    }
    const answer = document.createElement('li')
    answer.textContent = answers.children[i].children[0].value
    pollAnswers.append(answer)
  }
  polls.prepend(pollTitle)
  polls.prepend(pollAnswers)
  input.value = ''
  answers.innerHTML = ''
}
button.addEventListener('click', addOption)
poll.addEventListener('click', function (event) {
  event.preventDefault()
  createdPoll()
})
