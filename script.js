const puzzle = document.querySelector('#frame')
const solveBtn = document.querySelector('#solve-btn')
const squares = 81 // 9x9 grid


for (let i = 0; i < squares; i++){
    const inputElement = document.createElement('input')
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '1')
    inputElement.setAttribute('max', '9')
    puzzle.appendChild(inputElement)
}