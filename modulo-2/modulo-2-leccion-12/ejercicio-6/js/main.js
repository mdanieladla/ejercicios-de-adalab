'use strict'

//Crear un elemento nuevo, un párrafo
const paragraph = document.createElement('p');

//Crear contenido.
const phrase = document.createTextNode('He aprendido bien cómo funcionan los bucles');

//Añadir el contenido a nuestro párrafo.
paragraph.appendChild(phrase);

//Añadir elementos al DOM
const body = document.querySelector('.js-body');
body.appendChild(paragraph);

//1.Repetirlo 100 veces.
for (let i = 1; i < 100; i++) {
   body.appendChild(paragraph.cloneNode(true)); //appendChild does not insert copies. You can use cloneNode to make copies.
}

//2.Un combo por frase
const combo = document.createElement('select');

const option = document.createElement('option');

const select = document.querySelector('.js-form');
 
combo.appendChild(option);
