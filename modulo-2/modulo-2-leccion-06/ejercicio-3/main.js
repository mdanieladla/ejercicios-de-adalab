'use strict'

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.profesion = 'periodista';
adalaber1.run = phrase => `Yo ${phrase}`; //esta linea es del ejercicio 2
adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros.`; //esta linea es del ejercicio 2
adalaber1.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profesion;
}
console.log(adalaber1.showBio());

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.profesion = 'actriz';
adalaber2.showBio = function() {
    return 'Mi nombre es ' + this.name + ', tengo ' + this.age + ' años y soy ' + this.profesion;
}
console.log(adalaber2.showBio());