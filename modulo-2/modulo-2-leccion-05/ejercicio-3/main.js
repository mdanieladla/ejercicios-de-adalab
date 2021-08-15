'use strict';

//Elemento HTML
const par = document.querySelector('.js_paragraph');


//Handler
function addPar() {
    par.innerHTML += '<p>Lorem ipsum lorem ipsum LOREM IPSUM</p>';
    return par;
}


//Listener sobre el elemento con tipo de evento y handler
par.addEventListener('mouseout', addPar);