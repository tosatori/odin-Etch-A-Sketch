const container = document.querySelector("#grid-container");

// Recognize if mouse button is held down
let mouseDown = false;
container.onmousedown = ()=>mouseDown= true;//only care about mousedown on grid
document.onmouseup = ()=>mouseDown = false;

// Initialize drawing area with 32 * 32 elements.
// When mouse is over drawing area and pressed change color to black.
addElements(32);
const item = document.querySelectorAll(".grid-item");
item.forEach((element) => {
    element.addEventListener("mouseover", () => {
        if(mouseDown) {
            element.style.background = "black";
        }
    });
});

// function to add the elements to the drawing area.
function addElements (num) {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        for(let i = 0; i < num * num; i++) {
            let content = document.createElement("div");
            content.classList.add("grid-item");
            container.appendChild(content);
        }
}

// Let user choose the gridsize by pressing button.
function gridSize() {
    let num = prompt("Enter your preferred Gridsize:");
    if(num === "" || num === undefined || num === null) {
        return;
    }
    while(num < 1 || num > 100) {
        num = prompt("Enter a number between 1 and 100!");
    }
    clearGrid();
    addElements(num);
}

// Lets the user clear the drawing area by pressing button.
function clearGrid() {
    const item = document.querySelectorAll(".grid-item");
    item.forEach((element) => {
        element.style.background = "white";
    })
}