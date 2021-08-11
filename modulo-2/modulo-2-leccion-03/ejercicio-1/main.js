'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

//let userAvatar = '';//como '' es false, por lo que se me ejecuta la imagen por defecto. 
//'http://www.fillmurray.com/300/300' si dejo la imagen en img.src se me ejecutaria la primera imagen porque es true; 

const img = document.querySelector('.user__avatar');

img.src = userAvatar;

//img.src = `${userAvatar || DEFAULT_AVATAR}`; //si es true se queda con la primera opcion, si es false se ejecuta la segunda


//Como hacer este ejercicio con un IF
// if(userAvatar=== '') {
//    img.src=DEFAULT_AVATAR;
// } else {
//    img.src=userAvatar;
// }