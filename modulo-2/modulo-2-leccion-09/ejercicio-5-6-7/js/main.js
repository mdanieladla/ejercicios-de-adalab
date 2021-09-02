'use strict'

//Ejercicio 5 
const triangle = ['▲'];

const triangle2 = ['▲▲'];

const triangle3 = ['▲▲▲'];
 
const triangle4 = ['▲▲▲▲'];

const triangle5 = ['▲▲▲▲▲'];

const rsult = triangle.concat(triangle2, triangle3, triangle4, triangle5);
   
console.log(rsult);

//Ejercicio 6:

rsult.splice(0, 0, '★');

rsult.splice(6, 6, '|');

/*Ejercicio 7:
const triangl = ['▲'];

const triangl2 = ['▲▲▲'];

const triangl3 = ['▲▲▲▲▲'];
 
const triangl4 = ['▲▲▲▲▲▲▲'];

const triangl5 = ['▲▲▲▲▲▲▲▲'];

const result = triangl.concat(triangl2, triangl3, triangl4, triangl5);
   
console.log(result);

//Ejercicio 6:

result.splice(0, 0, '★');

result.splice(6, 6, '|');*/