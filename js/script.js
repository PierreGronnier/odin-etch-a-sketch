let gridContainer = document.querySelector(".gridContainer");
let gridSize = document.querySelector("#gridSize")
let grid = 16 * 16;

function createGrid(){
    gridContainer.innerHTML = "";
    for (let i = 1; i <= grid; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem")
        gridItem.style.flexBasis = `calc(100% / ${Math.sqrt(grid)})`;
        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "black"
        })
        gridContainer.appendChild(gridItem)
    }
}

function gridChange(){
    gridSize.addEventListener("click", () => {
        const newSize = prompt("Enter the number of squares per side (between 1 and 100)")
        if (newSize > 100 || newSize < 1){
            alert("Please enter a number between 1 and 100")
        }
        else {
            grid = newSize * newSize
            createGrid()
        }
    })
}

createGrid();
gridChange();