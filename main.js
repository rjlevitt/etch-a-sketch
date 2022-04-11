const container = document.querySelector('#container');
const gridInput = document.querySelector('#grid-dropdown');
const colorInput = document.querySelector('#color-select');
let color = "#f99e91"

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


gridInput.addEventListener('change', (event) => {
    const container = document.querySelector('#container');
    removeGrid(container)
    let grid = event.target.value;
    buildGrid(grid)
});


colorInput.addEventListener('input', (event) => {
    color = event.target.value
});


function clearColor() {
    const container = document.querySelector('#container');
    const grid = document.querySelectorAll('.grid');
    grid.forEach((div)=>{
        div.style.background = 'black';
        div.style.borderColor = 'rgb(35,35,35)';
    })
}


function buildGrid(grid){
    container.setAttribute('style',`grid-template-columns: repeat(${grid}, 1fr);`);
    for(let i=1; i<(grid*grid)+1; i++){
        const temp = document.createElement('div'); 
        temp.classList.add('grid');
        temp.addEventListener("mouseenter", function( event ) { 
            console.log(event)
            if(event.buttons){
                event.target.style.background = color;
                event.target.style.borderColor = color;
            }
        });
        container.appendChild(temp);
    }
}

// set default grid
const DEFAULT_GRID = 32
buildGrid(DEFAULT_GRID)