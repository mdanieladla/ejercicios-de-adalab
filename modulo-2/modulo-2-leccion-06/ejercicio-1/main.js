'use strict'

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profesion = 'periodista.';

console.log('Mi nombre es ' + adalaber1.name + ', tengo ' + adalaber1.age + ' años y soy ' + adalaber1.profesion); //Mostrarlo solo en la consola.

//Mostrarlo en la página:
const text = document.querySelector('.js_text');

text.innerHTML = 'Mi nombre es ' + adalaber1.name + ', tengo ' + adalaber1.age + ' años y soy ' + adalaber1.profesion;

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.profesion = 'actriz';

console.log(adalaber2.name + ', ' + adalaber2.age + ' años, ' + adalaber2.profesion);

//Mostrarlo en la página:
const text2 = document.querySelector('.js_text2');

text2.innerHTML += ' ' + adalaber2.name + ', ' + adalaber2.age + ' años, ' + adalaber2.profesion;