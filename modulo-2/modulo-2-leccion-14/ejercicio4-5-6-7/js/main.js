'use strict'

//EJERCICIO 4:
/*
const appearMsg = () => {
    const msg = document.querySelector('.js-msg');
    msg.innerHTML = 'Su sesión ha expirado';
  };
  
  setTimeout(appearMsg, 6000);
*/
//EJERCICIO 5:
//No lo he hecho porque el ejercicio 2 ya lo he parado con el if else.

//EJERCICIO 6:
const stopBtn = document.querySelector('.js-stopBtn');

const continueBtn = document.querySelector('.js-continueBtn');

let counter = 0;
let temp;

const cronometer = () => {
    const time = document.querySelector('.js-cronometer');
    time.innerHTML = counter;
    counter++;
} 

function stopCronometer() {
    clearInterval(temp);
    
}

function continueCronometer() {
    counter++;
}

temp = setInterval(cronometer, 1000);

stopBtn.addEventListener('click', stopCronometer);
continueBtn.addEventListener('click', continueCronometer);
//Me falta la segunda parte de darle al botón de continuar y que siga funcionando el cronómetro.