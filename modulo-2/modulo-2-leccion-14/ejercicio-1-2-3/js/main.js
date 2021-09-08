'use strict'

//EJERCICIO 1:
/*
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.js-time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);
*/

//EJERCICIO 2:
/* 
let counter = 0;

const incrementAndShowCounter = () => {
  const time = document.querySelector('.js-uvas');
  time.innerHTML = counter;
  if (counter <= 11) {
     counter++; 
  } else if (counter > 12){
      counter = 0;
  }
};

setInterval(incrementAndShowCounter, 1000);
*/

//EJERCICIO 3: falta terminar la parte del minuto
let counter = 0;

const incrementAndShowCounter = () => {
    if (counter <= 59) {
     const time = document.querySelector('.js-blog');
    time.innerHTML = `Escrito hace ${counter} segundos`;
    counter++;   
    } else if  (counter >= 60) {
    let counter = 0;
    const time = document.querySelector('.js-blog');
    time.innerHTML = `Escrito hace ${counter} minutos`;
    counter++;
    }
}


setInterval(incrementAndShowCounter, 1000);
