const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#colorDisplay");
const messageDisplay = document.querySelector("#message");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const resetBtn = document.querySelector("#reset");
const header = document.querySelector("h1");

let numOfSquares = 6;
let colorsArray = generateRanColorsArray(numOfSquares);
let pickedColor = pickColorIndex();

colorDisplay.innerHTML = pickedColor;

//Assigning the colors array to the sqaure divs
for (i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colorsArray[i];
  squares[i].addEventListener("click", squareClicking);
}

// Arrow functions dont function properly with this keyword

easyBtn.addEventListener("click", function () {
  // find out why i cannot use 'this' here
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colorsArray = generateRanColorsArray(numOfSquares);
  pickedColor = pickColorIndex();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    if (colorsArray[i]) {
      squares[i].style.backgroundColor = colorsArray[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  this.classList.add("selected");
  numOfSquares = 6;
  colorsArray = generateRanColorsArray(numOfSquares);
  pickedColor = pickColorIndex();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colorsArray[i];
    squares[i].style.display = "block";
  }
});

resetBtn.addEventListener("click", function () {
  //   console.log(this);
  //Reseting everything
  colorsArray = generateRanColorsArray(numOfSquares);
  pickedColor = pickColorIndex();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < colorsArray.length; i++) {
    squares[i].style.backgroundColor = colorsArray[i];
  }

  header.style.backgroundColor = "steelblue";
  this.textContent = "New Colors";
  this.style.color = "steelblue";
  this.style.backgroundColor = "#fff";
  messageDisplay.style.color = "black";
  messageDisplay.textContent = "";
});

function squareClicking() {
  // 'this' stands for parent element squares[i]
  let clickedColor = this.style.backgroundColor;
  if (clickedColor === pickedColor) {
    messageDisplay.textContent = "Correct!!!";
    messageDisplay.style.color = pickedColor;
    changeColor(pickedColor);
    header.style.backgroundColor = pickedColor;
    resetBtn.style.backgroundColor = pickedColor;
    resetBtn.style.color = "#fff";
    resetBtn.textContent = "Play Again?";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Try again...";
    messageDisplay.style.color = clickedColor;
  }
}

function changeColor(replacementColor) {
  for (i = 0; i < colorsArray.length; i++) {
    squares[i].style.backgroundColor = replacementColor;
  }
}

function pickColorIndex() {
  let randomKey = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[randomKey];
}

function generateRanColorsArray(num) {
  const array = [];
  for (i = 0; i < num; i++) {
    array.push(createRanColor());
  }
  return array;
}

function createRanColor() {
  const R = Math.ceil(Math.random() * 255);
  const G = Math.ceil(Math.random() * 255);
  const B = Math.ceil(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}
