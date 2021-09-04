'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

let paragraph = document.querySelector('.js-par');
const btn = document.querySelector('.js-btn');

function handlClickBtn () {
    paragraph.innerHTML = `<ul>
        <li>${inception}</li>
        <li>${theButterFlyEffect}</li>
        <li>${eternalSunshineOfTheSM}</li>
        <li>${blueVelvet}</li>
        <li>${split}</li>
    </ul>`;
}

/*function paintConsole(ev) {
  const paintFilms = ev.currentTarget;
  console.log(paintFilms)
}*/

btn.addEventListener('click', handlClickBtn);
//inception.addEventListener('click', paintConsole);