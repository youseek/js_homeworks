'use strict'

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('todoForm')
  const todoItems = document.getElementById('todoItems')

  let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

  function renderTodos () {
    todoItems.innerHTML = ''

    todos.forEach(function (todo, index) {
      const colDiv = document.createElement('div')
      colDiv.classList.add('col-4')

      const taskWrapper = document.createElement('div')
      taskWrapper.classList.add('taskWrapper')

      const taskHeading = document.createElement('div')
      taskHeading.classList.add('taskHeading')
      taskHeading.textContent = todo.title

      const taskDescription = document.createElement('div')
      taskDescription.classList.add('taskDescription')
      taskDescription.textContent = todo.description

      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete'
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-end')

      deleteButton.addEventListener('click', function () {
        todos.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(todos))
        renderTodos()
      })

      taskWrapper.appendChild(taskHeading)
      taskWrapper.appendChild(taskDescription)
      taskWrapper.appendChild(deleteButton)
      colDiv.appendChild(taskWrapper)
      todoItems.appendChild(colDiv)
    })
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    const titleInput = form.elements.title
    const descriptionInput = form.elements.description

    const title = titleInput.value.trim()
    const description = descriptionInput.value.trim()

    if (title !== '' && description !== '') {
      const todo = {
        title,
        description
      }

      todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(todos))
      renderTodos()
      form.reset()
    }
  })
  renderTodos()

  document.getElementById('clearForm').addEventListener('click', function () {
    form.reset()
  })

  document.getElementById('clearAll').addEventListener('click', function () {
    localStorage.removeItem('todos')
    todos = []
    renderTodos()
  })
})
