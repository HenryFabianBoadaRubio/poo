
class persona{
    nombre;
    edad;
    sexo;

    constructor(nombre,edad,sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }
   
    
    
    static esMayorEdad(edad){
        return edad >=18  
    }
    saludar(){
        return `Hola ${this.nombre} y tu edad es ${this.edad}`
    }
}

module.exports=persona;




