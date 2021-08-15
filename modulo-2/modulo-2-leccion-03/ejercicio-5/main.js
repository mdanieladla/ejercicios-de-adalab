'use strict';

/*const rainbow = document.querySelector('div').getAttribute('class');

let elemt = document.querySelector('.warning');

elemt.style.color = 'yellow';
elemt.style.backgroundColor = 'red';

// Si contiene la clase success
if (rainbow === 'warning') {
    document.querySelector('div').innerHTML = elemt.style.color;
} else if (error === 'error') {
  document.querySelector('div').innerHTML = 'hola';
} else {
    console.log(success);
  }
*/

//CLASE RESOLUCION
const box = document.querySelector('.js_box');

const title = document.querySelector('h1');

const paragraph = document.querySelector('p');

if(box.classList.contains('success')){
  title.innerHTML = 'CORRECTO';
  paragraph.innerHTML = 'Los datos son correctos'
} else if (box.classList.contains('error')){
  title.innerHTML = 'ERROR';
paragraph.innerHTML = 'ERROR';
} else if (box.classList.contains('warning')){
  title.innerHTML = 'AVISO';
  paragraph.innerHTML = 'CUIDADO';
}
