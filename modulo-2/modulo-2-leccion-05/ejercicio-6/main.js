'use strict'

//Elementos de la página
const inputText = document.querySelector('.js_input');

const parRsult = document.querySelector('.js_par');

//Funciones
/**
 * Usa el input con la clase js_input del HTML para recoger el valor
 * del texto "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del texto
 */

function cogerInput (ev) {
  parRsult.innerHTML = ev.currentTarget.value;
  console.log(ev.currentTarget.value);
}

/**
 * Escribe en el documento HTML el texto del parámetro en el elemento con la clase
 * js_par (para mostrar el resultado del ejercicio).
 */

 
inputText.addEventListener('keyup', cogerInput);