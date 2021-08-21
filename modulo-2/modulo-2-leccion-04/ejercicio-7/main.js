'use strict'

function getEl(selector){
    const dqs = document.querySelector(selector);
    if (dqs === null) {
        console.error('No existe ningún elemento con clase, id o tag llamado red')
    } else {
        console.log(dqs)
    }
    return dqs;
}

let titleEl = getEl(".par");

console.log(titleEl.innerHTML);

const number = parseInt(titleEl.innerHTML);

function parImpar(a) {
    if(a % 2 === 0) {
       console.log('es par');
       return true;
    } else {
        console.log('es impar');
        return false;
    } 
  }   
   
  parImpar(number);