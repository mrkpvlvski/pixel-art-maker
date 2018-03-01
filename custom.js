const width = 800
const height = 600
const cellSize = 20
let color = "white"


let container = document.querySelector("container")


// Draw Blank Table
let cell_template =  document.createElement('div')
cell_template.classList.value = "square"

let row_template = document.createElement('div')
row_template.classList.value = "row"

let table = document.createElement('container')
for (let i = 0; i < height/cellSize; i++){
  let row = row_template.cloneNode(true)
  for (let j=0; j < width/cellSize; j++){
    row.appendChild(cell_template.cloneNode(true))
  }
  table.appendChild(row)
}
document.querySelector('container').innerHTML = table.innerHTML

const tableTemplate = table.cloneNode(true)



let el
function handleEvents(event){
  el = event.toElement
  if (el.className === "square") {
    el.style = "background-color: " + color
    el.colorState += 1
    el.colorState %= 2
  }
}
function colorChange(event){
  el = event.toElement
  if (el.className !== "color-display") {
    console.log(el)
    color = el.className || "grey"
    document.querySelector('.color-display').style = "background-color: " + color
  }
}
document.querySelector('container').addEventListener("click", handleEvents)
document.querySelector('section').addEventListener("click", colorChange)
