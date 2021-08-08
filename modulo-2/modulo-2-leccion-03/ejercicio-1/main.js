'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
//let userAvatar = 'http://www.fillmurray.com/300/300';

let userAvatar = null; //como null es false se me ejecuta la imagen por defecto

const img = document.querySelector('.user__avatar');

img.src = 'http://www.fillmurray.com/300/300';

//let userAvatar = ''; -> para hacer que no sea vea ningún contenido dentro de la imagen.

//img.innerHTML = userAvatar;

//img.innerHTML = `${DEFAULT_AVATAR || userAvatar}`;

img.src = `${userAvatar || DEFAULT_AVATAR}`; //si es true se queda con la primera opcion, si es false se ejecuta la segunda