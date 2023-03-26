const calculadora = require("./calculadora")

const num1 = 10;
const num2 = 3;

const resultadoSuma = calculadora.suma (num1, num2);
const resultadoResta = calculadora.resta (num1, num2);


console.log( `La suma de ${num1} y ${num2} es: ${resultadoSuma}`);
console.log( `La resta de ${num1} y ${num2} es: ${resultadoResta}`);