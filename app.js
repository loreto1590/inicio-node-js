//const calculadora = require("./calculadora")
//const suma =require("./operaciones/suma")
//const resta=require("./operaciones/resta")
//const multiplicacion=require("./operaciones/multiplicacion")
//const division=require("./operaciones/division")

const {suma, resta, multiplicacion, division}=require("./calculadora")

const num1 = 15;
const num2 = 3;

const resultadoSuma = suma (num1, num2);
const resultadoResta = resta (num1, num2);
const resultadoMultiplicacion = multiplicacion (num1, num2);
const resultadodivision = division (num1, num2);


console.log( `La suma de ${num1} y ${num2} es: ${resultadoSuma}`);
console.log( `La resta de ${num1} y ${num2} es: ${resultadoResta}`);
console.log( `La multiplicacion de ${num1} y ${num2} es: ${resultadoMultiplicacion}`);
console.log( `La division de ${num1} y ${num2} es: ${resultadodivision}`);