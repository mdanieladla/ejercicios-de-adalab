'use strict'

const adalabers = [
    {
        name: 'María',
        age: 29,
        position: 'Diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        position: 'Ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        position: 'Periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        position: 'Actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        position: 'Diseñadora'
    },

]

//Función que devuelve el número de adalabers que hay en el listado.
function countAdalabers() {
    adalabers.length;
    return adalabers.length;
}

countAdalabers();

//Función que devuelva la media de edad de listado.
function averageAge() {
    let sum = 0;
    for (const adalaber of adalabers) {
        //console.log(`La edad es ${adalaber.age}`);
        sum += adalaber.age;
    }
    let media = sum / adalabers.length;
    console.log(`La edad media es ${media}`);
}

//Función que devuelva el nombre de la adalaber más joven.
function theYoungest() {
    // Math.min.apply(Math, adalabers.map(function(o) { return o.age; })) -> Ejemplo de stackoverflow
    let youngestAge = adalabers[0].age;
    for (const item of adalabers) {
        if(item.age<youngestAge){
            youngestAge = item.age;
        }
    }
    return youngestAge;
}

theYoungest();

//Función que devuelva el número de adalabers que son diseñadoras.
function countDesigners() {
    let result;
    result = adalabers.filter(word => word.position === 'Diseñadora');
    return result;
}

countDesigners();