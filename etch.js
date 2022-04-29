
const gridContainer = document.querySelector(".grid-container");

for(let i = 1; i <= 16*16; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');

    console.log(gridElement);

    gridContainer.appendChild(gridElement);
}