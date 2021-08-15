'use strict';


//const changeColor = document.querySelector('.js_color');
const changeColor = document.body;
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