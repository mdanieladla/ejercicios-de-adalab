'use strict'

const button = document.querySelector('.js-btn');

const body = document.querySelector('.container');

const emoji = document.querySelector('.js-emoji');

function randomNumber () {
    const randomNumber = Math.round(Math.random() * 100);
    return randomNumber;
}

function paintBackground(){
  const par = randomNumber() % 2;   
    if (par === 0) {
        body.classList.add('containerHappy');
        body.classList.remove('containerSad');
    } else {
        body.classList.add('containerSad');
        body.classList.remove('containerHappy');
    }
}

button.addEventListener('click', paintBackground);

//Falta segunda parte.