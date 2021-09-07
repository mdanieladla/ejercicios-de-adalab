'use strict'

const list = document.querySelector('.js-list');

const numbers = [1, 2, 3];


for (const number of numbers) {
//forma antigua de hacerlo: 
    //list.innerHTML += `<li>${number}</li>`
   
//forma de hacerlo según esta lección
//Creamos nuevo elemento con createElement();
    const newItem = document.createElement('li');
    
//Añadimos el li creado a la lista list;
    list.appendChild(newItem);
    
    const newContent = document.createTextNode(number);
    
    newItem.appendChild(newContent);
}