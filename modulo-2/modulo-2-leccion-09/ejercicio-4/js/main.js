'use strict'

const list = document.querySelector('.js-list');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];

// Esto es para pintar la primera tarea ->
// list.innerHTML = tasks[0].name; 

//Esto es para pintar todas las tareas que tenemos ->
for (const task of tasks) {
  const html = `<li>${task.name}</li>`;
  list.innerHTML += html;
}
