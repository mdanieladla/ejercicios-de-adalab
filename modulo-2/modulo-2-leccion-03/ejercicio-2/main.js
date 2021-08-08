'use strict';

let controlAccess = 'Daniela';

if (controlAccess === 'Daniela') {
    console.log('Bienvenida, Daniela'); 
} else {
    console.log('Lo siento pero el usuario introducido no es valido');
}

//El navegador me contesta con 'bienvenida, daniela'; si le cambio el nombre a la variable, me contesta con 'lo siento.....' :

controlAccess = 'Jorge';

if (controlAccess === 'Daniela') {
    console.log('Bienvenida, Daniela'); 
} else {
    console.log('Lo siento pero el usuario introducido no es valido');
}


