'use strict';

//Elementos de la página
const inputNombre = document.querySelector('.js_name');
const button = document.querySelector('.js_button')

//inputNombre.value;

const cogerNombre = inputNombre.value;

//Handler
function sayHi() {
    console.log(`Hola ${cogerNombre}`);
}

button.addEventListener('click', sayHi);


