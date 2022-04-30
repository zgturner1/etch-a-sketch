
let mode = 'DRAW';
let currentState = 'drawing';
let currentColor = 'rgb(0, 0, 0)';
let currentGridSize;

const gridContainer = document.querySelector(".grid-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const body = document.querySelector('body');
const slider = document.getElementById('slider');

console.log(slider.value);

body.addEventListener('keydown', function(e) {
    const drawingState = document.getElementById('drawing-state')
    if(e.key == 'd') {
        if(currentState == 'drawing') {
            currentState = 'notDrawing';
            drawingState.innerText = 'Drawing: OFF';
        }
        else {
            currentState = 'drawing';
            drawingState.innerText = 'Drawing: ON';
        }
    }
})

for(let i = 1; i <= 16*16; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.style.height = '40px';
    gridElement.style.width = '40px';
    gridElement.addEventListener('mouseover', function(e) {
        if(currentState == 'drawing') {
            if(mode == 'DRAW')
                gridElement.style.backgroundColor = currentColor;
            else if(mode == 'ERASE')
                gridElement.style.backgroundColor = 'rgb(255, 255, 255)';
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

slider.addEventListener('change', function(e) {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(el => gridContainer.removeChild(el));
    let endPoint = slider.value*slider.value;    

    for(let i = 0; i < endPoint; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.style.height = `${640 / slider.value}px`;
        gridElement.style.width = `${640 / slider.value}px`;
        gridElement.addEventListener('mouseover', function(e) {
            if(currentState == 'drawing') {
                if(mode == 'DRAW')
                    gridElement.style.backgroundColor = currentColor;
                else if(mode == 'ERASE')
                    gridElement.style.backgroundColor = 'rgb(255, 255, 255)';
            }
        });
        
        console.log(gridElement);
        gridContainer.appendChild(gridElement);
    }
});

slider.addEventListener('input', function(e) {
    const sizeDisplay = document.querySelector('.size-display');

    sizeDisplay.innerText = `Size: ${slider.value}`;
});
