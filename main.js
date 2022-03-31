
// get container
const container = document.querySelector('#container');

let grid = 16*16
for(let i=1; i<grid+1; i++){
    const temp = document.createElement('div'); 
    
    temp.addEventListener("mouseenter", function( event ) {
        event.target.style.background = "#a6cfea";
    });

    container.appendChild(temp);
}
