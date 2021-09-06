'use strict'

const link1 = document.querySelector('.js-link1');
const link2 = document.querySelector('.js-link2');
const link3 = document.querySelector('.js-link3');

let domRect = link3.getBoundingClientRect();

window.scrollTo(48, 1302); //en la consola funciona.

function handlClickLinks(ev) {
    ev.preventDefault();
    
}

link1.addEventListener('click', handlClickLinks);
link2.addEventListener('click', handlClickLinks);
link3.addEventListener('click', handlClickLinks);