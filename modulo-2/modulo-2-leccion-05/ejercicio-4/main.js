'use strict';


//const changeColor = document.querySelector('.js_color');

const changeColor = document.body; //document.body -> el body es como el queryselector, pero body coge todo el body de la página y querySelector te selecciona la clase, el elemento...

//Handler
const windowScroll = window.scrollY;

function colorScroll(){
    if(windowScroll === 50) {
        changeColor.classList.add('red');
    } else if(windowScroll >= 250) {
        changeColor.classList.remove('red');
        changeColor.classList.add('blue');
    }
    //return changeColor;
}

  

//Listener
window.addEventListener('scroll', colorScroll);