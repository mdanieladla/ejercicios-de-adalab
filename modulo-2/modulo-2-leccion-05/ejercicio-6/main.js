'use strict'

//Elementos de la página
const inputText = document.querySelector('.js_input');

const parResult = document.querySelector('.js_par');

//Funciones
/**
 * Usa el input con la clase js_input del HTML para recoger el valor
 * del texto "tecleado" por la usuaria.
 * 
 * @returns Valor que contiene en <input> del texto
 */

function cogerInput () {
    const text = inputText.value
    return text;
}

/**
 * Escribe en el documento HTML el texto del parámetro en el elemento con la clase
 * js_par (para mostrar el resultado del ejercicio).
 */

 function escribirTexto() {
    parResult.innerHTML = text;
  }
  
parResult.addEventListener('change', cogerInput);