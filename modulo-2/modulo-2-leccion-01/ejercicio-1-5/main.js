'use strict';

/* document.querySelector('h1').innerHTML = 'Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente.'; (Ejemplo) */

/*
EJERCICIO 2
const direction = 'calle martinez izquierdo';

direction = 'calle nanclares de oca'; (Da en la cosola de DevTools error porque estamos asignando un valor a una constante que ya tiene un valor)
*/

//EJERCICIO 3:
const paragraph = document.querySelector('.paragraph');

paragraph.innerHTML = paragraph.innerHTML + ' Mundo';


//EJERCICIO 4:
const title = document.querySelector('.title');

title.innerHTML = title.innerHTML + ' Daniela';


//EJERCICIO 5:
const password = document.querySelector('.password');

password.innerHTML = 'Mi contraseña es: **';