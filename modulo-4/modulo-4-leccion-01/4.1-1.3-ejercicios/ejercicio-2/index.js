const operations = require('./math');

const firstNumer = 1;
const secondNumber = 3;

const result = operations.add(firstNumer, secondNumber);

console.log(`La suma es: ${result} `);

const number1 = 10;
const number2 = 3;

const result2 = operations.rest(number1, number2);

console.log(`La resta es: ${result2}`);
