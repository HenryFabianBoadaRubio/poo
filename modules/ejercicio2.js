const persona = require('./ejercicio')

class estudiante extends persona{
    carrera;

    constructor(carrera,nombre){
        super(nombre);
        this.carrera = carrera;
    }
    set setCarrera(carrera){
        this.carrera=carrera;
    }

    get getCarrera(){
        return this.carrera;
    }

    estudiar(){
        return `Estudio en ${this.carrera}`
    }
}

module.exports=estudiante;

