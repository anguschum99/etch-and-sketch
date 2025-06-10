const dorp = document.querySelector("#game")
const slider = document.querySelector("#myRange");
const output = document.querySelector("#demo");


function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
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
        cell.style.backgroundColor = randomColor();

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = randomColor();
        });

        dorp.appendChild(cell);
    }
}
