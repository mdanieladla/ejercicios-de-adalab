'use strict'

const btn = document.querySelector('.js-btn');
const btn2 = document.querySelector('.js-btn2');

function handleToggleBtn(ev) {
    //btn.classList.toggle('btn'); --> Ejercicio 1
    const bothBtn = ev.currentTarget;
    bothBtn.classList.toggle('btn');

}

btn.addEventListener('click', handleToggleBtn);
btn2.addEventListener('click', handleToggleBtn);

