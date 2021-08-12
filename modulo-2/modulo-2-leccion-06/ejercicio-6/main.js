'use strict'

pearBasket = {
    max: 10,
    min: 1,
    current: 5,
    init: 8,
    add: function() {
        this.current = this.current +1;
        return this.actual;
    },
    subtract: function() {
        this.current = this.current -1;
        return this.current;
    }
};


// restablecer el numero de peras al valor inicial ->
// llamamos al objeto con la propiedad y le asignamos el valor incial ->
// pearBasket.current = 5;