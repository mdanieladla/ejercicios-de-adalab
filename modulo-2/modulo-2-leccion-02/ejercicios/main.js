'use strict';

const superWave = document.querySelector('.super-wave');

// EJERCICIO 2:
//Aquí empieza el ejercicio hecho por mi: 

const destacar = document.querySelector('.super-wave');

destacar.classList.add('destaca');

/* EJERCICIO 3:
let kiwi = 5;

let pera = 2;

let uvas = 4;

let resultado = kiwi * 2 + pera * 3 + uvas / 2;

(resultado 18).*/

/* EJERCICIO 4:
let total = 126 / 9;

total; (=> 14)

let ana = total + 2;

ana; (=>16) */

/* EJERCICIO 5:
let edad = 23;

let horasAño = 365 * 24;

horasAño; (=>8760)

let horasVividas = horasAño * 23;

horasVividas; (=>201480) */


// EJERCICIO 6:
const compi = "Tania";

compi;

console.log('Hola ' + compi);
 
// EJERCICIO 7: interpolación de cadenas.
console.log(`Hola ${compi}.`);

// EJERCICIO 8:
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dog1 = document.querySelector('.dog1');

dog1.innerHTML = `<img src="${firstDogImage}"/> ${firstDogName}`;

const dog2 = document.querySelector('.dog2');

dog2.innerHTML = `<img src="${secondDogImage}"/> ${secondDogName}`;

const dog3 = document.querySelector('.dog3');

//const content3 = `${thirdDogImage} ${thirdDogName}`; esta linea da el mismo resultado que hacerlo como lo he hecho debajo en el linea 79.

dog3.innerHTML = `<img src="${thirdDogImage}"/> ${thirdDogName}`;

// EJERCICIO 9: cuantas letras tiene mi nombre.
const name = "María Daniela Darnea";

console.log('El nombre de mi compañera es ' + `${name}` + ' y está compuesto por ' + `${name.length}` + ' caracteres');

// EJERCICIO 10:
const edad = document.querySelector('.age');

console.log(edad.innerHTML);

const horasAño = 365 * 24;

const horasVividas = horasAño * parseInt(edad.innerHTML);

console.log(`Has vivido  ${horasVividas} horas de vida`);

