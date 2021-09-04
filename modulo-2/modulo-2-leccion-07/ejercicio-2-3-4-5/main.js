'use strict'

// EJERCICIO 2:

/*for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
}
*/


//EJERCICIO 3:
let acc = 0;

for (let i = 0; i < 10; i++) {
    acc = acc + 2;
    console.log(`El resultado es: ${acc}`);
}


//EJERCICIO 4:
let moon = 2017;

for (let i = 0; i < 15; i++) {
    moon = moon + 3;
    console.log(`Las próximas lunas del cazador serán en: ${moon}`);
}


//EJERCICIO 5:
let numbers = [5, 5, 5, 5, 5]

let accumulator = 0;
for ( let i = 0; i < numbers.length; i++) {
    accumulator += numbers[i];
}
let media = accumulator / 5;
console.log(`La media es: ${media} `);

//Cuando hay que iterar sobre un array hay que ponerle en el st.2 del for la longitud del array (length), en este caso -> numbers.length.

//**Apartado b)**//
let numbers = [5, 5, 5, 5, 5, 5]

let accumulator = 0;
for ( let i = 0; i < numbers.length; i++) {
    accumulator += numbers[i];
}
let media = accumulator / 6;
console.log(`La media es: ${media} `);

// **Apartado c)**//
const array1 = [10,10,10,10];

function average(numbers) {
    let accumulator = 0;
    for ( let i = 0; i < numbers.length; i++) {
        accumulator += numbers[i];
    } 
    let media = accumulator / numbers.length;
    return media;
}
average(array1);