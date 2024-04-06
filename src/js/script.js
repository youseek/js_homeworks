'use strict'
const createTable = function (rows, cols) {
  const table = document.createElement('table')
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr')
    for (let j = 1; j < cols + 1; j++) {
      const td = document.createElement('td')
      if (i === 0) {
        td.textContent = `${j}`
      } else {
        td.textContent = `${j + i * 10}`
      }
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
  return table
}
const table = createTable(10, 10)
document.body.appendChild(table)
