

const grid = document.querySelector('#grid'); 

let cell;
let hcells;
let vcells;
let pencilColor;

alert("Welcome to digital Etch A Sketch!\nPlease enter the number of cells(pixels) that you'd like in your board and a color pencil.\nAfter that, you can start drawing!");
alert('Enjoy!');

function divs(a,b){

for (i=1; i<=a; i++){
      
      for(let j=1; j<=b; j++){
      
        cell = document.createElement('div');
        cell.className = 'cells';       
        cell.style.width = `${680/a}px`;
        cell.style.height = `${490/b}px`;
        cell.style.minHeight = '0';
        cell.style.minWidth = '0';
        cell.style.display = 'flex';     
        cell.style.flexWrap = 'wrap';
        cell.style.backgroundColor = 'lightgrey';   
        cell.style.flexShrink = '1';
         
        grid.appendChild(cell);
      }
      }      
}
grid.addEventListener('mouseover', function(e){  
      mouseDown = true;
      e.target.style.backgroundColor = `${pencilColor}`;   
      })


let buttonCells = document.querySelector('#buttonCells');
buttonCells.addEventListener('click', function(e){
      hcells = document.getElementById('hcells').value;      
      vcells = document.getElementById('vcells').value;      
      divs(hcells,vcells);      
})
      
let buttonColor = document.querySelector('#buttonColor');
buttonColor.addEventListener('click', function(e){
      pencilColor = document.getElementById('color').value;      
})