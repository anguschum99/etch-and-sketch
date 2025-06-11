const dorp = document.querySelector("#game")
const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");
const eraseButton = document.querySelector("#erase");
const rainbowButton = document.querySelector("#rainbow");
const colorPicker = document.querySelector("#colorPicker");
const colour = document.querySelector("#colour");
const clear = document.querySelector("#clear");

const DEFAULT_MODE = 'color';
let currentMode = DEFAULT_MODE;

rainbowButton.addEventListener("click", () => {
    currentMode = 'rainbow';
    changeColor();
});

colour.addEventListener("click", () => {
    currentMode = 'color';
    changeColor();
});

eraseButton.addEventListener("click", () => {
    currentMode = 'erase';
    changeColor();
}
);

clear.addEventListener("click", () => {
    const cells = document.querySelectorAll(".hori");
    cells.forEach(cell => {
        cell.style.backgroundColor = erase();
    });
});


function colorMode() {
    if (currentMode === 'rainbow') {
        return randomColor();
    }
    if (currentMode === 'color') {
        return colorPicker.value;
    }
    if (currentMode === 'erase') {
        return `rgb(255, 255, 255)`;
    }
}

function redMode() {
    return `rgb(255, 0, 0)`;
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function erase(){
    return `rgb(255, 255, 255)`;
}


output.textContent = slider.value
createBlocks(slider.value)



slider.addEventListener("input", () =>{

    output.textContent = slider.value;
    
    createBlocks(slider.value);
})

function createBlocks(value) {
    dorp.innerHTML = ""; // Clear existing blocks

    const containerSize = 960;
    const blockSize = containerSize / value;

    for (let i = 0; i < value * value; i++) {
        const cell = document.createElement("div");
        cell.classList.add("hori");
        cell.style.width = `${blockSize}px`;
        cell.style.height = `${blockSize}px`;
        cell.style.backgroundColor = erase(); // Default color

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = colorMode();
        });

        dorp.appendChild(cell);
    }
}
