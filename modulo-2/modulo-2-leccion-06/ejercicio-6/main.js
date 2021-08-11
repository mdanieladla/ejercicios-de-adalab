'use strict'

basketPear = {
    max: 10,
    min: 1,
    actual: 5,
    init: 8,
    add: function() {
        this.actual = this.actual +1;
        return this.actual;
    },
    subtract: function() {
        this.actual = this.actual -1;
        return this.actual;
    }
};


// restablecer el numero de peras al valor inicial ->
// llamamos al objeto con la propiedad y le asignamos el valor incial ->
// basketPear.actual = 5;