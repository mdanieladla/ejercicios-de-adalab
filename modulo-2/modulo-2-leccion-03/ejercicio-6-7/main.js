'use strict';

// Ejercicio 6: reescribir este código con un operador ternario
let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}

//Operador ternario:
avocados ? money / avocadoPrice : avocados;


//EJERCICIO 7:
let ingredient = 'Pollo';

switch (ingredient) {
    case 'Pollo':
    console.log('Filete de pollo con patatas');
    break;
    case 'Merluza':
    console.log('Merluzita en salsa verde');
    break;
    case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
    default:
    console.log('Hoy te toca ayunar');
}
//VM800:5-> Filete de pollo con patatas

let ingredient = 'Merluza';

switch (ingredient) {
    case 'Pollo':
    console.log('Filete de pollo con patatas');
    break;
    case 'Merluza':
    console.log('Merluzita en salsa verde');
    break;
    case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
    default:
    console.log('Hoy te toca ayunar');
}
//VM883:8-> Merluzita en salsa verde

let ingredient = 'Espinacas';

switch (ingredient) {
    case 'Pollo':
    console.log('Filete de pollo con patatas');
    break;
    case 'Merluza':
    console.log('Merluzita en salsa verde');
    break;
    case 'Espinacas':
    console.log('Espinacas rehogadas');
    break;
    default:
    console.log('Hoy te toca ayunar');
}
//VM900:11-> Espinacas rehogadas
