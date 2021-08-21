'use strict'

function getEl(selector){
    const dqs = document.querySelector(selector);
    if (dqs === null) {
        console.error('No existe ningún elemento con clase, id o tag llamado red')
    } else {
        console.log(dqs)
    }
}

const titleEl = getEl(".red");

//EJERCICIOS 5 ¿?


