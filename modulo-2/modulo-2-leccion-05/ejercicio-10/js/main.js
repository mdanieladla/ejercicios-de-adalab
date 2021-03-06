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

function printConsole(ev) {
  console.log(ev.currentTarget.innerHTML);
}

inception.addEventListener('click', printConsole);
theButterFlyEffect.addEventListener('click', printConsole);
eternalSunshineOfTheSM.addEventListener('click', printConsole);
blueVelvet.addEventListener('click', printConsole);
split.addEventListener('click', printConsole);

}

btn.addEventListener('click', handlClickBtn);
