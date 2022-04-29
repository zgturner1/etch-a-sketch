
let mode = 'DRAW';
let currentState = 'drawing';

const gridContainer = document.querySelector(".grid-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const body = document.querySelector('body');

body.addEventListener('keydown', function(e) {
    console.log(e);
    if(e.key == 'd') {
        if(currentState == 'drawing')
            currentState = 'notDrawing'
        else
            currentState = 'drawing';
    }
})

for(let i = 1; i <= 16*16; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', function(e) {
        console.log(e);
        console.log(e);
        if(currentState == 'drawing') {
            if(mode == 'DRAW')
                gridElement.classList.add('drawed');
            else if(mode == 'ERASE')
                gridElement.classList.remove('drawed');
        }
    })

    gridContainer.appendChild(gridElement);
}

drawButton.addEventListener('click', function(e) {
    mode = 'DRAW';
    console.log(mode);
})

eraseButton.addEventListener('click', function(e) {
    mode = 'ERASE';
    console.log(mode);
})
