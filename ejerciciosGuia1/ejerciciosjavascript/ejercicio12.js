export default class Persona  {
    constructor (nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      
    }
}

var profe = 'carlitos';
export default class Estudiante extends Persona{
     
    constructor(nombre,edad){
       super(nombre,edad);
    }
    estudiando(){
        return   + setprofesor();
    }
    setprofesor(profe){
        return "Estudiando con: " + profe;
    }

    
}

var a = new Estudiante();
a.nombre='Carlos';
a.edad =38;
a.estudiando='Raul';

console.log(a);

// a.nombre('Roberto');
// console.log(a);
