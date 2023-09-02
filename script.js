const puzzle = document.querySelector('#frame')
const solveBtn = document.querySelector('#solve-btn')
const display = document.querySelector('#message')
const squares = 81 // 9x9 grid
const result = []

for (let i = 0; i < squares; i++){
    const inputElement = document.createElement('input') //creating inputs with (Document.create Element Feature)
    inputElement.setAttribute('type', 'number')
    inputElement.setAttribute('min', '1')
    inputElement.setAttribute('max', '9')
    puzzle.appendChild(inputElement) // added the input boxes to the frame element in HTML
}

function joinVal (){
    const allInputs = document.querySelectorAll('input') // taking all inputs
    allInputs.forEach(input =>{ // for each of the input, if there contains a value we push it into an array if not we use the '.' to signify that there is no value to the api
        if(input.value){
            result.push(input.value)
        } else {
            result.push('.')
        }
    })
    console.log(result)
}

function populateValues(isSolvable, solution ) {
    const inputs = document.querySelectorAll('input')
    if(isSolvable && solution){
        inputs.forEach((input,i) => {
            input.value = solution[i] // allowing the value at a certain index be equal to the correct solution value
    })
    display.innerHTML = 'THE SUDOKU IS SOLVABLE :) !!'
 }
 else{
    display.innerHTML = 'THE SUDOKU IS NOT SOLVABLE :( !!'
 }
}
function solve() {
    joinVal()
    const data = result.join('')
    console.log('data', data)
    const options = {
      method: 'POST',
      url: 'https://solve-sudoku.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '10888ff408mshdfb9a905a473f6bp1e8541jsnc87d96c1c27d',
        'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
      },
      data: {
        puzzle: data
      }
    };
    
    axios.request(options).then(function(response){
        console.log(response.data)
        populateValues(response.data.solvable, response.data.solution)
    }).catch(function(error){
        console.error(error)
    })
}



solveBtn.addEventListener('click',solve)
