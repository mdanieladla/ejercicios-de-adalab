'use strict'

const link1 = document.querySelector('.js-link1');
const link2 = document.querySelector('.js-link2');
const link3 = document.querySelector('.js-link3');


function handlClickLinks(ev) {
    ev.preventDefault();
    
}

link1.addEventListener('click', handlClickLinks);
link2.addEventListener('click', handlClickLinks);
link3.addEventListener('click', handlClickLinks);
