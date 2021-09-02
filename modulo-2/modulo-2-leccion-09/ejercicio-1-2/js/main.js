'use strict'

//Ejercicio 1:
//*//
let arr = [];

function get100Numbers(){
    for(let i = 1; i <=100; i++) {
        arr.push(i);
        console.log(i)
    }
}
//*//

//Ejercicio 2:
//*//
function getReversed100Numbers () {
    arr.reverse();
    return arr;
    //hacer un for para llamar
}
//*//