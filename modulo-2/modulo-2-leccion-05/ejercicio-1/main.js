'use strict';

//elemento de HTML.
const button = document.querySelector('.js__button');

const text = document.querySelector('.js__text');

//handler
function addText() {
    text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
    return text;
}

//listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', addText);