'use strict'

//crear una función que escriba en la consola 10 veces patata.

function writeThis(word) {
    let iteracion;
    if (word === 'Patata') {
        iteracion = 10;
    } else if (word === 'Aguacate') {
        iteracion = 7;
    } else {
        iteracion = 50;
    }
    for (let i = 0; i < iteracion; i++) {
        console.log(word);
    }
}

writeThis('Patata');
writeThis('Aguacate');
writeThis('Pizza');

