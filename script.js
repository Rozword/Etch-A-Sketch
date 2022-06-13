

const grid = document.querySelector('#grid'); 

let cell;

let hcells = 64;
let vcells = 64;
let pencilColor = 'black';
let opa=1;

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
        cell.style.opacity = 0;     
        grid.appendChild(cell);
        cells = document.getElementsByClassName('.cells');
      }
      }      
}

divs(hcells,vcells);  

let rainbow =document.querySelector('#rainbow');
rainbow.addEventListener('click', function(e){
      grid.addEventListener('mouseover', function(e){              
            pencilColor = getRandomColor();
            
            e.target.style.backgroundColor = `${pencilColor}`;
            
      }   

)})

grid.addEventListener('mouseover', function(e){
      
      e.target.style.backgroundColor = `${pencilColor}`;
      let opacity = parseFloat(e.target.style.opacity);
      if (e.target.style.opacity != 1){
           e.target.style.opacity = `${opacity + 0.4}`;
            
            
      }
      
      console.log(opacity);     
})   
  
//let cells = document.querySelectorAll('.cells');
//cells.forEach('mouseover', function(e){
    //  e.target.style.opacity = `${((opacity++) * 10)/100}`;
  //    capture:false
//})


      

let buttonCells = document.querySelector('#buttonCells');
buttonCells.addEventListener('click', function(e){
      for (i=1; i<=hcells; i++){  
            for(let j=1; j<=vcells; j++){  
            grid.innerHTML = "";          
            
      }}
      hcells = document.getElementById('hcells').value;      
      vcells = document.getElementById('vcells').value; 
      
      
       
      divs(hcells,vcells);      
})
      
let buttonColor = document.querySelector('#buttonColor');
buttonColor.addEventListener('click', function(e){
      grid.addEventListener('mouseover', function(e){ 
      pencilColor = document.getElementById('color').value;
      e.target.style.backgroundColor = `${pencilColor}`;      
})})

let buttonBoardColor = document.querySelector('#buttonBoardColor');
buttonBoardColor.addEventListener('click', function(e){
      let boardColor = document.getElementById('boardColor').value;
      grid.style.backgroundColor = `${boardColor}`;
})


let resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', function(e){
      for (i=1; i<=hcells; i++){  
            for(j=1; j<=vcells; j++){  
            grid.innerHTML = "";          
            }
      }
      divs(hcells,vcells); 
})

let randomBoardColor = document.querySelector('#randomBoardColor');
randomBoardColor.addEventListener('click', function(e){
      grid.style.backgroundColor = getRandomColor();
})


function getRandomColor(){
      let letters = '0123456789ABCDEF';
      let color = '#';            
      for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}


/*
let buttonLow = document.querySelector('#buttonLow');
buttonLow.addEventListener('click', function(e){
      grid.addEventListener('mouseover', function(e){      
      e.target.style.backgroundColor = `${pencilColor}`;
      let opacity = parseFloat(e.target.style.opacity);
      if (e.target.style.opacity != 1){
           e.target.style.opacity = `${opacity + 0.2}`;
            
      }   
      })
})

let buttonMid = document.querySelector('#buttonMid');
buttonMid.addEventListener('click', function(e){
      grid.addEventListener('mouseover', function(e){      
      e.target.style.backgroundColor = `${pencilColor}`;
      let opacity = parseFloat(e.target.style.opacity);
      if (e.target.style.opacity != 1){
           e.target.style.opacity = `${opacity + 0.4}`;
            
      }      
      })
})

let buttonMax = document.querySelector('#buttonMax');
buttonMax.addEventListener('click', function(e){
      grid.addEventListener('mouseover', function(e){      
      e.target.style.backgroundColor = `${pencilColor}`;
      let opacity = parseFloat(e.target.style.opacity);
      if (e.target.style.opacity != 1){
           e.target.style.opacity = `${opacity + 1}`;
            
      }      
      })
})


*/
