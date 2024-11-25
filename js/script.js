let gridContainer = document.querySelector(".gridContainer");
let gridSize = document.querySelector("#gridSize");
let buttonColor = document.querySelector("#randomColor");
let reset = document.querySelector("#reset");
let grid = 16 * 16;
let randomMode = false;

function createGrid() {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= grid; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.flexBasis = `calc(100% / ${Math.sqrt(grid)})`;
        
        gridItem.addEventListener("mouseover", () => {
            if (randomMode) {
                gridItem.style.backgroundColor = generateRandomColor(); 
            } else {
                gridItem.style.backgroundColor = "#000000"; 
            }
        });
        
        gridContainer.appendChild(gridItem);
    }
}

function gridChange() {
    gridSize.addEventListener("click", () => {
        const newSize = prompt("Enter the number of squares per side (between 1 and 100)");
        if (newSize > 100 || newSize < 1) {
            alert("Please enter a number between 1 and 100");
        } else {
            grid = newSize * newSize;
            createGrid();
        }
    });
}

function randomColor() {
    buttonColor.addEventListener("click", () => {
        randomMode = !randomMode; 
    });
}

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function buttonReset(){
    reset.addEventListener("click", () => {
        createGrid();
    });
}

createGrid();
gridChange();
randomColor();
buttonReset();
