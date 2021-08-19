'use strict'
//Los años bisiestos son divisibles enteros por 4, entonces si el año que ponemos / 4 da 0, es un año bisiesto, si no da 0 no es bisiesto.


let year1 =  2048; 


    
if (year1 % 4 === 0) {
    console.log('Es un año bisiesto')
} else if(year1 % 4 === 1 ) {
     console.log(`El siguiente año bisiesto es en ${year1 + 3}`)
} else if(year1 % 4 === 2 ) {
    console.log(`El siguiente año bisiesto es en ${year1 + 2}`)
} else if(year1 % 4 === 3 ) {
    console.log(`El siguiente año bisiesto es en ${year1 + 1}`)
}



//Hacer que en la consola salga cual es el siguiente año bisiesto.
