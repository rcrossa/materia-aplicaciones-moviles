class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Estudiante extends Persona{
     
  constructor(nombre,edad){
     super(nombre,edad);
  }
  estudiando(){
      return  "Estudiando con: "+ this.profe;
  }
  setprofesor(profe){
      this.profe = profe;
  }
}



// ---------------------------------

class Profesor extends Persona {
  
  constructor(nombre,edad) {
   super(nombre,edad);
   this.estudiantes=[];
  }
  enseñando() {
    return  estudiantes;
  }
  addEstudiante(estudiante) {
    this.estudiantes.push(estudiante);
    estudiante.setprofesor(this.nombre);
  }
  
}

var estudiante1 = new Estudiante("Alex",15);
var estudiante2 = new Estudiante("Juan",16);
var estudiante3 = new Estudiante("Ramon",17);
console.log(estudiante1);
var profesor1 = new Profesor('Roberto',40);
profesor1.addEstudiante(estudiante1);
console.log(profesor1);

// console.log(estudiantes);
