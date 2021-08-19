'use strict'

//EJERCICIO 1:
 
function mult(a, b) {
    return a*b;
 }
mult(3,4);

/* EJERCICIO 1 EN ARROW FUNCTIONS

const mult = (a,b) => {
    return a*b;
}

mult(11,11)*/
//cuando llamo a la const en la consola me da el resultado de multiplicar 11 * 11 = 121


//EJERCICIO 2:

function media(a, b, c, d) {
    const media = (a + b + c + d) / 4
    return media;  
}

media(1,2,3,4);

/* EJERCICIO 2 EN ARROW FUNCTIONS
const media = (a,b,c,d) => {
    return (a + b + c + d) / 4;
}

media(5,5,5,5);*/
//OJO no dividir 2 veces! No poner media(1,2,3,4) en el return porque al poner otra vez media estamos llamando a la función dentro de la función y da error!


// EJERCICIO 3:

function precio(a) {
    const precio = a;
    return precio;
}

const precioo = precio(10);
const IVA = 2.1;
const total = precioo + IVA;


console.log(`El precio sin IVA es:  ${precioo}, IVA: 2,1 y Total: ${total}`);
// 2,1 ¡ojo! -> la coma tiene que ser un . no una ,


// EJERCICIO 4:

function parImpar(a) {
     return a;
  }   
   
const imparPar = parImpar(10); 
  if(imparPar % 2 === 0) {
        console.log('True');
    } else {
        console.log('False');
    }


//Ejemplo casa: meter x gramos pastel y que sepa en cuantas porciones dividir el pastel. 1  porcion son 70g

/*function pastel(gramos) {
    return gramos / 70;
}*/


