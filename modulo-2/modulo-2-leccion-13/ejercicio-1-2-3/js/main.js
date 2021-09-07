'use strict'

//EJERCICIO 1:
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark + 1);

console.log(inflatedMarks);

//EJERCICIO 2:
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const hellos = names.map(name => 'Bienvenida ' + name);

console.log(hellos);

//EJERCICIO 3:
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];


let usersPremium = users.map(function(element){
  if (element.isPremium === true) {
    console.log(`Bienvenida ${element.name}. Gracias por confiar en nosotros`);
  } else {
    console.log(`Bienvenida ${element.name}`)
  }
})

