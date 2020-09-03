class Persona  {
    constructor (nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }


}

class Estudiante extends Persona{
    constructor(nombre,edad,materia1){
       super(nombre,edad);
       this.materia=materia1;
    }
    get estudia(){
        return this.profesor();
    }
    profesor(){
        return 'Nombre: ' + this.nombre + '\nEdad: ' + this.edad + '\nMateria: ' + this.materia;
    }

    
}
var a = new Estudiante('Carlos',30,'historia');
console.log(a.estudia);
// const estudiante1 = new Estudiante('Carlos',30,'carlitos');

// console.log(estudiante1.estudia);