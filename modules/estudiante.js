const persona = require('./persona')

class estudiante extends persona{
    carrera;

    constructor(carrera,nombre){
        super(nombre);
        this.carrera = carrera;
    }
   

    estudiar(){
        return `Estudio en ${this.carrera}`
    }
}

module.exports=estudiante;

