'use strict'

const lostNumbers = [4, 8, 15, 16, 23, 42];

//Recorrer el array lostNumbers
lostNumbers.forEach(function(lostNumbers) {
    console.log(lostNumbers);
})

//Buscar cuales son los números pares del array lostNumbers
const arrPar = lostNumbers.filter(x => x % 2 === 0);
console.log(arrPar);

//Metemos los números pares en un nuevo array
arrPar; 

//Array que contenga los números múltiplos de 3
const arr3 = lostNumbers.filter(x => x % 3 === 0);
console.log(arr3);

//Concatenar los 2 arrays de par y multiplos de 3
const result = arrPar.concat(arr3);
console.log(result);