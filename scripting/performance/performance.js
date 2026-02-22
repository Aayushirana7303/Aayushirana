

// Code  1

const t1 = performance.now()
for(let i = 1; i <= 50; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();

console.log("Total time by Code 1: " + (t2-t1));


//  Code 2   --->>

const t3 = performance.now();
let mydiv =document.createElement('div');

for(i = 1; i < 7; i++)
{
    let para = document.createElement('p');
    para.textContent = "this is my page" + i;
    mydiv.appendChild(para);
}

document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time taken by Code 2: " + (t4-t3));



/* reflow and repaint ---->>

Reflow -->>  It is the process of calculating position/diamensions of element. like time taken to run program.
Repaint -->> It is a process of painting the content pixel by pixel.
 
It is faster then the Reflow method.


DOCUMENT FRAGMENT --->>   
light weight doc object. 
*/

// Best code -->>

let fragment = document.createDocumentFragment();

for(let i = 1; i <= 10; i++) 
{
      let para = document.createElement('p');
      para.textContent = "This is para." + i;

    //   No Reflow and No Repaint for the below line.
      fragment.appendChild(para);
}

// the below line takes 1 reflow and 1 repaint.
document.body.appendChild(fragment);
