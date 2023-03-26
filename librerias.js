const moment = require("moment");
const colors = require("colors");

const fechaHora = moment ().format("DD/MM/YYY HH:mm:ss")
console.log (`Hoy Es ${fechaHora}`)

console.log('hello'.blue);
console.log(colors.rainbow('Hola Lorena!'));

