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

const titleEl = getEl(".re");
console.log(titleEl)




