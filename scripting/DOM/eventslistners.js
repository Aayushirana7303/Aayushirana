// Events --> just like an annuncement (like window pr click kiya, double click, koi bhi key press, actions,scroll)

// Event target --> entity--1. event receive , 
// 2. Event listner(mtlb actions like (when we click on a button it perform a task like play a video)).

// Syntax for add or remove event listner in html page
// <event-target>.addEventListner(<event-type>, <function -> action>)

// function ChangeText() {
// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Aayushi";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', ChangeText);
// fpara.removeEventListener('click', ChangeText);
// add or remove same function name k liye lie krte h

// moniterEvents(document); --> used in console window

// phase of Events --
// 1. capturing phase--> vo phase jha hm apne event listner ke pass jate h.
// 2. At- targate phase --> vo phase jb hm apne event pr hote h.
// 3. Bubbling phase --> jb hm vaps apne root element pr vaps jate h. 

// addEventListner() by default bubbling phase m hote h. --> agr hme ise capturing phase 
// m remove krna h to ek value hoti h jo hme true pass krni hoti h vo value h usecapture.



// ---> Event object 

function ChangeText(event) {
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Hello Aayushi";
    }
    
    let fpara = document.getElementById('fpara');
    fpara.addEventListener('click', ChangeText);

    