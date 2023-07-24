const board = document.querySelector(".board");
const boardContainer = document.querySelector("#containerGrid");
const clearBtn = document.querySelector("#clear");
const resizeBtn = document.querySelector("#resize");

//GAME
function generateGrid(size = 16) {
  const gridContainer = document.querySelector("#containerGrid");

  gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;

  let numGridSqr = size * size;

  for (let i = 0; i < numGridSqr; i += 1) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSqr");

    gridSquare.addEventListener("mouseover", function () {
      if (!draw) return;
      gridSquare.style.backgroundColor = "black";
    });
    gridSquare.addEventListener("mousedown", function () {
      gridSquare.style.backgroundColor = "black";
    });
    gridContainer.appendChild(gridSquare);
  }
}

board.addEventListener("mousedown", function () {
  draw = true;
});
board.addEventListener("mouseup", function () {
  draw = false;
});

//UI
function clearGrid() {
  boardContainer.innerHTML = "";
  generateGrid();
}

clearBtn.addEventListener("click", clearGrid);

function getSize() {
  let input = prompt("Enter size of new grid (size > 100)");
  let message = document.querySelector("#message");
  if (input === "") {
    message.innerHTML = "Please enter the size of the new grid";
  } else if (input < 1 || input > 100) {
    message.innerHTML = "Number must be between 1-100";
  } else message.innerHTML = "New grid created!";
  clearGrid();
  generateGrid((size = input));
}

resizeBtn.addEventListener("click", getSize);

generateGrid();
