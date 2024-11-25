let gridContainer = document.querySelector(".gridContainer");
let grid = 16 * 16;

for (let i = 1; i <= grid; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem")
    gridItem.style.flexBasis = "calc(100% / 16)";
    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "black"
    })
    gridContainer.appendChild(gridItem)
}


