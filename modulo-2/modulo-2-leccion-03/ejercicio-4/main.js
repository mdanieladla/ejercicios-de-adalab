'use strict';

//EJEMPLO
/*const age = 35;

if (age > 30) {
  console.log('Tienes más de 30 años'); 
} else if (age >= 20) {
  console.log('Tienes entre 20 y 30 años'); 
} else if (age >= 10) {
  console.log('Tienes entre 10 y 19 años'); 
} else {
  console.log('Eres un niño entre 0 y 9 años'); 
}*/


let edadPerruna = 5; 

const primerAño = 15;

const segundoAño = 15 + 9;

const tercerAdelante = (edadPerruna - 2) * 5; //edadPerruna - 2 = 3 * 5 + 24

const terceroAdelante = tercerAdelante + segundoAño;

 if (edadPerruna === 1) {
    console.log('Tu perro tiene 15 años');
 } else if (edadPerruna === 2) {
    console.log(`Tu perro tiene ${segundoAño} años`);
 } else {
    console.log(`Tu perro tiene ${terceroAdelante} años`);
 } 

 //No ponerlo en backtick porquelo lo convierte en string y me lo concatena.. 