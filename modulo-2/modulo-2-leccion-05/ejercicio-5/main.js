'use strict';

//Hay que usar el evento keyup

const color = document.body; //document.body -> el body es como el queryselector, pero body coge todo el body de la página y querySelector te selecciona la clase, el elemento...

function press(event){
  if (event.key === 'r') {
  color.classList.add('red');
  color.classList.remove('purple');
  } else if (event.key) {
    color.classList.add('purple');
    color.classList.remove('red');
  }
}
color.addEventListener('keyup', press);