const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function GenerateSketch() {
  let row = document.getElementById('rows').value;
  let col = document.getElementById('col').value;
  row = parseInt(row)
  col = parseInt(col)
  makeRows(row, col) 
  
  let gridBoxList = document.querySelectorAll(".grid-item");
  gridBoxList.forEach(gridBox => {gridBox.addEventListener("touchstart", 
changeColor)});
}



function changeColor(event) {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function Refresh(){
  window.location.reload()
}


