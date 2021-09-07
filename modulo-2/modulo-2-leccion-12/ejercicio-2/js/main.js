'use strict'

const madrid = document.querySelector('.js-madrid');

const newYork = document.querySelector('.js-new-york');

const paris = document.querySelector('.js-paris');

const select = document.querySelector('.js-select');



function chooseDestiny() {
    console.log(select.value);
    if( select.value==='Madrid') {
        madrid.setAttribute('src', './images/madrid.jpg');
        newYork.src = './images/madrid3.jpg'; //también se puede hacer con .src
        paris.setAttribute('src','./images/madrid2.jpg');
    } else if ( select.value === 'Nueva York') {
        madrid.setAttribute('src','./images/newyork3.jpg');
        paris.setAttribute('src','./images/newyork2.jpg');
        newYork.setAttribute('src', './images/new-york.jpg');
    } else {
        madrid.setAttribute('src', './images/paris2.jpg');
        newYork.setAttribute('src','./images/paris3.jpg');
        paris.setAttribute('src','./images/paris.jpg');
    }
    
    
}

select.addEventListener('change', chooseDestiny);

