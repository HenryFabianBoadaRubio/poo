const persona = require('./modules/persona');
const estudiante = require('./modules/estudiante');

let persona1 = new persona("Karen", 20, "femenino");
let estudiante1= new estudiante("ingenieria medica");

// console.log(`${persona1.saludar()} ${estudiante1.estudiar()}`);



console.log(persona.esMayorEdad(persona1.edad));


