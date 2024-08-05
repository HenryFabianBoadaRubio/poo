const persona = require('./modules/ejercicio');
const estudiante = require('./modules/ejercicio2');

let persona1 = new persona("Karen");
let estudiante1= new estudiante("ingenieria medica");

console.log(`${persona1.saludar()} ${estudiante1.estudiar()}`);
