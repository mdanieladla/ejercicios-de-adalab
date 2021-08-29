'use strict'

function border(boxSizing, width, padding, borderSize) {
    if (boxSizing === true) {
        //console.log('pasa x aqui')
        console.log(`Como es border-box su ancho es ${width} y el ancho total es ${width + padding + borderSize}`);
    } else {
        console.log(`Como es content-box su ancho es ${width} y el ancho total es ${width + padding}`);
    }
    
}

border(false,15,5,12);

//DUDA: porque si pongo let o const size me sale error y no funciona, pero con var si funciona. 