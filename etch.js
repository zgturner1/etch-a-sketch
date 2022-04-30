
let mode = 'DRAW';
let currentState = 'drawing';
let currentColor = 'rgb(0, 0, 0)';

const modeDiv = document.getElementById('mode');
const gridContainer = document.querySelector(".grid-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const clearButton = document.getElementById("clear-button");
const rainbowMode = document.getElementById('rainbow-mode');
const colorSelector = document.querySelector('.color-selector');
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
            else if(mode == 'RAINBOW') {
                randNum1 = Math.floor(Math.random() * 255+1);
                randNum2 = Math.floor(Math.random() * 255+1);
                randNum3 = Math.floor(Math.random() * 255+1);
                gridElement.style.backgroundColor = `rgb(${randNum1}, ${randNum2}, ${randNum3})`;
            }
        }
    })

    gridContainer.appendChild(gridElement);
}

drawButton.addEventListener('click', function(e) {
    mode = 'DRAW';
    modeDiv.innerText = 'Current Mode: Draw';
});

eraseButton.addEventListener('click', function(e) {
    mode = 'ERASE';
    modeDiv.innerText = 'Current Mode: Erase';
});

clearButton.addEventListener('click', function(e) {
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(el => el.style.backgroundColor = 'rgb(255, 255, 255)');
});

rainbowMode.addEventListener('click', function(e) {
    mode = 'RAINBOW';
    modeDiv.innerText = 'Current Mode: Rainbow';
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
                else if(mode == 'RAINBOW') {
                    randNum1 = Math.floor(Math.random() * 255+1);
                    randNum2 = Math.floor(Math.random() * 255+1);
                    randNum3 = Math.floor(Math.random() * 255+1);
                    gridElement.style.backgroundColor = `rgb(${randNum1}, ${randNum2}, ${randNum3})`;
                }
            }
        });
        
        gridContainer.appendChild(gridElement);
    }
});

slider.addEventListener('input', function(e) {
    const sizeDisplay = document.querySelector('.size-display');

    sizeDisplay.innerText = `Size: ${slider.value}`;
});

colorSelector.addEventListener('change', function(e) {
    currentColor = this.value;
});
