const grid = document.querySelector('#grid');




   


let cell;


function divs(a,b){

for (i=1; i<=a; i++){
      for(let j=1; j<=b; j++){
        cell = document.createElement('div');
        cell.className = 'cells';
       
        cell.style.width = `${(550-(a*a))/a}px`;
        cell.style.height = `${(350-(b*b))/b}px`;
        cell.style.border = '1px dotted black';
        cell.style.display = 'flex';
        
        cell.style.flexWrap = 'wrap';
        cell.style.backgroundColor = 'white';
        grid.style.width = `${550}px`;
        grid.style.height = `${350}px`;
        grid.style.border = '8px solid black';
        grid.style.borderRadius= '15px'
        grid.style.flexWrap = 'wrap'
        

        grid.appendChild(cell);
      }
      }
      
}

divs(64,64);

const cells = document.querySelectorAll('.cells');
console.log(cells);
grid.addEventListener('mouseover', function(e){  
      mouseDown = true;
      e.target.style.backgroundColor = 'red'
      

      })
      



