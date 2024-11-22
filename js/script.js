let gridContainer = document.querySelector(".gridContainer");
let grid = 256;

for (let i = 1; i <= grid; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem")
    gridItem.textContent = i;
    gridContainer.appendChild(gridItem)
}


