

const grid = document.querySelector('#grid'); 

let cell;
let cells;
let hcells;
let vcells;
let pencilColor;
let opacity = 0;
//alert("Welcome to digital Etch A Sketch!\nPlease enter the number of cells(pixels) that you'd like in your board and a color pencil.\nAfter that, you can start drawing!");
//alert('Enjoy!');

function divs(a,b){

for (i=1; i<=a; i++){
      
      for(let j=1; j<=b; j++){
      
        cell = document.createElement('div');
        cell.className = 'cells';       
        cell.style.width = `${(780)/a}px`;
        cell.style.height = `${(480)/b}px`;        
        cell.style.display = 'flex';     
        cell.style.flexWrap = 'wrap';                   
        grid.appendChild(cell);
        cells = document.getElementsByClassName('.cells');
      }
      }      
}



grid.addEventListener('mouseover', function(e){  
      mouseDown = true;
      e.target.style.backgroundColor = `${pencilColor}`;       
      })


let buttonCells = document.querySelector('#buttonCells');
buttonCells.addEventListener('click', function(e){
      for (i=1; i<=hcells; i++){  
            for(let j=1; j<=vcells; j++){  
            cell.documentElement.removeChild(grid);           
            
      }}
      hcells = document.getElementById('hcells').value;      
      vcells = document.getElementById('vcells').value; 
      
      
       
      divs(hcells,vcells);      
})
      
let buttonColor = document.querySelector('#buttonColor');
buttonColor.addEventListener('click', function(e){
      pencilColor = document.getElementById('color').value;      
})

let buttonBoardColor = document.querySelector('#buttonBoardColor');
buttonBoardColor.addEventListener('click', function(e){
      let boardColor = document.getElementById('boardColor').value;
      grid.style.backgroundColor = `${boardColor}`;
})