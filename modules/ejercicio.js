
class persona{
    #nombre;
    edad;
    sexo;

    constructor(nombre){
        this.nombre=nombre;
    }
    set setNombre(nombre){
        this.nombre=nombre;
    }
    get getNombre(){
        return this.nombre;
    }

    saludar(){
        return `Hola ${this.nombre}`
    }
}

module.exports=persona;

